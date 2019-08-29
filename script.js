
function getWeather() {

  let city = document.querySelector('input').value;

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5651b311f4bde3b478a18fbf9b55efcd`)
    .then(function (response) {
      // handle success  
      weatherData = response;
      console.log(response);
      let icone = weatherData.data.weather[0].icon;
      temperature = Math.round(temperature = weatherData["data"]["main"]["temp"]);
      document.querySelector('h2').innerHTML = `City: ${city}`;
      document.querySelector("p").innerHTML = weatherData.data.weather[0].description;
      document.querySelector('h3').innerHTML = ` <br>Now : ${Math.floor(response.data.main.temp - 273.15)} <span>°C</span>`;
      //document.querySelector('').innerHTML = `Wind Speed: ${response.data.wind.speed} min/sec`;

      document.querySelector('span.icn').innerHTML = `<img src="http://openweathermap.org/img/wn/${icone}.png" id="icon">`;
    })
    .catch(function (error) {
      alert("City not found");
    })
    .finally(function () {
      // always executed
    });

}