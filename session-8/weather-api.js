const API_KEY = process.env.REACT_APP_API_KEY || 'weather app';

const convertToCelciusFromKelvin = (kelvin) => Math.floor(kelvin - 273.15);
const convertToFahrenheitFromKelvin = (kelvin) =>
  Math.round((convertToCelciusFromKelvin(kelvin) * 9) / 5 + 32);

const getImageForWeather = async (iconCode) => {
  const response = await fetch(
    `http://openweathermap.org/img/wn/${iconCode}@2x.png`,
  );
};

const getWeatherForecastForLocation = async (
  locationName,
  longitude,
  latitude,
) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
  );
  const data = await response.json();
  const {
    main: { feels_like, temp },
    weather,
  } = data;

  const { icon, description } = weather[0];

  return {
    locationName,
    longitude,
    latitude,
    temperatureData: {
      feelsLike: {
        celcius: convertToCelciusFromKelvin(feels_like),
        fahrenheit: convertToFahrenheitFromKelvin(feels_like),
      },
      kelvin: temp,
      celcius: convertToCelciusFromKelvin(temp),
      fahrenheit: convertToFahrenheitFromKelvin(temp),
    },
    weatherCondition: {
      img: `http://openweathermap.org/img/wn/${icon}@2x.png`,
      description,
    },
  };
};

const getWeatherData = async (locationName) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&appid=${API_KEY}`,
  );
  // destruct and use different variable:
  const data = await response.json();
  const { lon: longitude, lat: latitude } = data[0];

  console.log(`Geo For ${locationName}`, longitude, latitude);

  if (!longitude || !latitude) {
    throw new Error(`Failed to get GEO location for ${locationName}`);
  }

  const weatherData = await getWeatherForecastForLocation(
    locationName,
    longitude,
    latitude,
  );

  return weatherData;
};

const renderWeatherData = (weatherData) => {
  const {
    locationName,
    longitude,
    latitude,
    temperatureData: { celcius, fahrenheit },
    weatherCondition,
  } = weatherData;

  // elements:
  const latitudeElement = document.getElementById('latitudeId');
  latitudeElement.innerHTML = latitude;
  const longitudeElement = document.getElementById('longitudeId');
  longitudeElement.innerHTML = longitude;
  const locationNameElement = document.getElementById('locationName');
  locationNameElement.innerHTML = locationName.toUpperCase();

  // temperatures:
  const celciusElement = document.getElementById('celcius');
  celciusElement.innerHTML = `${celcius} &#8451; / `;
  const fahrenheitElement = document.getElementById('fahrenheit');
  fahrenheitElement.innerHTML = `${fahrenheit} &#8457;`;

  const weatherConditionElement = document.getElementById('weatherCondition');

  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCondition.img;
  weatherImg.alt = weatherCondition.description;
  weatherImg.title = weatherCondition.description;
  weatherImg.classList.add('weatherIcon');

  weatherConditionElement.appendChild(weatherImg);
};

const handleSubmit = async (evt) => {
  evt.preventDefault();

  const chosenLocationField = document.getElementById('locationId');
  const statusMessage = document.getElementById('statusMessage');

  const chosenLocation = chosenLocationField.value;

  if (!chosenLocation) {
    statusMessage.innerHTML = 'Please enter a location!';
  } else {
    statusMessage.innerHTML = '';

    // use location ...
    if (chosenLocation.length > 3) {
      try {
        const weatherData = await getWeatherData(chosenLocation);

        renderWeatherData(weatherData);

        chosenLocationField.value = '';
      } catch (e) {
        statusMessage.innerHTML = e.message;
      }
    }
  }
};

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', handleSubmit);
