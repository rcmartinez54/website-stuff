

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
		if ($selectedHeading == 'DONATELLO') {
			$('#modal header').css({'background': 'green'}),
			$('#modal header h3').css({'color': 'purple'}),
			$('#modal header p').css({'color': 'purple'});
		} else if ($selectedHeading == 'SUPERMAN') {
			$('#modal header').css({'background': 'blue'}),
			$('#modal header h3').css({'color': 'yellow'}),
			$('#modal header p').css({'color': 'yellow'});
		} else if ($selectedHeading == 'HULK') {
			$('#modal header').css({'background': 'limegreen'}),
			$('#modal header h3').css({'color': 'purple'}),
			$('#modal header p').css({'color': 'purple'});;
		} else if ($selectedHeading == 'IRONMAN') {
			$('#modal header').css({'background': 'red'}),
			$('#modal header h3').css({'color': 'yellow'}),
			$('#modal header p').css({'color': 'yellow'});
		} else if ($selectedHeading == 'BATMAN' || 'BATMAN PROCESS') {
			$('#modal header').css({'background': 'black'}),
			$('#modal header h3').css({'color': 'yellow'}),
			$('#modal header p').css({'color': 'yellow'});
		}

		if ($selectedHeading == 'FREDDY') {
			$('#modal header').css({'background': 'red'}),
			$('#modal header h3').css({'color': 'black'}),
			$('#modal header p').css({'color': 'black'});
		} else if ($selectedHeading == 'MICHAEL MYERS') {
			$('#modal header').css({'background': 'black'}),
			$('#modal header h3').css({'color': 'blue'}),
			$('#modal header p').css({'color': 'blue'});
		} else if ($selectedHeading == 'CHUCKY') {
			$('#modal header').css({'background': 'blue'}),
			$('#modal header h3').css({'color': 'orange'}),
			$('#modal header p').css({'color': 'orange'});
		} else if ($selectedHeading == 'JASON') {
			$('#modal header').css({'background': 'green'}),
			$('#modal header h3').css({'color': 'black'}),
			$('#modal header p').css({'color': 'black'});
		} else if ($selectedHeading == 'LEATHERFACE') {
			$('#modal header').css({'background': 'yellow'}),
			$('#modal header h3').css({'color': 'green'}),
			$('#modal header p').css({'color': 'green'});
		} else if ($selectedHeading == 'PENNYWISE') {
			$('#modal header').css({'background': 'white'}),
			$('#modal header h3').css({'color': 'red'}),
			$('#modal header p').css({'color': 'red'});
		};

        openModal();

    });

    $('p').click(function(){
    	closeModal();
    });

    
    
});

