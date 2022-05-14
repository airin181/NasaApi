const mongoose = require('mongoose');

const objectSchema = {
    name: { 
        type: String, 
        required: true,
   
    },
    id: { 
        type: String, 
        required: true,
        unique: true
    },
    nametype: { 
        type: String, 
      
    },
    recclass: { 
        type: String, 
        
    },
    mass: { 
        type: Number, 
  
    },
    fall: { 
        type: String, 
  
    },
    year: { 
        type: String, 
      
    },
    reclat: { 
        type: String, 
       
    },
    reclong: { 
        type: String, 
      
    },
    geolocation: [
        {latitude: {
            type: String,
            
        },
        longitude: {
            type: String,
            
        }}
    ]

};
// Crear el esquema
const landingSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Landings = mongoose.model('landings', landingSchema,'landings');

module.exports = Landings;
