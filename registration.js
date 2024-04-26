const emailRegex =
  /^[a-zA-Z0-9_\. \-]+\@[a-zA-Z0-9\-]+\.+[a-zA-Z0-9]{2,4}|(^[0-9]{10})+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
const usernameReg = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

function register() {
  event.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const userName = document.getElementById("userName").value;
  const emailPhone = document.getElementById("emailOrMobile").value;
  const password = document.getElementById("password").value;
  if (
    emailRegex.test(emailPhone) &&
    passwordRegex.test(password) &&
    usernameReg.test(userName) &&
    fullName.length > 0
  ) {
    localStorage.setItem("userEmailPhone", emailPhone);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userName", userName);
    localStorage.setItem("fullName", fullName);
    window.location.href = "./login.html";
  }
}
function validateEmailPhone() {
  const iconSrc = document.getElementById("email-validation-icon");
  const emailPhone = document.getElementById("emailOrMobile").value;
  if (!emailRegex.test(emailPhone)) {
    iconSrc.src = "./icons/close.png";
    iconSrc.style.display = "block";
  } else {
    iconSrc.src = "./icons/check-mark.png";
    iconSrc.style.display = "block";
  }
}
function validatePassword() {
  const iconSrc = document.getElementById("password-validation-icon");
  const password = document.getElementById("password").value;
  if (!passwordRegex.test(password)) {
    iconSrc.src = "./icons/close.png";
    iconSrc.style.display = "block";
  } else {
    iconSrc.src = "./icons/check-mark.png";
    iconSrc.style.display = "block";
  }
}
const fullNameIcon = document.getElementById("fullName-validation-icon");
function validateFullName() {
  const fullName = document.getElementById("fullName").value;
  if (fullName.length > 0) {
    fullNameIcon.style.display = "block";
  } else {
    fullNameIcon.style.display = "none";
  }
}
function validateUsername() {
  const userName = document.getElementById("userName").value;
  const validateIcon = document.getElementById("username-validation-icon");
  if (!usernameReg.test(userName)) {
    validateIcon.src = "./icons/close.png";
    validateIcon.style.display = "block";
  } else {
    validateIcon.src = "./icons/check-mark.png";
    validateIcon.style.display = "block";
  }
}
document.getElementById("showHide").addEventListener("click", function () {
  const password = document.getElementById("password");
  if (password.type == "password") {
    password.type = "text";
    this.innerHTML = "Hide";
  } else {
    password.type = "password";
    this.innerHTML = "Show";
  }
});
