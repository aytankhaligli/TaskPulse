import { tasks } from "../../data";
import { createSliceFromLocalStorage } from "../../utils";

const tasksSlice = createSliceFromLocalStorage("tasks", tasks);

export const { createItem: createTask } = tasksSlice.actions;

export const selectOrganizationTasks = (state, id) =>
  state.filter((task) => task.organizationId === id);

export default tasksSlice.reducer;
