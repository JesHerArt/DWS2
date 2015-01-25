(function(){                                            // Self-executing function

    window.onload = init();                               //Adding an event handler for the onload property of the window to invoke the init function.

    function init() {  

		console.log("testing js to make sure it's running");

		$(window).scroll(function() {
			if( $(window).scrollTop() > 90 ) {
				console.log("testing one");
				$(".main-nav").addClass("main-nav-scrolled");
			}
			else if( $(window).scrollTop() < 90 ){
				$(".main-nav").removeClass("main-nav-scrolled");
				console.log("testing two");
			}
		});



    }       //End of the init function.

})();       //End of the self-executing function.