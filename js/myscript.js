//Subscribe Alert
//Method 1

/*$( document ).ready(function() {
    addEventListeners();
});

var addEventListeners = function() {
  addEmailFormSubmitListener();
}

var addEmailFormSubmitListener = function() {
  var emailForm = $("#emailForm");
  emailForm.bind("submit", onEmailFormSubmit);
}

var onEmailFormSubmit = function() {
  alert("Thank you for subscribing to our updates!");
}*/

//Method 2

$(document ).ready(function() {
  var emailForm = document.getElementById("emailForm");

  emailForm.addEventListener("submit", onSubmitEmailForm, false);
});

  function onSubmitEmailForm (eventObject) {
    window.alert("Thank you for subscribing to our updates!")
}

//Smooth Scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
