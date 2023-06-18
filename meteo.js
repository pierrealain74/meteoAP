const ville = 'paris'

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&APPID=419820eaf37691256046f0c1301711de&units=metric&lang=fr`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Affiche les données de la réponse dans la console

    const mainElement = document.querySelector('main');
      mainElement.innerHTML = `<p>Température à ${data.name} : ${data.main.temp} °C</p><p>Température ressentie : ${data.main.feels_like} °C</p><p>Vent : ${data.wind.speed}km/h</p>`;
      
  })
  .catch(error => {
    console.log('Une erreur s\'est produite :', error);
  });