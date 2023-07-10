import { CategoryModel } from "./category-model";
import { UserModel } from "./user-model";

export interface LectureModel {
    _id: string;
    title: string
    description: string
    attachments: any[]
    createdAt?: string
}