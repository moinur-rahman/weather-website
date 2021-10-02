const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=c231144af9d0423dbd9c4f317c224ad6&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connent to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const data = body.current;
      callback(
        undefined,
        data.weather_descriptions[0] +
          ". It is currently " +
          data.temperature +
          " degress out. It feels like " +
          data.feelslike +
          " degrees out. The humidity is " +
          data.humidity +
          "%. The weather recorded in " +
          data.observation_time +
          "."
      );
    }
  });
};

module.exports = forecast;
