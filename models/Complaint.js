import mongoose from 'mongoose'

const complaintSchema = mongoose.Schema({
    categoryName:{
        type: String,
        required: true
    },
    complaintSubject:{
        type: String,
        required: true
    },
    complaintText:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    attachment:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    targetDepartments:[
        {
            departmentName:{type : String, required: true},
            department:{
                type: mongoose.Schema.Types.ObjectId, 
                required: true,
                ref: 'Department'
            },
        }
    ],
    
},{
    timestamps: true
})

const Complaint = mongoose.model('Complaint',complaintSchema)

export default Complaint