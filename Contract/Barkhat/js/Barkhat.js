//اضاقه کردن بند به ماده
$(document).on("click", ".submit", function (event) {
  event.preventDefault();

  var text = $(this).siblings("p").children(".textarea").text();

  if (text.length == 0) {
  } else {
    $(this).parents("div").children("ol").append(`
        <li class="w-100 position-relative">
        <p class="edit">${text}</p>  
        <button class="btn-deleteTask" type="button">
        <svg class='closetbn-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>
                  </svg>
        </button>
        <button class="updatebtn" type="button">تایید</button>
        
        <br>
        <hr>
        </li>
        `);
  }

  $(".textarea").text("");
});

//ویرایش بند

var editable  = false
$(document).on("click", ".edit", function () {
  var taskText = $(this).text();
  $(this).siblings(".updatebtn").css({ display: "inline-block" });

if(editable == false){

  $(this)
    .html(
      " <span class='textarea' role='textbox'contenteditable>" +
        taskText +
        "</span>"
    );
      editable = true
}
});

// تایید ویرایش بند
$(document).on("click", ".updatebtn", function () {
  var inputval = $(this).siblings("p").children("span").text();
editable = false
  $(this).siblings("p").text(inputval);

  
  $(".updatebtn").css({ display: "none" });
});

// حذف کردن بند
$(document).on("click", ".btn-deleteTask", function (event) {
  event.preventDefault();

  $(this).parents("li").siblings("input").remove();
  $(this).parents("li").siblings("label").remove();
  $(this).parents("li").remove();
});

//اضافه کردن ماده
var numberofrules = 6;
var lastRulse =  Number($('.lastRules').text())
$(".addrules").click(function () {
  numberofrules++;
  lastRulse++
  $('.tedadeMade').text(lastRulse)
  $('.lastRules').text(lastRulse)
  $(`
        <div class="border m-3 p-3 extraRules"> 
        <div class="d-flex ">
        <p class="ms-3">ماده <span class="number">${numberofrules}</span> :</p>
        <div class="d-flex justify-content-around position-relative">
        <p class="w-50 ">
        <span class="textarea w-100" role="textbox" data-placeholder="نوشتن..." contenteditable></span>
        </p>
        <button class="editRulesTitle" type="button">ویرایش</button>
        <button class="updateRulesTitle" type="button">تایید</button>
        </div>
        </div>  
        <ol class="p-3">
        
        </ol>
        <div class="d-flex justify-content-around position-relative">
        <p class="w-75 ">
        <span class="textarea w-100" role="textbox" data-placeholder="نوشتن..." contenteditable></span>
        </p>
        <button class="submit" type="button">ثبت</button>
        <button class="deleterules" type="button">حذف</button>
        </div>
        </div>
        `).insertBefore($(".newRules"));
});

// ویرایش  تیتر ماده
$(document).on("click", ".editRulesTitle", function () {
  var taskText = $.trim($(this).siblings("p").text());

  $(this).siblings(".updateRulesTitle").css({ display: "block" });
  $(this).hide();

  $(this)
    .siblings("p")
    .html(
      " <span class='textarea' role='textbox'contenteditable>" +
        taskText +
        "</span>"
    );
});

// تایید ویرایش تیتر ماده
$(document).on("click", ".updateRulesTitle", function () {
 
 var inputval = $(this).siblings("p").children("span").text();

  $(this).siblings("p").text(inputval);

  $(".editRulesTitle").show();
  $(".updateRulesTitle").css({ display: "none" });
});

// حذف ماده
$(document).on("click", ".deleterules", function () {
  numberofrules--
  lastRulse--
  $('.tedadeMade').text(lastRulse)
  $('.lastRules').text(lastRulse)

  const num =$(this).parents('div').nextAll(".extraRules").children("div:first").children("p").children('span').text()-1

  $(this).parents('div').nextAll(".extraRules").children("div:first").children("p").children('span').text(num)


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
