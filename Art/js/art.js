
const images = document.querySelectorAll('.image');

//this selects the class and adds the class of open which increases the flex
function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

//listens for click event and acts accordingly
images.forEach(image => image.addEventListener('click', toggleOpen));
images.forEach(image => image.addEventListener('transitioned', toggleActive));