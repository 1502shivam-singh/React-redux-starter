import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskValue: [],
  status: 'idle',
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
        state.taskValue.push(action.payload);
    },
    removeTask: (state, action) => {
      state.taskValue = state.taskValue.filter((it, index)=>{
        return index !== action.payload;
      })
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;

export const selectTasks = (state) => state.todolist.taskValue;

export default todoSlice.reducer;
