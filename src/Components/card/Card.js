import React from "react";
import ImageCard from "../imageCard/ImageCard";
import { useUser } from "../../context/userContext";
import axios from "axios";
import ShowDate from "../date/ShowDate";
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Card as mCard } from '@mui/material/Card';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Edit from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  const navigate = useNavigate();
  const { dispatch } = useUser();
  const { id, caption, images, color, date } = data;
  function handleEditbutton() {
    console.log("Edit", id);
    navigate(`/edit/${id}`);
  }
  function handleDeleteButton() {
    axios
      .delete(`http://localhost:3002/data/${id}`)
      .then((response) => console.log(response));
    dispatch({ type: "DELETEPOST", payload: id });
    console.log("Delete", id);
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
      <Grid  xs={12} sm={6} md={10} >
        <mCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <ImageCard images={images} />
          <CardContent sx={{ flexGrow: 1 }}>
          {/* <Typography gutterBottom variant="h5" component="h2">
                      Heading
          </Typography> */}
           <Typography>
           <p className="card-text" style={{ color }}>
          {caption}
        </p>
              <small className="text-muted lead my-0 fs-6">
                <ShowDate date={date} />
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
