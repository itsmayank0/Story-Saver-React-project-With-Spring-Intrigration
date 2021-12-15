import ViewStory from "../viewStory/ViewStory";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Search from "../SearchBar/Search";

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

export default function Home() {
  return (
    <div className="text-light">
      <ThemeProvider theme={theme}>
      <Box
          sx={{
            backgroundColor: '#D9D55B',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to the world of Memories
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something memorable and unforgettable about the your life,
              you are the creator, Make it short and sweet, but not too short so that you
              don&apos;t simply forget your memory.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined" style={{padding:"18px 15px 18px 15px", backgroundColor:"#35BDD0", borderRadius: "10px"}}><Link to="/create-new-story" style={{ textDecoration: "none", color: "#0d0d0d" }}>Add your Memory Now</Link></Button>
              {/* <Button variant="outlined"><Link to="/" style={{ textDecoration: "none", color: "#35BDD0" }}  >Go to Dashboard Now</Link></Button> */}
            </Stack>
          </Container>
        </Box>
        <div className="container">
          <div className="row pt-3"><Search/></div>
        </div>
         

        <ViewStory />
      </ThemeProvider>
    </div>
  );
}
