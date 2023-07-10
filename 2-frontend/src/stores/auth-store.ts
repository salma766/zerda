import { createStore } from "zustand";
import { apiClient } from "../config";
import { UserModel } from "../models/user-model";
import { BackendResponse } from "../models/backend-response";


export interface authState {
    connectedUser?: UserModel;
    storeConnectedUser: (connectedUser: UserModel) => void;
    deleteConnectedUser: () => void;
    login: (email: string, password: string) => Promise<BackendResponse>
}

// define the state store
export const authStore = createStore<authState>((set): authState => ({
    connectedUser: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')!) : undefined,
    storeConnectedUser: (user) => {
        localStorage.setItem('auth', JSON.stringify(user))
        set(state => ({ ...state, connectedUser: user }));
    },
    deleteConnectedUser: () => {
        localStorage.removeItem('auth')
        set(state => ({ ...state, connectedUser: undefined }));
    },
    login: async (email: string, password: string) => {
        try {
            const res = await apiClient.post<BackendResponse>(`/api/auth/login`, { email, password });
            return res.data
        } catch (error) {
            console.log(error);
            return { status: 'error', message: 'something went wrong' }
        }
    }
}));


