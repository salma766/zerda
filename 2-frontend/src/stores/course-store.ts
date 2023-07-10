import { createStore } from "zustand";
import { apiClient } from "../config";
import { CourseModel } from "../models/course-model";
import { BackendResponse } from "../models/backend-response";


export interface courseState {
    courses: CourseModel[];
    setCourses: (data: CourseModel[]) => void;
    fetchCourses: () => Promise<void>;
    addCourse: (course: CourseModel, token: string) => Promise<BackendResponse>;
}

// define the state store
export const courseStore = createStore<courseState>((set): courseState => ({
    courses: [],
    setCourses: courses => {
        set(state => ({
            ...state,
            courses: courses
        }));
    },
    fetchCourses: async () => {
        try {
            set({ courses: [] });
            const res = await apiClient.get<CourseModel[]>(`/api/courses/getAllCourses`);
            set({ courses: res.data });
        } catch (error) {
            console.log(error);
        }
    },
    addCourse: async (course: CourseModel, token: string) => {
        try {
            const res = await apiClient.post<CourseModel | BackendResponse>(`/api/courses/add`, course, {
                headers: { 'authorization': `Bearer ${token}` },
            });
            if (res.status === 200) {
                const newCourse = res.data as CourseModel;
                set(state => ({ ...state, courses: [...state.courses, newCourse] })); //add new user to list
                return { status: 'success', message: 'Course added successfully' }
            } else {
                return res.data as BackendResponse;
            }

        } catch (error) {
            console.log(error);
            return { status: 'error', message: 'something went wrong' }
        }
    }
}));


