const iconStage = document.querySelector(".background-icons");

function getRandomNumber(max) {
	return Math.floor(Math.random() * (max - 1) + 1);
}

function getRandomPercentage() {
	return `${getRandomNumber(80)}%`
}

function createElement(iconClass, iconRotate = null) {
	const el = document.createElement("i");
	el.classList.add("fa-solid");
	el.classList.add(iconClass);
	el.classList.add("fa-2x");
	
	if(iconRotate)
		el.classList.add(iconRotate);

	el.style.position = "absolute"
	el.style.top = getRandomPercentage();
	el.style.left = getRandomPercentage();
	iconStage.appendChild(el);
}

for(let i = 0; i < getRandomNumber(7); i++) {
	createElement("fa-star");
}

for(let i = 0; i < getRandomNumber(3); i++) {
	createElement("fa-asterisk");
}

for(let i = 0; i < getRandomNumber(3); i++) {
	createElement("fa-play","fa-rotate-270");
}

for(let i = 0; i < getRandomNumber(3); i++) {
	createElement("fa-circle");
}