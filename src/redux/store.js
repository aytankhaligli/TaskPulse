import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UsersSlice";
import organizationReducer from "./slices/OrganizationsSlice";
import authReducer from "./slices/AuthSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    organization: organizationReducer,
    auth: authReducer,
  },
});
