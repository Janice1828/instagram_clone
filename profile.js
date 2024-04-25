const profilePosts = document.getElementById("profile-Posts");
const profileSaved = document.getElementById("profile-saved");
const profileTag = document.getElementById("profile-tagged");
const btnTagged = document.getElementById("btn-collection-tagged");
const btnSaved = document.getElementById("btn-collection-saved");
const btnPost = document.getElementById("btn-collection-post");
function profileDisplayPosts() {
  profilePosts.style.display = "block";
  profileSaved.style.display = "none";
  profileTag.style.display = "none";
  btnPost.style.borderTop = "1px solid";
  btnSaved.style.borderTop = "0";
  btnTagged.style.borderTop = "0";
}
function profileDisplaySaved() {
  profilePosts.style.display = "none";
  profileSaved.style.display = "block";
  profileTag.style.display = "none";
  btnSaved.style.borderTop = "1px solid";
  btnPost.style.borderTop = "0";
  btnTagged.style.borderTop = "0";
}
function profileDisplayTagged() {
  profilePosts.style.display = "none";
  profileSaved.style.display = "none";
  profileTag.style.display = "block";
  btnTagged.style.borderTop = "1px solid";
  btnSaved.style.borderTop = "0";
  btnPost.style.borderTop = "0";
}
const notificationSidebar = document.querySelector(".notification-container");
const sidebar = document.querySelector(".instagram-sidebar");
const searchContainer = document.getElementById("search-main-container");
// console.log(searchContainer);
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
  // console.log(searchStatus);
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
        // console.log(location);
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
          let notificationContainerStatus = window.getComputedStyle(
            sidebarNotification,
            null
          ).display;
          let searchContainerStatus = window.getComputedStyle(
            searchContainer,
            null
          ).display;
          if (notificationContainerStatus == "block") {
            notificationSidebar.style.display = "none";
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
const modal = document.getElementById("modal");
function createPosts() {
  modal.style.display = "block";
  let modalStatus = window.getComputedStyle(modal, null).display;
  if ((modal.style.display = "block")) {
    setTimeout(() => {
      window.onclick = (e) => {
        let location = e.target;
        if (modalStatus == "block" && !location.closest(".create-post-card")) {
          modal.style.display = "none";
          modalStatus = "none";
        }
      };
    }, 100);
  }
}
