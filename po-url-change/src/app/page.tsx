'use client';
import { Container, Typography, Box } from '@mui/material';
import ChannelSelect from '@/components/ChannelSelect';

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Receiver REST Channels
      </Typography>
      <Box sx={{ mt: 2 }}>
        <ChannelSelect />
      </Box>
    </Container>
  );
}