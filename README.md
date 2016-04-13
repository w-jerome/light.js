# jsLite

jsLite is a very little framework with basic jquery functions

# Functions

## Class manipulation

```addClass
$('.element').addClass('my-classe')
$('.element').removeClass('my-classe')
$('.element').hasClass('my-classe')
$('.element').toggleClass('my-classe')
```

## Html manipulation

```
$('.element').attr('href')
	$('.element').attr('data-type')
	$('.element').attr('data-type', 'apple')

$('.element').html()
$('.element').append('<div>my html</div>')
$('.element').remove()
$('.element').css('width')
	$('.element')css('width', '50px')
	$('.element')css({'width': '50px', 'width': '50px'})
```

## Search elements

```
$('.element').parent()
$('.element').closest('.highter-parent')
$('.element').find('.lower-child')
$('.element').next()
$('.element').prev()
```

## Event

```
$('.element').on('click mouseleave', function () {})

$('.element').load(function () {})
$('.element').resize(function () {})
$('.element').scroll(function () {})

$('.element').change(function () {})
$('.element').submit(function () {})
$('.element').trigger(function () {})

$('.element').click(function () {})
$('.element').contextMen(function () {})
$('.element').dblClick(function () {})
$('.element').hover(function () {})
$('.element').mouseUp(function () {})
$('.element').mouseDown(function () {})
$('.element').mouseEnter(function () {})
$('.element').mouseLeave(function () {})
$('.element').mouseMove(function () {})
$('.element').mouseOver(function () {})
$('.element').mouseOut(function () {})
$('.element').keyPress(function () {})
$('.element').keyDown(function () {})
$('.element').keyUp(function () {})
$('.element').focus(function () {})
$('.element').focusIn(function () {})
$('.element').focusOut(function () {})
```


## Create plugin

Plugin script

```
// plugins/jslite-opacity.js

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

```
<script>
	$('button').opacity(0);
</script>
```