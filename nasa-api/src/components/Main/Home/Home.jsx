import axios from 'axios';
import React, { useEffect, useState } from 'react';




const Home = () => {

/*   const [apod, setApod] = useState(false) // delete!!?
 */  const [apodData, setApodData] = useState("") // data in obj from 
  const [video, setVideo] = useState(false) // checks if it's a video or img



  //check if it's a video or img
  const checkVideo = async () => {
    const urlData = apodData.url
    if (await urlData.includes("youtube")) {
      setVideo(true)
    } else {
      setVideo(false)
    }
  }

// eslint-disable-next-line 
  useEffect(() => { getApod() }, [])

  const getApod = async () => {

    try {
      //${process.env.REACT_APP_NASA_APIKEY}
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=8CRAxXHyBa5Gv10HlGZjGResR2DuUTRJWiY5iNTn`);
      const result = response.data;



      const data = {
        "title": result.title,
        "explanation": result.explanation,
        "media_type": result.media_type,
        "date": result.date,
        "url": result.url || ""
      }

      /* setApod(true) */
      setApodData(data)
      checkVideo();

    } catch (e) {
      console.log('ERROR because...', e);
    }
  }


  return (
    <div className='home'>

      <h1>Astronomy Picture of the Day</h1>
      <p> Did you know that this is one of the most popular websites across all federal agencies? It has even the popular appeal of a Justin Bieber video! 🥳</p>

      <hr style={{ color: "white", width: "60vw" }} />

      <section className="title-section">
        <h2 id="title">{apodData.title}</h2>
        <p id="date">{apodData.date}</p>
      </section>

      {video ? <iframe width="420" height="315" src={apodData.url} title="myFrame"></iframe> : <img width="420" height="315" alt="astronomy" src={apodData.url}></img>}


      <div className="description-div">
        <p id="description">{apodData.explanation}</p>
      </div>


    </div>
  );



}

export default Home;
