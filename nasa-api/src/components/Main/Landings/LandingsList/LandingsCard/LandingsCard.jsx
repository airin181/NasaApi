import { React } from 'react'
import asteroid from "./../../../../../assets/ejemplo.png";

const LandingsCard = ({ data }) => {

  console.log('landing en CARD', data);

  return <div className='card-container'>
    <section className='card-content'>
      <img src={asteroid} alt="asteroid"/>
      <p><b>Name:</b> {data.name}</p>
      <p><b>ID:</b> {data.id}</p>
      <p><b>Geolocalización:</b> {data.reclat},  {data.reclong}</p>
      <p><b>Mass:</b> {data.mass}</p>
    </section>

  </div>;
};

export default LandingsCard;
