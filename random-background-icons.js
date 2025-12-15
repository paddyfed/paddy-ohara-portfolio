const iconStage = document.querySelector(".background-icons");

for(let i = 0; i < 5; i++) {
	const star = document.createElement("i");
	star.classList.add("fa-solid");
	star.classList.add("fa-star");
	star.classList.add("fa-3x");

	iconStage.appendChild(star);
}