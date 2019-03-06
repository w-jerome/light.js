# light.js

:seedling: light.js is a very little framework **(5 ko, no gziped)** with basic jquery like functions

## Installation

```html
<script src="https://raw.githubusercontent.com/w-jerome/light.js/master/dist/light.min.js"></script>
```

## Use

### Class manipulation

```javascript
$('.el').addClass('my-classe')
$('.el').removeClass('my-classe')
$('.el').hasClass('my-classe')
$('.el').toggleClass('my-classe')
```

### Html manipulation

```javascript
$('.el').attr('href')
	$('.el').attr('data-type')
	$('.el').attr('data-type', 'apple')

$('.el').html()

$('.el').val()
	$('.el').val('myValue')
	
$('.el').append('<div>my html</div>')

$('.el').remove()

$('.el').css('width')
	$('.el')css('width', '50px')
	$('.el')css({'width': '50px', 'width': '50px'})
```

### DOM manipulation

```javascript
$('.el').parent()
$('.el').closest('.highter-parent')
$('.el').find('.lower-child')
$('.el').next()
$('.el').prev()
```

### Events

```javascript
$('.el').on('click', function () {})
	$('.el').on('mouseenter mouseleave', function () {})

$('.el').load(function () {})
$('.el').resize(function () {})
$('.el').scroll(function () {})

$('.el').change(function () {})
$('.el').submit(function () {})
$('.el').trigger(function () {})

$('.el').click(function () {})
$('.el').contextMen(function () {})
$('.el').dblClick(function () {})
$('.el').hover(function () {})

$('.el').mouseUp(function () {})
$('.el').mouseDown(function () {})
$('.el').mouseEnter(function () {})
$('.el').mouseLeave(function () {})
$('.el').mouseMove(function () {})
$('.el').mouseOver(function () {})
$('.el').mouseOut(function () {})

$('.el').keyPress(function () {})
$('.el').keyDown(function () {})
$('.el').keyUp(function () {})

$('.el').focus(function () {})
$('.el').focusIn(function () {})
$('.el').focusOut(function () {})

$('.el').unBind('click focus', function () {})
```


## Create plugin

Plugin script

```javascript
// plugins/light-opacity.js

(function () {
	$.fn.extend({
		
		/*
		 * Opacity
		 */
		opacity: function ( params ){
			
			if ( typeof params != 'string' && typeof params != 'number' ) {
				return false;
			}
			for ( var i = 0; i < this.length; i++ ) {
				var element = this[i];
				element.style.opacity = params;
			}
		},
	});
})();
```

Use

```javascript
$('button').opacity(0);
```
