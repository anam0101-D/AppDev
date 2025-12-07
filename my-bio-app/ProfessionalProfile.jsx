import React from 'react';
import { Paper, Typography, Box, Divider } from '@mui/material';
import { 
  RocketLaunch, Work, School, Code, Star, DirectionsCar, Group
} from '@mui/icons-material';

import Experience from './Experience.jsx';
import Education from './Education.jsx';
import FeaturedProjects from './FeaturedProjects.jsx';

const ProfessionalProfile = () => {
  const experiences = [ 
    { title: 'IT Student', school: 'Cebu Technological University - Argao Campus', period: 'Summer 2023 (3 months)', 
      description: 'Assisted in basic IT support and hardware maintenance.', 
      achievements: ['Provided technical support for office equipment', 'Assisted in setting up computer hardware', 'Learned about hardware troubleshooting', 'Made a BIT Projects using Arduino a Car Break Heat Control System'],
      company: 'Cebu Technological University - Argao Campus' 
    },
  ];

  const education = [ 
    { degree: 'Bachelor of Science in Information Technology', institution: 'Cebu Technological University - Argao Campus', period: '3rd Year College (Currently Enrolled)', description: 'Major in Programming', 
      courses: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Web Development', 'Database Management', 'Networking Fundamentals'],
    },
    { degree: 'Senior High School - TVL Track', institution: 'Dalaguete National High School', period: 'Graduated 2023', description: 'Specialized in Technology and Engineering.',
    },
  ];

  const featuredProjects = [ 
    { name: 'Car Brake Heat Control System', type: 'BIT Project', 
      description: 'An electronic system designed to improve car brake efficiency and safety', technologies: ['Arduino', 'C++', 'Electronics', 'Sensors'], 
      status: 'Completed (Class Project)', features: ['Automatic water spray when the brakes overheat', 'LED indicator system'] },
    { name: 'Personal Portfolio Website', type: 'Web Development', 
      description: 'A responsive portfolio website showcasing my projects and skills', technologies: ['HTML', 'CSS', 'JavaScript', 'React'], status: 'Completed', 
      features: ['Responsive design', 'Project showcase', 'Contact form'] },
  ];
  
  const groupProjects = [ 
    { name: 'Poinky Web Application', description: 'Group project for Database Management course', 
      technologies: ['MySQL', 'HTML', 'CSS', 'JavaScript'], teamSize: 6, role: 'Frontend Developer' },
  ];
  
  const professionalData = { experiences, education, featuredProjects, groupProjects };

  return (
    <Paper elevation={1} sx={{ p: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <RocketLaunch sx={{ color: 'primary.main', mr: 2, fontSize: 32 }} />
        <Typography variant="h2" sx={{ fontWeight: 600, fontSize: '2rem' }}>
          Academic & Project Profile
        </Typography>
      </Box>

      <Experience experiences={professionalData.experiences} WorkIcon={Work} StarIcon={Star} />

      <Divider sx={{ my: 4 }} />

      <Education education={professionalData.education} SchoolIcon={School} StarIcon={Star} />

      <Divider sx={{ my: 4 }} />

      <FeaturedProjects 
        featuredProjects={professionalData.featuredProjects} 
        groupProjects={professionalData.groupProjects}
        CodeIcon={Code}
        DirectionsCarIcon={DirectionsCar}
        StarIcon={Star}
        GroupIcon={Group}
      />
    </Paper>
  );
};

export default ProfessionalProfile;