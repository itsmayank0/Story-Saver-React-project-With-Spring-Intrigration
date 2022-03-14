// import axios from "axios";
import { useEffect, useState } from "react";
// import { useUser } from "../../context/userContext";
import Card from "../card/Card";
import { v4 as uuid } from "uuid";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function ViewStory() {
  const [stor, setStor] = useState([]);
  useEffect(() => {
    var jwt = require("jsonwebtoken");
    var result = jwt.decode(localStorage.getItem('token'));



    fetch(`http://localhost:8088/api/stcontrol/stories/${result.sub}`,{
      
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }),
  })
  .then(e=>e.json())
  .then(e=>{console.log("in dashboard after micro service fetch",e.length);setStor(e)})
  .catch(e=>console.log("Exception In login after userMS",e));
  }, []);
  return (
    <div className="container">
     
      <Container sx={{ py: 8 }} >
      <Grid container spacing={4} >
      {stor
        .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((el) => (
              <Card data={el} key={uuid()} />
            ))}
        </Grid>
        </Container>
        
    </div>
  );
}
