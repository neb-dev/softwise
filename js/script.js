function validateForm() {
  var form = document.forms['userForm'].elements;
  var canSubmit = true;

  for(i = 0; i < form.length; i++) {
    if(!form[i].value) {
      canSubmit = false;
    }
  }

  document.getElementById("submitButton").disabled = !canSubmit;
}

window.onload = validateForm;

function submitForm() {
  
}