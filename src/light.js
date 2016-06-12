/*=====================================================
*
*   Made with <3 by Jérôme Wohlschlegel 2015
*	Base : http://www.twitter.com/bjarneo_
*
======================================================*/

// ref : http://overapi.com/jquery

(function () {
	
	var $ = function (params) {
		return new lightJs(params);
	};
	
	var lightJs = function (params) {
		var selector;
		
		if ( typeof params == 'undefined' ) {
			selector = [];
		} else if ( typeof params == 'object' ) {
			selector = [params];
		} else if ( typeof params == 'string' ) {
			selector = document.querySelectorAll(params);
		}
		
		this.length = selector.length;
		this.version = '2.0';
		this.selector = params;
		
		for (var i = 0; i < this.length; i++) {
			this[i] = selector[i];
		}
		
		return this;        
	};
	
	// Extend the lightJs object.
	$.fn = lightJs.prototype = {
      
		/*
		 * Attributes / CSS
		 */
		
		//Attributes
		
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
		
		prop: function ( attr ) {
			
			return this;
		},
		
		removeAttr: function ( attr ) {
			
			return this;
		},
		
		removeProp: function ( attr ) {
			
			return this;
		},
		
		val: function ( val ) {
			if ( typeof val == "undefined" ) {
				if ( this.length > 0 ) {
					return this[0].value;
				} else {
					return null;
				}
			} else {
				for ( var i = 0; i < this.length; i++ ) {
					this[i].value = val;
				}
			}
			return this;
		},
		
		// CSS
		
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
			if ( this.length == 0 ) {
				return false;
			}
			for ( var i = 0; i < this.length; i++ ) {
				var element = this[i];
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
				} else if ( typeof params == "string" ) {
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
		
		// Dimensions
		
		height: function () {
			
			return this;
		},
		
		width: function () {
			
			return this;
		},
		
		innerHeight: function () {
			
			return this;
		},
		
		innerWidth: function () {
			
			return this;
		},
		
		outerHeight: function () {
			
			return this;
		},
		
		outerWidth: function () {
			
			return this;
		},
		
		// Offset
		
		offset: function () {
			if ( typeof this[0] != 'undefined' ) {
				var rect = this[0].getBoundingClientRect();
				return {
					top: rect.top + document.body.scrollTop,
					left: rect.left + document.body.scrollLeft
				};
			}
			return this;
		},
		
		offsetParent: function () {
			//if ( typeof this[0] != 'undefined' ) {
			//	return this[0].offsetParent || this[0];
			//}
			return this;
		},
		
		position: function () {
			
			return this;
		},
		
		scrollLeft: function () {
			
			return this;
		},
		
		scrollTop: function () {
			
			return this;
		},
		
		// Data
		
		data: function () {
			
			return this;
		},
		
		hasData: function () {
			
			return this;
		},
		
		removeData: function () {
			
			return this;
		},
		
		
		/*
		 * Manipulation
		 */
		
		// Copying
		
		clone: function ( ) {
			if ( typeof this[0] == "object" ) {
				return this[0].cloneNode(true);
			}
			return {};
		},
		
		// DOM Insertion, Around
		
		wrap: function () {
			
			return this;
		},
		
		wrapAll: function () {
			
			return this;
		},
		
		wrapInner: function () {
			
			return this;
		},
		
		// DOM Insertion, Inside
		
		append: function ( html ) {
			if ( typeof html == "undefined" ) {
				return false;
			}
			for ( var i = 0; i < this.length; i++ ) {
				this[i].innerHTML += html;
			}
			return this;
		},
		
		appendTo: function ( html ) {
			
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
		
		prepend: function () {
			
			return this;
		},
		
		prependTo: function () {
			
			return this;
		},
		
		text: function () {
			if ( typeof this[0] != 'undefined' ) {
				this[0].textContent;
			}
			return this;
		},
		
		// DOM Insertion, Outside
		
		after: function ( html ) {
			if ( typeof html == 'string' ) {
				for ( var i = 0; i < this.length; i++ ) {
					this[i].insertAdjacentHTML('afterend', html);
				}
			}
			return this;
		},
		
		before: function ( html ) {
			if ( typeof html == 'string' ) {
				for ( var i = 0; i < this.length; i++ ) {
					this[i].insertAdjacentHTML('beforebegin', html);
				}
			}
			return this;
		},
		
		insertAfter: function () {
			
			return this;
		},
		
		insertBefore: function () {
			
			return this;
		},
		
		// DOM Removal
		
		detach: function () {
			
			return this;
		},
		
		empty: function ( html ) {
			for ( var i = 0; i < this.length; i++ ) {
				this[i].innerHTML = '';
			}
			return this;
		},
		
		remove: function () {
			for ( var i = 0; i < this.length; i++ ) {
				this[i].parentNode.removeChild(this[i]);
			}
			return this;
		},
		
		unWrap: function () {
			
			return this;
		},
		
		// DOM Replacement
		
		replaceAll: function () {
			
			return this;
		},
		
		replaceWidth: function () {
			
			return this;
		},
		
		
		/*
		 * Traversing
		 */
		
		// Filtering
		
		eq: function () {
			
			return this;
		},
		
		filter: function ( filterFn ) {
			for ( var i = 0; i < this.length; i++ ) {
				Array.prototype.filter.call( document.querySelectorAll(this.selector), filterFn );
			}
			return this;
		},
		
		first: function () {
			
			return this;
		},
		
		has: function () {
			
			return this;
		},
		
		is: function ( params ) {
//			if ( typeof this[0] != 'undefined' ) {
//				var el = this[0];
//				if ( typeof params == 'object' ) {
//					return el === params;
//				} else if ( typeof params == 'string' ) {
//					console.log(el);
//					console.log(params);
//					var matches = function( el, params ) {
//						return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, params);
//					};
//
//					matches(el, params);
//				}
//			}
			return this;
		},
		
		last: function () {
			
			return this;
		},
		
		map: function () {
			
			return this;
		},
		
		not: function () {
			
			return this;
		},
		
		slice: function () {
			
			return this;
		},
		
		// Miscellaneous Traversing
		
		add: function () {
			
			return this;
		},
		
		addSelf: function () {
			
			return this;
		},
		
		contents: function () {
			
			return this;
		},
		
		end: function () {
			
			return this;
		},
		
		// Tree Traversal
		
		children: function () {
			if ( typeof this[0] == "object" ) {
				 return this[0].children;
			}
			return [];
		},
		
		closest: function ( parentSelector, element ) {
			
			var parents  = {
				selector: parentSelector,
				curentElement: element,
				checkIsHtmlElement: function( element ){
					return ( typeof element != 'undefined' && typeof element.tagName != 'undefined' ) ? true : false;
				},
				checkIsHtmlTag: function( element ){
					return ( typeof element != 'undefined' && element.matches( "html" ) ) ? true : false;
				}
			};
			
			if ( this.length == 0 || ( typeof element != 'undefined' && ! parents.checkIsHtmlElement( element ) ) || parents.checkIsHtmlTag( element ) ) {
				return false;
			}
			
			if ( parents.checkIsHtmlElement( element ) ) {
				
				if ( element.matches( parentSelector ) ) {
					return $(element);
				} else {
					return this.closest( parentSelector, element.parentNode );
				}
				
			} else {
				var element = this[0];
				if ( element.matches( parentSelector ) ) {
					return $(element);
				} else {
					return this.closest( parentSelector, element.parentNode );
				}
			}
		},
		
		find: function ( childrenSelector ) {
			var returnElement = $();
			for ( var i = 0; i < this.length; i++ ) {
				var element = this[i],
					finds = this[0].querySelectorAll(childrenSelector);
				for ( var s = 0; s < finds.length; s++ ) {
					returnElement.length++;
					returnElement[(returnElement.length)-1] = finds[s];
				}
			}
			return returnElement;
		},
		
		next: function () {
			if ( this.length > 0 ) {
				var element = this[0];
				return $(this[0].nextElementSibling);
			} else {
				return null;
			}
		},
		
		nextAll: function () {
			
			return this;
		},
		
		nextUntil: function () {
			
			return this;
		},
		
		parent: function () {
			if ( this.length > 0 ) {
				var element = this[0];
			} else {
				return false;
			}
			return $(element.parentNode);
		},
		
		parents: function () {
			
			return this;
		},
		
		parentsUntil: function () {
			
			return this;
		},
		
		prev: function () {
			if ( this.length > 0 ) {
				var element = this[0];
				return $(this[0].previousElementSibling);
			} else {
				return null;
			}
		},
		
		prevAll: function () {
			
			return this;
		},
		
		prevUntil: function () {
			
			return this;
		},
		
		siblings: function () {
			
			return this;
		},
		
		
		/*
		 * Events
		 */
		
		// Event Object
		
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
		
		// Mouse Events
		
		click:			function ( callback ){ this.addListener( "click", callback ); },
		dblClick:		function ( callback ){ this.addListener( "dblclick", callback ); },
		focusIn:		function ( callback ){ this.addListener( "focusin", callback ); },
		focusOut:		function ( callback ){ this.addListener( "focusout", callback ); },
		hover:			function ( callback ){ this.addListener( "mouseover", callback ); },
		mouseDown:		function ( callback ){ this.addListener( "mousedown", callback ); },
		mouseEnter:		function ( callback ){ this.addListener( "mouseenter", callback ); },
		mouseLeave:		function ( callback ){ this.addListener( "mouseleave", callback ); },
		mouseMove:		function ( callback ){ this.addListener( "mousemove", callback ); },
		mouseOut:		function ( callback ){ this.addListener( "mouseout", callback ); },
		mouseOver:		function ( callback ){ this.addListener( "mouseover", callback ); },
		mouseUp:		function ( callback ){ this.addListener( "mouseup", callback ); },
		toggle:			function ( callback ){ this.addListener( "toggle", callback ); },
		contextMenu:	function ( callback ){ this.addListener( "contextmenu", callback ); },
		
		// Browser Events
		
		error:			function ( callback ){ this.addListener( "error", callback ); },
		resize:			function ( callback ){ this.addListener( "resize", callback ); },
		scroll:			function ( callback ){ this.addListener( "scroll", callback ); },
		
		// Document Loading
		
		ready:			function ( callback ){ this.addListener( "ready", callback ); },
		load:			function ( callback ){ this.addListener( "load", callback ); },
		unLoad:			function ( callback ){ this.addListener( "unload", callback ); },
		
		// Event Handler Attachment
		
		trigger:		function ( callback ){ this.addListener( "trigger", callback ); },
		unBind: 		function ( event, callback ){
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
		
		// Form Events
		
		blur:			function ( callback ){ this.addListener( "blur", callback ); },
		change:			function ( callback ){ this.addListener( "change", callback ); },
		focus:			function ( callback ){ this.addListener( "focus", callback ); },
		select:			function ( callback ){ this.addListener( "select", callback ); },
		submit:			function ( callback ){ this.addListener( "submit", callback ); },
		
		// Keyboard Events
		
		keyPress:		function ( callback ){ this.addListener( "keypress", callback ); },
		keyDown:		function ( callback ){ this.addListener( "keydown", callback ); },
		keyUp:			function ( callback ){ this.addListener( "keyup", callback ); },
		
		
		/*
		 * Extend
		 */
		
		extend: function ( fn ){
			for ( var label in fn ) {
				$.fn[label] = lightJs.prototype[label] = fn[label];
			}
		},
	};
	
	if(!window.$) {
		window.$ = $;
//		window.lightJs = lightJs;
	}
})();