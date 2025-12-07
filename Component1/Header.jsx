import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2', mb: 3 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <AccountCircleIcon sx={{ fontSize: 32, mr: 1 }} />
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            AuthPortal
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}