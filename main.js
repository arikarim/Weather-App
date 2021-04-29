const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const contentDiv = document.getElementById('content')

    submit.addEventListener('click', e => {
      e.preventDefault();
      const location = input.value;
      input.value = '';
      getData(location)
    })

function deleteEl(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

async function getData(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${location}`, {mode: 'cors'})
  const data = await response.json()
  let test = processData(data)
  displayData(test)

  console.log(test.location)
  
}

function displayData(data)  {
  deleteEl(contentDiv)

  const condition = document.createElement('h4')
  condition.classList.add('text-light')
  condition.textContent = data.condition
  contentDiv.appendChild(condition)

  const newH = document.createElement('h1')
  newH.classList.add('text-light')
  newH.textContent = data.location
  contentDiv.appendChild(newH)


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
    location: weatherData['location'].name.toUpperCase(),
  };

  return myData

}



