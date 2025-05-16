/* This function uses the navToggle class to open/close mobile menu */
function navFunction() {
  var x = document.getElementById("myTopnav"); /* x is now the myTopnav element */
  if (x.className === "topnav") {
    /* E.g if the navToggle class is not already there */
    x.className += " navToggle"; /* Add it in, thus opening the mobile menu */
  } else {
    /* Else, if the navToggle class is already there (i.e. the menu is open) then ... */
    x.className = "topnav"; /* Remove the navToggle class, thus closing the menu */
  }
}

/* Close the mobile menu, once a link is clicked */
function closeMenu() {
  var x = document.getElementById("myTopnav"); /* x is now the myTopnav element */
  if (x.className === "topnav navToggle") {
    /* E.g if the mobile menu is open */
    /* Remove the navtoggle class to close it */
    x.className = "topnav";
  }
}
