import { createSlice } from "@reduxjs/toolkit";
import { organizations } from "../../data";

const localStorageData = localStorage.getItem("organizations");

let initialState;

try {
  initialState = localStorageData
    ? JSON.parse(localStorageData)
    : { currOrganization: null, organizations };
} catch (error) {
  console.error("Error parsing localStorage data:", error);
  initialState = { currOrganization: null, organizations };
}

export const organizationsSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {
    // createOrganization: (state, action) => {
    //   const newOrg = action.payload;
    //   console.log(newOrg);
    //   state.push(newOrg);
    //   localStorage.setItem("organizations", JSON.stringify(state));
    //   newOrganization = newOrg;
    //   currentOrganization = newOrg;
    // },
    createOrganization: (state, action) => {
      state.currOrganization = action.payload;
      state.organizations.push(state.currOrganization);
      localStorage.setItem("organizations", JSON.stringify(state));
    },
  },
});

export const { createOrganization } = organizationsSlice.actions;
// export const getNewOrganization = () => newOrganization;
// export const getCurrentOrganization = () => currentOrganization;
export const selectCurrentOrganization = (state) => state.organizations;

export default organizationsSlice.reducer;
