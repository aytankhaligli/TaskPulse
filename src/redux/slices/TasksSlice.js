import { tasks } from "../../data";
import { createSliceFromLocalStorage } from "../../utils";

const tasksSlice = createSliceFromLocalStorage("tasks", tasks);

export const { createItem: createTask, editItem: updateTask } =
  tasksSlice.actions;

export const selectOrganizationTasks = (state, id) =>
  state.filter((task) => task.organizationId === id);

export const updateTaskStatus = (taskId, newStatus) => ({
  type: "tasks/updateTaskStatus",
  payload: { taskId, newStatus },
});

export default tasksSlice.reducer;
