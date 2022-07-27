import { render, screen } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  render(<App />);

  const regexp = /React Bootstrap/i;
  expect(screen.getByRole('heading')).toHaveTextContent(regexp);
  expect(screen.getByText(regexp)).toBeInTheDocument();
});
