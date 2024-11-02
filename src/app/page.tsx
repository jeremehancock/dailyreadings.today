import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Readings from '@/components/Readings';

export default function Home() {
  return (
    <Container>
      <Box my={4}>
        <Readings />
      </Box>
    </Container>
  );
}
