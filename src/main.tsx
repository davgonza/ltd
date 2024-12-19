import { CssBaseline, ThemeProvider } from '@mui/material';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { supabase } from './utils/supabaseClient';
import router from 'routes/router';
import SignIn from './pages/authentication/SignIn';
import { theme } from 'theme/theme';

const Root = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = (await supabase.auth.getSession()) as any;
      console.log({ data });
      setUser(data?.user || null);
      setLoading(false);
    };

    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
    });

    return () => {
      console.log({ listener });

      //   (listener as any)?.unsubscribe();
    };
  }, []);

  if (loading) return <div>Loading...</div>; // Show a loading indicator while checking auth

  return user ? (
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </BreakpointsProvider>
    </ThemeProvider>
  ) : (
    <SignIn />
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
