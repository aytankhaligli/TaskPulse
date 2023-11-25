import { createSlice } from "@reduxjs/toolkit";
import { organizations } from "../../data";

const localStorageData = localStorage.getItem("organizations");

let initialState;
let newOrganization = null;

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
      const newOrg = action.payload;
      console.log(newOrg);
      state.push(newOrg);
      localStorage.setItem("organizations", JSON.stringify(state));
      newOrganization = newOrg;
    },
  },
});

export const { createOrganization } = organizationsSlice.actions;
export const getNewOrganization = () => newOrganization;

export default organizationsSlice.reducer;
