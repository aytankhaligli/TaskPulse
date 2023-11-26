import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../../data";

const localStorageData = localStorage.getItem("users");

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
    isAuthenticated: false,
    currentUser: null,
    errorText: null,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      console.log(initialState);
      const user = initialState.find((u) => {
        console.log(u.email, email);
        return u.email === email && u.password === password;
      });

      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
        state.errorText = null;
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
    },
    signup: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      state.errorText = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, signup } = authSlice.actions;

export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
