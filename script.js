
  function getWeather(){
      
  let city = document.querySelector('input').value;




    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5651b311f4bde3b478a18fbf9b55efcd`)
    .then(function (response) {
      // handle success  
    document.querySelector("p").innerHTML = response.data.weather[0].main;
    document.querySelector('h2').innerHTML = `City: ${response.data.name}`;
     document.querySelector('h3').innerHTML = `Now: ${response.data.weather[0].description}`
      
    })
    .catch(function (error) {
      alert("City not found");
    })
    .finally(function () {
      // always executed
    });

  }