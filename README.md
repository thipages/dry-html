# dry-html

`dry-html` script use the `template` element
- avoiding to copy and paste identical portion of HTML,
- changing in one place (the template) any HTML modifications.

see also [layout-m](https://github.com/thipages/layout-m) for creating flows of template instances.
## Example

```html
<!-- declare a template  with a dashed id and placeholders (t-*) -->
// class attribute is transfered to the custom-element
<template id="group-two" class="a-class">
    <label>{t-field}</label>
    <input type="{t-type}" />
</template>
<!--
write the template instance elements
 - based on template id (group-two)
 - with placeholders as attributes (t-field and t-type)
 - with template class attribute if no class is defined
 -->
 <form>
    <group-two
      t-field="Name"
      t-type="text"
    ></group-two>
    <!-- another-class replaces a-class -->
    <group-two
      class="another-class" 
      t-field="Birthday"
      t-type="datetime-local">
    </group-two>
</form>
```

## Rules
- template `id` must have at least one dash with no leading dash,
- template placeholders `t-*` can be
  - either any elements attributes (except events),
  - or elements content,
- template attributes or content must contain solely the placeholder
  - ✅`<span>${t-label}</span>`
  - ❌ : `<span>before${t-label}after</span>`
- template placeholders must be placed inside HTML elements (attributes or content) not outside
  - ❌: `<template>{t-outside}<span>{t-inside}</span></template>`
- template instance should be written with respect to HTML standard with closing tags
  - ✅ `<my-element></my-element>`
  - ❌: `<my-element />`
- template instance elements have a `display:block` style,

## Installation

Either place a script tag in your HTML file like this (corresponding to `src/auto.js`)
```html
  <script src="dry-html.js"></script>
```
This script will detect, once `DOMContentLoaded` triggered, the dashed-ids templates and do the job with no additional `Javascript` code.

Or via `npm i @titsoft/dry-html` with the following exports

```javascript
import { defineCustomElements, defineCustomElement, getAttributes } from '@titsoft/dry-html'

defineCustomElements() // defines custom-elements for all templates based on their id
defineCustomElement(id) // defines a custom-element for one template id
getAttributes(id) // gives all placeholders/attributes for one template id

```

## Tests
To get the technical scope, see
- `test/auto/index.html`
- `test/module/index.html`


