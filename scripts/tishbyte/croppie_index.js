// Start upload preview image
//$(".gambar").attr("src", "../../images/personnel_boy.png");

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
			//alert(e.type);
		}
		reader.readAsDataURL(input.files[0]);
	}
	else {
		swal("Sorry - your browser doesn't support the FileReader API");
	}
}


$uploadCrop = $('#upload-demo').croppie({
	viewport: {
		width: 250,
		height: 250,
	},
	enforceBoundary: false,
	enableExif: true
});


$('#cropImagePop').on('shown.bs.modal', function(){
	// alert('Shown pop');
	$uploadCrop.croppie('bind', {
		url: rawImg
	}).then(function(){
		console.log('jQuery bind complete');
	});
});


$('.item-img').on('change', function () { imageId = $(this).data('id'); tempFilename = $(this).val();

$('#cancelCropBtn').data('id', imageId); readFile(this); });

$('#cropImageBtn').on('click', function (ev) {
	$uploadCrop.croppie('result', {
		type: 'canvas',
		format: 'png',
		size: {width: 250, height: 250}
	}).then(function (resp) {

		$.ajax({
			url: "/process_profile_img",
			type: "POST",
			data: {"image":resp},
			success: function (data) {
				html = '<img src="' + resp + '" />';
				$("#upload-demo").html(html);
			}
		});

		$('#item-img-output').attr('src', resp);
		$('#sc_data_image').attr('value', resp);
		// alert(tempFilename);
		$('#cropImagePop').modal('hide');
	});
});

// End upload preview image
