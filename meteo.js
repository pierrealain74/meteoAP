fetch('http://api.openweathermap.org/data/2.5/weather?q=paris&APPID=419820eaf37691256046f0c1301711de&units=metric&lang=fr')
  .then(response => response.json())
  .then(data => {
    console.log(data) // Affiche les données de la réponse dans la console  
  })
  .catch(error => {
    console.log('Une erreur s\'est produite :', error)
  })