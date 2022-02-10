import { UserProvider } from './context/UserContext';
import Layout from './views/Layout/Layout';
import { ToggleProvider } from './context/ToggleContext';
import style from './App.css';

export default function App() {
  return (
    <ToggleProvider>
      <UserProvider>
        <Layout className={style.App} />
      </UserProvider>
    </ToggleProvider>
  );
}
