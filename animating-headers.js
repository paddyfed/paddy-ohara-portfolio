// JavaScript Document

// Find all elements with class "scroll-in-right"
const animatedElements = document.querySelectorAll(".scroll-in-right");

// Callback for IntersectionObserver
const callback = (entries, options) => {
    entries.forEach(entry => {
		// if the element is visible, add the .animated class to the element
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
            entry.target.classList.add("animated");
        }
    })
}

// Create the IntersectionObserver using the callback function above
const observer = new IntersectionObserver(callback);

// Apply the Interseciton Observer to each element
animatedElements.forEach(animatedElement => {
    observer.observe(animatedElement)
});
