import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../../data";

export const usersSlice = createSlice({
  name: "users",
  initialState: usersList,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser } = usersSlice.actions;

export default usersSlice.reducer;
