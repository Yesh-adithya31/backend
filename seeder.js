import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'
import SystemUser from './models/SystemUser.js'
import Complainer from './models/Complainer.js'
import complainer from './data/compliner.js'
import ComplaintCategory from './models/ComplaintCategory.js'
import categories from './data/categories.js'
import Department from './models/Department.js'
import departments from './data/department.js'
import GroupPermission from './models/GroupPermission.js'
import permissions from './data/permissions.js'


dotenv.config()

connectDB()


const importNewData = async () => {
    try {
        await Complainer.deleteMany()
        await ComplaintCategory.deleteMany()
        await GroupPermission.deleteMany()
        await Department.deleteMany()

        await Complainer.insertMany(complainer)
        await ComplaintCategory.insertMany(categories)
        await GroupPermission.insertMany(permissions)
        await Department.insertMany(departments)

        console.log('Data Imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`ERROR: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await Complainer.deleteMany()
        await ComplaintCategory.deleteMany()
        await Complainer.deleteMany()

        console.log('Data Destroyed'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`ERROR: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importNewData()
}