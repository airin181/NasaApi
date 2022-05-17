import { React, useState, useContext } from 'react'
import { landingsContext } from '../../../../../context/landingsContext';

import { useForm } from 'react-hook-form'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';


import asteroid1 from "./../../../../../assets/meteors/meteor1.png";
import asteroid2 from "./../../../../../assets/meteors/meteor2.png";
import asteroid3 from "./../../../../../assets/meteors/meteor3.png";
import asteroid4 from "./../../../../../assets/meteors/meteor4.png";
import asteroid6 from "./../../../../../assets/meteors/meteor6.png";
import asteroid7 from "./../../../../../assets/meteors/meteor7.png";
import asteroid8 from "./../../../../../assets/meteors/meteor8.png";
import asteroid9 from "./../../../../../assets/meteors/meteor9.png";



const LandingsCard = ({ data, remove }) => {

  const {handleEditLanding} = useContext(landingsContext);


  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  

  const updateLanding = (dataNew) => {
    console.log(dataNew);
    try {
      const landingUpdated = {
        name: data.name,
        id: data.id,
        mass: dataNew.mass,
        recclass: dataNew.recclass,
        year: dataNew.year,
        reclat: dataNew.reclat,
        reclong: dataNew.reclong,
        geolocation: {
          latitude: dataNew.reclat,
          longitude: dataNew.reclong
        }
      }
      console.log('landingUpdated--->',landingUpdated);
      setOpen(false);
      handleEditLanding(landingUpdated)
  
    } catch (error) {
      console.log(error);
    }
  
  }







  //random image
  const arrayImages = [asteroid1, asteroid2, asteroid3, asteroid4, asteroid6, asteroid7, asteroid8, asteroid9]
  const imageAsteroid = arrayImages[Math.floor(Math.random() * arrayImages.length)]; //me saca num random del índice




  return <><section className='card-container'>
    <figure className='figure-asteroid'>
      <img src={imageAsteroid} alt="asteroid" width={"100px"} />
    </figure>
    <article className='card-content'>
      <p>ID NUM: {data.id}</p>
      <p><b>{data.name}</b> </p>
      <p> {data.reclat},  {data.reclong}</p>
      <p><b>Class:</b> {data.recclass}</p>
      <p><b>Mass:</b> {data.mass}kg</p>
    </article>

    <Button type="submit" variant="outlined" id="remove" onClick={remove} style={{ margin: "1em" }}>REMOVE</Button>
    <Button type="submit" variant="outlined" id="edit" onClick={handleOpen} style={{ margin: "1em" }}>EDIT</Button>

    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit info about <u> {data.name}</u> landing</DialogTitle>
      <form onSubmit={handleSubmit(updateLanding)}>
        <DialogContent>
          <DialogContentText>
            You can update some basic info of the landings.
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label={"Name: " + data.name} type="text" fullWidth variant="standard" disabled />
          <TextField autoFocus margin="dense" id="id" label={"ID Number: " + data.id} type="text" fullWidth variant="standard" disabled />
          <TextField autoFocus margin="dense" {...register("nametype")}  name="nametype" label="Name Type" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("recclass")}  name="recclass" label="Class" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("mass")}  name="mass" label="Mass" type="number" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("fall")}  name="fall" label="Fall" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("year")}  name="year" label="Year" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("reclat")}  name="reclat" label="Latitude" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("reclong")}  name="reclong" label="Longitude" type="text" fullWidth variant="standard" />

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </form>
    </Dialog>
  </section>

  </>
};

export default LandingsCard;