import { createSlice } from '@reduxjs/toolkit';
import { connectedWebSocket, piesocket } from '../../components/constants/WebSockets';
import { getLastIdFromArray } from '../../utils/getLastIdFromArray';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

export const todoListSlice = createSlice({
  name: 'todo',
  initialState: {
    TodoList: getLocalStorage(),
    ignoreWebSockets: false,
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
      state.ignoreWebSockets = true;
      setLocalStorage(state.TodoList);
      connectedWebSocket().then((success) => {
        piesocket.send(JSON.stringify({ key: 'pipipi', todo: todo }));
      });
    },
    checkTodo: (state, action) => {
      let index = -1;
      state.TodoList.find((todo, i) => {
        if (todo.id === action.payload.id) {
          index = i;
        }
      });
      if (index >= 0) {
        state.TodoList[index].checked = !state.TodoList[index].checked;
        setLocalStorage(state.TodoList);
      }
    },
    gettingDataFromWebSocket: (state, action) => {
      if (!state.ignoreWebSockets) {
        state.TodoList.push(action.payload);
      } else {
        state.ignoreWebSockets = false;
      }
    },
  },
});

export const { addTodo, checkTodo, gettingDataFromWebSocket } = todoListSlice.actions;

export const selectTodoList = (state: { TodoList: { TodoList: any } }) => state.TodoList.TodoList;

export default todoListSlice.reducer;
