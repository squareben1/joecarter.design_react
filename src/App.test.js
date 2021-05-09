import { render, screen } from '@testing-library/react';
import App from './App';

test('renders email address', () => {
  render(<App />);
  const linkElement = screen.getByText(/joecarterdesign@gmail.com/i);
  expect(linkElement).toBeInTheDocument();
});
