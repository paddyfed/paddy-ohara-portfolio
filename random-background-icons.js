const iconStage = document.querySelector(".background-icons");

function getRandomNumber(max) {
	return Math.floor(Math.random() * (max - 1) + 1);
}

function getRandomPercentage() {
	return `${getRandomNumber(90)}%`
}

function createElement(iconClass, iconColor, iconRotate = null) {
	const el = document.createElement("i");
	el.classList.add("fa-solid");
	el.classList.add(iconClass);
	el.classList.add("fa-2x");
	
	if(iconRotate)
		el.classList.add(iconRotate);

	el.style.position = "absolute"
	el.style.top = getRandomPercentage();
	el.style.left = getRandomPercentage();
	el.style.color = `var(${iconColor})`;
	iconStage.appendChild(el);
}

for(let i = 0; i < getRandomNumber(7); i++) {
	createElement("fa-star", "--main-accent-color");
}

for(let i = 0; i < getRandomNumber(3); i++) {
	createElement("fa-asterisk", "--main-accent-color");
}

for(let i = 0; i < getRandomNumber(3); i++) {
	createElement("fa-play", "--alt-accent-color", "fa-rotate-270");
}

for(let i = 0; i < getRandomNumber(3); i++) {
	createElement("fa-circle", "--main-color");
}