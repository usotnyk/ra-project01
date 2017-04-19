$( document ).ready(function() {
    addEventListeners();
});

var addEventListeners = function() {
  addSubscribeButtonClickListener();
}

var addSubscribeButtonClickListener = function() {
  var subscribeButton = $("#subscribeButton");
  subscribeButton.bind("click", onSubscribeButtonClick);
}

var onSubscribeButtonClick = function() {
  console.log("subscribe button clicked!");
}