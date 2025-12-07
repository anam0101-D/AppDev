import { Paper, Typography, Box, Grid, LinearProgress } from '@mui/material';
import { ElectricalServices, Memory, Language, Code, Settings, Engineering } from '@mui/icons-material';

const Skills = () => {
  const skills = [
    { name: 'Basic Electrical', level: 70, icon: <ElectricalServices />, category: 'Technical' },
    { name: 'Basic Electronics', level: 55, icon: <Memory />, category: 'Technical' },
    { name: 'HTML/CSS', level: 60, icon: <Language />, category: 'Programming' },
    { name: 'JavaScript', level: 50, icon: <Code />, category: 'Programming' },
    { name: 'Basic Troubleshooting', level: 80, icon: <Settings />, category: 'Technical' },
  ];
  
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: 'background.paper' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Engineering sx={{ color: 'secondary.main', mr: 2, fontSize: 28 }} />
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Technical Skills
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ color: 'primary.main', mr: 1 }}>
                  {skill.icon}
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {skill.name}
                </Typography>
                <Typography variant="caption" sx={{ ml: 'auto', color: 'text.secondary' }}>
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={skill.level} 
                sx={{ 
                  height: 8, 
                  borderRadius: 4,
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: skill.category === 'Technical' ? 'secondary.main' : 'primary.main'
                  }
                }}
              />
              <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5 }}>
                {skill.category}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Skills;