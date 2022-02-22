import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../../App';

it('should render the login page', () => {
  const container = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
