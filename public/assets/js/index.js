// Make sure we wait to attach our handlers until the DOM is fully loaded.

// Hide the image and title after 10 seconds providing enough time for the animation to run
// https://stackoverflow.com/questions/26393539/css-solution-to-hide-div-after-x-amount-of-seconds
$(function () {
  let hide = $(".pizza-intro");
  setTimeout(function () {
    hide.hide();
  }, 10000);
});

$(function () {
  var appear = $(".main");
  setTimeout(function () {
    appear.css("display", "block");
  }, 10000);
});

$(function () {
  var appear = $(".ordered");
  setTimeout(function () {
    appear.css("display", "inline-block");
  }, 10000);
});

$(function () {
  var appear = $(".devoured");
  setTimeout(function () {
    appear.css("display", "inline-block");
  }, 10000);
});

// $(function () {
//   var hide = $(".main");
//   setTimeout(function () {
//     hide.hide();
//   }, 10000);

// $(".change-sleep").on("click", function(event) {
//   var id = $(this).data("id");
//   var newSleep = $(this).data("newsleep");

//   var newSleepState = {
//     sleepy: newSleep
//   };

//   // Send the PUT request.
//   $.ajax("/api/cats/" + id, {
//     type: "PUT",
//     data: newSleepState
//   }).then(
//     function() {
//       console.log("changed sleep to", newSleep);
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });

// $(".create-form").on("submit", function(event) {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();

//   var newCat = {
//     name: $("#ca").val().trim(),
//     sleepy: $("[name=sleepy]:checked").val().trim()
//   };

//   // Send the POST request.
//   $.ajax("/api/cats", {
//     type: "POST",
//     data: newCat
//   }).then(
//     function() {
//       console.log("created new cat");
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });

// $(".delete-cat").on("click", function(event) {
//   var id = $(this).data("id");

//   // Send the DELETE request.
//   $.ajax("/api/cats/" + id, {
//     type: "DELETE"
//   }).then(
//     function() {
//       console.log("deleted cat", id);
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });
// });
