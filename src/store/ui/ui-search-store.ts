import { create } from 'zustand';

interface State {
  isSearchOpen: boolean;
  openSearchMenu: () => void;
  closeSearchMenu: () => void;
}

export const useSearchUIStore = create<State>()((set) => ({
  isSearchOpen: false,
  openSearchMenu: () => set({ isSearchOpen: true }),
  closeSearchMenu: () => set({ isSearchOpen: false }),
}));
