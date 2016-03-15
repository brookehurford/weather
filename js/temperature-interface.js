exports.toCelsius = function(temp) {
  return temp - 273.15;
}

exports.toFar = function(temp) {
  return (temp * (9/5)) - 459.67;
}
