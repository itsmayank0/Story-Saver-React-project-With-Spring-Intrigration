import React from "react";
import ImageCard from "../imageCard/ImageCard";
// import axios from "axios";
import ShowDate from "../date/ShowDate";
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
// import { Card as mCard } from '@mui/material/Card';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import Edit from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

export default function Card({ data }) {
  const navigate = useNavigate();
  toast.configure();
  // console.log(data)
  const { sid, title, image, color, time } = data;
  console.log(data);
  function handleEditbutton() {
    console.log("Edit", sid);
    navigate(`/edit/${sid}`);
  }
  function handleDeleteButton() {
    fetch(`http://localhost:8088/api/stcontrol/story/${sid}`,
    {
     method: 'DELETE',
     headers:{
     'Content-Type':'application/json'
     },
    })
    .then(res=>res.json())
      .then(res => {
        console.log("after delate micro service", res);
        
        toast.success('Story deleted Successfully', {
          transition: Zoom //Zoom, Flip, Bounce
        })
        window.location.reload(false);
      })
    .catch(e=>console.log("Exception in Dashboard",e));
    
    console.log("Delete", sid);
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
      <Grid  xs={12} sm={6} md={10} >
        <mCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <ImageCard images={image} />
          <CardContent sx={{ flexGrow: 1 }}>
          {/* <Typography gutterBottom variant="h5" component="h2">
                      Heading
          </Typography> */}
           <Typography>
           <p className="card-text" style={{ color }}>
          {title}
        </p>
              <small className="text-muted lead my-0 fs-6">
                <ShowDate date={time} />
              </small>
            </Typography>
          </CardContent>
            <CardActions style={{marginBottom:"20px"}}>
              
                    <Button variant="outlined" onClick={handleEditbutton}><EditIcon/></Button>
                    <Button variant="outlined" onClick={handleDeleteButton} ><DeleteOutlineIcon /></Button>
          </CardActions>
        </mCard>
      </Grid>
    
    
      </div>
    </div>
  );
}
