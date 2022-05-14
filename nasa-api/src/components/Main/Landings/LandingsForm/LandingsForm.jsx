import { React, useContext, useState } from 'react'
import { landingsContext } from '../../../../context/landingsContext';
import { useForm } from "react-hook-form";


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



function LandingsForm() {

  const { register, handleSubmit } = useForm();
  const { createLanding } = useContext(landingsContext); 
  
 const [send, setSend] = useState(false); // mensaje de pokemon guardado 
 

   const onSubmit = (data) => {
    const landingData = {

      fall: data.fall,
      geolocation:
       {latitude: data.reclat,
        longitude: data.reclong},
      id: data.id,
      mass: data.mass,
      name: data.name,
      nametype: data.nametype,
      recclass: data.recclass,
      reclat: data.reclat,
      reclong: data.reclong,
      year: data.year

    }
    createLanding(landingData);
    setSend(true) 
  }  

 return (
    <div>
<div className='div-gif'>
      <h1 className='h1-form'>Register your own landing</h1>
      <iframe src="https://giphy.com/embed/du9tXPzxB6grJuuO0J" width="80" height="30" frameBorder="0" className="giphy-embed" allowFullScreen="" title="astronaut"></iframe>
      
</div>
      <form className='form-div' onSubmit={handleSubmit( onSubmit )}>

      <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
          name="name"
          {...register("name")}
          required

        />
        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Fall"
          variant="outlined"
          name="fall"
          {...register("fall")}
          minLength='3'
          required
        />


<TextField
          style={{  margin: "5px" }}
          type="text"
          label="Name Type"
          variant="outlined"
          name="nametype"
          {...register("nametype")}
          required
        />

        <TextField
          style={{ margin: "5px" }}
          type="number"
          label="ID"
          variant="outlined"
          name="id"
          {...register("id")}
          required
        />
        <TextField
          style={{  margin: "5px" }}
          type="number"
          label="Mass"
          variant="outlined"
          name="mass"
          {...register("mass")}
          required
        />

        <TextField
          style={{  margin: "5px" }}
          type="text"
          label="Clase"
          variant="outlined"
          name="recclass"
          {...register("recclass")}
          required
        />

        <TextField
          style={{  margin: "5px" }}
          type="text"
          label="Latitude"
          variant="outlined"
          name="reclat"
          {...register("reclat")}
          required
        />  

        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Longitude"
          variant="outlined"
          name="reclong"
          {...register("reclong")}
          required
        />    

         <TextField
          style={{  margin: "5px" }}
          type="date"
          label=""
          variant="outlined"
          name="year"
          {...register("year")}
          required
        />     

         <div className='save-landing'>
         {send ? <Stack><Alert severity="success">Landing saved!</Alert></Stack>: ""}
          <Button type="submit" variant="contained">SAVE</Button>
          
       </div> 
      </form>
    </div>
  )
}

export default LandingsForm
