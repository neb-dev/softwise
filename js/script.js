var ssnInput = document.getElementById("ssn");
var dobInput = document.getElementById("dob");
var submitButton = document.getElementById("submit");
var body = document.getElementsByTagName("BODY")[0];

submitButton.addEventListener("load", function() {
  submitButton.disabled = true;
});

function validateForm() {
  "use strict";
  if (ssnInput.value.length === 4 && dob.value.length === 10) {
    submitButton.className = "enable";
  } else {
    submitButton.disabled = true;
    submitButton.className = "disable";
  }
}

ssnInput.addEventListener("keyup", validateForm);
dobInput.addEventListener("keyup", validateForm);