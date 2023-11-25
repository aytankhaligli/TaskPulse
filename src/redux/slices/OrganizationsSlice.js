import { organizations } from "../../data";
import { createSliceFromLocalStorage } from "../../utils";

const organizationsSlice = createSliceFromLocalStorage(
  "organizations",
  organizations
);
export const { createItem: createOrganization } = organizationsSlice.actions;
export const selectCurrentOrganization = (state, id) =>
  state.find((org) => org.id === id);

export default organizationsSlice.reducer;
