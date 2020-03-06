# DOMAssembler

🧬 Quickly create HTML DOM structure out of template string (less than 1KB).

## Usage

DOM Assembler is intitive, flexible and easy to use. Take a look the modifiers down the page.

The example below will create an alert message using the Bootstrap framework.

```js
assembler('div.alert.alert-success.mt-3{role:alert}>h4.alert-heading(Well done!)+p(Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.)+hr+p.mb-0(Whenever you need to, be sure to use margin utilities to keep things nice and tidy.)', '#container');
```

... the above string will create and append the following content into the target `container` element.

```html
<div id="kntbwzhg85q" class="alert alert-success mt-3 ">
	<h4 id="kwl2p59w72p" class="alert-heading ">Well done!</h4>
	<p id="km3896amduho" class="">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p
	><hr id="k4yw3k7ebspl" class="">
	<p id="ki9drkb68dx" class="mb-0 ">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```

### Setup

Simply include and import the script into your document.

```html
<script type="module" src="./dist/assembler.js"></script>
<script type="module">
  import { assembler } from './dist/assembler.js';
  assembler(chain, targetId);
</script>
```

### Modifiers

* `>` - append child element.
* `+` - apppend ajacent element.
* `<` - append first child to the parent element.
* `.` - add class(es) to an element.
* `(...)` - add text node inside an element.
* `{name:value,...}` - add additional properties to an element.

## Demo

## Contribute

Found a bug or want to propose some improvements or fixes? Fork the project, make you changes, and submit a pull request.

## License

(c) Krasen Slavov | Code released under the [MIT License](https://opensource.org/licenses/MIT).

