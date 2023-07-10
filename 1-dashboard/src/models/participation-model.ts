import { CategoryModel } from "./category-model";
import { CourseModel } from "./course-model";
import { participationStatus } from "./participation-status";
import { UserModel } from "./user-model";

export interface ParticipationModel {
    _id:string;
    course:CourseModel
    formateur: UserModel
    etudiant: UserModel
    approved:participationStatus
    createdAt:string
}