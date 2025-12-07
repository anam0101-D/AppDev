import React from 'react';
import { Typography, Box, Card, CardContent, Chip, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';

const Education = ({ education, SchoolIcon, StarIcon }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <SchoolIcon sx={{ color: 'secondary.main', mr: 2, fontSize: 28 }} />
        <Typography variant="h3" sx={{ fontWeight: 600, fontSize: '1.5rem' }}>
          Education
        </Typography>
      </Box>

      {education.map((edu, index) => (
        <Card key={index} variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', fontSize: '1.25rem' }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                  {edu.institution}
                </Typography>
              </Box>
              <Chip
                label={edu.period}
                size="small"
                sx={{
                  backgroundColor: 'secondary.light',
                  color: 'white',
                  fontWeight: 500,
                }}
              />
            </Box>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
              {edu.description}
            </Typography>

            {edu.courses && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                  Relevant Courses:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {edu.courses.map((course, idx) => (
                    <Chip
                      key={idx}
                      label={course}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.light',
                        color: 'white',
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}
            
            {edu.achievements && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                  Achievements:
                </Typography>
                <List dense>
                  {edu.achievements.map((achievement, idx) => (
                    <ListItem key={idx} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <StarIcon sx={{ color: 'secondary.main', fontSize: 14 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={achievement}
                        primaryTypographyProps={{ color: 'text.secondary', fontSize: '0.875rem' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
};

export default Education;