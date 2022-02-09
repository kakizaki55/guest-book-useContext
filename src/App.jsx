import { UserProvider } from './context/UserContext';
import Layout from './views/Layout/Layout';
import { ToggleProvider } from './context/ToggleContext';

export default function App() {
  return (
    <ToggleProvider>
      <UserProvider>
        <Layout />
      </UserProvider>
    </ToggleProvider>
  );
}
