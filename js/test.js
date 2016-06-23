jQuery(document).ready(function($) {            
    $(window).scroll(function() {  
        var scroll 		= $(this).scrollTop();
        var nav 		= $('.navbar-inverse');
		var brand 		= $('.navbar-brand');
		var nav_items 		= $('.navbar-nav');
        var intro 		= $('.intro-title');
		var intro_p 		= $('.intro-p');

		
        if (scroll > 100) {
            nav.addClass('second-state');
			nav_items.addClass('second-state');
                   
        } else {    
           nav.removeClass('second-state');
		   nav_items.removeClass('second-state');
            
        }
		if (scroll > 150) {
			intro.addClass('second-state');
			intro_p.addClass('second-state');
		} else {
			intro.removeClass('second-state');
			intro_p.removeClass('second-state');
		}
		
    });
});

