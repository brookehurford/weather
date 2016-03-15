var apiKey = require('./../.env').apiKey;
var toCelsius = require('./../js/temperature-interface.js').toCelsius;
var toFar = require('./../js/temperature-interface.js').toFar;

$(document).ready(function(){
  $('#tempButtons').hide();

  $('#weatherLocation').click(function(){
    $('#tempButtons').hide();
    var city = $('#location').val();
    $("#location").val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error){
      $('.showWeather').text(error.message);
    });
  });

  $('#weatherTemp').click(function(){
    var city = $('#location').val();
    var temp;
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
      temp = response.main.temp;
      $('.showWeather').text("The temperature in " + city + " is " + temp);
    });
    $('#tempButtons').show();
    $('#toCelsius').click(function(){
      $('.showWeather').text("The temperature in " + city + " is " + toCelsius(temp) + " degrees celsius.");
    });
    $('#toFar').click(function(){
      $('.showWeather').text("The temperature in " + city + " is " + toFar(temp) + " degrees fahrenheit.");
    });
  });
});
