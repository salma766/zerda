import axios from "axios";
import { UserModel } from "./models/user-model";
import { CategoryModel } from "./models/category-model";
import { CourseModel } from "./models/course-model";
import { Role } from "./models/roles";
import { QuizModel } from "./models/quiz-model";
import { LectureModel } from "./models/lecture-model";
import { participationModel } from "./models/participation-model";
import { participationStatus } from "./models/participation-status";


export const config = {
  baseUrl: "http://localhost:5000",
}





export const apiClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-type": "application/json",
  }
});

export const INIT_USER: UserModel = { _id: "", firstName: "", lastName: "", username: "", gender: "", email: "", password: "", phone: "", avatar: "", verified: 0, role: Role.formateur, createdAt: "", }
export const INIT_CATEGORY: CategoryModel = { _id: "", createdAt: "", description: "", title: "" }
export const INIT_COURSE: CourseModel = { _id: "", category: INIT_CATEGORY, createdAt: "", description: "", images: [], formateur: INIT_USER, price: "", title: "", duration: "", level: "", lectures: [], isParticipated: participationStatus.isNotSubscribed }
export const INIT_PARTICIPATION: participationModel = { _id: "", approved: participationStatus.pending, course: INIT_COURSE, createdAt: "", etudiant: INIT_USER, formateur: INIT_USER }
export const INIT_LECTURE: LectureModel = { _id: "", title: "", description: "", attachments: [], createdAt: new Date().toDateString() }
export const INIT_QUIZ: QuizModel = { _id: "", title: "", description: "", level: "", questions: [], createdAt: "" }