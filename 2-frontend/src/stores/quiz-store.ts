import { createStore } from "zustand";
import { apiClient } from "../config";
import { QuizModel } from "../models/quiz-model";
import { BackendResponse } from "../models/backend-response";


export interface quizState {
    quizzes: QuizModel[];
    setQuizzes: (data: QuizModel[]) => void;
    fetchQuizzes: () => Promise<void>;
    fetchQuizzesByCourse: (courseId: string) => Promise<void>;
    fetchQuiz: (quizId: string) => Promise<QuizModel | null>;
}

// define the state store
export const quizStore = createStore<quizState>((set): quizState => ({
    quizzes: [],
    setQuizzes: quizzes => {
        set(state => ({
            ...state,
            quizzes: quizzes
        }));
    },
    fetchQuizzes: async () => {
        try {
            set({ quizzes: [] });
            const res = await apiClient.get<QuizModel[]>(`/api/quizzes/`);
            set({ quizzes: res.data });
        } catch (error) {
            console.log(error);
        }
    },
    fetchQuizzesByCourse: async (courseId: string) => {
        try {
            set({ quizzes: [] });
            const res = await apiClient.get<QuizModel[]>(`/api/quizzes/quizzesByCourse/${courseId}`);
            set({ quizzes: res.data });
        } catch (error) {
            console.log(error);
        }
    },
    fetchQuiz: async (quizId) => {
        try {
            const res = await apiClient.get<QuizModel>(`/api/quizzes/${quizId}`);
            if (res.status === 200) {
                return res.data
            }
            return null

        } catch (error) {
            console.log(error);
            return null
        }
    },

}));


