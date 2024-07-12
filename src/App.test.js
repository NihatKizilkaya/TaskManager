import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Görevler heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Görevler/i);
  expect(headingElement).toBeInTheDocument();
});
