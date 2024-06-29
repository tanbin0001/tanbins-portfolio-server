import config from "../config"
import { User } from "../modules/User/user.model"

const superAdmin = {

    username: 'superAdmin',
    email: 'superAdmin@gmail.com',
    password: config.super_admin_pass,
    role: 'superAdmin',
}



const seedSuperAdmin = async () => {

    const isSuperAdminExists = await User.findOne({ role: 'superAdmin' })
    if(!isSuperAdminExists) {
        await User.create(superAdmin)
    }
}

export default seedSuperAdmin;