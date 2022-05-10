import React, { useContext, useState } from "react";

//leaflet
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './react-leaflet.css';
import Iconlocation from './IconLocation.js'
import 'leaflet/dist/leaflet.css';
import { landingsContext } from './../../../../context/landingsContext';


const Map = () => {

  //landing trae un array de objetos
  const { landing } = useContext(landingsContext)

  if (landing) {
    return <div>

      <MapContainer center={[31.505, -0.09]} zoom={3} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" style={{ transform: "translate3d(-53px, -225px, 44px)" }}
        />

        

        {landing.map(element => element.reclong ?
          (<Marker position={[element.reclat, element.reclong]} icon={Iconlocation}>
            <Popup>
              <ul className="list-landings">
                <li><b>Name: </b>{element.name}</li>
                <li><b>ID: </b>{element.id}</li>
                <li><b>Name Type: </b>{element.nametype}</li>
                <li><b>Mass: </b>{element.mass}kg</li>
                <li><b>Class: </b>{element.recclass}</li>
                <li><b>Latitude: </b>{element.reclat}</li>
                <li><b>Longitude: </b>{element.reclong}</li>
                <li><b>Year: </b>{element.year}</li>  
              </ul>
            </Popup>
          </Marker>) : null)}


      </MapContainer>

    </div>;
  }
};
export default Map;
