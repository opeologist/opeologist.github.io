_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"20a2":function(e,t,n){e.exports=n("nOHt")},BcwT:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=function(e){if(null==e)return!1;return u?e:Boolean(e.capture)}(t);return function(t,o){if(null==t||"function"!==typeof t.addEventListener)throw new Error("createEventHandle: called on an invalid target.");var u=t;if(null!=o){var a=function(e){return o(((t=e).nativeEvent=t,t.persist=r,t.isDefaultPrevented=l,t.isPropagationStopped=i,t));var t};return u.addEventListener(e,a,n),function(){null!=u&&u.removeEventListener(e,a,n)}}return r}};var o=n("xLLm"),r=function(){};var u=function(){var e=!1;if(o.canUseDOM)try{var t={};Object.defineProperty(t,"passive",{get:function(){return e=!0,!1}}),window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(n){}return e}();function i(){return this.cancelBubble}function l(){return this.defaultPrevented}e.exports=t.default},KwZf:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o="DELAY",r="ERROR",u="LONG_PRESS_DETECTED",i="NOT_RESPONDER",l="RESPONDER_ACTIVE_LONG_PRESS_START",a="RESPONDER_ACTIVE_PRESS_START",s="RESPONDER_INACTIVE_PRESS_START",c="RESPONDER_RELEASE",d="RESPONDER_TERMINATED",f=Object.freeze({NOT_RESPONDER:{DELAY:r,RESPONDER_GRANT:s,RESPONDER_RELEASE:r,RESPONDER_TERMINATED:r,LONG_PRESS_DETECTED:r},RESPONDER_INACTIVE_PRESS_START:{DELAY:a,RESPONDER_GRANT:r,RESPONDER_RELEASE:i,RESPONDER_TERMINATED:i,LONG_PRESS_DETECTED:r},RESPONDER_ACTIVE_PRESS_START:{DELAY:r,RESPONDER_GRANT:r,RESPONDER_RELEASE:i,RESPONDER_TERMINATED:i,LONG_PRESS_DETECTED:l},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:r,RESPONDER_GRANT:r,RESPONDER_RELEASE:i,RESPONDER_TERMINATED:i,LONG_PRESS_DETECTED:l},ERROR:{DELAY:i,RESPONDER_GRANT:s,RESPONDER_RELEASE:i,RESPONDER_TERMINATED:i,LONG_PRESS_DETECTED:i}}),v=function(e){return e===a||e===l},_=function(e){return"button"===e.getAttribute("role")},E=function(e){return e===s||e===a||e===l},h=function(){function e(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=i,this.configure(e)}var t=e.prototype;return t.configure=function(e){this._config=e},t.reset=function(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()},t.getEventHandlers=function(){return null==this._eventHandlers&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers},t._createEventHandlers=function(){var e=this,t=function(t,n){t.persist(),e._cancelPressOutDelayTimeout(),e._longPressDispatched=!1,e._responder=t.currentTarget,e._selectionTerminated=!1,e._touchState=i,e._isPointerTouch="touchstart"===t.nativeEvent.type,e._receiveSignal("RESPONDER_GRANT",t);var r=p(e._config.delayPressStart,0,50);!1!==n&&r>0?e._pressDelayTimeout=setTimeout((function(){e._receiveSignal(o,t)}),r):e._receiveSignal(o,t);var u=p(e._config.delayLongPress,10,450);e._longPressDelayTimeout=setTimeout((function(){e._handleLongPress(t)}),u+r)},n=function(t){e._receiveSignal(c,t)},r=function t(o){e._touchState!==i&&(n(o),document.removeEventListener("keyup",t))};return{onStartShouldSetResponder:function(t){var n=e._config.disabled;return n&&_(t.currentTarget)&&t.stopPropagation(),null==n||!n},onKeyDown:function(n){(function(e){var t=e.key,n=e.currentTarget.getAttribute("role"),o=" "===t||"Spacebar"===t;return!e.repeat&&("Enter"===t||o&&("button"===n||"menuitem"===n))})(n)&&(e._touchState===i&&(t(n,!1),document.addEventListener("keyup",r)),n.stopPropagation())},onResponderGrant:function(e){return t(e)},onResponderMove:function(t){null!=e._config.onPressMove&&e._config.onPressMove(t);var n=P(t);if(null!=e._touchActivatePosition){var o=e._touchActivatePosition.pageX-n.pageX,r=e._touchActivatePosition.pageY-n.pageY;Math.hypot(o,r)>10&&e._cancelLongPressDelayTimeout()}},onResponderRelease:function(e){return n(e)},onResponderTerminate:function(t){"selectionchange"===t.nativeEvent.type&&(e._selectionTerminated=!0),e._receiveSignal(d,t)},onResponderTerminationRequest:function(t){var n=e._config,o=n.cancelable,r=n.disabled,u=n.onLongPress;return!(!r&&null!=u&&e._isPointerTouch&&"contextmenu"===t.nativeEvent.type)&&(null==o||o)},onClick:function(t){var n=e._config,o=n.disabled,r=n.onPress;o?_(t.currentTarget)&&t.stopPropagation():(t.stopPropagation(),e._longPressDispatched||e._selectionTerminated?t.preventDefault():null!=r&&!1===t.ctrlKey&&!1===t.altKey&&r(t))},onContextMenu:function(t){var n=e._config,o=n.disabled,r=n.onLongPress;o?_(t.currentTarget)&&t.stopPropagation():null!=r&&e._isPointerTouch&&!t.defaultPrevented&&(t.preventDefault(),t.stopPropagation())}}},t._receiveSignal=function(e,t){var n=this._touchState,o=null;null!=f[n]&&(o=f[n][e]),null==this._responder&&e===c||(null==o||o===r?console.error("PressResponder: Invalid signal "+e+" for state "+n+" on responder"):n!==o&&(this._performTransitionSideEffects(n,o,e,t),this._touchState=o))},t._performTransitionSideEffects=function(e,t,n,o){if(function(e){return e===d||e===c}(n)&&(this._isPointerTouch=!1,this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),E(e)&&n===u){var r=this._config.onLongPress;null!=r&&null==o.nativeEvent.key&&(r(o),this._longPressDispatched=!0)}var i=v(e),a=v(t);if(!i&&a?this._activate(o):i&&!a&&this._deactivate(o),E(e)&&n===c){var s=this._config,f=s.onLongPress;if(null!=s.onPress)null!=f&&e===l||a||i||(this._activate(o),this._deactivate(o))}this._cancelPressDelayTimeout()},t._activate=function(e){var t=this._config,n=t.onPressChange,o=t.onPressStart,r=P(e);this._touchActivatePosition={pageX:r.pageX,pageY:r.pageY},null!=o&&o(e),null!=n&&n(!0)},t._deactivate=function(e){var t=this._config,n=t.onPressChange,o=t.onPressEnd;function r(){null!=o&&o(e),null!=n&&n(!1)}var u=p(this._config.delayPressEnd);u>0?this._pressOutDelayTimeout=setTimeout((function(){r()}),u):r()},t._handleLongPress=function(e){this._touchState!==a&&this._touchState!==l||this._receiveSignal(u,e)},t._cancelLongPressDelayTimeout=function(){null!=this._longPressDelayTimeout&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)},t._cancelPressDelayTimeout=function(){null!=this._pressDelayTimeout&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)},t._cancelPressOutDelayTimeout=function(){null!=this._pressOutDelayTimeout&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)},e}();function p(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=0),Math.max(t,null!==e&&void 0!==e?e:n)}function P(e){var t=e.nativeEvent,n=t.changedTouches,o=t.touches;return null!=o&&o.length>0?o[0]:null!=n&&n.length>0?n[0]:e.nativeEvent}t.default=h,e.exports=t.default},Kyzv:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=(0,u.default)((function(){return new Map})),i=(0,u.default)((function(){var r=(0,o.default)(e,t);return function(e,t){var o=n.get(e);null!=o&&o(),null==t&&n.delete(e);var u=r(e,t);return n.set(e,u),u}}));return(0,r.default)((function(){return function(){null!=i&&(n.forEach((function(e){e()})),n.clear()),i=null}}),[i]),i};var o=i(n("BcwT")),r=i(n("VlPN")),u=i(n("QxRB"));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var o=n("nKUr"),r=n("q1tI"),u=n("XY2T"),i=n.n(u),l=n("Epja"),a=n.n(l),s=n("20a2"),c=n("HR29"),d=n.n(c);var f=n("7DP9"),v=n("y9bU"),_=function(){for(var e=[],t=0;t<9;t++)e.push(Object(o.jsx)(f.a,{children:Object(o.jsx)(v.a,{spaceAtEnd:!0})},t));return e};function E(){var e=Object(r.useState)(null),t=e[0],u=e[1],i=Object(r.useState)(!1),l=i[0],s=i[1];Object(r.useEffect)((function(){u(Object(r.lazy)((function(){return n.e(4).then(n.bind(null,"mO9T"))}))),s(!0)}),[]);var c=function(){var e="#1e621e";return d.a.create({wrapper:{position:"absolute",bottom:"100%",left:0},container:{borderWidth:1,borderColor:e,paddingHorizontal:8,paddingVertical:4,borderBottomColor:"rgba(30, 98, 30, 0.5)"},type:{borderBottomColor:e,borderTopWidth:0}})}(),E=c.wrapper,h=c.container,p=c.type;return l&&Object(o.jsxs)(a.a,{style:E,children:[Object(o.jsx)(a.a,{style:h,children:Object(o.jsx)(r.Suspense,{fallback:Object(o.jsx)(_,{}),children:Object(o.jsx)(t,{})})}),Object(o.jsxs)(a.a,{style:[h,p],children:[Object(o.jsxs)(f.a,{children:[Object(o.jsx)(v.a,{color:"orange",children:"("}),Object(o.jsx)(v.a,{color:"lightGreen",children:"alias"}),Object(o.jsx)(v.a,{color:"orange",spaceAtEnd:!0,children:")"}),Object(o.jsx)(v.a,{color:"brown",spaceAtEnd:!0,children:"function"}),Object(o.jsx)(v.a,{color:"green",children:"Aaron"}),Object(o.jsx)(v.a,{color:"orange",spaceAtEnd:!0,children:"():"}),Object(o.jsx)(v.a,{color:"green",children:"Human.Being"})]}),Object(o.jsxs)(f.a,{children:[Object(o.jsx)(v.a,{color:"brown",italic:!0,spaceAtEnd:!0,children:"import"}),Object(o.jsx)(v.a,{color:"lightGreen",children:"Aaron"})]})]})]})}var h=n("Y9pm");function p(){var e=Object(r.useState)(!1),t=(e[0],e[1]),n=Object(s.useRouter)().push,u=d.a.create({header:{flexDirection:"row"},heading:{fontSize:24},underline:{textDecorationLine:"underline"}}),l=u.header,c=u.heading,f=u.underline;return Object(o.jsx)(h.a,{children:Object(o.jsxs)(a.a,{style:l,children:[Object(o.jsx)(v.a,{color:"orange",style:c,children:"<"}),Object(o.jsxs)(a.a,{children:[Object(o.jsx)(E,{}),Object(o.jsx)(i.a,{onPress:function(){n("/Aaron.js")},onHoverIn:function(){t(!0)},onHoverOut:function(){t(!1)},children:Object(o.jsx)(v.a,{color:"blue",style:[c,f],children:"Aaron"})})]}),Object(o.jsxs)(v.a,{color:"orange",style:c,children:["\xa0","/>"]})]})})}function P(){return Object(o.jsx)(p,{})}},XY2T:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=o?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=s(n("M0n0")),u=s(n("k60I")),i=s(n("pllh")),l=s(n("HR29")),a=s(n("Epja"));function s(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){var n=e.children,l=e.delayLongPress,s=e.delayPressIn,c=e.delayPressOut,f=e.disabled,E=e.focusable,h=e.onBlur,p=e.onFocus,P=e.onHoverIn,g=e.onHoverOut,y=e.onLongPress,R=e.onPress,T=e.onPressMove,O=e.onPressIn,S=e.onPressOut,b=e.style,m=e.testOnly_hovered,D=e.testOnly_pressed,j=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","delayLongPress","delayPressIn","delayPressOut","disabled","focusable","onBlur","onFocus","onHoverIn","onHoverOut","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","testOnly_hovered","testOnly_pressed"]),N=v(!0===m),A=N[0],w=N[1],L=v(!1),x=L[0],M=L[1],H=v(!0===D),I=H[0],C=H[1],k=(0,o.useRef)(null),G=(0,r.default)(t,k),Y=(0,o.useMemo)((function(){return{delayLongPress:l,delayPressStart:s,delayPressEnd:c,disabled:f,onLongPress:y,onPress:R,onPressChange:C,onPressStart:O,onPressMove:T,onPressEnd:S}}),[l,s,c,f,y,R,O,T,S,C]),B=(0,i.default)(k,Y);(0,u.default)(k,{contain:!0,disabled:f,onHoverChange:w,onHoverStart:P,onHoverEnd:g});var K={hovered:A,focused:x,pressed:I};function V(e,t){return function(n){n.nativeEvent.target===k.current&&(M(t),null!=e&&e(n))}}return o.createElement(a.default,d({},j,B,{accessibilityDisabled:f,focusable:!f&&!1!==E,onBlur:V(h,!1),onFocus:V(p,!0),ref:G,style:[!f&&_.root,"function"===typeof b?b(K):b]}),"function"===typeof n?n(K):n)}function v(e){var t=(0,o.useState)(!1);return[t[0]||e,t[1]]}var _=l.default.create({root:{cursor:"pointer",touchAction:"manipulation"}}),E=(0,o.memo)((0,o.forwardRef)(f));E.displayName="Pressable";var h=E;t.default=h,e.exports=t.default},dqvA:function(e,t,n){"use strict";t.__esModule=!0,t.getActiveModality=function(){return a},t.getModality=function(){return s},t.addModalityListener=function(e){return d.add(e),function(){d.delete(e)}},t.testOnly_resetActiveModality=function(){c=!1,a=f,s=f};var o,r=n("xLLm"),u=(o=n("BcwT"))&&o.__esModule?o:{default:o};var i,l,a="keyboard",s="keyboard",c=!1,d=new Set,f="keyboard",v="mouse",_="touch",E="contextmenu",h="mousedown",p="mousemove",P="mouseup",g="pointerdown",y="pointermove",R="scroll",T="selectionchange",O="touchcancel",S="touchmove",b="touchstart",m={passive:!0},D={capture:!0,passive:!0},j=(0,u.default)("blur",m),N=(0,u.default)("focus",m),A=(0,u.default)("visibilitychange",D),w=(0,u.default)("keydown",D),L=(0,u.default)(g,D),x=(0,u.default)(y,D),M=(0,u.default)(E,D),H=(0,u.default)(h,D),I=(0,u.default)(p,D),C=(0,u.default)(P,D),k=(0,u.default)(R,D),G=(0,u.default)(T,D),Y=(0,u.default)(O,D),B=(0,u.default)(S,D),K=(0,u.default)(b,D);function V(){null==i&&null==l||(null!=i&&(s=i,i=null),null!=l&&(a=l,l=null),q())}function X(e){var t=e.type;if("undefined"!==typeof window&&null!=window.PointerEvent){if(t===g)return void(a!==e.pointerType&&(s=e.pointerType,a=e.pointerType,q()));if(t===y)return void(s!==e.pointerType&&(s=e.pointerType,q()))}else{if(c||(t===h&&a!==v&&(s=v,a=v,q()),t===p&&s!==v&&(s=v,q())),t===b)return c=!0,e.touches&&e.touches.length>1&&(c=!1),void(a!==_&&(s=_,a=_,q()));t!==E&&t!==P&&t!==T&&t!==R&&t!==O&&t!==S||(c=!1)}}function q(){var e={activeModality:a,modality:s};d.forEach((function(t){t(e)}))}r.canUseDOM&&(j(window,(function(){i=s,l=a,a=f,s=f,q(),c=!1})),N(window,(function(){V()})),w(document,(function(e){e.metaKey||e.altKey||e.ctrlKey||s!==f&&(s=f,a=f,q())})),L(document,X),x(document,X),A(document,(function(){"hidden"!==document.visibilityState&&V()})),M(document,X),H(document,X),I(document,X),C(document,X),Y(document,X),B(document,X),K(document,X),G(document,X),k(document,X))},k60I:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=t.contain,o=t.disabled,i=t.onHoverStart,l=t.onHoverChange,v=t.onHoverUpdate,_=t.onHoverEnd,E=!("undefined"===typeof window||null==window.PointerEvent),h=(0,r.default)(E?"pointermove":"mousemove",a),p=(0,r.default)(E?"pointerenter":"mouseenter",a),P=(0,r.default)(E?"pointerleave":"mouseleave",a),g=(0,r.default)(s,a),y=(0,r.default)(c,a);(0,u.default)((function(){var t=e.current;if(null!==t){var r=function(e){null!=_&&_(e),null!=l&&l(!1),h(t,null),P(t,null)},u=function(t){var o=e.current;null!=o&&"touch"!==f(t)&&(n&&d(o,c),r(t))},a=function(e){"touch"!==f(e)&&null!=v&&(null==e.x&&(e.x=e.clientX),null==e.y&&(e.y=e.clientY),v(e))},E=function(e){null!=i&&i(e),null!=l&&l(!0),null!=v&&h(t,o?null:a),P(t,o?null:u)};p(t,o?null:function(t){var u=e.current;if(null!=u&&"touch"!==f(t)){n&&d(u,s),E(t);g(u,o?null:function(e){e.target!==u&&r(t)}),y(u,o?null:function(e){e.target!==u&&E(t)})}})}}),[p,h,P,g,y,n,o,i,l,v,_,e])};var o=n("dqvA"),r=i(n("Kyzv")),u=i(n("VlPN"));function i(e){return e&&e.__esModule?e:{default:e}}var l={},a={passive:!0},s="react-gui:hover:lock",c="react-gui:hover:unlock";function d(e,t,n){var o=document.createEvent("CustomEvent"),r=n||l,u=r.bubbles,i=void 0===u||u,a=r.cancelable,s=void 0===a||a,c=r.detail;o.initCustomEvent(t,i,s,c),e.dispatchEvent(o)}function f(e){var t=e.pointerType;return null!=t?t:(0,o.getModality)()}e.exports=t.default},pllh:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=(0,u.useRef)(null);null==n.current&&(n.current=new r.default(t));var o=n.current;return(0,u.useEffect)((function(){o.configure(t)}),[t,o]),(0,u.useEffect)((function(){return function(){o.reset()}}),[o]),(0,u.useDebugValue)(t),o.getEventHandlers()};var o,r=(o=n("KwZf"))&&o.__esModule?o:{default:o},u=n("q1tI");e.exports=t.default},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);