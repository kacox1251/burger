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
          location.reload();
        }
      );
    });
  
    $(".add-burger-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#burger-name").val().trim()
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
});
  