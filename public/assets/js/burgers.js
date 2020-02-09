$(function() {
    $(".devour").on("click", function(event) {
      const id = $(this).data("id");
      const newDevoured = {
        devoured: true
      };
  
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          console.log("changed sleep to", newDevoured);
          location.reload();
        }
      );
    });
  
    $(".add-burger-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#burger-name").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
  