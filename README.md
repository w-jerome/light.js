# light.js

light.js is a very little framework **(5 ko)** with basic jquery functions

## Installation

```
<script src="https://raw.githubusercontent.com/w-jerome/light.js/master/dist/light.min.js"></script>
```

## Functions

### Class manipulation

```addClass
$('.element').addClass('my-classe')
$('.element').removeClass('my-classe')
$('.element').hasClass('my-classe')
$('.element').toggleClass('my-classe')
```

### Html manipulation

```
$('.element').attr('href')
	$('.element').attr('data-type')
	$('.element').attr('data-type', 'apple')

$('.element').html()
$('.element').val()
	$('.element').val('myValue')
	
$('.element').append('<div>my html</div>')
$('.element').remove()
$('.element').css('width')
	$('.element')css('width', '50px')
	$('.element')css({'width': '50px', 'width': '50px'})
```

### DOM manipulation

```
$('.element').parent()
$('.element').closest('.highter-parent')
$('.element').find('.lower-child')
$('.element').next()
$('.element').prev()
```

### Events

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

$('.element').unBind('click focus', function () {})
```


## Create plugin

Plugin script

```
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

```
<script>
	$('button').opacity(0);
</script>
```