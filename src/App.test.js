import { render, screen } from '@testing-library/react';
import App from './App';

test('test App Text', () => {
  render(<App />);
  const textElement = screen.getByText("Hello, React!");
  expect(textElement).toBeInTheDocument();
});