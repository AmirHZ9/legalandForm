$(document).ready(function () {  
    
    $(".editbtn").click(function () {
        
    
        $('.updatebtn').css({'display':"block"})
        $(this).hide();
  
        var taskText = $.trim($(this).siblings("p").text());
        $(this)
          .siblings("p")
          .html(
            " <span class='textarea' role='textbox'contenteditable>" +
              taskText +
              "</span>"
          );
  
      });

      $(".updatebtn").click(function () {
        console.log('asdf')
      var inputval = $(this).siblings("p").children("span").text();

      $(this).siblings("p").text(inputval);

      $(".editbtn").show();
      $(".updatebtn").css({'display':'none'});

    });
    
    (function () {
    "use strict";

    var forms = document.querySelectorAll(".needs-validation");

    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
});
