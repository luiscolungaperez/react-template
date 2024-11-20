import { RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { router } from '@/routes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </ThemeProvider>
  );
}
