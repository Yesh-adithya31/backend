const permissions = [
  {
    roleName: "Admin",
    roleDescription: "Administrator Role",
    permissions: {
      usermanagement: {
        view: true,
        create: true,
        edit: true,
        delete: true,
        selectAll: true
      },
      userPermissions: {
        view: true,
        create: true,
        edit: true,
        delete: true,
        selectAll: true
      },
      complaint: {
        view: true,
        create: true,
        edit: true,
        delete: true,
        selectAll: true
      },
      department: {
        view: true,
        create: true,
        edit: true,
        delete: true,
        selectAll: true
      },
      complaintTransfer: {
        view: true,
        create: true,
        edit: true,
        delete: true,
        selectAll: true
      },
      report: {
        view: true,
        create: true,
        edit: true,
        delete: true,
        selectAll: true
      }
    }
  },
  {
    roleName: "Police Office Admin",
    roleDescription: "Regular Police Office Admin Role",
    permissions: {
      usermanagement: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        selectAll: false
      },
      userPermissions: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        selectAll: false
      },
      complaint: {
        view: true,
        create: false,
        edit: true,
        delete: false,
        selectAll: false
      },
      department: {
        view: false,
        create: false,
        edit: false,
        delete: false,
        selectAll: false
      },
      complaintTransfer: {
        view: true,
        create: false,
        edit: true,
        delete: false,
        selectAll: false
      },
      report: {
        view: true,
        create: false,
        edit: false,
        delete: false,
        selectAll: false
      }
    }
  }
]


export default permissions
