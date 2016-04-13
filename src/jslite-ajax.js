(function () {
	
	/*
	 * 	PARAMS
	 * ==================================================
	 * 
	 * 	link : string ('index.html', 'index.html #main') [required]
	 * 	status : string ('success', 'error') [optional]
	 * 	callback : function [optional]
	 * 	
	 * 	USE
	 * ==================================================
	 * 
	 *	$().load('index.html', function (reponse, status, request) {
	 *		console.log(reponse);
	 *		console.log(status);
	 *		console.log(request);
	 *	});
	 */
	
	$.fn.extend({
		
		/*
		 * Ajax
		 */
		
		load: function ( link, status, callback ){
			var wrap = link.split(" ");
			var request = new XMLHttpRequest();
			
			request.open('GET', wrap[0], true);

			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {

					var response = request.responseText;
					var statusRequest = "success";
					var html = "";

					if ( typeof wrap[1] != "undefined" ) {
						var docfrag = document.createDocumentFragment();
						html = document.createElement("html");
						html.innerHTML = response;

						var htmlTemp = $(html).find(wrap[1]);
						if (htmlTemp.length) {
							html = htmlTemp[0];
							html = html.outerHTML;
						}else {
							html = false;
						}
					} else {
						html = response;
					}

					if (typeof status == "function" ) {
						status(html, statusRequest, request);
					} else if (typeof callback == "function" ) {
						callback(html, statusRequest, request);
					}
				} else {
					if (typeof status == "function" ) {
						status(html, "error", request);
					} else if (typeof callback == "function" ) {
						callback(html, "error", request);
					}
				}
			};
			
			request.onerror = function() {
				// There was a connection error of some sort
			};

			request.send();
		},
	});
})();
