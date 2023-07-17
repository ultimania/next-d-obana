import { create } from 'zustand';

type State = {
  isShowProfile: boolean;
  toggle: () => void;
};

const useStore = create<State>((set) => ({
  isShowProfile: false,
  toggle: () => set((state) => ({ isShowProfile: !state.isShowProfile })),
}));

export default useStore;
