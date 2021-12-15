import axios from "axios";
import { useEffect } from "react";
import { useUser } from "../../context/userContext";
import Card from "../card/Card";
import { v4 as uuid } from "uuid";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function ViewStory() {
  const { state, dispatch } = useUser();
  useEffect(() => {
    const id = state.userInfo.id;
    axios
      .get(`http://localhost:3002/data`)
      .then(({ data }) => data.filter((el) => el.userId === id))
      .then((result) => {
        dispatch({ type: "INITIAL_DATA", payload: result });
      });
  }, []);
  return (
    <div className="container">
     
      <Container sx={{ py: 8 }} >
      <Grid container spacing={4} >
      {state.userData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((el) => (
           
              <Card data={el} key={uuid()} />
              
        ))}
        </Grid>
        </Container>
        
    </div>
  );
}
