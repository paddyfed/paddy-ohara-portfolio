// JavaScript Document
// Finds the element using mainNavMenu id
const mainMenu = document.querySelector("#mainNavMenu");

// Adds the menu-open class to the element. This opens the menu based on the css properties
// On a full desktop screen, the menu opens 25%
// On a smaller screen (mobile) the menu opens 100%
function openNav() {
    mainMenu.classList.add("menu-open")

}

// Removes the menu-open class from the element. This has the effect of closing the menu.
function closeNav() {
    mainMenu.classList.remove("menu-open")

}
