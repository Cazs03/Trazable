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
    checkTodo: (state, action) => {
      let index = -1;
      // state.TodoList[0].checked = true;

      state.TodoList.find((todo, i) => {
        if (todo.id === action.payload.id) {
          index = i;
        }
      });
      if (index >= 0) {
        state.TodoList[index].checked = !state.TodoList[index].checked;
      }
    },
  },
});

export const { addTodo, checkTodo } = todoListSlice.actions;

export const selectTodoList = (state: { TodoList: { TodoList: any } }) => state.TodoList.TodoList;

export default todoListSlice.reducer;
