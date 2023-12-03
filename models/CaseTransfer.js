import mongoose from 'mongoose'

const caseTransferSchema = mongoose.Schema({
    complaintID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Complaint'
    },
    sourceDepartment:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Department'
    },
    targetDepartment:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Department'
    },
    transferNote:{
        type: String,
        required: true
    },
})

const CaseTransfer = mongoose.model('CaseTransfer',caseTransferSchema)

export default CaseTransfer