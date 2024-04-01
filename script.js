window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.onload = function() {
  // Check if the page has been loaded before
  var isReloaded = sessionStorage.getItem('isReloaded');
  if (isReloaded !== 'true') {
    // Set the flag and reload the page
    sessionStorage.setItem('isReloaded', 'true');
    window.location.href = 'index.html';
  } else {
    // Reset the flag for the next visit
    sessionStorage.setItem('isReloaded', 'false');
  }
}