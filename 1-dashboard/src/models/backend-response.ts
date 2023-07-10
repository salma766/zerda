import { UserModel } from "./user-model"

export interface BackendResponse {
    status:string
    message: string
    user?:UserModel
}