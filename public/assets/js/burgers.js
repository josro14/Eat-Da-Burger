$(function() {
    $(".Devour").on("click", function(event) {
        event.preventDefault();
        var newDevour = $(this).data("newdevoured");
        var id = $(this).data("id");

        var newDevouredstate = {
          devoured: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredstate
        }).then(
          function() {
            console.log("changed devoured to", newDevour);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });