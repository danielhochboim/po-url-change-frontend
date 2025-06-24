'use client';
import { AppBar, Toolbar, Typography, Box, IconButton, Container, SvgIcon } from '@mui/material';
import { Settings, Cable, Home } from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: 0 }}>
          <Cable sx={{ mr: 2, fontSize: 28 }} />
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 600,
              letterSpacing: '0.5px'
            }}
          >
            Change URL
          </Typography>
          <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              ml: 1,
              '& svg': { 
                fontSize: 24,
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))'
              }
            }}>
              SPIDER🕷️
            </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}