import { createSlice } from '@reduxjs/toolkit';
import { getLastIdFromArray } from '../../utils/getLastIdFromArray';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

export const todoListSlice = createSlice({
  name: 'todo',
  initialState: {
    TodoList: getLocalStorage(),
  },
  reducers: {
    addTodo: (state, action) => {
      const lastTodoId = getLastIdFromArray(state.TodoList);
      const todo = {
        id: lastTodoId.id++,
        description: action.payload,
        checked: false,
      };
      state.TodoList.push(todo);
      setLocalStorage(state.TodoList);
    },
  },
});

export const { addTodo } = todoListSlice.actions;

export const selectTodoList = (state: { TodoList: { TodoList: any } }) => state.TodoList.TodoList;

export default todoListSlice.reducer;
