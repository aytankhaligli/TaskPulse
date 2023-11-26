import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../../data";

const localStorageData = localStorage.getItem("users");
const localStorageCurrentUser = localStorage.getItem("currentUser");

let initialState;

try {
  initialState = localStorageData ? JSON.parse(localStorageData) : usersList;
} catch (error) {
  console.error("Error parsing localStorage data:", error);
  initialState = usersList;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorageCurrentUser
      ? JSON.parse(localStorageCurrentUser).isAuthenticated
      : false,
    currentUser: localStorageCurrentUser
      ? JSON.parse(localStorageCurrentUser).currentUser
      : null,
    errorText: localStorageCurrentUser
      ? JSON.parse(localStorageCurrentUser).errorText
      : null,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      console.log(initialState);
      const user = initialState.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
        state.errorText = null;
        localStorage.setItem("currentUser", JSON.stringify(state));
      } else {
        state.isAuthenticated = false;
        state.currentUser = null;
        state.errorText = "User not found or password incorrect";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.errorText = null;
      localStorage.removeItem("currentUser");
    },
    signup: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      state.errorText = null;
      localStorage.setItem("currentUser", JSON.stringify(state));
    },
  },
});

export const { login, logout, signup } = authSlice.actions;

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
