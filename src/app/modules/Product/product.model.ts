import {  Schema, model } from "mongoose";
import { TSportsItem } from "./product.interface";





const productSchema = new Schema<TSportsItem>({
 
    name: { type: String, required: true },
    imageLink:{type:String, required:true},
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    sportType: { type: String, required: true },
    brand: { type: String, required: true },
    size: { type: String, required: true },
    material: { type: String, required: true },
    color: { type: String, required: true },
    condition: { type: String, enum: ['new', 'used'], required: true },
    branch: { type: String, enum: ["Tangail" , "Chittagong" , "Bagerhat" , "Bandarban" , "Barguna" , "Barisal" , "Bhola" , "Bogra" , "Brahmanbaria" , "Chandpur" , "Chapainawabganj" , "Chuadanga" , "Comilla" , "Cox's Bazar" , "Dhaka" , "Dinajpur" , "Faridpur" , "Feni" , "Gaibandha" , "Gazipur" , "Gopalganj" , "Habiganj" , "Jamalpur" , "Jessore" , "Jhalokati" , "Jhenaidah" , "Joypurhat" , "Khagrachari" , "Khulna" , "Kishoreganj" , "Kurigram" , "Kushtia" , "Lakshmipur" , "Lalmonirhat" , "Madaripur" , "Magura" , "Manikganj" , "Meherpur" , "Moulvibazar" , "Munshiganj" , "Mymensingh" , "Naogaon" , "Narail" , "Narayanganj" , "Narsingdi" , "Natore" , "Netrokona" , "Nilphamari" , "Noakhali" , "Pabna" , "Panchagarh" , "Patuakhali" , "Pirojpur" , "Rajbari" , "Rajshahi" , "Rangamati" , "Rangpur" , "Satkhira" , "Shariatpur" , "Sherpur" , "Sirajganj" , "Sunamganj" , "Sylhet" , "Tangail" , "Thakurgaon"], required: true },
    weight: { type: Number },
    style: { type: String },
    isCheckedToDelete:{type:Boolean, default:false}
})

export const SportsItemModel =  model<TSportsItem>('SportsItem', productSchema);
