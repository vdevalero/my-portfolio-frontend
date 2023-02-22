import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      token: null,
      isAuth: false,
      setToken: (token) => set((state) => ({ token, isAuth: true })),
      logout: () => set(state => ({ token: null, isAuth: false }))
    }),
    {
      name: "auth",
    }
  )
);
