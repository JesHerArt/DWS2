(function(){                                            // Self-executing function

    window.onload = init;                               //Adding an event handler for the onload property of the window to invoke the init function.

    function init() {  

console.log("helloworld");

var mn = $(".main-nav");

$(window).scroll(function() {
	if( $(window).scrollTop() > 200 ) {
		mn.addClass("main-nav-scrolled");
	}
	else {
		mn.removedClass("main-nav-scrolled");
	}
});



    }       //End of the init function.

})();       //End of the self-executing function.