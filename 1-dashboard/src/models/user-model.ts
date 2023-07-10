import { Role } from "./roles";

export interface UserModel {
    _id:string;
    firstName:string
    lastName:string
    username:string
    gender:string
    email:string
    password:string
    phone:string
    avatar:string
    verified:number
    role:Role
    createdAt:string
    token?:string
}