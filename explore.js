const modal = document.getElementById("modal");
const removeModalBtn = document.getElementById("removeModal");

// document
//   .getElementById("sidebar-create-post")
//   .addEventListener("click", function () {
//     modal.style.display = "block";
//     // alert("asd");
//   });
// console.log(modal);
// console.log(modal.style.display);
// try {
//   if (modal.style.display == "block") {
//     //   document.addEventListener(
//     //     "click",
//     //     function (event) {
//     //   if (
//     //     event.target.matches("#removeModal") ||
//     //     !event.target.closest(".create-post-card")
//     //   ) {
//     //     modal.style.display = "none";
//     //   }
//     console.log("asd");
//     alert("displayed");
//     //     },
//     //     false
//     //   );
//   }
// } catch (err) {
//   console.log(err);
// }

document
  .getElementById("sidebar-create-post")
  .addEventListener("click", function () {
    modalDisplay();
  });
function modalDisplay() {
  const displayStatus = window.getComputedStyle(modal, null).display;
  console.log(displayStatus);
  if (displayStatus == "none") {
    modal.style.display = "block";
    console.log(displayStatus);
  } else {
    if (displayStatus == "block") {
      document.addEventListener("click", function (event) {
        if (
          event.target.matches("#removeModal") ||
          !event.target.closest(".create-post-card")
        ) {
          modal.style.display = "none";
        }
      });
    }
  }
  // modal.style.display = "block";
  // console.log(displayStatus);
  // if (displayStatus == "block") {
  //   document.addEventListener("click", function (event) {
  //     if (
  //       event.target.matches("#removeModal") ||
  //       !event.target.closest(".create-post-card")
  //     ) {
  //       modal.style.display = "none";
  //     }
  //   });
  // }
}
if (modal.style.display == "none") {
}
// console.log(modal.style.display)
// if (modalDisplay == "none") {
//   console.log(modalDisplay);
//   document
//     .getElementById("sidebar-create-post")
//     .addEventListener("click", function () {
//       modal.style.display = "block";
//     });
// } else {
//   console.log(modalDisplay);
// }
const searchContainer = document.getElementById("search-main-container");
const search = document.getElementById("searchUser");
const sidebarContainer = document.querySelector(".instagram-sidebar");
search.addEventListener("click", () => {
  searchContainer.style.display = "block";
  console.log(searchContainer);
  // sidebarContainer.style.display = "none";
  //   alert("as");
});
