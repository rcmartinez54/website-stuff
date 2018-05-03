

let $overlay = $('#overlay'),
	$modal = $('#modal'),
	$addImg = $('#add_img'),
	$modalWords = $('#modal h3');

function openModal() {
	$overlay.fadeIn(500);
	$modal.fadeIn(500);
}

function closeModal() {
	$overlay.fadeOut(500);
	$modal.fadeOut(500);
	$addImg.find('img').remove();
}


$(document).ready(function(){

	$('#images').hide();

	$('#click').click(function() {
    	$('#images').fadeIn(3000);
    	$('#click').html("<h5>Hope you like them!</h5>");
    });

    $("#images").on("click", ".image", function(){
    	let $selectedImage = $(this).find('img').attr('src'),
			$selectedHeading = $(this).find('img').attr('alt');

		$modalWords.text($selectedHeading);
		$addImg.append('<img src="' + $selectedImage + '">');

        openModal();

    });

    $('p').click(function(){
    	closeModal();
    });

    
    
});

