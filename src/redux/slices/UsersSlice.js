import { usersList } from "../../data";
import { createSliceFromLocalStorage } from "../../utils";

const usersSlice = createSliceFromLocalStorage("users", usersList);

export const { createItem: createUser } = usersSlice.actions;
export const selectOrganizationUsers = (state, id) =>
  state.filter((user) => user.organizationId === id);

export const updateUserPassword = (userId, password) => ({
  type: "users/updateUserPassword",
  payload: { userId, password },
});
export default usersSlice.reducer;
