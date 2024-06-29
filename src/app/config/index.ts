import dotenv from 'dotenv';
import path from 'path';



dotenv.config({path: path.join((process.cwd(), '.env'))});

export default {
    port: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_secret : process.env.JWT_ACCESS_SECRET,
    jwt_access_expiresIn : process.env.JWT_ACCESS_EXPIRES_IN ,
    super_admin_pass: process.env.SUPER_ADMIN_PASS

}

