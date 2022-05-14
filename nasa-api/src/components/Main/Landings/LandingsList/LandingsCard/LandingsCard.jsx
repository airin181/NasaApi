import { React } from 'react'
import asteroid1 from "./../../../../../assets/meteors/meteor1.png";
import asteroid2 from "./../../../../../assets/meteors/meteor2.png";
import asteroid3 from "./../../../../../assets/meteors/meteor3.png";
import asteroid4 from "./../../../../../assets/meteors/meteor4.png";
import asteroid6 from "./../../../../../assets/meteors/meteor6.png";
import asteroid7 from "./../../../../../assets/meteors/meteor7.png";
import asteroid8 from "./../../../../../assets/meteors/meteor8.png";
import asteroid9 from "./../../../../../assets/meteors/meteor9.png";



const LandingsCard = ({ data }) => {


//random image
const arrayImages = [asteroid1, asteroid2, asteroid3, asteroid4, asteroid6, asteroid7, asteroid8, asteroid9 ]
const imageAsteroid = arrayImages[Math.floor(Math.random() * arrayImages.length)]; //me saca num random del índice



  return  <section className='card-container'>
    <figure className='figure-asteroid'>
      <img src={imageAsteroid} alt="asteroid" width={"100px"} />
    </figure>
    <article className='card-content'>
      <p>ID NUM: {data.id}</p>
      <p><b>{data.name}</b> </p>
      <p> {data.reclat},  {data.reclong}</p>
      <p><b>Mass:</b> {data.mass}kg</p>

    </article>
  </section>






};

export default LandingsCard;



// PONER EL RANDOM BIEEENNNNN 