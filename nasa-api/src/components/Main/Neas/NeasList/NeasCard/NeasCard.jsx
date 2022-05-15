import React from "react";
import nea1 from "./../../../../../assets/neas/nea1.png";
import nea2 from "./../../../../../assets/neas/nea2.png";
import nea3 from "./../../../../../assets/neas/nea3.png";
import nea4 from "./../../../../../assets/neas/nea4.png";

const NeasCard = ({ data }) => {

  const arrayImages = [nea1, nea2, nea3, nea4]
  const imageNea = arrayImages[Math.floor(Math.random() * arrayImages.length)]; //me saca num random del índice
  const date = data.discovery_date.slice(0, -13);


  return <section className='card-container'>
  <figure className='figure-asteroid'>
    <img src={imageNea} alt="asteroid" width={"100px"} />
  </figure> 
    <article className='card-content'>
      <p>{data.designation}</p>
      <p><b>{data.orbit_class}</b> </p>
      <p><b>PHA:</b> {data.pha}</p>
      <p><b>H (Absolute Magnitude):</b> {data.h_mag}</p>
      <p><b>Descovery date:</b> {date}</p>

    </article>
  </section>
};

export default NeasCard;
