
const images = document.querySelectorAll('.image');

function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

images.forEach(image => image.addEventListener('click', toggleOpen));
images.forEach(image => image.addEventListener('transitioned', toggleActive));