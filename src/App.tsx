import { Routes, Route } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

// Placeholder components for now (we will move these to /pages later)
const Dashboard = () => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      The Licktionary Dashboard
    </Typography>
    <Typography variant="body1">
      Your jazz vocabulary starts here.
    </Typography>
  </Box>
);

const NotFound = () => (
  <Box sx={{ my: 4, textAlign: 'center' }}>
    <Typography variant="h3" color="error">404</Typography>
    <Typography variant="h5">Page not found</Typography>
  </Box>
);

function App() {
  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        {/* Future Routes: */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/new" element={<CreatePhrase />} /> */}
        
        {/* Catch all for 404s */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;