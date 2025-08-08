function average_humidity(weatherData, totalData) {
  let average,
    sum = 0;
  for (let i = 0; i < totalData; i++) {
    sum = sum + weatherData[i].humidity;
  }
  average = sum / totalData;
  return `Average humidity was ${average}%`;
}

function highest_temperature(weatherData, totalData) {
  let highest_temperature_index = 0,
    highest_temperature = weatherData[0].maxTemp;
  for (let i = 1; i < totalData; i++) {
    if (highest_temperature < weatherData[i].maxTemp) {
      highest_temperature = weatherData[i].maxTemp;
      highest_temperature_index = i;
    }
  }
  return `Highest temperature was ${highest_temperature} on ${weatherData[highest_temperature_index].date} in city ${weatherData[highest_temperature_index].city}, ${weatherData[highest_temperature_index].country}.`;
}

function lowest_temperature(weatherData, totalData) {
  let lowest_temperature_index = 0,
    lowest_temperature = weatherData[0].minTemp;
  for (let i = 1; i < totalData; i++) {
    if (lowest_temperature > weatherData[i].minTemp) {
      lowest_temperature = weatherData[i].minTemp;
      lowest_temperature_index = i;
    }
  }
  return `Lowest temperature was ${lowest_temperature} on ${weatherData[lowest_temperature_index].date} in city ${weatherData[lowest_temperature_index].city}, ${weatherData[lowest_temperature_index].country}.`;
}

function sorting_hottest_to_coolest(weatherData, totalData) {
  for (let i = 0; i < totalData; i++) {
    for (let j = 1; j < totalData - i; j++) {
      if (weatherData[i].maxTemp < weatherData[j].maxTemp) {
        let temp = weatherData[j];
        weatherData[j] = weatherData[i];
        weatherData[i] = temp;
      }
    }
    return weatherData;
  }
}

const weatherData = [
  {
    date: "2024-06-01",
    maxTemp: 32,
    minTemp: 22,
    humidity: 65,
    city: "Lahore",
    country: "Pakistan",
  },
  {
    date: "2024-06-02",
    maxTemp: 35,
    minTemp: 24,
    humidity: 70,
    city: "Lahore",
    country: "Pakistan",
  },
  {
    date: "2024-06-03",
    maxTemp: 31,
    minTemp: 21,
    humidity: 60,
    city: "Lahore",
    country: "Pakistan",
  },
];
// const weatherData = require("./weather_data.json");
let totalData = weatherData.length;

console.log(average_humidity(weatherData, totalData));
console.log(highest_temperature(weatherData, totalData));
console.log(lowest_temperature(weatherData, totalData));
console.log(
  "Sorted data from hotest to coolest: ",
  sorting_hottest_to_coolest(weatherData, totalData)
);
