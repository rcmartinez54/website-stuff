
$(document).ready(function() {

    $(window).scroll(function() {
       if ($(document).scrollTop() > 90) {
        $("header").addClass("scroll");
       } else {
        $("header").removeClass("scroll");
       }
    });


	$('.top_btn').on('click', function() {
		$('.show').each(function() {
			$(this).slideToggle(500);
		});
	})

})

// let slides = document.querySelectorAll('.show');
// let currentSlide = 0;
// let slideInterval = setInterval(nextSlide,2000); 

// function nextSlide() {
// 	slides[currentSlide].className = 'show';
// 	currentSlide = (currentSlide+1)%slides.length;
// 	slides[currentSlide].className = 'show showing';
// }

