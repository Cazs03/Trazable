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
        description: action.payload.description,
        checked: false,
      };
      state.TodoList.push(todo);
      state.ignoreWebSockets = true;
      setLocalStorage(state.TodoList);
      if (action.payload.active) {
        connectedWebSocket().then(() => {
          piesocket.send(JSON.stringify({ key: 'pipipi', todo: todo, action: 'addTodo' }));
        });
      } else {
        window.addEventListener('online', () => {
          connectedWebSocket().then(() => {
            piesocket.send(JSON.stringify({ key: 'pipipi', todo: todo, action: 'addTodo' }));
            window.removeEventListener('online', null);
          });
        });
      }
    },
    checkTodo: (state, action) => {
      const todoParsed = {
        id: action.payload.todo.id,
        description: action.payload.todo.description,
        checked: action.payload.checked,
      };
      const todo = state.TodoList.find((todo) => todo.id === action.payload.todo.id);
      if (todo) {
        todo.checked = action.payload.checked;
        setLocalStorage(state.TodoList);
        state.ignoreWebSockets = true;
        if (action.payload.active) {
          connectedWebSocket().then(() => {
            connectedWebSocket().then(() => {
              piesocket.send(
                JSON.stringify({
                  key: 'pipipi',
                  todo: todoParsed,
                  action: 'checkTodo',
                })
              );
            });
          });
        } else {
          window.addEventListener('online', () => {
            connectedWebSocket().then(() => {
              piesocket.send(
                JSON.stringify({
                  key: 'pipipi',
                  todo: todoParsed,
                  action: 'checkTodo',
                })
              );
              window.removeEventListener('online', null);
            });
          });
        }
      }
    },
    gettingDataFromWebSocket: (state, action) => {
      if (!state.ignoreWebSockets) {
        switch (action.payload.action) {
          case 'addTodo':
            // eslint-disable-next-line no-case-declarations
            const addTodo = state.TodoList.find((todo) => todo.id === action.payload.todo.id);
            if (!addTodo) {
              state.TodoList.push(action.payload.todo);
            }
            break;
          case 'checkTodo':
            // eslint-disable-next-line no-case-declarations
            const checkTtodo = state.TodoList.find((todo) => todo.id === action.payload.todo.id);
            if (checkTtodo) {
              checkTtodo.checked = action.payload.todo.checked;
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

export const selectTodoList = (state) => state.todos.TodoList;

export default todoListSlice.reducer;
