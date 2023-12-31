// import jwt from 'jsonwebtoken'
// import asyncHandler from 'express-async-handler'
// import User from '../models/userModel.js'

// const protect = asyncHandler(async (req, res, next) => {
//   let token

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//       try {
//           token = req.headers.authorization.split(' ')[1]

//           const decoded = jwt.verify(token, process.env.JWT_SECRET)
          
//           req.user = await User.findById(decoded.id).select('-password') 

//           next() 
//       } catch (error) {
//           console.error(error)
//           res.status(401)
//           throw new Error('Not authrized, token failed.')
//       }
//   }

//   if (!token) {
//     res.status(401)
//     throw new Error('Not authorized,no token')
//   }

// })

// const admin = (req,res,next)=> {
//   if(req.user && req.user.isAdmin){
//     next()
//   }else{
//     res.status(401)
//     throw new Error('Not authorized as an admin')
//   }
// }

// export { protect, admin }


import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import SystemUser from '../models/SystemUser.js';
import Complainer from '../models/Complainer.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Check if the user exists in either User or AdminUser model
      let user = await Complainer.findById(decoded.id).select('-password');
      if (!user) {
        user = await SystemUser.findById(decoded.id).select('-password');
      }

      if (!user) {
        throw new Error('User not found');
      }

      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed.');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const admin = asyncHandler(async (req, res, next) => {
  try {
    // Check if the user exists and is an admin in the AdminUser model
    const adminUser = await SystemUser.findById(req.user._id).select('-password');

    if (adminUser) {
      next(); // User is an admin, proceed to next middleware
    } else {
      res.status(401);
      throw new Error('Not authorized as an admin');
    }
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
});

export { protect, admin };
