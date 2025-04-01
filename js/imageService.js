var imagesServices = {'software-dev': 'software-dev.png', 'web-dev': 'webDesign.png', 'seo': 'seo.png'};
$(document).ready(function(){
	$('.see-more').on('click', function(e){
		var img = imagesServices[$(this).attr('href')];
		$("#imgService").fadeOut('fast', function(){
			$(this).attr('src', 'img/'+img).fadeIn('fast');
		})
		e.preventDefault();

	})
})