const ville = 'paris'

import { apicode } from './config.js';

// Récupérer le champ input et le bouton de recherche par leur ID
const villeInput = document.getElementById('villeInput');
const rechercherBtn = document.getElementById('button-addon2');
console.log('api code : ', apicode)
rechercherBtn.addEventListener('click', () => {
    
    const ville = villeInput.value;
    //console.log('ville1 : ', ville);
    fetchmaVille(ville)
})
//console.log('ville2 : ', ville);

function fetchmaVille(ville){

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&APPID=${apicode}&units=metric&lang=fr`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Affiche les données de la réponse dans la console

    const mainElement = document.querySelector('main');
      mainElement.innerHTML = `<p>Température à ${data.name} : ${data.main.temp} °C</p><p>Température ressentie : ${data.main.feels_like} °C</p><p>Vent : ${data.wind.speed}km/h</p>`;
      
  })
  .catch(error => {
    console.log('Une erreur s\'est produite :', error);
  });
}

fetchmaVille(ville)