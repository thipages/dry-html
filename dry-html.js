const t=("dry-"+Math.random()).replace(".","");let e=1;const n=()=>t+e++,o="#inner#",s=/\{(?<content>t-\w[\-\w]+)\}/;function c(t){const e=document.getElementById(t).content.cloneNode(!0),n=function(t){const e=t.querySelectorAll("*"),n=new Map;for(const t of e){const e=t.attributes;for(let o=0,c=e.length;o<c;o++){const{nodeName:c,nodeValue:r}=e.item(o),i=r.match(s);if(i){const e=l(t);n.get(e)||n.set(e,[]);const o="on"===c.substring(0,2)?{type:c.substring(2)}:null;n.get(e).push([c,i.groups.content,o])}}}return n}(e);var c;c=n,u(e,(function(t){if(0===t.childElementCount){const e=t.textContent.match(s);if(e){const n=l(t);c.get(n)||c.set(n,[]),c.get(n).push([o,e.groups.content])}}}));const r=new Set;for(const[,t]of n)for(const[e,n,o]of t)r.add(n);return{refClone:e,refData:n,attributes:[...r]}}function r(t){if(!function(t){if(!t)return!1;const e=t.indexOf("-");return 0!==e&-1!==e}(t))return;const{refClone:e,refData:o}=c(t);customElements.define(t,class extends HTMLElement{constructor(){super()}connectedCallback(){this.style.display="block",this.tRefs=structuredClone(o),this.append(e.cloneNode(!0)),function(t){const e=[];for(const n of t.tRefs){const[o,s]=n,c=t.querySelector("#"+o);for(const[e,n,o]of s){i(c,e,t.getAttribute(n))}e.push([c,s,o])}for(const[o,s,c]of e){const e=n();o.setAttribute("id",e),t.tRefs.set(e,s),t.tRefs.delete(c)}}(this)}})}function i(t,e,n){e===o?t.innerText=n:"class"===e?(t.classList.remove(...t.classList),t.classList.add(n)):t.setAttribute(e,n)}function l(t){let e=t.getAttribute("id");return e||(e=n(),t.setAttribute("id",e)),e}function u(t,e){e(t),t.firstElementChild&&u(t.firstElementChild,e),t.nextElementSibling&&u(t.nextElementSibling,e)}document.addEventListener("DOMContentLoaded",(function(){for(const t of[...document.getElementsByTagName("template")])r(t.id)}));
