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
fetch("http://localhost/Instagram-clone/Explore.php")
  .then((res) => res.json())
  .then((data) => {
    // data.forEach((item) => {
    for (let i = 0; i < data.length; i++) {
      const col = document.createElement("div");
      col.className = "col-4 explore-contents-col cursor-pointer";
      col.innerHTML = `
      <div class="position-relative explore-images-container">
      <img
        src="${data[i].img}"
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
          <span class="explore-like-comments-counter">${data[i].likesCount}</span>
        </div>
        <div class="d-flex align-items-center">
          <img
            src="./icons/white-comment.png"
            alt="Comment"
            class="explore-like-comment-icon"
          />
          <span class="explore-like-comments-counter">${data[i].commentsCount}</span>
        </div>
      </div>
    </div>
      `;
      exploreContents.append(col);
      col.addEventListener("click", () => {
        let exploreDetails = document.querySelector(".explore-details");
        exploreDetails.style.display = "block";
        exploreDetails.innerHTML = `
        <div class="row">
        <div class="col-2 d-flex align-items-center" style="padding-left: 10px">
          <div
            class="back-icon d-flex justify-content-center align-items-center cursor-pointer"
          >
            <img src="./icons/back.png" alt="" />
          </div>
        </div>
        <div class="col-8" id="explore-details-main-content">
          <div class="d-flex">
            <div class="explore-details-img w-50" style="height: 94vh">
              <img
                src="${data[i].img}"
                alt=""
                height="100%"
                id="explore-details-main-img"
              />
            </div>
            <div class="explore-details-comments w-50">
              <div
                class="explore-user-details d-flex justify-content-between align-items-center"
              >
                <div class="d-flex align-items-center gap-1">
                  <div class="explore-user-details-profile">
                    <img src="./images/aakriti.png" alt="" />
                  </div>
                  <span>aakriti5</span>
                </div>
                <div class="more-option-logo">
                  <img src="./icons/dots.png" alt="" class="cursor-pointer" />
                </div>
              </div>
              <div class="explore-comments-lists d-flex flex-column gap-1">
                <div class="explore-comments d-flex gap-1 align-items-center">
                  <div class="explore-user-details-profile">
                    <img src="./images/aakriti.png" alt="" />
                  </div>
                  <div class="explore-details-username">
                    <p class="d-flex gap-1">
                      <span id="username">aakriti5</span
                      ><span id="post-thumbnail">${data[i].caption}</span>
                    </p>
                    <p id="postTime">1d</p>
                  </div>
                </div>
                <div class="explore-comments d-flex gap-1 align-items-center">
                  <div class="explore-details-commentors">
                    <img src="./images/asmishrestha.png" alt="" />
                  </div>
                  <div class="explore-details-username">
                    <p class="d-flex gap-1">
                      <span id="username">loremip</span
                      ><span id="post-thumbnail">Polka Dot Summer Top</span>
                    </p>
                    <p id="postTime">1d</p>
                  </div>
                </div>
              </div>
              <div class="explore-details-card-footer">
                <div class="border-footer">
                  <div class="d-flex justify-content-between">
                    <div class="explore-details-icons-collection d-flex gap-2">
                      <img
                        src="./icons/heart.png"
                        alt=""
                        class="cursor-pointer"
                      />
                      <img
                        src="./icons/chat.png"
                        alt=""
                        class="cursor-pointer"
                      />
                      <img
                        src="./icons/send.png"
                        alt=""
                        class="cursor-pointer"
                      />
                    </div>
                    <div class="explore-bookmark-icon">
                      <img
                        src="./icons/bookmark-white.png"
                        alt=""
                        class="cursor-pointer"
                      />
                    </div>
                  </div>
                  <div>
                    <p id="explore-details-likes-counter">Likes</p>
                    <p id="explore-details-time-counter">2 days ago</p>
                  </div>
                </div>
                <div class="d-flex gap-2 comments-section">
                  <div class="emoji-icon">
                    <img
                      src="./icons/smile.png"
                      alt=""
                      class="cursor-pointer"
                    />
                  </div>
                  <input
                    type="text"
                    id="explore-detail-input"
                    placeholder="Add a comment..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-2 d-flex flex-column justify-content-between"
          style="align-items: flex-end; padding-right: 10px"
        >
          <img
            src="./icons/icons8-cross-50.png"
            alt=""
            id="explore-details-close"
            class="cursor-pointer"
          />
          <div
            class="next-icon d-flex justify-content-center align-items-center cursor-pointer"
            
          >
            <img src="./icons/next.png" alt="" />
          </div>
          <div></div>
        </div>
      </div>
        `;
        console.log(data[i].id);
        if (data[i].id == 1) {
          document.querySelector(".back-icon").style.display = "none";
        } else if (data[i].id == 7) {
          document.querySelector(".next-icon").style.display = "none";
        }
        document
          .querySelector(".next-icon")
          .addEventListener("click", nextData);
        document
          .querySelector(".back-icon")
          .addEventListener("click", previousData);
        let id = i;
        function previousData() {
          id--;
          exploreDetails.innerHTML = `
          <div class="row">
          <div class="col-2 d-flex align-items-center" style="padding-left: 10px">
            <div
              class="back-icon d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img src="./icons/back.png" alt="" />
            </div>
          </div>
          <div class="col-8" id="explore-details-main-content">
            <div class="d-flex">
              <div class="explore-details-img w-50" style="height: 94vh">
                <img
                  src="${data[id].img}"
                  alt=""
                  height="100%"
                  id="explore-details-main-img"
                />
              </div>
              <div class="explore-details-comments w-50">
                <div
                  class="explore-user-details d-flex justify-content-between align-items-center"
                >
                  <div class="d-flex align-items-center gap-1">
                    <div class="explore-user-details-profile">
                      <img src="./images/aakriti.png" alt="" />
                    </div>
                    <span>aakriti5</span>
                  </div>
                  <div class="more-option-logo">
                    <img src="./icons/dots.png" alt="" class="cursor-pointer" />
                  </div>
                </div>
                <div class="explore-comments-lists d-flex flex-column gap-1">
                  <div class="explore-comments d-flex gap-1 align-items-center">
                    <div class="explore-user-details-profile">
                      <img src="./images/aakriti.png" alt="" />
                    </div>
                    <div class="explore-details-username">
                      <p class="d-flex gap-1">
                        <span id="username">aakriti5</span
                        ><span id="post-thumbnail">Polka Dot Summer Top</span>
                      </p>
                      <p id="postTime">1d</p>
                    </div>
                  </div>
                  <div class="explore-comments d-flex gap-1 align-items-center">
                    <div class="explore-details-commentors">
                      <img src="./images/asmishrestha.png" alt="" />
                    </div>
                    <div class="explore-details-username">
                      <p class="d-flex gap-1">
                        <span id="username">loremip</span
                        ><span id="post-thumbnail">Polka Dot Summer Top</span>
                      </p>
                      <p id="postTime">1d</p>
                    </div>
                  </div>
                </div>
                <div class="explore-details-card-footer">
                  <div class="border-footer">
                    <div class="d-flex justify-content-between">
                      <div class="explore-details-icons-collection d-flex gap-2">
                        <img
                          src="./icons/heart.png"
                          alt=""
                          class="cursor-pointer"
                        />
                        <img
                          src="./icons/chat.png"
                          alt=""
                          class="cursor-pointer"
                        />
                        <img
                          src="./icons/send.png"
                          alt=""
                          class="cursor-pointer"
                        />
                      </div>
                      <div class="explore-bookmark-icon">
                        <img
                          src="./icons/bookmark-white.png"
                          alt=""
                          class="cursor-pointer"
                        />
                      </div>
                    </div>
                    <div>
                      <p id="explore-details-likes-counter">Likes</p>
                      <p id="explore-details-time-counter">2 days ago</p>
                    </div>
                  </div>
                  <div class="d-flex gap-2 comments-section">
                    <div class="emoji-icon">
                      <img
                        src="./icons/smile.png"
                        alt=""
                        class="cursor-pointer"
                      />
                    </div>
                    <input
                      type="text"
                      id="explore-detail-input"
                      placeholder="Add a comment..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-2 d-flex flex-column justify-content-between"
            style="align-items: flex-end; padding-right: 10px"
          >
            <img
              src="./icons/icons8-cross-50.png"
              alt=""
              id="explore-details-close"
              class="cursor-pointer"
            />
            <div
              class="next-icon d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img src="./icons/next.png" alt="" />
            </div>
            <div></div>
          </div>
        </div>

          `;
          document
            .querySelector(".next-icon")
            .addEventListener("click", nextData);
          if (id > 0) {
            document
              .querySelector(".back-icon")
              .addEventListener("click", previousData);
          } else {
            document.querySelector(".back-icon").style.display = "none";
          }
        }
        function nextData() {
          id++;
          exploreDetails.innerHTML = `
          <div class="row">
          <div class="col-2 d-flex align-items-center" style="padding-left: 10px">
            <div
              class="back-icon d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img src="./icons/back.png" alt="" />
            </div>
          </div>
          <div class="col-8" id="explore-details-main-content">
            <div class="d-flex">
              <div class="explore-details-img w-50" style="height: 94vh">
                <img
                  src="${data[id].img}"
                  alt=""
                  height="100%"
                  id="explore-details-main-img"
                />
              </div>
              <div class="explore-details-comments w-50">
                <div
                  class="explore-user-details d-flex justify-content-between align-items-center"
                >
                  <div class="d-flex align-items-center gap-1">
                    <div class="explore-user-details-profile">
                      <img src="./images/aakriti.png" alt="" />
                    </div>
                    <span>aakriti5</span>
                  </div>
                  <div class="more-option-logo">
                    <img src="./icons/dots.png" alt="" class="cursor-pointer" />
                  </div>
                </div>
                <div class="explore-comments-lists d-flex flex-column gap-1">
                  <div class="explore-comments d-flex gap-1 align-items-center">
                    <div class="explore-user-details-profile">
                      <img src="./images/aakriti.png" alt="" />
                    </div>
                    <div class="explore-details-username">
                      <p class="d-flex gap-1">
                        <span id="username">aakriti5</span
                        ><span id="post-thumbnail">Polka Dot Summer Top</span>
                      </p>
                      <p id="postTime">1d</p>
                    </div>
                  </div>
                  <div class="explore-comments d-flex gap-1 align-items-center">
                    <div class="explore-details-commentors">
                      <img src="./images/asmishrestha.png" alt="" />
                    </div>
                    <div class="explore-details-username">
                      <p class="d-flex gap-1">
                        <span id="username">loremip</span
                        ><span id="post-thumbnail">Polka Dot Summer Top</span>
                      </p>
                      <p id="postTime">1d</p>
                    </div>
                  </div>
                </div>
                <div class="explore-details-card-footer">
                  <div class="border-footer">
                    <div class="d-flex justify-content-between">
                      <div class="explore-details-icons-collection d-flex gap-2">
                        <img
                          src="./icons/heart.png"
                          alt=""
                          class="cursor-pointer"
                        />
                        <img
                          src="./icons/chat.png"
                          alt=""
                          class="cursor-pointer"
                        />
                        <img
                          src="./icons/send.png"
                          alt=""
                          class="cursor-pointer"
                        />
                      </div>
                      <div class="explore-bookmark-icon">
                        <img
                          src="./icons/bookmark-white.png"
                          alt=""
                          class="cursor-pointer"
                        />
                      </div>
                    </div>
                    <div>
                      <p id="explore-details-likes-counter">Likes</p>
                      <p id="explore-details-time-counter">2 days ago</p>
                    </div>
                  </div>
                  <div class="d-flex gap-2 comments-section">
                    <div class="emoji-icon">
                      <img
                        src="./icons/smile.png"
                        alt=""
                        class="cursor-pointer"
                      />
                    </div>
                    <input
                      type="text"
                      id="explore-detail-input"
                      placeholder="Add a comment..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-2 d-flex flex-column justify-content-between"
            style="align-items: flex-end; padding-right: 10px"
          >
            <img
              src="./icons/icons8-cross-50.png"
              alt=""
              id="explore-details-close"
              class="cursor-pointer"
            />
            <div
              class="next-icon d-flex justify-content-center align-items-center cursor-pointer"
            >
              <img src="./icons/next.png" alt="" />
            </div>
            <div></div>
          </div>
        </div>

          `;
          document
            .querySelector(".back-icon")
            .addEventListener("click", previousData);
          if (id == data.length - 1) {
            document.querySelector(".next-icon").style.display = "none";
          }
          if (id < data.length - 1) {
            document
              .querySelector(".next-icon")
              .addEventListener("click", nextData);
          }
        }
        let exploreDetailsStatus = window.getComputedStyle(
          exploreDetails,
          null
        ).display;
        if (exploreDetailsStatus == "block") {
          setTimeout(() => {
            window.onclick = (e) => {
              let location = e.target;
              if (
                exploreDetailsStatus == "block" &&
                !location.closest("#explore-details-main-content") &&
                !location.closest(".next-icon") &&
                !location.closest(".back-icon")
              ) {
                exploreDetails.style.display = "none";
                exploreDetailsStatus = "none";
              }
            };
          }, 100);
        }
      });
    }
  });
const notificationsuggestionlists = document.getElementById(
  "notification-suggestion-lists"
);
async function fetchSuggestion() {
  const res = await fetch("./json/suggestions.json");
  const data = await res.json();
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
