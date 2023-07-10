import axios from "axios";
import { UserModel } from "./models/user-model";
import { Role } from "./models/roles";
import { CourseModel } from "./models/course-model";
import { CategoryModel } from "./models/category-model";
import { LectureModel } from "./models/lecture-model";

export const config = {
  baseUrl: "http://localhost:5000",
}



// export const config = {
//   baseUrl: "https://dash-api.fut23liverewards.com/api",
//   checkBotAPI: "https://scraper.fut23liverewards.com/api",
//   decryptKey:"8b87846d74f5bea81c65e0c543f18951327b9fc17b9c894568103c38142f4b2899464cc9690a2215f6dfdef116b53596495d8e5cc77e05fc688d2f0192ef36ff"
// }

export const apiClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-type": "application/json",
  }
});

export const INIT_USER: UserModel = { _id: "", firstName: "", lastName: "", username: "", gender: "", email: "", password: "", phone: "", avatar: "", verified: 0, role: Role.formateur, createdAt: "", }
export const INIT_CATEGORY: CategoryModel = { _id: "", createdAt: "", description: "", title: "" }
export const INIT_COURSE: CourseModel = { _id: "", category: INIT_CATEGORY, createdAt: "", description: "", images: [], formateur: INIT_USER, price: "", title: "", duration: "", level: "", lectures: [] }
export const INIT_LECTURE: LectureModel = { _id: "", title: "", description: "", attachments: [], createdAt: new Date().toDateString() }


