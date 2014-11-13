$(document).ready(function() {
    var container = $("#fade%id%").fadeTo(0, 0.%id=inactive_opacity%); // set default
    
    $(window).scroll(function() {
        container.each(function(i) {
            
            var windowHeight = $(window).height();
            var viewTop = $(window).scrollTop();
            var viewBottom = viewTop + windowHeight;
            
            var distanceFromTop = $(this).offset().top - viewTop;
            var distanceFromBottom = viewBottom - $(this).offset().top - $(this).height();
            
            var visible = (distanceFromTop + distanceFromBottom) <= windowHeight;
            var allVisible = (distanceFromTop * distanceFromBottom) >= 0;
            
            if (visible) {
                if (allVisible) {
                    $(this).stop().delay(%id=delay%).fadeTo(%id=speed%, 0.%id=active_opacity%);
                } 
                else {
					//$(this).stop().delay(%id=delay%).fadeTo(%id=speed%, 0.%id=inactive_opacity%);
                }
			}
		});
    });
});