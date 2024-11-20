import { Header } from '@/components/shared';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </>
  );
};
