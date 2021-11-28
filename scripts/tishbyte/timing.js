var time = setInterval(currentTime, 1000);

function currentTime() {
	var date = new Date();
	var t = date.toLocaleTimeString();
	document.getElementById("clock").innerHTML = t;
}

  $(function(){
$("#addClass").click(function () {
          $('#qnimate').addClass('popup-box-on');
            });
          
            $("#removeClass").click(function () {
          $('#qnimate').removeClass('popup-box-on');
      });
  })


//========================================//
$(document).ready(function(){
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	})
});



function open_nav() {
  $("body").toggleClass("nav_open");
}

//===============================================
// Code for progression bar on clietn dashboard //


//Menu dropdown list on search button ================//


$(".profile-img").click(function () {
       if ($(".menu-profile").is(":hidden")) {
        $(".menu-profile").show();
         	} else {
         $(".menu-profile").hide();
       }
   });
$(".menu-profile").mouseleave(function(){
    $(this).hide();
});

$("#status-1").hover(function () {
   if ($("#icon-1").is(":hidden")) {
    $("#icon-1").show();
        } else {
      $("#icon-1").hide();
    }
});
$("#status-2").hover(function () {
   if ($("#icon-2").is(":hidden")) {
    $("#icon-2").show();
        } else {
      $("#icon-2").hide();
    }
});
$("#status-3").hover(function () {
   if ($("#icon-3").is(":hidden")) {
    $("#icon-3").show();
        } else {
      $("#icon-3").hide();
    }
});
$("#status-4").hover(function () {
   if ($("#icon-4").is(":hidden")) {
    $("#icon-4").show();
        } else {
      $("#icon-4").hide();
    }
});
$("#status-5").hover(function () {
   if ($("#icon-5").is(":hidden")) {
    $("#icon-5").show();
        } else {
      $("#icon-5").hide();
    }
});

// Code for progression bar on clietn dashboard //

$("#progress-1").hover(function () {
   if ($("#status-prog-1").is(":hidden")) {
    $("#status-prog-1").show();
        } else {
      $("#status-prog-1").hide();
    }
});

$("#progress-2").hover(function () {
   if ($("#status-prog-2").is(":hidden")) {
    $("#status-prog-2").show();
        } else {
      $("#status-prog-2").hide();
    }
});
$("#progress-3").hover(function () {
   if ($("#status-prog-3").is(":hidden")) {
    $("#status-prog-3").show();
        } else {
      $("#status-prog-3").hide();
    }
});
$("#progress-4").hover(function () {
   if ($("#status-prog-4").is(":hidden")) {
    $("#status-prog-4").show();
        } else {
      $("#status-prog-4").hide();
    }
});


/* Star rating point ------------------ */


// menu bar toogle dashboard ==//

function htmlbodyHeightUpdate(){
		var height3 = $( window ).height()
		var height1 = $('.nav').height()+50
		height2 = $('.main').height()
		if(height2 > height3){
			$('html').height(Math.max(height1,height3,height2)+10);
			$('body').height(Math.max(height1,height3,height2)+10);
		}
		else
		{
			$('html').height(Math.max(height1,height3,height2));
			$('body').height(Math.max(height1,height3,height2));
		}
		
	}
	$(document).ready(function () {
		htmlbodyHeightUpdate()
		$( window ).resize(function() {
			htmlbodyHeightUpdate()
		});
		$( window ).scroll(function() {
			height2 = $('.main').height()
  			htmlbodyHeightUpdate()
		});
	});
	


