import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Divider,
  Link,
  InputAdornment,
  IconButton,
  Alert,
  GridLegacy as Grid,
} from '@mui/material';
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, let's just check if email contains '@' and password length
      if (!email.includes('@') || password.length < 6) {
        setError('Invalid email or password. Password must be at least 6 characters.');
        setIsSubmitting(false);
        return;
      }

      // Successful login
      console.log('Login successful', { email, password });
      // Redirect to home page
      navigate('/');
    }, 1000);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="md" sx={{ py: 6, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper 
        elevation={8} 
        sx={{ 
          p: { xs: 3, sm: 5 }, 
          borderRadius: 4, 
          width: '100%',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(245, 0, 87, 0.05) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2, #f50057)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Welcome Back
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Sign in to continue to Smart Sports Booking
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
             <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
             <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                        sx={{ color: 'primary.main' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'right', mt: 2 }}>
            <Link component={RouterLink} to="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ 
              mt: 4, 
              mb: 3, 
              py: 1.5,
              borderRadius: 3,
              fontSize: '1.1rem',
              fontWeight: 600,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                boxShadow: '0 6px 25px rgba(25, 118, 210, 0.4)',
                transform: 'translateY(-2px)'
              },
              '&:disabled': {
                background: 'rgba(0, 0, 0, 0.12)',
                boxShadow: 'none'
              },
              transition: 'all 0.3s ease'
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>

          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link component={RouterLink} to="/register" variant="body2">
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" color="text.secondary">
            OR
          </Typography>
        </Divider>

        <Grid container spacing={2}>
           <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Google />}
              sx={{ 
                justifyContent: 'flex-start', 
                py: 1.5,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'text.primary',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Sign in with Google
            </Button>
          </Grid>
           <Grid item xs={12} md={6}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Facebook />}
              sx={{ 
                justifyContent: 'flex-start', 
                py: 1.5,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'text.primary',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Sign in with Facebook
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;