import { deleteEl, processData, errorhandle } from './logic';
import './style.css';
import Rainy from './img/rainy.jpg';
import Snowy from './img/snowy.jpg';
import Cloudy from './img/cloudy.jpg';
import Sunny from './img/sunny.jpg';

const input = document.getElementById('input');
const submit = document.getElementById('submit');
const contentDiv = document.getElementById('content');
const body = document.getElementById('body');
const image = new Image();
image.src = Rainy;
body.style.backgroundImage = `url(${Rainy})`;

function displayData(data) {
  deleteEl(contentDiv);
  // condition of weather
  const condition = document.createElement('h4');
  condition.classList.add('text-light');
  condition.textContent = data.condition;
  contentDiv.appendChild(condition);

  if (data.condition.includes('Clear') || data.condition.includes('Sunny')) {
    body.style.backgroundImage = `url(${Sunny})`;
  } else if (data.condition.includes('rain')) {
    body.style.backgroundImage = `url(${Rainy})`;
  } else if (data.condition.includes('snow')) {
    body.style.backgroundImage = `url(${Snowy})`;
  } else if (data.condition.includes('cloudy')) {
    body.style.backgroundImage = `url(${Cloudy})`;
  }

  // name of city
  const newH = document.createElement('h1');
  newH.classList.add('text-light');
  newH.textContent = data.location;
  contentDiv.appendChild(newH);

  // Tempreature
  const div = document.createElement('div');
  div.classList.add('d-md-flex');
  div.classList.add('temp-div');

  const temp = document.createElement('span');
  temp.classList.add('text-light');
  temp.classList.add('temp-number');
  temp.textContent = data.currentTemp.c;

  div.appendChild(temp);

  const div2 = document.createElement('div');
  div2.classList.add('div2');

  div2.innerHTML = `
  <div class='d-flex' id='parentt'>
    <p id='feels-like' class="my-3 text-light">FEELS LIKE: ${data.feelsLike.c} C</p>
    <button id='change-temp' class="my-3 change-temp">Change</button>
  </div>
  <p class="my-3 text-light">WIND: ${data.wind} MPH</p>
  <p class="my-3 text-light">HMIDITY: ${data.humidity}%</p>
  `;

  div.appendChild(div2);
  contentDiv.appendChild(div);
  const feelsLikeParent = document.getElementById('parentt');
  const change = document.getElementById('change-temp');
  const textnode = document.createElement('h6');
  textnode.innerHTML = `<h6 id='feels-like' class="my-3 text-light">FEELS LIKE: ${data.feelsLike.f} F</h6>`;
  const textnode1 = document.createElement('p');
  textnode1.innerHTML = `<p id='feels-like' class="my-3 text-light">FEELS LIKE: ${data.feelsLike.c} C</p>`;
  change.addEventListener('click', (e) => {
    e.preventDefault();
    if (feelsLikeParent.children[0].tagName.toLowerCase() === 'p') {
      temp.textContent = data.currentTemp.f;
      feelsLikeParent.replaceChild(textnode, feelsLikeParent.children[0]);
    } else {
      feelsLikeParent.replaceChild(textnode1, feelsLikeParent.children[0]);
      temp.textContent = data.currentTemp.c;
    }
  });
}

async function getData(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=59fc7f51da5e46f88ae184111212904&q=${location}`, { mode: 'cors' });
    const data = await response.json();
    const test = processData(data);
    displayData(test);
  } catch {
    errorhandle();
  }
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const location = input.value;
  input.value = '';
  getData(location);
});
