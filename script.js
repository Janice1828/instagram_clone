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
      window.onclick = (event) => {
        const location = event.target;
        if (modalStatus == "block" && !location.closest(".create-post-card")) {
          createPostmodal.style.display = "none";
          modalStatus = "none";
          window.addEventListener("click", () => {
            if (searchContainerStatus == "block") {
              searchContainer.style.display = "none";
              sidebar.style.display = "block";
              searchContainerStatus = "none";
            } else if (notificationContainerStatus == "block") {
              sidebar.style.display = "block";
              sidebarNotification.style.display = "none";
              notificationContainerStatus = "none";
            }
          });
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
function postSettings() {
  const postSettings = document.getElementById("post-settings");
  postSettings.style.display = "flex";
  let postSettingsStatus = getComputedStyle(postSettings, null).display;
  if (postSettingsStatus == "flex") {
    setTimeout(() => {
      window.onclick = (e) => {
        let location = e.target;
        if (
          (postSettingsStatus == "flex" &&
            !location.closest(".settings-lists")) ||
          location.closest("#post-settings-cancel")
        ) {
          postSettings.style.display = "none";
          postSettingsStatus = "none";
        }
      };
    }, 100);
  }
}
//fetching data for posts
const newsFeedContainer = document.getElementById("newsfeed-posts");
const newsFeedContent = document.createElement("div");
newsFeedContent.className = "news-feed-content";
fetch("./json/newsfeed.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
<div class="card-body">
<div class="card-content newsfeed-post">
  <div>
    <div
      class="d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center gap-1 pb-2 cursor-pointer">
        <img
          src="${item.profileImg}"
          alt="Posts"
          class="post-profile-image"
        />
        <div>
          <p class="post-profile-name ">${item.name}</p>
        </div>
      </div>
      <div class="three-dots-option">
        <a style="cursor:pointer" onclick="postSettings()">
          <img src="./icons/dots.png" alt="" />
        </a>
      </div>
    </div>
    <div class="post">
      <div class="post-images" style="background-image:url(${item.postImg})">
      </div>
    </div>
    <div class="like-cmt-share mt-1">
      <div class="d-flex justify-content-between">
        <div class="d-flex gap-2">
          <img
            src="./icons/heart.png"
            alt=""
            class="like"
          /><img
            src="./icons/chat.png"
            alt=""
            class="comment"
          />
          <img
            src="./icons/send.png"
            class="share"
            alt=""
          />
        </div>
        <img
          src="./icons/bookmark-white.png"
          alt=""
          class="bookmark-icon"
        />
      </div>
      <p class="like-count">${item.likesCount} likes</p>
    </div>
    <p id="caption" >
      <b class="cursor-pointer">${item.name}</b> ${item.posttext}
    </p>
    <p class="post-comment-number">
      View all ${item.commentsCount} Comments
    </p>
    <div
      class="add-comment d-flex justify-content-between border-bottom"
    >
      <input
        type="text"
        class="add-comment"
        placeholder="Add a comment..."
      />
      <img src="./icons/smile.png" class="smile-icon" />
    </div>
  </div>
</div>
</div>
`;
      newsFeedContent.append(card);
    });
    newsFeedContainer.appendChild(newsFeedContent);
  });
// fetching and implementing data for friends suggestion
const suggestedFriends = document.querySelector(".suggested-friends-lists");
const notificationsuggestionlists = document.getElementById(
  "notification-suggestion-lists"
);
async function fetchSuggestion() {
  const res = await fetch("./json/suggestions.json");
  const data = await res.json();
  data.forEach((item) => {
    const suggestedProfiles = document.createElement("div");
    suggestedProfiles.className =
      "suggested-profiles-profile d-flex justify-content-between align-items-center";
    suggestedProfiles.innerHTML = `
    <div class="d-flex align-items-center gap-1">
      <img
        src="${item.profile}"
        alt="Suggested User Profile"
        class="suggestion-profile-img"
      />
      <div class="d-flex flex-column gap-0">
        <p class="suggestion-username">${item.name}</p>
        <sub
          ><span class="suggestion-sub-title">${item.suggestedon}</span></sub
        >
      </div>
    </div>
    <sub><a href="#" class="follow-user">Follow</a></sub>
    `;
    suggestedFriends.append(suggestedProfiles);
  });
  data.forEach((item) => {
    let list = document.createElement("div");
    list.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex gap-1 align-items-center">
                    <div class="notification-suggestion-img">
                      <img src="${item.profile}" alt="" />
                    </div>
                    <div class="d-flex flex-column justify-center">
                      <span class="notification-username">${item.name}</span>
                      <span class="notification-suggested-title-name"
                        >${item.fullName}</span
                      >
                      <span class="notification-suggested-subtitle"
                        >${item.suggestedon}</span
                      >
                    </div>
                  </div>
                  <div>
                    <button id="follow-btn">Follow</button>
                  </div>
                </div>

    `;
    notificationsuggestionlists.append(list);
  });
}
fetchSuggestion();
// stories fetch
const homestories = document.querySelector(".insta-stories");
fetch("./json/stories.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const userStories = document.createElement("div");
      userStories.className =
        "user-stories d-flex flex-column position-relative cursor-pointer";
      userStories.innerHTML = ` <div class="story-border">
   <img
     src="${item.profile}"
     class="story-profile-img"
     alt=""
   />
 </div>
 <span class="stories-profile-name">${item.name}</span>`;
      homestories.append(userStories);
    });
  });
const getUserName = localStorage.getItem("userName");
const getFullName = localStorage.getItem("fullName");
document.querySelector(".suggestion-username").innerHTML = getUserName;
document.querySelector(".suggestion-sub-title").innerHTML = getFullName;
