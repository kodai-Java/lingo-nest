import { create } from 'zustand';

interface JapaneseWordStore {
  japaneseWord: string;
  updateJapaneseWord: (word: string) => void;
}
export const useJapaneseWordStore = create<JapaneseWordStore>((set) => ({
  japaneseWord: '',  // 初期値はローカルストレージから取得
  updateJapaneseWord: (word: string) => set({ japaneseWord: word })
}));
