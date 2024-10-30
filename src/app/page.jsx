import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Readings from '@/components/Readings';

import DarkModeToggle from '@/components/DarkModeToggle';

export default function Home() {
  return (
    <Container>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Readings />
        <DarkModeToggle />
      </Box>
    </Container>
  );
}
