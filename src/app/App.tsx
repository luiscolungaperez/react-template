import { ProtectedLayout } from '@/components/shared/layouts/protected-layout';
import { PublicLayout } from '@/components/shared/layouts/public-layout';
import { SignIn } from '@/pages/auth/sign-in';
import { SignUp } from '@/pages/auth/sign-up';
import { Navigate, Route, Routes } from 'react-router';

export default function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/auth" replace />} />

      <Route path="/auth" element={<PublicLayout />}>
        <Route index element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route index element={<div>Dashboard</div>} />
      </Route>

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
