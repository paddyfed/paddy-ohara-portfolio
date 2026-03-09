// JavaScript Document

const form = document.querySelector("form");

function validateField(field) {
    const errorElement = field.parentElement.querySelector(".form-error-message")
    
    if(!field.validity.valid) {
        errorElement.textContent = "This field is required";
        return false;
    }
    
    errorElement.textContent = "";
    return true;
}

form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("blur", () => {
        validateField(input);
    });
});


form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let isValid=true;
    
    const fields = form.querySelectorAll("input, textarea");
    
    fields.forEach((field) => {
        const fieldValid = validateField(field);
        
        if(!fieldValid) {
            isValid = false;
        }
    });
    
    if(isValid) {
        form.submit();
    }
    else {
        form.querySelector(":invalid").focus();
    }
});