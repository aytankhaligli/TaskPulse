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

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser } = usersSlice.actions;

export default usersSlice.reducer;
