import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  palette: {
    primary:{
      main: '#35BDD0',
    },
    secondary: {
      main: '#F4A201'
    }
  },
});
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useUser();
  const navigate = useNavigate();

  async function handleButton() {
    const { data } = await axios.get("http://localhost:3002/user");
    const user = data.find((el) => el.username === username);
    if (username != "" || password != "") {
      if (!user) {
        setError("No such user exists");
        setTimeout(() => setError(""), 4000);
        setUsername("");
        setPassword("");
      } else {
        if (user.password === password) {
          setError("UserName or password is Incorrect!")
          dispatch({
            type: "LOGIN",
            payload: { username, password, id: user.id, name: user.name },
          });
          navigate("/");
        }
      }
    }
      else {
        setError("UserName and password Is Mandatory!")
      }

  }

  return (
  
    <div className="container-fluid row bg-dark text-white mb-5 pb-5 align-center">
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{color: "white"}}>
          Sign in to your Memories
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="email"
              autoComplete="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
                autoFocus
              
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            onClick={handleButton}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2" style={{textDecoration:"none", color: "#35BDD0"}}>
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
     
        
    
      <div id="alert alert-danger" className="mb-4" style={{color: "red"}}>
                            {error}
      </div>
        </Container>
        
  </ThemeProvider>
    </div>
  );
}
