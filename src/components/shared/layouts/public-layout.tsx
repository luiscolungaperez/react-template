import { Outlet } from 'react-router';

export const PublicLayout: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Outlet />
    </main>
  );
};
