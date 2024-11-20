import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Home, About } from '@/pages';

export const router = createBrowserRouter(
  [
    {
      id: 'root',
      path: '/',
      Component: () => <Layout />,
      children: [
        {
          index: true,
          Component: () => <Home />,
          HydrateFallback: () => <p>fallback for page</p>,
        },
        {
          path: 'about',
          Component: () => <About />,
          HydrateFallback: () => <p>fallback for page</p>,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
    },
  }
);
