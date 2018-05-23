
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

    // function nextBanner() {

    // 	let $banner = $('.show');
    // 	setTimeout(function() {
    // 		$banner.eq(counter).fadeOut(500, function() {
    // 			if (counter <= $banner.length -2) {
    // 				console.log($banner.length);
    // 				counter++;
    // 			} else {
    // 				counter = 0;
    // 			}

    // 			$banner.eq(counter).fadeIn(500);

    // 			nextBanner();
    // 		});
    // 	}, 5000);

    // }

    // nextBanner();

})



// $(document).ready(function() {
// 	$('#previous').on('click', function() {
// 		$('#im_' + currentImage).stop().fadeOut(1);
// 		decreaseImage();
// 		$('#im_' + currentImage).stop().fadeIn(1);
// 	});
// 	$('#next').on('click', function() {
// 		$('#im_' + currentImage).stop().fadeOut(1);
// 		increaseImage();
// 		$('#im_' + currentImage).stop().fadeIn(1);
// 	});

// 	var currentImage = 1;
// 	var totalImages = 5;

// 	function increaseImage() {
// 		++currentImage;
// 		if(currentImage > totalImages) {
// 			currentImage = 1;
// 		}
// 	}

// 	function decreaseImage() {
// 		--currentImage;
// 		if(currentImage < 1) {
// 			currentImage = totalImages;
// 		}
// 	}
// });
