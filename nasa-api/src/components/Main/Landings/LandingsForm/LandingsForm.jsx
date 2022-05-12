import { React, useContext, useState } from 'react'
import { landingsContext } from './../../../../context/landingsContext';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



function LandingsForm() {

  const { register, handleSubmit } = useForm();
  const { createLanding } = useContext(landingsContext); 
  
/* const [send, setSend] = useState(false); // mensaje de pokemon guardado 
 */

   const onSubmit = (data) => {
    createLanding(data);
    console.log('nuevo landing creado:',data);
   /*  setSend(true) */
  }  

  return (
    <div>

      <h1 className='h1-form'>Register your own landing</h1>
      <form className='form-div' onSubmit={handleSubmit( onSubmit )}>

      <TextField
          style={{ width: "385px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
          name="name"
          {...register("name")}

        />
        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="text"
          label="Fall"
          variant="outlined"
          name="fall"
          {...register("fall")}
          minLength='3'
          required
        />
        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="number"
          label="ID"
          variant="outlined"
          name="id"
          {...register("id")}
          required
        />
        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="number"
          label="Mass"
          variant="outlined"
          name="mass"
          {...register("mass")}
        />

        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="text"
          label="Clase"
          variant="outlined"
          name="class"
          {...register("class")}
        />

        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="text"
          label="Latitude"
          variant="outlined"
          name="lat"
          {...register("lat")}
        />  

        <TextField
          style={{ width: "385px", margin: "5px" }}
          type="text"
          label="Longitude"
          variant="outlined"
          name="long"
          {...register("long")}
        />    

         <TextField
          style={{ width: "385px", margin: "5px" }}
          type="date"
          label=""
          variant="outlined"
          name="year"
          {...register("year")}
        />     

         <div className='save-landing'>
          <Button type="submit" variant="contained">SAVE</Button>
        {/*   {send ? <Stack><Alert severity="success">Landing saved!</Alert>
          </Stack>: ""} */}
{/*           <Button type="submit" variant="outlined" component={Link} to="/pokedex">CHECK ALL LANDINGS</Button>
 */}        </div> 
      </form>
    </div>
  )
}

export default LandingsForm
