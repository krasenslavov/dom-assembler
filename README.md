# DOMAssembler

> Tiny HTML DOM assembler (**less than 1KB**).

Quick [demo](https://jsfiddle.net/krasenslavov/ys2dkrfz/) @ jsFiddle.

**IMPORTANT**: When you add link, image or other URLs don't add the protocol, e.g: 

	//google.com [GOOD]
	https://google.com [BAD]

## Usage

DOM Assembler is a tiny, intitive, flexible and easy to use plugin and that will help you generate HTML out of template string.

### Modifiers

* `>` - append child element.
* `+` - append adjacent element.
* `<` - append first child to the parent element.
* `.` - add class(es) to an element.
* `(...)` - add text node inside the element.
* `{name:value,...}` - add additional properties to the element.

### Setup

Simply include or import the script into your project file.

```html
<script src="./dist/assembler.min.js"></script>
```

The example below will create an alert message box using the [Bootstrap](https://getbootstrap.com/docs/4.4/components/alerts/) framework.

```js
let html = assembler('div.alert.alert-success.mt-3{role:alert}>h4.alert-heading(Well done!)+p(Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.)+hr+p.mb-0(Whenever you need to, be sure to use margin utilities to keep things nice and tidy.)');
```

The above will return a document fragment which can be appended into any target HTML element, e.g:

```js
document.querySelector('#container').appendChild(html);
```

This is the HTML markup that will be generated and displayed.

```html
<div id="kntbwzhg85q" class="alert alert-success mt-3 ">
  <h4 id="kwl2p59w72p" class="alert-heading ">Well done!</h4>
  <p id="km3896amduho" class="">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p
  >
  <hr id="k4yw3k7ebspl" class="">
  <p id="ki9drkb68dx" class="mb-0 ">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```

### ES6 Module

```html
<script type="module">
  import { assembler } from './dist/assembler.mod.js';
  assembler('div>h1.heading(Title)+p(Enter text...)+button.btn(Visit...){type:submit}');
</script>
```

### CommonJS / NodeJS

	$ npm install --save dom-assembler

```js
import assembler from 'assembler';
let html = assembler('div>h1.heading(Title)+p(Enter text...)+button.btn(Visit...){type:submit}');
```

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/dom-assembler/dist/assembler.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/dom-assembler/dist/assembler.mod.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/dom-assembler/dist/assembler.js"></script>
```

```html
<script src="https://unpkg.com/dom-assembler/dist/assembler.min.js"></script>
<script type="module" src="https://unpkg.com/dom-assembler/dist/assembler.mod.js"></script>
<script type="module" src="https://unpkg.com/dom-assembler/dist/assembler.js"></script>
```

## [Demo](https://jsfiddle.net/krasenslavov/ys2dkrfz/)

## Contribute

Found a bug or want to propose some improvements or fixes? Fork the project, make you changes, and submit a pull request.

## License

(c) Krasen Slavov | Code released under the [MIT License](https://opensource.org/licenses/MIT).