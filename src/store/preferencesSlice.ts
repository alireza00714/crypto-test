// preferencesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export type Theme = "dark" | "light";
export type Language = "en" | "fa";

interface PreferencesState {
  theme: Theme;
  language: Language;
}

const initialState: PreferencesState = {
  theme: "light",
  language: "fa",
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setLanguage } = preferencesSlice.actions;

// Selectors
export const selectTheme = (state: RootState) => state.preferences.theme;
export const selectLanguage = (state: RootState) => state.preferences.language;

export default preferencesSlice.reducer;
