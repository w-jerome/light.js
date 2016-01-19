# jsLite

jsLite is very little framework with the basic jquery functions

# Functions

## Class manipulation

```addClass
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
```

## Search elements

```
$('.element').parent()
$('.element').parents('.highter-parent')
$('.element').find('.lower-child')
$('.element').next()
$('.element').prev()
```

## Event

```
$('.element').on(function () {})
$('.element').click(function () {})
$('.element').contextMenu(function () {})
$('.element').dblClick(function () {})
$('.element').mouseDown(function () {})
$('.element').mouseUp(function () {})
$('.element').mouseEnter(function () {})
$('.element').mouseLeave(function () {})
$('.element').mouseMove(function () {})
$('.element').mouseOver(function () {})
$('.element').mouseOut(function () {})
$('.element').keyDown(function () {})
$('.element').keyUp(function () {})
```
