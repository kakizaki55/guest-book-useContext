import { UserProvider } from './context/UserContext';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

export default function App() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}
