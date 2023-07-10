import { createStore } from "zustand";
import { apiClient } from "../config";
import { UserModel } from "../models/user-model";
import { BackendResponse } from "../models/backend-response";
import { ParticipationModel } from "../models/participation-model";


export interface participationState {
    participations: ParticipationModel[];
    setParticipations: (data: ParticipationModel[]) => void;
    fetchParticipations: (token: string) => Promise<void>;
}

// define the state store
export const participationStore = createStore<participationState>((set): participationState => ({
    participations: [],
    setParticipations: participations => {
        set(state => ({
            ...state,
            participations: participations
        }));
    },
    fetchParticipations: async (token: string) => {
        try {
            const res = await apiClient.get<ParticipationModel[]>(`/api/courses/getCoursesByFormateur`, {
                headers: { 'authorization': `Bearer ${token}` },
            });
            set({ participations: res.data });
        } catch (error) {
            console.log(error);
        }
    },
}));


