import {Schema, model } from "mongoose";
import { Address, Users } from "./user.interface";

const AddressSchema = new Schema<Address>({
    street:{type:String,required:true},
    city:{type:String, required:true},
    country:{type:String, required:true}
})


const UserSchema = new Schema<Users>({
    userId:{type:Number,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    fullName:{
        type:String,
        required:true,
        firstName:{type:String,required:true},
        lastName:{type:String,required:true}
    },
    email:{type:String,required:true},
    isactive:{type:Boolean,default:true},
    hobbies:{type:[String],required:true},
    address:{
        type:AddressSchema,
        required:true,
    }
})

export const UserModel = model<Users>('UserModel',UserSchema)