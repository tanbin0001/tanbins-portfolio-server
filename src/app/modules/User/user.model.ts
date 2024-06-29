 
 

import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";


const userSchema = new Schema<TUser,UserModel>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
   
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
   
    role: {
        type: String,
        enum: ['user','manager','superAdmin','seller'],
        default: 'user'
    },
    branch: { type: String, enum: ["Tangail" , "Chittagong" , "Bagerhat" , "Bandarban" , "Barguna" , "Barisal" , "Bhola" , "Bogra" , "Brahmanbaria" , "Chandpur" , "Chapainawabganj" , "Chuadanga" , "Comilla" , "Cox's Bazar" , "Dhaka" , "Dinajpur" , "Faridpur" , "Feni" , "Gaibandha" , "Gazipur" , "Gopalganj" , "Habiganj" , "Jamalpur" , "Jessore" , "Jhalokati" , "Jhenaidah" , "Joypurhat" , "Khagrachari" , "Khulna" , "Kishoreganj" , "Kurigram" , "Kushtia" , "Lakshmipur" , "Lalmonirhat" , "Madaripur" , "Magura" , "Manikganj" , "Meherpur" , "Moulvibazar" , "Munshiganj" , "Mymensingh" , "Naogaon" , "Narail" , "Narayanganj" , "Narsingdi" , "Natore" , "Netrokona" , "Nilphamari" , "Noakhali" , "Pabna" , "Panchagarh" , "Patuakhali" , "Pirojpur" , "Rajbari" , "Rajshahi" , "Rangamati" , "Rangpur" , "Satkhira" , "Shariatpur" , "Sherpur" , "Sirajganj" , "Sunamganj" , "Sylhet" , "Tangail" , "Thakurgaon","Not selected yet"],default:'Not selected yet' },
  
      updatedAt: { type: Date, default: Date.now },

}, {
    timestamps: true
});


userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this  as TUser;
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
        );
        
        
    
    next();

})


 

userSchema.statics.isUserExists = async function (username: string) {
    return await User.findOne({ username }).select('+password');
}
userSchema.statics.isUserPasswordMatched = async function (plainTextPassword, hashedPassword) {
    return await bcrypt.compare(plainTextPassword, hashedPassword)
        ;
}

userSchema.statics.isJwtIssuedBeforePasswordChange = function(passwordChangedTimeStamp : Date, jwtIssuedTimeStamp: number){
    const passwordChangeTime = new Date (passwordChangedTimeStamp).getTime()/1000;
return passwordChangeTime > jwtIssuedTimeStamp;
}
export const User = model<TUser, UserModel>('User', userSchema);