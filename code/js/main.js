"use strict"

$(function(){
  
	$(".about__word").click(function(){
	  $(this).toggleClass("open");
    $(".about__word").not($(this)).removeClass("open");
	});
  
});

// モーダルウィンドウ
$(function() {

    const open = $("#modal-open");
    const close = $("#modal-close");
    const modal = $("#modal");

    open.click(function () {
        modal.fadeIn();
    });

    close.click(function () {
        modal.fadeOut();
    });
});