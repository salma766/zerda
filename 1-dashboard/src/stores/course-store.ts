import { createStore } from "zustand";
import { apiClient } from "../config";
import { CourseModel } from "../models/course-model";
import { BackendResponse } from "../models/backend-response";


export interface courseState {
    courses: CourseModel[];
    setCourses: (data: CourseModel[]) => void;
    fetchCourses: (token: string) => Promise<void>;
    fetchCourse: (courseId: string, token: string) => Promise<CourseModel>
    addCourse: (course: CourseModel, images: File[], token: string) => Promise<BackendResponse>;
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
    fetchCourse: async (courseId: string, token: string) => {
        const res = await apiClient.get<CourseModel>(`/api/courses/${courseId}`, {
            headers: { 'authorization': `Bearer ${token}` },
        });
        return res.data
    },
    fetchCourses: async (token: string) => {
        try {
            set({ courses: [] });
            const res = await apiClient.get<CourseModel[]>(`/api/courses/`, {
                headers: { 'authorization': `Bearer ${token}` },
            });
            set({ courses: res.data });
        } catch (error) {
            console.log(error);
        }
    },
    addCourse: async (course: CourseModel, images: File[], token: string) => {
        try {
            const formData = new FormData();
            formData.append('title', course.title);
            formData.append('description', course.description);
            formData.append('price', course.price);
            formData.append('duration', course.duration);
            formData.append('level', course.level);
            formData.append('category', course.category._id);
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }

            const res = await apiClient.post<CourseModel | BackendResponse>(
                '/api/courses/add',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data;',
                        'authorization': `Bearer ${token}`
                    },
                }
            );
            console.log(res.data)
            if (res.status === 200) {
                const newCourse = res.data as CourseModel;
                set((state) => ({
                    ...state,
                    courses: [...state.courses, newCourse],
                })); //add new user to list
                return { status: 'success', message: 'Course added successfully' };
            } else {
                return res.data as BackendResponse;
            }
        } catch (error) {
            console.log(error);
            return { status: 'error', message: 'Something went wrong' };
        }
    }
}));


