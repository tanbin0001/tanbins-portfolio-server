/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.const";

export interface TUser  {
    _id:string;
    username:string;
    email:string,
    password:string;
    role?:  'user' |'seller' |'manager' | 'superAdmin';
    branch?:"Tangail" | "Chittagong" | "Bagerhat" | "Bandarban" | "Barguna" | "Barisal" | "Bhola" | "Bogra" | "Brahmanbaria" | "Chandpur" | "Chapainawabganj" | "Chuadanga" | "Comilla" | "Cox's Bazar" | "Dhaka" | "Dinajpur" | "Faridpur" | "Feni" | "Gaibandha" | "Gazipur" | "Gopalganj" | "Habiganj" | "Jamalpur" | "Jessore" | "Jhalokati" | "Jhenaidah" | "Joypurhat" | "Khagrachari" | "Khulna" | "Kishoreganj" | "Kurigram" | "Kushtia" | "Lakshmipur" | "Lalmonirhat" | "Madaripur" | "Magura" | "Manikganj" | "Meherpur" | "Moulvibazar" | "Munshiganj" | "Mymensingh" | "Naogaon" | "Narail" | "Narayanganj" | "Narsingdi" | "Natore" | "Netrokona" | "Nilphamari" | "Noakhali" | "Pabna" | "Panchagarh" | "Patuakhali" | "Pirojpur" | "Rajbari" | "Rajshahi" | "Rangamati" | "Rangpur" | "Satkhira" | "Shariatpur" | "Sherpur" | "Sirajganj" | "Sunamganj" | "Sylhet" | "Tangail" | "Thakurgaon" | "Not selected yet";
   
    updatedAt?: Date;


}

export type TUserRole =  keyof typeof USER_ROLE

export interface UserModel extends Model<TUser> {
    isUserExists  (username: string): Promise<TUser>;
    isUserPasswordMatched(plainTextPassword : string,hashedPassword : string): Promise<boolean>;
    isJwtIssuedBeforePasswordChange (passwordChangedTimeStamp : Date, jwtIssuedTimeStamp: number): boolean;

 }