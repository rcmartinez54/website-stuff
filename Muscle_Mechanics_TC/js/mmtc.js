
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
       if ($(document).scrollTop() > 1880) {
        $(".info_imgs").fadeIn(800);
       } 
    });

	function fadeTest() {
		let counter = 0;
		let test = $('.test');

		for (i = 0; i < test.length; i++) {
			test.fadeIn(1000);
		}
	};

	// fadeTest();
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
