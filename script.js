const searchContainer = document.getElementById("search-main-container");
const sidebar = document.querySelector(".instagram-sidebar");
document.getElementById("display-search").addEventListener("click", () => {
  sidebar.style.display = "none";
  searchContainer.style.display = "block";
});
function displaySearch() {
  searchContainer.style.display = "block";
  sidebar.style.display = "none";
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
const sidebarNotification = document.querySelector(".notification-container");

function displayNotification() {
  sidebar.style.display = "none";
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
    }, 400);
  }
}
