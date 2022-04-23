import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slice/loginSlice';
import todoListSlice from '../slice/todoListSlice';

export default configureStore({
  reducer: {
    login: loginSlice,
    TodoList: todoListSlice,
  },
});
