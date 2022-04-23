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
      connectedWebSocket().then(() => {
        piesocket.send(JSON.stringify({ key: 'pipipi', todo: todo, action: 'addTodo' }));
      });
    },
    checkTodo: (state, action) => {
      let index = -1;
      index = state.TodoList.findIndex((todo) => todo.id === action.payload.id);
      const data = {
        id: action.payload.id,
        checked: !action.payload.checked,
      };
      if (index >= 0) {
        state.TodoList[index].checked = !state.TodoList[index].checked;
        state.ignoreWebSockets = true;
        setLocalStorage(state.TodoList);
        connectedWebSocket().then(() => {
          piesocket.send(JSON.stringify({ key: 'pipipi', todo: data, action: 'checkTodo' }));
        });
      }
    },
    gettingDataFromWebSocket: (state, action) => {
      state.TodoList[0].checked = true;
      if (!state.ignoreWebSockets) {
        switch (action.payload.action) {
          case 'addTodo':
            state.TodoList.push(action.payload.todo);
            break;
          case 'checkTodo':
            // eslint-disable-next-line no-case-declarations
            const index = state.TodoList.findIndex((todo) => todo.id === action.payload.todo.id);
            if (index >= 0) {
              state.TodoList[index].checked = !state.TodoList[index].checked;
            }
            break;
        }
      } else {
        state.ignoreWebSockets = false;
      }
    },
  },
});

export const { addTodo, checkTodo, gettingDataFromWebSocket } = todoListSlice.actions;

export const selectTodoList = (state: { TodoList: { TodoList: any } }) => state.TodoList.TodoList;

export default todoListSlice.reducer;
