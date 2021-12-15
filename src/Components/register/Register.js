import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddReactionIcon from '@mui/icons-material/AddReaction';
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

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleButton() {
    const { data } = await axios.get("http://localhost:3002/user");
    const matching = data.find((el) => el.username === username);
    if (matching) {
      setError("username already exists");
      setTimeout(() => setError(""), 4000);
    } else {
      const response = await axios.post("http://localhost:3002/user", {
        id: uuid(),
        name,
        username,
        password,
      });
      if (response.status === 201) {
        console.log("user created");
        navigate("/login");
      }
    }
  }

  return (
    <div className="container-fluid row bg-dark text-white mb-4 pb-5 align-center">

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
          <AddReactionIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register to save your Memories
        </Typography>
          <Box component="form" Validate sx={{ mt: 1 }}>
            <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your Name"
            name="name"
              autoComplete="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
          />
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
            <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
              label="Confirm Password"
              
              
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
           Register
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/login" variant="body2" style={{textDecoration:"none", color: "#35BDD0"}}>
                {"Already have an account? Login"}
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
    // <div className="container-fluid bg-dark text-white main-page text-center m-0">
    //   <div className="container-sm text-dark py-2 rounded w-50">
    //     <div className="my-5 text-white fs-3">SignUp</div>
    //     <div className="form-floating mb-3 mt-5">
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="Enter Name"
    //         id="floatingName"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <label htmlFor="floatingName">Name</label>
    //     </div>
    //     <div className="form-floating mb-3">
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="floatingInput"
    //         placeholder="name@example.com"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //       <label htmlFor="floatingInput">Username</label>
    //     </div>
    //     <div className="form-floating">
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="floatingPassword"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <label htmlFor="floatingPassword">Password</label>
    //     </div>
    //     <button className="btn btn-success mt-4 px-4" onClick={handleButton}>
    //       Register
    //     </button>
    //     <br />
    //     <div className="text-danger">{error}</div>
    //   </div>
    // </div>
  );
}
