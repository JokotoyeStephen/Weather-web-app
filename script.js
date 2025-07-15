const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

async function getWeather() {

    const cityValue = cityInput.value.trim();
    console.log(cityValue);
    
    const api = "fbc4b22d08814bee878155901252605"

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api}&q=${cityValue}`);

    const data = await response.json();
    console.log(data);

    let country = data.location.country;
    console.log(country);
    
     let region = data.location.region;
    console.log(region);
    
     let pressure = data.current.condition.pressure_im;
    console.log(pressure);

       let wind = data.current.condition.wind_degree;
    console.log(wind);

       let text = data.current.condition.text;
    console.log(text);

      let name = data.location.name;
    console.log(name);

    let tz_id = data.location.tz_id;
    console.log(tz_id);

    let localtime = data.location.localtime;
    console.log(localtime);

    let lat = data.location.lat;
      console.log(lat);
    
    let tempt = data.current.temp_c;
      console.log(tempt);
    let weatherReading = `<h2>${country}</h2> <h3>${region}</h3> <p>${text}</p> <h4>${tempt}</h4> <h6>${localtime}</h6> <h3>${tz_id}</h3> <h3>${lat}</h3>`

    console.log(weatherReading);
    
    weatherResult.innerHTML = weatherReading;
} 