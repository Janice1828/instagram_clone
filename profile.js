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
  profileTag.style.display = "flex";
  btnTagged.style.borderTop = "1px solid";
  btnSaved.style.borderTop = "0";
  btnPost.style.borderTop = "0";
}
