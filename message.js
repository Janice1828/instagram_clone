const sidebarExtraSettings = document.getElementById("more-settings-lists");
const modal = document.getElementById("modal");

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
          let notificationContainerStatus = window.getComputedStyle(
            sidebarNotification,
            null
          ).display;
          let searchContainerStatus = window.getComputedStyle(
            searchContainer,
            null
          ).display;
          if (notificationContainerStatus == "block") {
            sidebarNotification.style.display = "none";
            sidebar.style.display = "block";
            notificationContainerStatus = "none";
          } else if (searchContainerStatus == "block") {
            searchContainer.style.display = "none";
            sidebar.style.display = "block";
            searchContainerStatus = "none";
          } else {
            sidebarExtraSettings.style.display = "none";
            modalStatus = "none";
          }
        }
      };
    }, 100);
  }
}
const sidebar = document.querySelector(".message-sidebar-container");
const sidebarNotification = document.querySelector(".notification-container");
const searchContainer = document.getElementById("search-main-container");
function displayNotification() {
  sidebar.style.display = "none";
  sidebarNotification.style.display = "block";
  searchContainer.style.display = "none";
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
    }, 400);
  }
}

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
    }, 400);
  }
}
function createPosts() {
  modal.style.display = "block";
  let modalStatus = window.getComputedStyle(modal, null).display;
  if ((modalStatus = "block")) {
    setTimeout(() => {
      window.onclick = (e) => {
        let location = e.target;
        let notificationContainerStatus = window.getComputedStyle(
          sidebarNotification,
          null
        ).display;
        let searchContainerStatus = window.getComputedStyle(
          searchContainer,
          null
        ).display;
        if (modalStatus == "block" && !location.closest(".create-post-card")) {
          modal.style.display = "none";
          modalStatus = "none";
          window.addEventListener("click", () => {
            if (notificationContainerStatus == "block") {
              sidebarNotification.style.display = "none";
              sidebar.style.display = "block";
              notificationContainerStatus = "none";
            } else if (searchContainerStatus == "block") {
              searchContainer.style.display = "none";
              sidebar.style.display = "block";
              searchContainerStatus = "none";
            }
          });
        }
      };
    }, 100);
  }
}
const loggedInStatus = sessionStorage.getItem("loggedIn");
if (loggedInStatus) {
  if (!loggedInStatus == "true") {
    window.location.href = "./login.html";
  }
} else {
  window.location.href = "./login.html";
}

function logOut() {
  window.location.href = "./login.html";
  sessionStorage.setItem("loggedIn", "");
}
