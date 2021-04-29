const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')

    submit.addEventListener('click', e => {
      e.preventDefault();
      const location = input.value;
      input.value = '';
      getData(location)
    })



async function getData(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${location}`, {mode: 'cors'})
  const data = response.json()
  console.log(data)
}

