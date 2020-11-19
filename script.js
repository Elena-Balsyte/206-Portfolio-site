// This is a script to shrink the navbar on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("navbar").style.opacity = "0.85";
    //document.getElementById("greeting").style.opacity="1";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("navbar").style.opacity = "1";
    //document.getElementById("greeting").style.opacity="0";
  }
}
// This script will fade in the greeting

// $(document).ready(function () {
//   $("greeting").fadeIn(3000);
// });
