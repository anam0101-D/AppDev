import { Paper, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const Interests = ({ interests, LightbulbIcon }) => {
  return (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <LightbulbIcon sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
        <Typography variant="h3" sx={{ fontWeight: 600, fontSize: '1.75rem' }}>
          Interests & Hobbies
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {interests.map((interest, index) => (
          <Grid item xs={6} sm={4} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent sx={{ p: 2, textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 1, fontSize: '1.5rem' }}>
                  {interest.icon}
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {interest.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Interests;