import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 4, mt: 'auto', borderTop: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          
          <Typography variant="body2" color="text.secondary">
            {/* SLOGAN HERE */}
            © {new Date().getFullYear()} My Licktionary. Keep shredding. 🎷 
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              About
            </Link>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              Privacy
            </Link>
            <Link href="https://github.com/MQUEMADO16/licktionary-client" target="_blank" color="text.secondary" underline="hover" variant="body2">
              GitHub
            </Link>
          </Stack>

        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;