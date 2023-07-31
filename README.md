# light.js

:seedling: light.js is a very little framework **(5 ko, no gziped)** with basic jquery like functions

## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/w-jerome/light.js/dist/light.min.js"></script>
```

## Use

### Classes manipulation

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
$('.el').css('width', '50px')
$('.el').css({
  width: '50px',
})
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
$('.el').on('click', () => {})
$('.el').on('mouseenter mouseleave', () => {}) // multiple events

$('.el').load(() => {})
$('.el').resize(() => {})
$('.el').scroll(() => {})

$('.el').change(() => {})
$('.el').submit(() => {})
$('.el').trigger(() => {})

$('.el').click(() => {})
$('.el').contextMen(() => {})
$('.el').dblClick(() => {})
$('.el').hover(() => {})

$('.el').mouseUp(() => {})
$('.el').mouseDown(() => {})
$('.el').mouseEnter(() => {})
$('.el').mouseLeave(() => {})
$('.el').mouseMove(() => {})
$('.el').mouseOver(() => {})
$('.el').mouseOut(() => {})

$('.el').keyPress(() => {})
$('.el').keyDown(() => {})
$('.el').keyUp(() => {})

$('.el').focus(() => {})
$('.el').focusIn(() => {})
$('.el').focusOut(() => {})

$('.el').unBind('click focus', () => {})
```

## How to create a plugin

### Plugin script

```javascript
// plugins/light-opacity.js

(function () {
  $.fn.extend({
    /*
     * Opacity
     */
    opacity: function(opacity) {
      if (typeof opacity !== 'number') {
        return false;
      }

      opacity = opacity > 1 ? 1 : opacity < 0 ? 0 : opacity;

      for (var i = 0; i < this.length; i++) {
        var element = this[i];
        element.style.opacity = opacity;
      }
    },
  });
})();
```

Use

```javascript
$('button').opacity(0);
```
