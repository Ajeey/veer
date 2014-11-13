$(document).ready(function() {
	
	// inside img folder
	var imgLocation = 'img/';


	// put the filenames of the images in an array. Only the file names and not extension
	// if it is number then write as arr = [1,2];
	// if it is string then write as arr = ["aj", "veer"];
	var imagesArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

	// this function gets a random number from the imagesArray and returns it
	var getRandomImage = function() {
		var randomImage = imagesArray[Math.floor(Math.random()*imagesArray.length)];
		return randomImage;
	};

	// this is used to get the random number only once which is used for class="nine" image elements
	var randomImage4Nine = getRandomImage();

	// this selects all the img elements(tags) excluding the img tags with class names "no-change"
	// and runs a for loop for the selected images
	$('img').not('.no-change').each(function(){
		//console.log(++i);
		// we get the current image in the loop by accessing the $(this)
		// and store it in var image for convenience
		var image = $(this);
		// if the current image in the loop has class 'nine' then use randomImage4nine
		// else call the getRandomImage() for every iteration in the each loop
		if(image.hasClass('nine')) {
			$(image).attr('src', imgLocation + randomImage4Nine + ".jpg");
		} else {
			$(image).attr('src', imgLocation + getRandomImage() + ".jpg");
		}
	});


	// this function will get executed when you click get Paul's answer
	$('#my-button').click(function(){

		$('.veer-loading').show();
		var images = $('.nine').attr('src');
		
		setTimeout(function(){
			$('.veer-loading').hide();
			$('#final').attr('src',images);
		}, 3000); // give time in milliseconds

	});

});