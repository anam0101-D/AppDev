import React from 'react';
import { Typography, Box, Card, CardContent, Chip, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const FeaturedProjects = ({ featuredProjects, groupProjects, CodeIcon, DirectionsCarIcon, StarIcon, GroupIcon }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <CodeIcon sx={{ color: 'secondary.main', mr: 2, fontSize: 28 }} />
        <Typography variant="h3" sx={{ fontWeight: 600, fontSize: '1.5rem' }}>
          Featured Projects
        </Typography>
      </Box>

      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'primary.main', fontSize: '1.25rem' }}>
        🏆 Major Project: Car Brake Control System
      </Typography>

      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <DirectionsCarIcon sx={{ color: 'secondary.main', mr: 2, fontSize: 24 }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {featuredProjects[0].name}
              </Typography>
              <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                {featuredProjects[0].type} | Electronics + Programming
              </Typography>
            </Box>
          </Box>

          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
            {featuredProjects[0].description}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
              Key Features:
            </Typography>
            <List dense>
              {featuredProjects[0].features.map((feature, idx) => (
                <ListItem key={idx} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <StarIcon sx={{ color: 'secondary.main', fontSize: 14 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    primaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {featuredProjects[0].technologies.map((tech, idx) => (
              <Chip
                key={idx}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'white',
                }}
              />
            ))}
          </Box>

          <Chip
            label={featuredProjects[0].status}
            sx={{
              backgroundColor: '#4CAF50',
              color: 'white',
              fontWeight: 500,
            }}
          />
        </CardContent>
      </Card>

      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'primary.main', fontSize: '1.25rem' }}>
        🌐 Web Development Projects
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {featuredProjects.slice(1).map((project, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {project.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
                      {project.description}
                    </Typography>
                  </Box>
                  <Chip
                    label={project.status}
                    size="small"
                    color={project.status === 'Completed' ? 'success' : 'warning'}
                  />
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.light',
                        color: 'white',
                      }}
                    />
                  ))}
                </Box>
                
                {project.features && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.features.map((feature, idx) => (
                      <Chip
                        key={idx}
                        label={feature}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'primary.main', fontSize: '1.25rem' }}>
        👥 Group Projects (Academic)
      </Typography>

      <Grid container spacing={3}>
        {groupProjects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    {project.description}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    icon={<GroupIcon />}
                    label={`${project.teamSize} members`}
                    size="small"
                  />
                  <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    {project.role}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {project.technologies.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'secondary.light',
                        color: 'white',
                        fontSize: '0.7rem',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProjects;