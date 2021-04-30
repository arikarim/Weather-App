const contentDiv = document.getElementById('content');

function deleteEl(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function processData(weatherData) {
  // grab all the data i want to display on the page
  const myData = {
    condition: weatherData.current.condition.text,
    feelsLike: {
      f: Math.round(weatherData.current.feelslike_f),
      c: Math.round(weatherData.current.feelslike_c),
    },
    currentTemp: {
      f: Math.round(weatherData.current.temp_f),
      c: Math.round(weatherData.current.temp_c),
    },
    wind: Math.round(weatherData.current.wind_mph),
    humidity: weatherData.current.humidity,
    location: weatherData.location.name.toUpperCase(),
  };

  return myData;
}


function errorhandle() {
  deleteEl(contentDiv)
  const errorMsg = document.createElement('div')
  errorMsg.classList.add('text-light')
  errorMsg.classList.add('fs-4')

  errorMsg.textContent = 'Sorry we could not find your city'
  contentDiv.appendChild(errorMsg)
}


export {deleteEl, processData, errorhandle}