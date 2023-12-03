import mongoose from 'mongoose'

const optSchema = mongoose.Schema({
    otp:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Complainer'
    },
},{
    timestamps: true
})

const OTP = mongoose.model('OTP',optSchema)

export default OTP