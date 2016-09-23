$(function() {
	// SET DIV HEIGHT
	$('#galleria').height($(window).height() - 80);

	// BUILD IMAGE LIST
	var numOfPics = 74;
	var picList = '';

	for(var i = 1; i <= numOfPics; i++) {
		picList += '<img src="assets/images/'+i+'.JPG">';
	}

	$('#galleria').html(picList);


	// LOAD GALLERIA
    Galleria.loadTheme('plugins/galleria.classic.min.js');
    Galleria.configure({
        transition: 'fade',
        imageCrop: false,
        thumbnails: false
    });
    Galleria.run('#galleria', {
        autoplay: 4000 // will move forward every 7 seconds
    });
});