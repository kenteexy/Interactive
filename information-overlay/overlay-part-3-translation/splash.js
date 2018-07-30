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
		  console.log(rand(100));
			//var z = rand(10);
      //var x = rand(window.innerWidth) + "px";
      //var y = rand(window.innerHeight) + "px";
      //var x = window.innerWidth * 0.5 + "px";
      //var y = window.innerWidth * 0.5 + "px";

			/**
			function move() {
			    var elem = document.getElementById("myAnimation");
			    var x = 0;
					var y = 0;
			    var id = setInterval(frame, 10);
			    function frame() {
			        if (x == screen.width / 2 && y == screen.height / 2) {
			            clearInterval(id);
			        } else {
			            x++;
									y++;
								  elem.style.left = x + 'px';
			            elem.style.top = y + 'px';
			        }
			    }
			}
			*/

			$("*").css({
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "-webkit-transform": "translate(-50%,-50%) rotate(" + rand(360) + "deg)",
        "-moz-transform": "translate(-50%,-50%) rotate(" + rand(360) + "deg)",
        "-ms-transform": "translate(-50%,-50%) rotate(" + rand(360) + "deg)",
        transform: "translate(-50%,-50%) rotate(" + rand(360) + "deg)",
        height: "auto",
        width: "auto",
				opacity: Math.random(),
				// z-index: z
      });

		})();
	}
})();
