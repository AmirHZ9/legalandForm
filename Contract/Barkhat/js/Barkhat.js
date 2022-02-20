//ویرایش تبصره
var numberOfTotalTabsare = 0
var editable  = false
$(document).on("click",".editTabsare",function(){
  var taskText = $(this).text();
  $(this).siblings('.addTabsare').css({display:"block"})
  $(this).addClass('selected');

  if(editable == false){
    $(this)
    .html(
      " <span class='textarea' role='textbox'contenteditable>" +
      taskText +
      "</span>"
      );
      $(`.editTabsare:not('.selected')`).addClass('disabledbutton')
        editable = true
       
  }

})

//اضافه کردن تبصره
$(document).on("click",".addTabsare",function(){
  
  number = Number($(this).siblings('span').children('.numberofTabsare').text())
  var inputval = $(this).siblings("p").children("span").text();
  $(this).siblings("p").text(inputval);
  $(this).css({display:"none"})
  if($(this).parents('li').next().is('li') ||inputval.length == 0){
  }else{
    numberOfTotalTabsare++
    $('.numberOfTotalTabsare').text(numberOfTotalTabsare)
    $(this).siblings(".deleteTabsare").removeClass('disabledbutton')
    $(this).siblings('.hideTabsare').css({opacity:"1"})
    
     $(this).parents('li').after(`
     
       <li class=" position-relative">
        <span class="hideTabsare">تبصره <span class='numberofTabsare'>${number + 1}</span> : </span>     
        <p class="editTabsare  d-inline-block w-75" data-placeholder="تبصره"></p>  
         <button class="deleteTabsare disabledbutton" type="button">
           <svg class='closetbn-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
             <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>
           </svg>
         </button>
         <button class="addTabsare" type="button">تایید</button>
         <br>
         </li>
  
     `)
   }
   
   $('.editTabsare:not(this)').removeClass('disabledbutton')
   $(this).siblings("p").removeClass('selected')
      editable = false

  })

//حذف تبصره
$(document).on("click",".deleteTabsare",function(){
  if($(this).siblings('p').text().length == 0){

  }else{
    numberOfTotalTabsare--
    $('.numberOfTotalTabsare').text(numberOfTotalTabsare)
  }
  console.log(numberOfTotalTabsare)
  $(this).parents('li').nextAll('li').children('span').children('.numberofTabsare').each(function(){
    $(this).text(($(this).text())-1)
  })
  $(this).parents("li").remove()
})

//ویرایش بند
$(document).on("click", ".edit", function () {
  var taskText = $(this).text();
  $(this).siblings(".updatebtn").css({ display: "inline-block" })
  $(this).parents('h1').siblings(".updatebtn").css({ display: "inline-block" });
  $(this).addClass('selected');

if(editable == false){
  $(this)
  .html(
    " <span class='textarea' role='textbox'contenteditable>" +
    taskText +
    "</span>"
    );
    $(`.edit:not('.selected')`).addClass('disabledbutton')
    
      editable = true
     
}
});

// تایید ویرایش بند و اضافه کردن بند به ماده
$(document).on("click", ".updatebtn", function () {
  var inputval = $(this).siblings("p").children("span").text();
  var spanval = $(this).siblings('h1').children("span").text();

  editable = false

    if($(this).parents('li').next().is('li') ||inputval.length == 0){

    }else{

      $(this).parents('li').after(`
      <li class="w-100 position-relative">
      <p class="edit mb-0" data-placeholder=". . . ."></p>   
      <button class="btn-deleteTask" type="button">
      <svg class='closetbn-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>
                </svg>
      </button>
      <button class="updatebtn" type="button">تایید</button>
      
      <br>
      
      </li>
      `)
    }

  $('.edit:not(this)').removeClass('disabledbutton')
  $(this).siblings("p").removeClass('selected')
  $(this).siblings("p").text(inputval);
  $(this).siblings("h1").children('span').text(spanval);


  $(".updatebtn").css({ display: "none" });
});

// حذف کردن بند
$(document).on("click", ".btn-deleteTask", function () {
  numberofTabsare--

  $(this).parents('li').nextAll('li').children('p').children('span').children('.numberOfTabsare').each(function(){
   $(this).text(($(this).text())-1)
  })


  $(this).parents("li").siblings("input").remove();
  $(this).parents("li").siblings("label").remove();
  $(this).parents("li").remove();
  
  
//
});

//اضافه کردن ماده
var numberofrules = 6;
var lastRules =  Number($('.lastRules').text())
$(".addrules").click(function () {
  numberofrules++;
  lastRules++
  
  $('.tedadeMade').text(lastRules)
  $('.lastRules').text(lastRules)
  $(`
        <div class="m-3 p-3 extraRules"> 
        <div class="d-flex extraMade position-relative align-items-baseline" >
        <p class="ms-3" >ماده <span class="number">${numberofrules}</span> :</p>
        <button class="deleterules" type="button">
          <svg class='closetbn-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>
          </svg>
        </button>
        <div class="d-flex position-relative w-75">
        <p class="editRulesTitle" data-placeholder=". . . ."></p>  

        <button class="updateRulesTitle" type="button">تایید</button>
        </div>
        </div>  
        <ol class="made p-3">
            <li>
            <p class="edit" data-placeholder=". . . ."></p>  
            <button class="updatebtn" type="button">تایید</button>
            <br>
          </li>
        </ol>
        <ol class="tabsare p-3">
        <li class="position-relative">
                <span class="hideTabsare">تبصره <span class="numberofTabsare">1</span> :</span>
                <p class="editTabsare  d-inline-block w-75" data-placeholder="تبصره"></p>  
                <button class="deleteTabsare disabledbutton" type="button">
           <svg class='closetbn-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
             <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>
           </svg>
         </button>
                <button class="addTabsare" type="button">تایید</button>
                <br>
              </li>
        </ol>
        </div>
        `).insertBefore($(".newRules"));
});

// ویرایش  تیتر ماده
var editrulsetitle = false
$(document).on("click", ".editRulesTitle", function () {
  var taskText = $(this).text()

  $(this).siblings(".updateRulesTitle").css({ display: "block" });
 
if(editrulsetitle == false){
  $(this)
    .html(
      " <span class='textarea' role='textbox'contenteditable >" +
        taskText +
        "</span>"
    );
    editrulsetitle = true
}
});

// تایید ویرایش تیتر ماده
$(document).on("click", ".updateRulesTitle", function () {

  var inputval = $(this).siblings("p").children("span").text();
  editrulsetitle= false
  $(this).siblings("p").text(inputval);

  $(".editRulesTitle").show();
  $(".updateRulesTitle").css({ display: "none" });
});

// حذف ماده
$(document).on("click", ".deleterules", function () {
  numberofrules--
  lastRules--
  $('.tedadeMade').text(lastRules)
  $('.lastRules').text(lastRules)

   $(this).parents('div').nextAll(".extraRules").children('.extraMade').children('p').children('.number').each(function(){
   $(this).text(($(this).text())-1)
   
  })

  $(this).parents(".extraRules").remove();
});

// form Validate/
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
