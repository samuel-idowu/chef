/*
// JavaScript for label effects only
$(window).load(function(){
$(".col-3 input").val("");

$(".input-effect input").focusout(function(){
if($(this).val() != ""){
$(this).addClass("has-content");
}else{
$(this).removeClass("has-content");
}
})
});
*/


//Validator sign up

// Init validator with standart settings



$(document).ready(function () {
	$('#refrral').click(function(){
		$('#referral-code').show();
		$('#refrral').hide();
	});
});


$(window).scroll(function() {
	if ( $(window).scrollTop() > 50 ) {
		$('.navbar-custom').addClass('nav-color');
	}else{
		$('.navbar-custom').removeClass('nav-color');
	}
});

//Javascript time interval functionality on login/

setTimeout(function(){
	$('#userLogedIn').fadeOut('fast');
},7000);// <-- time in milliseconds

//Search loading bar for images =========//
$(document).ready(function(){
	$('.view-more').click(function(){
		$('.last-row').fadeIn(200);
		$('.view-more').fadeOut(100);
	});
});


$(window).load(function() {
	// Animate loader off screen
	$(".loader-img").fadeOut(2000);
});


$(document).ready(function(){
	$('.city-drop button').click(function(){
		$('.menu-left2').toggle(100);
	});
});

$(document).ready(function(){
	$('.close').click(function(){
		$('#news-letters-home').fadeOut(100);
	});
});
//Search loading bar for images =========//

jQuery(function($) {

	var doAnimations = function() {
		var offset = $(window).scrollTop() + $(window).height(),
		$animatables = $('.animatable');

		if ($animatables.size() == 0) {
			$(window).off('scroll', doAnimations);
		}

		$animatables.each(function(i) {
			var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
				$animatable.removeClass('animatable').addClass('animated');
			}
		});

	};
	$(window).on('scroll', doAnimations);
	$(window).trigger('scroll');

});

$(document).ready(function () {
	var url = window.location;
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
	$('ul.nav a').filter(function() {
		return this.href == url;
	}).parent().addClass('active');
});

$(window).on("scroll", function(e) {
	if ($(window).scrollTop() >= $(".head").height()) $(".head").fadeOut(100);
	else $(".head").fadeIn(100);
});

/* Checkout selection option ------------------ */

$(document).ready(function(){
	$('#opt2').click(function(){
		$('#plan02').fadeIn(200);
		$('#plan01, #plan03, #plan04,#plan05, #plan06,#plan07').hide();
	});
	$('#opt1').click(function(){
		$('#plan01').fadeIn(200);
		$('#plan02, #plan03, #plan04,#plan05, #plan06,#plan07').hide();
	});
	$('#opt3').click(function(){
		$('#plan03').fadeIn(200);
		$('#plan01, #plan02, #plan04,#plan05, #plan06,#plan07').hide();
	});
	$('#opt4').click(function(){
		$('#plan04').fadeIn(200);
		$('#plan01, #plan02, #plan03,#plan05, #plan06,#plan07').hide();
	});
	$('#opt5').click(function(){
		$('#plan05').fadeIn(200);
		$('#plan01, #plan02, #plan03,#plan04, #plan06,#plan07').hide();
	});
	$('#opt6').click(function(){
		$('#plan06').fadeIn(200);
		$('#plan01, #plan02, #plan03,#plan04, #plan05,#plan07').hide();
	});
	$('#opt7').click(function(){
		$('#plan07').fadeIn(200);
		$('#plan01, #plan02, #plan03,#plan04, #plan05,#plan06').hide();
	});
});

/* Checkout selection option ------------------ */



// Start upload preview image
$(".gambar").attr("src", "../../images/personnel_boy.png");
var $uploadCrop,
tempFilename,
rawImg,
imageId;
function readFile(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('.upload-demo').addClass('ready');
			$('#cropImagePop').modal('show');
			rawImg = e.target.result;
		}
		reader.readAsDataURL(input.files[0]);
	}
	else {
		swal("Sorry - you're browser doesn't support the FileReader API");
	}
}

//Fetching a province cities on registration
function fetch_cities(val)
{
	$.ajax({
		type: 'POST',
		url: '/users/switch_cities',
		data: {
			id:val
		},
		success: function (response) {
			document.getElementById("sc_city_id").innerHTML=response;
		}
	});
}

//Fetching a city suburbs on registration
function fetch_suburbs(val)
{
	$.ajax({
		type: 'POST',
		url: '/users/switch_suburbs',
		data: {
			id:val
		},
		success: function (response) {
			document.getElementById("sc_suburb_id").innerHTML=response;
		}
	});
}


function rate_chef(chef,mark,zone)
{
	var url='/chef/rate/'+chef+'/'+mark+'/'+zone;
	// alert(url);

	var xhr=createXHR();
	var result='';
	xhr.open('POST', url,true);
	xhr.onreadystatechange=function()
	{
		if(xhr.readyState == 4)
		{
			result= xhr.responseText;

			// document.getElementById('one').class="";
			document.getElementById(zone).innerHTML=result;
			// alert(result);
		}
	};
	xhr.send(null);

	// document.location.href='index.php?module=albums&action=album&album='+album;

}

// Password validating on the chef registration ============//

/* var password = document.getElementById("password")
, confirm_password = document.getElementById("confirm_password");

function validatePassword(){
if(password.value != confirm_password.value) {
confirm_password.setCustomValidity("Passwords Don't Match");
} else {
confirm_password.setCustomValidity('');
}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

*/

// Password validating on the chef registration ============//
