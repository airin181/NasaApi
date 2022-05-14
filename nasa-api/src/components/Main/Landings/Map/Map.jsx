import React, { useContext } from "react";
import { landingsContext } from './../../../../context/landingsContext';
//leaflet
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Iconlocation from './IconLocation.js'
import './react-leaflet.css';
import 'leaflet/dist/leaflet.css';

const Map = () => {

  //landing trae un array de objetos y 2 métodos de estado por CONTEXT
  const {landing, setOption, setSelect, landingFilter } = useContext(landingsContext)

 
  const handleSubmit = (event) => {  //submit del form de los filtros. Actualiza estado select que está en el padre (Landings)
    event.preventDefault();
    const select = event.target.by.value; 
    const option = event.target.option.value.toUpperCase(); 

    setSelect(select);
    setOption(option);
  }

    return <div>

      <form onSubmit={handleSubmit} className="form-filter">
        
        <select name="by" className="filter-by">
          <option value="mass" type="number" >Mass</option>
          <option value="class" type="text">Class</option>
        </select>
        
        <input type="text" name="option"  placeholder= "Ex: L6, CM2 or 2000, 5000..." className="filter-input"/>
        <input type="submit" value="Filter" className="filter-submit"/>
      </form>
      

      <MapContainer center={[31.505, -0.09]} zoom={2} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" style={{ transform: "translate3d(-53px, -225px, 44px)" }}/>

{landing && (landingFilter === "")?
        landing.map((element, i) => element.reclong ?
          (<Marker position={[element.reclat, element.reclong]} icon={Iconlocation} key={i}>
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
          </Marker>) : "") 

           : 

landing && landingFilter?
        landingFilter.map((element, i) => element.reclat ?
          (<Marker position={[element.reclat, element.reclong]} icon={Iconlocation} key={i}>
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
          </Marker>) : "") 

           : "" } 



      </MapContainer>
 
    </div>;
  
};

export default Map;
