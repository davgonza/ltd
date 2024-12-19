import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import paths, { rootPaths } from 'routes/paths';
import IconifyIcon from 'components/base/IconifyIcon';
import PasswordTextField from 'components/common/PasswordTextField';
import LogoHeader from 'layouts/main-layout/sidebar/LogoHeader';
import { supabase } from '/utils/supabaseClient';

const checkBoxLabel = { inputProps: { 'aria-label': 'Checkbox' } };

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setError(null); // Reset errors before submission

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: 'http://localhost:3000/welcome', // Change to your redirect URL
        },
      });

      if (error) throw error;
      if (data.user) {
        // Optional: save user info to your database or perform additional setup
        navigate(rootPaths.root); // Redirect to the root page after successful sign-up
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <LogoHeader sx={{ justifyContent: 'center', mb: 5 }} />

      <Paper sx={{ p: 5 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ sm: 'center' }}
          justifyContent="space-between"
          spacing={1}
        >
          <Typography variant="h3">Sign up</Typography>
          <Typography variant="subtitle2" color="neutral.main">
            Have an account?{' '}
            <Link href={paths.signin} underline="hover">
              Sign in
            </Link>
          </Typography>
        </Stack>

        <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />

            <PasswordTextField
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              fullWidth
              required
              value={formData.password}
              onChange={handleChange}
            />
          </Stack>

          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <FormControlLabel
            control={<Checkbox {...checkBoxLabel} color="primary" />}
            label={
              <Typography variant="subtitle2" whiteSpace="nowrap">
                Accept{' '}
                <Link href="#!" underline="hover" sx={{ fontWeight: 'fontWeightBold' }}>
                  terms
                </Link>{' '}
                &{' '}
                <Link href="#!" underline="hover" sx={{ fontWeight: 'fontWeightBold' }}>
                  privacy policy
                </Link>
              </Typography>
            }
            sx={{ mt: 2 }}
          />

          <Button type="submit" size="large" variant="contained" sx={{ mt: 2 }} fullWidth>
            Sign up
          </Button>

          <Divider sx={{ color: 'neutral.main', my: 2 }}>
            <Typography variant="subtitle2">or sign up with</Typography>
          </Divider>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<IconifyIcon icon="devicon:google" />}
                sx={{ color: 'error.main', borderColor: 'error.main' }}
                fullWidth
              >
                <Typography>Google</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<IconifyIcon icon="logos:facebook" />}
                sx={{ color: 'primary.light', borderColor: 'primary.light' }}
                fullWidth
              >
                <Typography>Facebook</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
