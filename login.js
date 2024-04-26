function login() {
  event.preventDefault();
  const emailPhone = document.getElementById("emailUserPhone").value;
  const password = document.getElementById("password").value;
  const getemailPhone = localStorage.getItem("userEmailPhone");
  const getUserName = localStorage.getItem("userName");
  const getPassword = localStorage.getItem("userPassword");
  const emailPhoneName = [];
  emailPhoneName.push(getemailPhone);
  emailPhoneName.push(getUserName);
  if (emailPhoneName.includes(emailPhone) && password == getPassword) {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "./index.html";
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
