(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1402:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));var r=n(1),o=n.n(r),a=n(0);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({selection:{anchorNode:null,anchorOffset:0,focusNode:null,focusOffset:0,isForward:!0}},e)}const l=Object(a.createContext)(i());function s(){return Object(a.useContext)(l)}l.displayName="ComposerContext"},1413:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return m}));var r=n(45),o=n(16),a=n(354),c=n(379),i=n(271);function l(e,t,n,r){var o;t===n.timelineRenderingType&&(null===(o=e.current)||void 0===o||o.focus(),r.current&&clearTimeout(r.current),r.current=window.setTimeout((()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.focus()}),200))}function s(e){const t=document.createRange();t.selectNodeContents(e),t.collapse(!1);const n=document.getSelection();n.removeAllRanges(),n.addRange(t),e.focus()}function u(e,t){if(!((null==e?void 0:e.current)&&!e.current.state.hide))return!1;let n=!1;const a=Object(r.a)().getAutocompleteAction(t),c=e.current;if(c&&c.countCompletions()>0)switch(a){case o.h.ForceCompleteAutocomplete:case o.h.CompleteAutocomplete:e.current.onConfirmCompletion(),n=!0;break;case o.h.PrevSelectionInAutocomplete:e.current.moveSelection(-1),n=!0;break;case o.h.NextSelectionInAutocomplete:e.current.moveSelection(1),n=!0;break;case o.h.CancelAutocomplete:e.current.onEscape(t),n=!0}return n&&(t.preventDefault(),t.stopPropagation()),n}function d(e,t,n,r,o){const{room:i,timelineRenderingType:l,replyToEvent:s}=n;function u(e){e instanceof Error?console.log(e.message):"string"==typeof e&&console.log(e)}if("paste"!==e.type||null===t||void 0===i)return!1;if(t.files.length&&!t.types.includes("text/rtf"))return c.a.sharedInstance().sendContentListToRoom(Array.from(t.files),i.roomId,o,r,l).catch(u),!0;if(t.types.includes("text/html")){var d;const e=t.getData("text/html"),n=(new DOMParser).parseFromString(e,"text/html");if(1!==n.getElementsByTagName("img").length||null===(d=n.querySelector("img"))||void 0===d||!d.src.startsWith("blob:")||1!==n.childNodes.length)return u("Failed to handle pasted content as Safari inserted content"),!1;const l=n.querySelector("img").src;return fetch(l).then((e=>{e.blob().then((t=>{const n=t.type,l=Object(a.a)(n),d=n.split("/")[1],m=e.url.split("/"),f=m[m.length-1],p=new File([t],f+"."+d,{type:l});c.a.sharedInstance().sendContentToRoom(p,i.roomId,o,r,s).catch(u)})).catch(u)})).catch(u),!0}return!1}function m(e){const t=e instanceof InputEvent&&"insertFromPaste"===e.inputType&&Object(i.a)(e.dataTransfer);return e instanceof ClipboardEvent||t}},1414:function(e,t,n){"use strict";function r(e){if(e.anchorNode&&e.focusNode){var t,n;const r=new Range;e.isForward?(r.setStart(e.anchorNode,e.anchorOffset),r.setEnd(e.focusNode,e.focusOffset)):(r.setStart(e.focusNode,e.focusOffset),r.setEnd(e.anchorNode,e.anchorOffset)),null===(t=document.getSelection())||void 0===t||t.removeAllRanges(),null===(n=document.getSelection())||void 0===n||n.addRange(r)}return new Promise((e=>setTimeout(e,0)))}function o(){const e=document.getSelection();return Boolean(null==e?void 0:e.isCollapsed)}function a(e){const t=document.getSelection();if(!t)return!1;if(t.anchorNode===e&&t.anchorOffset<=1)return!0;let n=e.firstChild;do{var r;if(n===t.anchorNode)return 0===t.anchorOffset}while(n=(null===(r=n)||void 0===r?void 0:r.firstChild)||null);return!1}function c(e){var t;const n=document.getSelection();if(!n)return!1;if(n.focusNode===e&&n.focusOffset===(null===(t=e.childNodes)||void 0===t?void 0:t.length))return!0;let r=e.childNodes.item(e.childNodes.length-2);do{var o;if(r===n.focusNode)return n.focusOffset===(null===(o=r.textContent)||void 0===o?void 0:o.length)}while(r=r.lastChild);return!1}n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}))},1415:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(13),o=n(8),a=n(14);function c(e){o.a.dispatch({action:a.a.EditEvent,event:null,timelineRenderingType:e.timelineRenderingType}),o.a.dispatch({action:a.a.FocusSendMessageComposer,context:e.timelineRenderingType})}function i(e,t){const n=t.getEvent().replacingEvent();!n||n.status!==r.EventStatus.QUEUED&&n.status!==r.EventStatus.NOT_SENT||e.cancelPendingEvent(n)}},1438:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),a=n(16),c=n(22),i=n(2);const l=e=>{let{name:t,last:n}=e;const r=a.g[t],c=a.a[t];return o.a.createElement(o.a.Fragment,null,o.a.createElement("kbd",null," ",r||c&&Object(i.b)(c)||t," "),!n&&"+")},s=e=>{let{value:t,className:n="mx_KeyboardShortcut"}=e;if(!t)return null;const r=[];return t.ctrlOrCmdKey?r.push(o.a.createElement(l,{key:"ctrlOrCmdKey",name:c.a?c.b.META:c.b.CONTROL})):t.ctrlKey?r.push(o.a.createElement(l,{key:"ctrlKey",name:c.b.CONTROL})):t.metaKey&&r.push(o.a.createElement(l,{key:"metaKey",name:c.b.META})),t.altKey&&r.push(o.a.createElement(l,{key:"altKey",name:c.b.ALT})),t.shiftKey&&r.push(o.a.createElement(l,{key:"shiftKey",name:c.b.SHIFT})),o.a.createElement("div",{className:n},r,o.a.createElement(l,{name:t.key,last:!0}))}},1479:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n(1413);function a(e,t){Object(r.useEffect)((()=>{t.current&&!e&&Object(o.e)(t.current)}),[t,e])}},1480:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(){const[e,t]=Object(r.useState)(!1),n=Object(r.useRef)();Object(r.useEffect)((()=>()=>clearTimeout(n.current)),[n]);return{isFocused:e,onFocus:Object(r.useCallback)((e=>{clearTimeout(n.current),"focus"===e.type?t(!0):n.current=window.setTimeout((()=>t(!1)),100)}),[t,n])}}},1537:function(e,t,n){"use strict";n.d(t,"a",(function(){return Pe}));var r,o=n(0),a=n.n(o),c=n(1437),i=n(12),l=n.n(i),s=n(1546);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e){return o.createElement("svg",u({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),r||(r=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 3a1 1 0 011-1h3.192C10.093 2 11.5 3.644 11.5 5.5c0 .753-.232 1.472-.634 2.06A3.471 3.471 0 0112.5 10.5c0 1.96-1.626 3.5-3.571 3.5H5a1 1 0 01-1-1V3zm2 1v3h2.192C8.841 7 9.5 6.405 9.5 5.5S8.84 4 8.192 4H6zm0 5v3h2.929c.894 0 1.571-.698 1.571-1.5S9.823 9 8.929 9H6z",fill:"currentColor"})))}var m;function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e){return o.createElement("svg",f({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),m||(m=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.086 3.6l-1.805 8.804H4.8a.8.8 0 000 1.6H9.067a.8.8 0 100-1.6H7.914L9.719 3.6H11.2a.8.8 0 000-1.6H9.082a.8.8 0 00-.032 0H6.933a.8.8 0 100 1.6h1.153z",fill:"currentColor"})))}var v;function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function h(e){return o.createElement("svg",b({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),v||(v=o.createElement("path",{d:"M8.193 11.3c2.02-.26 3.474-2.073 3.474-4.107v-4.36a.834.834 0 00-1.667 0v4.434c0 1.113-.753 2.126-1.847 2.346a2.33 2.33 0 01-2.82-2.28v-4.5a.834.834 0 00-1.666 0v4.5c0 2.38 2.086 4.28 4.526 3.967zM3 13.333c0 .367.3.667.667.667h8c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666h-8c-.367 0-.667.3-.667.666z",fill:"currentColor"})))}var g;function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function y(e){return o.createElement("svg",O({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),g||(g=o.createElement("path",{d:"M9.932 4.77C9.49 3.88 8.584 3.474 7.582 3.58c-1.549.167-1.956 1.367-1.767 2.147.206.853.883 1.185 2.078 1.49h5.387c.398 0 .72.35.72.782 0 .432-.322.782-.72.782H2.72C2.322 8.782 2 8.432 2 8c0-.432.322-.783.72-.783h2.183a3.184 3.184 0 01-.48-1.091c-.42-1.738.613-3.843 3.017-4.102 1.416-.153 2.97.416 3.758 2.001.19.38.06.855-.29 1.06-.35.206-.787.065-.976-.315zM10.285 10.087h1.495c.145.784.034 1.62-.413 2.334C10.742 13.417 9.58 14 7.99 14c-2.606 0-3.804-1.61-4.048-2.676-.097-.42.138-.844.524-.949.385-.105.776.15.873.57.074.323.662 1.49 2.65 1.49 1.282 0 1.914-.459 2.187-.895.252-.402.296-.934.109-1.453z",fill:"currentColor"})))}var E;function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function w(e){return o.createElement("svg",j({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),E||(E=o.createElement("path",{d:"M3.146 2.893a.787.787 0 00-.686-.885.804.804 0 00-.913.664l-.539 3.652a.787.787 0 00.686.886.804.804 0 00.913-.665l.539-3.652zM11.223 9.676a.787.787 0 00-.686-.886.804.804 0 00-.914.665l-.538 3.652a.787.787 0 00.685.885.804.804 0 00.914-.664l.539-3.652zM6.212 2.006a.788.788 0 01.705.87l-.014.117a119.94 119.94 0 01-.177 1.337c-.108.782-.246 1.72-.357 2.258a.807.807 0 01-.95.614.784.784 0 01-.634-.92c.1-.481.23-1.369.34-2.159a127.104 127.104 0 00.174-1.32l.015-.114a.803.803 0 01.898-.683zM14.992 9.676a.787.787 0 00-.686-.886.804.804 0 00-.913.665l-.539 3.652a.787.787 0 00.686.885.804.804 0 00.913-.664l.539-3.652z",fill:"currentColor"})))}var C;function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function k(e){return o.createElement("svg",_({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),C||(C=o.createElement("path",{d:"M9.972 3.749a.667.667 0 10-1.277-.383l-2.667 8.889a.667.667 0 101.277.383l2.667-8.889zM3.982 4.823a.667.667 0 00-.939.086L.821 7.575a.667.667 0 000 .854l2.222 2.666a.667.667 0 101.025-.853L2.2 8.002l1.867-2.24a.667.667 0 00-.086-.939zM12.018 4.823a.667.667 0 01.939.086l2.222 2.666a.666.666 0 010 .854l-2.222 2.666a.667.667 0 11-1.025-.853l1.867-2.24-1.867-2.24a.667.667 0 01.086-.939z",fill:"currentColor"})))}var x,S,N=n(819);function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function M(e){return o.createElement("svg",P({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),x||(x=o.createElement("g",{clipPath:"url(#bulleted_list_svg__clip0_2793_14169)"},o.createElement("path",{d:"M2.667 7c-.554 0-1 .447-1 1 0 .553.446 1 1 1 .553 0 1-.447 1-1 0-.553-.447-1-1-1zm0-4c-.554 0-1 .447-1 1 0 .553.446 1 1 1 .553 0 1-.447 1-1 0-.553-.447-1-1-1zm0 8c-.554 0-1 .453-1 1 0 .547.453 1 1 1 .546 0 1-.453 1-1 0-.547-.447-1-1-1zm2.666 1.667h8c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-8c-.366 0-.666.3-.666.667 0 .367.3.667.666.667zm0-4h8c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-8c-.366 0-.666.3-.666.667 0 .367.3.667.666.667zM4.667 4c0 .367.3.667.666.667h8c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-8c-.366 0-.666.3-.666.667z",fill:"currentColor"}))),S||(S=o.createElement("defs",null,o.createElement("clipPath",{id:"bulleted_list_svg__clip0_2793_14169"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}var z,B;function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(this,arguments)}function T(e){return o.createElement("svg",F({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),z||(z=o.createElement("g",{clipPath:"url(#numbered_list_svg__clip0_2793_4634)"},o.createElement("path",{d:"M5.333 4.664h8c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666h-8c-.366 0-.666.3-.666.666 0 .367.3.667.666.667zm8 6.667h-8c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h8c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666zm0-4h-8c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h8c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666zM3 10.664H1.667a.33.33 0 00-.334.333.33.33 0 00.334.334h1v.333h-.334a.33.33 0 00-.333.333.33.33 0 00.333.334h.334v.333h-1a.33.33 0 00-.334.333.33.33 0 00.334.334H3a.33.33 0 00.333-.334v-2A.33.33 0 003 10.664zM1.667 3.331H2v1.666a.33.33 0 00.333.334.33.33 0 00.334-.334v-2a.33.33 0 00-.334-.333h-.666a.33.33 0 00-.334.333.33.33 0 00.334.334zM3 6.664H1.667a.33.33 0 00-.334.333.33.33 0 00.334.334h.866l-1.12 1.306a.327.327 0 00-.08.214v.146a.33.33 0 00.334.334H3a.33.33 0 00.333-.334A.33.33 0 003 8.664h-.867l1.12-1.307c.054-.06.08-.14.08-.213v-.147A.33.33 0 003 6.664z",fill:"currentColor"}))),B||(B=o.createElement("defs",null,o.createElement("clipPath",{id:"numbered_list_svg__clip0_2793_4634"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}var I;function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function H(e){return o.createElement("svg",R({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),I||(I=o.createElement("path",{d:"M5.143 7.998l1.333-1.334a.57.57 0 00.172-.419.57.57 0 00-.172-.419.57.57 0 00-.419-.171.57.57 0 00-.419.171L3.867 7.598a.58.58 0 00-.134.19.56.56 0 00-.038.21.56.56 0 00.038.21.58.58 0 00.134.19l1.79 1.79a.57.57 0 00.42.172.57.57 0 00.418-.172.57.57 0 00.172-.419.57.57 0 00-.172-.419L5.143 7.998zm5.714 0L9.505 9.35a.57.57 0 00-.172.42.57.57 0 00.172.418.57.57 0 00.419.172.57.57 0 00.419-.172l1.79-1.79a.58.58 0 00.134-.19.56.56 0 00.038-.21.56.56 0 00-.038-.21.58.58 0 00-.134-.19l-1.79-1.79a.402.402 0 00-.19-.134.72.72 0 00-.23-.038.552.552 0 00-.42.171.57.57 0 00-.17.42.57.57 0 00.172.418l1.352 1.353zm-8.571 6.857c-.305 0-.572-.114-.8-.343a1.097 1.097 0 01-.343-.8V2.283c0-.304.114-.57.343-.8.228-.228.495-.342.8-.342h11.428c.305 0 .572.114.8.342.229.229.343.496.343.8v11.43c0 .304-.114.57-.343.8a1.097 1.097 0 01-.8.342H2.286zm0-1.143h11.428V2.283H2.286v11.43z",fill:"currentColor"})))}var A,L;function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function K(e){return o.createElement("svg",D({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),A||(A=o.createElement("g",{clipPath:"url(#indent_increase_svg__clip0_2793_4893)"},o.createElement("path",{d:"M2.667 14h10.666c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666H2.667c-.367 0-.667.3-.667.666 0 .367.3.667.667.667zM2 6.14v3.727c0 .3.36.446.567.233l1.86-1.86a.33.33 0 000-.473L2.567 5.9A.333.333 0 002 6.14zm6 5.193h5.333c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667H8c-.367 0-.667.3-.667.667 0 .366.3.666.667.666zM2 2.667c0 .366.3.666.667.666h10.666c.367 0 .667-.3.667-.666C14 2.3 13.7 2 13.333 2H2.667C2.3 2 2 2.3 2 2.667zM8 6h5.333C13.7 6 14 5.7 14 5.333c0-.366-.3-.666-.667-.666H8c-.367 0-.667.3-.667.666 0 .367.3.667.667.667zm0 2.667h5.333c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667H8c-.367 0-.667.3-.667.667 0 .367.3.667.667.667z",fill:"currentColor"}))),L||(L=o.createElement("defs",null,o.createElement("clipPath",{id:"indent_increase_svg__clip0_2793_4893"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}var W,$;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function V(e){return o.createElement("svg",q({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0},e),W||(W=o.createElement("g",{clipPath:"url(#indent_decrease_svg__clip0_2793_14104)"},o.createElement("path",{d:"M8 11.333h5.333c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667H8c-.367 0-.667.3-.667.667 0 .366.3.666.667.666zm-5.767-3.1l1.86 1.86a.334.334 0 00.574-.233V6.14a.33.33 0 00-.567-.233l-1.86 1.86a.328.328 0 00-.007.466zM2.667 14h10.666c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666H2.667c-.367 0-.667.3-.667.666 0 .367.3.667.667.667zM2 2.667c0 .366.3.666.667.666h10.666c.367 0 .667-.3.667-.666C14 2.3 13.7 2 13.333 2H2.667C2.3 2 2 2.3 2 2.667zM8 6h5.333C13.7 6 14 5.7 14 5.333c0-.366-.3-.666-.667-.666H8c-.367 0-.667.3-.667.666 0 .367.3.667.667.667zm0 2.667h5.333c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667H8c-.367 0-.667.3-.667.667 0 .367.3.667.667.667z",fill:"currentColor"}))),$||($=o.createElement("defs",null,o.createElement("clipPath",{id:"indent_decrease_svg__clip0_2793_14104"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}var U=n(60),J=n(106),Q=n(1438),G=n(2),X=n(1),Y=n.n(X),Z=n(11),ee=n(50),te=n(1414),ne=n(38),re=n(62);function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){Y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e){return e.length<1}const ie=e=>{let{composer:t,isTextEnabled:n,onFinished:r,composerContext:c,isEditing:i}=e;const[l,s]=Object(o.useState)(!1),[u,d]=Object(o.useState)({text:"",link:i?t.getLink():""}),m=!i&&n,f=!l||m&&ce(u.text)||ce(u.link);return a.a.createElement(ne.a,{className:"mx_LinkModal",title:i?Object(G.b)("Edit link"):Object(G.b)("Create a link"),hasCancel:!0,onFinished:r},a.a.createElement("form",{className:"mx_LinkModal_content",onSubmit:async e=>{e.preventDefault(),e.stopPropagation(),r(),await new Promise((e=>setTimeout(e,0))),await Object(te.d)(c.selection),t.link(u.link,n?u.text:void 0)}},m&&a.a.createElement(ee.a,{required:!0,autoFocus:!0,label:Object(G.b)("Text"),value:u.text,className:"mx_LinkModal_Field",placeholder:"",onChange:e=>d((t=>ae(ae({},t),{},{text:e.target.value})))}),a.a.createElement(ee.a,{required:!0,autoFocus:!m,label:Object(G.b)("Link"),value:u.link,className:"mx_LinkModal_Field",placeholder:"",onChange:e=>{d((t=>ae(ae({},t),{},{link:e.target.value}))),s(!0)}}),a.a.createElement("div",{className:"mx_LinkModal_buttons"},i&&a.a.createElement("button",{type:"button",className:"danger",onClick:()=>{t.removeLinks(),r()}},Object(G.b)("Remove")),a.a.createElement(re.a,{primaryButton:Object(G.b)("Save"),primaryDisabled:f,primaryIsSubmit:!0,onCancel:r}))))};var le=n(1402);function se(e){let{label:t,keyCombo:n}=e;return a.a.createElement("div",{className:"mx_FormattingButtons_Tooltip"},t,n&&a.a.createElement(Q.a,{value:n,className:"mx_FormattingButtons_Tooltip_KeyboardShortcut"}))}function ue(e){let{label:t,keyCombo:n,onClick:r,actionState:o,icon:c}=e;return a.a.createElement(U.a,{element:"button",onClick:r,title:t,className:l()("mx_FormattingButtons_Button",{mx_FormattingButtons_active:"reversed"===o,mx_FormattingButtons_Button_hover:"enabled"===o,mx_FormattingButtons_disabled:"disabled"===o}),tooltip:n&&a.a.createElement(se,{label:t,keyCombo:n}),forceHide:"disabled"===o,alignment:J.a.Top},c)}function de(e){let{composer:t,actionStates:n}=e;const r=Object(le.c)(),o="reversed"===n.unorderedList||"reversed"===n.orderedList;return a.a.createElement("div",{className:"mx_FormattingButtons"},a.a.createElement(ue,{actionState:n.bold,label:Object(G.d)("Bold"),keyCombo:{ctrlOrCmdKey:!0,key:"b"},onClick:()=>t.bold(),icon:a.a.createElement(d,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(ue,{actionState:n.italic,label:Object(G.d)("Italic"),keyCombo:{ctrlOrCmdKey:!0,key:"i"},onClick:()=>t.italic(),icon:a.a.createElement(p,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(ue,{actionState:n.underline,label:Object(G.d)("Underline"),keyCombo:{ctrlOrCmdKey:!0,key:"u"},onClick:()=>t.underline(),icon:a.a.createElement(h,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(ue,{actionState:n.strikeThrough,label:Object(G.d)("Strikethrough"),onClick:()=>t.strikeThrough(),icon:a.a.createElement(y,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(ue,{actionState:n.unorderedList,label:Object(G.d)("Bulleted list"),onClick:()=>t.unorderedList(),icon:a.a.createElement(M,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(ue,{actionState:n.orderedList,label:Object(G.d)("Numbered list"),onClick:()=>t.orderedList(),icon:a.a.createElement(T,{className:"mx_FormattingButtons_Icon"})}),o&&a.a.createElement(ue,{actionState:n.indent,label:Object(G.d)("Indent increase"),onClick:()=>t.indent(),icon:a.a.createElement(K,{className:"mx_FormattingButtons_Icon"})}),o&&a.a.createElement(ue,{actionState:n.unindent,label:Object(G.d)("Indent decrease"),onClick:()=>t.unindent(),icon:a.a.createElement(V,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(ue,{actionState:n.quote,label:Object(G.d)("Quote"),onClick:()=>t.quote(),icon:a.a.createElement(w,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(ue,{actionState:n.inlineCode,label:Object(G.d)("Code"),keyCombo:{ctrlOrCmdKey:!0,key:"e"},onClick:()=>t.inlineCode(),icon:a.a.createElement(k,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(ue,{actionState:n.codeBlock,label:Object(G.d)("Code block"),onClick:()=>t.codeBlock(),icon:a.a.createElement(H,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(ue,{actionState:n.link,label:Object(G.d)("Link"),onClick:()=>function(e,t,n){Z.b.createDialog(ie,{composerContext:t,composer:e,isTextEnabled:Object(te.c)(),isEditing:n},"mx_CompoundDialog",!1,!0)}(t,r,"reversed"===n.link),icon:a.a.createElement(N.a,{className:"mx_FormattingButtons_Icon"})}))}var me=n(1541),fe=n(180),pe=n(45),ve=n(16),be=n(95),he=n(8),ge=n(14),Oe=n(31),ye=n(26),Ee=n(33);var je=n(1415),we=n(1413);function Ce(e,t,n,r){const a=Object(Oe.c)(),c=Object(le.c)(),i=Object(ye.b)(),l=Object(fe.b)("MessageComposerInput.ctrlEnterToSend");return Object(o.useCallback)(((o,s,u)=>{const d=()=>{var n,r;null===(n=o.stopPropagation)||void 0===n||n.call(o),null===(r=o.preventDefault)||void 0===r||r.call(o),null!=t&&t.current&&!t.current.state.hide||e()};if(Object(we.d)(o)){const e=o instanceof ClipboardEvent?o.clipboardData:o.dataTransfer;return Object(we.b)(o,e,a,i,r)?null:o}return o instanceof KeyboardEvent?function(e,t,n,r,o,a,c,i,l){const{editorStateTransfer:s}=c,u=Boolean(s)?n!==r.content():0!==r.content().length,d=Object(pe.a)().getMessageComposerAction(e),m=Object(we.c)(l,e);if(m)return e;if(void 0===i)return null;switch(d){case ve.h.SendMessage:return t(),null;case ve.h.EditPrevMessage:if(!Object(te.b)(o)||u)break;if(_e(e,!1,s,c,a,i))return null;break;case ve.h.EditNextMessage:if(!s||!Object(te.a)(o)||u)break;return _e(e,!0,s,c,a,i)||(Object(je.b)(a),e.preventDefault(),e.stopPropagation()),null}return e}(o,d,n,s,u,a,c,i,t):function(e,t,n){switch(e.inputType){case"insertParagraph":if(!n)return t(),null;break;case"sendMessage":if(n)return t(),null}return e}(o,d,l)}),[l,e,n,a,c,i,t,r])}function _e(e,t,n,r,o,a){const c=n?function(e,t,n){var r;const o=null===(r=t.liveTimeline)||void 0===r?void 0:r.getEvents();if(!o)return;const a=e.getEvent().getRoomId();if(!a)return;const c=n.getRoom(a);if(!c)return;const i=c.getPendingEvents(),l=Boolean(e.getEvent().getThread());return o.concat(l?[]:i)}(n,o,a):function(e,t){var n,r,o;const a=(null===(n=e.eventRelation)||void 0===n?void 0:n.key)===Ee.d.name;return null===(r=t.liveTimeline)||void 0===r?void 0:r.getEvents().concat(a?[]:(null===(o=t.room)||void 0===o?void 0:o.getPendingEvents())||[])}(r,o);if(!c)return!1;const i=Object(be.g)({events:c,isForward:t,fromEventId:null==n?void 0:n.getEvent().getId(),matrixClient:a});return!!i&&(he.a.dispatch({action:ge.a.EditEvent,event:i,timelineRenderingType:o.timelineRenderingType}),e.stopPropagation(),e.preventDefault(),!0)}var ke=n(1479),xe=n(1480),Se=n(47),Ne=n(271);const Pe=Object(o.memo)((function(e){let{disabled:t=!1,onChange:n,onSend:r,placeholder:i,initialContent:u,className:d,leftComponent:m,rightComponent:f,children:p,eventRelation:v}=e;const{room:b}=Object(Oe.c)(),h=Object(o.useRef)(null),g=Ce(r,h,u,v),{ref:O,isWysiwygReady:y,content:E,actionStates:j,wysiwyg:w,suggestion:C,messageContent:_}=Object(c.useWysiwyg)({initialContent:u,inputEventProcessor:g}),{isFocused:k,onFocus:x}=Object(xe.a)(),S=y&&!t,N=!E&&i||void 0;return Object(ke.a)(!S,O),Object(o.useEffect)((()=>{!t&&Object(Ne.a)(_)&&n(_)}),[n,_,t]),Object(o.useEffect)((()=>{var e;function t(e){if(e.preventDefault(),e.target&&e.target instanceof HTMLAnchorElement&&"user"===e.target.getAttribute("data-mention-type")){const t=Object(Se.h)(e.target.href);b&&null!=t&&t.userId&&he.a.dispatch({action:ge.a.ViewUser,member:b.getMember(t.userId)})}}const n=null===(e=O.current)||void 0===e?void 0:e.querySelectorAll("a[data-mention-type]");return n&&n.forEach((e=>e.addEventListener("click",t))),()=>{n&&n.forEach((e=>e.removeEventListener("click",t)))}}),[O,b,E]),a.a.createElement("div",{"data-testid":"WysiwygComposer",className:l()(d,{[`${d}-focused`]:k}),onFocus:x,onBlur:x},a.a.createElement(s.a,{ref:h,suggestion:C,handleMention:w.mention,handleAtRoomMention:w.mentionAtRoom,handleCommand:w.command}),a.a.createElement(de,{composer:w,actionStates:j}),a.a.createElement(me.a,{ref:O,disabled:!S,leftComponent:m,rightComponent:f,placeholder:N}),null==p?void 0:p(O,w))}))},1541:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(12),o=n.n(r),a=n(0),c=n.n(a);var i=n(1),l=n.n(i),s=n(475),u=n(1402);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){const t=document.getSelection();if(t){const n=t.getRangeAt(0),r=n.startContainer===t.anchorNode&&n.startOffset===t.anchorOffset;e.selection={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset,isForward:r}}}const p=Object(a.memo)(Object(a.forwardRef)((function(e,t){let{disabled:n,placeholder:r,leftComponent:i,rightComponent:l}=e;const d=function(e,t){const[n,r]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{if(e.current){const n=e.current,o=new ResizeObserver((e=>{requestAnimationFrame((()=>{var n,o;const a=null===(n=e[0])||void 0===n||null===(o=n.contentBoxSize)||void 0===o?void 0:o[0].blockSize;r(a>=t)}))}));return o.observe(n),()=>o.unobserve(n)}}),[e,t]),n}(t,24),{onFocus:p,onBlur:v,onInput:b}=function(){const e=Object(u.c)(),[t,n]=Object(s.a)();Object(a.useEffect)((()=>{function n(){f(e)}return t&&document.addEventListener("selectionchange",n),()=>document.removeEventListener("selectionchange",n)}),[t,e]);const r=Object(a.useCallback)((()=>{f(e)}),[e]);return m(m({},n),{},{onInput:r})}();return c.a.createElement("div",{"data-testid":"WysiwygComposerEditor",className:"mx_WysiwygComposer_Editor","data-is-expanded":d},i,c.a.createElement("div",{className:"mx_WysiwygComposer_Editor_container"},c.a.createElement("div",{className:o()("mx_WysiwygComposer_Editor_content",{mx_WysiwygComposer_Editor_content_placeholder:Boolean(r)}),style:{"--placeholder":`"${r}"`},ref:t,contentEditable:!n,role:"textbox","aria-multiline":"true","aria-autocomplete":"list","aria-haspopup":"listbox",dir:"auto","aria-disabled":n,onFocus:p,onBlur:v,onInput:b})),l)})))},1546:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),o=n.n(r),a=n(31),c=n(626),i=n(26),l=n(162);function s(e){return e&&e.keyChar?`${e.keyChar}${e.text}`:""}function u(e,t){var n;const r=e.completionId,o=e.completion;let a;return a=r?t.getRoom(r):o.startsWith("#")?t.getRooms().find((e=>e.getCanonicalAlias()===o||e.getAltAliases().includes(o))):t.getRoom(o),null!==(n=a)&&void 0!==n?n:null}function d(e,t,n){const r="​",o=new Map;if("user"===e.type){const t=n.getMember(e.completionId||"");if(!t)return o;const c=t.name||t.userId,i=l.d(t.userId),s=l.a(t,16,16,"crop");let u=r;var a;if(s===i)u=null!==(a=l.e(c))&&void 0!==a?a:r;o.set("data-mention-type",e.type),o.set("style",`--avatar-background: url(${s}); --avatar-letter: '${u}'`)}else if("room"===e.type){const n=u(e,t),a=e.completion;let s=r,d=l.b(null!=n?n:null,16,16,"crop");var c,i;if(!d)s=null!==(c=l.e((null==n?void 0:n.name)||a))&&void 0!==c?c:r,d=l.d(null!==(i=null==n?void 0:n.roomId)&&void 0!==i?i:a);o.set("data-mention-type",e.type),o.set("style",`--avatar-background: url(${d}); --avatar-letter: '${s}'`)}else if("at-room"===e.type){let t=r,a=l.b(n,16,16,"crop");var s;if(!a)t=null!==(s=l.e(n.name))&&void 0!==s?s:r,a=l.d(n.roomId);o.set("data-mention-type",e.type),o.set("style",`--avatar-background: url(${a}); --avatar-letter: '${t}'`)}return o}const m=Object(r.forwardRef)(((e,t)=>{let{suggestion:n,handleMention:r,handleCommand:l,handleAtRoomMention:m}=e;const{room:f}=Object(a.c)(),p=Object(i.b)();return f?o.a.createElement("div",{className:"mx_WysiwygComposer_AutoCompleteWrapper","data-testid":"autocomplete-wrapper"},o.a.createElement(c.a,{ref:t,query:s(n),onConfirm:function(e){if(void 0!==p&&void 0!==f)switch(e.type){case"command":return void l(e.completion.trim());case"at-room":return void m(d(e,p,f));case"room":case"user":return void("string"==typeof e.href&&r(e.href,function(e,t){return"user"===e.type||"at-room"===e.type?e.completion:"room"===e.type?(null===(n=u(e,t))||void 0===n?void 0:n.name)||e.completion:"";var n}(e,p),d(e,p,f)));default:return}},selection:{start:0,end:0},room:f})):null}));m.displayName="WysiwygAutocomplete"}}]);
//# sourceMappingURL=9.js.map