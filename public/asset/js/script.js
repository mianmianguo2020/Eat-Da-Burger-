// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = {
        devoured: true
      };
      // Send the PUT request.
      $.ajax("/api/devour/" + id, {
        type: "PUT",
        data: devoured
      }).then(
        function() {
          console.log("put request made with data set to:" + devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var burger = {
        burger_name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/add", {
        type: "POST",
        data: burger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  