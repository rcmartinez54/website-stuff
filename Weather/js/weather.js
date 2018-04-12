

$(document).ready(function() {

  $.ajax('http://api.wunderground.com/api/a52847f154aa6347/conditions/q/CA/San_Diego.json', {
    dataType: 'jsonp',
    success: function(data) {
      let displayLocation = data.current_observation.display_location.full, 
          currentObs = data.current_observation.icon_url,
          currentTemp = data.current_observation.temperature_string,
          currentWeather = data.current_observation.weather,
          currentTime = data.current_observation.observation_time_rfc822;

      $('#city strong').text(displayLocation);
      $('#icon').html('<img src=' + currentObs + '>');
      $('#weather').text( currentTemp + " " + currentWeather);
      $('#time').text(currentTime);
      $('#result').fadeIn(500);
    }
  });
}); //end ready

    
