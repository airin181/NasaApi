import React from "react";
import Button from '@mui/material/Button';

import nea1 from "./../../../../../assets/neas/nea1.png";
import nea2 from "./../../../../../assets/neas/nea2.png";
import nea3 from "./../../../../../assets/neas/nea3.png";
import nea4 from "./../../../../../assets/neas/nea4.png";

const NeasCard = ({ data, remove }) => {

  const arrayImages = [nea1, nea2, nea3, nea4]
  const imageNea = arrayImages[Math.floor(Math.random() * arrayImages.length)]; //me saca num random del índice
  const date = data.discovery_date.slice(0, -13);

  /* console.log(data.discovery_date); */
  /* console.log('date',date); */


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

  </section>
};

export default NeasCard;
