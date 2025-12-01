// JavaScript Document

const animatedElements = document.querySelectorAll(".scroll-in-right");

const callback = (entries, options) => {
	entries.forEach(entry => {
		console.log(entry.isIntersecting);
		if(entry.isIntersecting && !entry.target.classList.contains("animated")) {
			entry.target.classList.add("animated");
		}
	})
}

const observer = new IntersectionObserver(callback);

animatedElements.forEach(animatedElement => {observer.observe(animatedElement)});