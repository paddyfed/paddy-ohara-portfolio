// JavaScript Document
// find the form element
const form = document.querySelector("form");

// function for validating fields on the form
function validateField(field) {
  // find the element to display the error message
  const errorElement = field.parentElement.querySelector(".form-error-message")

  // if the field is not valid
  if (!field.validity.valid) {
    // change the error message
    // If the field is required
    if (field.validity.valueMissing) {
      errorElement.textContent = `${field.parentElement.querySelector("label").textContent} is required`;

    }
    // if the field has the wrong format
    if (field.validity.typeMismatch) {
      errorElement.textContent = "Please enter a valid email address";

    }
    return false;
  }

  // if we get this far, then all fields are valid
  errorElement.textContent = "";
  return true;
}

// add an event listener to all fields to validate when the field is no longer in focus
form.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("blur", () => {
    validateField(input);
  });
});

// Add event listener to the form to check if all fields are valid on submit
form.addEventListener("submit", function (e) {
  // first, prevent the submission while we check form validation
  e.preventDefault();

  let isValid = true;

  // get a list of all form fields
  const fields = form.querySelectorAll("input, textarea");

  // for each form field...
  fields.forEach((field) => {
    // ...check that the field is valid
    const fieldValid = validateField(field);

    // if any field is not valid
    if (!fieldValid) {
      // this will prevent the submission
      isValid = false;
    }
  });

  // if all fields are valid then submit the form
  if (isValid) {
    form.submit();
  }
  // otherwise, set the cursor focus to the first invalid field
  else {
    form.querySelector(":invalid").focus();
  }
});
