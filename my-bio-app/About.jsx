import { Paper, Typography, Box } from '@mui/material';

const About = ({ PersonIcon }) => {
  return (
    <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <PersonIcon sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
        <Typography variant="h3" sx={{ fontWeight: 600, fontSize: '1.75rem' }}>
          About Me
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
        I'm a passionate 3rd-year BSIT student specializing in programming, with a strong interest in both 
        software development and hardware/electronics. Currently exploring various technologies and building 
        practical projects to enhance my skills.
      </Typography>
      
      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
        My journey in technology started with an interest in electronics and electrical, which led me to 
        create my first major project - a Car Brake Heat Control System. This project combined my electrical 
        knowledge with programming, sparking my interest in software and hardware development.
      </Typography>
      
      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
        I'm now focusing on web application developer while continuing to work on electronics projects. 
        I believe in learning by doing and enjoy creating practical solutions to real-world problems.
      </Typography>
    </Paper>
  );
};

export default About;