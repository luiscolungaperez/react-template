import { Outlet } from 'react-router';
import { Header } from '../header';

export const ProtectedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <Outlet />
      </main>
    </>
  );
};
