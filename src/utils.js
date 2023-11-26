import { createSlice } from "@reduxjs/toolkit";

export const createSliceFromLocalStorage = (name, defaultData) => {
  const localStorageData = localStorage.getItem(name);

  let initialState;

  try {
    initialState = localStorageData
      ? JSON.parse(localStorageData)
      : defaultData;
  } catch (error) {
    console.error(`Error parsing localStorage data for ${name}:`, error);
    initialState = defaultData;
  }

  return createSlice({
    name,
    initialState,
    reducers: {
      createItem: (state, action) => {
        state.push(action.payload);
        localStorage.setItem(name, JSON.stringify(state));
      },
      updateUserPassword: (state, action) => {
        const { userId, password } = action.payload;
        const userToUpdate = state.find((user) => user.id === userId);

        if (userToUpdate) {
          userToUpdate.password = password;
          localStorage.setItem("users", JSON.stringify(state));
        }
      },
      updateTaskStatus: (state, action) => {
        const { taskId, newStatus } = action.payload;
        const taskToUpdate = state.find((task) => task.id === taskId);
        if (taskToUpdate) {
          taskToUpdate.status = newStatus;
          localStorage.setItem("tasks", JSON.stringify(state));
        }
      },
    },
  });
};
