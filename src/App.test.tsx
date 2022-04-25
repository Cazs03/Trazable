import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import InputCheckbox from './components/commons/InputCheckbox';
import InputPassword from './components/commons/InputPassword';
import LabelCombined from './components/commons/LabelCombined';
import Login from './components/features/Login';
import Main from './components/views/Main';
import UserStore from './redux/store/UserStore';
import { checkTodoListInLocalStorage, getLastIdFromArray } from './utils/getLastIdFromArray';
import { setLocalStorage } from './utils/localStorage';

test('Render App', () => {
  render(<App />);
});
test('Render Main', () => {
  render(
    <Provider store={UserStore}>
      <Main />
    </Provider>
  );
  expect(screen.getByText('Login')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Login'));
  expect(screen.getByText('Logout')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Logout'));
});

test('Login component', () => {
  render(
    <Provider store={UserStore}>
      <Login />
    </Provider>
  );
});

test('Login InputPassword', async () => {
  const fakePass = '123';
  const fakeCb = jest.fn();
  render(<InputPassword password={fakePass} SetPassword={fakeCb} />);
  const usernameInput = screen.queryByPlaceholderText(/password/i);
  expect(usernameInput).toHaveValue(fakePass);
  fireEvent.change(usernameInput, { target: { value: '000' } });
  expect(fakeCb).toHaveBeenCalled();
});

test('Check/unchecked InputCheckbox', async () => {
  const mockTodo = {
    id: 0,
    description: 'bailar',
    checked: true,
  };
  render(
    <Provider store={UserStore}>
      <InputCheckbox dispatcher={null} todo={mockTodo} />
    </Provider>
  );
  const inputCheckbox = screen.queryByPlaceholderText(/bailar/i);
});

test('setLocalStorage', () => {
  const mockTodo = {
    id: 0,
    description: 'bailar',
    checked: true,
  };
  expect(setLocalStorage([mockTodo]));
});

test('getLastIdFromArray', () => {
  const todoGet = getLastIdFromArray();
  expect(getLastIdFromArray());
  expect(typeof todoGet).toBe('object');
  expect(todoGet.id).toBe(0);
});

test('checkTodoListInLocalStorage', () => {
  const lastId = checkTodoListInLocalStorage(0);
  expect(lastId).toBe(undefined);
});

test('LabelCombined', async () => {
  render(
    <Provider store={UserStore}>
      <LabelCombined description={'awesome'} IncludeComponent={null} />
    </Provider>
  );
});
