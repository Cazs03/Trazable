import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import InputPassword from './components/commons/InputPassword';
import Login from './components/features/Login';
import Main from './components/views/Main';
import UserStore from './redux/store/UserStore';

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
