const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm-password");

const emailAlert = document.getElementById("email-invalid");

email.addEventListener("keyup", function () {
  if (!email.checkValidity()) {
    emailAlert.style.visibility = "visible";
    console.log("invalid email");
  } else {
    emailAlert.style.visibility = "hidden";
  }
});
