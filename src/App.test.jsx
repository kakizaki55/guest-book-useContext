import App from './App';
import { render, screen } from '@testing-library/react';
import { UserProvider } from './context/UserContext';
import { EntriesProvider } from './context/EntriesContext';
import userEvent from '@testing-library/user-event';

test('just doing some behavior tests on my App', () => {
  render(
    <EntriesProvider>
      <UserProvider>
        <App></App>
      </UserProvider>
    </EntriesProvider>
  );
  screen.debug();

  const emailInput = screen.getByRole('textbox', {
    name: /email :/i,
  });
  const passwordInput = screen.getByLabelText(/password :/i);

  userEvent.type(emailInput, 'minoka@gmail.com');
  userEvent.type(passwordInput, '1234');

  userEvent.click(
    screen.getByRole('button', {
      name: /login/i,
    })
  );

  screen.debug();
  const header = screen.getByText(/welcome/i);
  expect(header).toBeInTheDocument();

  const formHeader = screen.getByRole('heading', {
    name: /leave a comment about your week!/i,
  });
  expect(formHeader).toBeInTheDocument();

  const signButton = screen.getByRole('button', {
    name: /sign/i,
  });
  expect(signButton).toBeInTheDocument();

  const guestMessageInput = screen.getByRole('textbox', {
    name: /entry :/i,
  });

  userEvent.type(guestMessageInput, 'hello my name is tom nook');

  userEvent.click(signButton);

  const logoutButton = screen.getByRole('button', {
    name: /not minoka@gmail.com?/i,
  });
  expect(logoutButton).toBeInTheDocument();

  const newCommentCard = screen.getByRole('heading', {
    name: /hello my name is tom nook/i,
  });
  expect(newCommentCard).toBeInTheDocument();

  const bannerHeading = screen.getByText(/welcome minoka@gmail.com/i);
  expect(bannerHeading).toBeInTheDocument();
});
