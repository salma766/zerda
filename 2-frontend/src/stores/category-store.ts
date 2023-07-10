import { createStore } from "zustand";
import { apiClient } from "../config";
import { CategoryModel } from "../models/category-model";


export interface categoryState {
    categories: CategoryModel[];
    setCategories: (data: CategoryModel[]) => void;
    fetchCategories: () => Promise<void>;
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
    fetchCategories: async () => {
        try {
            const res = await apiClient.get<CategoryModel[]>(`/api/categories/`);
            set({ categories: res.data });
        } catch (error) {
            console.log(error);
        }
    }
}));


