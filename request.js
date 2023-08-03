const express = require('express')
const axios = require('axios');

const app = express()

function hacerPeticion() {
  axios.get('https://www.sharpods.com/wp-json/woofunnels/v1/worker')
    .then(response => {
      console.log('Respuesta recibida:', response.data);
    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error);
    });
}

hacerPeticion();



setInterval(hacerPeticion, 20000);

app.listen(3000, () => {
  console.log("escichando");
})
