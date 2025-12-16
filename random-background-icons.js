const iconStage = document.querySelector(".background-icons");

function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

function getRandomPercentage() {
	return `${getRandomNumber(80)}%`
}

for(let i = 0; i < getRandomNumber(7); i++) {
	const star = document.createElement("i");
	star.classList.add("fa-solid");
	star.classList.add("fa-star");
	star.classList.add("fa-3x");

	star.style.position = "absolute"
	star.style.top = getRandomPercentage();
	star.style.left = getRandomPercentage();
	iconStage.appendChild(star);
}