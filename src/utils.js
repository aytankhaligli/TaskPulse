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
    },
  });
};
