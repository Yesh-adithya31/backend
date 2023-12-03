import bcrypt from 'bcryptjs'

const complainer = [
    {
        firstName: 'Nuwangi',
        lastName: 'Wijeewira',
        NIC: '979302489V',
        address: 'Matara',
        phoneNumber: '0788391932',
        email: 'nuwangi@gmail.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        firstName: 'Kavindu',
        lastName: 'Devinda',
        NIC: '979302329V',
        address: 'Ambalangoda',
        phoneNumber: '0718391932',
        email: 'kavindu@gmail.com',
        password: bcrypt.hashSync('123456',10),
    },
    
]

export default complainer