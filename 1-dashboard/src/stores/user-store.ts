import { createStore } from "zustand";
import { apiClient } from "../config";
import { UserModel } from "../models/user-model";
import { BackendResponse } from "../models/backend-response";


export interface userState {
    users: UserModel[];
    setUsers: (data: UserModel[]) => void;
    fetchUsers: (token: string) => Promise<void>;
    addFormateur: (formateur: UserModel, token: string) => Promise<BackendResponse>;
}

// define the state store
export const userStore = createStore<userState>((set): userState => ({
    users: [],
    setUsers: users => {
        set(state => ({
            ...state,
            users: users
        }));
    },
    fetchUsers: async (token: string) => {
        try {
            const res = await apiClient.get<UserModel[]>(`/api/auth/`, {
                headers: { 'authorization': `Bearer ${token}` },
            });
            set({ users: res.data });
        } catch (error) {
            console.log(error);
        }
    },
    addFormateur: async (formateur: UserModel, token: string) => {
        try {
            const res = await apiClient.post<UserModel | BackendResponse>(`/api/auth/register`, formateur, {
                headers: { 'authorization': `Bearer ${token}` },
            });
            if (res.status === 200) {
                const newFormateur = res.data as UserModel;
                set(state => ({ ...state, users: [...state.users, newFormateur] })); //add new user to list
                return { status: 'success', message: 'formateur added successfully' }
            } else {
                return res.data as BackendResponse;
            }

        } catch (error) {
            console.log(error);
            return { status: 'error', message: 'something went wrong' }
        }
    }
}));


