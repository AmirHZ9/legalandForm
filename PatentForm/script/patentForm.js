$(document).ready(function(){
    $('.legalPerson').css({'display':"none"})
    $('.legalInventor').css({"display":"none"})
    $('.toggle-on').html("<i class='fa fa-arrow-left'></i>").addClass('toggle')
    $('.toggle-off').html("<i class='fa fa-arrow-right'></i>" ).addClass('toggle')
                
    var checkPerson = true;
    $('#personToggleBox').change(function(){
     
        if(checkPerson){

            
            $('.realPerson').css({'display':"none" });
            $('.legalPerson').css({'display':"block" }); 
           checkPerson=false;
        }else {
            
            $('.realPerson').css({'display':"block"});
            $('.legalPerson').css({'display':"none"});
            checkPerson = true
        }
       
     

    });

    var checkInventor = true;
    $('.inventorToggleBox').change(function(){
        if(checkInventor){
            
            $('.realInventor').css({'display':"none" });
            $('.legalInventor').css({'display':"block" }); 
           checkInventor=false;
        }else {
            
            $('.realInventor').css({'display':"block"});
            $('.legalInventor').css({'display':"none"});
            checkInventor = true
        }
       
     

    });


    $(".appendDocument").click(function () {
   
      $('.addDocument')
        .append(
          ' <input type="file" class="form-check-input" id="validationFormCheck1"/> '
        );
    });

(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

});