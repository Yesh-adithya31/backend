import mongoose from 'mongoose'

const complaintCategorySchema = mongoose.Schema({
    categoryName:{
        type: String,
        required: true
    },
})

const ComplaintCategory = mongoose.model('ComplaintCategory',complaintCategorySchema)

export default ComplaintCategory