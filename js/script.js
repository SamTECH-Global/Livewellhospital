
  ///function _open_menu(){
    ////$('.ovarlay-div').animate({'margin-left':'0%'},200);
    ////$('.sidemenu-div').animate({'margin-left':'0px'},400);
  /////}
  
  function _close_menu(){
    $('.ovarlay-div').animate({'margin-left':'-100%'},200);
    $('.sidemenu-div').animate({'margin-left':'-250px'},400);
  }
  function scrolltodiv(divid, margintop){
        $('html, body').animate({scrollTop: $("#"+divid).offset().top - margintop}, 500);
        $('.ovarlay-div').animate({'margin-left':'-100%'},200);
        $('.sidemenu-div').animate({'margin-left':'-250px'},400);
  }
  function _open_menu(divid, margintop){
    $('html, body').animate({scrollTop: $("#"+divid).offset().top - margintop}, 500);
    $('.ovarlay-div').animate({'margin-left':'0%'},200);
    $('.sidemenu-div').animate({'margin-left':'0px'},400);
  }
  $(document).ready(function(){
    $('.ul_header li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    });
  }); 

function _img(view_content){
  $('.overlay').html('<div class="loading animated zoomIn" style="margin-top:15%;"><img src="img/ajax_loader.gif" alt="loading.."></div>').fadeIn(1000);
  var action = 'get_img_panel';
  var dataString = 'action='+action+'&view_content='+view_content;
  $.ajax({
     type: "POST",
     url: "config/code.php",
     data: dataString,
     cache: false,
     success: function(html){
        $('.overlay').html(html);
     }
  });
}
function _close_btn(divid, margintop){
   $('.overlay').html('').fadeOut(1000);
  $('html, body').animate({scrollTop: $("#"+divid).offset().top - margintop}, 500);
	
}