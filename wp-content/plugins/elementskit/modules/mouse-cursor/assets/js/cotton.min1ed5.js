/*!
 * Name    : Cotton.JS is a JavaScript library that allows you to make a mouse interaction animation easily.
 * Version : 1.3.3
 * Author  : CottonJS <https://github.com/cotton123236>
 * GitHub  : https://github.com/cotton123236/CottonJS
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Cotton=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function o(e){console.error("[Cotton warn]: ".concat(e))}function r(e){var t=e.getBoundingClientRect(),n=document.body.getBoundingClientRect();return{width:t.width,height:t.height,centerX:t.left-n.left+t.width/2-s(e),centerY:t.top-n.top+t.height/2-i(e)}}function s(e){var t=getComputedStyle(e).transform,n=t.match(/^matrix3d\((.+)\)$/);return n?parseFloat(n[1].split(", ")[12]):(n=t.match(/^matrix\((.+)\)$/))?parseFloat(n[1].split(", ")[4]):0}function i(e){var t=getComputedStyle(e).transform,n=t.match(/^matrix3d\((.+)\)$/);return n?parseFloat(n[1].split(", ")[13]):(n=t.match(/^matrix\((.+)\)$/))?parseFloat(n[1].split(", ")[5]):0}function c(e){var t=e.element,n=e.params,a=n.data;a.x&&a.y?(a.dx=(a.mouseX-a.x)*n.speed,a.dy=(a.mouseY-a.y)*n.speed,Math.abs(a.dx)+Math.abs(a.dy)<.1?(a.x=a.mouseX,a.y=a.mouseY):(a.x+=a.dx,a.y+=a.dy)):(a.x=a.mouseX,a.y=a.mouseY),a.animationFrame=requestAnimationFrame((function(){c(e)})),n.centerMouse?t.style.transform="translate(calc(-50% + ".concat(a.x,"px), calc(-50% + ").concat(a.y,"px))"):t.style.transform="translate(".concat(a.x,"px, ").concat(a.y,"px)")}function l(e){var t=e.element,n=e.params,a=n.data,o=n.airMode;a.distanceX&&a.distanceY?(a.dx=(a.distanceX-a.x)*n.speed,a.dy=(a.distanceY-a.y)*n.speed,Math.abs(a.dx)+Math.abs(a.dy)<.1?(a.x=a.distanceX,a.y=a.distanceY):(a.x+=a.dx,a.y+=a.dy)):(a.x=a.distanceX,a.y=a.distanceY),a.animationFrame=requestAnimationFrame((function(){l(e)}));var r=o.reverse?-a.x:a.x,s=o.reverse?-a.y:a.y,i="number"==typeof a.transformX?a.transformX+"px":a.transformX,c="number"==typeof a.transformY?a.transformY+"px":a.transformY,m=a.transformX?"calc(".concat(i," + ").concat(d(r/o.resistance),"px)"):"".concat(d(r/o.resistance),"px"),u=a.transformY?"calc(".concat(c," + ").concat(d(s/o.resistance),"px)"):"".concat(d(s/o.resistance),"px");t.style.transform="translate(".concat(m,", ").concat(u,")")}var d=function(e){return Math.round(100*(e+Number.EPSILON))/100};function m(e,t){if(0!==e.models.length){var n=e.models;if(t)n.forEach((function(t){t.addEventListener("mouseenter",e.enterModelHandler),t.addEventListener("mouseleave",e.leaveModelHandler)}));else{n.forEach((function(t){t.removeEventListener("mouseenter",e.enterModelHandler),t.removeEventListener("mouseleave",e.leaveModelHandler)}));var a=document.querySelectorAll(e.params.models);a.forEach((function(t){t.addEventListener("mouseenter",e.enterModelHandler),t.addEventListener("mouseleave",e.leaveModelHandler)})),e.models=a}}}return function(){function a(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var r;if(this.element=t instanceof Element?t:document.querySelector(t),this.params=Object.assign({},{data:{mouseX:null,mouseY:null,distanceX:null,distanceY:null,x:null,y:null,dx:null,dy:null,animationFrame:void 0},scene:"body",conttonInitClass:"cotton-init",cottonMovingClass:"cotton-moving",cottonActiveClass:"cotton-active",models:".cotton-model",modelsActiveClass:"model-active",centerMouse:!0,speed:.125,airMode:!1,on:{enterModel:null,leaveModel:null,enterScene:null,leaveScene:null,cottonMove:null}},n),this.scene=this.params.scene instanceof Element?this.params.scene:document.querySelector(this.params.scene),this.models=NodeList.prototype.isPrototypeOf(this.params.models)?this.params.models:document.querySelectorAll(this.params.models),this.enterModelHandler=this.enterModelHandler.bind(this),this.leaveModelHandler=this.leaveModelHandler.bind(this),!this.element)return o("Cannot define a cotton element which is not exist");if(!this.scene)return o("Cannot define a scene which is not exist");if((this.params.speed>1||this.params.speed<=0)&&(this.params.speed=.125),this.params.airMode){var s=this.params.airMode,i={resistance:15,reverse:!1,alive:!1};"object"!==e(s)||Array.isArray(s)?this.params.airMode=i:this.params.airMode=Object.assign(i,s),(s.resistance<1||s.resistance>100)&&(s.resistance=15)}(r=navigator.userAgent).indexOf("Android")>-1||r.indexOf("Adr"),r.indexOf("Mac")>-1&&"ontouchend"in document||a.init(this)}var d,u,f;return d=a,f=[{key:"getMouseData",value:function(e){var t=e.element,a=e.scene,o=e.params,c=o.data,l=o.airMode;a.addEventListener("mousemove",(function(a){c.mouseX=l?a.pageX:a.clientX,c.mouseY=l?a.pageY:a.clientY,n(t.classList).indexOf(o.conttonInitClass)>-1&&t.classList.add(o.cottonMovingClass),o.on.cottonMove&&"function"==typeof o.on.cottonMove&&o.on.cottonMove.call(e,t,a)})),l&&(l.alive||(c.rect=r(t),c.transformX=s(t),c.transformY=i(t),window.addEventListener("resize",(function(){c.rect=r(t)}))),a.addEventListener("mousemove",(function(){l.alive&&(c.rect=r(t));var e=window.innerWidth+c.rect.width/2,n=window.innerHeight+c.rect.height/2,a=c.mouseX-c.rect.centerX,o=c.mouseY-c.rect.centerY;c.distanceX=Math.min(Math.max(parseInt(a),-e),e),c.distanceY=Math.min(Math.max(parseInt(o),-n),n)})))}},{key:"init",value:function(e){var t=e.element,n=e.params,o=e.scene;o.addEventListener("mouseenter",(function(a){n.on.enterScene&&"function"==typeof n.on.enterScene&&n.on.enterScene.call(e,t,o,a)})),o.addEventListener("mouseleave",(function(a){t.classList.remove(n.cottonMovingClass),n.on.leaveScene&&"function"==typeof n.on.leaveScene&&n.on.leaveScene.call(e,t,o,a)})),a.getMouseData(e,!0),e.move(),m(e,!0)}}],(u=[{key:"enterModelHandler",value:function(e){var t=this.element,n=this.params;n.on.enterModel&&"function"==typeof n.on.enterModel&&n.on.enterModel.call(this,t,e.target,e),t.classList.add(n.cottonActiveClass),e.target.classList.add(n.modelsActiveClass)}},{key:"leaveModelHandler",value:function(e){var t=this.element,n=this.params;n.on.leaveModel&&"function"==typeof n.on.leaveModel&&n.on.leaveModel.call(this,t,e.target,e),t.classList.remove(n.cottonActiveClass),e.target.classList.remove(n.modelsActiveClass)}},{key:"move",value:function(){var e=this.params.data,t=this.params.airMode;this.element.classList.add(this.params.conttonInitClass),e.animationFrame||(t?l(this):c(this))}},{key:"stop",value:function(){var e=this.params.data;this.element.classList.remove(this.params.conttonInitClass),this.element.classList.remove(this.params.cottonMovingClass),cancelAnimationFrame(e.animationFrame),e.animationFrame=void 0}},{key:"updateModels",value:function(){m(this,!1)}}])&&t(d.prototype,u),f&&t(d,f),a}()}));