
$(document).ready(function() {

    $(window).scroll(function() {
       if ($(document).scrollTop() > 780) {
        $("header").fadeIn(600);
       } else if ($(document).scrollTop() < 700) {
       	$("header").fadeOut(600);
       }
    });

    $(window).scroll(function() {
       if ($(document).scrollTop() > 700) {
        $(".left_side").fadeIn(800);
       } 
    });

    $(window).scroll(function() {
       if ($(document).scrollTop() > 1640) {
        $(".info_imgs").fadeIn(800);
       } 
    });

    let counter = 0;

    function rotateTest() {
    	 
    	let $test = $('.test');
    	setTimeout(function() {
    		$test.eq(counter).fadeOut(500, function() {
    			if (counter <= $test.length -2) {
	    			counter++; 
		    	} else {
		    		counter = 0;
		    	}

		    	$test.eq(counter).fadeIn(800);

		    	rotateTest();
    		});

	    	
    	}, 5000);
    }

    rotateTest();

    $(window).scroll(function() {
       if ($(document).scrollTop() > 800) {
       	$('#ads_left').removeClass('hide_ads_left').addClass('show_ads_left');
       } else if ($(window).scrollTop() < 800) {
       	$('#ads_left').removeClass('show_ads_left').addClass('hide_ads_left');
       }
    });

    $(window).scroll(function() {
       if ($(document).scrollTop() > 3250) {
       	$('#ads_left').removeClass('show_ads_left').addClass('hide_ads_left');
       } 
    });

    $(window).scroll(function() {
       if ($(document).scrollTop() > 800) {
       	$('#ads_right').removeClass('hide_ads_right').addClass('show_ads_right');
       } else if ($(window).scrollTop() < 800) {
       	$('#ads_right').removeClass('show_ads_right').addClass('hide_ads_right');
       }
    });

    $(window).scroll(function() {
       if ($(document).scrollTop() > 3250) {
       	$('#ads_right').removeClass('show_ads_right').addClass('hide_ads_right');
       } 
    });

})



