const modal = document.getElementById("modal");
const removeModalBtn = document.getElementById("removeModal");
const sidebarNotification = document.querySelector(".notification-container");

document
  .getElementById("sidebar-create-post")
  .addEventListener("click", function () {
    modalDisplay();
  });
function modalDisplay() {
  modal.style.display = "block";
  let modalStatus = window.getComputedStyle(modal, null).display;
  if (modalStatus == "block") {
    setTimeout(() => {
      window.onclick = (event) => {
        const location = event.target;
        if (modalStatus == "block" && !location.closest(".create-post-card")) {
          modal.style.display = "none";
          modalStatus = "none";
        }
      };
    }, 100);
  }
}
const searchContainer = document.getElementById("search-main-container");
const search = document.getElementById("searchUser");
const sidebarContainer = document.querySelector(".instagram-sidebar");
const sidebar = document.querySelector(".instagram-sidebar");
function displaySearch() {
  searchContainer.style.display = "block";
  sidebar.style.display = "none";
  sidebarNotification.style.display = "none";
  let searchStatus = window.getComputedStyle(searchContainer, null).display;
  if (searchStatus == "block") {
    setTimeout(() => {
      window.onclick = (event) => {
        const location = event.target;
        if (
          (searchStatus == "block" &&
            !location.closest("#search-main-container")) ||
          location.closest("#remove-search")
        ) {
          searchContainer.style.display = "none";
          sidebar.style.display = "block";
          searchStatus = "none";
        }
      };
    }, 100);
  }
}
function displayNotification() {
  sidebar.style.display = "none";
  searchContainer.style.display = "none";
  sidebarNotification.style.display = "block";
  let notificationStatus = window.getComputedStyle(
    sidebarNotification,
    null
  ).display;
  if (notificationStatus == "block") {
    setTimeout(() => {
      window.onclick = (event) => {
        const location = event.target;
        if (
          (notificationStatus == "block" &&
            !location.closest(".notification-container")) ||
          location.closest("#remove-notification")
        ) {
          sidebarNotification.style.display = "none";
          sidebar.style.display = "block";
          notificationStatus = "none";
        }
      };
    }, 100);
  }
}
const sidebarExtraSettings = document.getElementById("more-settings-lists");
function displayMoreSettings() {
  sidebarExtraSettings.style.display = "block";
  let modalStatus = window.getComputedStyle(sidebarExtraSettings, null).display;
  if (modalStatus == "block") {
    setTimeout(() => {
      window.onclick = (event) => {
        const location = event.target;
        if (
          modalStatus == "block" &&
          !location.closest("#more-settings-lists")
        ) {
          sidebarExtraSettings.style.display = "none";
          modalStatus = "none";
        }
      };
    }, 100);
  }
  // alert("asd");
}
