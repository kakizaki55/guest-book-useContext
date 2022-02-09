import { UserProvider } from './context/UserContext';
import Layout from './views/Layout/Layout';

export default function App() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}
