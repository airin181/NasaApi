import React, {useState, useContext} from "react";
import { useForm } from 'react-hook-form'
import { neasContext } from '../../../../../context/neasContext';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';


//imagenes neas
import nea1 from "./../../../../../assets/neas/nea1.png";
import nea2 from "./../../../../../assets/neas/nea2.png";
import nea3 from "./../../../../../assets/neas/nea3.png";
import nea4 from "./../../../../../assets/neas/nea4.png";




//===============================================




const NeasCard = ({ data, remove }) => {


  const arrayImages = [nea1, nea2, nea3, nea4] // --> array de imágenes para hacer random

  const imageNea = arrayImages[Math.floor(Math.random() * arrayImages.length)]; //me saca num random del índice --> image random

  const date = data.discovery_date.slice(0, -13); // --> me quita todos los ceros de las horas de la fecha

  const [open, setOpen] = useState(false); // popup

  const { register, handleSubmit } = useForm() // registro de form

  const {handleEditNea} = useContext(neasContext); // me traigo función para editar







  // __________________UPDATE


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const updateNea = (dataNew) => {
    console.log(dataNew);
    try {
      const neaUpdated = {
        
        designation: data.designation,
        discovery_date: dataNew.discovery_date,
        h_mag: dataNew.h_mag,
        i_deg: dataNew.i_deg,
        moid_au: dataNew.moid_au,
        orbit_class: dataNew.orbit_class,
        period_yr: dataNew.period_yr,
        pha: dataNew.pha,
        q_au_1:dataNew.q_au_1,
        q_au_2:dataNew.q_au_2,
      }
      console.log('neaUpdated--->',neaUpdated);
      setOpen(false);
      handleEditNea(neaUpdated)
  
    } catch (error) {
      console.log(error);
    }
  
  }



// ***********************************

  return <section className='card-container'>

  <figure className='figure-asteroid'>
    <img src={imageNea} alt="asteroid" width={"100px"} />
  </figure> 

    <article className='card-content'>
      <p><b>PHA:</b> {data.pha}</p>
      <p><b>{data.designation}</b> </p>
      <p><b>Class: </b>{data.orbit_class}</p>
      <p><b>H (Abs. Magnitude):</b> {data.h_mag}</p>
      {data.discovery_date.length > 10? <p><b>Descovery date:</b> {date}</p> : <p><b>Descovery date:</b> {data.discovery_date}</p>}      
    </article>
    
    <Button type="submit" variant="outlined" id="remove" onClick={remove} style={{ margin: "1em" }}>REMOVE</Button>
    <Button type="submit" variant="outlined" id="edit" onClick={handleOpen} style={{ margin: "1em" }}>EDIT</Button>



    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit info about <u> {data.name}</u> NEA</DialogTitle>
      <form onSubmit={handleSubmit(updateNea)}>
        <DialogContent>
          <DialogContentText>
            You can update some basic info of the NEAs.
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label={"Designation: " + data.designation} type="text" fullWidth variant="standard" disabled />
          <TextField autoFocus margin="dense" id="id" label={"Discovery Data: " + data.discovery_date} type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("h_mag")}  name="h_mag" label="h_mag" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("i_deg")}  name="i_deg" label="i_deg" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("moid_au")}  name="moid_au" label="moid_au" type="number" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("orbit_class")}  name="orbit_class" label="orbit_class" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("period_yr")}  name="period_yr" label="period_yr" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("pha")}  name="pha" label="pha" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("q_au_1")}  name="q_au_1" label="q_au_1" type="text" fullWidth variant="standard" />
          <TextField autoFocus margin="dense" {...register("q_au_2")}  name="q_au_2" label="q_au_2" type="text" fullWidth variant="standard" />


        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>

      </form>
    </Dialog>

  </section>
};

export default NeasCard;
