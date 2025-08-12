function averageHumidity(weatherData, totalData) {
  let sum = 0;
  weatherData.forEach((item) => (sum += item.humidity));
  let average = sum / totalData;
  return `Average humidity was ${average}%`;
}

function highestTemperature(weatherData) {
  let highest = weatherData.reduce((max, item) =>
    item.maxTemp > max.maxTemp ? item : max
  );
  return `Highest temperature was ${highest.maxTemp} on ${highest.date} in city ${highest.city}, ${highest.country}.`;
}

function lowestTemperature(weatherData) {
  let lowest = weatherData.reduce((min, item) =>
    item.minTemp < min.minTemp ? item : min
  );
  return `Lowest temperature was ${lowest.minTemp} on ${lowest.date} in city ${lowest.city}, ${lowest.country}.`;
}

function sortingHottestToCoolest(weatherData) {
  return weatherData.sort((a, b) => b.maxTemp - a.maxTemp);
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

let totalData = weatherData.length;

console.log(averageHumidity(weatherData, totalData));
console.log(highestTemperature(weatherData));
console.log(lowestTemperature(weatherData));
console.log(
  "Sorted data from hottest to coolest: ",
  sortingHottestToCoolest(weatherData)
);
