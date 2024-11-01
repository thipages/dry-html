# dry-html

This script tries to facilitate writing HTML
- avoiding to copy and paste identical structural portion of HTML
- changing in one place (the template) any structural HTML modifications.

## Example

```html
<!-- declare a template  with a dashed id and placeholders (t-*) -->
<template id="my-controls">
    <div>
        <label>{t-field}</label>
        <input type="{t-type}" />
    </div>
</template>
<!-- write the corresponding element based on id with placeholders as attributes -->
 <form>
    <my-controls t-field="Name" t-type="text"></my-controls>
    <my-controls t-field="Birthday" t-type="datetime-local"></my-controls>
</form>
```

## Rules
- id must have at least one dash with no leading dash,
- placeholders can be the value of
  - either any elements attributes (except events),
  - or elements content,
- created elements have a `display:block` style,
- element attributes or content must contain solely the placeholder
  - ✅`<span>${t-label}</span>`
  - ❌ : `<span>before${t-label}after</span>`
- placeholders must be placed inside HTML elements (attributes or content) not outside
  - ❌: `<template>{t-outside}<span>{t-inside}</span></template>`
- elements should be written with respect to HTML standard with closing tags
  - ✅ `<my-element></my-element>`
  - ❌: `<my-element />`

## Nomenclature
- `t-*` attributes names have been chosen to
  - mirror the `data-*` attributes avoiding overlaps
  - identify placeholders with not too much ambiguity using `{t-*}` pattern
- template id naming can be somehow difficult
  - having a (short) common suffix for an application may help

## Installation

Place a script tag in your HTML file like this
```html
  <script src="dry-html.js"></script>
```
This script will detect, once `DOMContentLoaded` triggered, the dashed-ids templates and do the job with no additional `Javascript` code.

## Tests

See the `test/index.html` file to understand the technical scope

## ... Javascript

a Javascript access is also available via `esm.min.js` or via `npm i dry-html` with the following exports

```javascript
import {
  defineCustomElements // for all template present in the document
  defineCustomElement, // for one template id
  getAttributes // for one template id
} from '@titsoft/dry-html'

```

