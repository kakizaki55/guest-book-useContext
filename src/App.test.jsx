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

  const guestNameInput = screen.getByRole('textbox', {
    name: /guest name :/i,
  });
  const guestMessageInput = screen.getByRole('textbox', {
    name: /entry :/i,
  });

  userEvent.type(guestNameInput, 'tom nook');
  userEvent.type(guestMessageInput, 'hello my name is tom nook');

  userEvent.click(signButton);

  const logoutButton = screen.getByRole('button', { name: /not tom nook?/i });
  expect(logoutButton).toBeInTheDocument();

  const newCommentCard = screen.getByRole('heading', {
    name: /hello my name is tom nook/i,
  });
  expect(newCommentCard).toBeInTheDocument();

  const bannerHeading = screen.getByText(/welcome tom nook/i);
  expect(bannerHeading).toBeInTheDocument();
});
