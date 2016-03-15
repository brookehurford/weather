(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "018d3b7ce68b075d5e23307f49be7c2e";

},{}],2:[function(require,module,exports){
exports.toCelsius = function(temp) {
  return temp - 273.15;
}

exports.toFar = function(temp) {
  return (temp * (9/5)) - 459.67;
}

},{}],3:[function(require,module,exports){
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

exports.toCelsius = function(temp) {
  return temp - 273.15;
}

exports.toFar = function(temp) {
  return (temp * (9/5)) - 459.67;
}

},{"./../.env":1,"./../js/temperature-interface.js":2}]},{},[3]);
