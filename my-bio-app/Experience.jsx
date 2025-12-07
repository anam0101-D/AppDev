import React from 'react';
import { Typography, Box, Card, CardContent, Chip, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';

const Experience = ({ experiences, WorkIcon, StarIcon }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <WorkIcon sx={{ color: 'secondary.main', mr: 2, fontSize: 28 }} />
        <Typography variant="h3" sx={{ fontWeight: 600, fontSize: '1.5rem' }}>
          Experience & Internships
        </Typography>
      </Box>

      {experiences.map((exp, index) => (
        <Card key={index} variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '1.25rem' }}>
                  {exp.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                  {exp.school}
                </Typography>
              </Box>
              <Chip
                label={exp.period}
                size="small"
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'white',
                  fontWeight: 500,
                }}
              />
            </Box>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
              {exp.description}
            </Typography>

            <List dense>
              {exp.achievements.map((achievement, idx) => (
                <ListItem key={idx} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <StarIcon sx={{ color: 'secondary.main', fontSize: 16 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={achievement}
                    primaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
};

export default Experience;