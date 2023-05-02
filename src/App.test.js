import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import App from './App';
import {  ThemeContext } from './context/ThemeContext';

test('renders learn react link', () => {
  let theme = useContext(ThemeContext)
  render(<App />);   
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
