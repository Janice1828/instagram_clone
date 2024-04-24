const searchContainer = document.getElementById("search-main-container");
const sidebar = document.querySelector(".instagram-sidebar");
document.getElementById("display-search").addEventListener("click", () => {
  sidebar.style.display = "none";
  searchContainer.style.display = "block";
});
const sidebarNotification = document.querySelector(".notification-container");

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
  console.log(searchStatus);
}
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
const createPostmodal = document.getElementById("modal");
function createPosts() {
  createPostmodal.style.display = "block";
  let modalStatus = window.getComputedStyle(createPostmodal, null).display;
  if (modalStatus == "block") {
    setTimeout(() => {
      window.onclick = (event) => {
        const location = event.target;
        if (modalStatus == "block" && !location.closest(".create-post-card")) {
          createPostmodal.style.display = "none";
          modalStatus = "none";
        }
      };
    }, 400);
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
}
