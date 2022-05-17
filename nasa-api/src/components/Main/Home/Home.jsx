import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Home = () => {

  /*   const [apod, setApod] = useState(false) // delete!!?
   */
  const [apodData, setApodData] = useState("") // obj (date, expl, mediatype, title & url) 
  const [video, setVideo] = useState(false) // checks if it's a video or img



  // eslint-disable-next-line 
  useEffect(() => { getApod() }, [])


  const getApod = async () => {

    try {
      const apikey = process.env.REACT_APP_TOKEN
  
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`);
      const result = response.data;


      const data = {
        "title": result.title,
        "explanation": result.explanation,
        "media_type": result.media_type,
        "date": result.date,
        "url": result.url || ""
      }

      setApodData(data)
      checkVideo();

    } catch (e) {
      console.log('ERROR because...', e);
    }
  }





  //check if it's a video or img
  const checkVideo = async () => {
    const mediaType = apodData.media_type
    if (await mediaType === "video") {
      setVideo(true)
    } else {
      setVideo(false)
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

      {video ? <iframe src={apodData.url} frameborder="0" title="apod video"></iframe> : <img alt="astronomy" src={apodData.url}></img>}



      <div className="description-div">
        <p id="description">{apodData.explanation}</p>
      </div>


    </div>
  );



}

export default Home;
