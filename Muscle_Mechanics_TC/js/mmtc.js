
$(document).ready(function() {

// All scroll functions for pages

	$(window).scroll(function() {
    	if ($(document).scrollTop() > 700) {
        	$(".left_side").fadeIn(800);
       	} if ($(document).scrollTop() > 780) {
        	$("header").fadeIn(600);
    	} if ($(document).scrollTop() < 700) {
       		$("header").fadeOut(600);
    	} if ($(document).scrollTop() > 800) {
       		$('#ads_left').removeClass('hide_ads_left').addClass('show_ads_left');
       		$('#ads_right').removeClass('hide_ads_right').addClass('show_ads_right');
    	} if ($(document).scrollTop() < 800) {
       		$('#ads_left').removeClass('show_ads_left').addClass('hide_ads_left');
       		$('#ads_right').removeClass('show_ads_right').addClass('hide_ads_right');
    	} if ($(document).scrollTop() > 900) {
    		console.log('hello');
    		$('#two').addClass('two_change'); 
		} if ($(document).scrollTop() > 1640) {
    	    $(".info_imgs").fadeIn(800);
    	} if ($(document).scrollTop() > 3250) {
       		$('#ads_left').removeClass('show_ads_left').addClass('hide_ads_left');
       		$('#ads_right').removeClass('show_ads_right').addClass('hide_ads_right');
    	} 
    });

// Transitions testimonials  

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

})



