import { 
  ThemeProvider, 
  createTheme, 
  Container, 
  CssBaseline,
  Box
} from '@mui/material';
import Header from './my-bio-app/Header.jsx';
import About from './my-bio-app/About.jsx';
import Skills from './my-bio-app/Skills.jsx';
import Interests from './my-bio-app/Interests.jsx';
import ProfessionalProfile from './my-bio-app/ProfessionalProfile.jsx';
import { Lightbulb, Person } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});

function App() {
  const interests = [
    { name: 'Electronics Projects', icon: '⚡' },
    { name: 'Coding', icon: '💻' },
    { name: 'Gaming', icon: '🎮' },
    { name: 'Reading Tech Blogs', icon: '📖' },
    { name: 'DIY Projects', icon: '🔧' },
    { name: 'Learning New Tech', icon: '🚀' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        backgroundColor: 'background.default',
        py: 4
      }}>
        <Container maxWidth="lg">
          <Header />
          <Box sx={{ mt: 4 }}>
            <About PersonIcon={Person} />
            <Skills />
            <Interests interests={interests} LightbulbIcon={Lightbulb} />
            <ProfessionalProfile />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;