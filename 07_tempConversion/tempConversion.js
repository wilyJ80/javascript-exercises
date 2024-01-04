const convertToCelsius = function(fTemp) {

  const converted = ((fTemp-32)*(5/9));
  return (Math.round(converted * 10) / 10);
};

const convertToFahrenheit = function(cTemp) {

  const converted = ((cTemp*9/5)+32);
  return (Math.round(converted * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
