import mongoose from 'mongoose'

const groupPermissionSchema = mongoose.Schema({
    roleName:{
        type: String,
        required: true
    },
    roleDescription:{
        type: String,
        required: true
    },
    permissions:
        {
            usermanagement:{
                view: {type : Boolean},
                create: {type : Boolean},
                edit: {type : Boolean},
                delete: {type : Boolean},
                selectAll: {type : Boolean},
            },
            userPermissions:{
                view: {type : Boolean},
                create: {type : Boolean},
                edit: {type : Boolean},
                delete: {type : Boolean},
                selectAll: {type : Boolean},
            },
            complaint:{
                view: {type : Boolean},
                create: {type : Boolean},
                edit: {type : Boolean},
                delete: {type : Boolean},
                selectAll: {type : Boolean},
            },
            department:{
                view: {type : Boolean},
                create: {type : Boolean},
                edit: {type : Boolean},
                delete: {type : Boolean},
                selectAll: {type : Boolean},
            },
            complaintTransfer:{
                view: {type : Boolean},
                create: {type : Boolean},
                edit: {type : Boolean},
                delete: {type : Boolean},
                selectAll: {type : Boolean},
            },
            report:{
                view: {type : Boolean},
                create: {type : Boolean},
                edit: {type : Boolean},
                delete: {type : Boolean},
                selectAll: {type : Boolean},
            }
            
        },
    
},{
    timestamps: true
})

const GroupPermission = mongoose.model('GroupPermission',groupPermissionSchema)

export default GroupPermission