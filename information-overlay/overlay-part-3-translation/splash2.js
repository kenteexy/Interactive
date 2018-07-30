(function(){
	// This part checks for jQuery
	var version = "1.10.2";
	// Checks for prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
		// If there isn't an instance of jQuery, create one and append it to the head
		// Else run our bookmarklet!
		var done = false;
		var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initBookmarklet(window.jQuery);
			}
            else {
                console.log('error loading');
            }
		};
		document.getElementsByTagName("head")[0].appendChild(script);
        if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
            console.log(':::');
        }
        else {
            console.log('jquery loaded');
        }
	} else {
		initBookmarklet(window.jQuery);
	}

  // My Bookmarklet
	function initBookmarklet($) {
		(window.bookmarklet = function() {
			// Randomly choose a value for element attributes. May be used for:
      // 1) Choosing x- or y- coordinate for "collection point" of elements where variable a is a window dimension
      // 2) Choosing a rotation value for an element where variable a is a fixed degree value
      function rand(a) {
        return Math.floor(Math.random() * a) + 1;
      }
      var x = rand(window.innerWidth) + "px";
      var y = rand(window.innerHeight) + "px";
      //var x = window.innerWidth * 0.5 + "px";
      //var y = window.innerWidth * 0.5 + "px";

			$("*").css({
        "position": "fixed",
        "left": x,
        "top": y,
				//"-webkit-transform": "translate(-50%,-50%) rotate(" + rand(360) + "deg)",
        //"-moz-transform": "translate(-50%,-50%) rotate(" + rand(360) + "deg)",
        //"-ms-transform": "translate(-50%,-50%) rotate(" + rand(360) + "deg)",
        transform: "rotate(" + rand(360) + "deg)",
        height: "auto",
        width: "auto"
      });
		})();
	}
})();
