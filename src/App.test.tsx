import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('Render App', () => {
  render(<App />);
  // screen.
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
