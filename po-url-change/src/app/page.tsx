'use client';
import { Container, Typography, Box, Paper, Fade } from '@mui/material';
import { Router, Update } from '@mui/icons-material';
import ChannelSelect from '@/components/ChannelSelect';

export default function Home() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      py: 4
    }}>
      <Container maxWidth="md">
        <Fade in timeout={800}>
          <Paper 
            elevation={8}
            sx={{ 
              p: 4,
              borderRadius: 4,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box sx={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 2, 
                mb: 2,
                p: 2,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
              }}>
                <Router sx={{ fontSize: 32 }} />
                <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
                  Change URL
                </Typography>
              </Box>
              <Typography 
                variant="subtitle1" 
                color="text.secondary"
                sx={{ fontSize: '1.1rem', maxWidth: '600px', mx: 'auto' }}
              >
                Configure URL of receiver REST channels with ease<br />
                Select a channel below to view and modify its URL
              </Typography>
            </Box>

            <Box sx={{ 
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              borderRadius: 3,
              p: 3,
              border: '1px solid #e2e8f0'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <Update color="primary" />
                <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                  Channel Configuration
                </Typography>
              </Box>
              <ChannelSelect />
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}