const modal = document.getElementById("modal");
const removeModalBtn = document.getElementById("removeModal");
const sidebarNotification = document.querySelector(".notification-container");
const searchContainer = document.getElementById("search-main-container");

function createPosts() {
  modal.style.display = "block";
  let modalStatus = window.getComputedStyle(modal, null).display;
  let searchContainerStatus = window.getComputedStyle(
    searchContainer,
    null
  ).display;
  let notificationContainerStatus = window.getComputedStyle(
    sidebarNotification,
    null
  ).display;
  if (modalStatus == "block") {
    setTimeout(() => {
      window.onclick = (e) => {
        let location = e.target;
        if (modalStatus == "block" && !location.closest(".create-post-card")) {
          modal.style.display = "none";
          modalStatus = "none";
          window.addEventListener("click", () => {
            if (searchContainerStatus == "block") {
              sidebar.style.display = "block";
              searchContainer.style.display = "none";
              searchContainerStatus = "none";
            } else if (notificationContainerStatus == "block") {
              sidebar.style.display = "block";
              sidebarNotification.style.display = "none";
              notificationContainerStatus = "none";
            }
          });
        }
      };
    }, 100);
  }
}
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
          let searchContainerStatus = window.getComputedStyle(
            searchContainer,
            null
          ).display;
          let notificationContainerStatus = window.getComputedStyle(
            sidebarNotification,
            null
          ).display;
          console.log(notificationContainerStatus);
          if (searchContainerStatus == "block") {
            searchContainer.style.display = "none";
            sidebar.style.display = "block";
            searchContainerStatus = "none";
          } else if (notificationContainerStatus == "block") {
            sidebarNotification.style.display = "none";
            sidebar.style.display = "block";
            notificationContainerStatus = "none";
          } else {
            sidebarExtraSettings.style.display = "none";
            modalStatus = "none";
          }
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
// fetching data
const exploreContents = document.querySelector(".explore-contents");
fetch("./json/explore.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const col = document.createElement("div");
      col.className = "col-4 explore-contents-col cursor-pointer";
      col.innerHTML = `
      <div class="position-relative explore-images-container">
      <img
        src="${item.img}"
        alt="Explore Images"
        class="explore-images"
      />
      <div class="position-absolute explore-like-comment">
        <div class="d-flex align-items-center">
          <img
            src="./icons/white-heart.png"
            alt="Like"
            class="explore-like-comment-icon"
          />
          <span class="explore-like-comments-counter">${item.likesCount}</span>
        </div>
        <div class="d-flex align-items-center">
          <img
            src="./icons/white-comment.png"
            alt="Comment"
            class="explore-like-comment-icon"
          />
          <span class="explore-like-comments-counter">${item.commentsCount}</span>
        </div>
      </div>
    </div>
      `;
      exploreContents.append(col);
    });
  });
