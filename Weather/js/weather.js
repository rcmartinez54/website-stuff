$(document).ready(function() {
	$('button').click(function(){
		$(this).addClass("selected");
	});
}); //end ready

jQuery(function($){
    function getWeather(){
      $.ajax('http://api.wunderground.com/api/a52847f154aa6347/conditions/q/CA/San_Diego.json', {
        dataType: 'jsonp',
        success: function(json) {
          $('div#city strong').text(json.current_observation.display_location.full)
          $('div#icon').html('<img src=' + json.current_observation.icon_url + '>')
          $('div#weather').text(json.current_observation.temperature_string + " " + json.current_observation.weather);
          $('div#time').text(json.current_observation.observation_time_rfc822);
        }
      });
    }
    $('button.get_weather').click(function(e) {
      e.preventDefault();
      $(this).hide();
      getWeather();
      $('#result').fadeIn(1000);
    });
    $('button.hide').click(function(e) {
      e.preventDefault();
      $('#result').hide();
      $('button.get_weather').show();
    })
  })