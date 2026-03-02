// Find any element using the "background-icons" class
const iconStage = document.querySelector(".background-icons");

// generates a random number up to max
function getRandomNumber(max) {
	return Math.floor(Math.random() * (max - 1) + 1);
}

// generates a random percentage, max 90%
function getRandomPercentage() {
	return `${getRandomNumber(90)}%`
}

// Function to create the logo element to add to the screen
function createElement(iconClass, iconColor, iconRotate = null) {
	// Create the icon element using FontAwesome class names
	const el = document.createElement("i");
	el.classList.add("fa-solid");
	el.classList.add(iconClass);
	el.classList.add("fa-2x");
	
	// Optionally rotate the icon based on FontAwesome option
	if(iconRotate)
		el.classList.add(iconRotate);

	// This places the element at a random position based on percentage from top and left of the screen
	el.style.position = "absolute"
	el.style.top = getRandomPercentage();
	el.style.left = getRandomPercentage();
	
	// Sets the colour of the element
	el.style.color = `var(${iconColor})`;
	el.style.zIndex = -1;
	
	// Adds the element to the background-icons element
	iconStage.appendChild(el);
}

// Generates a random number of star icons (max of 7)
for(let i = 0; i < getRandomNumber(7); i++) {
	createElement("fa-star", "--main-accent-color");
}

// Generates a random number of zsterisk icons (max of 3)
for(let i = 0; i < getRandomNumber(3); i++) {
	createElement("fa-asterisk", "--main-accent-color");
}

// Generates a random number of triangle icons (max of 3) This is a rotated 'play' icon
for(let i = 0; i < getRandomNumber(3); i++) {
	createElement("fa-play", "--alt-accent-color", "fa-rotate-270");
}

// Generates a random number of circle icons (max of 3)
for(let i = 0; i < getRandomNumber(3); i++) {
	createElement("fa-circle", "--main-color");
}