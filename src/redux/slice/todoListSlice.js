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
        id: lastTodoId.id + 1,
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
      const todoParsed = {
        id: action.payload.id,
        description: action.payload.description,
        checked: action.payload.checked,
      };
      const todo = state.TodoList.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.checked = !todo.checked;
        setLocalStorage(state.TodoList);
        state.ignoreWebSockets = true;
        connectedWebSocket().then(() => {
          piesocket.send(JSON.stringify({ key: 'pipipi', todo: todoParsed, action: 'checkTodo' }));
        });
      }
    },
    gettingDataFromWebSocket: (state, action) => {
      // state.TodoList[0].checked = true;
      if (!state.ignoreWebSockets) {
        switch (action.payload.action) {
          case 'addTodo':
            state.TodoList.push(action.payload.todo);
            break;
          case 'checkTodo':
            // eslint-disable-next-line no-case-declarations
            const todo = state.TodoList.find((todo) => todo.id === action.payload.todo.id);
            if (todo) {
              todo.checked = !todo.checked;
              // setLocalStorage(state.TodoList);
            }
            break;
        }
      } else {
        state.ignoreWebSockets = false;
      }
      // setLocalStorage(state.TodoList);
    },
  },
});

export const { addTodo, checkTodo, gettingDataFromWebSocket } = todoListSlice.actions;

export const selectTodoList = (state) => state.todos.TodoList;

export default todoListSlice.reducer;
