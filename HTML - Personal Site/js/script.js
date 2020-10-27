function buttonFunction(button, modal, index) {

  // Get the modal
  var modal = document.getElementById(modal);

  // Get the button that opens the modal
  var btn = document.getElementById(button);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[index];

  // When the user clicks on the button, open the modal
    modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}



// ******* JS for banner color change *******
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})
