var apiKey = "018d3b7ce68b075d5e23307f49be7c2e";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $("#location").val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
