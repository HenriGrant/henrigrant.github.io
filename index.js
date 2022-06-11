// show menu or not?

let width = screen.width;

function showbutton() {
  document.getElementById("menusvg").classList.toggle("show");
}

window.onload = function() {
  console.log(screen.width + "is my screen width");
  if (width > 800) {
    document.getElementById("menusvg").style.display = "none";
  }
} 

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}