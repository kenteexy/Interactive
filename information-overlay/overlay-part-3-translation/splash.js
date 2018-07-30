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
      // Randomly choose x- or y- coordinate of "collection point" of elements where variable a is a window dimension
      function chooseLoc(a) {
        return Math.floor(Math.random() * a) + 1;
      }
      var x = chooseLoc(window.innerWidth) + "px";
      var y = chooseLoc(window.innerHeight) + "px";
      var rotation =

			$("*").css({
        "position": "absolute",
        "left": x,
        "top": y,
        "-webkit-transform": "rotate(" + chooseLoc(360) + "deg)",
        "-moz-transform": "rotate(" + chooseLoc(360) + "deg)",
        "-ms-transform": "rotate(" + chooseLoc(360) + "deg)",
        transform: "rotate(" + chooseLoc(360) + "deg)",
        height: "auto",
        width: "auto"
      });
		})();
	}
})();
