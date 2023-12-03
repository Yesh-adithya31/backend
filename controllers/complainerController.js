import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Complainer from '../models/Complainer.js'
import SystemUser from '../models/SystemUser.js'

// @desc Auth Complainer & get token
// @route POST /api/complainers/login
// @access Public
const authComplainer = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await Complainer.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      NIC: user.NIC,
      address: user.address,
      phoneNumber: user.phoneNumber,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc Register a new User
// @route POST /api/complainers
// @access Public
const registerComplainer = asyncHandler(async (req, res) => {
  const { firstName, lastName, NIC, address, phoneNumber, email, password } = req.body

  const userExists = await Complainer.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists.')
  }

  const user = await Complainer.create({
    firstName, lastName, NIC, address, phoneNumber, email, password 
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      NIC: user.NIC,
      address: user.address,
      phoneNumber: user.phoneNumber,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('User not found.')
  }
})

// @desc GET user profile
// @route GET /api/complainers/profile
// @access private
const getComplainerProfile = asyncHandler(async (req, res) => {
  const user = await Complainer.findById(req.user._id)

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      NIC: user.NIC,
      address: user.address,
      phoneNumber: user.phoneNumber,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('User not Found')
  }
})

// @desc UPDATE user profile
// @route PUT /api/complainers/profile
// @access private
const updateComplainerProfile = asyncHandler(async (req, res) => {
  const user = await Complainer.findById(req.user._id)
  
  if (user) {
    user.firstName = req.body.firstName || user.firstName
    user.lastName = req.body.lastName || user.lastName
    user.NIC = req.body.NIC || user.NIC
    user.address = req.body.address || user.address
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }
    
    const updatedUser = await user.save()
    
    res.status(201).json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      NIC: updatedUser.NIC,
      address: updatedUser.address,
      phoneNumber: updatedUser.phoneNumber,
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not Found')
  }
})

// @desc DELETE complainers
// @route GET /api/complainers/:id
// @access private/Complainer
const deleteComplainer = asyncHandler(async (req, res) => {
  const user = await Complainer.findById(req.params.id)
  if (user) {
    await user.remove()
    res.status(201).json('You has been Removed your profile successfully')
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc Auth Complainer & get token
// @route POST /api/systemusers/login
// @access Public
const authSystemUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await SystemUser.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      userName: user.firstName,
      email: user.email,
      department: user.department,
      role: user.role,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc Register a new User
// @route POST /api/systemusers
// @access Public
const registerSystemUser = asyncHandler(async (req, res) => {
  const { userName, email, password, department, role } = req.body

  const userExists = await SystemUser.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists.')
  }

  const user = await SystemUser.create({
    userName, email, password, department, role
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      department: user.department,
      role: user.role,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('User not found.')
  }
})

// @desc GET all complainers
// @route GET /api/complainers
// @access private/Admin
const getComplainers = asyncHandler(async (req, res) => {
  const users = await Complainer.find({})
  res.status(201).json(users)
})

// @desc GET all SystemUser
// @route GET /api/systemusers
// @access private/Admin
const getSystemUsers = asyncHandler(async (req, res) => {
  const users = await SystemUser.find({})
  res.status(201).json(users)
})

// @desc UPDATE complainer
// @route PUT /api/systemusers/:id
// @access private/Admin
const updateSystemUser = asyncHandler(async (req, res) => {
  const user = await SystemUser.findById(req.params.id)

  if (user) {
    user.userName = req.body.userName || user.userName
    user.email = req.body.email || user.email

    const updatedUser = await user.save()

    res.status(201).json({
      _id: updatedUser._id,
      userName: updatedUser.userName,
      email: updatedUser.email
    })
  } else {
    res.status(404)
    throw new Error('User not Found')
  }
})

export {
  authComplainer,
  registerComplainer,
  getComplainerProfile,
  updateComplainerProfile,
  deleteComplainer,
  authSystemUser,
  registerSystemUser,
  getComplainers,
  updateSystemUser
}