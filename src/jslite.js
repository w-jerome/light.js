/*=====================================================
*
*   Made with <3 by Jérôme Wohlschlegel 2015
*	Base : http://www.twitter.com/bjarneo_
*
======================================================*/

(function () {
	
	var $ = function (params) {
		return new jsLite(params);
	};
	
	var jsLite = function (params) {
		var selector,
			i = 0;
		
		if ( typeof params == 'undefined' ) {
			selector = [];
		} else if ( typeof params == 'object' ) {
			selector = [params];
		} else {
			selector = document.querySelectorAll(params);
		}
		
		this.length = selector.length;
		this.version = '2.0';
		
		for (; i < this.length; i++) {
			this[i] = selector[i];
		}
		
		return this;        
	};
	
	// Extend the jsLite object.
	$.fn = jsLite.prototype = {
		
		/*
		 * Class manipulation
		 */
		
		addClass: function ( className ) {
			for ( var i = 0; i < this.length; i++ ) {
				if ( this[i].classList ) {
					this[i].classList.add(className);
				} else {
					this[i].className += ' ' + className;
				}
			}
			return this;
		},
		
		removeClass: function ( className ) {
			for ( var i = 0; i < this.length; i++ ) {
				if (this[i].classList) {
					this[i].classList.remove(className);
				} else {
					this[i].className = this[i].className.replace( new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ' );
				}
			}
			return this;
		},
		
		hasClass: function ( className ) {
			for ( var i = 0; i < this.length; i++ ) {
				if ( this[i].classList ) {
					return this[i].classList.contains(className);
				} else {
					new RegExp('(^| )' + className + '( |$)', 'gi').test( this[i].className );
				}
			}
			return this;
		},
		
		toggleClass : function ( className ) {
			if ( this.length > 0 ) {
				var element = this[0];
			} else {
				return false;
			}
			if ( element.classList ) {
				element.classList.toggle(className);
			} else {
				var classes = element.className.split(' ');
				var existingIndex = classes.indexOf(className);
				
				if (existingIndex >= 0) {
					classes.splice( existingIndex, 1 );
				} else {
					classes.push(className);
				}
				element.className = classes.join(' ');
			}
			return this;
		},
		
		/*
		 * Html manipulation
		 */
		
		attr: function ( attr, value ) {
			if ( this.length > 0 ) {
				var element = this[0];
			} else {
				return this;
			}
			if ( typeof value == 'undefined' ) {
				return element.getAttribute(attr);
			} else {
				for ( var i = 0; i < this.length; i++ ) {
					this[i].setAttribute(attr, value);
				}
			}
			return this;
		},
		
		html: function ( html ) {
			if ( typeof html == "undefined" ) {
				if ( this.length > 0 ) {
					var element = this[0];
					return element.innerHTML;
				} else {
					return null;
				}
			} else {
				for ( var i = 0; i < this.length; i++ ) {
					this[i].innerHTML = html;
				}
			}
			return this;
		},
		
		remove: function () {
			for ( var i = 0; i < this.length; i++ ) {
				this[i].parentNode.removeChild(this[i]);
			}
			return this;
		},
		
		append: function ( html ) {
			if ( typeof html == "undefined" ) {
				return false;
			}
			for ( var i = 0; i < this.length; i++ ) {
				this[i].innerHTML += html;
			}
			return this;
		},
		
		css: function ( params, value ) {
			for ( var i = 0; i < this.length; i++ ) {
				var element = this[i];
				
				if ( typeof params == "object" ) {
					var styles = "";
					for(var style in params) {
						styles = styles+style+":"+params[style]+";";
					}
					if ( styles != "" ) {
						element.style.cssText = styles;
					}
					styles = "";
				} else {
					if ( typeof value == "string" ) {
						element.style.cssText = params+":"+value+";";
					} else {
						var style = window.getComputedStyle( element );
						return style.getPropertyValue( params );
					}
				}
			}
			return this;
		},
		
		/*
		 * Search elements
		 */
		
		parent: function () {
			if ( this.length > 0 ) {
				var element = this[0];
			} else {
				return false;
			}
			return element.parentNode;
		},
		
		parents: function ( parentSelector, element ) {
			
			var parents  = {
				selector: parentSelector,
				curentElement: element,
				checkIsHtmlElement: function( element ){
					if ( typeof element != 'undefined' && typeof element.tagName != 'undefined' ) {
						return true;
					} else {
						return false;
					}
				},
				checkIsHtmlTag: function( element ){
					if ( typeof element != 'undefined' && element.matches( "html" ) ) {
						return true;
					} else {
						return false;
					}
				}
			};
			
			if ( this.length == 0 || ( typeof element != 'undefined' && ! parents.checkIsHtmlElement( element ) ) || parents.checkIsHtmlTag( element ) ) {
				return false;
			}
			
			if ( parents.checkIsHtmlElement( element ) ) {
				
				if ( element.matches( parentSelector ) ) {
					return element;
				} else {
					return this.parents( parentSelector, element.parentNode );
				}
				
			} else {
				var element = this[0];
				if ( element.matches( parentSelector ) ) {
					return element;
				} else {
					return this.parents( parentSelector, element.parentNode );
				}
			}
		},
		
		find: function ( childrenSelector ) {
			if ( this.length > 0 ) {
				var element = this[0];
				return this[0].querySelectorAll(childrenSelector);
			} else {
				return null;
			}
		},
		
		next: function () {
			if ( this.length > 0 ) {
				var element = this[0];
				return this[0].nextElementSibling;
			} else {
				return null;
			}
		},
		
		prev: function () {
			if ( this.length > 0 ) {
				var element = this[0];
				return this[0].previousElementSibling;
			} else {
				return null;
			}
		},
		
		/*
		 * Event elements
		 */
		
		addListener: function ( event, callback ){
			for ( var i = 0; i < this.length; i++ ) {
				this[i].addEventListener( event, callback, false );
			}
		},
		
		on: function ( event, callback ){
			if ( event.indexOf(" ") > -1 ) {
				var events = event.split(" ");
				for ( var i = 0; i < events.length; i++ ) {
					this.addListener( events[i], callback );
				}
			} else {
				this.addListener( event, callback );
			}
		},
		
		click:		 function ( callback ){ this.addListener( "click", callback ); },
		contextMenu: function ( callback ){ this.addListener( "contextmenu", callback ); },
		dblClick:	 function ( callback ){ this.addListener( "dblclick", callback ); },
		mouseDown:	 function ( callback ){ this.addListener( "mousedown", callback ); },
		mouseUp:	 function ( callback ){ this.addListener( "mouseup", callback ); },
		mouseEnter:	 function ( callback ){ this.addListener( "mouseenter", callback ); },
		mouseLeave:	 function ( callback ){ this.addListener( "mouseleave", callback ); },
		mouseMove:	 function ( callback ){ this.addListener( "mousemove", callback ); },
		mouseOver:	 function ( callback ){ this.addListener( "mouseover", callback ); },
		mouseOut:	 function ( callback ){ this.addListener( "mouseout", callback ); },
		keyDown:	 function ( callback ){ this.addListener( "keydown", callback ); },
		
		keyUp: function ( callback ){ this.addListener( "keyup", callback ); },
		
		unBind: function ( event, callback ){
			if ( event.indexOf(" ") > -1 ) {
				var events = event.split(" ");
				for ( var i = 0; i < events.length; i++ ) {
					this.removeEventListener(events[i], callback);
				}
			} else {
				for ( var i = 0; i < this.length; i++ ) {
					this[i].removeEventListener(event, callback);
				}
			}
		},
		
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
		}
	};
	
	if(!window.$) {
		window.$ = $;
	}
})();
