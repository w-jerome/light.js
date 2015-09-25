/*=====================================================
*
*   Made with <3 by Jérôme Wohlschlegel 2015
*	Base : Michael Jasper 2011
*
======================================================*/

function $(selector) {
    
	var about = {
		Version: 1,
		Author: "Jérôme Wohlschlegel",
		Created: "22 September 2015"
	};
    
	if (selector) {
        
		if (window === this) {
			return new $(selector);
		}
        
        if ( typeof selector == "object" ) {
            this.elements = [selector];
        } else {
            this.elements = document.querySelectorAll(selector);
        }
		return this;
	} else {
		return about;
	}
    
}

$.prototype = {
    
    /*
     * Class manipulation
     */
    
	addClass: function ( className ) {
        for ( var i = 0; i < this.elements.length; i++ ) {
            if ( this.elements[i].classList ) {
                this.elements[i].classList.add(className);
            } else {
                this.elements[i].className += ' ' + className;
            }
        }
        return this.elements;
    },
    
	removeClass: function ( className ) {
        for ( var i = 0; i < this.elements.length; i++ ) {
            if (this.elements[i].classList) {
                this.elements[i].classList.remove(className);
            } else {
                this.elements[i].className = this.elements[i].className.replace( new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ' );
            }
        }
        return this.elements;
    },
    
	hasClass: function ( className ) {
        for ( var i = 0; i < this.elements.length; i++ ) {
            if ( this.elements[i].classList ) {
                return this.elements[i].classList.contains(className);
            } else {
                new RegExp('(^| )' + className + '( |$)', 'gi').test( this.elements[i].className );
            }
        }
        return this.elements;
    },
    
	toggleClass : function ( className ) {
        if ( this.elements.length > 0 ) {
            var element = this.elements[0];
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
        return this.elements;
    },
    
    /*
     * Html manipulation
     */
    
	attr: function ( attr, value ) {
        if ( this.elements.length > 0 ) {
            var element = this.elements[0];
        } else {
            return false;
        }
        if ( typeof value == 'undefined' ) {
            return element.getAttribute(attr);
        } else {
            for ( var i = 0; i < this.elements.length; i++ ) {
                this.elements[i].setAttribute(attr, value);
            }
        }
        return this;
    },
    
	html: function ( html ) {
        if ( typeof html == "undefined" ) {
            if ( this.elements.length > 0 ) {
                var element = this.elements[0];
                return element.innerHTML;
            } else {
                return null;
            }
        } else {
            for ( var i = 0; i < this.elements.length; i++ ) {
                this.elements[i].innerHTML = html;
            }
        }
        return this.elements;
    },
    
	remove: function () {
        for ( var i = 0; i < this.elements.length; i++ ) {
            this.elements[i].parentNode.removeChild(this.elements[i]);
        }
        return this.elements;
    },
    
	append: function ( html ) {
        if ( typeof html == "undefined" ) {
            return false;
        }
        for ( var i = 0; i < this.elements.length; i++ ) {
            this.elements[i].innerHTML += html;
        }
        return this.elements;
    },
    
	css: function ( params, value ) {
        for ( var i = 0; i < this.elements.length; i++ ) {
            var element = this.elements[i];
            
            if ( typeof params == "object" ) {
                
            } else {
                if ( typeof value == "string" ) {
                    
                } else {
                    return getComputedStyle(element)[params];
                }
            }
        }
        return this.elements;
    },
    
    /*
     * Search elements
     */
    
	parent: function () {
        if ( this.elements.length > 0 ) {
            var element = this.elements[0];
        } else {
            return false;
        }
        return element.parentNode;
    },
    
	parents: function ( parentSelector, element ) {
        if ( typeof element != 'undefined' ) {
            
            if ( element.matches( parentSelector ) ) {
                
                return element;
                
            } else if( element.matches("html") ) {
                return false;
            } else {
                return this.parents( parentSelector, element.parentNode );
            }
            
        } else {
            
            if ( this.elements.length > 0 ) {
                var element = this.elements[0].matches( parentSelector );
                return this.parents( parentSelector, this.elements[0].parentNode );
            } else {
                return false;
            }
            
        }
    },
    
	find: function ( childrenSelector ) {
        if ( this.elements.length > 0 ) {
            var element = this.elements[0];
            return this.elements[0].querySelectorAll(childrenSelector);
        } else {
            return null;
        }
    },
    
	next: function () {
        if ( this.elements.length > 0 ) {
            var element = this.elements[0];
            return this.elements[0].nextElementSibling;
        } else {
            return null;
        }
    },
    
	prev: function () {
        if ( this.elements.length > 0 ) {
            var element = this.elements[0];
            return this.elements[0].previousElementSibling;
        } else {
            return null;
        }
    },
    
    /*
     * Event elements
     */
    
    addListener: function ( event, callback ){
        for ( var i = 0; i < this.elements.length; i++ ) {
            this.elements[i].addEventListener( event, callback, false );
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
    
    click: function ( callback ){
        this.addListener( "click", callback );
    },
    
    contextMenu: function ( callback ){
        this.addListener( "contextmenu", callback );
    },
    
    dblClick: function ( callback ){
        this.addListener( "dblclick", callback );
    },
    
    mouseDown: function ( callback ){
        this.addListener( "mousedown", callback );
    },
    
    mouseUp: function ( callback ){
        this.addListener( "mouseup", callback );
    },
    
    mouseEnter: function ( callback ){
        this.addListener( "mouseenter", callback );
    },
    
    mouseLeave: function ( callback ){
        this.addListener( "mouseleave", callback );
    },
    
    mouseMove: function ( callback ){
        this.addListener( "mousemove", callback );
    },
    
    mouseOver: function ( callback ){
        this.addListener( "mouseover", callback );
    },
    
    mouseOut: function ( callback ){
        this.addListener( "mouseout", callback );
    },
    
    keyDown: function ( callback ){
        this.addListener( "keydown", callback );
    },
    
    keyUp: function ( callback ){
        this.addListener( "keyup", callback );
    }
    
};
