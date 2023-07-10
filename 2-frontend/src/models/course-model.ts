
import { CategoryModel } from "./category-model";
import { LectureModel } from "./lecture-model";
import { participationStatus } from "./participation-status";
import { UserModel } from "./user-model";

export interface CourseModel {
    _id: string;
    title: string
    description: string
    images: string[]
    price: string
    category: CategoryModel
    formateur: UserModel
    isParticipated:participationStatus
    duration:string
    level:string
    lectures:LectureModel[]
    createdAt: string
}