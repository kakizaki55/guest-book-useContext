import { EntriesProvider } from './context/EntriesContext';
import { UserProvider } from './context/UserContext';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

export default function App() {
  return (
    <UserProvider>
      <EntriesProvider>
        <Layout />
      </EntriesProvider>
    </UserProvider>
  );
}
