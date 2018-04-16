//Changes color of navigation bar upon scrolling
$(document).ready(function() {
    $(window).scroll(function() {
       if ($(document).scrollTop() > 50) {
        $("nav ul").addClass("scroll");
       } else {
        $("nav ul").removeClass("scroll");
       }
    });

//Changes color of li elements to white
    $(window).scroll(function() {
       if ($(document).scrollTop() > 50) {
        $("li a").addClass("scroll2");
       } else {
        $("li a").removeClass("scroll2");
       }
    });

//Hides the h3 element when mousing over the scorecard
    $('#scrcrd').mouseover(function () {
        $('#msovr').hide(1000);
    });
    $('#scrcrd').mouseout(function () {
        $('#msovr').show(1000);
    });

//Slides local weather from offscreen on click and returns upon second click

    $('#weather_tab').on('click', function () {
        $('#weather_tab').fadeOut(500, function () {
          $('#get_weather').addClass('active');
          $('#get_weather').on('click', 'p', function () {
            $('#get_weather').removeClass('active');
            $('#weather_tab').fadeIn(500); 
          });  
        });
    });


// //Transitions weather div offscreen upon scroll
// $(document).ready(function(){
//     $(window).scroll(function() {
//       if ($(document).scrollTop() > 200 ) {
//         $('#get_weather').animate({
//           right: -400
//         }, 1000, function() {
//           //animation complete
//         });
//       }  
//     });
// });


// Controls the dropdodwn menu
function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');   
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown_content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Gets current weather from WUnderground

  $.ajax('http://api.wunderground.com/api/a52847f154aa6347/conditions/q/CA/San_Diego.json', {
    dataType: 'jsonp',
    success: function(data) {
      let displayLocation = data.current_observation.display_location.full, 
          currentObs = data.current_observation.icon_url,
          currentTemp = data.current_observation.temperature_string,
          currentWeather = data.current_observation.weather,
          currentTime = data.current_observation.observation_time_rfc822;
          console.log(currentWeather);

      $('#city strong').text(displayLocation);
      $('#icon').html('<img src=' + currentObs + '>');
      $('#weather').text( currentTemp + " " + currentWeather);
      $('#time').text(currentTime);
      $('#result').fadeIn(500);
    }
  });
}); //end ready




    