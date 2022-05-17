import { React, useContext, useState } from 'react'
import { neasContext } from '../../../../context/neasContext';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const NeasForm = () => {



  const { register, handleSubmit } = useForm();
  const { createNea } = useContext(neasContext);
  const [send, setSend] = useState(false); // mensaje de nea guardado 
  const [pha, setPha] = useState('');


  const onSubmit = (data) => {
    const neaData = {

      designation: data.designation,
      discovery_date: data.date,
      h_mag: data.hmag,
      i_deg: data.ideg,
      moid_au: data.moiud_au,
      orbit_class: data.orbit_class,
      period_yr: data.period_yr,
      pha: pha,
      q_au_1: data.q_au_1,
      q_au_2: data.q_au_2,
    }

    console.log('neaData--->', neaData);
    createNea(neaData);
    setSend(true)
    
  }


  const handleChange = (event) => {
    setPha(event.target.value);
  };


  return (
    <div>
      <div className='back-div'>
        <img src="https://img.icons8.com/material/30/053a92/chevron-left--v1.png" style={{ width: "23px" }} alt="back" />
        <Button type="submit" variant="contained" component={Link} to="/neas" id="back">BACK</Button>
      </div>

      <div className='div-gif'>
        <h1 className='h1-form'>Register your own Nea</h1>
        <iframe src="https://giphy.com/embed/du9tXPzxB6grJuuO0J" width="80" height="30" frameBorder="0" className="giphy-embed" allowFullScreen="" title="astronaut"></iframe>
      </div>

      <form className='form-div' onSubmit={handleSubmit(onSubmit)}>

        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Designation"
          variant="outlined"
          name="designation"
          {...register("designation")}
          required

        />
        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Magnitude"
          variant="outlined"
          name="hmag"
          {...register("hmag")}
          required
        />


        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Inclination Degrees"
          variant="outlined"
          name="ideg"
          {...register("ideg")}
          required
        />

        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Minimum Orbit Intersection Distance"
          variant="outlined"
          name="moiud_au"
          {...register("moiud_au")}
          required
        />
        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Orbit Class"
          variant="outlined"
          name="orbit_class"
          {...register("orbit_class")}
          required
        />

        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Orbital Period in Years"
          variant="outlined"
          name="period_yr"
          {...register("period_yr")}
          required
        />

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">PHA</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pha}
              label="PHA"
              onChange={handleChange}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>

            </Select>
          </FormControl>
        </Box>

        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Distance in AU 1"
          variant="outlined"
          name="q_au_1"
          {...register("q_au_1")}
          required
        />

        <TextField
          style={{ margin: "5px" }}
          type="text"
          label="Distance in AU 2"
          variant="outlined"
          name="q_au_2"
          {...register("q_au_2")}
          required
        />

        <p style={{ textAlign: "left" }}>Descovery Date:</p>
        <TextField
          style={{ margin: "5px" }}
          type="date"
          label=""
          variant="outlined"
          name="date"
          {...register("date")}
          required
        />

        <div className='save-landing'>
          {send ? <Stack><Alert severity="success">Nea saved!</Alert></Stack> : ""}
          <div className='save-buttons'>
          <Button type="submit" variant="contained">SAVE</Button>
          {send ? <Button component={Link} to="/neas" variant="outlined" color="primary" type="submit" >BACK TO THE LIST</Button>: ""}

          </div>
        </div>

      </form>
    </div>
  )
}

export default NeasForm;
