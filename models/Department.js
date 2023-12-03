import mongoose from 'mongoose'

const departmentSchema = mongoose.Schema({
    departmentName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    contactInformation:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Department = mongoose.model('Department',departmentSchema)

export default Department