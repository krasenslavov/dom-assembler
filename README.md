# DOMAssembler

> Tiny HTML DOM assembler (**less than 1KB**).

Quick [demo](https://jsfiddle.net/krasenslavov/ys2dkrfz/25/) @ jsFiddle.

*IMPORTANT* When you add link, image, URL etc. don't add the protocol e.g: 

	GOOD `//google.com` 
	BAD `https://google.com`

## Usage

DOM Assembler is a tiny, intitive, flexible and easy to use (take a look the modifiers down the page).

### Setup

Simply include and import the script into your document as modules.

```html
<script type="module" src="./dist/assembler.js"></script>
<script type="module">
  import { assembler } from './dist/assembler.js';
  assembler(chain, targetId);
</script>
```

The example below will create an alert message box using the [Bootstrap](https://getbootstrap.com/docs/4.4/components/alerts/) framework.

```js
assembler('div.alert.alert-success.mt-3{role:alert}>h4.alert-heading(Well done!)+p(Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.)+hr+p.mb-0(Whenever you need to, be sure to use margin utilities to keep things nice and tidy.)', '#container');
```

... the above string will create and append the following content into the target `container` element.

```html
<div id="kntbwzhg85q" class="alert alert-success mt-3 ">
  <h4 id="kwl2p59w72p" class="alert-heading ">Well done!</h4>
  <p id="km3896amduho" class="">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p
  >
  <hr id="k4yw3k7ebspl" class="">
  <p id="ki9drkb68dx" class="mb-0 ">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```

### CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/dom-assembler/dist/assembler.min.js"></script>
<script type="module" src="https://unpkg.com/dom-assembler/dist/assembler.min.js"></script>
```


### Modifiers

* `>` - append child element.
* `+` - append adjacent element.
* `<` - append first child to the parent element.
* `.` - add class(es) to an element.
* `(...)` - add text node inside the element.
* `{name:value,...}` - add additional properties to the element.

## [Demo](https://jsfiddle.net/krasenslavov/ys2dkrfz/25/)

## Contribute

Found a bug or want to propose some improvements or fixes? Fork the project, make you changes, and submit a pull request.

## License

(c) Krasen Slavov | Code released under the [MIT License](https://opensource.org/licenses/MIT).

