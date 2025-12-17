import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { Typography, Box, Button } from '@mui/material';
import { useAuth } from './context/authContext';

// --- Placeholder Pages (We will move these to /pages next) ---

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {user ? `Welcome back, ${user.username}!` : 'My Library'}
      </Typography>
      <Typography color="text.secondary">
        Select "New Lick" to start building your vocabulary.
      </Typography>
    </Box>
  );
};

const CreatePhrase = () => (
  <Box>
    <Typography variant="h4">New Lick</Typography>
    <Typography color="text.secondary">Form goes here...</Typography>
  </Box>
);

const Login = () => (
    <Box>
      <Typography variant="h4">Login Page</Typography>
      <Typography color="text.secondary">Login form goes here...</Typography>
    </Box>
);

const NotFound = () => (
  <Box textAlign="center" py={10}>
    <Typography variant="h1" color="primary" sx={{ opacity: 0.2, fontWeight: 900 }}>404</Typography>
    <Typography variant="h5" gutterBottom>Lost in the changes?</Typography>
    <Button href="/" variant="outlined">Take it from the top</Button>
  </Box>
);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<CreatePhrase />} />
        <Route path="/login" element={<Login />} />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;