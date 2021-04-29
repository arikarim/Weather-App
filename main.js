const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')

  function getInput() {
  submit.addEventListener('click', e => {
    e.preventDefault();
    const location = input.value;
    input.value = '';
    return location
  })
}


async function getData(url) {
  const response = await fetch(url, {mode: 'cors'})
  const data = response.json()
  console.log(data)
}
function getWeather() {
  const location = getInput()
getData(`http://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=paris`)

}

getWeather()
