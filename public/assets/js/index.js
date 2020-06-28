// Make sure we wait to attach our handlers until the DOM is fully loaded.

// Hide the image and title after 10 seconds providing enough time for the animation to run
// https://stackoverflow.com/questions/26393539/css-solution-to-hide-div-after-x-amount-of-seconds
$(function () {
  let hide = $(".pizza-intro");
  setTimeout(function () {
    hide.hide();
  }, 3000);
});

$(function () {
  var appear = $(".main");
  setTimeout(function () {
    appear.css("display", "block");
  }, 3000);
});

$(function () {
  var appear = $(".ordered");
  setTimeout(function () {
    appear.css("display", "inline-block");
  }, 3000);
});

$(function () {
  var appear = $(".devoured");
  setTimeout(function () {
    appear.css("display", "inline-block");
  }, 3000);
});

$(function () {
  $("#makePizza").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPizza = {
      name: $("#newPizza").val().trim(),
      devoured: false,
    };

    // Send the POST request.
    $.ajax("/api/pizzas", {
      type: "POST",
      data: newPizza,
    }).then(function () {
      console.log("created new pizza");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
