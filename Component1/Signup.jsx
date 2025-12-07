import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

export default function AuthPanel() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 3,
      }}
    >
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>

            <Box component="form">
              <TextField
                fullWidth
                label="Username"
                name="username"
                margin="normal"
              />

              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                margin="normal"
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Sign Up
            </Typography>

            <Box component="form">
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                margin="normal"
              />

              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                margin="normal"
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2, backgroundColor: "#b72acaff" }}
              >
                Register
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
