

// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 2000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });


$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


$('ul').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
	$('body').animate({ scrollTop: $anchor.top }, 3000);
    return false;
});


$(document).ready(function() {
	$('#previous').on('click', function() {
		$('#im_' + currentImage).stop().fadeOut(1);
		decreaseImage();
		$('#im_' + currentImage).stop().fadeIn(1);
	});
	$('#next').on('click', function() {
		$('#im_' + currentImage).stop().fadeOut(1);
		increaseImage();
		$('#im_' + currentImage).stop().fadeIn(1);
	});

	var currentImage = 1;
	var totalImages = 5;

	function increaseImage() {
		++currentImage;
		if(currentImage > totalImages) {
			currentImage = 1;
		}
	}

	function decreaseImage() {
		--currentImage;
		if(currentImage < 1) {
			currentImage = totalImages;
		}
	}
});



