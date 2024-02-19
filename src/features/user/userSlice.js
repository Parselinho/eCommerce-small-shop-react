import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  nord: "nord",
  synthwave: "synthwave",
};

const getUserFromLocal = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const getThemeLocal = () => {
  const theme = localStorage.getItem("theme") || themes.nord;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: getUserFromLocal(),
  theme: getThemeLocal(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      const { nord, synthwave } = themes;
      state.theme = state.theme === nord ? synthwave : nord;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
