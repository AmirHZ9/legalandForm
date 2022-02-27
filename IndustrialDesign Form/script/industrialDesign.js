$(document).ready(function () {
    $(".legalPerson").css({ display: "none" });
    $(".toggle-on").html("<i class='fa fa-arrow-left'></i>").addClass("toggle");
    $(".toggle-off").html("<i class='fa fa-arrow-right'></i>").addClass("toggle");
  
    var check = true;
    $("#toggleBox").change(function () {
      if (check) {
        $(".realPerson").css({ display: "none" });
        $(".legalPerson").css({ display: "block" });
        check = false;
      } else {
        $(".realPerson").css({ display: "block" });
        $(".legalPerson").css({ display: "none" });
        check = true;
      }
    });
  
    var busseinesCardDsplay = false;
    $(".checkBusseinesCard").click(function () {
      if (busseinesCardDsplay == false) {
        $(".uploadBusseinesCard").css({ display: "block" });
        busseinesCardDsplay = true;
      } else if (busseinesCardDsplay) {
        $(".uploadBusseinesCard").css({ display: "none" });
        busseinesCardDsplay = false;
      }
    });
    $(".appendDocument").click(function () {
     
      $('.addDocument')
        .append(
         ` <label class="form-check-label uploadFile m-1" for="validationFormCheck">بارگذاری مدارک  <i class="fas fa-upload"></i></i></label>
           <input type="file" class="form-check-input" id="validationFormCheck"/> `
        );
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
  

  