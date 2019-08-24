
  function getWeather(){
      
  let city = document.querySelector('input').value;




    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5651b311f4bde3b478a18fbf9b55efcd`)
    .then(function (response) {
      // handle success
     // console.log(response);

    
    document.querySelector("h1").innerHTML = response.data.weather[0].main;
      
    })
    .catch(function (error) {
      // handle error
      //console.log(JSON.stringify(error));
      alert("City not found");
    })
    .finally(function () {
      // always executed
    });

  }