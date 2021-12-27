var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("banner-image");
  var y = document.getElementsByClassName("banner-detail");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image at every 2 seconds
}