import { createSlice } from "@reduxjs/toolkit";
import { organizations } from "../../data";

const localStorageData = localStorage.getItem("organizations");

let initialState;

try {
  initialState = localStorageData
    ? JSON.parse(localStorageData)
    : organizations;
} catch (error) {
  console.error("Error parsing localStorage data:", error);
  initialState = organizations;
}

export const organizationsSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {
    createOrganization: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("organizations", JSON.stringify(state));
    },
  },
});

export const { createOrganization } = organizationsSlice.actions;
export const findCurrentOrganization = (state, id) =>
  state.filter((org) => org.id === id)[0];

export default organizationsSlice.reducer;
