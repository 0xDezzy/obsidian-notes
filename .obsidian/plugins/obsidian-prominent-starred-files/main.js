(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>i}),Object.create,Object.create;const n=require("obsidian");function r(e,t){const n=Object.keys(t).map((n=>function(e,t,n){const r=e[t],i=e.hasOwnProperty(t);let l=n(r);return r&&Object.setPrototypeOf(l,r),Object.setPrototypeOf(o,l),e[t]=o,s;function o(...n){return l===r&&e[t]===o&&s(),l.apply(this,n)}function s(){e[t]===o&&(i?e[t]=r:delete e[t]),l!==r&&(l=r,Object.setPrototypeOf(o,r||Function))}}(e,n,t[n])));return 1===n.length?n[0]:function(){n.forEach((e=>e()))}}class i extends n.Plugin{constructor(){super(...arguments),this.files=new Set}get enabled(){return this.app.internalPlugins.getPluginById("starred").enabled}get starred(){return this.app.internalPlugins.getPluginById("starred")}get instance(){if(this.enabled)return this.starred.instance}get fileExplorers(){return this.app.workspace.getLeavesOfType("file-explorer")}onload(){return e=this,t=void 0,r=function*(){console.log("Prominent Starred Files plugin loaded"),this.app.workspace.onLayoutReady((()=>this.checkAndEnable()))},new((n=void 0)||(n=Promise))((function(i,l){function o(e){try{a(r.next(e))}catch(e){l(e)}}function s(e){try{a(r.throw(e))}catch(e){l(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}a((r=r.apply(e,t||[])).next())}));var e,t,n,r}checkAndEnable(){setTimeout((()=>{const e=this;if(this.app.internalPlugins.getPluginById("file-explorer").enabled)this.register(r(this.starred,{enable:function(t){return function(n){var r,i;const l=t.call(this,n);e.registerHandlers();for(let t of null!==(i=null===(r=e.instance)||void 0===r?void 0:r.items)&&void 0!==i?i:[])e.applyStar(t);return l}},disable:function(t){return function(n){var r,i;e.handler();for(let t of null!==(i=null===(r=e.instance)||void 0===r?void 0:r.items)&&void 0!==i?i:[])e.removeStar(t);return t.call(this,n)}}})),this.enabled?this.registerHandlers():new n.Notice("The Starred core plugin must be enabled to use this plugin.");else{new n.Notice("The File Explorer core plugin must be enabled to use this plugin.");const t=r(this.app.internalPlugins.getPluginById("file-explorer"),{enable:function(n){return function(r){const i=n.call(this,r);return t(),e.checkAndEnable(),i}},disable:function(n){return function(r){return t(),e.checkAndEnable(),n.call(this,r)}}});this.register(t)}}))}registerHandlers(){var e,t;const n=this;for(let n of null!==(t=null===(e=this.instance)||void 0===e?void 0:e.items)&&void 0!==t?t:[])this.applyStar(n);this.handler=r(this.starred.instance,{addItem:function(e){return function(t){return n.applyStar(t),e.call(this,t)}},removeItem:function(e){return function(t){return n.removeStar(t),e.call(this,t)}}}),this.register(this.handler)}applyStar(e,t){var r,i,l,o;if(this.fileExplorers.length&&!this.files.has(e.path))for(let s of this.fileExplorers){const a=null!==(o=null!=t?t:null===(l=null===(i=null===(r=s.view)||void 0===r?void 0:r.fileItems)||void 0===i?void 0:i[e.path])||void 0===l?void 0:l.titleEl)&&void 0!==o?o:s.containerEl.querySelector(`.nav-file-title[data-path="${e}"]`);a&&(this.files.add(e.path),(0,n.setIcon)(a.createDiv("prominent-star"),"star-glyph"))}}removeStar(e){if(this.fileExplorers.length)for(let t of this.fileExplorers){const n=t.containerEl.querySelector(`.nav-file-title[data-path="${e.path}"]`);if(!n)continue;this.files.delete(e.path);const r=n.querySelectorAll(".prominent-star");r.length&&r.forEach((e=>e.detach()))}}onunload(){var e,t;console.log("Prominent Starred Files plugin unloaded");for(let n of null!==(t=null===(e=this.instance)||void 0===e?void 0:e.items)&&void 0!==t?t:[])this.removeStar(n)}}var l=exports;for(var o in t)l[o]=t[o];t.__esModule&&Object.defineProperty(l,"__esModule",{value:!0})})();