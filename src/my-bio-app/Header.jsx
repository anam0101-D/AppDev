import { Paper, Typography, Box, Avatar, Chip, Stack, Button, Grid } from '@mui/material';
import { School, Email, GitHub } from '@mui/icons-material';
import profilePhoto from '../assets/Profile/Profile.jpg'; 

const Header = () => {
  return (
    <Paper
      elevation={3}
      sx={{ 
        p: 4,
        backgroundColor: 'background.paper',
        borderRadius: 2
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src={profilePhoto}
            sx={{ 
              width: 200, 
              height: 200,
              border: '4px solid',
              borderColor: 'primary.main'
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h1" sx={{ color: 'text.primary', mb: 1 }}>
            Domingo Delos Angeles B. Anam
          </Typography>
          <Typography variant="h5" sx={{ color: 'text.secondary', mb: 2 }}>
            3rd Year BSIT Student | Programming Major | Tech Enthusiast
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
            <Chip
              icon={<School />}
              label="BSIT Student"
              sx={{ backgroundColor: 'primary.light', color: 'white' }}
            />
            <Chip
              label="Programming Major"
              sx={{ backgroundColor: 'secondary.light', color: 'white' }}
            />
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button
              variant="contained"
              startIcon={<Email />}
              sx={{ backgroundColor: 'primary.main' }}
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHub />}
              sx={{ color: 'primary.main', borderColor: 'primary.main' }}
            >
              View Projects
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;