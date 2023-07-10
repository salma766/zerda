import { createStore } from "zustand";
import { apiClient } from "../config";
import { CategoryModel } from "../models/category-model";


export interface categoryState {
    categories: CategoryModel[];
    setCategories: (data: CategoryModel[]) => void;
    fetchCategories: (token: string) => Promise<void>;
}

// define the state store
export const categoryStore = createStore<categoryState>((set): categoryState => ({
    categories: [],
    setCategories: categories => {
        set(state => ({
            ...state,
            categories: categories
        }));
    },
    fetchCategories: async (token: string) => {
        try {
            const res = await apiClient.get<CategoryModel[]>(`/api/categories/`, {
                headers: { 'authorization': `Bearer ${token}` },
            });
            set({ categories: res.data });
        } catch (error) {
            console.log(error);
        }
    }
}));


