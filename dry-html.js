const t=("dry-"+Math.random()).replace(".","");let e=1;const n=()=>t+e++,s="#inner#",o=/\{(?<content>t-\w[\-\w]+)\}/;function c(t){const e=document.getElementById(t),n=e.getAttribute("class"),c=e.content.cloneNode(!0),i=function(t){const e=t.querySelectorAll("*"),n=new Map;for(const t of e){const e=t.attributes;for(let s=0,c=e.length;s<c;s++){const{nodeName:c,nodeValue:i}=e.item(s),r=i.match(o);if(r){const e=l(t);n.get(e)||n.set(e,[]);const s="on"===c.substring(0,2)?{type:c.substring(2)}:null;n.get(e).push([c,r.groups.content,s])}}}return n}(c);var r;r=i,u(c,(function(t){if(0===t.childElementCount){const e=t.textContent.match(o);if(e){const n=l(t);r.get(n)||r.set(n,[]),r.get(n).push([s,e.groups.content])}}}));const f=new Set;for(const[,t]of i)for(const[e,n,s]of t)f.add(n);return{refClone:c,refData:i,attributes:[...f],tClass:n}}function i(t){if(!function(t){if(!t)return!1;const e=t.indexOf("-");return 0!==e&-1!==e}(t))return;const{refClone:e,refData:s,tClass:o}=c(t);customElements.define(t,class extends HTMLElement{constructor(){super()}connectedCallback(){this.connected||(this.connected=!0,this.style.display="block",this.hasAttribute("class")||this.setAttribute("class",o),this.tRefs=structuredClone(s),this.append(e.cloneNode(!0)),function(t){const e=[];for(const n of t.tRefs){const[s,o]=n,c=t.querySelector("#"+s);for(const[e,n,s]of o){r(c,e,t.getAttribute(n))}e.push([c,o,s])}for(const[s,o,c]of e){const e=n();s.setAttribute("id",e),t.tRefs.set(e,o),t.tRefs.delete(c)}}(this))}})}function r(t,e,n){e===s?t.innerText=n:"class"===e?(t.classList.remove(...t.classList),t.classList.add(n)):t.setAttribute(e,n)}function l(t){let e=t.getAttribute("id");return e||(e=n(),t.setAttribute("id",e)),e}function u(t,e){e(t),t.firstElementChild&&u(t.firstElementChild,e),t.nextElementSibling&&u(t.nextElementSibling,e)}document.addEventListener("DOMContentLoaded",(function(){for(const t of[...document.getElementsByTagName("template")])i(t.id)}));
