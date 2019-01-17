/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e);
// Pass this if window is not defined yet
}("undefined"!=typeof window?window:this,function(T,e){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function m(e,t,n){var i,o=(t=t||re).createElement("script");if(o.text=e,n)for(i in we)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function g(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?he[fe.call(e)]||"object":typeof e;
// Support: Android <=2.3 only (functionish RegExp)
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
function a(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=g(e);return!ye(e)&&!be(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function u(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}
// Implement the identical functionality for filter and not
function t(e,n,i){return ye(n)?Ce.grep(e,function(e,t){return!!n.call(e,t,e)!==i}):
// Single element
n.nodeType?Ce.grep(e,function(e){return e===n!==i}):
// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof n?Ce.grep(e,function(e){return-1<de.call(n,e)!==i}):Ce.filter(n,e,i)}function n(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}
// Convert String-formatted options into Object-formatted ones
function c(e){var n={};return Ce.each(e.match(Le)||[],function(e,t){n[t]=!0}),n}
/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */function d(e){return e}function h(e){throw e}function l(e,t,n,i){var o;try{
// Check for promise aspect first to privilege synchronous behavior
e&&ye(o=e.promise)?o.call(e).done(t).fail(n):e&&ye(o=e.then)?o.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(i));
// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
// The ready event handler and self cleanup method
function i(){re.removeEventListener("DOMContentLoaded",i),T.removeEventListener("load",i),Ce.ready()}
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
// Used by camelCase as callback to replace()
function o(e,t){return t.toUpperCase()}
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function f(e){return e.replace(qe,"ms-").replace(Ie,o)}function s(){this.expando=Ce.expando+s.uid++}function r(e){return"true"===e||"false"!==e&&("null"===e?null:
// Only convert to a number if it doesn't change the string
e===+e+""?+e:Be.test(e)?JSON.parse(e):e)}function p(e,t,n){var i;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Ge,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=r(n)}catch(e){}
// Make sure we set the data so it isn't changed later
Fe.set(e,t,n)}else n=void 0;return n}function v(e,t,n,i){var o,s,r=20,a=i?function(){return i.cur()}:function(){return Ce.css(e,t,"")},l=a(),u=n&&n[3]||(Ce.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(Ce.cssNumber[t]||"px"!==u&&+l)&&Ye.exec(Ce.css(e,t));if(c&&c[3]!==u){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,
// Trust units reported by jQuery.css
u=u||c[3],
// Iteratively approximate from a nonzero starting point
c=+l||1;r--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
Ce.style(e,t,c+u),(1-s)*(1-(s=a()/l||.5))<=0&&(r=0),c/=s;c*=2,Ce.style(e,t,c+u),
// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+l||0,
// Apply relative offset (+=/-=) if specified
o=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=o)),o}function y(e){var t,n=e.ownerDocument,i=e.nodeName,o=Ke[i];return o||(t=n.body.appendChild(n.createElement(i)),o=Ce.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),Ke[i]=o)}function b(e,t){
// Determine new display value for elements that need to change
for(var n,i,o=[],s=0,r=e.length;s<r;s++)(i=e[s]).style&&(n=i.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(o[s]=Ne.get(i,"display")||null,o[s]||(i.style.display="")),""===i.style.display&&Xe(i)&&(o[s]=y(i))):"none"!==n&&(o[s]="none",
// Remember what we're overwriting
Ne.set(i,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(s=0;s<r;s++)null!=o[s]&&(e[s].style.display=o[s]);return e}function w(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&u(e,t)?Ce.merge([e],n):n}
// Mark scripts as having already been evaluated
function x(e,t){for(var n=0,i=e.length;n<i;n++)Ne.set(e[n],"globalEval",!t||Ne.get(t[n],"globalEval"))}function C(e,t,n,i,o){for(var s,r,a,l,u,c,d=t.createDocumentFragment(),h=[],f=0,p=e.length;f<p;f++)if((s=e[f])||0===s)
// Add nodes directly
if("object"===g(s))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ce.merge(h,s.nodeType?[s]:s);
// Convert non-html into a text node
else if(tt.test(s)){for(r=r||d.appendChild(t.createElement("div")),
// Deserialize a standard representation
a=(Ze.exec(s)||["",""])[1].toLowerCase(),l=et[a]||et._default,r.innerHTML=l[1]+Ce.htmlPrefilter(s)+l[2],
// Descend through wrappers to the right content
c=l[0];c--;)r=r.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ce.merge(h,r.childNodes),
// Ensure the created nodes are orphaned (#12392)
(
// Remember the top-level container
r=d.firstChild).textContent=""}else h.push(t.createTextNode(s));
// Convert html into DOM nodes
// Remove wrapper from fragment
for(d.textContent="",f=0;s=h[f++];)
// Skip elements already in the context collection (trac-4087)
if(i&&-1<Ce.inArray(s,i))o&&o.push(s);else
// Capture executables
if(u=Ce.contains(s.ownerDocument,s),
// Append to fragment
r=w(d.appendChild(s),"script"),
// Preserve script evaluation history
u&&x(r),n)for(c=0;s=r[c++];)Je.test(s.type||"")&&n.push(s);return d}function k(){return!0}function $(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function E(){try{return re.activeElement}catch(e){}}function S(e,t,n,i,o,s){var r,a;
// Types can be a map of types/handlers
if("object"==typeof t){for(a in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
i=i||n,n=void 0),t)S(e,a,n,i,t[a],s);return e}if(null==i&&null==o?(
// ( types, fn )
o=n,i=n=void 0):null==o&&("string"==typeof n?(
// ( types, selector, fn )
o=i,i=void 0):(
// ( types, data, fn )
o=i,i=n,n=void 0)),!1===o)o=$;else if(!o)return e;return 1===s&&(r=o,
// Use same guid so caller can remove using origFn
(o=function(e){
// Can use an empty set, since event contains the info
return Ce().off(e),r.apply(this,arguments)}).guid=r.guid||(r.guid=Ce.guid++)),e.each(function(){Ce.event.add(this,t,o,i,n)})}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
// Prefer a tbody over its parent table for containing new rows
function j(e,t){return u(e,"table")&&u(11!==t.nodeType?t:t.firstChild,"tr")&&Ce(e).children("tbody")[0]||e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function O(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function _(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function z(e,t){var n,i,o,s,r,a,l,u;if(1===t.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Ne.hasData(e)&&(s=Ne.access(e),r=Ne.set(t,s),u=s.events))for(o in delete r.handle,r.events={},u)for(n=0,i=u[o].length;n<i;n++)Ce.event.add(t,o,u[o][n]);
// 2. Copy user data
Fe.hasData(e)&&(a=Fe.access(e),l=Ce.extend({},a),Fe.set(t,l))}}
// Fix IE bugs, see support tests
function P(e,t){var n=t.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Qe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function M(n,i,o,s){
// Flatten any nested arrays
i=ue.apply([],i);var e,t,r,a,l,u,c=0,d=n.length,h=d-1,f=i[0],p=ye(f);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||1<d&&"string"==typeof f&&!ve.checkClone&&dt.test(f))return n.each(function(e){var t=n.eq(e);p&&(i[0]=f.call(this,e,t.html())),M(t,i,o,s)});if(d&&(t=(e=C(i,n[0].ownerDocument,!1,n,s)).firstChild,1===e.childNodes.length&&(e=t),t||s)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(a=(r=Ce.map(w(e,"script"),O)).length;c<d;c++)l=e,c!==h&&(l=Ce.clone(l,!0,!0),
// Keep references to cloned scripts for later restoration
a&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
Ce.merge(r,w(l,"script"))),o.call(n[c],l,c);if(a)
// Evaluate executable scripts on first document insertion
for(u=r[r.length-1].ownerDocument,
// Reenable scripts
Ce.map(r,_),c=0;c<a;c++)l=r[c],Je.test(l.type||"")&&!Ne.access(l,"globalEval")&&Ce.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
Ce._evalUrl&&Ce._evalUrl(l.src):m(l.textContent.replace(ht,""),u,l))}return n}function L(e,t,n){for(var i,o=t?Ce.filter(t,e):e,s=0;null!=(i=o[s]);s++)n||1!==i.nodeType||Ce.cleanData(w(i)),i.parentNode&&(n&&Ce.contains(i.ownerDocument,i)&&x(w(i,"script")),i.parentNode.removeChild(i));return e}function A(e,t,n){var i,o,s,r,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
a=e.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||pt(e))&&(""!==(r=n.getPropertyValue(t)||n[t])||Ce.contains(e.ownerDocument,e)||(r=Ce.style(e,t)),
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!ve.pixelBoxStyles()&&ft.test(r)&&mt.test(t)&&(
// Remember the original values
i=a.width,o=a.minWidth,s=a.maxWidth,
// Put in the new values to get a computed value out
a.minWidth=a.maxWidth=a.width=r,r=n.width,
// Revert the changed values
a.width=i,a.minWidth=o,a.maxWidth=s)),void 0!==r?
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
r+"":r}function D(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(!e())
// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments);
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get}}}
// Return a css property mapped to a potentially vendor prefixed property
function H(e){
// Shortcut for names that are not vendor prefixed
if(e in xt)return e;
// Check for vendor prefixed names
for(var t=e[0].toUpperCase()+e.slice(1),n=wt.length;n--;)if((e=wt[n]+t)in xt)return e}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function q(e){var t=Ce.cssProps[e];return t||(t=Ce.cssProps[e]=H(e)||e),t}function I(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var i=Ye.exec(t);return i?
// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function R(e,t,n,i,o,s){var r="width"===t?1:0,a=0,l=0;
// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;r<4;r+=2)
// Both box models exclude margin
"margin"===n&&(l+=Ce.css(e,n+Ve[r],!0,o)),
// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
i?(
// For "content", subtract padding
"content"===n&&(l-=Ce.css(e,"padding"+Ve[r],!0,o)),
// For "content" or "padding", subtract border
"margin"!==n&&(l-=Ce.css(e,"border"+Ve[r]+"Width",!0,o))):(
// Add padding
l+=Ce.css(e,"padding"+Ve[r],!0,o),
// For "border" or "margin", add border
"padding"!==n?l+=Ce.css(e,"border"+Ve[r]+"Width",!0,o):a+=Ce.css(e,"border"+Ve[r]+"Width",!0,o));
// Account for positive content-box scroll gutter when requested by providing computedVal
return!i&&0<=s&&(
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-l-a-.5))),l}function N(e,t,n){
// Start with computed style
var i=pt(e),o=A(e,t,i),s="border-box"===Ce.css(e,"boxSizing",!1,i),r=s;
// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(ft.test(o)){if(!n)return o;o="auto"}
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Adjust for the element's box model
return r=r&&(ve.boxSizingReliable()||o===e.style[t]),
// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
("auto"===o||!parseFloat(o)&&"inline"===Ce.css(e,"display",!1,i))&&(o=e["offset"+t[0].toUpperCase()+t.slice(1)],
// offsetWidth/offsetHeight provide border-box values
r=!0),(
// Normalize "" and auto
o=parseFloat(o)||0)+R(e,t,n||(s?"border":"content"),r,i,
// Provide the current computed size to request scroll gutter calculation (gh-3589)
o)+"px"}function F(e,t,n,i,o){return new F.prototype.init(e,t,n,i,o)}function B(){Tt&&(!1===re.hidden&&T.requestAnimationFrame?T.requestAnimationFrame(B):T.setTimeout(B,Ce.fx.interval),Ce.fx.tick())}
// Animations created synchronously will run synchronously
function G(){return T.setTimeout(function(){Ct=void 0}),Ct=Date.now()}
// Generate parameters to create a standard animation
function W(e,t){var n,i=0,o={height:e};
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=Ve[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function Y(e,t,n){for(var i,o=(U.tweeners[t]||[]).concat(U.tweeners["*"]),s=0,r=o.length;s<r;s++)if(i=o[s].call(n,t,e))
// We're done with this property
return i}function V(e,t,n){var i,o,s,r,a,l,u,c,d="width"in t||"height"in t,h=this,f={},p=e.style,m=e.nodeType&&Xe(e),g=Ne.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(i in n.queue||(null==(r=Ce._queueHooks(e,"fx")).unqueued&&(r.unqueued=0,a=r.empty.fire,r.empty.fire=function(){r.unqueued||a()}),r.unqueued++,h.always(function(){
// Ensure the complete handler is called before this completes
h.always(function(){r.unqueued--,Ce.queue(e,"fx").length||r.empty.fire()})})),t)if(o=t[i],kt.test(o)){if(delete t[i],s=s||"toggle"===o,o===(m?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==o||!g||void 0===g[i])continue;m=!0}f[i]=g&&g[i]||Ce.style(e,i)}
// Bail out if this is a no-op like .hide().hide()
if((l=!Ce.isEmptyObject(t))||!Ce.isEmptyObject(f))for(i in
// Restrict "overflow" and "display" styles during box animations
d&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(
// Identify a display type, preferring old show/hide data over the CSS cascade
u=g&&g.display)&&(u=Ne.get(e,"display")),"none"===(c=Ce.css(e,"display"))&&(u?c=u:(
// Get nonempty value(s) by temporarily forcing visibility
b([e],!0),u=e.style.display||u,c=Ce.css(e,"display"),b([e]))),
// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=u)&&"none"===Ce.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(h.done(function(){p.display=u}),null==u&&(c=p.display,u="none"===c?"":c)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",h.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),
// Implement show/hide animations
l=!1,f)
// General show/hide setup for this element animation
l||(g?"hidden"in g&&(m=g.hidden):g=Ne.access(e,"fxshow",{display:u}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
s&&(g.hidden=!m),
// Show elements before animating them
m&&b([e],!0)
/* eslint-disable no-loop-func */,h.done(function(){for(i in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
m||b([e]),Ne.remove(e,"fxshow"),f)Ce.style(e,i,f[i])})),
// Per-property setup
l=Y(m?g[i]:0,i,h),i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}function X(e,t){var n,i,o,s,r;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(o=t[i=f(n)],s=e[n],Array.isArray(s)&&(o=s[1],s=e[n]=s[0]),n!==i&&(e[i]=s,delete e[n]),(r=Ce.cssHooks[i])&&"expand"in r)
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in s=r.expand(s),delete e[i],s)n in e||(e[n]=s[n],t[n]=o);else t[i]=o}function U(r,e,t){var n,a,i=0,o=U.prefilters.length,l=Ce.Deferred().always(function(){
// Don't match elem in the :animated selector
delete s.elem}),s=function(){if(a)return!1;for(var e=Ct||G(),t=Math.max(0,u.startTime+u.duration-e),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
n,i=1-(t/u.duration||0),o=0,s=u.tweens.length;o<s;o++)u.tweens[o].run(i);
// If there's more to do, yield
return l.notifyWith(r,[u,i,t]),i<1&&s?t:(
// If this was an empty animation, synthesize a final progress notification
s||l.notifyWith(r,[u,1,0]),
// Resolve the animation and report its conclusion
l.resolveWith(r,[u]),!1)},u=l.promise({elem:r,props:Ce.extend({},e),opts:Ce.extend(!0,{specialEasing:{},easing:Ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ct||G(),duration:t.duration,tweens:[],createTween:function(e,t){var n=Ce.Tween(r,u.opts,e,t,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(n),n},stop:function(e){var t=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=e?u.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)u.tweens[t].run(1);
// Resolve when we played the last frame; otherwise, reject
return e?(l.notifyWith(r,[u,1,0]),l.resolveWith(r,[u,e])):l.rejectWith(r,[u,e]),this}}),c=u.props;for(X(c,u.opts.specialEasing);i<o;i++)if(n=U.prefilters[i].call(u,r,c,u.opts))return ye(n.stop)&&(Ce._queueHooks(u.elem,u.opts.queue).stop=n.stop.bind(n)),n;return Ce.map(c,Y,u),ye(u.opts.start)&&u.opts.start.call(r,u),
// Attach callbacks from options
u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),Ce.fx.timer(Ce.extend(s,{elem:r,anim:u,queue:u.opts.queue})),u}
// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function K(e){var t;return(e.match(Le)||[]).join(" ")}function Q(e){return e.getAttribute&&e.getAttribute("class")||""}function Z(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Le)||[]}function J(n,e,i,o){var t;if(Array.isArray(e))
// Serialize array item.
Ce.each(e,function(e,t){i||It.test(n)?
// Treat each array item as a scalar.
o(n,t):
// Item is non-scalar (array or object), encode its numeric index.
J(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,i,o)});else if(i||"object"!==g(e))
// Serialize scalar item.
o(n,e);else
// Serialize object item.
for(t in e)J(n+"["+t+"]",e[t],i,o)}
// Serialize an array of form elements or a set of
// key/values into a query string
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function ee(s){
// dataTypeExpression is optional and defaults to "*"
return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,i=0,o=e.toLowerCase().match(Le)||[];if(ye(t))
// For each dataType in the dataTypeExpression
for(;n=o[i++];)
// Prepend if requested
"+"===n[0]?(n=n.slice(1)||"*",(s[n]=s[n]||[]).unshift(t)):(s[n]=s[n]||[]).push(t)}}
// Base inspection function for prefilters and transports
function te(t,o,s,r){function a(e){var i;return l[e]=!0,Ce.each(t[e]||[],function(e,t){var n=t(o,s,r);return"string"!=typeof n||u||l[n]?u?!(i=n):void 0:(o.dataTypes.unshift(n),a(n),!1)}),i}var l={},u=t===Qt;return a(o.dataTypes[0])||!l["*"]&&a("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ne(e,t){var n,i,o=Ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&Ce.extend(!0,e,i),e}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ie(e,t,n){
// Remove auto dataType and get content-type in the process
for(var i,o,s,r,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}
// Check to see if we have a response for the expected dataType
if(l[0]in n)s=l[0];else{
// Try convertible dataTypes
for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){s=o;break}r||(r=o)}
// Or just use first one
s=s||r}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(s)return s!==l[0]&&l.unshift(s),n[s]}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function oe(e,t,n,i){var o,s,r,a,l,u={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(r in e.converters)u[r.toLowerCase()]=e.converters[r];
// Convert to each sequential dataType
for(s=c.shift();s;)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),
// Apply the dataFilter if provided
!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=s,s=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===s)s=l;
// Convert response if prev dataType is non-auto and differs from current
else if("*"!==l&&l!==s){
// If none found, seek a pair
if(!(
// Seek a direct converter
r=u[l+" "+s]||u["* "+s]))for(o in u)if((
// If conv2 outputs current
a=o.split(" "))[1]===s&&(
// If prev can be converted to accepted input
r=u[l+" "+a[0]]||u["* "+a[0]])){
// Condense equivalence converters
!0===r?r=u[o]:!0!==u[o]&&(s=a[0],c.unshift(a[1]));break}
// Apply converter (if not an equivalence)
if(!0!==r)
// Unless errors are allowed to bubble, catch and return them
if(r&&e.throws)t=r(t);else try{t=r(t)}catch(e){return{state:"parsererror",error:r?e:"No conversion from "+l+" to "+s}}}return{state:"success",data:t}}var se=[],re=T.document,ae=Object.getPrototypeOf,le=se.slice,ue=se.concat,ce=se.push,de=se.indexOf,he={},fe=he.toString,pe=he.hasOwnProperty,me=pe.toString,ge=me.call(Object),ve={},ye=function e(t){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof t&&"number"!=typeof t.nodeType},be=function e(t){return null!=t&&t===t.window},we={type:!0,src:!0,noModule:!0},xe="3.3.1",
// Define a local copy of jQuery
Ce=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new Ce.fn.init(e,t)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
Te=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;Ce.fn=Ce.prototype={
// The current version of jQuery being used
jquery:xe,constructor:Ce,
// The default length of a jQuery object is 0
length:0,toArray:function(){return le.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
return null==e?le.call(this):e<0?this[e+this.length]:this[e];
// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=Ce.merge(this.constructor(),e);
// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return Ce.each(this,e)},map:function(n){return this.pushStack(Ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(le.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ce,sort:se.sort,splice:se.splice},Ce.extend=Ce.fn.extend=function(e){var t,n,i,o,s,r,a=e||{},l=1,u=arguments.length,c=!1;
// Handle a deep copy situation
for("boolean"==typeof a&&(c=a,
// Skip the boolean and the target
a=arguments[l]||{},l++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||ye(a)||(a={}),
// Extend jQuery itself if only one argument is passed
l===u&&(a=this,l--);l<u;l++)
// Only deal with non-null/undefined values
if(null!=(t=arguments[l]))
// Extend the base object
for(n in t)i=a[n],
// Prevent never-ending loop
a!==(o=t[n])&&(
// Recurse if we're merging plain objects or arrays
c&&o&&(Ce.isPlainObject(o)||(s=Array.isArray(o)))?(r=s?(s=!1,i&&Array.isArray(i)?i:[]):i&&Ce.isPlainObject(i)?i:{},
// Never move original objects, clone them
a[n]=Ce.extend(c,r,o)):void 0!==o&&(a[n]=o));
// Return the modified object
return a},Ce.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(xe+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!e||"[object Object]"!==fe.call(e))&&(
// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(t=ae(e))||"function"==typeof(
// Objects with prototype are plain iff they were constructed by a global Object function
n=pe.call(t,"constructor")&&t.constructor)&&me.call(n)===ge)},isEmptyObject:function(e){
/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(e){m(e)},each:function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(Te,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(a(Object(e))?Ce.merge(n,"string"==typeof e?[e]:e):ce.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:de.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var i,o=[],s=0,r=e.length,a=!n;s<r;s++)(i=!t(e[s],s))!==a&&o.push(e[s]);return o},
// arg is for internal usage only
map:function(e,t,n){var i,o,s=0,r=[];
// Go through the array, translating each of the items to their new values
if(a(e))for(i=e.length;s<i;s++)null!=(o=t(e[s],s,n))&&r.push(o);
// Go through every key on the object,
else for(s in e)null!=(o=t(e[s],s,n))&&r.push(o);
// Flatten any nested arrays
return ue.apply([],r)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:ve}),"function"==typeof Symbol&&(Ce.fn[Symbol.iterator]=se[Symbol.iterator]),
// Populate the class2type map
Ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){he["[object "+t+"]"]=t.toLowerCase()});var ke=
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(n){function w(e,t,n,i){var o,s,r,a,l,u,c,d=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
h=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&((t?t.ownerDocument||t:N)!==M&&P(t),t=t||M,A)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==h&&(l=ve.exec(e)))
// ID selector
if(o=l[1]){
// Document context
if(9===h){if(!(r=t.getElementById(o)))return n;
// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(r.id===o)return n.push(r),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(d&&(r=d.getElementById(o))&&I(t,r)&&r.id===o)return n.push(r),n;
// Type selector
}else{if(l[2])return Z.apply(n,t.getElementsByTagName(e)),n;
// Class selector
if((o=l[3])&&C.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(o)),n}
// Take advantage of querySelectorAll
if(C.qsa&&!Y[e+" "]&&(!D||!D.test(e))){if(1!==h)d=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(a=t.getAttribute("id"))?a=a.replace(xe,Ce):t.setAttribute("id",a=R),s=(
// Prefix every selector in the list
u=E(e)).length;s--;)u[s]="#"+a+" "+p(u[s]);c=u.join(","),
// Expand context for sibling selectors
d=ye.test(e)&&f(t.parentNode)||t}if(c)try{return Z.apply(n,d.querySelectorAll(c)),n}catch(e){}finally{a===R&&t.removeAttribute("id")}}}
// All others
return j(e.replace(ae,"$1"),t,n,i)}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function e(){function n(e,t){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return i.push(e+" ")>T.cacheLength&&
// Only keep the most recent entries
delete n[i.shift()],n[e+" "]=t}var i=[];return n}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function l(e){return e[R]=!0,e}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function o(e){var t=M.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function t(e,t){for(var n=e.split("|"),i=n.length;i--;)T.attrHandle[n[i]]=t}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function u(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(i)return i;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function i(n){return function(e){var t;return"input"===e.nodeName.toLowerCase()&&e.type===n}}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function s(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}
/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function r(t){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(e){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in e?
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
e.parentNode&&!1===e.disabled?
// Option elements defer to a parent optgroup if present
"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||
// Where there is no isDisabled, check manually
/* jshint -W018 */
e.isDisabled!==!t&&ke(e)===t:e.disabled===t:"label"in e&&e.disabled===t;
// Remaining elements are neither :enabled nor :disabled
}}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function a(r){return l(function(s){return s=+s,l(function(e,t){
// Match elements found at the specified indexes
for(var n,i=r([],e.length,s),o=i.length;o--;)e[n=i[o]]&&(e[n]=!(t[n]=e[n]))})})}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function f(e){return e&&void 0!==e.getElementsByTagName&&e}
// Expose support vars for convenience
// Easy API for creating new setFilters
function c(){}function p(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function d(a,e,t){var l=e.dir,u=e.next,c=u||l,d=t&&"parentNode"===c,h=B++;return e.first?
// Check against closest ancestor/preceding element
function(e,t,n){for(;e=e[l];)if(1===e.nodeType||d)return a(e,t,n);return!1}:
// Check against all ancestor/preceding elements
function(e,t,n){var i,o,s,r=[F,h];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(n){for(;e=e[l];)if((1===e.nodeType||d)&&a(e,t,n))return!0}else for(;e=e[l];)if(1===e.nodeType||d)if(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(s=e[R]||(e[R]={}))[e.uniqueID]||(s[e.uniqueID]={}),u&&u===e.nodeName.toLowerCase())e=e[l]||e;else{if((i=o[c])&&i[0]===F&&i[1]===h)
// Assign to newCache so results back-propagate to previous elements
return r[2]=i[2];
// A match means we're done; a fail means we have to keep checking
if((
// Reuse newcache so results back-propagate to previous elements
o[c]=r)[2]=a(e,t,n))return!0}return!1}}function h(o){return 1<o.length?function(e,t,n){for(var i=o.length;i--;)if(!o[i](e,t,n))return!1;return!0}:o[0]}function y(e,t,n){for(var i=0,o=t.length;i<o;i++)w(e,t[i],n);return n}function x(e,t,n,i,o){for(var s,r=[],a=0,l=e.length,u=null!=t;a<l;a++)(s=e[a])&&(n&&!n(s,i,o)||(r.push(s),u&&t.push(a)));return r}function b(f,p,m,g,v,e){return g&&!g[R]&&(g=b(g)),v&&!v[R]&&(v=b(v,e)),l(function(e,t,n,i){var o,s,r,a=[],l=[],u=t.length,
// Get initial elements from seed or context
c=e||y(p||"*",n.nodeType?[n]:n,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
d=!f||!e&&p?c:x(c,a,f,n,i),h=m?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
v||(e?f:u||g)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
t:d;
// Find primary matches
// Apply postFilter
if(m&&m(d,h,n,i),g)for(o=x(h,l),g(o,[],n,i),
// Un-match failing elements by moving them back to matcherIn
s=o.length;s--;)(r=o[s])&&(h[l[s]]=!(d[l[s]]=r));if(e){if(v||f){if(v){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
o=[],s=h.length;s--;)(r=h[s])&&
// Restore matcherIn since elem is not yet a final match
o.push(d[s]=r);v(null,h=[],o,i)}
// Move matched elements from seed to results to keep them synchronized
for(s=h.length;s--;)(r=h[s])&&-1<(o=v?ee(e,r):a[s])&&(e[o]=!(t[o]=r))}
// Add elements to results, through postFinder if defined
}else h=x(h===t?h.splice(u,h.length):h),v?v(null,t,h,i):Z.apply(t,h)})}function m(e){for(var o,t,n,i=e.length,s=T.relative[e[0].type],r=s||T.relative[" "],a=s?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=d(function(e){return e===o},r,!0),u=d(function(e){return-1<ee(o,e)},r,!0),c=[function(e,t,n){var i=!s&&(n||t!==O)||((o=t).nodeType?l(e,t,n):u(e,t,n));
// Avoid hanging onto element (issue #299)
return o=null,i}];a<i;a++)if(t=T.relative[e[a].type])c=[d(h(c),t)];else{
// Return special upon seeing a positional matcher
if((t=T.filter[e[a].type].apply(null,e[a].matches))[R]){for(
// Find the next relative operator (if any) for proper handling
n=++a;n<i&&!T.relative[e[n].type];n++);return b(1<a&&h(c),1<a&&p(
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),t,a<n&&m(e.slice(a,n)),n<i&&m(e=e.slice(n)),n<i&&p(e))}c.push(t)}return h(c)}function g(g,v){var y=0<v.length,b=0<g.length,e=function(e,t,n,i,o){var s,r,a,l=0,u="0",c=e&&[],d=[],h=O,
// We must always have either seed elements or outermost context
f=e||b&&T.find.TAG("*",o),
// Use integer dirruns iff this is the outermost matcher
p=F+=null==h?1:Math.random()||.1,m=f.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(o&&(O=t===M||t||o);u!==m&&null!=(s=f[u]);u++){if(b&&s){for(r=0,t||s.ownerDocument===M||(P(s),n=!A);a=g[r++];)if(a(s,t||M,n)){i.push(s);break}o&&(F=p)}
// Track unmatched elements for set filters
y&&(
// They will have gone through all possible matchers
(s=!a&&s)&&l--,
// Lengthen the array for every element, matched or not
e&&c.push(s))}
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(l+=u,y&&u!==l){for(r=0;a=v[r++];)a(c,d,t,n);if(e){
// Reintegrate element matches to eliminate the need for sorting
if(0<l)for(;u--;)c[u]||d[u]||(d[u]=K.call(i));
// Discard index placeholder values to get only actual matches
d=x(d)}
// Add matches to results
Z.apply(i,d),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
o&&!e&&0<d.length&&1<l+v.length&&w.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return o&&(F=p,O=h),c};return y?l(e):e}var v,C,T,k,$,E,S,j,O,_,z,
// Local document vars
P,M,L,A,D,H,q,I,
// Instance-specific data
R="sizzle"+1*new Date,N=n.document,F=0,B=0,G=e(),W=e(),Y=e(),V=function(e,t){return e===t&&(z=!0),0},
// Instance methods
X={}.hasOwnProperty,U=[],K=U.pop,Q=U.push,Z=U.push,J=U.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ne="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
ie="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
oe="\\["+ne+"*("+ie+")(?:"+ne+
// Operator (capture 2)
"*([*^$|!~]?=)"+ne+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",se=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
re=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ue=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(se),he=new RegExp("^"+ie+"$"),fe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+se),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){var i="0x"+t-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return i!=i||n?t:i<0?
// BMP codepoint
String.fromCharCode(i+65536):
// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(i>>10|55296,1023&i|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ce=function(e,t){return t?
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;
// Other potentially-special ASCII characters get backslash-escaped
},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
Te=function(){P()},ke=d(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{Z.apply(U=J.call(N.childNodes),N.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
U[N.childNodes.length].nodeType}catch(e){Z={apply:U.length?
// Leverage slice if possible
function(e,t){Q.apply(e,J.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}
// Add button/input type pseudos
for(v in C=w.support={},
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
$=w.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
P=w.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:N;
// Return early if doc is invalid or already selected
return i!==M&&9===i.nodeType&&i.documentElement&&(
// Update global variables
L=(M=i).documentElement,A=!$(M),
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
N!==M&&(n=M.defaultView)&&n.top!==n&&(
// Support: IE 11, Edge
n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
C.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
C.getElementsByTagName=o(function(e){return e.appendChild(M.createComment("")),!e.getElementsByTagName("*").length}),
// Support: IE<9
C.getElementsByClassName=ge.test(M.getElementsByClassName),
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
C.getById=o(function(e){return L.appendChild(e).id=R,!M.getElementsByName||!M.getElementsByName(R).length}),
// ID filter and find
C.getById?(T.filter.ID=function(e){var t=e.replace(be,we);return function(e){return e.getAttribute("id")===t}},T.find.ID=function(e,t){if(void 0!==t.getElementById&&A){var n=t.getElementById(e);return n?[n]:[]}}):(T.filter.ID=function(e){var n=e.replace(be,we);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
T.find.ID=function(e,t){if(void 0!==t.getElementById&&A){var n,i,o,s=t.getElementById(e);if(s){if((
// Verify the id attribute
n=s.getAttributeNode("id"))&&n.value===e)return[s];
// Fall back on getElementsByName
for(o=t.getElementsByName(e),i=0;s=o[i++];)if((n=s.getAttributeNode("id"))&&n.value===e)return[s]}return[]}}),
// Tag
T.find.TAG=C.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):C.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
s=t.getElementsByTagName(e);
// Filter out possible comments
if("*"!==e)return s;for(;n=s[o++];)1===n.nodeType&&i.push(n);return i},
// Class
T.find.CLASS=C.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&A)return t.getElementsByClassName(e)},
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
H=[],
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
D=[],(C.qsa=ge.test(M.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
o(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
L.appendChild(e).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&D.push("[*^$]="+ne+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||D.push("\\["+ne+"*(?:value|"+te+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+R+"-]").length||D.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||D.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+R+"+*").length||D.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=M.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&D.push("name"+ne+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&D.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
L.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&D.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),D.push(",.*:")})),(C.matchesSelector=ge.test(q=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&o(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
C.disconnectedMatch=q.call(e,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
q.call(e,"[s!='']:x"),H.push("!=",se)}),D=D.length&&new RegExp(D.join("|")),H=H.length&&new RegExp(H.join("|")),
/* Contains
	---------------------------------------------------------------------- */
t=ge.test(L.compareDocumentPosition),
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
I=t||ge.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
V=t?function(e,t){
// Flag for duplicate removal
if(e===t)return z=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(
// Disconnected nodes
1&(
// Calculate position if both inputs belong to the same document
n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):
// Otherwise we know they are disconnected
1)||!C.sortDetached&&t.compareDocumentPosition(e)===n?
// Choose the first element that is related to our preferred document
e===M||e.ownerDocument===N&&I(N,e)?-1:t===M||t.ownerDocument===N&&I(N,t)?1:_?ee(_,e)-ee(_,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return z=!0,0;var n,i=0,o=e.parentNode,s=t.parentNode,r=[e],a=[t];
// Parentless nodes are either documents or disconnected
if(!o||!s)return e===M?-1:t===M?1:o?-1:s?1:_?ee(_,e)-ee(_,t):0;
// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(o===s)return u(e,t);for(n=e;n=n.parentNode;)r.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);
// Walk down the tree looking for a discrepancy
for(;r[i]===a[i];)i++;return i?
// Do a sibling check if the nodes have a common ancestor
u(r[i],a[i]):
// Otherwise nodes in our document sort first
r[i]===N?-1:a[i]===N?1:0}),M},w.matches=function(e,t){return w(e,null,null,t)},w.matchesSelector=function(e,t){if(
// Set document vars if needed
(e.ownerDocument||e)!==M&&P(e),
// Make sure that attribute selectors are quoted
t=t.replace(ce,"='$1']"),C.matchesSelector&&A&&!Y[t+" "]&&(!H||!H.test(t))&&(!D||!D.test(t)))try{var n=q.call(e,t);
// IE 9's matchesSelector returns false on disconnected nodes
if(n||C.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<w(t,M,null,[e]).length},w.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==M&&P(e),I(e,t)},w.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==M&&P(e);var n=T.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
i=n&&X.call(T.attrHandle,t.toLowerCase())?n(e,t,!A):void 0;return void 0!==i?i:C.attributes||!A?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},w.escape=function(e){return(e+"").replace(xe,Ce)},w.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
w.uniqueSort=function(e){var t,n=[],i=0,o=0;
// Unless we *know* we can detect duplicates, assume their presence
if(z=!C.detectDuplicates,_=!C.sortStable&&e.slice(0),e.sort(V),z){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return _=null,e},
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
k=w.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===o||4===o)return e.nodeValue;
// Do not include comment or processing instruction nodes
}else
// If no nodeType, this is expected to be an array
for(;t=e[i++];)
// Do not traverse comment nodes
n+=k(t);return n},(T=w.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:l,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,we),
// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(be,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){
/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(
// nth-* requires argument
e[3]||w.error(e[0]),
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&w.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(
// Accept quoted arguments as-is
e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(
// Get excess from tokenize (recursively)
t=E(n,!0))&&(
// advance to the next closing parenthesis
t=n.indexOf(")",n.length-t)-n.length)&&(
// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=G[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&G(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,i,o){return function(e){var t=w.attr(e,n);return null==t?"!="===i:!i||(t+="","="===i?t===o:"!="===i?t!==o:"^="===i?o&&0===t.indexOf(o):"*="===i?o&&-1<t.indexOf(o):"$="===i?o&&t.slice(-o.length)===o:"~="===i?-1<(" "+t.replace(re," ")+" ").indexOf(o):"|="===i&&(t===o||t.slice(0,o.length+1)===o+"-"))}},CHILD:function(p,e,t,m,g){var v="nth"!==p.slice(0,3),y="last"!==p.slice(-4),b="of-type"===e;return 1===m&&0===g?
// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(e,t,n){var i,o,s,r,a,l,u=v!==y?"nextSibling":"previousSibling",c=e.parentNode,d=b&&e.nodeName.toLowerCase(),h=!n&&!b,f=!1;if(c){
// :(first|last|only)-(child|of-type)
if(v){for(;u;){for(r=e;r=r[u];)if(b?r.nodeName.toLowerCase()===d:1===r.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
l=u="only"===p&&!l&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(l=[y?c.firstChild:c.lastChild],y&&h){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
f=(a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(s=(r=c)[R]||(r[R]={}))[r.uniqueID]||(s[r.uniqueID]={}))[p]||[])[0]===F&&i[1])&&i[2],r=a&&c.childNodes[a];r=++a&&r&&r[u]||(
// Fallback to seeking `elem` from the start
f=a=0)||l.pop();)
// When found, cache indexes on `parent` and break
if(1===r.nodeType&&++f&&r===e){o[p]=[F,a,f];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
h&&(f=a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(s=(
// ...in a gzip-friendly way
r=e)[R]||(r[R]={}))[r.uniqueID]||(s[r.uniqueID]={}))[p]||[])[0]===F&&i[1]),!1===f)
// Use the same loop as above to seek `elem` from the start
for(;(r=++a&&r&&r[u]||(f=a=0)||l.pop())&&((b?r.nodeName.toLowerCase()!==d:1!==r.nodeType)||!++f||(
// Cache the index of each encountered element
h&&((
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(s=r[R]||(r[R]={}))[r.uniqueID]||(s[r.uniqueID]={}))[p]=[F,f]),r!==e)););
// Incorporate the offset, then check against cycle size
return(f-=g)===m||f%m==0&&0<=f/m}}},PSEUDO:function(e,s){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var t,r=T.pseudos[e]||T.setFilters[e.toLowerCase()]||w.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return r[R]?r(s):
// But maintain support for old signatures
1<r.length?(t=[e,e,"",s],T.setFilters.hasOwnProperty(e.toLowerCase())?l(function(e,t){for(var n,i=r(e,s),o=i.length;o--;)e[n=ee(e,i[o])]=!(t[n]=i[o])}):function(e){return r(e,0,t)}):r}},pseudos:{
// Potentially complex pseudos
not:l(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var i=[],o=[],a=S(e.replace(ae,"$1"));return a[R]?l(function(e,t,n,i){
// Match elements unmatched by `matcher`
for(var o,s=a(e,null,i,[]),r=e.length;r--;)(o=s[r])&&(e[r]=!(t[r]=o))}):function(e,t,n){return i[0]=e,a(i,null,n,o),
// Don't keep the element (issue #299)
i[0]=null,!o.pop()}}),has:l(function(t){return function(e){return 0<w(t,e).length}}),contains:l(function(t){return t=t.replace(be,we),function(e){return-1<(e.textContent||e.innerText||k(e)).indexOf(t)}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:l(function(n){
// lang value must be a valid identifier
return he.test(n||"")||w.error("unsupported lang: "+n),n=n.replace(be,we).toLowerCase(),function(e){var t;do{if(t=A?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),
// Miscellaneous
target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===L},focus:function(e){return e===M.activeElement&&(!M.hasFocus||M.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:r(!1),disabled:r(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},
// Element/input types
header:function(e){return me.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:a(function(){return[0]}),last:a(function(e,t){return[t-1]}),eq:a(function(e,t,n){return[n<0?n+t:n]}),even:a(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:a(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:a(function(e,t,n){for(var i=n<0?n+t:n;0<=--i;)e.push(i);return e}),gt:a(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=T.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[v]=i(v);for(v in{submit:!0,reset:!0})T.pseudos[v]=s(v);return c.prototype=T.filters=T.pseudos,T.setFilters=new c,E=w.tokenize=function(e,t){var n,i,o,s,r,a,l,u=W[e+" "];if(u)return t?0:u.slice(0);for(r=e,a=[],l=T.preFilter;r;){
// Filters
for(s in
// Comma and first run
n&&!(i=le.exec(r))||(i&&(
// Don't consume trailing commas as valid
r=r.slice(i[0].length)||r),a.push(o=[])),n=!1,
// Combinators
(i=ue.exec(r))&&(n=i.shift(),o.push({value:n,
// Cast descendant combinators to space
type:i[0].replace(ae," ")}),r=r.slice(n.length)),T.filter)!(i=fe[s].exec(r))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),r=r.slice(n.length));if(!n)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return t?r.length:r?w.error(e):
// Cache the tokens
W(e,a).slice(0)},S=w.compile=function(e,t/* Internal Use Only */){var n,i=[],o=[],s=Y[e+" "];if(!s){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=E(e)),n=t.length;n--;)(s=m(t[n]))[R]?i.push(s):o.push(s);
// Cache the compiled function
// Save selector and tokenization
(s=Y(e,g(o,i))).selector=e}return s},
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
j=w.select=function(e,t,n,i){var o,s,r,a,l,u="function"==typeof e&&e,c=!i&&E(e=u.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===c.length){if(2<(
// Reduce context if the leading compound selector is an ID
s=c[0]=c[0].slice(0)).length&&"ID"===(r=s[0]).type&&9===t.nodeType&&A&&T.relative[s[1].type]){if(!(t=(T.find.ID(r.matches[0].replace(be,we),t)||[])[0]))return n;
// Precompiled matchers will still verify ancestry, so step up a level
u&&(t=t.parentNode),e=e.slice(s.shift().value.length)}
// Fetch a seed set for right-to-left matching
for(o=fe.needsContext.test(e)?0:s.length;o--&&(r=s[o],!T.relative[a=r.type]);)if((l=T.find[a])&&(i=l(r.matches[0].replace(be,we),ye.test(s[0].type)&&f(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
s.splice(o,1),!(e=i.length&&p(s)))return Z.apply(n,i),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(u||S(e,c))(i,t,!A,n,!t||ye.test(e)&&f(t.parentNode)||t),n},
// One-time assignments
// Sort stability
C.sortStable=R.split("").sort(V).join("")===R,
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
C.detectDuplicates=!!z,
// Initialize against the default document
P(),
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
C.sortDetached=o(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(M.createElement("fieldset"))}),
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||t("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
C.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||t("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
o(function(e){return null==e.getAttribute("disabled")})||t(te,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),w}(T);Ce.find=ke,Ce.expr=ke.selectors,
// Deprecated
Ce.expr[":"]=Ce.expr.pseudos,Ce.uniqueSort=Ce.unique=ke.uniqueSort,Ce.text=ke.getText,Ce.isXMLDoc=ke.isXML,Ce.contains=ke.contains,Ce.escapeSelector=ke.escape;var $e=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&Ce(e).is(n))break;i.push(e)}return i},Ee=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Se=Ce.expr.match.needsContext,je=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;Ce.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?Ce.find.matchesSelector(i,e)?[i]:[]:Ce.find.matches(e,Ce.grep(t,function(e){return 1===e.nodeType}))},Ce.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(Ce(e).filter(function(){for(t=0;t<i;t++)if(Ce.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)Ce.find(e,o[t],n);return 1<i?Ce.uniqueSort(n):n},filter:function(e){return this.pushStack(t(this,e||[],!1))},not:function(e){return this.pushStack(t(this,e||[],!0))},is:function(e){return!!t(this,
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&Se.test(e)?Ce(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var Oe,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
_e=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ze;
// Give the init function the jQuery prototype for later instantiation
(Ce.fn.init=function(e,t,n){var i,o;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||Oe,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):ye(e)?void 0!==n.ready?n.ready(e):
// Execute immediately if ready is not present
e(Ce):Ce.makeArray(e,this);
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:_e.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(i[1]){
// HANDLE: $(html, props)
if(t=t instanceof Ce?t[0]:t,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
Ce.merge(this,Ce.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:re,!0)),je.test(i[1])&&Ce.isPlainObject(t))for(i in t)
// Properties of context are called as methods if possible
ye(this[i])?this[i](t[i]):this.attr(i,t[i]);return this;
// HANDLE: $(#id)
}
// HANDLE: $(expr, $(...))
return(o=re.getElementById(i[2]))&&(
// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this}).prototype=Ce.fn,
// Initialize central reference
Oe=Ce(re);var Pe=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
Me={children:!0,contents:!0,next:!0,prev:!0};Ce.fn.extend({has:function(e){var t=Ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(Ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,o=this.length,s=[],r="string"!=typeof e&&Ce(e);
// Positional selectors never match, since there's no _selection_ context
if(!Se.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(r?-1<r.index(n):
// Don't pass non-elements to Sizzle
1===n.nodeType&&Ce.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(1<s.length?Ce.uniqueSort(s):s)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
return e?
// Index in selector
"string"==typeof e?de.call(Ce(e),this[0]):de.call(this,
// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Ce.uniqueSort(Ce.merge(this.get(),Ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return $e(e,"parentNode")},parentsUntil:function(e,t,n){return $e(e,"parentNode",n)},next:function(e){return n(e,"nextSibling")},prev:function(e){return n(e,"previousSibling")},nextAll:function(e){return $e(e,"nextSibling")},prevAll:function(e){return $e(e,"previousSibling")},nextUntil:function(e,t,n){return $e(e,"nextSibling",n)},prevUntil:function(e,t,n){return $e(e,"previousSibling",n)},siblings:function(e){return Ee((e.parentNode||{}).firstChild,e)},children:function(e){return Ee(e.firstChild)},contents:function(e){return u(e,"iframe")?e.contentDocument:(
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
u(e,"template")&&(e=e.content||e),Ce.merge([],e.childNodes))}},function(i,o){Ce.fn[i]=function(e,t){var n=Ce.map(this,o,e);return"Until"!==i.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=Ce.filter(t,n)),1<this.length&&(
// Remove duplicates
Me[i]||Ce.uniqueSort(n),
// Reverse order for parents* and prev-derivatives
Pe.test(i)&&n.reverse()),this.pushStack(n)}});var Le=/[^\x20\t\r\n\f]+/g;Ce.Callbacks=function(i){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
i="string"==typeof i?c(i):Ce.extend({},i);var// Flag to know if list is currently firing
n,
// Last fire value for non-forgettable lists
e,
// Flag to know if list was already fired
t,
// Flag to prevent firing
o,
// Actual callback list
s=[],
// Queue of execution data for repeatable lists
r=[],
// Index of currently firing callback (modified by add/remove as needed)
a=-1,
// Fire callbacks
l=function(){for(
// Enforce single-firing
o=o||i.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
t=n=!0;r.length;a=-1)for(e=r.shift();++a<s.length;)
// Run callback and check for early termination
!1===s[a].apply(e[0],e[1])&&i.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
a=s.length,e=!1);
// Forget the data if we're done with it
i.memory||(e=!1),n=!1,
// Clean up if we're done firing for good
o&&(
// Keep an empty list if we have data for future add calls
s=e?[]:"")},
// Actual Callbacks object
u={
// Add a callback or a collection of callbacks to the list
add:function(){return s&&(
// If we have memory from a past run, we should fire after adding
e&&!n&&(a=s.length-1,r.push(e)),function n(e){Ce.each(e,function(e,t){ye(t)?i.unique&&u.has(t)||s.push(t):t&&t.length&&"string"!==g(t)&&
// Inspect recursively
n(t)})}(arguments),e&&!n&&l()),this},
// Remove a callback from the list
remove:function(){return Ce.each(arguments,function(e,t){for(var n;-1<(n=Ce.inArray(t,s,n));)s.splice(n,1),
// Handle firing indexes
n<=a&&a--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?-1<Ce.inArray(e,s):0<s.length},
// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return o=r=[],s=e="",this},disabled:function(){return!s},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return o=r=[],e||n||(s=e=""),this},locked:function(){return!!o},
// Call all callbacks with the given context and arguments
fireWith:function(e,t){return o||(t=[e,(t=t||[]).slice?t.slice():t],r.push(t),n||l()),this},
// Call all the callbacks with the given arguments
fire:function(){return u.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!t}};return u},Ce.extend({Deferred:function(e){var s=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",Ce.Callbacks("memory"),Ce.Callbacks("memory"),2],["resolve","done",Ce.Callbacks("once memory"),Ce.Callbacks("once memory"),0,"resolved"],["reject","fail",Ce.Callbacks("once memory"),Ce.Callbacks("once memory"),1,"rejected"]],o="pending",r={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var o=arguments;return Ce.Deferred(function(i){Ce.each(s,function(e,t){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var n=ye(o[t[4]])&&o[t[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&ye(e.promise)?e.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[t[0]+"With"](this,n?[e]:arguments)})}),o=null}).promise()},then:function(t,n,i){function l(o,s,r,a){return function(){var n=this,i=arguments,e=function(){var e,t;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(o<u)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=r.apply(n,i))===s.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
t=e&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof e||"function"==typeof e)&&e.then,
// Handle a returned thenable
ye(t)?
// Special processors (notify) just wait for resolution
a?t.call(e,l(u,s,d,a),l(u,s,h,a)):(
// ...and disregard older resolution values
u++,t.call(e,l(u,s,d,a),l(u,s,h,a),l(u,s,d,s.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==d&&(n=void 0,i=[e]),
// Process the value(s)
// Default process is resolve
(a||s.resolveWith)(n,i))}},
// Only normal processors (resolve) catch and reject exceptions
t=a?e:function(){try{e()}catch(e){Ce.Deferred.exceptionHook&&Ce.Deferred.exceptionHook(e,t.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
u<=o+1&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==h&&(n=void 0,i=[e]),s.rejectWith(n,i))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
o?t():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
Ce.Deferred.getStackHook&&(t.stackTrace=Ce.Deferred.getStackHook()),T.setTimeout(t))}}var u=0;return Ce.Deferred(function(e){
// progress_handlers.add( ... )
s[0][3].add(l(0,e,ye(i)?i:d,e.notifyWith)),
// fulfilled_handlers.add( ... )
s[1][3].add(l(0,e,ye(t)?t:d)),
// rejected_handlers.add( ... )
s[2][3].add(l(0,e,ye(n)?n:h))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?Ce.extend(e,r):r}},a={};
// Add list-specific methods
// All done!
return Ce.each(s,function(e,t){var n=t[2],i=t[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
r[t[1]]=n.add,
// Handle state
i&&n.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
o=i},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
s[3-e][2].disable,
// rejected_handlers.disable
// fulfilled_handlers.disable
s[3-e][3].disable,
// progress_callbacks.lock
s[0][2].lock,
// progress_handlers.lock
s[0][3].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
n.add(t[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
a[t[0]]=function(){return a[t[0]+"With"](this===a?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
a[t[0]+"With"]=n.fireWith}),
// Make the deferred a promise
r.promise(a),
// Call given func if any
e&&e.call(a,a),a},
// Deferred helper
when:function(e){var
// count of uncompleted subordinates
n=arguments.length,
// count of unprocessed arguments
t=n,
// subordinate fulfillment data
i=Array(t),o=le.call(arguments),
// the master Deferred
s=Ce.Deferred(),
// subordinate callback factory
r=function(t){return function(e){i[t]=this,o[t]=1<arguments.length?le.call(arguments):e,--n||s.resolveWith(i,o)}};
// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(l(e,s.done(r(t)).resolve,s.reject,!n),"pending"===s.state()||ye(o[t]&&o[t].then)))return s.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;t--;)l(o[t],r(t),s.reject);return s.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Ae=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;Ce.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
T.console&&T.console.warn&&e&&Ae.test(e.name)&&T.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},Ce.readyException=function(e){T.setTimeout(function(){throw e})};
// The deferred used on DOM ready
var De=Ce.Deferred();Ce.fn.ready=function(e){return De.then(e).catch(function(e){Ce.readyException(e)}),this},Ce.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--Ce.readyWait:Ce.isReady)||(
// Remember that the DOM is ready
Ce.isReady=!0)!==e&&0<--Ce.readyWait||
// If there are functions bound, to execute
De.resolveWith(re,[Ce])}}),Ce.ready.then=De.then,"complete"===re.readyState||"loading"!==re.readyState&&!re.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
T.setTimeout(Ce.ready):(
// Use the handy event callback
re.addEventListener("DOMContentLoaded",i),
// A fallback to window.onload, that will always work
T.addEventListener("load",i));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var He=function(e,t,n,i,o,s,r){var a=0,l=e.length,u=null==n;
// Sets many values
if("object"===g(n))for(a in o=!0,n)He(e,t,a,n[a],!0,s,r);
// Sets one value
else if(void 0!==i&&(o=!0,ye(i)||(r=!0),u&&(
// Bulk operations run against the entire set
t=r?(t.call(e,i),null):(u=t,function(e,t,n){return u.call(Ce(e),n)})),t))for(;a<l;a++)t(e[a],n,r?i:i.call(e[a],a,t(e[a],n)));return o?e:
// Gets
u?t.call(e):l?t(e[0],n):s},qe=/^-ms-/,Ie=/-([a-z])/g,Re=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};
// Matches dashed string for camelizing
s.uid=1,s.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];
// If not, create one
return t||(t={},
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
Re(e)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)o[f(t)]=n;
// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(i in t)o[f(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):
// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][f(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(
// Support array or space separated string of keys
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(f):(t=f(t))in i?[t]:t.match(Le)||[]).length;for(;n--;)delete i[t[n]]}
// Remove the expando if there's no more data
(void 0===t||Ce.isEmptyObject(i))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!Ce.isEmptyObject(t)}};var Ne=new s,Fe=new s,Be=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ge=/[A-Z]/g;Ce.extend({hasData:function(e){return Fe.hasData(e)||Ne.hasData(e)},data:function(e,t,n){return Fe.access(e,t,n)},removeData:function(e,t){Fe.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return Ne.access(e,t,n)},_removeData:function(e,t){Ne.remove(e,t)}}),Ce.fn.extend({data:function(n,e){var t,i,o,s=this[0],r=s&&s.attributes;
// Gets all values
if(void 0!==n)
// Sets multiple values
return"object"==typeof n?this.each(function(){Fe.set(this,n)}):He(this,function(e){var t;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(s&&void 0===e)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
t=Fe.get(s,n))?t:void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
t=p(s,n))?t:
// We tried really hard, but the data doesn't exist.
void 0;
// Set the data...
this.each(function(){
// We always store the camelCased key
Fe.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(o=Fe.get(s),1===s.nodeType&&!Ne.get(s,"hasDataAttrs"))){for(t=r.length;t--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
r[t]&&0===(i=r[t].name).indexOf("data-")&&(i=f(i.slice(5)),p(s,i,o[i]));Ne.set(s,"hasDataAttrs",!0)}return o},removeData:function(e){return this.each(function(){Fe.remove(this,e)})}}),Ce.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Ne.get(e,t),
// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!i||Array.isArray(n)?i=Ne.access(e,t,Ce.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=Ce.queue(e,t),i=n.length,o=n.shift(),s=Ce._queueHooks(e,t),r=function(){Ce.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===o&&(o=n.shift(),i--),o&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete s.stop,o.call(e,r,s)),!i&&s&&s.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return Ne.get(e,n)||Ne.access(e,n,{empty:Ce.Callbacks("once memory").add(function(){Ne.remove(e,[t+"queue",n])})})}}),Ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?Ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=Ce.queue(this,t,n);
// Ensure a hooks for this queue
Ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&Ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){Ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,i=1,o=Ce.Deferred(),s=this,r=this.length,a=function(){--i||o.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";r--;)(n=Ne.get(s[r],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var We=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ye=new RegExp("^(?:([+-])=|)("+We+")([a-z%]*)$","i"),Ve=["Top","Right","Bottom","Left"],Xe=function(e,t){
// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
e=t||e).style.display||""===e.style.display&&
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
Ce.contains(e.ownerDocument,e)&&"none"===Ce.css(e,"display")},Ue=function(e,t,n,i){var o,s,r={};
// Remember the old values, and insert the new ones
for(s in t)r[s]=e.style[s],e.style[s]=t[s];
// Revert the old values
for(s in o=n.apply(e,i||[]),t)e.style[s]=r[s];return o},Ke={};Ce.fn.extend({show:function(){return b(this,!0)},hide:function(){return b(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Xe(this)?Ce(this).show():Ce(this).hide()})}});var Qe=/^(?:checkbox|radio)$/i,Ze=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Je=/^$|^module$|\/(?:java|ecma)script/i,et={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
et.optgroup=et.option,et.tbody=et.tfoot=et.colgroup=et.caption=et.thead,et.th=et.td;var tt=/<|&#?\w+;/,nt,it,ot;it=re.createDocumentFragment().appendChild(re.createElement("div")),
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(ot=re.createElement("input")).setAttribute("type","radio"),ot.setAttribute("checked","checked"),ot.setAttribute("name","t"),it.appendChild(ot),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
ve.checkClone=it.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
it.innerHTML="<textarea>x</textarea>",ve.noCloneChecked=!!it.cloneNode(!0).lastChild.defaultValue;var st=re.documentElement,rt=/^key/,at=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,lt=/^([^.]*)(?:\.(.+)|)/;Ce.event={global:{},add:function(t,e,n,i,o){var s,r,a,l,u,c,d,h,f,p,m,g=Ne.get(t);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(g)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(s=n).handler,o=s.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
o&&Ce.find.matchesSelector(st,o),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=Ce.guid++),
// Init the element's event structure and main handler, if this is the first
(l=g.events)||(l=g.events={}),(r=g.handle)||(r=g.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==Ce&&Ce.event.triggered!==e.type?Ce.event.dispatch.apply(t,arguments):void 0}),u=(
// Handle multiple events separated by a space
e=(e||"").match(Le)||[""]).length;u--;)f=m=(a=lt.exec(e[u])||[])[1],p=(a[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
f&&(
// If event changes its type, use the special event handlers for the changed type
d=Ce.event.special[f]||{},
// If selector defined, determine special event api type, otherwise given type
f=(o?d.delegateType:d.bindType)||f,
// Update special based on newly reset type
d=Ce.event.special[f]||{},
// handleObj is passed to all event handlers
c=Ce.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&Ce.expr.match.needsContext.test(o),namespace:p.join(".")},s),
// Init the event handler queue if we're the first
(h=l[f])||((h=l[f]=[]).delegateCount=0,
// Only use addEventListener if the special events handler returns false
d.setup&&!1!==d.setup.call(t,i,p,r)||t.addEventListener&&t.addEventListener(f,r)),d.add&&(d.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
o?h.splice(h.delegateCount++,0,c):h.push(c),
// Keep track of which events have ever been used, for event optimization
Ce.event.global[f]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,i,o){var s,r,a,l,u,c,d,h,f,p,m,g=Ne.hasData(e)&&Ne.get(e);if(g&&(l=g.events)){for(u=(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(Le)||[""]).length;u--;)
// Unbind all events (on this namespace, if provided) for the element
if(f=m=(a=lt.exec(t[u])||[])[1],p=(a[2]||"").split(".").sort(),f){for(d=Ce.event.special[f]||{},h=l[f=(i?d.delegateType:d.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
r=s=h.length;s--;)c=h[s],!o&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(h.splice(s,1),c.selector&&h.delegateCount--,d.remove&&d.remove.call(e,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
r&&!h.length&&(d.teardown&&!1!==d.teardown.call(e,p,g.handle)||Ce.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)Ce.event.remove(e,f+t[u],n,i,!0);
// Remove data and the expando if it's no longer used
Ce.isEmptyObject(l)&&Ne.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t=Ce.event.fix(e),n,i,o,s,r,a,l=new Array(arguments.length),u=(Ne.get(this,"events")||{})[t.type]||[],c=Ce.event.special[t.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
l[0]=t,n=1;n<arguments.length;n++)l[n]=arguments[n];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){for(
// Determine handlers
a=Ce.event.handlers.call(this,t,u),
// Run delegates first; they may want to stop propagation beneath us
n=0;(s=a[n++])&&!t.isPropagationStopped();)for(t.currentTarget=s.elem,i=0;(r=s.handlers[i++])&&!t.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
t.rnamespace&&!t.rnamespace.test(r.namespace)||(t.handleObj=r,t.data=r.data,void 0!==(o=((Ce.event.special[r.origType]||{}).handle||r.handler).apply(s.elem,l))&&!1===(t.result=o)&&(t.preventDefault(),t.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,i,o,s,r,a=[],l=t.delegateCount,u=e.target;
// Find delegate handlers
if(l&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
u.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&1<=e.button))for(;u!==this;u=u.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(s=[],r={},n=0;n<l;n++)void 0===r[
// Don't conflict with Object.prototype properties (#13203)
o=(i=t[n]).selector+" "]&&(r[o]=i.needsContext?-1<Ce(o,this).index(u):Ce.find(o,this,null,[u]).length),r[o]&&s.push(i);s.length&&a.push({elem:u,handlers:s})}
// Add the remaining (directly-bound) handlers
return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(t,e){Object.defineProperty(Ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:ye(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[Ce.expando]?e:new Ce.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==E()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===E()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&u(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return u(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},Ce.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},Ce.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof Ce.Event))return new Ce.Event(e,t);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&
// Support: Android <=2.3 only
!1===e.returnValue?k:$,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,
// Put explicitly provided properties onto the event object
t&&Ce.extend(this,t),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),
// Mark it as fixed
this[Ce.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
Ce.Event.prototype={constructor:Ce.Event,isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=k,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=k,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=k,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
Ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;
// Add which for key events
return null==e.which&&rt.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:
// Add which for click: 1 === left; 2 === middle; 3 === right
!e.which&&void 0!==t&&at.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},Ce.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
Ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,s){Ce.event.special[e]={delegateType:s,bindType:s,handle:function(e){var t,n=this,i=e.relatedTarget,o=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===n||Ce.contains(n,i))||(e.type=o.origType,t=o.handler.apply(this,arguments),e.type=s),t}}}),Ce.fn.extend({on:function(e,t,n,i){return S(this,e,t,n,i)},one:function(e,t,n,i){return S(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return i=e.handleObj,Ce(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(
// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=$),this.each(function(){Ce.event.remove(this,e,n,t)});
// ( types-object [, selector] )
for(o in e)this.off(o,t,e[o]);return this}});var
/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
ut=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ct=/<script|<style|<link/i,
// checked="checked" or checked
dt=/checked\s*(?:[^=]|=\s*.checked.)/i,ht=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;Ce.extend({htmlPrefilter:function(e){return e.replace(ut,"<$1></$2>")},clone:function(e,t,n){var i,o,s,r,a=e.cloneNode(!0),l=Ce.contains(e.ownerDocument,e);
// Fix IE cloning issues
if(!(ve.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Ce.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
r=w(a),i=0,o=(s=w(e)).length;i<o;i++)P(s[i],r[i]);
// Copy the events from the original to the clone
if(t)if(n)for(s=s||w(e),r=r||w(a),i=0,o=s.length;i<o;i++)z(s[i],r[i]);else z(e,a);
// Preserve script evaluation history
// Return the cloned set
return 0<(r=w(a,"script")).length&&x(r,!l&&w(e,"script")),a},cleanData:function(e){for(var t,n,i,o=Ce.event.special,s=0;void 0!==(n=e[s]);s++)if(Re(n)){if(t=n[Ne.expando]){if(t.events)for(i in t.events)o[i]?Ce.event.remove(n,i):Ce.removeEvent(n,i,t.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Ne.expando]=void 0}n[Fe.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Fe.expando]=void 0)}}}),Ce.fn.extend({detach:function(e){return L(this,e,!0)},remove:function(e){return L(this,e)},text:function(e){return He(this,function(e){return void 0===e?Ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return M(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||j(this,e).appendChild(e)})},prepend:function(){return M(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=j(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return M(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return M(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
Ce.cleanData(w(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Ce.clone(this,e,t)})},html:function(e){return He(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!ct.test(e)&&!et[(Ze.exec(e)||["",""])[1].toLowerCase()]){e=Ce.htmlPrefilter(e);try{for(;n<i;n++)
// Remove element nodes and prevent memory leaks
1===(t=this[n]||{}).nodeType&&(Ce.cleanData(w(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];
// Make the changes, replacing each non-ignored context element with the new content
return M(this,arguments,function(e){var t=this.parentNode;Ce.inArray(this,n)<0&&(Ce.cleanData(w(this)),t&&t.replaceChild(e,this));
// Force callback invocation
},n)}}),Ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,r){Ce.fn[e]=function(e){for(var t,n=[],i=Ce(e),o=i.length-1,s=0;s<=o;s++)t=s===o?this:this.clone(!0),Ce(i[s])[r](t),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ce.apply(n,t.get());return this.pushStack(n)}});var ft=new RegExp("^("+We+")(?!px)[a-z%]+$","i"),pt=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=T),t.getComputedStyle(e)},mt=new RegExp(Ve.join("|"),"i");!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(l){a.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",st.appendChild(a).appendChild(l);var e=T.getComputedStyle(l);n="1%"!==e.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
r=12===t(e.marginLeft),
// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
l.style.right="60%",s=36===t(e.right),
// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
i=36===t(e.width),
// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
l.style.position="absolute",o=36===l.offsetWidth||"absolute",st.removeChild(a),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
l=null}}function t(e){return Math.round(parseFloat(e))}var n,i,o,s,r,a=re.createElement("div"),l=re.createElement("div");
// Finish early in limited (non-browser) environments
l.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",ve.clearCloneStyle="content-box"===l.style.backgroundClip,Ce.extend(ve,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),r},scrollboxSize:function(){return e(),o}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
gt=/^(none|table(?!-c[ea]).+)/,vt=/^--/,yt={position:"absolute",visibility:"hidden",display:"block"},bt={letterSpacing:"0",fontWeight:"400"},wt=["Webkit","Moz","ms"],xt=re.createElement("div").style;Ce.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=A(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(e,t,n,i){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var o,s,r,a=f(t),l=vt.test(t),u=e.style;
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(l||(t=q(a)),
// Gets hook for the prefixed version, then unprefixed version
r=Ce.cssHooks[t]||Ce.cssHooks[a],void 0===n)
// If a hook was provided get the non-computed value from there
return r&&"get"in r&&void 0!==(o=r.get(e,!1,i))?o:u[t];
// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(s=typeof n)&&(o=Ye.exec(n))&&o[1]&&(n=v(e,t,o),
// Fixes bug #9237
s="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===s&&(n+=o&&o[3]||(Ce.cssNumber[a]?"":"px")),
// background-* props affect original clone's values
ve.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
r&&"set"in r&&void 0===(n=r.set(e,n,i))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,i){var o,s,r,a=f(t),l;
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return vt.test(t)||(t=q(a)),
// If a hook was provided get the computed value from there
(
// Try prefixed name followed by the unprefixed name
r=Ce.cssHooks[t]||Ce.cssHooks[a])&&"get"in r&&(o=r.get(e,!0,n)),
// Otherwise, if a way to get the computed value exists, use that
void 0===o&&(o=A(e,t,i)),
// Convert "normal" to computed value
"normal"===o&&t in bt&&(o=bt[t]),""===n||n?(s=parseFloat(o),!0===n||isFinite(s)?s||0:o):o}}),Ce.each(["height","width"],function(e,a){Ce.cssHooks[a]={get:function(e,t,n){if(t)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!gt.test(Ce.css(e,"display"))||
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?N(e,a,n):Ue(e,yt,function(){return N(e,a,n)})},set:function(e,t,n){var i,o=pt(e),s="border-box"===Ce.css(e,"boxSizing",!1,o),r=n&&R(e,a,n,s,o);
// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return s&&ve.scrollboxSize()===o.position&&(r-=Math.ceil(e["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(o[a])-R(e,a,"border",!1,o)-.5)),
// Convert to pixels if value adjustment is needed
r&&(i=Ye.exec(t))&&"px"!==(i[3]||"px")&&(e.style[a]=t,t=Ce.css(e,a)),I(e,t,r)}}}),Ce.cssHooks.marginLeft=D(ve.reliableMarginLeft,function(e,t){if(t)return(parseFloat(A(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
Ce.each({margin:"",padding:"",border:"Width"},function(o,s){Ce.cssHooks[o+s]={expand:function(e){for(var t=0,n={},
// Assumes a single number if not a string
i="string"==typeof e?e.split(" "):[e];t<4;t++)n[o+Ve[t]+s]=i[t]||i[t-2]||i[0];return n}},"margin"!==o&&(Ce.cssHooks[o+s].set=I)}),Ce.fn.extend({css:function(e,t){return He(this,function(e,t,n){var i,o,s={},r=0;if(Array.isArray(t)){for(i=pt(e),o=t.length;r<o;r++)s[t[r]]=Ce.css(e,t[r],!1,i);return s}return void 0!==n?Ce.style(e,t,n):Ce.css(e,t)},e,t,1<arguments.length)}}),(Ce.Tween=F).prototype={constructor:F,init:function(e,t,n,i,o,s){this.elem=e,this.prop=n,this.easing=o||Ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=s||(Ce.cssNumber[n]?"":"px")},cur:function(){var e=F.propHooks[this.prop];return e&&e.get?e.get(this):F.propHooks._default.get(this)},run:function(e){var t,n=F.propHooks[this.prop];return this.options.duration?this.pos=t=Ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):F.propHooks._default.set(this),this}},F.prototype.init.prototype=F.prototype,F.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
t=Ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
Ce.fx.step[e.prop]?Ce.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[Ce.cssProps[e.prop]]&&!Ce.cssHooks[e.prop]?e.elem[e.prop]=e.now:Ce.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
F.propHooks.scrollTop=F.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},Ce.fx=F.prototype.init,
// Back compat <1.8 extension point
Ce.fx.step={};var Ct,Tt,kt=/^(?:toggle|show|hide)$/,$t=/queueHooks$/,Et,St,jt;Ce.Animation=Ce.extend(U,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return v(n.elem,e,Ye.exec(t),n),n}]},tweener:function(e,t){for(var n,i=0,o=(e=ye(e)?(t=e,["*"]):e.match(Le)).length;i<o;i++)n=e[i],U.tweeners[n]=U.tweeners[n]||[],U.tweeners[n].unshift(t)},prefilters:[V],prefilter:function(e,t){t?U.prefilters.unshift(e):U.prefilters.push(e)}}),Ce.speed=function(e,t,n){var i=e&&"object"==typeof e?Ce.extend({},e):{complete:n||!n&&t||ye(e)&&e,duration:e,easing:n&&t||t&&!ye(t)&&t};
// Go to the end state if fx are off
return Ce.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in Ce.fx.speeds?i.duration=Ce.fx.speeds[i.duration]:i.duration=Ce.fx.speeds._default),
// Normalize opt.queue - true/undefined/null -> "fx"
null!=i.queue&&!0!==i.queue||(i.queue="fx"),
// Queueing
i.old=i.complete,i.complete=function(){ye(i.old)&&i.old.call(this),i.queue&&Ce.dequeue(this,i.queue)},i},Ce.fn.extend({fadeTo:function(e,t,n,i){
// Show any hidden elements after setting opacity to 0
return this.filter(Xe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,e,n,i){var o=Ce.isEmptyObject(t),s=Ce.speed(e,n,i),r=function(){
// Operate on a copy of prop so per-property easing won't be lost
var e=U(this,Ce.extend({},t),s);
// Empty animations, or finishing resolves immediately
(o||Ne.get(this,"finish"))&&e.stop(!0)};return r.finish=r,o||!1===s.queue?this.each(r):this.queue(s.queue,r)},stop:function(o,e,s){var r=function(e){var t=e.stop;delete e.stop,t(s)};return"string"!=typeof o&&(s=e,e=o,o=void 0),e&&!1!==o&&this.queue(o||"fx",[]),this.each(function(){var e=!0,t=null!=o&&o+"queueHooks",n=Ce.timers,i=Ne.get(this);if(t)i[t]&&i[t].stop&&r(i[t]);else for(t in i)i[t]&&i[t].stop&&$t.test(t)&&r(i[t]);for(t=n.length;t--;)n[t].elem!==this||null!=o&&n[t].queue!==o||(n[t].anim.stop(s),e=!1,n.splice(t,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!e&&s||Ce.dequeue(this,o)})},finish:function(r){return!1!==r&&(r=r||"fx"),this.each(function(){var e,t=Ne.get(this),n=t[r+"queue"],i=t[r+"queueHooks"],o=Ce.timers,s=n?n.length:0;
// Enable finishing flag on private data
// Look for any active animations, and finish them
for(t.finish=!0,
// Empty the queue first
Ce.queue(this,r,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===r&&(o[e].anim.stop(!0),o.splice(e,1));
// Look for any animations in the old queue and finish them
for(e=0;e<s;e++)n[e]&&n[e].finish&&n[e].finish.call(this);
// Turn off finishing flag
delete t.finish})}}),Ce.each(["toggle","show","hide"],function(e,i){var o=Ce.fn[i];Ce.fn[i]=function(e,t,n){return null==e||"boolean"==typeof e?o.apply(this,arguments):this.animate(W(i,!0),e,t,n)}}),
// Generate shortcuts for custom animations
Ce.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){Ce.fn[e]=function(e,t,n){return this.animate(i,e,t,n)}}),Ce.timers=[],Ce.fx.tick=function(){var e,t=0,n=Ce.timers;for(Ct=Date.now();t<n.length;t++)
// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||Ce.fx.stop(),Ct=void 0},Ce.fx.timer=function(e){Ce.timers.push(e),Ce.fx.start()},Ce.fx.interval=13,Ce.fx.start=function(){Tt||(Tt=!0,B())},Ce.fx.stop=function(){Tt=null},Ce.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
Ce.fn.delay=function(i,e){return i=Ce.fx&&Ce.fx.speeds[i]||i,e=e||"fx",this.queue(e,function(e,t){var n=T.setTimeout(e,i);t.stop=function(){T.clearTimeout(n)}})},Et=re.createElement("input"),jt=re.createElement("select").appendChild(re.createElement("option")),Et.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
ve.checkOn=""!==Et.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
ve.optSelected=jt.selected,(
// Support: IE <=11 only
// An input loses its value after becoming a radio
Et=re.createElement("input")).value="t",Et.type="radio",ve.radioValue="t"===Et.value;var Ot,_t=Ce.expr.attrHandle;Ce.fn.extend({attr:function(e,t){return He(this,Ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){Ce.removeAttr(this,e)})}}),Ce.extend({attr:function(e,t,n){var i,o,s=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==s&&8!==s&&2!==s)
// Fallback to prop when attributes are not supported
return void 0===e.getAttribute?Ce.prop(e,t,n):(
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===s&&Ce.isXMLDoc(e)||(o=Ce.attrHooks[t.toLowerCase()]||(Ce.expr.match.bool.test(t)?Ot:void 0)),void 0!==n?null===n?void Ce.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:null==(i=Ce.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!ve.radioValue&&"radio"===t&&u(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=t&&t.match(Le);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),
// Hooks for boolean attributes
Ot={set:function(e,t,n){return!1===t?
// Remove boolean attributes when set to false
Ce.removeAttr(e,n):e.setAttribute(n,n),n}},Ce.each(Ce.expr.match.bool.source.match(/\w+/g),function(e,t){var r=_t[t]||Ce.find.attr;_t[t]=function(e,t,n){var i,o,s=t.toLowerCase();return n||(
// Avoid an infinite loop by temporarily removing this function from the getter
o=_t[s],_t[s]=i,i=null!=r(e,t,n)?s:null,_t[s]=o),i}});var zt=/^(?:input|select|textarea|button)$/i,Pt=/^(?:a|area)$/i;Ce.fn.extend({prop:function(e,t){return He(this,Ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[Ce.propFix[e]||e]})}}),Ce.extend({prop:function(e,t,n){var i,o,s=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==s&&8!==s&&2!==s)return 1===s&&Ce.isXMLDoc(e)||(
// Fix name and attach hooks
t=Ce.propFix[t]||t,o=Ce.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=Ce.find.attr(e,"tabindex");return t?parseInt(t,10):zt.test(e.nodeName)||Pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
ve.optSelected||(Ce.propHooks.selected={get:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),Ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Ce.propFix[this.toLowerCase()]=this}),Ce.fn.extend({addClass:function(t){var e,n,i,o,s,r,a,l=0;if(ye(t))return this.each(function(e){Ce(this).addClass(t.call(this,e,Q(this)))});if((e=Z(t)).length)for(;n=this[l++];)if(o=Q(n),i=1===n.nodeType&&" "+K(o)+" "){for(r=0;s=e[r++];)i.indexOf(" "+s+" ")<0&&(i+=s+" ");
// Only assign if different to avoid unneeded rendering.
o!==(a=K(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,o,s,r,a,l=0;if(ye(t))return this.each(function(e){Ce(this).removeClass(t.call(this,e,Q(this)))});if(!arguments.length)return this.attr("class","");if((e=Z(t)).length)for(;n=this[l++];)if(o=Q(n),
// This expression is here for better compressibility (see addClass)
i=1===n.nodeType&&" "+K(o)+" "){for(r=0;s=e[r++];)
// Remove *all* instances
for(;-1<i.indexOf(" "+s+" ");)i=i.replace(" "+s+" "," ");
// Only assign if different to avoid unneeded rendering.
o!==(a=K(i))&&n.setAttribute("class",a)}return this},toggleClass:function(o,t){var s=typeof o,r="string"===s||Array.isArray(o);return"boolean"==typeof t&&r?t?this.addClass(o):this.removeClass(o):ye(o)?this.each(function(e){Ce(this).toggleClass(o.call(this,e,Q(this),t),t)}):this.each(function(){var e,t,n,i;if(r)for(
// Toggle individual class names
t=0,n=Ce(this),i=Z(o);e=i[t++];)
// Check each className given, space separated list
n.hasClass(e)?n.removeClass(e):n.addClass(e);
// Toggle whole class name
else void 0!==o&&"boolean"!==s||((e=Q(this))&&
// Store className if set
Ne.set(this,"__className__",e),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",e||!1===o?"":Ne.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+K(Q(n))+" ").indexOf(t))return!0;return!1}});var Mt=/\r/g;Ce.fn.extend({val:function(n){var i,e,o,t=this[0];return arguments.length?(o=ye(n),this.each(function(e){var t;1===this.nodeType&&(
// Treat null/undefined as ""; convert numbers to string
null==(t=o?n.call(this,e,Ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=Ce.map(t,function(e){return null==e?"":e+""})),
// If set returns undefined, fall back to normal setting
(i=Ce.valHooks[this.type]||Ce.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,t,"value")||(this.value=t))})):t?(i=Ce.valHooks[t.type]||Ce.valHooks[t.nodeName.toLowerCase()])&&"get"in i&&void 0!==(e=i.get(t,"value"))?e:
// Handle most common string cases
"string"==typeof(e=t.value)?e.replace(Mt,""):null==e?"":e:void 0}}),Ce.extend({valHooks:{option:{get:function(e){var t=Ce.find.attr(e,"value");return null!=t?t:
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
K(Ce.text(e))}},select:{get:function(e){var t,n,i,o=e.options,s=e.selectedIndex,r="select-one"===e.type,a=r?null:[],l=r?s+1:o.length;
// Loop through all the selected options
for(i=s<0?l:r?s:0;i<l;i++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=o[i]).selected||i===s)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!u(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=Ce(n).val(),r)return t;
// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){for(var n,i,o=e.options,s=Ce.makeArray(t),r=o.length;r--;)
/* eslint-disable no-cond-assign */
((i=o[r]).selected=-1<Ce.inArray(Ce.valHooks.option.get(i),s))&&(n=!0)
/* eslint-enable no-cond-assign */;
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),s}}}}),
// Radios and checkboxes getter/setter
Ce.each(["radio","checkbox"],function(){Ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<Ce.inArray(Ce(e).val(),t)}},ve.checkOn||(Ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),
// Return jQuery for attributes-only inclusion
ve.focusin="onfocusin"in T;var Lt=/^(?:focusinfocus|focusoutblur)$/,At=function(e){e.stopPropagation()};Ce.extend(Ce.event,{trigger:function(e,t,n,i){var o,s,r,a,l,u,c,d,h=[n||re],f=pe.call(e,"type")?e.type:e,p=pe.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(s=d=r=n=n||re,3!==n.nodeType&&8!==n.nodeType&&!Lt.test(f+Ce.event.triggered)&&(-1<f.indexOf(".")&&(
// Namespaced trigger; create a regexp to match event type in handle()
f=(p=f.split(".")).shift(),p.sort()),l=f.indexOf(":")<0&&"on"+f,
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[Ce.expando]?e:new Ce.Event(f,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=p.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:Ce.makeArray(t,[e]),
// Allow special events to draw outside the lines
c=Ce.event.special[f]||{},i||!c.trigger||!1!==c.trigger.apply(n,t))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!c.noBubble&&!be(n)){for(a=c.delegateType||f,Lt.test(a+f)||(s=s.parentNode);s;s=s.parentNode)h.push(s),r=s;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
r===(n.ownerDocument||re)&&h.push(r.defaultView||r.parentWindow||T)}
// Fire handlers on the event path
for(o=0;(s=h[o++])&&!e.isPropagationStopped();)d=s,e.type=1<o?a:c.bindType||f,(
// jQuery handler
u=(Ne.get(s,"events")||{})[e.type]&&Ne.get(s,"handle"))&&u.apply(s,t),(
// Native handler
u=l&&s[l])&&u.apply&&Re(s)&&(e.result=u.apply(s,t),!1===e.result&&e.preventDefault());return e.type=f,
// If nobody prevented the default action, do it now
i||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(h.pop(),t)||!Re(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
l&&ye(n[f])&&!be(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(r=n[l])&&(n[l]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
Ce.event.triggered=f,e.isPropagationStopped()&&d.addEventListener(f,At),n[f](),e.isPropagationStopped()&&d.removeEventListener(f,At),Ce.event.triggered=void 0,r&&(n[l]=r)),e.result}
// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var i=Ce.extend(new Ce.Event,n,{type:e,isSimulated:!0});Ce.event.trigger(i,null,t)}}),Ce.fn.extend({trigger:function(e,t){return this.each(function(){Ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return Ce.event.trigger(e,t,n,!0)}}),
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
ve.focusin||Ce.each({focus:"focusin",blur:"focusout"},function(n,i){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var o=function(e){Ce.event.simulate(i,e.target,Ce.event.fix(e))};Ce.event.special[i]={setup:function(){var e=this.ownerDocument||this,t=Ne.access(e,i);t||e.addEventListener(n,o,!0),Ne.access(e,i,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Ne.access(e,i)-1;t?Ne.access(e,i,t):(e.removeEventListener(n,o,!0),Ne.remove(e,i))}}});var Dt=T.location,Ht=Date.now(),qt=/\?/;
// Cross-browser xml parsing
Ce.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new T.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||Ce.error("Invalid XML: "+e),t};var It=/\[\]$/,Rt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,Ft=/^(?:input|select|textarea|keygen)/i;Ce.param=function(e,t){var n,i=[],o=function(e,t){
// If value is a function, invoke it and use its return value
var n=ye(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!Ce.isPlainObject(e))
// Serialize the form elements
Ce.each(e,function(){o(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)J(n,e[n],t,o);
// Return the resulting serialization
return i.join("&")},Ce.fn.extend({serialize:function(){return Ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=Ce.prop(this,"elements");return e?Ce.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!Ce(this).is(":disabled")&&Ft.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!Qe.test(e))}).map(function(e,t){var n=Ce(this).val();return null==n?null:Array.isArray(n)?Ce.map(n,function(e){return{name:t.name,value:e.replace(Rt,"\r\n")}}):{name:t.name,value:n.replace(Rt,"\r\n")}}).get()}});var Bt=/%20/g,Gt=/#.*$/,Wt=/([?&])_=[^&]*/,Yt=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
Vt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Xt=/^(?:GET|HEAD)$/,Ut=/^\/\//,
/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Kt={},
/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Qt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Zt="*/".concat("*"),
// Anchor tag for parsing the document origin
Jt=re.createElement("a");Jt.href=Dt.href,Ce.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:Dt.href,type:"GET",isLocal:Vt.test(Dt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":Ce.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?
// Building a settings object
ne(ne(e,Ce.ajaxSettings),t):
// Extending ajaxSettings
ne(Ce.ajaxSettings,e)},ajaxPrefilter:ee(Kt),ajaxTransport:ee(Qt),
// Main method
ajax:function(e,t){
// Callback for when everything is done
function n(e,t,n,i){var o,s,r,a,l,u=t;
// Ignore repeat invocations
p||(p=!0,
// Clear timeout if it exists
f&&T.clearTimeout(f),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
c=void 0,
// Cache response headers
h=i||"",
// Set readyState
C.readyState=0<e?4:0,
// Determine if successful
o=200<=e&&e<300||304===e,
// Get response data
n&&(a=ie(g,C,n)),
// Convert no matter what (that way responseXXX fields are always set)
a=oe(g,a,C,o),
// If successful, handle type chaining
o?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&((l=C.getResponseHeader("Last-Modified"))&&(Ce.lastModified[d]=l),(l=C.getResponseHeader("etag"))&&(Ce.etag[d]=l)),
// if no content
204===e||"HEAD"===g.type?u="nocontent":304===e?u="notmodified":(u=a.state,s=a.data,o=!(r=a.error))):(
// Extract error from statusText and normalize for non-aborts
r=u,!e&&u||(u="error",e<0&&(e=0))),
// Set data for the fake xhr object
C.status=e,C.statusText=(t||u)+"",
// Success/Error
o?b.resolveWith(v,[s,u,C]):b.rejectWith(v,[C,u,r]),
// Status-dependent callbacks
C.statusCode(x),x=void 0,m&&y.trigger(o?"ajaxSuccess":"ajaxError",[C,g,o?s:r]),
// Complete
w.fireWith(v,[C,u]),m&&(y.trigger("ajaxComplete",[C,g]),
// Handle the global AJAX counter
--Ce.active||Ce.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var c,
// URL without anti-cache param
d,
// Response headers
h,i,
// timeout handle
f,
// Url cleanup var
o,
// Request state (becomes false upon send and true upon completion)
p,
// To know if global events are to be dispatched
m,
// Loop variable
s,
// uncached part of the url
r,
// Create the final options object
g=Ce.ajaxSetup({},t),
// Callbacks context
v=g.context||g,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=g.context&&(v.nodeType||v.jquery)?Ce(v):Ce.event,
// Deferreds
b=Ce.Deferred(),w=Ce.Callbacks("once memory"),
// Status-dependent callbacks
x=g.statusCode||{},
// Headers (they are sent all at once)
a={},l={},
// Default abort message
u="canceled",
// Fake xhr
C={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(p){if(!i)for(i={};t=Yt.exec(h);)i[t[1].toLowerCase()]=t[2];t=i[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return p?h:null},
// Caches the header
setRequestHeader:function(e,t){return null==p&&(e=l[e.toLowerCase()]=l[e.toLowerCase()]||e,a[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==p&&(g.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(p)
// Execute the appropriate callbacks
C.always(e[C.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)x[t]=[x[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||u;return c&&c.abort(t),n(0,t),this}};
// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(b.promise(C),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
g.url=((e||g.url||Dt.href)+"").replace(Ut,Dt.protocol+"//"),
// Alias method option to type as per ticket #12004
g.type=t.method||t.type||g.method||g.type,
// Extract dataTypes list
g.dataTypes=(g.dataType||"*").toLowerCase().match(Le)||[""],null==g.crossDomain){o=re.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{o.href=g.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
o.href=o.href,g.crossDomain=Jt.protocol+"//"+Jt.host!=o.protocol+"//"+o.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
g.crossDomain=!0}}
// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=Ce.param(g.data,g.traditional)),
// Apply prefilters
te(Kt,g,t,C),p)return C;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(s in
// Watch for a new set of requests
(m=Ce.event&&g.global)&&0==Ce.active++&&Ce.event.trigger("ajaxStart"),
// Uppercase the type
g.type=g.type.toUpperCase(),
// Determine if request has content
g.hasContent=!Xt.test(g.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
d=g.url.replace(Gt,""),
// More options handling for requests with no content
g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(Bt,"+")):(
// Remember the hash so we can put it back
r=g.url.slice(d.length),
// If data is available and should be processed, append data to url
g.data&&(g.processData||"string"==typeof g.data)&&(d+=(qt.test(d)?"&":"?")+g.data,
// #9682: remove data so that it's not used in an eventual retry
delete g.data),
// Add or update anti-cache param if needed
!1===g.cache&&(d=d.replace(Wt,"$1"),r=(qt.test(d)?"&":"?")+"_="+Ht+++r),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
g.url=d+r),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(Ce.lastModified[d]&&C.setRequestHeader("If-Modified-Since",Ce.lastModified[d]),Ce.etag[d]&&C.setRequestHeader("If-None-Match",Ce.etag[d])),
// Set the correct header, if data is being sent
(g.data&&g.hasContent&&!1!==g.contentType||t.contentType)&&C.setRequestHeader("Content-Type",g.contentType),
// Set the Accepts header for the server, depending on the dataType
C.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Zt+"; q=0.01":""):g.accepts["*"]),g.headers)C.setRequestHeader(s,g.headers[s]);
// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(v,C,g)||p))
// Abort if not done already and return
return C.abort();
// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(u="abort",
// Install callbacks on deferreds
w.add(g.complete),C.done(g.success),C.fail(g.error),
// Get transport
c=te(Qt,g,t,C)){
// If request was aborted inside ajaxSend, stop there
if(C.readyState=1,
// Send global event
m&&y.trigger("ajaxSend",[C,g]),p)return C;
// Timeout
g.async&&0<g.timeout&&(f=T.setTimeout(function(){C.abort("timeout")},g.timeout));try{p=!1,c.send(a,n)}catch(e){
// Rethrow post-completion exceptions
if(p)throw e;
// Propagate others as results
n(-1,e)}}else n(-1,"No Transport");return C},getJSON:function(e,t,n){return Ce.get(e,t,n,"json")},getScript:function(e,t){return Ce.get(e,void 0,t,"script")}}),Ce.each(["get","post"],function(e,o){Ce[o]=function(e,t,n,i){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return ye(t)&&(i=i||n,n=t,t=void 0),Ce.ajax(Ce.extend({url:e,type:o,dataType:i,data:t,success:n},Ce.isPlainObject(e)&&e))}}),Ce._evalUrl=function(e){return Ce.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},Ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(ye(e)&&(e=e.call(this[0])),
// The elements to wrap the target around
t=Ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return ye(n)?this.each(function(e){Ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=Ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=ye(t);return this.each(function(e){Ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){Ce(this).replaceWith(this.childNodes)}),this}}),Ce.expr.pseudos.hidden=function(e){return!Ce.expr.pseudos.visible(e)},Ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},Ce.ajaxSettings.xhr=function(){try{return new T.XMLHttpRequest}catch(e){}};var en={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},tn=Ce.ajaxSettings.xhr();ve.cors=!!tn&&"withCredentials"in tn,ve.ajax=tn=!!tn,Ce.ajaxTransport(function(o){var s,r;
// Cross domain only allowed if supported through XMLHttpRequest
if(ve.cors||tn&&!o.crossDomain)return{send:function(e,t){var n,i=o.xhr();
// Apply custom fields if provided
if(i.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)i[n]=o.xhrFields[n];
// Override mime type if needed
// Set headers
for(n in o.mimeType&&i.overrideMimeType&&i.overrideMimeType(o.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
o.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)i.setRequestHeader(n,e[n]);
// Callback
s=function(e){return function(){s&&(s=r=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===e?i.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof i.status?t(0,"error"):t(
// File: protocol always yields status 0; see #8605, #14207
i.status,i.statusText):t(en[i.status]||i.status,i.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},
// Listen to events
i.onload=s(),r=i.onerror=i.ontimeout=s("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==i.onabort?i.onabort=r:i.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===i.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
T.setTimeout(function(){s&&r()})},
// Create the abort callback
s=s("abort");try{
// Do send the request (this may raise an exception)
i.send(o.hasContent&&o.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(s)throw e}},abort:function(){s&&s()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
Ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),
// Install script dataType
Ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return Ce.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
Ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),
// Bind script tag hack transport
Ce.ajaxTransport("script",function(n){var i,o;
// This transport only deals with cross domain requests
if(n.crossDomain)return{send:function(e,t){i=Ce("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",o=function(e){i.remove(),o=null,e&&t("error"===e.type?404:200,e.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
re.head.appendChild(i[0])},abort:function(){o&&o()}}});var nn=[],on=/(=)\?(?=&|$)|\?\?/,sn;
// Default jsonp settings
Ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=nn.pop()||Ce.expando+"_"+Ht++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
Ce.ajaxPrefilter("json jsonp",function(e,t,n){var i,o,s,r=!1!==e.jsonp&&(on.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(r||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
return i=e.jsonpCallback=ye(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,
// Insert callback into url or form data
r?e[r]=e[r].replace(on,"$1"+i):!1!==e.jsonp&&(e.url+=(qt.test(e.url)?"&":"?")+e.jsonp+"="+i),
// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return s||Ce.error(i+" was not called"),s[0]},
// Force json dataType
e.dataTypes[0]="json",
// Install callback
o=T[i],T[i]=function(){s=arguments},
// Clean-up function (fires after converters)
n.always(function(){
// If previous value didn't exist - remove it
void 0===o?Ce(T).removeProp(i):T[i]=o,
// Save back as free
e[i]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// Save the callback name for future use
nn.push(i)),
// Call if it was a function and we have a response
s&&ye(o)&&o(s[0]),s=o=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
ve.createHTMLDocument=((sn=re.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===sn.childNodes.length),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
Ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:(
// Single tag
"boolean"==typeof t&&(n=t,t=!1),t||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
ve.createHTMLDocument?((
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
i=(t=re.implementation.createHTMLDocument("")).createElement("base")).href=re.location.href,t.head.appendChild(i)):t=re),s=!n&&[],(o=je.exec(e))?[t.createElement(o[1])]:(o=C([e],t,s),s&&s.length&&Ce(s).remove(),Ce.merge([],o.childNodes)));var i,o,s},
/**
 * Load a url into a page
 */
Ce.fn.load=function(e,t,n){var i,o,s,r=this,a=e.indexOf(" ");return-1<a&&(i=K(e.slice(a)),e=e.slice(0,a)),
// If it's a function
ye(t)?(
// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),
// If we have elements to modify, make the request
0<r.length&&Ce.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
s=arguments,r.html(i?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
Ce("<div>").append(Ce.parseHTML(e)).find(i):
// Otherwise use the full result
e)}).always(n&&function(e,t){r.each(function(){n.apply(this,s||[e.responseText,t,e])})}),this},
// Attach a bunch of functions for handling common AJAX events
Ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Ce.fn[t]=function(e){return this.on(t,e)}}),Ce.expr.pseudos.animated=function(t){return Ce.grep(Ce.timers,function(e){return t===e.elem}).length},Ce.offset={setOffset:function(e,t,n){var i,o,s,r,a,l,u,c=Ce.css(e,"position"),d=Ce(e),h={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),a=d.offset(),s=Ce.css(e,"top"),l=Ce.css(e,"left"),
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
o=(u=("absolute"===c||"fixed"===c)&&-1<(s+l).indexOf("auto"))?(r=(i=d.position()).top,i.left):(r=parseFloat(s)||0,parseFloat(l)||0),ye(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,Ce.extend({},a))),null!=t.top&&(h.top=t.top-a.top+r),null!=t.left&&(h.left=t.left-a.left+o),"using"in t?t.using.call(e,h):d.css(h)}},Ce.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(t){
// Preserve chaining for setter
if(arguments.length)return void 0===t?this:this.each(function(e){Ce.offset.setOffset(this,t,e)});var e,n,i=this[0];return i?
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(
// Get document-relative position by adding viewport scroll to viewport-relative gBCR
e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,i=this[0],o={top:0,left:0};
// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===Ce.css(i,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
t=i.getBoundingClientRect();else{for(t=this.offset(),
// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===Ce.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
(o=Ce(e).offset()).top+=Ce.css(e,"borderTopWidth",!0),o.left+=Ce.css(e,"borderLeftWidth",!0))}
// Subtract parent offsets and element margins
return{top:t.top-o.top-Ce.css(i,"marginTop",!0),left:t.left-o.left-Ce.css(i,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===Ce.css(e,"position");)e=e.offsetParent;return e||st})}}),
// Create scrollLeft and scrollTop methods
Ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,o){var s="pageYOffset"===o;Ce.fn[t]=function(e){return He(this,function(e,t,n){
// Coalesce documents and windows
var i;if(be(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===n)return i?i[o]:e[t];i?i.scrollTo(s?i.pageXOffset:n,s?n:i.pageYOffset):e[t]=n},t,e,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
Ce.each(["top","left"],function(e,n){Ce.cssHooks[n]=D(ve.pixelPosition,function(e,t){if(t)
// If curCSS returns percentage, fallback to offset
return t=A(e,n),ft.test(t)?Ce(e).position()[n]+"px":t})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
Ce.each({Height:"height",Width:"width"},function(r,a){Ce.each({padding:"inner"+r,content:a,"":"outer"+r},function(i,s){
// Margin is only for outerHeight, outerWidth
Ce.fn[s]=function(e,t){var n=arguments.length&&(i||"boolean"!=typeof e),o=i||(!0===e||!0===t?"margin":"border");return He(this,function(e,t,n){var i;return be(e)?0===s.indexOf("outer")?e["inner"+r]:e.document.documentElement["client"+r]:
// Get document width or height
9===e.nodeType?(i=e.documentElement,Math.max(e.body["scroll"+r],i["scroll"+r],e.body["offset"+r],i["offset"+r],i["client"+r])):void 0===n?
// Get width or height on the element, requesting but not forcing parseFloat
Ce.css(e,t,o):
// Set width or height on the element
Ce.style(e,t,n,o)},a,n?e:void 0,n)}})}),Ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){
// Handle event binding
Ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),Ce.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),Ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),
// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
Ce.proxy=function(e,t){var n,i,o;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),ye(e))
// Simulated bind
return i=le.call(arguments,2),
// Set the guid of unique handler to the same of original handler, so it can be removed
(o=function(){return e.apply(t||this,i.concat(le.call(arguments)))}).guid=e.guid=e.guid||Ce.guid++,o},Ce.holdReady=function(e){e?Ce.readyWait++:Ce.ready(!0)},Ce.isArray=Array.isArray,Ce.parseJSON=JSON.parse,Ce.nodeName=u,Ce.isFunction=ye,Ce.isWindow=be,Ce.camelCase=f,Ce.type=g,Ce.now=Date.now,Ce.isNumeric=function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=Ce.type(e);return("number"===t||"string"===t)&&
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return Ce});var
// Map over jQuery in case of overwrite
rn=T.jQuery,
// Map over the $ in case of overwrite
an=T.$;return Ce.noConflict=function(e){return T.$===Ce&&(T.$=an),e&&T.jQuery===Ce&&(T.jQuery=rn),Ce},
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
e||(T.jQuery=T.$=Ce),Ce}),
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(e){"function"==typeof define&&define.amd?
// AMD
define(["jquery"],e):"object"==typeof exports?
// CommonJS
e(require("jquery")):
// Browser globals
e(jQuery)}(function(h){function f(e){return v.raw?e:encodeURIComponent(e)}function p(e){return v.raw?e:decodeURIComponent(e)}function m(e){return f(v.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(
// This is a quoted cookie as according to RFC2068, unescape...
e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{
// Replace server-side written pluses with spaces.
// If we can't decode the cookie, ignore it, it's unusable.
// If we can't parse the cookie, ignore it, it's unusable.
return e=decodeURIComponent(e.replace(t," ")),v.json?JSON.parse(e):e}catch(e){}}function g(e,t){var n=v.raw?e:i(e);return h.isFunction(t)?t(n):n}var t=/\+/g,v=h.cookie=function(e,t,n){
// Write
if(void 0!==t&&!h.isFunction(t)){if("number"==typeof(n=h.extend({},v.defaults,n)).expires){var i=n.expires,o=n.expires=new Date;o.setTime(+o+864e5*i)}return document.cookie=[f(e),"=",m(t),n.expires?"; expires="+n.expires.toUTCString():"",// use expires attribute, max-age is not supported by IE
n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}
// Read
for(var s=e?void 0:{},r=document.cookie?document.cookie.split("; "):[],a=0,l=r.length
// To prevent the for loop in the first place assign an empty array
// in case there are no cookies at all. Also prevents odd result when
// calling $.cookie().
;a<l;a++){var u=r[a].split("="),c=p(u.shift()),d=u.join("=");if(e&&e===c){
// If second argument (value) is a function it's a converter...
s=g(d,t);break}
// Prevent storing a cookie that we couldn't decode.
e||void 0===(d=g(d))||(s[c]=d)}return s};v.defaults={},h.removeCookie=function(e,t){return void 0!==h.cookie(e)&&(
// Must not alter options, thus extending a fresh object...
h.cookie(e,"",h.extend({},t,{expires:-1})),!h.cookie(e))}}),function e(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],n);else{var i="object"==typeof exports?n(require("jquery")):n(t.jQuery);for(var o in i)("object"==typeof exports?exports:t)[o]=i[o]}}(window,function(n){/******/
return function(n){
/******/
/******/ // The require function
/******/function o(e){
/******/
/******/ // Check if module is in cache
/******/if(i[e])
/******/return i[e].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var t=i[e]={
/******/i:e,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[e].call(t.exports,t,t.exports,o),
/******/
/******/ // Flag the module as loaded
/******/t.l=!0,t.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/ // webpackBootstrap
/******/ // The module cache
/******/var i={};
/******/
/******/
/******/ // Load entry module and return exports
/******/return o.m=n,
/******/
/******/ // expose the module cache
/******/o.c=i,
/******/
/******/ // define getter function for harmony exports
/******/o.d=function(e,t,n){
/******/o.o(e,t)||
/******/Object.defineProperty(e,t,{enumerable:!0,get:n})
/******/},
/******/
/******/ // define __esModule on exports
/******/o.r=function(e){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/o.t=function(t,e){
/******/if(
/******/1&e&&(t=o(t)),8&e)return t;
/******/if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;
/******/var n=Object.create(null);
/******/
/******/if(o.r(n),
/******/Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));
/******/return n;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=function(t){
/******/var e=t&&t.__esModule?
/******/function e(){return t.default}:
/******/function e(){return t};
/******/
/******/return o.d(e,"a",e),e;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/ // __webpack_public_path__
/******/o.p="",o(o.s=0);
/******/}
/************************************************************************/
/******/({
/***/"./js/entries/foundation.js":
/*!**********************************!*\
  !*** ./js/entries/foundation.js ***!
  \**********************************/
/*! exports provided: Foundation, CoreUtils, Box, onImagesLoaded, Keyboard, MediaQuery, Motion, Nest, Timer, Touch, Triggers, Abide, Accordion, AccordionMenu, Drilldown, Dropdown, DropdownMenu, Equalizer, Interchange, Magellan, OffCanvas, Orbit, ResponsiveMenu, ResponsiveToggle, Reveal, Slider, SmoothScroll, Sticky, Tabs, Toggler, Tooltip, ResponsiveAccordionTabs, default */
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var i=n(/*! jquery */"jquery"),o=/* */n.n(i),s=n(/*! ../foundation.core */"./js/foundation.core.js");
/* harmony import */
/* harmony reexport (safe) */n.d(t,"Foundation",function(){return s.Foundation});
/* harmony import */var r=n(/*! ../foundation.core.utils */"./js/foundation.core.utils.js");
/* harmony reexport (module object) */n.d(t,"CoreUtils",function(){return r});
/* harmony import */var a=n(/*! ../foundation.util.box */"./js/foundation.util.box.js");
/* harmony reexport (safe) */n.d(t,"Box",function(){return a.Box});
/* harmony import */var l=n(/*! ../foundation.util.imageLoader */"./js/foundation.util.imageLoader.js");
/* harmony reexport (safe) */n.d(t,"onImagesLoaded",function(){return l.onImagesLoaded});
/* harmony import */var u=n(/*! ../foundation.util.keyboard */"./js/foundation.util.keyboard.js");
/* harmony reexport (safe) */n.d(t,"Keyboard",function(){return u.Keyboard});
/* harmony import */var c=n(/*! ../foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");
/* harmony reexport (safe) */n.d(t,"MediaQuery",function(){return c.MediaQuery});
/* harmony import */var d=n(/*! ../foundation.util.motion */"./js/foundation.util.motion.js");
/* harmony reexport (safe) */n.d(t,"Motion",function(){return d.Motion});
/* harmony import */var h=n(/*! ../foundation.util.nest */"./js/foundation.util.nest.js");
/* harmony reexport (safe) */n.d(t,"Nest",function(){return h.Nest});
/* harmony import */var f=n(/*! ../foundation.util.timer */"./js/foundation.util.timer.js");
/* harmony reexport (safe) */n.d(t,"Timer",function(){return f.Timer});
/* harmony import */var p=n(/*! ../foundation.util.touch */"./js/foundation.util.touch.js");
/* harmony reexport (safe) */n.d(t,"Touch",function(){return p.Touch});
/* harmony import */var m=n(/*! ../foundation.util.triggers */"./js/foundation.util.triggers.js");
/* harmony reexport (safe) */n.d(t,"Triggers",function(){return m.Triggers});
/* harmony import */var g=n(/*! ../foundation.abide */"./js/foundation.abide.js");
/* harmony reexport (safe) */n.d(t,"Abide",function(){return g.Abide});
/* harmony import */var v=n(/*! ../foundation.accordion */"./js/foundation.accordion.js");
/* harmony reexport (safe) */n.d(t,"Accordion",function(){return v.Accordion});
/* harmony import */var y=n(/*! ../foundation.accordionMenu */"./js/foundation.accordionMenu.js");
/* harmony reexport (safe) */n.d(t,"AccordionMenu",function(){return y.AccordionMenu});
/* harmony import */var b=n(/*! ../foundation.drilldown */"./js/foundation.drilldown.js");
/* harmony reexport (safe) */n.d(t,"Drilldown",function(){return b.Drilldown});
/* harmony import */var w=n(/*! ../foundation.dropdown */"./js/foundation.dropdown.js");
/* harmony reexport (safe) */n.d(t,"Dropdown",function(){return w.Dropdown});
/* harmony import */var x=n(/*! ../foundation.dropdownMenu */"./js/foundation.dropdownMenu.js");
/* harmony reexport (safe) */n.d(t,"DropdownMenu",function(){return x.DropdownMenu});
/* harmony import */var C=n(/*! ../foundation.equalizer */"./js/foundation.equalizer.js");
/* harmony reexport (safe) */n.d(t,"Equalizer",function(){return C.Equalizer});
/* harmony import */var T=n(/*! ../foundation.interchange */"./js/foundation.interchange.js");
/* harmony reexport (safe) */n.d(t,"Interchange",function(){return T.Interchange});
/* harmony import */var k=n(/*! ../foundation.magellan */"./js/foundation.magellan.js");
/* harmony reexport (safe) */n.d(t,"Magellan",function(){return k.Magellan});
/* harmony import */var $=n(/*! ../foundation.offcanvas */"./js/foundation.offcanvas.js");
/* harmony reexport (safe) */n.d(t,"OffCanvas",function(){return $.OffCanvas});
/* harmony import */var E=n(/*! ../foundation.orbit */"./js/foundation.orbit.js");
/* harmony reexport (safe) */n.d(t,"Orbit",function(){return E.Orbit});
/* harmony import */var S=n(/*! ../foundation.responsiveMenu */"./js/foundation.responsiveMenu.js");
/* harmony reexport (safe) */n.d(t,"ResponsiveMenu",function(){return S.ResponsiveMenu});
/* harmony import */var j=n(/*! ../foundation.responsiveToggle */"./js/foundation.responsiveToggle.js");
/* harmony reexport (safe) */n.d(t,"ResponsiveToggle",function(){return j.ResponsiveToggle});
/* harmony import */var O=n(/*! ../foundation.reveal */"./js/foundation.reveal.js");
/* harmony reexport (safe) */n.d(t,"Reveal",function(){return O.Reveal});
/* harmony import */var _=n(/*! ../foundation.slider */"./js/foundation.slider.js");
/* harmony reexport (safe) */n.d(t,"Slider",function(){return _.Slider});
/* harmony import */var z=n(/*! ../foundation.smoothScroll */"./js/foundation.smoothScroll.js");
/* harmony reexport (safe) */n.d(t,"SmoothScroll",function(){return z.SmoothScroll});
/* harmony import */var P=n(/*! ../foundation.sticky */"./js/foundation.sticky.js");
/* harmony reexport (safe) */n.d(t,"Sticky",function(){return P.Sticky});
/* harmony import */var M=n(/*! ../foundation.tabs */"./js/foundation.tabs.js");
/* harmony reexport (safe) */n.d(t,"Tabs",function(){return M.Tabs});
/* harmony import */var L=n(/*! ../foundation.toggler */"./js/foundation.toggler.js");
/* harmony reexport (safe) */n.d(t,"Toggler",function(){return L.Toggler});
/* harmony import */var A=n(/*! ../foundation.tooltip */"./js/foundation.tooltip.js");
/* harmony reexport (safe) */n.d(t,"Tooltip",function(){return A.Tooltip});
/* harmony import */var D=n(/*! ../foundation.responsiveAccordionTabs */"./js/foundation.responsiveAccordionTabs.js");
/* harmony reexport (safe) */n.d(t,"ResponsiveAccordionTabs",function(){return D.ResponsiveAccordionTabs}),s.Foundation.addToJquery(o.a),// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
s.Foundation.rtl=r.rtl,s.Foundation.GetYoDigits=r.GetYoDigits,s.Foundation.transitionend=r.transitionend,s.Foundation.RegExpEscape=r.RegExpEscape,s.Foundation.onLoad=r.onLoad,s.Foundation.Box=a.Box,s.Foundation.onImagesLoaded=l.onImagesLoaded,s.Foundation.Keyboard=u.Keyboard,s.Foundation.MediaQuery=c.MediaQuery,s.Foundation.Motion=d.Motion,s.Foundation.Move=d.Move,s.Foundation.Nest=h.Nest,s.Foundation.Timer=f.Timer,// Touch and Triggers previously were almost purely sede effect driven,
// so no need to add it to Foundation, just init them.
p.Touch.init(o.a),m.Triggers.init(o.a,s.Foundation),c.MediaQuery._init(),s.Foundation.plugin(g.Abide,"Abide"),s.Foundation.plugin(v.Accordion,"Accordion"),s.Foundation.plugin(y.AccordionMenu,"AccordionMenu"),s.Foundation.plugin(b.Drilldown,"Drilldown"),s.Foundation.plugin(w.Dropdown,"Dropdown"),s.Foundation.plugin(x.DropdownMenu,"DropdownMenu"),s.Foundation.plugin(C.Equalizer,"Equalizer"),s.Foundation.plugin(T.Interchange,"Interchange"),s.Foundation.plugin(k.Magellan,"Magellan"),s.Foundation.plugin($.OffCanvas,"OffCanvas"),s.Foundation.plugin(E.Orbit,"Orbit"),s.Foundation.plugin(S.ResponsiveMenu,"ResponsiveMenu"),s.Foundation.plugin(j.ResponsiveToggle,"ResponsiveToggle"),s.Foundation.plugin(O.Reveal,"Reveal"),s.Foundation.plugin(_.Slider,"Slider"),s.Foundation.plugin(z.SmoothScroll,"SmoothScroll"),s.Foundation.plugin(P.Sticky,"Sticky"),s.Foundation.plugin(M.Tabs,"Tabs"),s.Foundation.plugin(L.Toggler,"Toggler"),s.Foundation.plugin(A.Tooltip,"Tooltip"),s.Foundation.plugin(D.ResponsiveAccordionTabs,"ResponsiveAccordionTabs"),
/* harmony default export */t.default=s.Foundation},
/***/"./js/foundation.abide.js":
/*!********************************!*\
  !*** ./js/foundation.abide.js ***!
  \********************************/
/*! exports provided: Abide */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Abide module.
 * @module foundation.abide
 */n.r(t),
/* harmony export (binding) */n.d(t,"Abide",function(){return g});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=
/* */
function(e){function o(){return s(this,o),a(this,u(o).apply(this,arguments))}return c(o,e),r(o,[{key:"_setup",
/**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n
/**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */){var i=1<arguments.length&&void 0!==n?n:{};this.$element=t,this.options=f.a.extend(!0,{},o.defaults,this.$element.data(),i),this.className="Abide",// ie9 back compat
this._init()}},{key:"_init",value:function e(){var n=this;this.$inputs=f.a.merge(// Consider as input to validate:
this.$element.find("input").not("[type=submit]"),// * all input fields expect submit
this.$element.find("textarea, select"));var t=this.$element.find("[data-abide-error]");// Add a11y attributes to all fields
this.options.a11yAttributes&&(this.$inputs.each(function(e,t){return n.addA11yAttributes(f()(t))}),t.each(function(e,t){return n.addGlobalErrorA11yAttributes(f()(t))})),this._events()}
/**
     * Initializes events for Abide.
     * @private
     */},{key:"_events",value:function e(){var t=this;this.$element.off(".abide").on("reset.zf.abide",function(){t.resetForm()}).on("submit.zf.abide",function(){return t.validateForm()}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(e){t.validateInput(f()(e.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(e){t.validateInput(f()(e.target))}),this.options.validateOnBlur&&this.$inputs.off("blur.zf.abide").on("blur.zf.abide",function(e){t.validateInput(f()(e.target))})}
/**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */},{key:"_reflow",value:function e(){this._init()}
/**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"requiredCheck",value:function e(t){if(!t.attr("required"))return!0;var n=!0;switch(t[0].type){case"checkbox":n=t[0].checked;break;case"select":case"select-one":case"select-multiple":var i=t.find("option:selected");i.length&&i.val()||(n=!1);break;default:t.val()&&t.val().length||(n=!1)}return n}
/**
     * Get:
     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @returns {Object} jQuery object with the selector.
     */},{key:"findFormError",value:function e(t){var n=t[0].id,i=t.siblings(this.options.formErrorSelector);return i.length||(i=t.parent().find(this.options.formErrorSelector)),n&&(i=i.add(this.$element.find('[data-form-error-for="'.concat(n,'"]')))),i}
/**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findLabel",value:function e(t){var n=t[0].id,i=this.$element.find('label[for="'.concat(n,'"]'));return i.length?i:t.closest("label")}
/**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findRadioLabels",value:function e(t){var o=this,n=t.map(function(e,t){var n=t.id,i=o.$element.find('label[for="'.concat(n,'"]'));return i.length||(i=f()(t).closest("label")),i[0]});return f()(n)}
/**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     */},{key:"addErrorClasses",value:function e(t){var n=this.findLabel(t),i=this.findFormError(t);n.length&&n.addClass(this.options.labelErrorClass),i.length&&i.addClass(this.options.formErrorClass),t.addClass(this.options.inputErrorClass).attr({"data-invalid":"","aria-invalid":!0})}
/**
     * Adds [for] and [role=alert] attributes to all form error targetting $el,
     * and [aria-describedby] attribute to $el toward the first form error.
     * @param {Object} $el - jQuery object
     */},{key:"addA11yAttributes",value:function e(t){var n=this.findFormError(t),i=n.filter("label"),o=n.first();if(n.length){// Set [aria-describedby] on the input toward the first form error if it is not set
if(void 0===t.attr("aria-describedby")){
// Get the first error ID or create one
var s=o.attr("id");void 0===s&&(s=Object(m.GetYoDigits)(6,"abide-error"),o.attr("id",s)),t.attr("aria-describedby",s)}if(i.filter("[for]").length<i.length){
// Get the input ID or create one
var r=t.attr("id");void 0===r&&(r=Object(m.GetYoDigits)(6,"abide-input"),t.attr("id",r)),// For each label targeting $el, set [for] if it is not set.
i.each(function(e,t){var n=f()(t);void 0===n.attr("for")&&n.attr("for",r)})}// For each error targeting $el, set [role=alert] if it is not set.
n.each(function(e,t){var n=f()(t);void 0===n.attr("role")&&n.attr("role","alert")}).end()}}
/**
     * Adds [aria-live] attribute to the given global form error $el.
     * @param {Object} $el - jQuery object to add the attribute to
     */},{key:"addGlobalErrorA11yAttributes",value:function e(t){void 0===t.attr("aria-live")&&t.attr("aria-live",this.options.a11yErrorLevel)}
/**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */},{key:"removeRadioErrorClasses",value:function e(t){var n=this.$element.find(':radio[name="'.concat(t,'"]')),i=this.findRadioLabels(n),o=this.findFormError(n);i.length&&i.removeClass(this.options.labelErrorClass),o.length&&o.removeClass(this.options.formErrorClass),n.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */},{key:"removeErrorClasses",value:function e(t){
// radios need to clear all of the els
if("radio"==t[0].type)return this.removeRadioErrorClasses(t.attr("name"));var n=this.findLabel(t),i=this.findFormError(t);n.length&&n.removeClass(this.options.labelErrorClass),i.length&&i.removeClass(this.options.formErrorClass),t.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */},{key:"validateInput",value:function e(t){var n=this.requiredCheck(t),i=!1,o=!0,s=t.attr("data-validator"),r=!0;// don't validate ignored inputs or hidden inputs or disabled inputs
if(t.is("[data-abide-ignore]")||t.is('[type="hidden"]')||t.is("[disabled]"))return!0;switch(t[0].type){case"radio":i=this.validateRadio(t.attr("name"));break;case"checkbox":i=n;break;case"select":case"select-one":case"select-multiple":i=n;break;default:i=this.validateText(t)}s&&(o=this.matchValidation(t,s,t.attr("required"))),t.attr("data-equalto")&&(r=this.options.validators.equalTo(t));var a=-1===[n,i,o,r].indexOf(!1),l=(a?"valid":"invalid")+".zf.abide";if(a){
// Re-validate inputs that depend on this one with equalto
var u=this.$element.find('[data-equalto="'.concat(t.attr("id"),'"]'));if(u.length){var c=this;u.each(function(){f()(this).val()&&c.validateInput(f()(this))})}}return this[a?"removeErrorClasses":"addErrorClasses"](t),
/**
       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
       * Trigger includes the DOM element of the input.
       * @event Abide#valid
       * @event Abide#invalid
       */
t.trigger(l,[t]),a}
/**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */},{key:"validateForm",value:function e(){var i=this,t=[],n=this;this.$inputs.each(function(){t.push(n.validateInput(f()(this)))});var o=-1===t.indexOf(!1);return this.$element.find("[data-abide-error]").each(function(e,t){var n=f()(t);// Ensure a11y attributes are set
i.options.a11yAttributes&&i.addGlobalErrorA11yAttributes(n),// Show or hide the error
n.css("display",o?"none":"block")}),
/**
       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
       * Trigger includes the element of the form.
       * @event Abide#formvalid
       * @event Abide#forminvalid
       */
this.$element.trigger((o?"formvalid":"forminvalid")+".zf.abide",[this.$element]),o}
/**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */},{key:"validateText",value:function e(t,n){
// A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
n=n||t.attr("pattern")||t.attr("type");var i=t.val(),o=!1;return i.length?
// If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
o=this.options.patterns.hasOwnProperty(n)?this.options.patterns[n].test(i):n===t.attr("type")||new RegExp(n).test(i):t.prop("required")||(o=!0),o}
/**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */},{key:"validateRadio",value:function e(t){
// If at least one radio in the group has the `required` attribute, the group is considered required
// Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
var n=this.$element.find(':radio[name="'.concat(t,'"]')),i=!1,o=!1;// For the group to be required, at least one radio needs to be required
return n.each(function(e,t){f()(t).attr("required")&&(o=!0)}),o||(i=!0),i||
// For the group to be valid, at least one radio needs to be checked
n.each(function(e,t){f()(t).prop("checked")&&(i=!0)}),i}
/**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */},{key:"matchValidation",value:function e(t,n,i){var o=this,s;return i=!!i,-1===n.split(" ").map(function(e){return o.options.validators[e](t,i,t.parent())}).indexOf(!1)}
/**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */},{key:"resetForm",value:function e(){var t=this.$element,n=this.options;f()(".".concat(n.labelErrorClass),t).not("small").removeClass(n.labelErrorClass),f()(".".concat(n.inputErrorClass),t).not("small").removeClass(n.inputErrorClass),f()("".concat(n.formErrorSelector,".").concat(n.formErrorClass)).removeClass(n.formErrorClass),t.find("[data-abide-error]").css("display","none"),f()(":input",t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({"data-invalid":null,"aria-invalid":null}),f()(":input:radio",t).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),f()(":input:checkbox",t).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),
/**
       * Fires when the form has been reset.
       * @event Abide#formreset
       */
t.trigger("formreset.zf.abide",[t])}
/**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */},{key:"_destroy",value:function e(){var t=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){t.removeErrorClasses(f()(this))})}}]),o}(p.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
g.defaults={
/**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
validateOn:"fieldChange",
/**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
labelErrorClass:"is-invalid-label",
/**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
inputErrorClass:"is-invalid-input",
/**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
formErrorSelector:".form-error",
/**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
formErrorClass:"is-visible",
/**
   * If true, automatically insert when possible:
   * - `[aria-describedby]` on fields
   * - `[role=alert]` on form errors and `[for]` on form error labels
   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
   * @option
   * @type {boolean}
   * @default true
   */
a11yAttributes:!0,
/**
   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
   * Options are: 'assertive', 'polite' and 'off'/null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */
a11yErrorLevel:"assertive",
/**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
liveValidate:!1,
/**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
validateOnBlur:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,
// amex, visa, diners
card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,
// http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
// From CommonRegexJS (@talyssonoc)
// https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
// For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
url:/^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
// abc.de
domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
// YYYY-MM-DD
date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
// HH:MM:SS
time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
// MM/DD/YYYY
month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
// DD/MM/YYYY
day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
// #FFF or #FFFFFF
color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
// Domain || URL
website:{test:function e(t){return g.defaults.patterns.domain.test(t)||g.defaults.patterns.url.test(t)}}},
/**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * required : Boolean value of the required attribute be present or not.
   * parent : The direct parent of the input.
   * @option
   */
validators:{equalTo:function e(t,n,i){return f()("#".concat(t.attr("data-equalto"))).val()===t.val()}}}},
/***/"./js/foundation.accordion.js":
/*!************************************!*\
  !*** ./js/foundation.accordion.js ***!
  \************************************/
/*! exports provided: Accordion */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */n.r(t),
/* harmony export (binding) */n.d(t,"Accordion",function(){return v});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g,v=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Accordion",// ie9 back compat
this._init(),m.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}
/**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */},{key:"_init",value:function e(){var o=this;this._isInitializing=!0,this.$element.attr("role","tablist"),this.$tabs=this.$element.children("[data-accordion-item]"),this.$tabs.each(function(e,t){var n=f()(t),i=n.children("[data-tab-content]"),o=i[0].id||Object(p.GetYoDigits)(6,"accordion"),s=t.id?"".concat(t.id,"-label"):"".concat(o,"-label");n.find("a:first").attr({"aria-controls":o,role:"tab",id:s,"aria-expanded":!1,"aria-selected":!1}),i.attr({role:"tabpanel","aria-labelledby":s,"aria-hidden":!0,id:o})});var t=this.$element.find(".is-active").children("[data-tab-content]");t.length&&(
// Save up the initial hash to return to it later when going back in history
this._initialAnchor=t.prev("a").attr("href"),this._openSingleTab(t)),this._checkDeepLink=function(){var e=window.location.hash;if(!e.length){
// If we are still initializing and there is no anchor, then there is nothing to do
if(o._isInitializing)return;// Otherwise, move to the initial anchor
o._initialAnchor&&(e=o._initialAnchor)}var t=e&&f()(e),n=e&&o.$element.find('[href$="'.concat(e,'"]')),i=!(!t.length||!n.length);// If there is an anchor for the hash, open it (if not already active)
t&&n&&n.length?n.parent("[data-accordion-item]").hasClass("is-active")||o._openSingleTab(t):o._closeAllTabs(),i&&(
// Roll up a little to show the titles
o.options.deepLinkSmudge&&Object(p.onLoad)(f()(window),function(){var e=o.$element.offset();f()("html, body").animate({scrollTop:e.top},o.options.deepLinkSmudgeDelay)})
/**
           * Fires when the plugin has deeplinked at pageload
           * @event Accordion#deeplink
           */,o.$element.trigger("deeplink.zf.accordion",[n,t]))},//use browser to open a tab, if it exists in this tabset
this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}
/**
     * Adds event handlers for items within the accordion.
     * @private
     */},{key:"_events",value:function e(){var o=this;this.$tabs.each(function(){var n=f()(this),i=n.children("[data-tab-content]");i.length&&n.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(e){e.preventDefault(),o.toggle(i)}).on("keydown.zf.accordion",function(t){m.Keyboard.handleKey(t,"Accordion",{toggle:function e(){o.toggle(i)},next:function e(){var t=n.next().find("a").focus();o.options.multiExpand||t.trigger("click.zf.accordion")},previous:function e(){var t=n.prev().find("a").focus();o.options.multiExpand||t.trigger("click.zf.accordion")},handled:function e(){t.preventDefault(),t.stopPropagation()}})})}),this.options.deepLink&&f()(window).on("hashchange",this._checkDeepLink)}
/**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */},{key:"toggle",value:function e(t){if(t.closest("[data-accordion]").is("[disabled]"))console.info("Cannot toggle an accordion that is disabled.");else//either replace or update browser history
if(t.parent().hasClass("is-active")?this.up(t):this.down(t),this.options.deepLink){var n=t.prev("a").attr("href");this.options.updateHistory?history.pushState({},"",n):history.replaceState({},"",n)}}
/**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     */},{key:"down",value:function e(t){t.closest("[data-accordion]").is("[disabled]")?console.info("Cannot call down on an accordion that is disabled."):this.options.multiExpand?this._openTab(t):this._openSingleTab(t)}
/**
     * Closes the tab defined by `$target`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */},{key:"up",value:function e(t){if(this.$element.is("[disabled]"))console.info("Cannot call up on an accordion that is disabled.");else{// Don't close the item if it is already closed
var n=t.parent();if(n.hasClass("is-active")){// Don't close the item if there is no other active item (unless with `allowAllClosed`)
var i=n.siblings();(this.options.allowAllClosed||i.hasClass("is-active"))&&this._closeTab(t)}}}
/**
     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @function
     * @private
     */},{key:"_openSingleTab",value:function e(t){
// Close all the others active tabs.
var n=this.$element.children(".is-active").children("[data-tab-content]");n.length&&this._closeTab(n.not(t)),// Then open the target.
this._openTab(t)}
/**
     * Opens the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     * @private
     */},{key:"_openTab",value:function e(t){var n=this,i=t.parent(),o=t.attr("aria-labelledby");t.attr("aria-hidden",!1),i.addClass("is-active"),f()("#".concat(o)).attr({"aria-expanded":!0,"aria-selected":!0}),t.slideDown(this.options.slideSpeed,function(){
/**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
n.$element.trigger("down.zf.accordion",[t])})}
/**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeTab",value:function e(t){var n=this,i=t.parent(),o=t.attr("aria-labelledby");t.attr("aria-hidden",!0),i.removeClass("is-active"),f()("#".concat(o)).attr({"aria-expanded":!1,"aria-selected":!1}),t.slideUp(this.options.slideSpeed,function(){
/**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
n.$element.trigger("up.zf.accordion",[t])})}
/**
     * Closes all active tabs
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeAllTabs",value:function e(){var t=this.$element.children(".is-active").children("[data-tab-content]");t.length&&this._closeTab(t)}
/**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */},{key:"_destroy",value:function e(){this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),this.options.deepLink&&f()(window).off("hashchange",this._checkDeepLink)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */v.defaults={
/**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,
/**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
multiExpand:!1,
/**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
allowAllClosed:!1,
/**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:!1,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:!1}},
/***/"./js/foundation.accordionMenu.js":
/*!****************************************!*\
  !*** ./js/foundation.accordionMenu.js ***!
  \****************************************/
/*! exports provided: AccordionMenu */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */n.r(t),
/* harmony export (binding) */n.d(t,"AccordionMenu",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v,y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="AccordionMenu",// ie9 back compat
this._init(),p.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll"})}
/**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */},{key:"_init",value:function e(){m.Nest.Feather(this.$element,"accordion");var r=this;this.$element.find("[data-submenu]").not(".is-active").slideUp(0),//.find('a').css('padding-left', '1rem');
this.$element.attr({role:"tree","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".is-accordion-submenu-parent"),this.$menuLinks.each(function(){var e=this.id||Object(g.GetYoDigits)(6,"acc-menu-link"),t=f()(this),n=t.children("[data-submenu]"),i=n[0].id||Object(g.GetYoDigits)(6,"acc-menu"),o=n.hasClass("is-active"),s;r.options.parentLink&&t.children("a").clone().prependTo(n).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');r.options.submenuToggle?(t.addClass("has-submenu-toggle"),t.children("a").after('<button id="'+e+'" class="submenu-toggle" aria-controls="'+i+'" aria-expanded="'+o+'" title="'+r.options.submenuToggleText+'"><span class="submenu-toggle-text">'+r.options.submenuToggleText+"</span></button>")):t.attr({"aria-controls":i,"aria-expanded":o,id:e}),n.attr({"aria-labelledby":e,"aria-hidden":!o,role:"group",id:i})}),this.$element.find("li").attr({role:"treeitem"});var t=this.$element.find(".is-active");if(t.length){var r=this;t.each(function(){r.down(f()(this))})}this._events()}
/**
     * Adds event handlers for items within the menu.
     * @private
     */},{key:"_events",value:function e(){var a=this;this.$element.find("li").each(function(){var t=f()(this).children("[data-submenu]");t.length&&(a.options.submenuToggle?f()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(e){a.toggle(t)}):f()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(e){e.preventDefault(),a.toggle(t)}))}).on("keydown.zf.accordionmenu",function(n){var t=f()(this),i=t.parent("ul").children("li"),o,s,r=t.children("[data-submenu]");i.each(function(e){if(f()(this).is(t))return o=i.eq(Math.max(0,e-1)).find("a").first(),s=i.eq(Math.min(e+1,i.length-1)).find("a").first(),f()(this).children("[data-submenu]:visible").length&&(
// has open sub menu
s=t.find("li:first-child").find("a").first()),f()(this).is(":first-child")?
// is first element of sub menu
o=t.parents("li").first().find("a").first():o.parents("li").first().children("[data-submenu]:visible").length&&(
// if previous element has open sub menu
o=o.parents("li").find("li:last-child").find("a").first()),void(f()(this).is(":last-child")&&(
// is last element of sub menu
s=t.parents("li").first().next("li").find("a").first()))}),p.Keyboard.handleKey(n,"AccordionMenu",{open:function e(){r.is(":hidden")&&(a.down(r),r.find("li").first().find("a").first().focus())},close:function e(){r.length&&!r.is(":hidden")?
// close active sub of this item
a.up(r):t.parent("[data-submenu]").length&&(
// close currently open sub
a.up(t.parent("[data-submenu]")),t.parents("li").first().find("a").first().focus())},up:function e(){return o.focus(),!0},down:function e(){return s.focus(),!0},toggle:function e(){return!a.options.submenuToggle&&(t.children("[data-submenu]").length?(a.toggle(t.children("[data-submenu]")),!0):void 0)},closeAll:function e(){a.hideAll()},handled:function e(t){t&&n.preventDefault(),n.stopImmediatePropagation()}})})}
/**
     * Closes all panes of the menu.
     * @function
     */},{key:"hideAll",value:function e(){this.up(this.$element.find("[data-submenu]"))}
/**
     * Opens all panes of the menu.
     * @function
     */},{key:"showAll",value:function e(){this.down(this.$element.find("[data-submenu]"))}
/**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */},{key:"toggle",value:function e(t){t.is(":animated")||(t.is(":hidden")?this.down(t):this.up(t))}
/**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */},{key:"down",value:function e(t){var n=this;this.options.multiOpen||this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))),t.addClass("is-active").attr({"aria-hidden":!1}),this.options.submenuToggle?t.prev(".submenu-toggle").attr({"aria-expanded":!0}):t.parent(".is-accordion-submenu-parent").attr({"aria-expanded":!0}),t.slideDown(this.options.slideSpeed,function(){
/**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */
n.$element.trigger("down.zf.accordionMenu",[t])})}
/**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */},{key:"up",value:function e(t){var n=this,i=t.find("[data-submenu]"),o=t.add(i);i.slideUp(0),o.removeClass("is-active").attr("aria-hidden",!0),this.options.submenuToggle?o.prev(".submenu-toggle").attr("aria-expanded",!1):o.parent(".is-accordion-submenu-parent").attr("aria-expanded",!1),t.slideUp(this.options.slideSpeed,function(){
/**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
n.$element.trigger("up.zf.accordionMenu",[t])})}
/**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */},{key:"_destroy",value:function e(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),this.$element.find("[data-is-parent-link]").detach(),this.options.submenuToggle&&(this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"),this.$element.find(".submenu-toggle").remove()),m.Nest.Burn(this.$element,"accordion")}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */y.defaults={
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:!1,
/**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,
/**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
submenuToggle:!1,
/**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
submenuToggleText:"Toggle menu",
/**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
multiOpen:!0}},
/***/"./js/foundation.core.js":
/*!*******************************!*\
  !*** ./js/foundation.core.js ***!
  \*******************************/
/*! exports provided: Foundation */
/***/function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}// Polyfill to get the name of a function in IE9
function l(e){if(void 0!==Function.prototype.name)return void 0===e.prototype?e.constructor.name:e.prototype.constructor.name;var t,n=/function\s([^(]{1,})\(/.exec(e.toString());return n&&1<n.length?n[1].trim():""}function r(e){return"true"===e||"false"!==e&&(isNaN(1*e)?e:parseFloat(e))}// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function u(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Foundation",function(){return h});
/* harmony import */var i=n(/*! jquery */"jquery"),c=/* */n.n(i),o=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),d=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),s,h={version:"6.5.1",
/**
   * Stores initialized plugins.
   */
_plugins:{},
/**
   * Stores generated unique ids for plugin instances
   */
_uuids:[],
/**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
plugin:function e(t,n){
// Object key to use when adding to global Foundation object
// Examples: Foundation.Reveal, Foundation.OffCanvas
var i=n||l(t),o=u(i);// Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
// Examples: data-reveal, data-off-canvas
// Add to the Foundation object and the plugins list (for reflowing)
this._plugins[o]=this[i]=t},
/**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
registerPlugin:function e(t,n){var i=n?u(n):l(t.constructor).toLowerCase();t.uuid=Object(o.GetYoDigits)(6,i),t.$element.attr("data-".concat(i))||t.$element.attr("data-".concat(i),t.uuid),t.$element.data("zfPlugin")||t.$element.data("zfPlugin",t)
/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */,t.$element.trigger("init.zf.".concat(i)),this._uuids.push(t.uuid)},
/**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
unregisterPlugin:function e(t){var n=u(l(t.$element.data("zfPlugin").constructor));for(var i in this._uuids.splice(this._uuids.indexOf(t.uuid),1),t.$element.removeAttr("data-".concat(n)).removeData("zfPlugin")
/**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */.trigger("destroyed.zf.".concat(n)),t)t[i]=null;//clean up script to prep for garbage collection.
},
/**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
reInit:function e(t){var n=t instanceof c.a;try{if(n)t.each(function(){c()(this).data("zfPlugin")._init()});else{var i=a(t),o=this,s;({object:function e(t){t.forEach(function(e){e=u(e),c()("[data-"+e+"]").foundation("_init")})},string:function e(){t=u(t),c()("[data-"+t+"]").foundation("_init")},undefined:function e(){this.object(Object.keys(o._plugins))}})[i](t)}}catch(e){console.error(e)}finally{return t}},
/**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
reflow:function e(i,t){
// If plugins is undefined, just grab everything
void 0===t?t=Object.keys(this._plugins):"string"==typeof t&&(t=[t]);var s=this;// Iterate through each plugin
c.a.each(t,function(e,n){
// Get the current plugin
var o=s._plugins[n],t;// Localize the search to all elements inside elem, as well as elem itself, unless elem === document
// For each plugin found, initialize it
c()(i).find("[data-"+n+"]").addBack("[data-"+n+"]").each(function(){var e=c()(this),i={};// Don't double-dip on plugins
if(e.data("zfPlugin"))console.warn("Tried to initialize "+n+" on an element that already has a Foundation plugin.");else{if(e.attr("data-options"))var t=e.attr("data-options").split(";").forEach(function(e,t){var n=e.split(":").map(function(e){return e.trim()});n[0]&&(i[n[0]]=r(n[1]))});try{e.data("zfPlugin",new o(c()(this),i))}catch(e){console.error(e)}finally{return}}})})},getFnName:l,addToJquery:function e(r){
// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
/**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
var t=function e(n){var t=a(n),i=r(".no-js");if(i.length&&i.removeClass("no-js"),"undefined"===t)
//needs to initialize the Foundation object, or an individual plugin.
d.MediaQuery._init(),h.reflow(this);else{if("string"!==t)
//error for invalid argument type
throw new TypeError("We're sorry, ".concat(t," is not a valid parameter. You must use a string representing the method you wish to invoke."));
//an individual method to invoke on a plugin or group of plugins
var o=Array.prototype.slice.call(arguments,1),s=this.data("zfPlugin");//collect all the arguments, if necessary
//determine the class of plugin
if(void 0===s||void 0===s[n])
//error for no class or no method
throw new ReferenceError("We're sorry, '"+n+"' is not an available method for "+(s?l(s):"this element")+".");
//make sure both the class and method exist
1===this.length?
//if there's only one, call it directly.
s[n].apply(s,o):this.each(function(e,t){
//otherwise loop through the jQuery collection and invoke the method on each
s[n].apply(r(t).data("zfPlugin"),o)})}return this};return r.fn.foundation=t,r}};
/* harmony import */h.util={
/**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
throttle:function e(n,i){var o=null;return function(){var e=this,t=arguments;null===o&&(o=setTimeout(function(){n.apply(e,t),o=null},i))}}},window.Foundation=h,// Polyfill for requestAnimationFrame
function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var e=["webkit","moz"],t=0;t<e.length&&!window.requestAnimationFrame;++t){var n=e[t];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(e){var t=Date.now(),n=Math.max(i+16,t);return setTimeout(function(){e(i=n)},n-t)},window.cancelAnimationFrame=clearTimeout}
/**
   * Polyfill for performance.now, required by rAF
   */window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function e(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)
// closest thing possible to the ECMAScript 5
// internal IsCallable function
throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),i=this,o=function e(){},e=function e(){return i.apply(this instanceof o?this:t,n.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(
// native functions don't have a prototype
o.prototype=this.prototype),e.prototype=new o,e})},
/***/"./js/foundation.core.plugin.js":
/*!**************************************!*\
  !*** ./js/foundation.core.plugin.js ***!
  \**************************************/
/*! exports provided: Plugin */
/***/function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}
// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function r(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function a(e){return void 0!==e.constructor.name?r(e.constructor.name):r(e.className)}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Plugin",function(){return d});
/* harmony import */var l=n(/*! jquery */"jquery"),u=/* */n.n(l),c=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),d=
/* */
function(){function i(e,t){o(this,i),this._setup(e,t);var n=a(this);this.uuid=Object(c.GetYoDigits)(6,n),this.$element.attr("data-".concat(n))||this.$element.attr("data-".concat(n),this.uuid),this.$element.data("zfPlugin")||this.$element.data("zfPlugin",this)
/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */,this.$element.trigger("init.zf.".concat(n))}return s(i,[{key:"destroy",value:function e(){this._destroy();var t=a(this);for(var n in this.$element.removeAttr("data-".concat(t)).removeData("zfPlugin")
/**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */.trigger("destroyed.zf.".concat(t)),this)this[n]=null;//clean up script to prep for garbage collection.
}}]),i}();
/* harmony import */},
/***/"./js/foundation.core.utils.js":
/*!*************************************!*\
  !*** ./js/foundation.core.utils.js ***!
  \*************************************/
/*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */
/***/function(e,t,n){"use strict";
// Core Foundation Utilities, utilized in a number of places.
/**
 * Returns a boolean for RTL support
 */
function i(){return"rtl"===c()("html").attr("dir")}
/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */function o(e,t){return e=e||6,Math.round(Math.pow(36,e+1)-Math.random()*Math.pow(36,e)).toString(36).slice(1)+(t?"-".concat(t):"")}
/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */function s(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function r(e){var t={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},n=document.createElement("div"),i;for(var o in t)void 0!==n.style[o]&&(i=t[o]);return i||(i=setTimeout(function(){e.triggerHandler("transitionend",[e])},1),"transitionend")}
/**
 * Return an event type to listen for window load.
 *
 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
 * If `handler` is passed, attach it to the event on `$elem`.
 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */function a(t,e){var n="complete"===document.readyState,i=(n?"_didLoad":"load")+".zf.util.onLoad",o=function e(){return t.triggerHandler(i)};return t&&(e&&t.one(i,e),n?setTimeout(o):c()(window).one("load",o)),i}
/**
 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
 */function l(r,e
/***/){var t=1<arguments.length&&void 0!==e?e:{},n=t.ignoreLeaveWindow,a=void 0!==n&&n,i=t.ignoreReappear,l=void 0!==i&&i;return function e(n){for(var t=arguments.length,i=new Array(1<t?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];var s=r.bind.apply(r,[this,n].concat(i));// The mouse left: call the given callback if the mouse entered elsewhere
if(null!==n.relatedTarget)return s();// Otherwise, check if the mouse actually left the window.
// In firefox if the user switched between windows, the window sill have the focus by the time
// the event is triggered. We have to debounce the event to test this case.
setTimeout(function e(){if(!a&&document.hasFocus&&!document.hasFocus())return s();// Otherwise, wait for the mouse to reeapear outside of the element,
l||c()(document).one("mouseenter",function e(t){c()(n.currentTarget).has(t.target).length||(
// Fill where the mouse finally entered.
n.relatedTarget=t.target,s())})},0)}}n.r(t),
/* harmony export (binding) */n.d(t,"rtl",function(){return i}),
/* harmony export (binding) */n.d(t,"GetYoDigits",function(){return o}),
/* harmony export (binding) */n.d(t,"RegExpEscape",function(){return s}),
/* harmony export (binding) */n.d(t,"transitionend",function(){return r}),
/* harmony export (binding) */n.d(t,"onLoad",function(){return a}),
/* harmony export (binding) */n.d(t,"ignoreMousedisappear",function(){return l});
/* harmony import */var u=n(/*! jquery */"jquery"),c=/* */n.n(u);
/* harmony import */},
/***/"./js/foundation.drilldown.js":
/*!************************************!*\
  !*** ./js/foundation.drilldown.js ***!
  \************************************/
/*! exports provided: Drilldown */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */n.r(t),
/* harmony export (binding) */n.d(t,"Drilldown",function(){return b});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),y,b=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Drilldown",// ie9 back compat
this._init(),p.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}
/**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */},{key:"_init",value:function e(){m.Nest.Feather(this.$element,"drilldown"),this.options.autoApplyClass&&this.$element.addClass("drilldown"),this.$element.attr({role:"tree","aria-multiselectable":!1}),this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a"),this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role","group"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","treeitem").find("a"),// Set the main menu as current by default (unless a submenu is selected)
// Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu
this.$currentMenu=this.$element,this.$element.attr("data-mutate",this.$element.attr("data-drilldown")||Object(g.GetYoDigits)(6,"drilldown")),this._prepareMenu(),this._registerEvents(),this._keyboardEvents()}
/**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */},{key:"_prepareMenu",value:function e(){var n=this;// if(!this.options.holdOpen){
//   this._menuLinkEvents();
// }
this.$submenuAnchors.each(function(){var e=f()(this),t=e.parent();n.options.parentLink&&e.clone().prependTo(t.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'),e.data("savedHref",e.attr("href")).removeAttr("href").attr("tabindex",0),e.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"group"}),n._events(e)}),this.$submenus.each(function(){var e=f()(this),t;if(!e.find(".js-drilldown-back").length)switch(n.options.backButtonPosition){case"bottom":e.append(n.options.backButton);break;case"top":e.prepend(n.options.backButton);break;default:console.error("Unsupported backButtonPosition value '"+n.options.backButtonPosition+"'")}n._back(e)}),this.$submenus.addClass("invisible"),this.options.autoHeight||this.$submenus.addClass("drilldown-submenu-cover-previous"),// create a wrapper on element if it doesn't exist.
this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=f()(this.options.wrapper).addClass("is-drilldown"),this.options.animateHeight&&this.$wrapper.addClass("animate-height"),this.$element.wrap(this.$wrapper)),// set wrapper
this.$wrapper=this.$element.parent(),this.$wrapper.css(this._getMaxDims())}},{key:"_resize",value:function e(){this.$wrapper.css({"max-width":"none","min-height":"none"}),// _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths
this.$wrapper.css(this._getMaxDims())}
/**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */},{key:"_events",value:function e(n){var i=this;n.off("click.zf.drilldown").on("click.zf.drilldown",function(e){if(f()(e.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(e.stopImmediatePropagation(),e.preventDefault()),// if(e.target !== e.currentTarget.firstElementChild){
//   return false;
// }
i._show(n.parent("li")),i.options.closeOnClick){var t=f()("body");t.off(".zf.drilldown").on("click.zf.drilldown",function(e){e.target===i.$element[0]||f.a.contains(i.$element[0],e.target)||(e.preventDefault(),i._hideAll(),t.off(".zf.drilldown"))})}})}
/**
     * Adds event handlers to the menu element.
     * @function
     * @private
     */},{key:"_registerEvents",value:function e(){this.options.scrollTop&&(this._bindHandler=this._scrollTop.bind(this),this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown",this._bindHandler)),this.$element.on("mutateme.zf.trigger",this._resize.bind(this))}
/**
     * Scroll to Top of Element or data-scroll-top-element
     * @function
     * @fires Drilldown#scrollme
     */},{key:"_scrollTop",value:function e(){var t=this,n=""!=t.options.scrollTopElement?f()(t.options.scrollTopElement):t.$element,i=parseInt(n.offset().top+t.options.scrollTopOffset,10);f()("html, body").stop(!0).animate({scrollTop:i},t.options.animationDuration,t.options.animationEasing,function(){
/**
          * Fires after the menu has scrolled
          * @event Drilldown#scrollme
          */
this===f()("html")[0]&&t.$element.trigger("scrollme.zf.drilldown")})}
/**
     * Adds keydown event listener to `li`'s in the menu.
     * @private
     */},{key:"_keyboardEvents",value:function e(){var r=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown",function(n){var t=f()(this),i=t.parent("li").parent("ul").children("li").children("a"),o,s;i.each(function(e){if(f()(this).is(t))return o=i.eq(Math.max(0,e-1)),void(s=i.eq(Math.min(e+1,i.length-1)))}),p.Keyboard.handleKey(n,"Drilldown",{next:function e(){if(t.is(r.$submenuAnchors))return r._show(t.parent("li")),t.parent("li").one(Object(g.transitionend)(t),function(){t.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0},previous:function e(){return r._hide(t.parent("li").parent("ul")),t.parent("li").parent("ul").one(Object(g.transitionend)(t),function(){setTimeout(function(){t.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0},up:function e(){// Don't tap focus on first element in root ul
return o.focus(),!t.is(r.$element.find("> li:first-child > a"))},down:function e(){// Don't tap focus on last element in root ul
return s.focus(),!t.is(r.$element.find("> li:last-child > a"))},close:function e(){
// Don't close on element in root ul
t.is(r.$element.find("> li > a"))||(r._hide(t.parent().parent()),t.parent().parent().siblings("a").focus())},open:function e(){return(!r.options.parentLink||!t.attr("href"))&&(t.is(r.$menuItems)?t.is(r.$submenuAnchors)?(
// Sub menu item
r._show(t.parent("li")),t.parent("li").one(Object(g.transitionend)(t),function(){t.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0):void 0:(
// not menu item means back button
r._hide(t.parent("li").parent("ul")),t.parent("li").parent("ul").one(Object(g.transitionend)(t),function(){setTimeout(function(){t.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0))},handled:function e(t){t&&n.preventDefault(),n.stopImmediatePropagation()}})})}
/**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#closed
     */},{key:"_hideAll",value:function e(){var t=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");this.options.autoHeight&&this.$wrapper.css({height:t.parent().closest("ul").data("calcHeight")}),t.one(Object(g.transitionend)(t),function(e){t.removeClass("is-active is-closing")}),
/**
       * Fires when the menu is fully closed.
       * @event Drilldown#closed
       */
this.$element.trigger("closed.zf.drilldown")}
/**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */},{key:"_back",value:function e(n){var i=this;n.off("click.zf.drilldown"),n.children(".js-drilldown-back").on("click.zf.drilldown",function(e){e.stopImmediatePropagation(),// console.log('mouseup on back');
i._hide(n);// If there is a parent submenu, call show
var t=n.parent("li").parent("ul").parent("li");t.length&&i._show(t)})}
/**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */},{key:"_menuLinkEvents",value:function e(){var t=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(e){
// e.stopImmediatePropagation();
setTimeout(function(){t._hideAll()},0)})}
/**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setShowSubMenuClasses",value:function e(t,n){t.addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),t.parent("li").attr("aria-expanded",!0),!0===n&&this.$element.trigger("open.zf.drilldown",[t])}
/**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setHideSubMenuClasses",value:function e(t,n){t.removeClass("is-active").addClass("invisible").attr("aria-hidden",!0),t.parent("li").attr("aria-expanded",!1),!0===n&&t.trigger("hide.zf.drilldown",[t])}
/**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */},{key:"_showMenu",value:function e(n,i){var o=this,t;// Reset drilldown
// If target menu is root, focus first link & exit
if(this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each(function(e){o._setHideSubMenuClasses(f()(this))}),(// Save the menu as the currently displayed one.
this.$currentMenu=n).is("[data-drilldown]"))return!0===i&&n.find('li[role="treeitem"] > a').first().focus(),void(this.options.autoHeight&&this.$wrapper.css("height",n.data("calcHeight")));// Find all submenus on way to root incl. the element itself
var s=n.children().first().parentsUntil("[data-drilldown]","[data-submenu]");// Open target menu and all submenus on its way to root
s.each(function(e){
// Update height of first child (target menu) if autoHeight option true
0===e&&o.options.autoHeight&&o.$wrapper.css("height",f()(this).data("calcHeight"));var t=e==s.length-1;// Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
// Last child makes sure the event gets always triggered even if going through several menus
!0===t&&f()(this).one(Object(g.transitionend)(f()(this)),function(){!0===i&&n.find('li[role="treeitem"] > a').first().focus()}),o._setShowSubMenuClasses(f()(this),t)})}
/**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
     */},{key:"_show",value:function e(t){var n=t.children("[data-submenu]");t.attr("aria-expanded",!0),(this.$currentMenu=n).addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),this.options.autoHeight&&this.$wrapper.css({height:n.data("calcHeight")})
/**
       * Fires when the submenu has opened.
       * @event Drilldown#open
       */,this.$element.trigger("open.zf.drilldown",[t])}
/**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
     */},{key:"_hide",value:function e(t){this.options.autoHeight&&this.$wrapper.css({height:t.parent().closest("ul").data("calcHeight")});var n=this;t.parent("li").attr("aria-expanded",!1),t.attr("aria-hidden",!0),t.addClass("is-closing").one(Object(g.transitionend)(t),function(){t.removeClass("is-active is-closing"),t.blur().addClass("invisible")}),
/**
       * Fires when the submenu has closed.
       * @event Drilldown#hide
       */
t.trigger("hide.zf.drilldown",[t])}
/**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */},{key:"_getMaxDims",value:function e(){var n=0,t={},i=this;// Recalculate menu heights and total max height
return this.$submenus.add(this.$element).each(function(){var e=f()(this).children("li").length,t=v.Box.GetDimensions(this).height;n=n<t?t:n,i.options.autoHeight&&f()(this).data("calcHeight",t)}),this.options.autoHeight?t.height=this.$currentMenu.data("calcHeight"):t["min-height"]="".concat(n,"px"),t["max-width"]="".concat(this.$element[0].getBoundingClientRect().width,"px"),t}
/**
     * Destroys the Drilldown Menu
     * @function
     */},{key:"_destroy",value:function e(){this.options.scrollTop&&this.$element.off(".zf.drilldown",this._bindHandler),this._hideAll(),this.$element.off("mutateme.zf.trigger"),m.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),this.$submenuAnchors.each(function(){f()(this).off(".zf.drilldown")}),this.$element.find("[data-is-parent-link]").detach(),this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"),this.$element.find("a").each(function(){var e=f()(this);e.removeAttr("tabindex"),e.data("savedHref")&&e.attr("href",e.data("savedHref")).removeData("savedHref")})}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */b.defaults={
/**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolian}
   * @default true
   */
autoApplyClass:!0,
/**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
/**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
backButtonPosition:"top",
/**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
wrapper:"<div></div>",
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:!1,
/**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:!1,
/**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
autoHeight:!1,
/**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
animateHeight:!1,
/**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
scrollTop:!1,
/**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
scrollTopElement:"",
/**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
scrollTopOffset:0,
/**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
animationEasing:"swing"}},
/***/"./js/foundation.dropdown.js":
/*!***********************************!*\
  !*** ./js/foundation.dropdown.js ***!
  \***********************************/
/*! exports provided: Dropdown */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function e(t,n,i){var o=c(t,n);if(o){var s=Object.getOwnPropertyDescriptor(o,n);return s.get?s.get.call(i):s.value}})(e,t,n||e)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */n.r(t),
/* harmony export (binding) */n.d(t,"Dropdown",function(){return w});
/* harmony import */var p=n(/*! jquery */"jquery"),m=/* */n.n(p),g=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),v=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),y=n(/*! ./foundation.positionable */"./js/foundation.positionable.js"),b=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),w=
/* */
function(e){function i(){return o(this,i),a(this,d(i).apply(this,arguments))}return h(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=m.a.extend({},i.defaults,this.$element.data(),n),this.className="Dropdown",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
b.Triggers.init(m.a),this._init(),g.Keyboard.register("Dropdown",{ENTER:"toggle",SPACE:"toggle",ESCAPE:"close"})}
/**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */},{key:"_init",value:function e(){var t=this.$element.attr("id");this.$anchors=m()('[data-toggle="'.concat(t,'"]')).length?m()('[data-toggle="'.concat(t,'"]')):m()('[data-open="'.concat(t,'"]')),this.$anchors.attr({"aria-controls":t,"data-is-focus":!1,"data-yeti-box":t,"aria-haspopup":!0,"aria-expanded":!1}),this._setCurrentAnchor(this.$anchors.first()),this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null,// Set [aria-labelledby] on the Dropdown if it is not set
void 0===this.$element.attr("aria-labelledby")&&(
// Get the anchor ID or create one
void 0===this.$currentAnchor.attr("id")&&this.$currentAnchor.attr("id",Object(v.GetYoDigits)(6,"dd-anchor")),this.$element.attr("aria-labelledby",this.$currentAnchor.attr("id"))),this.$element.attr({"aria-hidden":"true","data-yeti-box":t,"data-resize":t}),u(d(i.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function e(){
// handle legacy classnames
var t=this.$element[0].className.match(/(top|left|right|bottom)/g);return t?t[0]:"bottom"}},{key:"_getDefaultAlignment",value:function e(){
// handle legacy float approach
var t=/float-(\S+)/.exec(this.$currentAnchor.attr("class"));return t?t[1]:u(d(i.prototype),"_getDefaultAlignment",this).call(this)}
/**
     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */},{key:"_setPosition",value:function e(){this.$element.removeClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment)),u(d(i.prototype),"_setPosition",this).call(this,this.$currentAnchor,this.$element,this.$parent),this.$element.addClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment))}
/**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */},{key:"_setCurrentAnchor",value:function e(t){this.$currentAnchor=m()(t)}
/**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */},{key:"_events",value:function e(){var i=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.$anchors.off("click.zf.trigger").on("click.zf.trigger",function(){i._setCurrentAnchor(this)}),this.options.hover&&(this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){i._setCurrentAnchor(this);var e=m()("body").data();void 0!==e.whatinput&&"mouse"!==e.whatinput||(clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.open(),i.$anchors.data("hover",!0)},i.options.hoverDelay))}).on("mouseleave.zf.dropdown",Object(v.ignoreMousedisappear)(function(){clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.close(),i.$anchors.data("hover",!1)},i.options.hoverDelay)})),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(i.timeout)}).on("mouseleave.zf.dropdown",Object(v.ignoreMousedisappear)(function(){clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.close(),i.$anchors.data("hover",!1)},i.options.hoverDelay)}))),this.$anchors.add(this.$element).on("keydown.zf.dropdown",function(t){var n=m()(this),e=g.Keyboard.findFocusable(i.$element);g.Keyboard.handleKey(t,"Dropdown",{open:function e(){n.is(i.$anchors)&&!n.is("input, textarea")&&(i.open(),i.$element.attr("tabindex",-1).focus(),t.preventDefault())},close:function e(){i.close(),i.$anchors.focus()}})})}
/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function e(){var t=m()(document.body).not(this.$element),n=this;t.off("click.zf.dropdown").on("click.zf.dropdown",function(e){n.$anchors.is(e.target)||n.$anchors.find(e.target).length||n.$element.is(e.target)||n.$element.find(e.target).length||(n.close(),t.off("click.zf.dropdown"))})}
/**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */},{key:"open",value:function e(){if(
// var _this = this;
/**
       * Fires to close other open dropdowns, typically when dropdown is opening
       * @event Dropdown#closeme
       */
this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchors.addClass("hover").attr({"aria-expanded":!0}),// this.$element/*.show()*/;
this.$element.addClass("is-opening"),this._setPosition(),this.$element.removeClass("is-opening").addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var t=g.Keyboard.findFocusable(this.$element);t.length&&t.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.options.trapFocus&&g.Keyboard.trapFocus(this.$element)
/**
       * Fires once the dropdown is visible.
       * @event Dropdown#show
       */,this.$element.trigger("show.zf.dropdown",[this.$element])}
/**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */},{key:"close",value:function e(){if(!this.$element.hasClass("is-open"))return!1;this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchors.removeClass("hover").attr("aria-expanded",!1),
/**
       * Fires once the dropdown is no longer visible.
       * @event Dropdown#hide
       */
this.$element.trigger("hide.zf.dropdown",[this.$element]),this.options.trapFocus&&g.Keyboard.releaseFocus(this.$element)}
/**
     * Toggles the dropdown pane's visibility.
     * @function
     */},{key:"toggle",value:function e(){if(this.$element.hasClass("is-open")){if(this.$anchors.data("hover"))return;this.close()}else this.open()}
/**
     * Destroys the dropdown.
     * @function
     */},{key:"_destroy",value:function e(){this.$element.off(".zf.trigger").hide(),this.$anchors.off(".zf.dropdown"),m()(document.body).off("click.zf.dropdown")}}]),i}(y.Positionable);
/* harmony import */w.defaults={
/**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
parentClass:null,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
hoverDelay:250,
/**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
hover:!1,
/**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
hoverPane:!1,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:!0,
/**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:!1,
/**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:!1,
/**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:!1}},
/***/"./js/foundation.dropdownMenu.js":
/*!***************************************!*\
  !*** ./js/foundation.dropdownMenu.js ***!
  \***************************************/
/*! exports provided: DropdownMenu */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */n.r(t),
/* harmony export (binding) */n.d(t,"DropdownMenu",function(){return b});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),v=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),y=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),b=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="DropdownMenu",// ie9 back compat
this._init(),g.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}
/**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */},{key:"_init",value:function e(){v.Nest.Feather(this.$element,"dropdown");var t=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),"auto"===this.options.alignment?this.$element.hasClass(this.options.rightClass)||Object(m.rtl)()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",t.addClass("opens-left")):(this.options.alignment="left",t.addClass("opens-right")):"right"===this.options.alignment?t.addClass("opens-left"):t.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_isVertical",value:function e(){return"block"===this.$tabs.css("display")||"column"===this.$element.css("flex-direction")}},{key:"_isRtl",value:function e(){return this.$element.hasClass("align-right")||Object(m.rtl)()&&!this.$element.hasClass("align-left")}
/**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */},{key:"_events",value:function e(){var d=this,r="ontouchstart"in window||void 0!==window.ontouchstart,a="is-dropdown-submenu-parent",t=function e(t){var n=f()(t.target).parentsUntil("ul",".".concat(a)),i=n.hasClass(a),o="true"===n.attr("data-is-click"),s=n.children(".is-dropdown-submenu");if(i)if(o){if(!d.options.closeOnClick||!d.options.clickOpen&&!r||d.options.forceFollow&&r)return;t.stopImmediatePropagation(),t.preventDefault(),d._hide(n)}else t.preventDefault(),t.stopImmediatePropagation(),d._show(s),n.add(n.parentsUntil(d.$element,".".concat(a))).attr("data-is-click",!0)};// used for onClick and in the keyboard handlers
(this.options.clickOpen||r)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",t),// Handle Leaf element Clicks
d.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownmenu",function(e){var t,n;f()(this).hasClass(a)||d._hide()}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(e){var t=f()(this),n;t.hasClass(a)&&(clearTimeout(t.data("_delay")),t.data("_delay",setTimeout(function(){d._show(t.children(".is-dropdown-submenu"))},d.options.hoverDelay)))}).on("mouseleave.zf.dropdownMenu",Object(m.ignoreMousedisappear)(function(e){var t=f()(this),n;if(t.hasClass(a)&&d.options.autoclose){if("true"===t.attr("data-is-click")&&d.options.clickOpen)return!1;clearTimeout(t.data("_delay")),t.data("_delay",setTimeout(function(){d._hide(t)},d.options.closingTime))}})),this.$menuItems.on("keydown.zf.dropdownmenu",function(n){var i=f()(n.target).parentsUntil("ul",'[role="menuitem"]'),e=-1<d.$tabs.index(i),t=e?d.$tabs:i.siblings("li").add(i),o,s;t.each(function(e){if(f()(this).is(i))return o=t.eq(e-1),void(s=t.eq(e+1))});var r=function e(){s.children("a:first").focus(),n.preventDefault()},a=function e(){o.children("a:first").focus(),n.preventDefault()},l=function e(){var t=i.children("ul.is-dropdown-submenu");t.length&&(d._show(t),i.find("li > a:first").focus(),n.preventDefault())},u=function e(){
//if ($element.is(':first-child')) {
var t=i.parent("ul").parent("li");t.children("a:first").focus(),d._hide(t),n.preventDefault()},c={open:l,close:function e(){d._hide(d.$element),d.$menuItems.eq(0).children("a").focus(),// focus to first element
n.preventDefault()},handled:function e(){n.stopImmediatePropagation()}};e?d._isVertical()?
// vertical menu
d._isRtl()?
// right aligned
f.a.extend(c,{down:r,up:a,next:u,previous:l}):
// left aligned
f.a.extend(c,{down:r,up:a,next:l,previous:u}):
// horizontal menu
d._isRtl()?
// right aligned
f.a.extend(c,{next:a,previous:r,down:l,up:u}):
// left aligned
f.a.extend(c,{next:r,previous:a,down:l,up:u}):
// not tabs -> one sub
d._isRtl()?
// right aligned
f.a.extend(c,{next:u,previous:l,down:r,up:a}):
// left aligned
f.a.extend(c,{next:l,previous:u,down:r,up:a}),g.Keyboard.handleKey(n,"DropdownMenu",c)})}
/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function e(){var n=f()(document.body),i=this;n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(e){var t;i.$element.find(e.target).length||(i._hide(),n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}
/**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires Dropdownmenu#show
     */},{key:"_show",value:function e(n){var t=this.$tabs.index(this.$tabs.filter(function(e,t){return 0<f()(t).find(n).length})),i=n.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(i,t),n.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");var o=y.Box.ImNotTouchingYou(n,null,!0);if(!o){var s="left"===this.options.alignment?"-right":"-left",r=n.parent(".is-dropdown-submenu-parent");r.removeClass("opens".concat(s)).addClass("opens-".concat(this.options.alignment)),(o=y.Box.ImNotTouchingYou(n,null,!0))||r.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"),this.changed=!0}n.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler()
/**
       * Fires when the new dropdown pane is visible.
       * @event Dropdownmenu#show
       */,this.$element.trigger("show.zf.dropdownmenu",[n])}
/**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @private
     */},{key:"_hide",value:function e(t,n){var i,o;if((i=t&&t.length?t:void 0!==n?this.$tabs.not(function(e,t){return e===n}):this.$element).hasClass("is-active")||0<i.find(".is-active").length){if(i.find("li.is-active").add(i).attr({"data-is-click":!1}).removeClass("is-active"),i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),this.changed||i.find("opens-inner").length){var s="left"===this.options.alignment?"right":"left";i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(s)),this.changed=!1}
/**
         * Fires when the open menus are closed.
         * @event Dropdownmenu#hide
         */this.$element.trigger("hide.zf.dropdownmenu",[i])}}
/**
     * Destroys the plugin.
     * @function
     */},{key:"_destroy",value:function e(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),f()(document.body).off(".zf.dropdownmenu"),v.Nest.Burn(this.$element,"dropdown")}}]),i}(p.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
b.defaults={
/**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:!1,
/**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
autoclose:!0,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
hoverDelay:50,
/**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
clickOpen:!1,
/**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */
closingTime:500,
/**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClickInside:!0,
/**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
verticalClass:"vertical",
/**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
rightClass:"align-right",
/**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
forceFollow:!0}},
/***/"./js/foundation.equalizer.js":
/*!************************************!*\
  !*** ./js/foundation.equalizer.js ***!
  \************************************/
/*! exports provided: Equalizer */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */n.r(t),
/* harmony export (binding) */n.d(t,"Equalizer",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v,y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Equalizer",// ie9 back compat
this._init()}
/**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function e(){var t=this.$element.attr("data-equalizer")||"",n=this.$element.find('[data-equalizer-watch="'.concat(t,'"]'));p.MediaQuery._init(),this.$watched=n.length?n:this.$element.find("[data-equalizer-watch]"),this.$element.attr("data-resize",t||Object(g.GetYoDigits)(6,"eq")),this.$element.attr("data-mutate",t||Object(g.GetYoDigits)(6,"eq")),this.hasNested=0<this.$element.find("[data-equalizer]").length,this.isNested=0<this.$element.parentsUntil(document.body,"[data-equalizer]").length,this.isOn=!1,this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var i=this.$element.find("img"),o;this.options.equalizeOn?(o=this._checkMQ(),f()(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))):this._events(),(void 0!==o&&!1===o||void 0===o)&&(i.length?Object(m.onImagesLoaded)(i,this._reflow.bind(this)):this._reflow())}
/**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */},{key:"_pauseEvents",value:function e(){this.isOn=!1,this.$element.off({".zf.equalizer":this._bindHandler.onPostEqualizedBound,"resizeme.zf.trigger":this._bindHandler.onResizeMeBound,"mutateme.zf.trigger":this._bindHandler.onResizeMeBound})}
/**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */},{key:"_onResizeMe",value:function e(t){this._reflow()}
/**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */},{key:"_onPostEqualized",value:function e(t){t.target!==this.$element[0]&&this._reflow()}
/**
     * Initializes events for Equalizer.
     * @private
     */},{key:"_events",value:function e(){var t=this;this._pauseEvents(),this.hasNested?this.$element.on("postequalized.zf.equalizer",this._bindHandler.onPostEqualizedBound):(this.$element.on("resizeme.zf.trigger",this._bindHandler.onResizeMeBound),this.$element.on("mutateme.zf.trigger",this._bindHandler.onResizeMeBound)),this.isOn=!0}
/**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */},{key:"_checkMQ",value:function e(){var t=!p.MediaQuery.is(this.options.equalizeOn);return t?this.isOn&&(this._pauseEvents(),this.$watched.css("height","auto")):this.isOn||this._events(),t}
/**
     * A noop version for the plugin
     * @private
     */},{key:"_killswitch",value:function e(){}
/**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */},{key:"_reflow",value:function e(){if(!this.options.equalizeOnStack&&this._isStacked())return this.$watched.css("height","auto"),!1;this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this))}
/**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */},{key:"_isStacked",value:function e(){return!this.$watched[0]||!this.$watched[1]||this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */},{key:"getHeights",value:function e(t){for(var n=[],i=0,o=this.$watched.length;i<o;i++)this.$watched[i].style.height="auto",n.push(this.$watched[i].offsetHeight);t(n)}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */},{key:"getHeightsByRow",value:function e(t){var n=this.$watched.length?this.$watched.first().offset().top:0,i=[],o=0;//group by Row
i[o]=[];for(var s=0,r=this.$watched.length;s<r;s++){this.$watched[s].style.height="auto";//maybe could use this.$watched[i].offsetTop
var a=f()(this.$watched[s]).offset().top;a!=n&&(i[++o]=[],n=a),i[o].push([this.$watched[s],this.$watched[s].offsetHeight])}for(var l=0,u=i.length;l<u;l++){var c=f()(i[l]).map(function(){return this[1]}).get(),d=Math.max.apply(null,c);i[l].push(d)}t(i)}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */},{key:"applyHeight",value:function e(t){var n=Math.max.apply(null,t);
/**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */this.$element.trigger("preequalized.zf.equalizer"),this.$watched.css("height",n),
/**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */
this.$element.trigger("postequalized.zf.equalizer")}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */},{key:"applyHeightByRow",value:function e(t){
/**
       * Fires before the heights are applied
       */
this.$element.trigger("preequalized.zf.equalizer");for(var n=0,i=t.length;n<i;n++){var o=t[n].length,s=t[n][o-1];if(o<=2)f()(t[n][0][0]).css({height:"auto"});else{
/**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */
this.$element.trigger("preequalizedrow.zf.equalizer");for(var r=0,a=o-1;r<a;r++)f()(t[n][r][0]).css({height:s});
/**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */this.$element.trigger("postequalizedrow.zf.equalizer")}}
/**
       * Fires when the heights have been applied
       */this.$element.trigger("postequalized.zf.equalizer")}
/**
     * Destroys an instance of Equalizer.
     * @function
     */},{key:"_destroy",value:function e(){this._pauseEvents(),this.$watched.css("height","auto")}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
y.defaults={
/**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeOnStack:!1,
/**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeByRow:!1,
/**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
equalizeOn:""}},
/***/"./js/foundation.interchange.js":
/*!**************************************!*\
  !*** ./js/foundation.interchange.js ***!
  \**************************************/
/*! exports provided: Interchange */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */n.r(t),
/* harmony export (binding) */n.d(t,"Interchange",function(){return v});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=
/* */
function(e){function l(){return o(this,l),a(this,u(l).apply(this,arguments))}return c(l,e),r(l,[{key:"_setup",
/**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},l.defaults,n),this.rules=[],this.currentPath="",this.className="Interchange",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */},{key:"_init",value:function e(){p.MediaQuery._init();var t=this.$element[0].id||Object(g.GetYoDigits)(6,"interchange");this.$element.attr({"data-resize":t,id:t}),this._addBreakpoints(),this._generateRules(),this._reflow()}
/**
     * Initializes events for Interchange.
     * @function
     * @private
     */},{key:"_events",value:function e(){var t=this;this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(){return t._reflow()})}
/**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */},{key:"_reflow",value:function e(){var t;// Iterate through each rule, but only save the last match
for(var n in this.rules)if(this.rules.hasOwnProperty(n)){var i=this.rules[n];window.matchMedia(i.query).matches&&(t=i)}t&&this.replace(t.path)}
/**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */},{key:"_addBreakpoints",value:function e(){for(var t in p.MediaQuery.queries)if(p.MediaQuery.queries.hasOwnProperty(t)){var n=p.MediaQuery.queries[t];l.SPECIAL_QUERIES[n.name]=n.value}}
/**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */},{key:"_generateRules",value:function e(t){var n=[],i;for(var o in i="string"==typeof(i=this.options.rules?this.options.rules:this.$element.data("interchange"))?i.match(/\[.*?, .*?\]/g):i)if(i.hasOwnProperty(o)){var s=i[o].slice(1,-1).split(", "),r=s.slice(0,-1).join(""),a=s[s.length-1];l.SPECIAL_QUERIES[a]&&(a=l.SPECIAL_QUERIES[a]),n.push({path:r,query:a})}this.rules=n}
/**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */},{key:"replace",value:function e(t){if(this.currentPath!==t){var n=this,i="replaced.zf.interchange";// Replacing images
"IMG"===this.$element[0].nodeName?this.$element.attr("src",t).on("load",function(){n.currentPath=t}).trigger(i):t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)?(t=t.replace(/\(/g,"%28").replace(/\)/g,"%29"),this.$element.css({"background-image":"url("+t+")"}).trigger(i)):f.a.get(t,function(e){n.$element.html(e).trigger(i),f()(e).foundation(),n.currentPath=t});
/**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */
// this.$element.trigger('replaced.zf.interchange');
}}
/**
     * Destroys an instance of interchange.
     * @function
     */},{key:"_destroy",value:function e(){this.$element.off("resizeme.zf.trigger")}}]),l}(m.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
v.defaults={
/**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
rules:null},v.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"}},
/***/"./js/foundation.magellan.js":
/*!***********************************!*\
  !*** ./js/foundation.magellan.js ***!
  \***********************************/
/*! exports provided: Magellan */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 */n.r(t),
/* harmony export (binding) */n.d(t,"Magellan",function(){return v});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.smoothScroll */"./js/foundation.smoothScroll.js"),v=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Magellan",// ie9 back compat
this._init(),this.calcPoints()}
/**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function e(){var t=this.$element[0].id||Object(p.GetYoDigits)(6,"magellan"),n=this;this.$targets=f()("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":t,"data-scroll":t,id:t}),this.$active=f()(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()}
/**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */},{key:"calcPoints",value:function e(){var n=this,t=document.body,i=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,i.clientHeight)),this.docHeight=Math.round(Math.max(t.scrollHeight,t.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)),this.$targets.each(function(){var e=f()(this),t=Math.round(e.offset().top-n.options.threshold);e.targetPoint=t,n.points.push(t)})}
/**
     * Initializes events for Magellan.
     * @private
     */},{key:"_events",value:function e(){var n=this,t=f()("html, body"),i={duration:n.options.animationDuration,easing:n.options.animationEasing};f()(window).one("load",function(){n.options.deepLinking&&location.hash&&n.scrollToLoc(location.hash),n.calcPoints(),n._updateActive()}),n.onLoadListener=Object(p.onLoad)(f()(window),function(){n.$element.on({"resizeme.zf.trigger":n.reflow.bind(n),"scrollme.zf.trigger":n._updateActive.bind(n)}).on("click.zf.magellan",'a[href^="#"]',function(e){e.preventDefault();var t=this.getAttribute("href");n.scrollToLoc(t)})}),this._deepLinkScroll=function(e){n.options.deepLinking&&n.scrollToLoc(window.location.hash)},f()(window).on("hashchange",this._deepLinkScroll)}
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */},{key:"scrollToLoc",value:function e(t){this._inTransition=!0;var n=this,i={animationEasing:this.options.animationEasing,animationDuration:this.options.animationDuration,threshold:this.options.threshold,offset:this.options.offset};g.SmoothScroll.scrollToLoc(t,i,function(){n._inTransition=!1})}
/**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */},{key:"reflow",value:function e(){this.calcPoints(),this._updateActive()}
/**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */},{key:"_updateActive",value:function e(){var n=this;if(!this._inTransition){var i=parseInt(window.pageYOffset,10),o=this.scrollPos>i,t;// Before the first point: no link
if((this.scrollPos=i)<this.points[0]);else if(i+this.winHeight===this.docHeight)t=this.points.length-1;else{var s=this.points.filter(function(e,t){return e-n.options.offset-(o?n.options.threshold:0)<=i});t=s.length?s.length-1:0}// Get the new active link
var r=this.$active,a="";void 0!==t?(this.$active=this.$links.filter('[href="#'+this.$targets.eq(t).data("magellan-target")+'"]'),this.$active.length&&(a=this.$active[0].getAttribute("href"))):this.$active=f()();var l=!(!this.$active.length&&!r.length||this.$active.is(r)),u=a!==window.location.hash;// Update the hash (it may have changed with the same active link)
if(// Update the active link element
l&&(r.removeClass(this.options.activeClass),this.$active.addClass(this.options.activeClass)),this.options.deepLinking&&u)if(window.history.pushState){
// Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
var c=a||window.location.pathname+window.location.search;window.history.pushState(null,null,c)}else window.location.hash=a;l&&
/**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
this.$element.trigger("update.zf.magellan",[this.$active])}}
/**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */},{key:"_destroy",value:function e(){if(this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass),this.options.deepLinking){var t=this.$active[0].getAttribute("href");window.location.hash.replace(t,"")}f()(window).off("hashchange",this._deepLinkScroll),this.onLoadListener&&f()(window).off(this.onLoadListener)}}]),i}(m.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
v.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
activeClass:"is-active",
/**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
deepLinking:!1,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0}},
/***/"./js/foundation.offcanvas.js":
/*!************************************!*\
  !*** ./js/foundation.offcanvas.js ***!
  \************************************/
/*! exports provided: OffCanvas */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */n.r(t),
/* harmony export (binding) */n.d(t,"OffCanvas",function(){return b});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b=
/* */
function(e){function o(){return s(this,o),a(this,u(o).apply(this,arguments))}return c(o,e),r(o,[{key:"_setup",
/**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){var i=this;this.className="OffCanvas",// ie9 back compat
this.$element=t,this.options=f.a.extend({},o.defaults,this.$element.data(),n),this.contentClasses={base:[],reveal:[]},this.$lastTrigger=f()(),this.$triggers=f()(),this.position="left",this.$content=f()(),this.nested=!!this.options.nested,// Defines the CSS transition/position classes of the off-canvas content container.
f()(["push","overlap"]).each(function(e,t){i.contentClasses.base.push("has-transition-"+t)}),f()(["left","right","top","bottom"]).each(function(e,t){i.contentClasses.base.push("has-position-"+t),i.contentClasses.reveal.push("has-reveal-"+t)}),// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(f.a),g.MediaQuery._init(),this._init(),this._events(),m.Keyboard.register("OffCanvas",{ESCAPE:"close"})}
/**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */},{key:"_init",value:function e(){var t=this.$element.attr("id");// Add an overlay over the content if necessary
if(this.$element.attr("aria-hidden","true"),// Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)
this.options.contentId?this.$content=f()("#"+this.options.contentId):this.$element.siblings("[data-off-canvas-content]").length?this.$content=this.$element.siblings("[data-off-canvas-content]").first():this.$content=this.$element.closest("[data-off-canvas-content]").first(),this.options.contentId?this.options.contentId&&null===this.options.nested&&
// Warning if using content ID without setting the nested option
// Once the element is nested it is required to work properly in this case
console.warn("Remember to use the nested option if using the content ID option!"):
// Assume that the off-canvas element is nested if it isn't a sibling of the content
this.nested=0===this.$element.siblings("[data-off-canvas-content]").length,!0===this.nested&&(
// Force transition overlap if nested
this.options.transition="overlap",// Remove appropriate classes if already assigned in markup
this.$element.removeClass("is-transition-push")),this.$element.addClass("is-transition-".concat(this.options.transition," is-closed")),// Find triggers that affect this element and add aria-expanded to them
this.$triggers=f()(document).find('[data-open="'+t+'"], [data-close="'+t+'"], [data-toggle="'+t+'"]').attr("aria-expanded","false").attr("aria-controls",t),// Get position by checking for related CSS class
this.position=this.$element.is(".position-left, .position-top, .position-right, .position-bottom")?this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1]:this.position,!0===this.options.contentOverlay){var n=document.createElement("div"),i="fixed"===f()(this.$element).css("position")?"is-overlay-fixed":"is-overlay-absolute";n.setAttribute("class","js-off-canvas-overlay "+i),this.$overlay=f()(n),"is-overlay-fixed"===i?f()(this.$overlay).insertAfter(this.$element):this.$content.append(this.$overlay)}// Get the revealOn option from the class.
var o,s=new RegExp(Object(p.RegExpEscape)(this.options.revealClass)+"([^\\s]+)","g").exec(this.$element[0].className);s&&(this.options.isRevealed=!0,this.options.revealOn=this.options.revealOn||s[1]),// Ensure the `reveal-on-*` class is set.
!0===this.options.isRevealed&&this.options.revealOn&&(this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)),this._setMQChecker()),this.options.transitionTime&&this.$element.css("transition-duration",this.options.transitionTime),// Initally remove all transition/position CSS classes from off-canvas content container.
this._removeContentClasses()}
/**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */},{key:"_events",value:function e(){var t;(this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),!0===this.options.closeOnClick)&&(this.options.contentOverlay?this.$overlay:this.$content).on({"click.zf.offcanvas":this.close.bind(this)})}
/**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */},{key:"_setMQChecker",value:function e(){var t=this;this.onLoadListener=Object(p.onLoad)(f()(window),function(){g.MediaQuery.atLeast(t.options.revealOn)&&t.reveal(!0)}),f()(window).on("changed.zf.mediaquery",function(){g.MediaQuery.atLeast(t.options.revealOn)?t.reveal(!0):t.reveal(!1)})}
/**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_removeContentClasses",value:function e(t){"boolean"!=typeof t?this.$content.removeClass(this.contentClasses.base.join(" ")):!1===t&&this.$content.removeClass("has-reveal-".concat(this.position))}
/**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_addContentClasses",value:function e(t){this._removeContentClasses(t),"boolean"!=typeof t?this.$content.addClass("has-transition-".concat(this.options.transition," has-position-").concat(this.position)):!0===t&&this.$content.addClass("has-reveal-".concat(this.position))}
/**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */},{key:"reveal",value:function e(t){t?(this.close(),this.isRevealed=!0,this.$element.attr("aria-hidden","false"),this.$element.off("open.zf.trigger toggle.zf.trigger"),this.$element.removeClass("is-closed")):(this.isRevealed=!1,this.$element.attr("aria-hidden","true"),this.$element.off("open.zf.trigger toggle.zf.trigger").on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),this.$element.addClass("is-closed")),this._addContentClasses(t)}
/**
     * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
     * @private
     */},{key:"_stopScrolling",value:function e(t){return!1}// Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
// Only really works for y, not sure how to extend to x or if we need to.
},{key:"_recordScrollable",value:function e(t){var n=this;// called from event handler context with this as elem
// If the element is scrollable (content overflows), then...
n.scrollHeight!==n.clientHeight&&(
// If we're at the top, scroll down one pixel to allow scrolling up
0===n.scrollTop&&(n.scrollTop=1),// If we're at the bottom, scroll up one pixel to allow scrolling down
n.scrollTop===n.scrollHeight-n.clientHeight&&(n.scrollTop=n.scrollHeight-n.clientHeight-1)),n.allowUp=0<n.scrollTop,n.allowDown=n.scrollTop<n.scrollHeight-n.clientHeight,n.lastY=t.originalEvent.pageY}},{key:"_stopScrollPropagation",value:function e(t){var n=this,i=t.pageY<n.lastY,o=!i;// called from event handler context with this as elem
n.lastY=t.pageY,i&&n.allowUp||o&&n.allowDown?t.stopPropagation():t.preventDefault()}
/**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires Offcanvas#opened
     * @todo also trigger 'open' event?
     */},{key:"open",value:function e(t,n){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var i=this;n&&(this.$lastTrigger=n),"top"===this.options.forceTo?window.scrollTo(0,0):"bottom"===this.options.forceTo&&window.scrollTo(0,document.body.scrollHeight),this.options.transitionTime&&"overlap"!==this.options.transition?this.$element.siblings("[data-off-canvas-content]").css("transition-duration",this.options.transitionTime):this.$element.siblings("[data-off-canvas-content]").css("transition-duration",""),this.$element.addClass("is-open").removeClass("is-closed"),this.$triggers.attr("aria-expanded","true"),this.$element.attr("aria-hidden","false"),this.$content.addClass("is-open-"+this.position),// If `contentScroll` is set to false, add class and disable scrolling on touch devices.
!1===this.options.contentScroll&&(f()("body").addClass("is-off-canvas-open").on("touchmove",this._stopScrolling),this.$element.on("touchstart",this._recordScrollable),this.$element.on("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.addClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.addClass("is-closable"),!0===this.options.autoFocus&&this.$element.one(Object(p.transitionend)(this.$element),function(){if(i.$element.hasClass("is-open")){var e=i.$element.find("[data-autofocus]");e.length?e.eq(0).focus():i.$element.find("a, button").eq(0).focus()}}),!0===this.options.trapFocus&&(this.$content.attr("tabindex","-1"),m.Keyboard.trapFocus(this.$element)),this._addContentClasses(),
/**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#opened
       */
this.$element.trigger("opened.zf.offcanvas")}}
/**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires Offcanvas#closed
     */},{key:"close",value:function e(t){if(this.$element.hasClass("is-open")&&!this.isRevealed){var n=this;this.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true")
/**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#closed
       */.trigger("closed.zf.offcanvas"),this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"),// If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.
!1===this.options.contentScroll&&(f()("body").removeClass("is-off-canvas-open").off("touchmove",this._stopScrolling),this.$element.off("touchstart",this._recordScrollable),this.$element.off("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.removeClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.removeClass("is-closable"),this.$triggers.attr("aria-expanded","false"),!0===this.options.trapFocus&&(this.$content.removeAttr("tabindex"),m.Keyboard.releaseFocus(this.$element)),// Listen to transitionEnd and add class when done.
this.$element.one(Object(p.transitionend)(this.$element),function(e){n.$element.addClass("is-closed"),n._removeContentClasses()})}}
/**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */},{key:"toggle",value:function e(t,n){this.$element.hasClass("is-open")?this.close(t,n):this.open(t,n)}
/**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */},{key:"_handleKeyboard",value:function e(t){var n=this;m.Keyboard.handleKey(t,"OffCanvas",{close:function e(){return n.close(),n.$lastTrigger.focus(),!0},handled:function e(){t.stopPropagation(),t.preventDefault()}})}
/**
     * Destroys the offcanvas plugin.
     * @function
     */},{key:"_destroy",value:function e(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$overlay.off(".zf.offcanvas"),this.onLoadListener&&f()(window).off(this.onLoadListener)}}]),o}(v.Plugin);
/* harmony import */b.defaults={
/**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */
contentOverlay:!0,
/**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */
contentId:null,
/**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */
nested:null,
/**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
contentScroll:!0,
/**
   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
   * @option
   * @type {number}
   * @default null
   */
transitionTime:null,
/**
   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
transition:"push",
/**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
forceTo:null,
/**
   * Allow the offcanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
isRevealed:!1,
/**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */
revealOn:null,
/**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
autoFocus:!0,
/**
   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
revealClass:"reveal-for-",
/**
   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:!1}},
/***/"./js/foundation.orbit.js":
/*!********************************!*\
  !*** ./js/foundation.orbit.js ***!
  \********************************/
/*! exports provided: Orbit */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timer
 * @requires foundation.util.imageLoader
 * @requires foundation.util.touch
 */n.r(t),
/* harmony export (binding) */n.d(t,"Orbit",function(){return x});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),g=n(/*! ./foundation.util.timer */"./js/foundation.util.timer.js"),v=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),y=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),b=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),w=n(/*! ./foundation.util.touch */"./js/foundation.util.touch.js"),x=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Orbit",// ie9 back compat
w.Touch.init(f.a),// Touch init is idempotent, we just need to make sure it's initialied.
this._init(),p.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}
/**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */},{key:"_init",value:function e(){
// @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
this._reset(),this.$wrapper=this.$element.find(".".concat(this.options.containerClass)),this.$slides=this.$element.find(".".concat(this.options.slideClass));var t=this.$element.find("img"),n=this.$slides.filter(".is-active"),i=this.$element[0].id||Object(y.GetYoDigits)(6,"orbit");this.$element.attr({"data-resize":i,id:i}),n.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),t.length?Object(v.onImagesLoaded)(t,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&1<this.$slides.length&&this.geoSync(),this.options.accessible&&
// allow wrapper to be focusable to enable arrow navigation
this.$wrapper.attr("tabindex",0)}
/**
    * Creates a jQuery collection of bullets, if they are being used.
    * @function
    * @private
    */},{key:"_loadBullets",value:function e(){this.$bullets=this.$element.find(".".concat(this.options.boxOfBullets)).find("button")}
/**
    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
    * @function
    */},{key:"geoSync",value:function e(){var t=this;this.timer=new g.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){t.changeSlide(!0)}),this.timer.start()}
/**
    * Sets wrapper and slide heights for the orbit.
    * @function
    * @private
    */},{key:"_prepareForOrbit",value:function e(){var t=this;this._setWrapperHeight()}
/**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */},{key:"_setWrapperHeight",value:function e(t){
//rewrite this to `for` loop
var n=0,i,o=0,s=this;this.$slides.each(function(){i=this.getBoundingClientRect().height,f()(this).attr("data-slide",o),// hide all slides but the active one
/mui/g.test(f()(this)[0].className)||s.$slides.filter(".is-active")[0]===s.$slides.eq(o)[0]||f()(this).css({display:"none"}),n=n<i?i:n,o++}),o===this.$slides.length&&(this.$wrapper.css({height:n}),//only change the wrapper height property once.
t&&t(n))}
/**
    * Sets the max-height of each slide.
    * @function
    * @private
    */},{key:"_setSlideHeight",value:function e(t){this.$slides.each(function(){f()(this).css("max-height",t)})}
/**
    * Adds event listeners to basically everything within the element.
    * @function
    * @private
    */},{key:"_events",value:function e(){var i=this;//***************************************
//**Now using custom event - thanks to:**
//**      Yohai Ararat of Toronto      **
//***************************************
//
if(this.$element.off(".resizeme.zf.trigger").on({"resizeme.zf.trigger":this._prepareForOrbit.bind(this)}),1<this.$slides.length){var t;if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(e){e.preventDefault(),i.changeSlide(!0)}).on("swiperight.zf.orbit",function(e){e.preventDefault(),i.changeSlide(!1)}),//***************************************
this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){i.$element.data("clickedOn",!i.$element.data("clickedOn")),i.timer[i.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){i.timer.pause()}).on("mouseleave.zf.orbit",function(){i.$element.data("clickedOn")||i.timer.start()})),this.options.navButtons)this.$element.find(".".concat(this.options.nextClass,", .").concat(this.options.prevClass)).attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(e){e.preventDefault(),i.changeSlide(f()(this).hasClass(i.options.nextClass))});this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;//if this is active, kick out of function.
var e=f()(this).data("slide"),t=e>i.$slides.filter(".is-active").data("slide"),n=i.$slides.eq(e);i.changeSlide(t,n,e)}),this.options.accessible&&this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(t){
// handle keyboard event with keyboard util
p.Keyboard.handleKey(t,"Orbit",{next:function e(){i.changeSlide(!0)},previous:function e(){i.changeSlide(!1)},handled:function e(){
// if bullet is focused, make sure focus moves
f()(t.target).is(i.$bullets)&&i.$bullets.filter(".is-active").focus()}})})}}
/**
     * Resets Orbit so it can be reinitialized
     */},{key:"_reset",value:function e(){
// Don't do anything if there are no slides (first run)
void 0!==this.$slides&&1<this.$slides.length&&(
// Remove old events
this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),// Restart timer if autoPlay is enabled
this.options.autoPlay&&this.timer.restart(),// Reset all sliddes
this.$slides.each(function(e){f()(e).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()}),// Show the first slide
this.$slides.first().addClass("is-active").show(),// Triggers when the slide has finished animating
this.$element.trigger("slidechange.zf.orbit",[this.$slides.first()]),// Select first bullet if bullets are present
this.options.bullets&&this._updateBullets(0))}
/**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */},{key:"changeSlide",value:function e(t,n,i){if(this.$slides){// Don't freak out if we're in the middle of cleanup
var o=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(o[0].className))return!1;//if the slide is currently animating, kick out of the function
var s=this.$slides.first(),r=this.$slides.last(),a=t?"Right":"Left",l=t?"Left":"Right",u=this,c;(c=n||(t?//if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
this.options.infiniteWrap?o.next(".".concat(this.options.slideClass)).length?o.next(".".concat(this.options.slideClass)):s:o.next(".".concat(this.options.slideClass))://pick next slide if moving left to right
this.options.infiniteWrap?o.prev(".".concat(this.options.slideClass)).length?o.prev(".".concat(this.options.slideClass)):r:o.prev(".".concat(this.options.slideClass)))).length&&(
/**
        * Triggers before the next slide starts animating in and only if a next slide has been found.
        * @event Orbit#beforeslidechange
        */
this.$element.trigger("beforeslidechange.zf.orbit",[o,c]),this.options.bullets&&(i=i||this.$slides.index(c),//grab index to update bullets
this._updateBullets(i)),this.options.useMUI&&!this.$element.is(":hidden")?(m.Motion.animateIn(c.addClass("is-active"),this.options["animInFrom".concat(a)],function(){c.css({display:"block"}).attr("aria-live","polite")}),m.Motion.animateOut(o.removeClass("is-active"),this.options["animOutTo".concat(l)],function(){o.removeAttr("aria-live"),u.options.autoPlay&&!u.timer.isPaused&&u.timer.restart()})):(o.removeClass("is-active is-in").removeAttr("aria-live").hide(),c.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart())
/**
        * Triggers when the slide has finished animating in.
        * @event Orbit#slidechange
        */,this.$element.trigger("slidechange.zf.orbit",[c]))}}
/**
    * Updates the active state of the bullets, if displayed.
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */},{key:"_updateBullets",value:function e(t){var n,i=this.$element.find(".".concat(this.options.boxOfBullets)).find(".is-active").removeClass("is-active").blur().find("span:last").detach(),o=this.$bullets.eq(t).addClass("is-active").append(i)}
/**
    * Destroys the carousel and hides the element.
    * @function
    */},{key:"_destroy",value:function e(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()}}]),i}(b.Plugin);
/* harmony import */x.defaults={
/**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
bullets:!0,
/**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
navButtons:!0,
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
animInFromRight:"slide-in-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
animOutToRight:"slide-out-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
animInFromLeft:"slide-in-left",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
animOutToLeft:"slide-out-left",
/**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
autoPlay:!0,
/**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
timerDelay:5e3,
/**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
infiniteWrap:!0,
/**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
swipe:!0,
/**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
pauseOnHover:!0,
/**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
accessible:!0,
/**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
containerClass:"orbit-container",
/**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
slideClass:"orbit-slide",
/**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
boxOfBullets:"orbit-bullets",
/**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
nextClass:"orbit-next",
/**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
prevClass:"orbit-previous",
/**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
  * @option
   * @type {boolean}
  * @default true
  */
useMUI:!0}},
/***/"./js/foundation.positionable.js":
/*!***************************************!*\
  !*** ./js/foundation.positionable.js ***!
  \***************************************/
/*! exports provided: Positionable */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function h(e,t){var n=t.indexOf(e);return n===t.length-1?t[0]:t[n+1]}n.r(t),
/* harmony export (binding) */n.d(t,"Positionable",function(){return w});
/* harmony import */var f=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=["left","right","top","bottom"],v=["top","bottom","center"],y=["left","right","center"],b={left:v,right:v,top:y,bottom:y},w=
/* */
function(e){function t(){return o(this,t),a(this,u(t).apply(this,arguments))}return c(t,e),r(t,[{key:"_init",
/**
     * Abstract class encapsulating the tether-like explicit positioning logic
     * including repositioning based on overlap.
     * Expects classes to define defaults for vOffset, hOffset, position,
     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
     * extending the defaults, or (for now recommended due to the way docs are
     * generated) by explicitly declaring them.
     *
     **/
value:function e(){this.triedPositions={},this.position="auto"===this.options.position?this._getDefaultPosition():this.options.position,this.alignment="auto"===this.options.alignment?this._getDefaultAlignment():this.options.alignment,this.originalPosition=this.position,this.originalAlignment=this.alignment}},{key:"_getDefaultPosition",value:function e(){return"bottom"}},{key:"_getDefaultAlignment",value:function e(){switch(this.position){case"bottom":case"top":return Object(m.rtl)()?"right":"left";case"left":case"right":return"bottom"}}
/**
     * Adjusts the positionable possible positions by iterating through alignments
     * and positions.
     * @function
     * @private
     */},{key:"_reposition",value:function e(){this._alignmentsExhausted(this.position)?(this.position=h(this.position,g),this.alignment=b[this.position][0]):this._realign()}
/**
     * Adjusts the dropdown pane possible positions by iterating through alignments
     * on the current position.
     * @function
     * @private
     */},{key:"_realign",value:function e(){this._addTriedPosition(this.position,this.alignment),this.alignment=h(this.alignment,b[this.position])}},{key:"_addTriedPosition",value:function e(t,n){this.triedPositions[t]=this.triedPositions[t]||[],this.triedPositions[t].push(n)}},{key:"_positionsExhausted",value:function e(){for(var t=!0,n=0;n<g.length;n++)t=t&&this._alignmentsExhausted(g[n]);return t}},{key:"_alignmentsExhausted",value:function e(t){return this.triedPositions[t]&&this.triedPositions[t].length==b[t].length}// When we're trying to center, we don't want to apply offset that's going to
// take us just off center, so wrap around to return 0 for the appropriate
// offset in those alignments.  TODO: Figure out if we want to make this
// configurable behavior... it feels more intuitive, especially for tooltips, but
// it's possible someone might actually want to start from center and then nudge
// slightly off.
},{key:"_getVOffset",value:function e(){return this.options.vOffset}},{key:"_getHOffset",value:function e(){return this.options.hOffset}},{key:"_setPosition",value:function e(t,n,i){if("false"===t.attr("aria-expanded"))return!1;var o=f.Box.GetDimensions(n),s=f.Box.GetDimensions(t);if(this.options.allowOverlap||(
// restore original position & alignment before checking overlap
this.position=this.originalPosition,this.alignment=this.originalAlignment),n.offset(f.Box.GetExplicitOffsets(n,t,this.position,this.alignment,this._getVOffset(),this._getHOffset())),!this.options.allowOverlap){for(var r={},a=1e8,l={position:this.position,alignment:this.alignment};!this._positionsExhausted();){var u=f.Box.OverlapArea(n,i,!1,!1,this.options.allowBottomOverlap);if(0===u)return;u<a&&(a=u,l={position:this.position,alignment:this.alignment}),this._reposition(),n.offset(f.Box.GetExplicitOffsets(n,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}// If we get through the entire loop, there was no non-overlapping
// position available. Pick the version with least overlap.
this.position=l.position,this.alignment=l.alignment,n.offset(f.Box.GetExplicitOffsets(n,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}}}]),t}(p.Plugin);
/* harmony import */w.defaults={
/**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:!0,
/**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0}},
/***/"./js/foundation.responsiveAccordionTabs.js":
/*!**************************************************!*\
  !*** ./js/foundation.responsiveAccordionTabs.js ***!
  \**************************************************/
/*! exports provided: ResponsiveAccordionTabs */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
// The plugin matches the plugin classes with these plugin instances.
n.r(t),
/* harmony export (binding) */n.d(t,"ResponsiveAccordionTabs",function(){return w});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),v=n(/*! ./foundation.accordion */"./js/foundation.accordion.js"),y,b={tabs:{cssClass:"tabs",plugin:n(/*! ./foundation.tabs */"./js/foundation.tabs.js").Tabs},accordion:{cssClass:"accordion",plugin:v.Accordion}},w=
/* */
function(e){function t(){return o(this,t),a(this,u(t).apply(this,arguments))}return c(t,e),r(t,[{key:"_setup",
/**
     * Creates a new instance of a responsive accordion tabs.
     * @class
     * @name ResponsiveAccordionTabs
     * @fires ResponsiveAccordionTabs#init
     * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=f()(t),this.options=f.a.extend({},this.$element.data(),n),this.rules=this.$element.data("responsive-accordion-tabs"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveAccordionTabs",// ie9 back compat
this.$element.attr("id")||this.$element.attr("id",Object(m.GetYoDigits)(6,"responsiveaccordiontabs")),this._init(),this._events()}
/**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function e(){// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(p.MediaQuery._init(),"string"==typeof this.rules){// Iterate through every rule found
for(var t={},n=this.rules.split(" "),i=0// Parse rules from "classes" pulled from data attribute
;i<n.length;i++){var o=n[i].split("-"),s=1<o.length?o[0]:"small",r=1<o.length?o[1]:o[0];null!==b[r]&&(t[s]=b[r])}this.rules=t}this._getAllOptions(),f.a.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_getAllOptions",value:function e(){
//get all defaults and options
var t=this;for(var n in t.allOptions={},b)if(b.hasOwnProperty(n)){var i=b[n];try{var o=f()("<ul></ul>"),s=new i.plugin(o,t.options);for(var r in s.options)if(s.options.hasOwnProperty(r)&&"zfPlugin"!==r){var a=s.options[r];t.allOptions[r]=a}s.destroy()}catch(e){}}}
/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function e(){this._changedZfMediaQueryHandler=this._checkMediaQueries.bind(this),f()(window).on("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}
/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function e(){var t,n=this;// Iterate through each rule and find the last matching rule
f.a.each(this.rules,function(e){p.MediaQuery.atLeast(e)&&(t=e)}),// No match? No dice
t&&(// Plugin already initialized? We good
this.currentPlugin instanceof this.rules[t].plugin||(// Remove existing plugin-specific CSS classes
f.a.each(b,function(e,t){n.$element.removeClass(t.cssClass)}),// Add the CSS class for the new plugin
this.$element.addClass(this.rules[t].cssClass),// Create an instance of the new plugin
this.currentPlugin&&(
//don't know why but on nested elements data zfPlugin get's lost
!this.currentPlugin.$element.data("zfPlugin")&&this.storezfData&&this.currentPlugin.$element.data("zfPlugin",this.storezfData),this.currentPlugin.destroy()),this._handleMarkup(this.rules[t].cssClass),this.currentPlugin=new this.rules[t].plugin(this.$element,{}),this.storezfData=this.currentPlugin.$element.data("zfPlugin")))}},{key:"_handleMarkup",value:function e(t){var n=this,i="accordion",o=f()("[data-tabs-content="+this.$element.attr("id")+"]");if(o.length&&(i="tabs"),i!==t){var s=n.allOptions.linkClass?n.allOptions.linkClass:"tabs-title",r=n.allOptions.panelClass?n.allOptions.panelClass:"tabs-panel";this.$element.removeAttr("role");var a=this.$element.children("."+s+",[data-accordion-item]").removeClass(s).removeClass("accordion-item").removeAttr("data-accordion-item"),l=a.children("a").removeClass("accordion-title");if("tabs"===i?(o=o.children("."+r).removeClass(r).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected"):o=a.children("[data-tab-content]").removeClass("accordion-content"),o.css({display:"",visibility:""}),a.css({display:"",visibility:""}),"accordion"===t)o.each(function(e,t){f()(t).appendTo(a.get(e)).addClass("accordion-content").attr("data-tab-content","").removeClass("is-active").css({height:""}),f()("[data-tabs-content="+n.$element.attr("id")+"]").after('<div id="tabs-placeholder-'+n.$element.attr("id")+'"></div>').detach(),a.addClass("accordion-item").attr("data-accordion-item",""),l.addClass("accordion-title")});else if("tabs"===t){var u=f()("[data-tabs-content="+n.$element.attr("id")+"]"),c=f()("#tabs-placeholder-"+n.$element.attr("id"));c.length?(u=f()('<div class="tabs-content"></div>').insertAfter(c).attr("data-tabs-content",n.$element.attr("id")),c.remove()):u=f()('<div class="tabs-content"></div>').insertAfter(n.$element).attr("data-tabs-content",n.$element.attr("id")),o.each(function(e,t){var n=f()(t).appendTo(u).addClass(r),i=l.get(e).hash.slice(1),o=f()(t).attr("id")||Object(m.GetYoDigits)(6,"accordion"),s;i!==o&&(""!==i?f()(t).attr("id",i):(i=o,f()(t).attr("id",i),f()(l.get(e)).attr("href",f()(l.get(e)).attr("href").replace("#","")+"#"+i))),f()(a.get(e)).hasClass("is-active")&&n.addClass("is-active")}),a.addClass(s)}}}
/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function e(){this.currentPlugin&&this.currentPlugin.destroy(),f()(window).off("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}}]),t}(g.Plugin);
/* harmony import */w.defaults={}},
/***/"./js/foundation.responsiveMenu.js":
/*!*****************************************!*\
  !*** ./js/foundation.responsiveMenu.js ***!
  \*****************************************/
/*! exports provided: ResponsiveMenu */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}n.r(t),
/* harmony export (binding) */n.d(t,"ResponsiveMenu",function(){return x});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),v=n(/*! ./foundation.dropdownMenu */"./js/foundation.dropdownMenu.js"),y=n(/*! ./foundation.drilldown */"./js/foundation.drilldown.js"),b=n(/*! ./foundation.accordionMenu */"./js/foundation.accordionMenu.js"),w={dropdown:{cssClass:"dropdown",plugin:v.DropdownMenu},drilldown:{cssClass:"drilldown",plugin:y.Drilldown},accordion:{cssClass:"accordion-menu",plugin:b.AccordionMenu}},x=
/* */
function(e){function t(){return o(this,t),a(this,u(t).apply(this,arguments))}return c(t,e),r(t,[{key:"_setup",
/**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=f()(t),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveMenu",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function e(){// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(p.MediaQuery._init(),"string"==typeof this.rules){// Iterate through every rule found
for(var t={},n=this.rules.split(" "),i=0// Parse rules from "classes" pulled from data attribute
;i<n.length;i++){var o=n[i].split("-"),s=1<o.length?o[0]:"small",r=1<o.length?o[1]:o[0];null!==w[r]&&(t[s]=w[r])}this.rules=t}f.a.isEmptyObject(this.rules)||this._checkMediaQueries(),// Add data-mutate since children may need it.
this.$element.attr("data-mutate",this.$element.attr("data-mutate")||Object(m.GetYoDigits)(6,"responsive-menu"))}
/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function e(){var t=this;f()(window).on("changed.zf.mediaquery",function(){t._checkMediaQueries()})}
/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function e(){var t,n=this;// Iterate through each rule and find the last matching rule
f.a.each(this.rules,function(e){p.MediaQuery.atLeast(e)&&(t=e)}),// No match? No dice
t&&(// Plugin already initialized? We good
this.currentPlugin instanceof this.rules[t].plugin||(// Remove existing plugin-specific CSS classes
f.a.each(w,function(e,t){n.$element.removeClass(t.cssClass)}),// Add the CSS class for the new plugin
this.$element.addClass(this.rules[t].cssClass),// Create an instance of the new plugin
this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[t].plugin(this.$element,{})))}
/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function e(){this.currentPlugin.destroy(),f()(window).off(".zf.ResponsiveMenu")}}]),t}(g.Plugin);
/* harmony import */x.defaults={}},
/***/"./js/foundation.responsiveToggle.js":
/*!*******************************************!*\
  !*** ./js/foundation.responsiveToggle.js ***!
  \*******************************************/
/*! exports provided: ResponsiveToggle */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */n.r(t),
/* harmony export (binding) */n.d(t,"ResponsiveToggle",function(){return v});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),g,v=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=f()(t),this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="ResponsiveToggle",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */},{key:"_init",value:function e(){p.MediaQuery._init();var t=this.$element.data("responsive-toggle");// If they were set, parse the animation classes
if(t||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=f()("#".concat(t)),this.$toggler=this.$element.find("[data-toggle]").filter(function(){var e=f()(this).data("toggle");return e===t||""===e}),this.options=f.a.extend({},this.options,this.$targetMenu.data()),this.options.animate){var n=this.options.animate.split(" ");this.animationIn=n[0],this.animationOut=n[1]||null}this._update()}
/**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */},{key:"_events",value:function e(){var t=this;this._updateMqHandler=this._update.bind(this),f()(window).on("changed.zf.mediaquery",this._updateMqHandler),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}
/**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */},{key:"_update",value:function e(){
// Mobile
p.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}
/**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */},{key:"toggleMenu",value:function e(){var t=this;p.MediaQuery.atLeast(this.options.hideFor)||(
/**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */
this.options.animate?this.$targetMenu.is(":hidden")?m.Motion.animateIn(this.$targetMenu,this.animationIn,function(){t.$element.trigger("toggled.zf.responsiveToggle"),t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")}):m.Motion.animateOut(this.$targetMenu,this.animationOut,function(){t.$element.trigger("toggled.zf.responsiveToggle")}):(this.$targetMenu.toggle(0),this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"),this.$element.trigger("toggled.zf.responsiveToggle")))}},{key:"_destroy",value:function e(){this.$element.off(".zf.responsiveToggle"),this.$toggler.off(".zf.responsiveToggle"),f()(window).off("changed.zf.mediaquery",this._updateMqHandler)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */v.defaults={
/**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
hideFor:"medium",
/**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
animate:!1}},
/***/"./js/foundation.reveal.js":
/*!*********************************!*\
  !*** ./js/foundation.reveal.js ***!
  \*********************************/
/*! exports provided: Reveal */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */n.r(t),
/* harmony export (binding) */n.d(t,"Reveal",function(){return w});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),y=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),b=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),w=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Reveal",// ie9 back compat
this._init(),// Triggers init is idempotent, just need to make sure it is initialized
b.Triggers.init(f.a),m.Keyboard.register("Reveal",{ESCAPE:"close"})}
/**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */},{key:"_init",value:function e(){var t=this;g.MediaQuery._init(),this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:g.MediaQuery.current},this.$anchor=f()('[data-open="'.concat(this.id,'"]')).length?f()('[data-open="'.concat(this.id,'"]')):f()('[data-toggle="'.concat(this.id,'"]')),this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":!0,tabindex:0}),(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(f()(this.options.appendTo)),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#".concat(this.id)&&(this.onLoadListener=Object(p.onLoad)(f()(window),function(){return t.open()}))}
/**
     * Creates an overlay div to display behind the modal.
     * @private
     */},{key:"_makeOverlay",value:function e(){var t="";return this.options.additionalOverlayClasses&&(t=" "+this.options.additionalOverlayClasses),f()("<div></div>").addClass("reveal-overlay"+t).appendTo(this.options.appendTo)}
/**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */},{key:"_updatePosition",value:function e(){var t=this.$element.outerWidth(),n=f()(window).width(),i=this.$element.outerHeight(),o=f()(window).height(),s,r=null;s="auto"===this.options.hOffset?parseInt((n-t)/2,10):parseInt(this.options.hOffset,10),"auto"===this.options.vOffset?r=o<i?parseInt(Math.min(100,o/10),10):parseInt((o-i)/4,10):null!==this.options.vOffset&&(r=parseInt(this.options.vOffset,10)),null!==r&&this.$element.css({top:r+"px"}),// only worry about left if we don't have an overlay or we have a horizontal offset,
// otherwise we're perfectly in the middle
this.$overlay&&"auto"===this.options.hOffset||(this.$element.css({left:s+"px"}),this.$element.css({margin:"0px"}))}
/**
     * Adds event handlers for the modal.
     * @private
     */},{key:"_events",value:function e(){var i=this,o=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function e(t,n){if(t.target===o.$element[0]||f()(t.target).parents("[data-closable]")[0]===n)
// only close reveal when it's explicitly called
return i.close.apply(i)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function e(){o._updatePosition()}}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(e){e.target!==o.$element[0]&&!f.a.contains(o.$element[0],e.target)&&f.a.contains(document,e.target)&&o.close()}),this.options.deepLink&&f()(window).on("hashchange.zf.reveal:".concat(this.id),this._handleState.bind(this))}
/**
     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
     * @private
     */},{key:"_handleState",value:function e(t){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}
/**
    * Disables the scroll when Reveal is shown to prevent the background from shifting
    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
    */},{key:"_disableScroll",value:function e(t){t=t||f()(window).scrollTop(),f()(document).height()>f()(window).height()&&f()("html").css("top",-t)}
/**
    * Reenables the scroll when Reveal closes
    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
    */},{key:"_enableScroll",value:function e(t){t=t||parseInt(f()("html").css("top")),f()(document).height()>f()(window).height()&&(f()("html").css("top",""),f()(window).scrollTop(-t))}
/**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */},{key:"open",value:function e(){var t=this,n="#".concat(this.id);
// either update or replace browser history
this.options.deepLink&&window.location.hash!==n&&(window.history.pushState?this.options.updateHistory?window.history.pushState({},"",n):window.history.replaceState({},"",n):window.location.hash=n),// Remember anchor that opened it to set focus back later, have general anchors as fallback
this.$activeAnchor=f()(document.activeElement).is(this.$anchor)?f()(document.activeElement):this.$anchor,this.isActive=!0,// Make elements invisible, but remove display: none so we can get size and positioning
this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&(this.$overlay.css({visibility:""}).hide(),this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")),this.options.multipleOpened||
/**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */
this.$element.trigger("closeme.zf.reveal",this.id),this._disableScroll();var i=this;// Motion UI method of reveal
if(this.options.animationIn){var o=function e(){i.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),i._addGlobalClasses(),m.Keyboard.trapFocus(i.$element)};this.options.overlay&&v.Motion.animateIn(this.$overlay,"fade-in"),v.Motion.animateIn(this.$element,this.options.animationIn,function(){t.$element&&(
// protect against object having been removed
t.focusableElements=m.Keyboard.findFocusable(t.$element),o())})}// jQuery method of reveal
else this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay);// handle accessibility
this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),m.Keyboard.trapFocus(this.$element),this._addGlobalClasses(),this._addGlobalListeners(),
/**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */
this.$element.trigger("open.zf.reveal")}
/**
     * Adds classes and listeners on document required by open modals.
     *
     * The following classes are added and updated:
     * - `.is-reveal-open` - Prevents the scroll on document
     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
     *                       scroll was not disabled. This prevent a "shift" of the page content due
     *                       the scrollbar disappearing when the modal opens.
     *
     * @private
     */},{key:"_addGlobalClasses",value:function e(){var t=function e(){f()("html").toggleClass("zf-has-scroll",!!(f()(document).height()>f()(window).height()))};this.$element.on("resizeme.zf.trigger.revealScrollbarListener",function(){return t()}),t(),f()("html").addClass("is-reveal-open")}
/**
     * Removes classes and listeners on document that were required by open modals.
     * @private
     */},{key:"_removeGlobalClasses",value:function e(){this.$element.off("resizeme.zf.trigger.revealScrollbarListener"),f()("html").removeClass("is-reveal-open"),f()("html").removeClass("zf-has-scroll")}
/**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */},{key:"_addGlobalListeners",value:function e(){var t=this;this.$element&&(// If we're in the middle of cleanup, don't freak out
this.focusableElements=m.Keyboard.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||f()("body").on("click.zf.reveal",function(e){e.target!==t.$element[0]&&!f.a.contains(t.$element[0],e.target)&&f.a.contains(document,e.target)&&t.close()}),this.options.closeOnEsc&&f()(window).on("keydown.zf.reveal",function(e){m.Keyboard.handleKey(e,"Reveal",{close:function e(){t.options.closeOnEsc&&t.close()}})}))}
/**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */},{key:"close",value:function e(){function t(){
// Get the current top before the modal is closed and restore the scroll after.
// TODO: use component properties instead of HTML properties
// See https://github.com/zurb/foundation-sites/pull/10786
var e=parseInt(f()("html").css("top"));0===f()(".reveal:visible").length&&n._removeGlobalClasses(),m.Keyboard.releaseFocus(n.$element),n.$element.attr("aria-hidden",!0),n._enableScroll(e),
/**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */
n.$element.trigger("closed.zf.reveal")}
/**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */if(!this.isActive||!this.$element.is(":visible"))return!1;var n=this;// Motion UI method of hiding
// If deepLink and we did not switched to an other modal...
if(this.options.animationOut?(this.options.overlay&&v.Motion.animateOut(this.$overlay,"fade-out"),v.Motion.animateOut(this.$element,this.options.animationOut,t)):(this.$element.hide(this.options.hideDelay),this.options.overlay?this.$overlay.hide(0,t):t()),// Conditionals to remove extra event listeners added on open
this.options.closeOnEsc&&f()(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&f()("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,n.options.deepLink&&window.location.hash==="#".concat(this.id))
// Remove the history hash
if(window.history.replaceState){var i=window.location.pathname+window.location.search;this.options.updateHistory?window.history.pushState({},"",i):window.history.replaceState("",document.title,i)}else window.location.hash="";this.$activeAnchor.focus()}
/**
     * Toggles the open/closed state of a modal.
     * @function
     */},{key:"toggle",value:function e(){this.isActive?this.close():this.open()}},{key:"_destroy",
/**
     * Destroys an instance of a modal.
     * @function
     */
value:function e(){this.options.overlay&&(this.$element.appendTo(f()(this.options.appendTo)),// move $element outside of $overlay to prevent error unregisterPlugin()
this.$overlay.hide().off().remove()),this.$element.hide().off(),this.$anchor.off(".zf"),f()(window).off(".zf.reveal:".concat(this.id)),this.onLoadListener&&f()(window).off(this.onLoadListener),0===f()(".reveal:visible").length&&this._removeGlobalClasses()}}]),i}(y.Plugin);
/* harmony import */w.defaults={
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationIn:"",
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationOut:"",
/**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
showDelay:0,
/**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
hideDelay:0,
/**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnEsc:!0,
/**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
multipleOpened:!1,
/**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
vOffset:"auto",
/**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
hOffset:"auto",
/**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
fullScreen:!1,
/**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
overlay:!0,
/**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
resetOnClose:!1,
/**
   * Link the location hash to the modal.
   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, update the browser history with the open modal
   * @option
   * @default false
   */
updateHistory:!1,
/**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
appendTo:"body",
/**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
additionalOverlayClasses:""}},
/***/"./js/foundation.slider.js":
/*!*********************************!*\
  !*** ./js/foundation.slider.js ***!
  \*********************************/
/*! exports provided: Slider */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */function T(e,t){return e/t}function w(e,t,n,i){return Math.abs(e.position()[t]+e[i]()/2-n)}function h(e,t){return Math.log(t)/Math.log(e)}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Slider",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),x=/* */n.n(f),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),k=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),C=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.util.touch */"./js/foundation.util.touch.js"),v=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=x.a.extend({},i.defaults,this.$element.data(),n),this.className="Slider",// ie9 back compat
// Touch and Triggers inits are idempotent, we just need to make sure it's initialied.
g.Touch.init(x.a),v.Triggers.init(x.a),this._init(),p.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast",HOME:"min",END:"max"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}
/**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */},{key:"_init",value:function e(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):x()("#".concat(this.$handle.attr("aria-controls"))),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var t=!1,n=this;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=x()().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=1<this.inputs.length?this.inputs.eq(1):x()("#".concat(this.$handle2.attr("aria-controls"))),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),t=!0,// this.$handle.triggerHandler('click.zf.slider');
this._setInitAttr(1)),// Set handle positions
this.setHandles(),this._events()}},{key:"setHandles",value:function e(){var t=this;this.handles[1]?this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0,function(){t._setHandlePos(t.$handle2,t.inputs.eq(1).val(),!0)}):this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0)}},{key:"_reflow",value:function e(){this.setHandles()}
/**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */},{key:"_pctOfBar",value:function e(t){var n=T(t-this.options.start,this.options.end-this.options.start);switch(this.options.positionValueFunction){case"pow":n=this._logTransform(n);break;case"log":n=this._powTransform(n);break}return n.toFixed(2)}
/**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */},{key:"_value",value:function e(t){switch(this.options.positionValueFunction){case"pow":t=this._powTransform(t);break;case"log":t=this._logTransform(t);break}var n;return(this.options.end-this.options.start)*t+parseFloat(this.options.start)}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */},{key:"_logTransform",value:function e(t){return h(this.options.nonLinearBase,t*(this.options.nonLinearBase-1)+1)}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */},{key:"_powTransform",value:function e(t){return(Math.pow(this.options.nonLinearBase,t)-1)/(this.options.nonLinearBase-1)}
/**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */},{key:"_setHandlePos",value:function e(t,n,i,o){
// don't move if the slider has been disabled since its initialization
if(!this.$element.hasClass(this.options.disabledClass)){//on input change events, convert string to number...grumble.
// prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
(//might need to alter that slightly for bars that will have odd number selections.
n=parseFloat(n))<this.options.start?n=this.options.start:n>this.options.end&&(n=this.options.end);var s=this.options.doubleSided;//this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
//for click and drag events, it's weird due to the scale(-1, 1) css property
if(this.options.vertical&&!i&&(n=this.options.end-n),s)
//this block is to prevent 2 handles from crossing eachother. Could/should be improved.
if(0===this.handles.index(t)){var r=parseFloat(this.$handle2.attr("aria-valuenow"));n=r<=n?r-this.options.step:n}else{var a=parseFloat(this.$handle.attr("aria-valuenow"));n=n<=a?a+this.options.step:n}var l=this,u=this.options.vertical,c=u?"height":"width",d=u?"top":"left",h=t[0].getBoundingClientRect()[c],f=this.$element[0].getBoundingClientRect()[c],
//percentage of bar min/max value based on click or drag point
p=this._pctOfBar(n),
//number of actual pixels to shift the handle, based on the percentage obtained above
m,
//percentage of bar to shift the handle
g=(100*T((f-h)*p,f)).toFixed(this.options.decimal);//fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
n=parseFloat(n.toFixed(this.options.decimal));// declare empty object for css adjustments, only used with 2 handled-sliders
var v={};// TODO update to calculate based on values set to respective inputs??
if(this._setValues(t,n),s){var y=0===this.handles.index(t),
//empty variable, will be used for min-height/width for fill bar
b,
//percentage w/h of the handle compared to the slider bar
w=~~(100*T(h,f));//if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
if(y)
//left or top percentage value to apply to the fill bar.
v[d]="".concat(g,"%"),//calculate the new min-height/width for the fill bar.
b=parseFloat(this.$handle2[0].style[d])-g+w,//this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
//plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
o&&"function"==typeof o&&o();else{
//just caching the value of the left/bottom handle's left/top property
var x=parseFloat(this.$handle[0].style[d]);//calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
//based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
b=g-(isNaN(x)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):x)+w}// assign the min-height/width to our css object
v["min-".concat(c)]="".concat(b,"%")}this.$element.one("finished.zf.animate",function(){
/**
         * Fires when the handle is done moving.
         * @event Slider#moved
         */
l.$element.trigger("moved.zf.slider",[t])});//because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
var C=this.$element.data("dragging")?1e3/60:this.options.moveTime;Object(k.Move)(C,t,function(){
// adjusting the left/top property of the handle, based on the percentage calculated above
// if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
// fall back to next best guess.
isNaN(g)?t.css(d,"".concat(100*p,"%")):t.css(d,"".concat(g,"%")),l.options.doubleSided?
//otherwise, use the css object we created above
l.$fill.css(v):
//if single-handled, a simple method to expand the fill bar
l.$fill.css(c,"".concat(100*p,"%"))}),
/**
       * Fires when the value has not been change for a given time.
       * @event Slider#changed
       */
clearTimeout(l.timeout),l.timeout=setTimeout(function(){l.$element.trigger("changed.zf.slider",[t])},l.options.changedDelay)}}
/**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */},{key:"_setInitAttr",value:function e(t){var n=0===t?this.options.initialStart:this.options.initialEnd,i=this.inputs.eq(t).attr("id")||Object(C.GetYoDigits)(6,"slider");this.inputs.eq(t).attr({id:i,max:this.options.end,min:this.options.start,step:this.options.step}),this.inputs.eq(t).val(n),this.handles.eq(t).attr({role:"slider","aria-controls":i,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":n,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}
/**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */},{key:"_setValues",value:function e(t,n){var i=this.options.doubleSided?this.handles.index(t):0;this.inputs.eq(i).val(n),t.attr("aria-valuenow",n)}
/**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */},{key:"_handleEvent",value:function e(t,n,i){var o,s;if(i)
//change event on input
o=this._adjustValue(null,i),s=!0;else{
//click or drag events
t.preventDefault();var r=this,a=this.options.vertical,l=a?"height":"width",u=a?"top":"left",c=a?t.pageY:t.pageX,d=this.$handle[0].getBoundingClientRect()[l]/2,h=this.$element[0].getBoundingClientRect()[l],f=a?x()(window).scrollTop():x()(window).scrollLeft(),p=this.$element.offset()[u];// touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
// best way to guess this is simulated is if clientY == pageY
t.clientY===t.pageY&&(c+=f);var m=c-p,g,v=T(g=m<0?0:h<m?h:m,h),y,b;if(o=this._value(v),// turn everything around for RTL, yay math!
Object(C.rtl)()&&!this.options.vertical&&(o=this.options.end-o),o=r._adjustValue(null,o),//boolean flag for the setHandlePos fn, specifically for vertical sliders
s=!1,!n)n=w(this.$handle,u,g,l)<=w(this.$handle2,u,g,l)?this.$handle:this.$handle2}this._setHandlePos(n,o,s)}
/**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */},{key:"_adjustValue",value:function e(t,n){var i,o=this.options.step,s=parseFloat(o/2),r,a,l;return 0===(r=0<=(i=t?parseFloat(t.attr("aria-valuenow")):n)?i%o:o+i%o)?i:i=(a=i-r)+s<=i?l=a+o:a}
/**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */},{key:"_events",value:function e(){this._eventsForHandle(this.$handle),this.handles[1]&&this._eventsForHandle(this.$handle2)}
/**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */},{key:"_eventsForHandle",value:function e(t){var s=this,n,i,o=function e(t){var n=s.inputs.index(x()(this));s._handleEvent(t,s.handles.eq(n),x()(this).val())};if(// IE only triggers the change event when the input loses focus which strictly follows the HTML specification
// listen for the enter key and trigger a change
// @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events
this.inputs.off("keyup.zf.slider").on("keyup.zf.slider",function(e){13==e.keyCode&&o.call(this,e)}),this.inputs.off("change.zf.slider").on("change.zf.slider",o),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(e){if(s.$element.data("dragging"))return!1;x()(e.target).is("[data-slider-handle]")||(s.options.doubleSided?s._handleEvent(e):s._handleEvent(e,s.$handle))}),this.options.draggable){this.handles.addTouch();var r=x()("body");t.off("mousedown.zf.slider").on("mousedown.zf.slider",function(e){t.addClass("is-dragging"),s.$fill.addClass("is-dragging"),//
s.$element.data("dragging",!0),n=x()(e.currentTarget),r.on("mousemove.zf.slider",function(e){e.preventDefault(),s._handleEvent(e,n)}).on("mouseup.zf.slider",function(e){s._handleEvent(e,n),t.removeClass("is-dragging"),s.$fill.removeClass("is-dragging"),s.$element.data("dragging",!1),r.off("mousemove.zf.slider mouseup.zf.slider")})}).on("selectstart.zf.slider touchmove.zf.slider",function(e){e.preventDefault()})}t.off("keydown.zf.slider").on("keydown.zf.slider",function(t){var n=x()(this),e=s.options.doubleSided?s.handles.index(n):0,i=parseFloat(s.inputs.eq(e).val()),o;// handle keyboard event with keyboard util
p.Keyboard.handleKey(t,"Slider",{decrease:function e(){o=i-s.options.step},increase:function e(){o=i+s.options.step},decrease_fast:function e(){o=i-10*s.options.step},increase_fast:function e(){o=i+10*s.options.step},min:function e(){o=s.options.start},max:function e(){o=s.options.end},handled:function e(){
// only set handle pos when event was handled specially
t.preventDefault(),s._setHandlePos(n,o,!0)}})})}
/**
     * Destroys the slider plugin.
     */},{key:"_destroy",value:function e(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),clearTimeout(this.timeout)}}]),i}(m.Plugin);
/* harmony import */y.defaults={
/**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
start:0,
/**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
end:100,
/**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
step:1,
/**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
initialStart:0,
/**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
initialEnd:100,
/**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
binding:!1,
/**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
clickSelect:!0,
/**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
vertical:!1,
/**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
draggable:!0,
/**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
disabled:!1,
/**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
doubleSided:!1,
/**
   * Potential future feature.
   */
// steps: 100,
/**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
decimal:2,
/**
   * Time delay for dragged elements.
   */
// dragDelay: 0,
/**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
moveTime:200,
//update this if changing the transition time in the sass
/**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
disabledClass:"disabled",
/**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
invertVertical:!1,
/**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
changedDelay:500,
/**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
nonLinearBase:5,
/**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
positionValueFunction:"linear"}},
/***/"./js/foundation.smoothScroll.js":
/*!***************************************!*\
  !*** ./js/foundation.smoothScroll.js ***!
  \***************************************/
/*! exports provided: SmoothScroll */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * SmoothScroll module.
 * @module foundation.smooth-scroll
 */n.r(t),
/* harmony export (binding) */n.d(t,"SmoothScroll",function(){return g});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m,g=
/* */
function(e){function l(){return o(this,l),a(this,u(l).apply(this,arguments))}return c(l,e),r(l,[{key:"_setup",
/**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},l.defaults,this.$element.data(),n),this.className="SmoothScroll",// ie9 back compat
this._init()}
/**
     * Initialize the SmoothScroll plugin
     * @private
     */},{key:"_init",value:function e(){var t=this.$element[0].id||Object(p.GetYoDigits)(6,"smooth-scroll");this.$element.attr({id:t}),this._events()}
/**
     * Initializes events for SmoothScroll.
     * @private
     */},{key:"_events",value:function e(){this.$element.on("click.zf.smoothScroll",this._handleLinkClick),this.$element.on("click.zf.smoothScroll",'a[href^="#"]',this._handleLinkClick)}
/**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */},{key:"_handleLinkClick",value:function e(t){var n=this;
// Follow the link if it does not point to an anchor.
if(f()(t.currentTarget).is('a[href^="#"]')){var i=t.currentTarget.getAttribute("href");this._inTransition=!0,l.scrollToLoc(i,this.options,function(){n._inTransition=!1}),t.preventDefault()}}},{key:"_destroy",
/**
     * Destroys the SmoothScroll instance.
     * @function
     */
value:function e(){this.$element.off("click.zf.smoothScroll",this._handleLinkClick),this.$element.off("click.zf.smoothScroll",'a[href^="#"]',this._handleLinkClick)}}],[{key:"scrollToLoc",
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */
value:function e(t,n,i){var o=1<arguments.length&&void 0!==n?n:l.defaults,s=2<arguments.length?i:void 0,r=f()(t);// Do nothing if target does not exist to prevent errors
if(!r.length)return!1;var a=Math.round(r.offset().top-o.threshold/2-o.offset);f()("html, body").stop(!0).animate({scrollTop:a},o.animationDuration,o.animationEasing,function(){"function"==typeof s&&s()})}}]),l}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */
/**
 * Default settings for plugin.
 */
g.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0}},
/***/"./js/foundation.sticky.js":
/*!*********************************!*\
  !*** ./js/foundation.sticky.js ***!
  \*********************************/
/*! exports provided: Sticky */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */
/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */
function h(e){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*e}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Sticky",function(){return b});
/* harmony import */var f=n(/*! jquery */"jquery"),p=/* */n.n(f),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
value:function e(t,n){this.$element=t,this.options=p.a.extend({},i.defaults,this.$element.data(),n),this.className="Sticky",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(p.a),this._init()}
/**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */},{key:"_init",value:function e(){g.MediaQuery._init();var t=this.$element.parent("[data-sticky-container]"),n=this.$element[0].id||Object(m.GetYoDigits)(6,"sticky"),i=this;t.length?this.$container=t:(this.wasWrapped=!0,this.$element.wrap(this.options.container),this.$container=this.$element.parent()),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":n,"data-mutate":n}),""!==this.options.anchor&&p()("#"+i.options.anchor).attr({"data-mutate":n}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,this.onLoadListener=Object(m.onLoad)(p()(window),function(){
//We calculate the container height to have correct values for anchor points offset calculation.
i.containerHeight="none"==i.$element.css("display")?0:i.$element[0].getBoundingClientRect().height,i.$container.css("height",i.containerHeight),i.elemHeight=i.containerHeight,""!==i.options.anchor?i.$anchor=p()("#"+i.options.anchor):i._parsePoints(),i._setSizes(function(){var e=window.pageYOffset;i._calc(!1,e),//Unstick the element will ensure that proper classes are set.
i.isStuck||i._removeSticky(!(e>=i.topPoint))}),i._events(n.split("-").reverse().join("-"))})}
/**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */},{key:"_parsePoints",value:function e(){for(var t,n,i=[""==this.options.topAnchor?1:this.options.topAnchor,""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor],o={},s=0,r=i.length;s<r&&i[s];s++){var a;if("number"==typeof i[s])a=i[s];else{var l=i[s].split(":"),u=p()("#".concat(l[0]));a=u.offset().top,l[1]&&"bottom"===l[1].toLowerCase()&&(a+=u[0].getBoundingClientRect().height)}o[s]=a}this.points=o}
/**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_events",value:function e(n){var i=this,t=this.scrollListener="scroll.zf.".concat(n);this.isOn||(this.canStick&&(this.isOn=!0,p()(window).off(t).on(t,function(e){0===i.scrollCount?(i.scrollCount=i.options.checkEvery,i._setSizes(function(){i._calc(!1,window.pageYOffset)})):(i.scrollCount--,i._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(e,t){i._eventsHandler(n)}),this.$element.on("mutateme.zf.trigger",function(e,t){i._eventsHandler(n)}),this.$anchor&&this.$anchor.on("mutateme.zf.trigger",function(e,t){i._eventsHandler(n)}))}
/**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_eventsHandler",value:function e(t){var n=this,i=this.scrollListener="scroll.zf.".concat(t);n._setSizes(function(){n._calc(!1),n.canStick?n.isOn||n._events(t):n.isOn&&n._pauseListeners(i)})}
/**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */},{key:"_pauseListeners",value:function e(t){this.isOn=!1,p()(window).off(t),
/**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */
this.$element.trigger("pause.zf.sticky")}
/**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */},{key:"_calc",value:function e(t,n){if(t&&this._setSizes(),!this.canStick)return this.isStuck&&this._removeSticky(!0),!1;n||(n=window.pageYOffset),n>=this.topPoint?n<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0)}
/**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */},{key:"_setSticky",value:function e(){var t=this,n=this.options.stickTo,i="top"===n?"marginTop":"marginBottom",o="top"===n?"bottom":"top",s={};s[i]="".concat(this.options[i],"em"),s[n]=0,s[o]="auto",this.isStuck=!0,this.$element.removeClass("is-anchored is-at-".concat(o)).addClass("is-stuck is-at-".concat(n)).css(s)
/**
       * Fires when the $element has become `position: fixed;`
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
       * @event Sticky#stuckto
       */.trigger("sticky.zf.stuckto:".concat(n)),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){t._setSizes()})}
/**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */},{key:"_removeSticky",value:function e(t){var n=this.options.stickTo,i="top"===n,o={},s=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,r,a=i?"bottom":"top",l=t?"top":"bottom";o[i?"marginTop":"marginBottom"]=0,o.bottom="auto",o.top=t?0:s,this.isStuck=!1,this.$element.removeClass("is-stuck is-at-".concat(n)).addClass("is-anchored is-at-".concat(l)).css(o)
/**
       * Fires when the $element has become anchored.
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
       * @event Sticky#unstuckfrom
       */.trigger("sticky.zf.unstuckfrom:".concat(l))}
/**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */},{key:"_setSizes",value:function e(t){this.canStick=g.MediaQuery.is(this.options.stickyOn),this.canStick||t&&"function"==typeof t&&t();var n=this,i=this.$container[0].getBoundingClientRect().width,o=window.getComputedStyle(this.$container[0]),s=parseInt(o["padding-left"],10),r=parseInt(o["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":"".concat(i-s-r,"px")});var a=this.$element[0].getBoundingClientRect().height||this.containerHeight;if("none"==this.$element.css("display")&&(a=0),this.containerHeight=a,this.$container.css({height:a}),this.elemHeight=a,!this.isStuck&&this.$element.hasClass("is-at-bottom")){var l=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",l)}this._setBreakPoints(a,function(){t&&"function"==typeof t&&t()})}
/**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */},{key:"_setBreakPoints",value:function e(t,n){if(!this.canStick){if(!n||"function"!=typeof n)return!1;n()}var i=h(this.options.marginTop),o=h(this.options.marginBottom),s=this.points?this.points[0]:this.$anchor.offset().top,r=this.points?this.points[1]:s+this.anchorHeight,
// topPoint = this.$anchor.offset().top || this.points[0],
// bottomPoint = topPoint + this.anchorHeight || this.points[1],
a=window.innerHeight;"top"===this.options.stickTo?(s-=i,r-=t+i):"bottom"===this.options.stickTo&&(s-=a-(t+o),r-=a-o),this.topPoint=s,this.bottomPoint=r,n&&"function"==typeof n&&n()}
/**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */},{key:"_destroy",value:function e(){this._removeSticky(!0),this.$element.removeClass("".concat(this.options.stickyClass," is-anchored is-at-top")).css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger").off("mutateme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),this.scrollListener&&p()(window).off(this.scrollListener),this.onLoadListener&&p()(window).off(this.onLoadListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""})}}]),i}(v.Plugin);
/* harmony import */b.defaults={
/**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
container:"<div data-sticky-container></div>",
/**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
stickTo:"top",
/**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
anchor:"",
/**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
topAnchor:"",
/**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
btmAnchor:"",
/**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginTop:1,
/**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginBottom:1,
/**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
stickyOn:"medium",
/**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
stickyClass:"sticky",
/**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
containerClass:"sticky-container",
/**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
checkEvery:-1}},
/***/"./js/foundation.tabs.js":
/*!*******************************!*\
  !*** ./js/foundation.tabs.js ***!
  \*******************************/
/*! exports provided: Tabs */
/***/function(e,t,n){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */n.r(t),
/* harmony export (binding) */n.d(t,"Tabs",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),v,y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,this.$element.data(),n),this.className="Tabs",// ie9 back compat
this._init(),m.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}
/**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */},{key:"_init",value:function e(){var s=this,r=this;if(this._isInitializing=!0,this.$element.attr({role:"tablist"}),this.$tabTitles=this.$element.find(".".concat(this.options.linkClass)),this.$tabContent=f()('[data-tabs-content="'.concat(this.$element[0].id,'"]')),this.$tabTitles.each(function(){var e=f()(this),t=e.find("a"),n=e.hasClass("".concat(r.options.linkActiveClass)),i=t.attr("data-tabs-target")||t[0].hash.slice(1),o=t[0].id?t[0].id:"".concat(i,"-label"),s=f()("#".concat(i));e.attr({role:"presentation"}),t.attr({role:"tab","aria-controls":i,"aria-selected":n,id:o,tabindex:n?"0":"-1"}),s.attr({role:"tabpanel","aria-labelledby":o}),// Save up the initial hash to return to it later when going back in history
n&&(r._initialAnchor="#".concat(i)),n||s.attr("aria-hidden","true"),n&&r.options.autoFocus&&(r.onLoadListener=Object(p.onLoad)(f()(window),function(){f()("html, body").animate({scrollTop:e.offset().top},r.options.deepLinkSmudgeDelay,function(){t.focus()})}))}),this.options.matchHeight){var t=this.$tabContent.find("img");t.length?Object(g.onImagesLoaded)(t,this._setHeight.bind(this)):this._setHeight()}// Current context-bound function to open tabs on page load or history hashchange
this._checkDeepLink=function(){var e=window.location.hash;if(!e.length){
// If we are still initializing and there is no anchor, then there is nothing to do
if(s._isInitializing)return;// Otherwise, move to the initial anchor
s._initialAnchor&&(e=s._initialAnchor)}var t=e&&f()(e),n=e&&s.$element.find('[href$="'+e+'"]'),i=!(!t.length||!n.length);if(// If there is an anchor for the hash, select it
t&&t.length&&n&&n.length?s.selectTab(t,!0):s._collapse(),i){
// Roll up a little to show the titles
if(s.options.deepLinkSmudge){var o=s.$element.offset();f()("html, body").animate({scrollTop:o.top},s.options.deepLinkSmudgeDelay)}
/**
           * Fires when the plugin has deeplinked at pageload
           * @event Tabs#deeplink
           */s.$element.trigger("deeplink.zf.tabs",[n,t])}},//use browser to open a tab, if it exists in this tabset
this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}
/**
     * Adds event handlers for items within the tabs.
     * @private
     */},{key:"_events",value:function e(){this._addKeyHandler(),this._addClickHandler(),this._setHeightMqHandler=null,this.options.matchHeight&&(this._setHeightMqHandler=this._setHeight.bind(this),f()(window).on("changed.zf.mediaquery",this._setHeightMqHandler)),this.options.deepLink&&f()(window).on("hashchange",this._checkDeepLink)}
/**
     * Adds click handlers for items within the tabs.
     * @private
     */},{key:"_addClickHandler",value:function e(){var t=this;this.$element.off("click.zf.tabs").on("click.zf.tabs",".".concat(this.options.linkClass),function(e){e.preventDefault(),e.stopPropagation(),t._handleTabChange(f()(this))})}
/**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */},{key:"_addKeyHandler",value:function e(){var r=this;this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(t){if(9!==t.which){var n=f()(this),i=n.parent("ul").children("li"),o,s;i.each(function(e){f()(this).is(n)&&(s=r.options.wrapOnKeys?(o=0===e?i.last():i.eq(e-1),e===i.length-1?i.first():i.eq(e+1)):(o=i.eq(Math.max(0,e-1)),i.eq(Math.min(e+1,i.length-1))))}),// handle keyboard event with keyboard util
m.Keyboard.handleKey(t,"Tabs",{open:function e(){n.find('[role="tab"]').focus(),r._handleTabChange(n)},previous:function e(){o.find('[role="tab"]').focus(),r._handleTabChange(o)},next:function e(){s.find('[role="tab"]').focus(),r._handleTabChange(s)},handled:function e(){t.stopPropagation(),t.preventDefault()}})}})}
/**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */},{key:"_handleTabChange",value:function e(t,n){
// With `activeCollapse`, if the target is the active Tab, collapse it.
if(t.hasClass("".concat(this.options.linkActiveClass)))this.options.activeCollapse&&this._collapse();else{var i=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass)),o=t.find('[role="tab"]'),s=o.attr("data-tabs-target"),r=s&&s.length?"#".concat(s):o[0].hash,a=this.$tabContent.find(r);//close old tab
this._collapseTab(i),//open new tab
this._openTab(t),//either replace or update browser history
this.options.deepLink&&!n&&(this.options.updateHistory?history.pushState({},"",r):history.replaceState({},"",r))
/**
       * Fires when the plugin has successfully changed tabs.
       * @event Tabs#change
       */,this.$element.trigger("change.zf.tabs",[t,a]),//fire to children a mutation event
a.find("[data-mutate]").trigger("mutateme.zf.trigger")}}
/**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */},{key:"_openTab",value:function e(t){var n=t.find('[role="tab"]'),i=n.attr("data-tabs-target")||n[0].hash.slice(1),o=this.$tabContent.find("#".concat(i));t.addClass("".concat(this.options.linkActiveClass)),n.attr({"aria-selected":"true",tabindex:"0"}),o.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")}
/**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */},{key:"_collapseTab",value:function e(t){var n=t.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({"aria-selected":"false",tabindex:-1});f()("#".concat(n.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({"aria-hidden":"true"})}
/**
     * Collapses the active Tab.
     * @fires Tabs#collapse
     * @function
     */},{key:"_collapse",value:function e(){var t=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass));t.length&&(this._collapseTab(t),
/**
        * Fires when the plugin has successfully collapsed tabs.
        * @event Tabs#collapse
        */
this.$element.trigger("collapse.zf.tabs",[t]))}
/**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */},{key:"selectTab",value:function e(t,n){var i;(i="object"===s(t)?t[0].id:t).indexOf("#")<0&&(i="#".concat(i));var o=this.$tabTitles.has('[href$="'.concat(i,'"]'));this._handleTabChange(o,n)}},{key:"_setHeight",
/**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with `data-match-height="true"`, tabs sets to equal height
     * @function
     * @private
     */
value:function e(){var i=0,o=this;// Lock down the `this` value for the root tabs object
this.$tabContent.find(".".concat(this.options.panelClass)).css("height","").each(function(){var e=f()(this),t=e.hasClass("".concat(o.options.panelActiveClass));// get the options from the parent instead of trying to get them from the child
t||e.css({visibility:"hidden",display:"block"});var n=this.getBoundingClientRect().height;t||e.css({visibility:"",display:""}),i=i<n?n:i}).css("height","".concat(i,"px"))}
/**
     * Destroys an instance of tabs.
     * @fires Tabs#destroyed
     */},{key:"_destroy",value:function e(){this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(),this.options.matchHeight&&null!=this._setHeightMqHandler&&f()(window).off("changed.zf.mediaquery",this._setHeightMqHandler),this.options.deepLink&&f()(window).off("hashchange",this._checkDeepLink),this.onLoadListener&&f()(window).off(this.onLoadListener)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */y.defaults={
/**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:!1,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLink` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:!1,
/**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:!1,
/**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
wrapOnKeys:!0,
/**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
matchHeight:!1,
/**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
activeCollapse:!1,
/**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
linkClass:"tabs-title",
/**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
linkActiveClass:"is-active",
/**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
panelClass:"tabs-panel",
/**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
panelActiveClass:"is-active"}},
/***/"./js/foundation.toggler.js":
/*!**********************************!*\
  !*** ./js/foundation.toggler.js ***!
  \**********************************/
/*! exports provided: Toggler */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */n.r(t),
/* harmony export (binding) */n.d(t,"Toggler",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),f=/* */n.n(h),p=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),y=
/* */
function(e){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function e(t,n){this.$element=t,this.options=f.a.extend({},i.defaults,t.data(),n),this.className="",this.className="Toggler",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
v.Triggers.init(f.a),this._init(),this._events()}
/**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */},{key:"_init",value:function e(){var t;// Parse animation classes if they were set
this.options.animate?(t=this.options.animate.split(" "),this.animationIn=t[0],this.animationOut=t[1]||null):(t=this.$element.data("toggler"),// Allow for a . at the beginning of the string
this.className="."===t[0]?t.slice(1):t);// Add ARIA attributes to triggers:
var s=this.$element[0].id,n=f()('[data-open~="'.concat(s,'"], [data-close~="').concat(s,'"], [data-toggle~="').concat(s,'"]'));// - aria-expanded: according to the element visibility.
n.attr("aria-expanded",!this.$element.is(":hidden")),// - aria-controls: adding the element id to it if not already in it.
n.each(function(e,t){var n=f()(t),i=n.attr("aria-controls")||"",o;new RegExp("\\b".concat(Object(g.RegExpEscape)(s),"\\b")).test(i)||n.attr("aria-controls",i?"".concat(i," ").concat(s):s)})}
/**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */},{key:"_events",value:function e(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}
/**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */},{key:"toggle",value:function e(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function e(){this.$element.toggleClass(this.className);var t=this.$element.hasClass(this.className);t?
/**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */
this.$element.trigger("on.zf.toggler"):
/**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */
this.$element.trigger("off.zf.toggler"),this._updateARIA(t),this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_toggleAnimate",value:function e(){var t=this;this.$element.is(":hidden")?p.Motion.animateIn(this.$element,this.animationIn,function(){t._updateARIA(!0),this.trigger("on.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")}):p.Motion.animateOut(this.$element,this.animationOut,function(){t._updateARIA(!1),this.trigger("off.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")})}},{key:"_updateARIA",value:function e(t){var n=this.$element[0].id;f()('[data-open="'.concat(n,'"], [data-close="').concat(n,'"], [data-toggle="').concat(n,'"]')).attr({"aria-expanded":!!t})}
/**
     * Destroys the instance of Toggler on the element.
     * @function
     */},{key:"_destroy",value:function e(){this.$element.off(".zf.toggler")}}]),i}(m.Plugin);
/* harmony import */y.defaults={
/**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
animate:!1}},
/***/"./js/foundation.tooltip.js":
/*!**********************************!*\
  !*** ./js/foundation.tooltip.js ***!
  \**********************************/
/*! exports provided: Tooltip */
/***/function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function e(t,n,i){var o=c(t,n);if(o){var s=Object.getOwnPropertyDescriptor(o,n);return s.get?s.get.call(i):s.value}})(e,t,n||e)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}
/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */n.r(t),
/* harmony export (binding) */n.d(t,"Tooltip",function(){return w});
/* harmony import */var p=n(/*! jquery */"jquery"),m=/* */n.n(p),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b,w=
/* */
function(e){function i(){return o(this,i),a(this,d(i).apply(this,arguments))}return h(i,e),r(i,[{key:"_setup",
/**
     * Creates a new instance of a Tooltip.
     * @class
     * @name Tooltip
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
value:function e(t,n){this.$element=t,this.options=m.a.extend({},i.defaults,this.$element.data(),n),this.className="Tooltip",// ie9 back compat
this.isActive=!1,this.isClick=!1,// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(m.a),this._init()}
/**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */},{key:"_init",value:function e(){v.MediaQuery._init();var t=this.$element.attr("aria-describedby")||Object(g.GetYoDigits)(6,"tooltip");this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?m()(this.options.template):this._buildTemplate(t),this.options.allowHtml?this.template.appendTo(document.body).html(this.options.tipText).hide():this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":t,"data-yeti-box":t,"data-toggle":t,"data-resize":t}).addClass(this.options.triggerClass),u(d(i.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function e(){
// handle legacy classnames
var t=this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);return t?t[0]:"top"}},{key:"_getDefaultAlignment",value:function e(){return"center"}},{key:"_getHOffset",value:function e(){return"left"===this.position||"right"===this.position?this.options.hOffset+this.options.tooltipWidth:this.options.hOffset}},{key:"_getVOffset",value:function e(){return"top"===this.position||"bottom"===this.position?this.options.vOffset+this.options.tooltipHeight:this.options.vOffset}
/**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */},{key:"_buildTemplate",value:function e(t){var n="".concat(this.options.tooltipClass," ").concat(this.options.templateClasses).trim(),i;return m()("<div></div>").addClass(n).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:t})}
/**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */},{key:"_setPosition",value:function e(){u(d(i.prototype),"_setPosition",this).call(this,this.$element,this.template)}
/**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */},{key:"show",value:function e(){if("all"!==this.options.showOn&&!v.MediaQuery.is(this.options.showOn))
// console.error('The screen is too small to display this tooltip');
return!1;var t=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.template.removeClass("top bottom left right").addClass(this.position),this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-"+this.alignment),
/**
       * Fires to close all other open tooltips on the page
       * @event Closeme#tooltip
       */
this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),t.isActive=!0,// console.log(this.template);
this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){//maybe do stuff?
}),
/**
       * Fires when the tooltip is shown
       * @event Tooltip#show
       */
this.$element.trigger("show.zf.tooltip")}
/**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */},{key:"hide",value:function e(){
// console.log('hiding', this.$element.data('yeti-box'));
var t=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){t.isActive=!1,t.isClick=!1}),
/**
       * fires when the tooltip is hidden
       * @event Tooltip#hide
       */
this.$element.trigger("hide.zf.tooltip")}
/**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */},{key:"_events",value:function e(){var t=this,n=this.template,i=!1;this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(e){t.isActive||(t.timeout=setTimeout(function(){t.show()},t.options.hoverDelay))}).on("mouseleave.zf.tooltip",Object(g.ignoreMousedisappear)(function(e){clearTimeout(t.timeout),(!i||t.isClick&&!t.options.clickOpen)&&t.hide()})),this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick||(t.isClick=!0,!t.options.disableHover&&t.$element.attr("tabindex")||t.isActive||t.show())}):this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick=!0}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(e){t.isActive?t.hide():t.show()}),this.$element.on({
// 'toggle.zf.trigger': this.toggle.bind(this),
// 'close.zf.trigger': this.hide.bind(this)
"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(e){if(i=!0,t.isClick)
// If we're not showing open on clicks, we need to pretend a click-launched focus isn't
// a real focus, otherwise on hover and come back we get bad behavior
return t.options.clickOpen||(i=!1),!1;t.show()}).on("focusout.zf.tooltip",function(e){i=!1,t.isClick=!1,t.hide()}).on("resizeme.zf.trigger",function(){t.isActive&&t._setPosition()})}
/**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */},{key:"toggle",value:function e(){this.isActive?this.hide():this.show()}
/**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */},{key:"_destroy",value:function e(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),this.template.remove()}}]),i}(n(/*! ./foundation.positionable */"./js/foundation.positionable.js").Positionable);
/* harmony import */w.defaults={disableForTouch:!1,
/**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */
hoverDelay:200,
/**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */
fadeInDuration:150,
/**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */
fadeOutDuration:150,
/**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:!1,
/**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */
templateClasses:"",
/**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */
tooltipClass:"tooltip",
/**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */
triggerClass:"has-tip",
/**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */
showOn:"small",
/**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */
template:"",
/**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */
tipText:"",touchCloseText:"Tap to close.",
/**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */
clickOpen:!0,
/**
   * Position of tooltip. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, tooltip will first try to
   * position as defined by data-position and data-alignment, but reposition if
   * it would cause an overflow.  @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * Less common for tooltips.
   * @option
   * @type {boolean}
   * @default false
   */
allowBottomOverlap:!1,
/**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Distance, in pixels, the template should push away from the anchor on the X axis
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
   * @option
   * @type {number}
   * @default 14
   */
tooltipHeight:14,
/**
   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
   * @option
   * @type {number}
   * @default 12
   */
tooltipWidth:12,
/**
  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
  * allowing HTML may open yourself up to XSS attacks.
  * @option
  * @type {boolean}
  * @default false
  */
allowHtml:!1}},
/***/"./js/foundation.util.box.js":
/*!***********************************!*\
  !*** ./js/foundation.util.box.js ***!
  \***********************************/
/*! exports provided: Box */
/***/function(e,t,n){"use strict";function i(e,t,n,i,o){return 0===s(e,t,n,i,o)}function s(e,t,n,i,o){var s=d(e),r,a,l,u;if(t){var c=d(t);a=c.height+c.offset.top-(s.offset.top+s.height),r=s.offset.top-c.offset.top,l=s.offset.left-c.offset.left,u=c.width+c.offset.left-(s.offset.left+s.width)}else a=s.windowDims.height+s.windowDims.offset.top-(s.offset.top+s.height),r=s.offset.top-s.windowDims.offset.top,l=s.offset.left-s.windowDims.offset.left,u=s.windowDims.width-(s.offset.left+s.width);return a=o?0:Math.min(a,0),r=Math.min(r,0),l=Math.min(l,0),u=Math.min(u,0),n?l+u:i?r+a:Math.sqrt(r*r+a*a+l*l+u*u)}
/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */function d(e){if((e=e.length?e[0]:e)===window||e===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var t=e.getBoundingClientRect(),n=e.parentNode.getBoundingClientRect(),i=document.body.getBoundingClientRect(),o=window.pageYOffset,s=window.pageXOffset;return{width:t.width,height:t.height,offset:{top:t.top+o,left:t.left+s},parentDims:{width:n.width,height:n.height,offset:{top:n.top+o,left:n.left+s}},windowDims:{width:i.width,height:i.height,offset:{top:o,left:s}}}}
/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */function o(e,t,n,i,o,s){switch(console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"),n){case"top":return Object(a.rtl)()?r(e,t,"top","left",i,o,s):r(e,t,"top","right",i,o,s);case"bottom":return Object(a.rtl)()?r(e,t,"bottom","left",i,o,s):r(e,t,"bottom","right",i,o,s);case"center top":return r(e,t,"top","center",i,o,s);case"center bottom":return r(e,t,"bottom","center",i,o,s);case"center left":return r(e,t,"left","center",i,o,s);case"center right":return r(e,t,"right","center",i,o,s);case"left bottom":return r(e,t,"bottom","left",i,o,s);case"right bottom":return r(e,t,"bottom","right",i,o,s);
// Backwards compatibility... this along with the reveal and reveal full
// classes are the only ones that didn't reference anchor
case"center":return{left:$eleDims.windowDims.offset.left+$eleDims.windowDims.width/2-$eleDims.width/2+o,top:$eleDims.windowDims.offset.top+$eleDims.windowDims.height/2-($eleDims.height/2+i)};case"reveal":return{left:($eleDims.windowDims.width-$eleDims.width)/2+o,top:$eleDims.windowDims.offset.top+i};case"reveal full":return{left:$eleDims.windowDims.offset.left,top:$eleDims.windowDims.offset.top};break;default:return{left:Object(a.rtl)()?$anchorDims.offset.left-$eleDims.width+$anchorDims.width-o:$anchorDims.offset.left+o,top:$anchorDims.offset.top+$anchorDims.height+i}}}function r(e,t,n,i,o,s,r){var a=d(e),l=t?d(t):null,u,c;// set position related attribute
switch(n){case"top":u=l.offset.top-(a.height+o);break;case"bottom":u=l.offset.top+l.height+o;break;case"left":c=l.offset.left-(a.width+s);break;case"right":c=l.offset.left+l.width+s;break}// set alignment related attribute
switch(n){case"top":case"bottom":switch(i){case"left":c=l.offset.left+s;break;case"right":c=l.offset.left-a.width+l.width-s;break;case"center":c=r?s:l.offset.left+l.width/2-a.width/2+s;break}break;case"right":case"left":switch(i){case"bottom":u=l.offset.top-o+l.height-a.height;break;case"top":u=l.offset.top+o;break;case"center":u=l.offset.top+o+l.height/2-a.height/2;break}break}return{top:u,left:c}}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Box",function(){return l});
/* harmony import */var a=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),l={ImNotTouchingYou:i,OverlapArea:s,GetDimensions:d,GetOffsets:o,GetExplicitOffsets:r
/**
   * Compares the dimensions of an element to a container and determines collision events with container.
   * @function
   * @param {jQuery} element - jQuery object to test for collisions.
   * @param {jQuery} parent - jQuery object to use as bounding container.
   * @param {Boolean} lrOnly - set to true to check left and right values only.
   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
   * @default if no parent object passed, detects collisions with `window`.
   * @returns {Boolean} - true if collision free, false if a collision in any direction.
   */}},
/***/"./js/foundation.util.imageLoader.js":
/*!*******************************************!*\
  !*** ./js/foundation.util.imageLoader.js ***!
  \*******************************************/
/*! exports provided: onImagesLoaded */
/***/function(e,t,n){"use strict";
/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */
function i(e,t){function i(){0===--o&&t()}var n=this,o=e.length;0===o&&t(),e.each(function(){
// Check if image is loaded
if(this.complete&&void 0!==this.naturalWidth)i();else{
// If the above check failed, simulate loading on detached element.
var e=new Image,n="load.zf.images error.zf.images";// Still count image as loaded if it finalizes with an error.
s()(e).one(n,function e(t){
// Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
s()(this).off(n,e),i()}),e.src=s()(this).attr("src")}})}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"onImagesLoaded",function(){return i});
/* harmony import */var o=n(/*! jquery */"jquery"),s=/* */n.n(o);
/* harmony import */},
/***/"./js/foundation.util.keyboard.js":
/*!****************************************!*\
  !*** ./js/foundation.util.keyboard.js ***!
  \****************************************/
/*! exports provided: Keyboard */
/***/function(e,t,n){"use strict";// Functions pulled out to be referenceable from internals
function s(e){return!!e&&e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!c()(this).is(":visible")||c()(this).attr("tabindex")<0);//only have visible elements and those that have a tabindex greater or equal 0
})}function r(e){var t=a[e.which||e.keyCode]||String.fromCharCode(e.which).toUpperCase();// Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
return t=t.replace(/\W+/,""),e.shiftKey&&(t="SHIFT_".concat(t)),e.ctrlKey&&(t="CTRL_".concat(t)),e.altKey&&(t="ALT_".concat(t)),// Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
t=t.replace(/_$/,"")}
/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function i(e){var t={};for(var n in e)t[e[n]]=e[n];return t}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Keyboard",function(){return l});
/* harmony import */var o=n(/*! jquery */"jquery"),c=/* */n.n(o),d=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),a={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",35:"END",36:"HOME",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},h={},l={keys:i(a),
/**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
parseKey:r,
/**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
handleKey:function e(t,n,i){var o=h[n],s=this.parseKey(t),r,a,l;if(!o)return console.warn("Component not defined!");if((l=i[a=(
// this component does not differentiate between ltr and rtl
r=void 0===o.ltr?o:
// merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
Object(d.rtl)()?c.a.extend({},o.ltr,o.rtl):c.a.extend({},o.rtl,o.ltr))[s]])&&"function"==typeof l){
// execute function  if exists
var u=l.apply();(i.handled||"function"==typeof i.handled)&&
// execute function when event was handled
i.handled(u)}else(i.unhandled||"function"==typeof i.unhandled)&&
// execute function when event was not handled
i.unhandled()},
/**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
findFocusable:s,
/**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */
register:function e(t,n){h[t]=n},
// TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
//
/**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
trapFocus:function e(t){var n=s(t),i=n.eq(0),o=n.eq(-1);t.on("keydown.zf.trapfocus",function(e){e.target===o[0]&&"TAB"===r(e)?(e.preventDefault(),i.focus()):e.target===i[0]&&"SHIFT_TAB"===r(e)&&(e.preventDefault(),o.focus())})},
/**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
releaseFocus:function e(t){t.off("keydown.zf.trapfocus")}};
/* harmony import */},
/***/"./js/foundation.util.mediaQuery.js":
/*!******************************************!*\
  !*** ./js/foundation.util.mediaQuery.js ***!
  \******************************************/
/*! exports provided: MediaQuery */
/***/function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}
// Default set of media queries
// Thank you: https://github.com/sindresorhus/query-string
function r(e){var t={};return"string"!=typeof e?t:// browsers re-quote string style values
(e=e.trim().slice(1,-1))?t=e.split("&").reduce(function(e,t){var n=t.replace(/\+/g," ").split("="),i=n[0],o=n[1];return i=decodeURIComponent(i),// missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
o=void 0===o?null:decodeURIComponent(o),e.hasOwnProperty(i)?Array.isArray(e[i])?e[i].push(o):e[i]=[e[i],o]:e[i]=o,e},{}):t}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"MediaQuery",function(){return l});
/* harmony import */var i=n(/*! jquery */"jquery"),a=/* */n.n(i),s={default:"only screen",landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"};
/* harmony import */ // matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license
/* eslint-disable */
window.matchMedia||(window.matchMedia=function(){// For browsers that support matchMedium api such as IE 9 and webkit
var t=window.styleMedia||window.media;// For those that don't support matchMedium
if(!t){var i=document.createElement("style"),e=document.getElementsByTagName("script")[0],o=null;i.type="text/css",i.id="matchmediajs-test",e?e.parentNode.insertBefore(i,e):document.head.appendChild(i),// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
o="getComputedStyle"in window&&window.getComputedStyle(i,null)||i.currentStyle,t={matchMedium:function e(t){var n="@media "+t+"{ #matchmediajs-test { width: 1px; } }";// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
// Test if media query is true or false
return i.styleSheet?i.styleSheet.cssText=n:i.textContent=n,"1px"===o.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}());
/* eslint-enable */
var l={queries:[],current:"",
/**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
_init:function e(){var t=this,n;a()("meta.foundation-mq").length||a()('<meta class="foundation-mq">').appendTo(document.head);var i=a()(".foundation-mq").css("font-family"),o;for(var s in o=r(i))o.hasOwnProperty(s)&&t.queries.push({name:s,value:"only screen and (min-width: ".concat(o[s],")")});this.current=this._getCurrentSize(),this._watcher()},
/**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
atLeast:function e(t){var n=this.get(t);return!!n&&window.matchMedia(n).matches},
/**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
is:function e(t){return 1<(t=t.trim().split(" ")).length&&"only"===t[1]?t[0]===this._getCurrentSize():this.atLeast(t[0])},
/**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
get:function e(t){for(var n in this.queries)if(this.queries.hasOwnProperty(n)){var i=this.queries[n];if(t===i.name)return i.value}return null},
/**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
_getCurrentSize:function e(){for(var t,n=0;n<this.queries.length;n++){var i=this.queries[n];window.matchMedia(i.value).matches&&(t=i)}return"object"===o(t)?t.name:t},
/**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
_watcher:function e(){var n=this;a()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery",function(){var e=n._getCurrentSize(),t=n.current;e!==t&&(
// Change the current media query
n.current=e,// Broadcast the media query change on the window
a()(window).trigger("changed.zf.mediaquery",[e,t]))})}}},
/***/"./js/foundation.util.motion.js":
/*!**************************************!*\
  !*** ./js/foundation.util.motion.js ***!
  \**************************************/
/*! exports provided: Move, Motion */
/***/function(e,t,n){"use strict";function i(t,n,i){function o(e){a||(a=e),// console.log(start, ts);
r=e-a,i.apply(n),r<t?s=window.requestAnimationFrame(o,n):(window.cancelAnimationFrame(s),n.trigger("finished.zf.animate",[n]).triggerHandler("finished.zf.animate",[n]))}var s,r,a=null;// console.log('called');
if(0===t)return i.apply(n),void n.trigger("finished.zf.animate",[n]).triggerHandler("finished.zf.animate",[n]);s=window.requestAnimationFrame(o)}
/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */function o(e,t,n,i){// Hides the element (for out animations), resets the element, and runs a callback
function o(){e||t.hide(),s(),i&&i.apply(t)}// Resets transitions and removes motion-specific classes
function s(){t[0].style.transitionDuration=0,t.removeClass("".concat(r," ").concat(a," ").concat(n))}if((t=l()(t).eq(0)).length){var r=e?c[0]:c[1],a=e?d[0]:d[1];// Set up the animation
s(),t.addClass(n).css("transition","none"),requestAnimationFrame(function(){t.addClass(r),e&&t.show()}),// Start the animation
requestAnimationFrame(function(){t[0].offsetWidth,t.css("transition","").addClass(a)}),// Clean up the animation when it finishes
t.one(Object(u.transitionend)(t),o)}}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Move",function(){return i}),
/* harmony export (binding) */n.d(t,"Motion",function(){return r});
/* harmony import */var s=n(/*! jquery */"jquery"),l=/* */n.n(s),u=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),c=["mui-enter","mui-leave"],d=["mui-enter-active","mui-leave-active"],r={animateIn:function e(t,n,i){o(!0,t,n,i)},animateOut:function e(t,n,i){o(!1,t,n,i)}};
/* harmony import */},
/***/"./js/foundation.util.nest.js":
/*!************************************!*\
  !*** ./js/foundation.util.nest.js ***!
  \************************************/
/*! exports provided: Nest */
/***/function(e,t,n){"use strict";n.r(t),
/* harmony export (binding) */n.d(t,"Nest",function(){return o});
/* harmony import */var i=n(/*! jquery */"jquery"),u=/* */n.n(i),o={Feather:function e(t,n){var i=1<arguments.length&&void 0!==n?n:"zf";t.attr("role","menubar");var o=t.find("li").attr({role:"menuitem"}),s="is-".concat(i,"-submenu"),r="".concat(s,"-item"),a="is-".concat(i,"-submenu-parent"),l="accordion"!==i;// Accordions handle their own ARIA attriutes.
o.each(function(){var e=u()(this),t=e.children("ul");t.length&&(e.addClass(a),t.addClass("submenu ".concat(s)).attr({"data-submenu":""}),l&&(e.attr({"aria-haspopup":!0,"aria-label":e.children("a:first").text()}),// Note:  Drilldowns behave differently in how they hide, and so need
// additional attributes.  We should look if this possibly over-generalized
// utility (Nest) is appropriate when we rework menus in 6.4
"drilldown"===i&&e.attr({"aria-expanded":!1})),t.addClass("submenu ".concat(s)).attr({"data-submenu":"",role:"menubar"}),"drilldown"===i&&t.attr({"aria-hidden":!0})),e.parent("[data-submenu]").length&&e.addClass("is-submenu-item ".concat(r))})},Burn:function e(t,n){var//items = menu.find('li'),
i="is-".concat(n,"-submenu"),o="".concat(i,"-item"),s="is-".concat(n,"-submenu-parent");t.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(i," ").concat(o," ").concat(s," is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display","")}};
/* harmony import */},
/***/"./js/foundation.util.timer.js":
/*!*************************************!*\
  !*** ./js/foundation.util.timer.js ***!
  \*************************************/
/*! exports provided: Timer */
/***/function(e,t,n){"use strict";function i(t,e,n){var i=this,o=e.duration,
//options is an object for easily adding features later.
s=Object.keys(t.data())[0]||"timer",r=-1,a,l;this.isPaused=!1,this.restart=function(){r=-1,clearTimeout(l),this.start()},this.start=function(){this.isPaused=!1,// if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(l),r=r<=0?o:r,t.data("paused",!1),a=Date.now(),l=setTimeout(function(){e.infinite&&i.restart(),n&&"function"==typeof n&&n()},r),t.trigger("timerstart.zf.".concat(s))},this.pause=function(){this.isPaused=!0,//if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(l),t.data("paused",!0);var e=Date.now();r-=e-a,t.trigger("timerpaused.zf.".concat(s))}}
/***/n.r(t),
/* harmony export (binding) */n.d(t,"Timer",function(){return i});
/* harmony import */var o=n(/*! jquery */"jquery"),s=/* */n.n(o);
/* harmony import */},
/***/"./js/foundation.util.touch.js":
/*!*************************************!*\
  !*** ./js/foundation.util.touch.js ***!
  \*************************************/
/*! exports provided: Touch */
/***/function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}
//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
function r(e){// If the touch did not move, consider it as a "tap"
if(this.removeEventListener("touchmove",a),this.removeEventListener("touchend",r),!w){var t=h.a.Event("tap",y||e);h()(this).trigger(t)}y=null,w=b=!1}function a(e){if(h.a.spotSwipe.preventDefault&&e.preventDefault(),b){var t=e.touches[0].pageX,n=e.touches[0].pageY,i=p-t,o=m-n,s;w=!0,v=(new Date).getTime()-g,Math.abs(i)>=h.a.spotSwipe.moveThreshold&&v<=h.a.spotSwipe.timeThreshold&&(s=0<i?"left":"right"),// else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
//   dir = dy > 0 ? 'down' : 'up';
// }
s&&(e.preventDefault(),r.apply(this,arguments),h()(this).trigger(h.a.Event("swipe",e),s).trigger(h.a.Event("swipe".concat(s),e)))}}function l(e){1==e.touches.length&&(p=e.touches[0].pageX,m=e.touches[0].pageY,y=e,w=!(b=!0),g=(new Date).getTime(),this.addEventListener("touchmove",a,!1),this.addEventListener("touchend",r,!1))}function u(){this.addEventListener&&this.addEventListener("touchstart",l,!1)}function c(){this.removeEventListener("touchstart",l)}n.r(t),
/* harmony export (binding) */n.d(t,"Touch",function(){return f});
/* harmony import */var d=n(/*! jquery */"jquery"),h=/* */n.n(d),f={},p,m,g,v,y,b=!1,w=!1,x=
/* */
function(){function t(e){i(this,t),this.version="1.0.0",this.enabled="ontouchstart"in document.documentElement,this.preventDefault=!1,this.moveThreshold=75,this.timeThreshold=200,this.$=e,this._init()}return s(t,[{key:"_init",value:function e(){var t=this.$;t.event.special.swipe={setup:u},t.event.special.tap={setup:u},t.each(["left","up","down","right"],function(){t.event.special["swipe".concat(this)]={setup:function e(){t(this).on("swipe",t.noop)}}})}}]),t}();
/* harmony import */
/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/
f.setupSpotSwipe=function(e){e.spotSwipe=new x(e)},
/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/
f.setupTouchHandler=function(i){i.fn.addTouch=function(){this.each(function(e,t){i(t).bind("touchstart touchmove touchend touchcancel",function(e){
//we pass the original event object because the jQuery event
//object is normalized to w3c specs and does not provide the TouchList
n(e)})});var n=function e(t){var n,i=t.changedTouches[0],o,s={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[t.type],r;"MouseEvent"in window&&"function"==typeof window.MouseEvent?r=new window.MouseEvent(s,{bubbles:!0,cancelable:!0,screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY}):(r=document.createEvent("MouseEvent")).initMouseEvent(s,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0
/*left*/,null),i.target.dispatchEvent(r)}}},f.init=function(e){void 0===e.spotSwipe&&(f.setupSpotSwipe(e),f.setupTouchHandler(e))}},
/***/"./js/foundation.util.triggers.js":
/*!****************************************!*\
  !*** ./js/foundation.util.triggers.js ***!
  \****************************************/
/*! exports provided: Triggers */
/***/function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function i(t,e,n){var i,o=Array.prototype.slice.call(arguments,3);r()(window).off(e).on(e,function(e){i&&clearTimeout(i),i=setTimeout(function(){n.apply(null,o)},t||10)})}n.r(t),
/* harmony export (binding) */n.d(t,"Triggers",function(){return d});
/* harmony import */var s=n(/*! jquery */"jquery"),r=/* */n.n(s),a=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),l=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),u=function(){for(var e=["WebKit","Moz","O","Ms",""],t=0;t<e.length;t++)if("".concat(e[t],"MutationObserver")in window)return window["".concat(e[t],"MutationObserver")];return!1}(),c=function e(t,n){t.data(n).split(" ").forEach(function(e){r()("#".concat(e))["close"===n?"trigger":"triggerHandler"]("".concat(n,".zf.trigger"),[t])})},d={Listeners:{Basic:{},Global:{}},Initializers:{}};
/* harmony import */d.Listeners.Basic={openListener:function e(){c(r()(this),"open")},closeListener:function e(){var t;r()(this).data("close")?c(r()(this),"close"):r()(this).trigger("close.zf.trigger")},toggleListener:function e(){var t;r()(this).data("toggle")?c(r()(this),"toggle"):r()(this).trigger("toggle.zf.trigger")},closeableListener:function e(t){t.stopPropagation();var n=r()(this).data("closable");""!==n?l.Motion.animateOut(r()(this),n,function(){r()(this).trigger("closed.zf")}):r()(this).fadeOut().trigger("closed.zf")},toggleFocusListener:function e(){var t=r()(this).data("toggle-focus");r()("#".concat(t)).triggerHandler("toggle.zf.trigger",[r()(this)])}},// Elements with [data-open] will reveal a plugin that supports it when clicked.
d.Initializers.addOpenListener=function(e){e.off("click.zf.trigger",d.Listeners.Basic.openListener),e.on("click.zf.trigger","[data-open]",d.Listeners.Basic.openListener)},// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
d.Initializers.addCloseListener=function(e){e.off("click.zf.trigger",d.Listeners.Basic.closeListener),e.on("click.zf.trigger","[data-close]",d.Listeners.Basic.closeListener)},// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
d.Initializers.addToggleListener=function(e){e.off("click.zf.trigger",d.Listeners.Basic.toggleListener),e.on("click.zf.trigger","[data-toggle]",d.Listeners.Basic.toggleListener)},// Elements with [data-closable] will respond to close.zf.trigger events.
d.Initializers.addCloseableListener=function(e){e.off("close.zf.trigger",d.Listeners.Basic.closeableListener),e.on("close.zf.trigger","[data-closeable], [data-closable]",d.Listeners.Basic.closeableListener)},// Elements with [data-toggle-focus] will respond to coming in and out of focus
d.Initializers.addToggleFocusListener=function(e){e.off("focus.zf.trigger blur.zf.trigger",d.Listeners.Basic.toggleFocusListener),e.on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",d.Listeners.Basic.toggleFocusListener)},// More Global/complex listeners and triggers
d.Listeners.Global={resizeListener:function e(t){u||
//fallback for IE 9
t.each(function(){r()(this).triggerHandler("resizeme.zf.trigger")}),//trigger all listening elements and signal a resize event
t.attr("data-events","resize")},scrollListener:function e(t){u||
//fallback for IE 9
t.each(function(){r()(this).triggerHandler("scrollme.zf.trigger")}),//trigger all listening elements and signal a scroll event
t.attr("data-events","scroll")},closeMeListener:function e(t,n){var i=t.namespace.split(".")[0],o;r()("[data-".concat(i,"]")).not('[data-yeti-box="'.concat(n,'"]')).each(function(){var e=r()(this);e.triggerHandler("close.zf.trigger",[e])})}// Global, parses whole document.
},d.Initializers.addClosemeListener=function(e){var t=r()("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];if(e&&("string"==typeof e?n.push(e):"object"===o(e)&&"string"==typeof e[0]?n.concat(e):console.error("Plugin names must be strings")),t.length){var i=n.map(function(e){return"closeme.zf.".concat(e)}).join(" ");r()(window).off(i).on(i,d.Listeners.Global.closeMeListener)}},d.Initializers.addResizeListener=function(e){var t=r()("[data-resize]");t.length&&i(e,"resize.zf.trigger",d.Listeners.Global.resizeListener,t)},d.Initializers.addScrollListener=function(e){var t=r()("[data-scroll]");t.length&&i(e,"scroll.zf.trigger",d.Listeners.Global.scrollListener,t)},d.Initializers.addMutationEventsListener=function(e){if(!u)return!1;var t=e.find("[data-resize], [data-scroll], [data-mutate]"),n=function e(t){var n=r()(t[0].target);//trigger the event handler for the element depending on type
switch(t[0].type){case"attributes":"scroll"===n.attr("data-events")&&"data-events"===t[0].attributeName&&n.triggerHandler("scrollme.zf.trigger",[n,window.pageYOffset]),"resize"===n.attr("data-events")&&"data-events"===t[0].attributeName&&n.triggerHandler("resizeme.zf.trigger",[n]),"style"===t[0].attributeName&&(n.closest("[data-mutate]").attr("data-events","mutate"),n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[n.closest("[data-mutate]")]));break;case"childList":n.closest("[data-mutate]").attr("data-events","mutate"),n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[n.closest("[data-mutate]")]);break;default:return!1;
//nothing
}};//element callback
if(t.length)
//for each element that needs to listen for resizing, scrolling, or mutation add a single observer
for(var i=0;i<=t.length-1;i++){var o;new u(n).observe(t[i],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}},d.Initializers.addSimpleListeners=function(){var e=r()(document);d.Initializers.addOpenListener(e),d.Initializers.addCloseListener(e),d.Initializers.addToggleListener(e),d.Initializers.addCloseableListener(e),d.Initializers.addToggleFocusListener(e)},d.Initializers.addGlobalListeners=function(){var e=r()(document);d.Initializers.addMutationEventsListener(e),d.Initializers.addResizeListener(),d.Initializers.addScrollListener(),d.Initializers.addClosemeListener()},d.init=function(e,t){Object(a.onLoad)(e(window),function(){!0!==e.triggersInitialized&&(d.Initializers.addSimpleListeners(),d.Initializers.addGlobalListeners(),e.triggersInitialized=!0)}),t&&(t.Triggers=d,// Legacy included to be backwards compatible for now.
t.IHearYou=d.Initializers.addGlobalListeners)}},
/***/0:
/*!****************************************!*\
  !*** multi ./js/entries/foundation.js ***!
  \****************************************/
/*! no static exports found */
/***/function(e,t,n){e.exports=n(/*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/foundation.js */"./js/entries/foundation.js");
/***/},
/***/jquery:
/*!********************************************************************************************!*\
  !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/function(e,t){e.exports=n;
/***/}
/******/})}),function e(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Swup=n():t.Swup=n()}(window,function(){/******/
return function(n){
/******/
/******/ // The require function
/******/function o(e){
/******/
/******/ // Check if module is in cache
/******/if(i[e])
/******/return i[e].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var t=i[e]={
/******/i:e,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[e].call(t.exports,t,t.exports,o),
/******/
/******/ // Flag the module as loaded
/******/t.l=!0,t.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/ // webpackBootstrap
/******/ // The module cache
/******/var i={};
/******/
/******/
/******/ // Load entry module and return exports
/******/return o.m=n,
/******/
/******/ // expose the module cache
/******/o.c=i,
/******/
/******/ // define getter function for harmony exports
/******/o.d=function(e,t,n){
/******/o.o(e,t)||
/******/Object.defineProperty(e,t,{enumerable:!0,get:n})
/******/},
/******/
/******/ // define __esModule on exports
/******/o.r=function(e){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/o.t=function(t,e){
/******/if(
/******/1&e&&(t=o(t)),8&e)return t;
/******/if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;
/******/var n=Object.create(null);
/******/
/******/if(o.r(n),
/******/Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));
/******/return n;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=function(t){
/******/var e=t&&t.__esModule?
/******/function e(){return t.default}:
/******/function e(){return t};
/******/
/******/return o.d(e,"a",e),e;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/ // __webpack_public_path__
/******/o.p="",o(o.s=2);
/******/}
/************************************************************************/
/******/([
/* 0 */
/***/function(e,t,n){"use strict";function i(e,t){var n=1<arguments.length&&void 0!==t?t:document;return"string"!=typeof e?e:n.querySelector(e)}function o(e,t
/***/){var n=1<arguments.length&&void 0!==t?t:document;return"string"!=typeof e?e:Array.prototype.slice.call(n.querySelectorAll(e))}Object.defineProperty(t,"__esModule",{value:!0}),t.query=i,t.queryAll=o},
/* 1 */
/***/function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),s=function(){function e(){i(this,e),this.link=document.createElement("a")}return o(e,[{key:"setPath",value:function e(t){this.link.href=t}},{key:"getPath",value:function e(){var t=this.link.pathname;return"/"!=t[0]&&(t="/"+t),t}},{key:"getAddress",value:function e(){var t=this.link.pathname+this.link.search;return"/"!=t[0]&&(t="/"+t),t}},{key:"getHash",value:function e(){return this.link.hash}}]),e}();t.default=s},
/* 2 */
/***/function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o,s=i(n(3));e.exports=s.default},
/* 3 */
/***/function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),a,l=i(n(4)),u,c=i(n(6)),d,h=i(n(1)),f,p=i(n(7)),m,g=i(n(8)),v,y=i(n(9)),b,w=i(n(10)),x,C=i(n(11)),T,k=i(n(12)),$,E=i(n(13)),S,j=i(n(14)),O,_=i(n(15)),z,P=i(n(16)),M,L=i(n(17)),A,D=i(n(18)),H,q=i(n(19)),I,R=i(n(20)),N,F=i(n(21)),B,G=i(n(22)),W,Y=i(n(23)),V,X=i(n(24)),U,K=i(n(25)),Q=function(){function i(e){o(this,i);
// default options
var t={cache:!0,animationSelector:'[class*="transition-"]',elements:["#swup"],pageClassPrefix:"",debugMode:!1,scroll:!0,doScrollingRightAway:!1,animateScroll:!0,scrollFriction:.3,scrollAcceleration:.04,preload:!0,support:!0,plugins:[],skipPopStateHandling:function e(t){return!t.state||"swup"!=t.state.source},animateHistoryBrowsing:!1,LINK_SELECTOR:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',FORM_SELECTOR:"form[data-swup-form]"
/**
             * current transition object
             */};this.transition={};var n=s({},t,e);
/**
         * handler arrays
         */this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],hoverLink:[],openPageInNewTab:[],pageLoaded:[],pagePreloaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],scrollDone:[],scrollStart:[],serverError:[],submitForm:[],willReplaceContent:[]},
/**
         * helper variables
         */
// id of element to scroll to after render
this.scrollToElement=null,
// promise used for preload, so no new loading of the same page starts while page is loading
this.preloadPromise=null,
// save options
this.options=n,
// plugins array
this.plugins=[],
/**
         * make modules accessible in instance
         */
this.getUrl=j.default,this.cache=new c.default,this.link=new h.default,this.transitionEndEvent=(0,p.default)(),this.getDataFromHtml=y.default,this.getPage=g.default,this.scrollTo=_.default,this.loadPage=w.default,this.renderPage=C.default,this.createState=k.default,this.triggerEvent=E.default,this.classify=P.default,this.doScrolling=L.default,this.markSwupElements=D.default,this.on=q.default,this.off=R.default,this.updateTransition=F.default,this.preloadPage=G.default,this.preloadPages=Y.default,this.usePlugin=X.default,this.log=K.default,this.enable=this.enable,this.destroy=this.destroy,
// attach instance to window in debug mode
this.options.debugMode&&(window.swup=this),this.getUrl(),this.enable()}return r(i,[{key:"enable",value:function e(){var t=this;
/**
             * support check
             */if(this.options.support){
// check pushState support
if(!("pushState"in window.history))return void console.warn("pushState is not supported");
// check transitionEnd support
if(!(0,p.default)())return void console.warn("transitionEnd detection is not supported");
// check Promise support
if(this.transitionEndEvent=(0,p.default)(),"undefined"==typeof Promise||-1===Promise.toString().indexOf("[native code]"))return void console.warn("Promise is not supported")}
// variable to keep event listeners from "delegate"
this.delegatedListeners={},
/**
             * link click handler
             */
this.delegatedListeners.click=(0,l.default)(document,this.options.LINK_SELECTOR,"click",this.linkClickHandler.bind(this)),
/**
             * link mouseover handler (preload)
             */
this.delegatedListeners.mouseover=(0,l.default)(document.body,this.options.LINK_SELECTOR,"mouseover",this.linkMouseoverHandler.bind(this)),
/**
             * form submit handler
             */
this.delegatedListeners.formSubmit=(0,l.default)(document,this.options.FORM_SELECTOR,"submit",this.formSubmitHandler.bind(this)),
/**
             * popstate handler
             */
window.addEventListener("popstate",this.popStateHandler.bind(this));
/**
             * initial save to cache
             */
var n=this.getDataFromHtml(document.documentElement.outerHTML);n.url=this.currentUrl,this.options.cache&&this.cache.cacheUrl(n,this.options.debugMode)
/**
             * mark swup blocks in html
             */,this.markSwupElements(document.documentElement),
/**
             * enable plugins from options
             */
this.options.plugins.forEach(function(e){return t.usePlugin(e)}),
/**
             * modify initial history record
             */
window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),
/**
             * Disable browser scroll control on popstates when animateHistoryBrowsing option is enabled
             */
this.options.animateHistoryBrowsing&&(window.history.scrollRestoration="manual")
/**
             * trigger enabled event
             */,this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),
/**
             * trigger page view event
             */
this.triggerEvent("pageView"),
/**
             * preload pages if possible
             */
this.preloadPages()}},{key:"destroy",value:function e(){
// remove delegated listeners
this.delegatedListeners.click.destroy(),this.delegatedListeners.mouseover.destroy(),
// remove popstate listener
window.removeEventListener("popstate",this.popStateHandler.bind(this)),
// empty cache
this.cache.empty(),
// remove swup data atributes from blocks
document.querySelectorAll("[data-swup]").forEach(function(e){delete e.dataset.swup}),
// remove handlers
this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function e(t){
// no control key pressed
if(t.metaKey)
// open in new tab (do nothing)
this.triggerEvent("openPageInNewTab",t);else
// index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
if(0===t.button){this.triggerEvent("clickLink",t);var n=new h.default;if(t.preventDefault(),n.setPath(t.delegateTarget.href),n.getAddress()==this.currentUrl||""==n.getAddress())
// link to the same URL
if(""!=n.getHash()){
// link to the same URL with hash
this.triggerEvent("samePageWithHash",t);var i=document.querySelector(n.getHash());if(null!=i){
// referenced element found
if(this.options.scroll){var o=i.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,o)}history.replaceState({url:n.getAddress()+n.getHash(),random:Math.random(),source:"swup"},document.title,n.getAddress()+n.getHash())}else
// referenced element not found
console.warn("Element for offset not found ("+n.getHash()+")")}else
// link to the same URL without hash
this.triggerEvent("samePage",t),this.options.scroll&&this.scrollTo(document.body,0,1);else{
// link to different url
""!=n.getHash()&&(this.scrollToElement=n.getHash());
// get custom transition from data
var s=t.delegateTarget.dataset.swupTransition;
// load page
this.loadPage({url:n.getAddress(),customTransition:s},!1)}}}},{key:"linkMouseoverHandler",value:function e(s){var r=this;if(this.triggerEvent("hoverLink",s),this.options.preload){var a=new h.default;a.setPath(s.delegateTarget.href),a.getAddress()==this.currentUrl||this.cache.exists(a.getAddress())||null!=this.preloadPromise||(this.preloadPromise=new Promise(function(i,o){r.getPage({url:a.getAddress()},function(e,t){if(500===t.status)return r.triggerEvent("serverError",s),void o(a.getAddress());
// get json data
var n=r.getDataFromHtml(e,t);null!=n?(n.url=a.getAddress(),r.cache.cacheUrl(n,r.options.debugMode),r.triggerEvent("pagePreloaded",s),i(),r.preloadPromise=null):o(a.getAddress())})}),this.preloadPromise.route=a.getAddress())}}},{key:"formSubmitHandler",value:function e(t){
// no control key pressed
if(t.metaKey)this.triggerEvent("openFormSubmitInNewTab",t);else{this.triggerEvent("submitForm",t),t.preventDefault();var n=t.target,i=new FormData(n),o=new h.default;if(o.setPath(n.action),""!=o.getHash()&&(this.scrollToElement=o.getHash()),"get"!=n.method.toLowerCase())
// remove page from cache
this.cache.remove(o.getAddress()),
// send data
this.loadPage({url:o.getAddress(),method:n.method,data:i});else{
// create base url
var s=o.getAddress()||window.location.href,r=n.querySelectorAll("input, select");-1==s.indexOf("?")?s+="?":s+="&",
// add form data to url
r.forEach(function(e){"checkbox"==e.type||"radio"==e.type?e.checked&&(s+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"):s+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"}),
// remove last "&"
s=s.slice(0,-1),
// remove page from cache
this.cache.remove(s),
// send data
this.loadPage({url:s})}}}},{key:"popStateHandler",value:function e(t){var n=new h.default;this.options.skipPopStateHandling(t)||(n.setPath(t.state?t.state.url:window.location.pathname),""!=n.getHash()?this.scrollToElement=n.getHash():t.preventDefault(),this.triggerEvent("popState",t),this.loadPage({url:n.getAddress()},t))}}]),i}();t.default=Q},
/* 4 */
/***/function(e,t,n){
/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function i(e,t,n,i,o){var s=r.apply(this,arguments);return e.addEventListener(n,s,o),{destroy:function(){e.removeEventListener(n,s,o)}}}
/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */function r(t,n,e,i){return function(e){e.delegateTarget=o(e.target,n),e.delegateTarget&&i.call(t,e)}}var o=n(5);e.exports=i},
/* 5 */
/***/function(e,t){
/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function n(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var i=9;
/**
 * A polyfill for Element.matches()
 */if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=n},
/* 6 */
/***/function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),s=function(){function e(){i(this,e),this.pages={},this.count=0,this.last=null}return o(e,[{key:"cacheUrl",value:function e(t,n){this.count++,t.url in this.pages==!1&&(this.pages[t.url]=t),this.last=this.pages[t.url],n&&this.displayCache()}},{key:"getPage",value:function e(t){return this.pages[t]}},{key:"displayCache",value:function e(){for(var t in console.groupCollapsed("Cache ("+Object.keys(this.pages).length+")"),this.pages)console.log(this.pages[t]);console.groupEnd()}},{key:"exists",value:function e(t){return t in this.pages}},{key:"empty",value:function e(t){this.pages={},this.count=0,this.last=null,t&&console.log("Cache cleared")}},{key:"remove",value:function e(t){delete this.pages[t]}}]),e}();t.default=s},
/* 7 */
/***/function(e,t,n){"use strict";e.exports=function e(){var t=document.createElement("div"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in n)if(void 0!==t.style[i])return n[i];return!1}},
/* 8 */
/***/function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};e.exports=function(e,t){var n=1<arguments.length&&void 0!==t&&t,i={url:window.location.pathname+window.location.search,method:"GET",data:null},o=r({},i,e),s=new XMLHttpRequest;return s.onreadystatechange=function(){4===s.readyState&&(500!==s.status?n(s.responseText,s):n(null,s))},s.open(o.method,o.url,!0),s.setRequestHeader("X-Requested-With","swup"),s.send(o.data),s}},
/* 9 */
/***/function(e,t,n){"use strict";var l=n(0);e.exports=function(e,t){var n=this,i=e.replace("<body",'<div id="swupBody"').replace("</body>","</div>"),o=document.createElement("div"),s;o.innerHTML=i;for(var r=[],a=0;a<this.options.elements.length;a++){if(null==o.querySelector(this.options.elements[a]))return console.warn("Element "+this.options.elements[a]+" is not found in cached page."),null;(0,l.queryAll)(this.options.elements[a]).forEach(function(e,t){(0,l.queryAll)(n.options.elements[a],o)[t].dataset.swup=r.length,r.push((0,l.queryAll)(n.options.elements[a],o)[t].outerHTML)})}return{title:o.querySelector("title").innerText,pageClass:o.querySelector("#swupBody").className,originalContent:e,blocks:r,responseURL:null!=t?t.responseURL:window.location.href}}},
/* 10 */
/***/function(e,t,n){"use strict";var a=n(0),l=Array.prototype.forEach;e.exports=function(s,e){var r=this;
// scrolling
this.options.doScrollingRightAway&&!this.scrollToElement&&this.doScrolling(e);
// create array for storing animation promises
var t=[];
// set transition object
if(null!=s.customTransition?(this.updateTransition(window.location.pathname,s.url,s.customTransition),document.documentElement.classList.add("to-"+this.classify(s.customTransition))):this.updateTransition(window.location.pathname,s.url),!e||this.options.animateHistoryBrowsing){
// start animation
this.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),e&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+this.classify(s.url));
// detect animation end
var n=(0,a.queryAll)(this.options.animationSelector);
// create pop element with or without anchor
if(l.call(n,function(n){var e=new Promise(function(t){n.addEventListener(r.transitionEndEvent,function(e){n==e.target&&t()})});t.push(e)}),Promise.all(t).then(function(){r.triggerEvent("animationOutDone")}),null!=this.scrollToElement)var i=s.url+this.scrollToElement;else var i=s.url;e||this.createState(i)}else
// proceed without animating
this.triggerEvent("animationSkipped");if(this.cache.exists(s.url)){var o=new Promise(function(e){e()});this.triggerEvent("pageRetrievedFromCache")}else if(this.preloadPromise&&this.preloadPromise.route==s.url)var o=this.preloadPromise;else var o=new Promise(function(i,o){r.getPage(s,function(e,t){if(500===t.status)return r.triggerEvent("serverError"),void o(s.url);
// get json data
var n=r.getDataFromHtml(e,t);null!=n?(n.url=s.url,
// render page
r.cache.cacheUrl(n,r.options.debugMode),r.triggerEvent("pageLoaded"),i()):o(s.url)})});Promise.all(t.concat([o])).then(function(){
// render page
r.renderPage(r.cache.getPage(s.url),e),r.preloadPromise=null}).catch(function(e){
// rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
r.options.skipPopStateHandling=function(){return window.location=e,!0},
// go back to the actual page were still at
window.history.go(-1)})}},
/* 11 */
/***/function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=n(0),o,l=i(n(1)),u=Array.prototype.forEach;e.exports=function(e,t){var i=this;document.documentElement.classList.remove("is-leaving");
// replace state in case the url was redirected
var n=new l.default;n.setPath(e.responseURL),window.location.pathname!==n.getPath()&&window.history.replaceState({url:n.getPath(),random:Math.random(),source:"swup"},document.title,n.getPath()),
// only add for non-popstate transitions
t&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent");
// replace blocks
for(var o=0;o<e.blocks.length;o++)document.body.querySelector('[data-swup="'+o+'"]').outerHTML=e.blocks[o];
// set title
document.title=e.title,
// handle classes after render
// remove
!1!==this.options.pageClassPrefix&&document.body.className.split(" ").forEach(function(e){
// empty string for page class
""!=e&&e.includes(i.options.pageClassPrefix)&&document.body.classList.remove(e)}),
// add
""!=e.pageClass&&e.pageClass.split(" ").forEach(function(e){""!=e&&e.includes(i.options.pageClassPrefix)&&document.body.classList.add(e)}),this.triggerEvent("contentReplaced"),this.triggerEvent("pageView"),this.options.cache||this.cache.empty(this.options.debugMode),setTimeout(function(){t&&!i.options.animateHistoryBrowsing||(i.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))},10),
// scrolling
this.options.doScrollingRightAway&&!this.scrollToElement||this.doScrolling(t);
// detect animation end
var s=(0,a.queryAll)(this.options.animationSelector),r=[];u.call(s,function(n){var e=new Promise(function(t){n.addEventListener(i.transitionEndEvent,function(e){n==e.target&&t()})});r.push(e)}),
//preload pages if possible
this.preloadPages(),t&&!this.options.animateHistoryBrowsing||Promise.all(r).then(function(){i.triggerEvent("animationInDone"),
// remove "to-{page}" classes
document.documentElement.className.split(" ").forEach(function(e){(new RegExp("^to-").test(e)||"is-changing"===e||"is-rendering"===e||"is-popstate"===e)&&document.documentElement.classList.remove(e)})}),
// update current url
this.getUrl(),
// reset scroll-to element
this.scrollToElement=null}},
/* 12 */
/***/function(e,t,n){"use strict";e.exports=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},
/* 13 */
/***/function(e,t,n){"use strict";e.exports=function(e,t){this.options.debugMode&&t?(console.groupCollapsed("%cswup:%c"+e,"color: #343434","color: #009ACD"),console.log(t),console.groupEnd()):this.options.debugMode&&console.log("%cswup:%c"+e,"color: #343434","color: #009ACD"),
// call saved handlers with "on" method and pass originalEvent object if available
this._handlers[e].forEach(function(e){try{e(t)}catch(e){console.error(e)}});
// trigger event on document with prefix "swup:"
var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},
/* 14 */
/***/function(e,t,n){"use strict";e.exports=function(){this.currentUrl=window.location.pathname+window.location.search}},
/* 15 */
/***/function(e,t,n){"use strict";e.exports=function(e,t,n){function i(){return document.body.scrollTop||document.documentElement.scrollTop}function o(){var e=h-u,t;return g(e*l),u+=c*=a,e}var s=this,r=2<arguments.length&&void 0!==n?n:this.options.animateScroll,a=1-this.options.scrollFriction,l=this.options.scrollAcceleration,u=0,c=0,d=0,h=0,f=0,p=null,m=function e(){var t=o();v(),1===f&&u<d||-1===f&&d<u?p=requestAnimationFrame(e):(window.scrollTo(0,d),s.triggerEvent("scrollDone"))},g=function e(t){c+=t},v=function e(){window.scrollTo(0,u)};window.addEventListener("mousewheel",function(e){p&&(cancelAnimationFrame(p),p=null)},{passive:!0});var y=function e(t,n){u=i(),h=t+(f=t<u?-1:1),c=0,u!=(d=t)?m():s.triggerEvent("scrollDone")};this.triggerEvent("scrollStart"),0==r?(window.scrollTo(0,t),this.triggerEvent("scrollDone")):y(t)}},
/* 16 */
/***/function(e,t,n){"use strict";e.exports=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");// Trim - from end of text
return"/"==t[0]&&(t=t.splice(1)),""==t&&(t="homepage"),t}},
/* 17 */
/***/function(e,t,n){"use strict";e.exports=function(e){if(this.options.scroll&&(!e||this.options.animateHistoryBrowsing))if(null!=this.scrollToElement){var t=document.querySelector(this.scrollToElement);if(null!=t){var n=t.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,n)}else console.warn("Element for offset not found ("+this.scrollToElement+")");this.scrollToElement=null}else this.scrollTo(document.body,0)}},
/* 18 */
/***/function(e,t,n){"use strict";var r=n(0);e.exports=function(n){for(var i=this,o=0,s=0;s<this.options.elements.length;s++)null==n.querySelector(this.options.elements[s])?console.warn("Element "+this.options.elements[s]+" is not in current page."):(0,r.queryAll)(this.options.elements[s]).forEach(function(e,t){(0,r.queryAll)(i.options.elements[s],n)[t].dataset.swup=o,o++})}},
/* 19 */
/***/function(e,t,n){"use strict";e.exports=function e(t,n){this._handlers[t]?this._handlers[t].push(n):console.warn("Unsupported event "+t+".")}},
/* 20 */
/***/function(e,t,n){"use strict";e.exports=function e(t,n){var i=this;if(null!=t)if(null!=n)if(this._handlers[t]&&this._handlers[t].filter(function(e){return e===n}).length){var o=this._handlers[t].filter(function(e){return e===n})[0],s=this._handlers[t].indexOf(o);-1<s&&this._handlers[t].splice(s,1)}else console.warn("Handler for event '"+t+"' no found.");else this._handlers[t]=[];else Object.keys(this._handlers).forEach(function(e){i._handlers[e]=[]})}},
/* 21 */
/***/function(e,t,n){"use strict";e.exports=function(e,t,n){
// homepage case
"/"==e&&(e="/homepage"),"/"==t&&(t="/homepage"),
// transition routes
this.transition={from:e.replace("/",""),to:t.replace("/","")},n&&(this.transition.custom=n)}},
/* 22 */
/***/function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o,s=i(n(1));e.exports=function(e){var i=this,o=new s.default;o.setPath(e),o.getAddress()==this.currentUrl||this.cache.exists(o.getAddress())||null!=this.preloadPromise||this.getPage({url:o.getAddress()},function(e,t){if(500!==t.status){
// get json data
var n=i.getDataFromHtml(e,t);null!=n&&(n.url=o.getAddress(),i.cache.cacheUrl(n,i.options.debugMode),i.triggerEvent("pagePreloaded"))}else i.triggerEvent("serverError")})}},
/* 23 */
/***/function(e,t,n){"use strict";var i=n(0);e.exports=function(){var t=this;this.options.preload&&(0,i.queryAll)("[data-swup-preload]").forEach(function(e){t.preloadPage(e.href)})}},
/* 24 */
/***/function(e,t,n){"use strict";e.exports=function(e,t){var i=this;t=Object.assign({},e.options,t),e.options=t;var n=function e(){var t=i.cache.getPage(window.location.pathname+window.location.search),n=document.createElement("html");return n.innerHTML=t.originalContent,n};return this.plugins.push(e),e.exec(t,this,n),this.plugins}},
/* 25 */
/***/function(e,t,n){"use strict";e.exports=function(e){this.options.debugMode&&console.log(e+"%c","color: #009ACD")}}
/******/])}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(n){function i(e){if(o[e])return o[e].exports;var t=o[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}var o={};return i.m=n,i.c=o,i.p="dist/",i(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s,r,a=i((i(n(1)),n(6))),l,u=i(n(7)),c,d=i(n(8)),h,f=i(n(9)),p,m=i(n(10)),g,v=i(n(11)),y,b=i(n(14)),w=[],x=!1,C={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},T=function(e){var t;if(0<arguments.length&&void 0!==e&&e&&(x=!0),x)return w=(0,v.default)(w,C),(0,m.default)(w,C.once),w},k=function(){w=(0,b.default)(),T()},$=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return!0===e||"mobile"===e&&f.default.mobile()||"phone"===e&&f.default.phone()||"tablet"===e&&f.default.tablet()||"function"==typeof e&&!0===e()},S=function(e){C=o(C,e),w=(0,b.default)();var t=document.all&&!window.atob;return E(C.disable)||t?$():(C.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),C.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",C.easing),document.querySelector("body").setAttribute("data-aos-duration",C.duration),document.querySelector("body").setAttribute("data-aos-delay",C.delay),"DOMContentLoaded"===C.startEvent&&-1<["complete","interactive"].indexOf(document.readyState)?T(!0):"load"===C.startEvent?window.addEventListener(C.startEvent,function(){T(!0)}):document.addEventListener(C.startEvent,function(){T(!0)}),window.addEventListener("resize",(0,u.default)(T,C.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(T,C.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,m.default)(w,C.once)},C.throttleDelay)),C.disableMutationObserver||d.default.ready("[data-aos]",k),w)};e.exports={init:S,refresh:T,refreshHard:k}},function(e,t){},,,,,function(y,e){(function(e){"use strict";function s(i,o,e){function n(e){var t=h,n=f;return h=f=void 0,y=e,m=i.apply(n,t)}function s(e){return y=e,g=setTimeout(a,o),b?n(e):m}function t(e){var t,n,i=o-(e-v);return w?E(i,p-(e-y)):i}function r(e){var t=e-v,n;return void 0===v||o<=t||t<0||w&&p<=e-y}function a(){var e=S();return r(e)?l(e):void(g=setTimeout(a,t(e)))}function l(e){return g=void 0,x&&h?n(e):(h=f=void 0,m)}function u(){void 0!==g&&clearTimeout(g),h=v=f=g=void(y=0)}function c(){return void 0===g?m:l(S())}function d(){var e=S(),t=r(e);if(h=arguments,f=this,v=e,t){if(void 0===g)return s(v);if(w)return g=setTimeout(a,o),n(v)}return void 0===g&&(g=setTimeout(a,o)),m}var h,f,p,m,g,v,y=0,b=!1,w=!1,x=!0;if("function"!=typeof i)throw new TypeError(k);return o=T(o)||0,C(e)&&(b=!!e.leading,p=(w="maxWait"in e)?$(T(e.maxWait)||0,o):p,x="trailing"in e?!!e.trailing:x),d.cancel=u,d.flush=c,d}function t(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(k);return C(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),s(e,t,{leading:i,maxWait:t,trailing:o})}function C(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function n(e){return!!e&&"object"==(void 0===e?"undefined":o(e))}function i(e){return"symbol"==(void 0===e?"undefined":o(e))||n(e)&&v.call(e)==a}function T(e){if("number"==typeof e)return e;if(i(e))return r;if(C(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=C(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=c.test(e);return n||d.test(e)?h(e.slice(2),n?2:8):u.test(e)?r:+e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k="Expected a function",r=NaN,a="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt,f="object"==(void 0===e?"undefined":o(e))&&e&&e.Object===Object&&e,p="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),g,v=Object.prototype.toString,$=Math.max,E=Math.min,S=function(){return m.Date.now()};y.exports=t}).call(e,function(){return this}())},function(v,e){(function(e){"use strict";function t(i,o,e){function n(e){var t=h,n=f;return h=f=void 0,y=e,m=i.apply(n,t)}function s(e){return y=e,g=setTimeout(a,o),b?n(e):m}function t(e){var t,n,i=o-(e-v);return w?E(i,p-(e-y)):i}function r(e){var t=e-v,n;return void 0===v||o<=t||t<0||w&&p<=e-y}function a(){var e=S();return r(e)?l(e):void(g=setTimeout(a,t(e)))}function l(e){return g=void 0,x&&h?n(e):(h=f=void 0,m)}function u(){void 0!==g&&clearTimeout(g),h=v=f=g=void(y=0)}function c(){return void 0===g?m:l(S())}function d(){var e=S(),t=r(e);if(h=arguments,f=this,v=e,t){if(void 0===g)return s(v);if(w)return g=setTimeout(a,o),n(v)}return void 0===g&&(g=setTimeout(a,o)),m}var h,f,p,m,g,v,y=0,b=!1,w=!1,x=!0;if("function"!=typeof i)throw new TypeError(k);return o=T(o)||0,C(e)&&(b=!!e.leading,p=(w="maxWait"in e)?$(T(e.maxWait)||0,o):p,x="trailing"in e?!!e.trailing:x),d.cancel=u,d.flush=c,d}function C(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function n(e){return!!e&&"object"==(void 0===e?"undefined":o(e))}function i(e){return"symbol"==(void 0===e?"undefined":o(e))||n(e)&&g.call(e)==r}function T(e){if("number"==typeof e)return e;if(i(e))return s;if(C(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=C(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||c.test(e)?d(e.slice(2),n?2:8):l.test(e)?s:+e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k="Expected a function",s=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,h="object"==(void 0===e?"undefined":o(e))&&e&&e.Object===Object&&e,f="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,p=h||f||Function("return this")(),m,g=Object.prototype.toString,$=Math.max,E=Math.min,S=function(){return p.Date.now()};v.exports=t}).call(e,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0,i=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(i=n.children&&o(n.children))return!0}return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(){return!!s()}function i(e,t){var n=window.document,i,o=new(s())(r);a=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),i;if(o(t.concat(n)))return a()})}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){};t.default={isSupported:n,ready:i}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){n(this,e)}return o(e,[{key:"phone",value:function(){var e=i();return!(!s.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!a.test(e)&&!l.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},n=function(e,n){var i=window.pageYOffset,o=window.innerHeight;e.forEach(function(e,t){s(e,o+i,n)})};t.default=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,s=i(n(12)),r=function(e,n){return e.forEach(function(e,t){e.node.classList.add("aos-init"),e.position=(0,s.default)(e.node,n.offset)}),e};t.default=r},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r=i(n(13)),s=function(e,t){var n=0,i=0,o=window.innerHeight,s={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(i=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(e=document.querySelectorAll(s.anchor)[0]),n=(0,r.default)(e).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=o/2;break;case"bottom-center":n+=o/2+e.offsetHeight;break;case"center-center":n+=o/2+e.offsetHeight/2;break;case"top-top":n+=o;break;case"bottom-top":n+=e.offsetHeight+o;break;case"center-top":n+=e.offsetHeight/2+o}return s.anchorPlacement||s.offset||isNaN(t)||(i=t),n+i};t.default=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])}),
/*! lightgallery - v1.6.11 - 2018-05-22
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
function(e,t){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=t(require("jquery")):t(e.jQuery)}(this,function(v){!function(){"use strict";function t(e,t){
// When using dynamic mode, ensure dynamicEl is an array
if(
// Current lightGallery element
this.el=e,
// Current jquery element
this.$el=v(e),
// lightGallery settings
this.s=v.extend({},n,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";
// lightGallery modules
return this.modules={},
// false when lightgallery complete first slide;
this.lGalleryOn=!1,this.lgBusy=!1,
// Timeout function for hiding controls;
this.hideBartimeout=!1,
// To determine browser supports for touch events;
this.isTouch="ontouchstart"in document.documentElement,
// Disable hideControlOnEnd if sildeEndAnimation is true
this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),
// Gallery items
this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=v(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(v(this.s.selector)):this.$items=this.$el.children(),
// .lg-item
this.$slide="",
// .lg-outer
this.$outer="",this.init(),this}var n={mode:"lg-slide",
// Ex : 'ease'
cssEasing:"ease",
//'for jquery animation'
easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,
// .lg-item || '.lg-sub-html'
appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,
/**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",
// 0, 1
index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};t.prototype.init=function(){var e=this;
// s.preload should not be more than $item.length
e.s.preload>e.$items.length&&(e.s.preload=e.$items.length);
// if dynamic option is enabled execute immediately
var t=window.location.hash;0<t.indexOf("lg="+this.s.galleryId)&&(e.index=parseInt(t.split("&slide=")[1],10),v("body").addClass("lg-from-hash"),v("body").hasClass("lg-on")||(setTimeout(function(){e.build(e.index)}),v("body").addClass("lg-on"))),e.s.dynamic?(e.$el.trigger("onBeforeOpen.lg"),e.index=e.s.index||0,
// prevent accidental double execution
v("body").hasClass("lg-on")||setTimeout(function(){e.build(e.index),v("body").addClass("lg-on")})):
// Using different namespace for click because click event should not unbind if selector is same object('this')
e.$items.on("click.lgcustom",function(t){
// For IE8
try{t.preventDefault(),t.preventDefault()}catch(e){t.returnValue=!1}e.$el.trigger("onBeforeOpen.lg"),e.index=e.s.index||e.$items.index(this),
// prevent accidental double execution
v("body").hasClass("lg-on")||(e.build(e.index),v("body").addClass("lg-on"))})},t.prototype.build=function(e){var t=this;t.structure(),
// module constructor
v.each(v.fn.lightGallery.modules,function(e){t.modules[e]=new v.fn.lightGallery.modules[e](t.el)}),
// initiate slide function
t.slide(e,!1,!1,!1),t.s.keyPress&&t.keyPress(),1<t.$items.length?(t.arrow(),setTimeout(function(){t.enableDrag(),t.enableSwipe()},50),t.s.mousewheel&&t.mousewheel()):t.$slide.on("click.lg",function(){t.$el.trigger("onSlideClick.lg")}),t.counter(),t.closeGallery(),t.$el.trigger("onAfterOpen.lg"),
// Hide controllers if mouse doesn't move for some period
t.$outer.on("mousemove.lg click.lg touchstart.lg",function(){t.$outer.removeClass("lg-hide-items"),clearTimeout(t.hideBartimeout),
// Timeout will be cleared on each slide movement also
t.hideBartimeout=setTimeout(function(){t.$outer.addClass("lg-hide-items")},t.s.hideBarsDelay)}),t.$outer.trigger("mousemove.lg")},t.prototype.structure=function(){var e="",t="",n=0,i="",o,s=this;
// Create gallery items
for(v("body").append('<div class="lg-backdrop"></div>'),v(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),n=0;n<this.$items.length;n++)e+='<div class="lg-item"></div>';
// Create controlls
if(this.s.controls&&1<this.$items.length&&(t='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(i='<div class="lg-sub-html"></div>'),o='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+e+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+t+i+"</div></div>",v("body").append(o),this.$outer=v(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),
// Set mode lg-slide if use left is true;
this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),
// For fixed height gallery
s.setTop(),v(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){s.setTop()},100)}),
// add class lg-current to remove initial transition
this.$slide.eq(this.index).addClass("lg-current"),
// add Class for css support and transition mode
this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),
// Set speed 0 because no animation will happen if browser doesn't support css3
this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&1<this.$items.length&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var r=this.$outer.find(".lg-inner");r.css("transition-timing-function",this.s.cssEasing),r.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){v(".lg-backdrop").addClass("in")}),setTimeout(function(){s.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
// Store the current scroll top value to scroll back after closing the gallery..
this.prevScrollTop=v(window).scrollTop()},
// For fixed height gallery
t.prototype.setTop=function(){if("100%"!==this.s.height){var e=v(window).height(),t=(e-parseInt(this.s.height,10))/2,n=this.$outer.find(".lg");e>=parseInt(this.s.height,10)?n.css("top",t+"px"):n.css("top","0px")}},
// Find css3 support
t.prototype.doCss=function(){
// check for css animation support
var e;return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,n=0;for(n=0;n<e.length;n++)if(e[n]in t.style)return!0}()},
/**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
t.prototype.isVideo=function(e,t){var n;if(n=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr("data-html"),!e)return n?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(t+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var i=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),o=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),s=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),r=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:o?{vimeo:o}:s?{dailymotion:s}:r?{vk:r}:void 0},
/**
     *  @desc Create image counter
     *  Ex: 1/10
     */
t.prototype.counter=function(){this.s.counter&&v(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},
/**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
t.prototype.addHtml=function(e){var t=null,n,i;if(this.s.dynamic?this.s.dynamicEl[e].subHtmlUrl?n=this.s.dynamicEl[e].subHtmlUrl:t=this.s.dynamicEl[e].subHtml:(i=this.$items.eq(e)).attr("data-sub-html-url")?n=i.attr("data-sub-html-url"):(t=i.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!t&&(t=i.attr("title")||i.find("img").first().attr("alt"))),!n)if(null!=t){
// get first letter of subhtml
// if first letter starts with . or # get the html form the jQuery object
var o=t.substring(0,1);"."!==o&&"#"!==o||(t=this.s.subHtmlSelectorRelative&&!this.s.dynamic?i.find(t).html():v(t).html())}else t="";".lg-sub-html"===this.s.appendSubHtmlTo?n?this.$outer.find(this.s.appendSubHtmlTo).load(n):this.$outer.find(this.s.appendSubHtmlTo).html(t):n?this.$slide.eq(e).load(n):this.$slide.eq(e).append(t),
// Add lg-empty-html class if title doesn't exist
null!=t&&(""===t?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[e])},
/**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
t.prototype.preload=function(e){var t=1,n=1;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0);for(n=1;n<=this.s.preload&&!(e-n<0);n++)this.loadContent(e-n,!1,0)},
/**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
t.prototype.loadContent=function(t,e,n){var i=this,o=!1,s,a,r,l,u,c,d=function(e){for(var t=[],n=[],i=0;i<e.length;i++){var o=e[i].split(" ");
// Manage empty space
""===o[0]&&o.splice(0,1),n.push(o[0]),t.push(o[1])}for(var s=v(window).width(),r=0;r<t.length;r++)if(parseInt(t[r],10)>s){a=n[r];break}};if(i.s.dynamic){var h;if(i.s.dynamicEl[t].poster&&(o=!0,r=i.s.dynamicEl[t].poster),c=i.s.dynamicEl[t].html,a=i.s.dynamicEl[t].src,i.s.dynamicEl[t].responsive)d(i.s.dynamicEl[t].responsive.split(","));l=i.s.dynamicEl[t].srcset,u=i.s.dynamicEl[t].sizes}else{var f;if(i.$items.eq(t).attr("data-poster")&&(o=!0,r=i.$items.eq(t).attr("data-poster")),c=i.$items.eq(t).attr("data-html"),a=i.$items.eq(t).attr("href")||i.$items.eq(t).attr("data-src"),i.$items.eq(t).attr("data-responsive"))d(i.$items.eq(t).attr("data-responsive").split(","));l=i.$items.eq(t).attr("data-srcset"),u=i.$items.eq(t).attr("data-sizes")}
//if (_src || _srcset || _sizes || _poster) {
var p=!1;i.s.dynamic?i.s.dynamicEl[t].iframe&&(p=!0):"true"===i.$items.eq(t).attr("data-iframe")&&(p=!0);var m=i.isVideo(a,t);if(!i.$slide.eq(t).hasClass("lg-loaded")){if(p)i.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+i.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>');else if(o){var g="";g=m&&m.youtube?"lg-has-youtube":m&&m.vimeo?"lg-has-vimeo":"lg-has-html5",i.$slide.eq(t).prepend('<div class="lg-video-cont '+g+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+r+'" /></div></div>')}else m?(i.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),i.$el.trigger("hasVideo.lg",[t,a,c])):i.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+a+'" /></div>');if(i.$el.trigger("onAferAppendSlide.lg",[t]),s=i.$slide.eq(t).find(".lg-object"),u&&s.attr("sizes",u),l){s.attr("srcset",l);try{picturefill({elements:[s[0]]})}catch(e){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&i.addHtml(t),i.$slide.eq(t).addClass("lg-loaded")}i.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){
// For first time add some delay for displaying the start animation.
var e=0;
// Do not change the delay value because it is required for zoom plugin.
// If gallery opened from direct url (hash) speed value should be 0
n&&!v("body").hasClass("lg-from-hash")&&(e=n),setTimeout(function(){i.$slide.eq(t).addClass("lg-complete"),i.$el.trigger("onSlideItemLoad.lg",[t,n||0])},e)}),
// @todo check load state for html5 videos
m&&m.html5&&!o&&i.$slide.eq(t).addClass("lg-complete"),!0===e&&(i.$slide.eq(t).hasClass("lg-complete")?i.preload(t):i.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){i.preload(t)}))},
/**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();

    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    *   @param {String} direction - Direction of the slide(next/prev)
    */
t.prototype.slide=function(e,t,n,i){var o=this.$outer.find(".lg-current").index(),s=this;
// Prevent if multiple call
// Required for hsh plugin
if(!s.lGalleryOn||o!==e){var r=this.$slide.length,a=s.lGalleryOn?this.s.speed:0;if(!s.lgBusy){var l,u,c;if(this.s.download)(l=s.s.dynamic?!1!==s.s.dynamicEl[e].downloadUrl&&(s.s.dynamicEl[e].downloadUrl||s.s.dynamicEl[e].src):"false"!==s.$items.eq(e).attr("data-download-url")&&(s.$items.eq(e).attr("data-download-url")||s.$items.eq(e).attr("href")||s.$items.eq(e).attr("data-src")))?(v("#lg-download").attr("href",l),s.$outer.removeClass("lg-hide-download")):s.$outer.addClass("lg-hide-download");if(this.$el.trigger("onBeforeSlide.lg",[o,e,t,n]),s.lgBusy=!0,clearTimeout(s.hideBartimeout),
// Add title if this.s.appendSubHtmlTo === lg-sub-html
".lg-sub-html"===this.s.appendSubHtmlTo&&
// wait for slide animation to complete
setTimeout(function(){s.addHtml(e)},a),this.arrowDisable(e),i||(e<o?i="prev":o<e&&(i="next")),t)this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),2<r?(u=e-1,c=e+1,0===e&&o===r-1?(
// next slide
c=0,u=r-1):e===r-1&&0===o&&(
// prev slide
c=0,u=r-1)):(u=0,c=1),"prev"===i?s.$slide.eq(c).addClass("lg-next-slide"):s.$slide.eq(u).addClass("lg-prev-slide"),s.$slide.eq(e).addClass("lg-current");else
// remove all transitions
s.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===i?(
//prevslide
this.$slide.eq(e).addClass("lg-prev-slide"),this.$slide.eq(o).addClass("lg-next-slide")):(
// next slide
this.$slide.eq(e).addClass("lg-next-slide"),this.$slide.eq(o).addClass("lg-prev-slide")),
// give 50 ms for browser to add/remove class
setTimeout(function(){s.$slide.removeClass("lg-current"),
//_this.$slide.eq(_prevIndex).removeClass('lg-current');
s.$slide.eq(e).addClass("lg-current"),
// reset all transitions
s.$outer.removeClass("lg-no-trans")},50);s.lGalleryOn?(setTimeout(function(){s.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){s.lgBusy=!1,s.$el.trigger("onAfterSlide.lg",[o,e,t,n])},this.s.speed)):(s.loadContent(e,!0,s.s.backdropDuration),s.lgBusy=!1,s.$el.trigger("onAfterSlide.lg",[o,e,t,n])),s.lGalleryOn=!0,this.s.counter&&v("#lg-counter-current").text(e+1)}s.index=e}},
/**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
t.prototype.goToNextSlide=function(e){var t=this,n=t.s.loop;e&&t.$slide.length<3&&(n=!1),t.lgBusy||(t.index+1<t.$slide.length?(t.index++,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1,"next")):n?(t.index=0,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1,"next")):t.s.slideEndAnimatoin&&!e&&(t.$outer.addClass("lg-right-end"),setTimeout(function(){t.$outer.removeClass("lg-right-end")},400)))},
/**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
t.prototype.goToPrevSlide=function(e){var t=this,n=t.s.loop;e&&t.$slide.length<3&&(n=!1),t.lgBusy||(0<t.index?(t.index--,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1,"prev")):n?(t.index=t.$items.length-1,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1,"prev")):t.s.slideEndAnimatoin&&!e&&(t.$outer.addClass("lg-left-end"),setTimeout(function(){t.$outer.removeClass("lg-left-end")},400)))},t.prototype.keyPress=function(){var t=this;1<this.$items.length&&v(window).on("keyup.lg",function(e){1<t.$items.length&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}),v(window).on("keydown.lg",function(e){!0===t.s.escKey&&27===e.keyCode&&(e.preventDefault(),t.$outer.hasClass("lg-thumb-open")?t.$outer.removeClass("lg-thumb-open"):t.destroy())})},t.prototype.arrow=function(){var e=this;this.$outer.find(".lg-prev").on("click.lg",function(){e.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){e.goToNextSlide()})},t.prototype.arrowDisable=function(e){
// Disable arrows if s.hideControlOnEnd is true
!this.s.loop&&this.s.hideControlOnEnd&&(e+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),0<e?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},t.prototype.setTranslate=function(e,t,n){
// jQuery supports Automatic CSS prefixing since jQuery 1.8.0
this.s.useLeft?e.css("left",t):e.css({transform:"translate3d("+t+"px, "+n+"px, 0px)"})},t.prototype.touchMove=function(e,t){var n=t-e;15<Math.abs(n)&&(
// reset opacity and transition duration
this.$outer.addClass("lg-dragging"),
// move current slide
this.setTranslate(this.$slide.eq(this.index),n,0),
// move next and prev slide with current slide
this.setTranslate(v(".lg-prev-slide"),-this.$slide.eq(this.index).width()+n,0),this.setTranslate(v(".lg-next-slide"),this.$slide.eq(this.index).width()+n,0))},t.prototype.touchEnd=function(e){var t=this;
// keep slide animation for any mode while dragg/swipe
"lg-slide"!==t.s.mode&&t.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),
// set transition duration
setTimeout(function(){t.$outer.removeClass("lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):0<e&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&
// Trigger click if distance is less than 5 pix
t.$el.trigger("onSlideClick.lg"),t.$slide.removeAttr("style")}),
// remove slide class once drag/swipe is completed if mode is not slide
setTimeout(function(){t.$outer.hasClass("lg-dragging")||"lg-slide"===t.s.mode||t.$outer.removeClass("lg-slide")},t.s.speed+100)},t.prototype.enableSwipe=function(){var t=this,n=0,i=0,o=!1;t.s.enableSwipe&&t.doCss()&&(t.$slide.on("touchstart.lg",function(e){t.$outer.hasClass("lg-zoomed")||t.lgBusy||(e.preventDefault(),t.manageSwipeClass(),n=e.originalEvent.targetTouches[0].pageX)}),t.$slide.on("touchmove.lg",function(e){t.$outer.hasClass("lg-zoomed")||(e.preventDefault(),i=e.originalEvent.targetTouches[0].pageX,t.touchMove(n,i),o=!0)}),t.$slide.on("touchend.lg",function(){t.$outer.hasClass("lg-zoomed")||(o?(o=!1,t.touchEnd(i-n)):t.$el.trigger("onSlideClick.lg"))}))},t.prototype.enableDrag=function(){var t=this,n=0,i=0,o=!1,s=!1;t.s.enableDrag&&t.doCss()&&(t.$slide.on("mousedown.lg",function(e){t.$outer.hasClass("lg-zoomed")||t.lgBusy||v(e.target).text().trim()||(e.preventDefault(),t.manageSwipeClass(),n=e.pageX,o=!0,
// ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
t.$outer.scrollLeft+=1,t.$outer.scrollLeft-=1,
// *
t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),t.$el.trigger("onDragstart.lg"))}),v(window).on("mousemove.lg",function(e){o&&(s=!0,i=e.pageX,t.touchMove(n,i),t.$el.trigger("onDragmove.lg"))}),v(window).on("mouseup.lg",function(e){s?(s=!1,t.touchEnd(i-n),t.$el.trigger("onDragend.lg")):(v(e.target).hasClass("lg-object")||v(e.target).hasClass("lg-video-play"))&&t.$el.trigger("onSlideClick.lg"),
// Prevent execution on click
o&&(o=!1,t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},t.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1;this.s.loop&&2<this.$slide.length&&(0===this.index?t=this.$slide.length-1:this.index===this.$slide.length-1&&(e=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),-1<t&&this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")},t.prototype.mousewheel=function(){var t=this;t.$outer.on("mousewheel.lg",function(e){e.deltaY&&(0<e.deltaY?t.goToPrevSlide():t.goToNextSlide(),e.preventDefault())})},t.prototype.closeGallery=function(){var t=this,n=!1;this.$outer.find(".lg-close").on("click.lg",function(){t.destroy()}),t.s.closable&&(
// If you drag the slide and release outside gallery gets close on chrome
// for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
t.$outer.on("mousedown.lg",function(e){n=!!(v(e.target).is(".lg-outer")||v(e.target).is(".lg-item ")||v(e.target).is(".lg-img-wrap"))}),t.$outer.on("mousemove.lg",function(){n=!1}),t.$outer.on("mouseup.lg",function(e){(v(e.target).is(".lg-outer")||v(e.target).is(".lg-item ")||v(e.target).is(".lg-img-wrap")&&n)&&(t.$outer.hasClass("lg-dragging")||t.destroy())}))},t.prototype.destroy=function(e){var t=this;e||(t.$el.trigger("onBeforeClose.lg"),v(window).scrollTop(t.prevScrollTop))
/**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */,e&&(t.s.dynamic||
// only when not using dynamic mode is $items a jquery collection
this.$items.off("click.lg click.lgcustom"),v.removeData(t.el,"lightGallery")),
// Unbind all events added by lightGallery
this.$el.off(".lg.tm"),
// Distroy all lightGallery modules
v.each(v.fn.lightGallery.modules,function(e){t.modules[e]&&t.modules[e].destroy()}),this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,v(window).off(".lg"),v("body").removeClass("lg-on lg-from-hash"),t.$outer&&t.$outer.removeClass("lg-visible"),v(".lg-backdrop").removeClass("in"),setTimeout(function(){t.$outer&&t.$outer.remove(),v(".lg-backdrop").remove(),e||t.$el.trigger("onCloseAfter.lg")},t.s.backdropDuration+50)},v.fn.lightGallery=function(e){return this.each(function(){if(v.data(this,"lightGallery"))try{v(this).data("lightGallery").init()}catch(e){console.error("lightGallery has not initiated properly")}else v.data(this,"lightGallery",new t(this,e))})},v.fn.lightGallery.modules={}}()}),
/*! lg-video - v1.2.2 - 2018-05-01
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
function(e,t){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=t(require("jquery")):t(e.jQuery)}(this,function(h){!function(){"use strict";function e(e,t,n,i){
/*jshint validthis:true */
var o=this;if(o.core.$slide.eq(t).find(".lg-video").append(o.loadVideo(n,"lg-object",!0,t,i)),i)if(o.core.s.videojs)try{videojs(o.core.$slide.eq(t).find(".lg-html5").get(0),o.core.s.videojsOptions,function(){!o.videoLoaded&&o.core.s.autoplayFirstVideo&&this.play()})}catch(e){console.error("Make sure you have included videojs")}else!o.videoLoaded&&o.core.s.autoplayFirstVideo&&o.core.$slide.eq(t).find(".lg-html5").get(0).play()}function t(e,t){
/*jshint validthis:true */
var n=this.core.$slide.eq(t).find(".lg-video-cont");n.hasClass("lg-has-iframe")||(n.css("max-width",this.core.s.videoMaxWidth),this.videoLoaded=!0)}function n(e,t,n){
/*jshint validthis:true */
var i=this,o=i.core.$slide.eq(t),s=o.find(".lg-youtube").get(0),r=o.find(".lg-vimeo").get(0),a=o.find(".lg-dailymotion").get(0),l=o.find(".lg-vk").get(0),u=o.find(".lg-html5").get(0),c;if(s)s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(r)try{$f(r).api("pause")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(a)a.contentWindow.postMessage("pause","*");else if(u)if(i.core.s.videojs)try{videojs(u).pause()}catch(e){console.error("Make sure you have included videojs")}else u.pause();l&&h(l).attr("src",h(l).attr("src").replace("&autoplay","&noplay")),c=i.core.s.dynamic?i.core.s.dynamicEl[n].src:i.core.$items.eq(n).attr("href")||i.core.$items.eq(n).attr("data-src");var d=i.core.isVideo(c,n)||{};(d.youtube||d.vimeo||d.dailymotion||d.vk)&&i.core.$outer.addClass("lg-hide-download")}var i={videoMaxWidth:"855px",autoplayFirstVideo:!0,youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},o=function(e){return this.core=h(e).data("lightGallery"),this.$el=h(e),this.core.s=h.extend({},i,this.core.s),this.videoLoaded=!1,this.init(),this};o.prototype.init=function(){var i=this;
// Event triggered when video url found without poster
i.core.$el.on("hasVideo.lg.tm",e.bind(this)),
// Set max width for video
i.core.$el.on("onAferAppendSlide.lg.tm",t.bind(this)),i.core.doCss()&&1<i.core.$items.length&&(i.core.s.enableSwipe||i.core.s.enableDrag)?i.core.$el.on("onSlideClick.lg.tm",function(){var e=i.core.$slide.eq(i.core.index);i.loadVideoOnclick(e)}):
// For IE 9 and bellow
i.core.$slide.on("click.lg",function(){i.loadVideoOnclick(h(this))}),i.core.$el.on("onBeforeSlide.lg.tm",n.bind(this)),i.core.$el.on("onAfterSlide.lg.tm",function(e,t){i.core.$slide.eq(t).removeClass("lg-video-playing")}),i.core.s.autoplayFirstVideo&&i.core.$el.on("onAferAppendSlide.lg.tm",function(e,t){if(!i.core.lGalleryOn){var n=i.core.$slide.eq(t);setTimeout(function(){i.loadVideoOnclick(n)},100)}})},o.prototype.loadVideo=function(e,t,n,i,o){var s="",r=1,a="",l=this.core.isVideo(e,i)||{};if(
// Enable autoplay based on setting for first video if poster doesn't exist
n&&(r=this.videoLoaded?0:this.core.s.autoplayFirstVideo?1:0),l.youtube)a="?wmode=opaque&autoplay="+r+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(a=a+"&"+h.param(this.core.s.youtubePlayerParams)),s='<iframe class="lg-video-object lg-youtube '+t+'" width="560" height="315" src="//www.youtube.com/embed/'+l.youtube[1]+a+'" frameborder="0" allowfullscreen></iframe>';else if(l.vimeo)a="?autoplay="+r+"&api=1",this.core.s.vimeoPlayerParams&&(a=a+"&"+h.param(this.core.s.vimeoPlayerParams)),s='<iframe class="lg-video-object lg-vimeo '+t+'" width="560" height="315"  src="//player.vimeo.com/video/'+l.vimeo[1]+a+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(l.dailymotion)a="?wmode=opaque&autoplay="+r+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(a=a+"&"+h.param(this.core.s.dailymotionPlayerParams)),s='<iframe class="lg-video-object lg-dailymotion '+t+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+l.dailymotion[1]+a+'" frameborder="0" allowfullscreen></iframe>';else if(l.html5){var u=o.substring(0,1);"."!==u&&"#"!==u||(o=h(o).html()),s=o}else l.vk&&(a="&autoplay="+r,this.core.s.vkPlayerParams&&(a=a+"&"+h.param(this.core.s.vkPlayerParams)),s='<iframe class="lg-video-object lg-vk '+t+'" width="560" height="315" src="//vk.com/video_ext.php?'+l.vk[1]+a+'" frameborder="0" allowfullscreen></iframe>');return s},o.prototype.loadVideoOnclick=function(n){var i=this;
// check slide has poster
if(n.find(".lg-object").hasClass("lg-has-poster")&&n.find(".lg-object").is(":visible"))
// check already video element present
if(n.hasClass("lg-has-video")){var e=n.find(".lg-youtube").get(0),t=n.find(".lg-vimeo").get(0),o=n.find(".lg-dailymotion").get(0),s=n.find(".lg-html5").get(0);if(e)e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(t)try{$f(t).api("play")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(o)o.contentWindow.postMessage("play","*");else if(s)if(i.core.s.videojs)try{videojs(s).play()}catch(e){console.error("Make sure you have included videojs")}else s.play();n.addClass("lg-video-playing")}else{var r,a;n.addClass("lg-video-playing lg-has-video");var l=function(e,t){if(n.find(".lg-video").append(i.loadVideo(e,"",!1,i.core.index,t)),t)if(i.core.s.videojs)try{videojs(i.core.$slide.eq(i.core.index).find(".lg-html5").get(0),i.core.s.videojsOptions,function(){this.play()})}catch(e){console.error("Make sure you have included videojs")}else i.core.$slide.eq(i.core.index).find(".lg-html5").get(0).play()};i.core.s.dynamic?l(r=i.core.s.dynamicEl[i.core.index].src,a=i.core.s.dynamicEl[i.core.index].html):l(r=i.core.$items.eq(i.core.index).attr("href")||i.core.$items.eq(i.core.index).attr("data-src"),a=i.core.$items.eq(i.core.index).attr("data-html"));var u=n.find(".lg-object");n.find(".lg-video").append(u),
// @todo loading icon for html5 videos also
// for showing the loading indicator while loading video
n.find(".lg-video-object").hasClass("lg-html5")||(n.removeClass("lg-complete"),n.find(".lg-video-object").on("load.lg error.lg",function(){n.addClass("lg-complete")}))}},o.prototype.destroy=function(){this.videoLoaded=!1},h.fn.lightGallery.modules.video=o}()}),
/*! lg-fullscreen - v1.0.1 - 2016-09-30
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */
function(e,t){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define(["jquery"],function(e){return t(e)}):"object"==typeof exports?
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=t(require("jquery")):t(jQuery)}(this,function(n){!function(){"use strict";var t={fullScreen:!0},e=function(e){
// get lightGallery core plugin data
return this.core=n(e).data("lightGallery"),this.$el=n(e),
// extend module defalut settings with lightGallery core settings
this.core.s=n.extend({},t,this.core.s),this.init(),this};e.prototype.init=function(){var e="";if(this.core.s.fullScreen){
// check for fullscreen browser support
if(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled))return;e='<span class="lg-fullscreen lg-icon"></span>',this.core.$outer.find(".lg-toolbar").append(e),this.fullScreen()}},e.prototype.requestFullscreen=function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},e.prototype.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},
// https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
e.prototype.fullScreen=function(){var e=this;n(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",function(){e.core.$outer.toggleClass("lg-fullscreen-on")}),this.core.$outer.find(".lg-fullscreen").on("click.lg",function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?e.exitFullscreen():e.requestFullscreen()})},e.prototype.destroy=function(){
// exit from fullscreen if activated
this.exitFullscreen(),n(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")},n.fn.lightGallery.modules.fullscreen=e}()}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";function z(e,t){var n=[],i=0;if(e&&!t&&e instanceof u)return e;if(e)if("string"==typeof e){var o,s,r=e.trim();if(0<=r.indexOf("<")&&0<=r.indexOf(">")){var a="div";for(0===r.indexOf("<li")&&(a="ul"),0===r.indexOf("<tr")&&(a="tbody"),0!==r.indexOf("<td")&&0!==r.indexOf("<th")||(a="tr"),0===r.indexOf("<tbody")&&(a="table"),0===r.indexOf("<option")&&(a="select"),(s=m.createElement(a)).innerHTML=r,i=0;i<s.childNodes.length;i+=1)n.push(s.childNodes[i])}else for(o=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||m).querySelectorAll(e.trim()):[m.getElementById(e.trim().split("#")[1])],i=0;i<o.length;i+=1)o[i]&&n.push(o[i])}else if(e.nodeType||e===J||e===m)n.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)n.push(e[i]);return new u(n)}function s(e){for(var t=[],n=0;n<e.length;n+=1)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function l(){var e=this,t=e.params,n=e.el;if(!n||0!==n.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,o=e.allowSlidePrev,s=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var r=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=o,e.allowSlideNext=i,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}}var m="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,J="undefined"==typeof window?{document:m,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,u=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};z.fn=u.prototype,z.Class=u,z.Dom7=u;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),n=0;n<t.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[n]);return this},removeClass:function(e){for(var t=e.split(" "),n=0;n<t.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[n]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),n=0;n<t.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[n]);return this},attr:function(e,t){var n=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===n.length)this[i].setAttribute(e,t);else for(var o in e)this[i][o]=e[o],this[i].setAttribute(o,e[o]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var n,i;if(void 0!==t){for(var o=0;o<this.length;o+=1)(n=this[o]).dom7ElementDataStorage||(n.dom7ElementDataStorage={}),n.dom7ElementDataStorage[e]=t;return this}if(n=this[0])return n.dom7ElementDataStorage&&e in n.dom7ElementDataStorage?n.dom7ElementDataStorage[e]:n.getAttribute("data-"+e)||void 0},transform:function(e){for(var t=0;t<this.length;t+=1){var n=this[t].style;n.webkitTransform=e,n.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var n=this[t].style;n.webkitTransitionDuration=e,n.transitionDuration=e}return this},on:function(){function e(e){var t=e.target;if(t){var n=e.target.dom7EventData||[];if(n.indexOf(e)<0&&n.unshift(e),z(t).is(r))a.apply(t,n);else for(var i=z(t).parents(),o=0;o<i.length;o+=1)z(i[o]).is(r)&&a.apply(i[o],n)}}function t(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),a.apply(this,t)}for(var n,i=[],o=arguments.length;o--;)i[o]=arguments[o];var s=i[0],r=i[1],a=i[2],l=i[3];"function"==typeof i[1]&&(s=(n=i)[0],a=n[1],l=n[2],r=void 0),l||(l=!1);for(var u,c=s.split(" "),d=0;d<this.length;d+=1){var h=this[d];if(r)for(u=0;u<c.length;u+=1){var f=c[u];h.dom7LiveListeners||(h.dom7LiveListeners={}),h.dom7LiveListeners[f]||(h.dom7LiveListeners[f]=[]),h.dom7LiveListeners[f].push({listener:a,proxyListener:e}),h.addEventListener(f,e,l)}else for(u=0;u<c.length;u+=1){var p=c[u];h.dom7Listeners||(h.dom7Listeners={}),h.dom7Listeners[p]||(h.dom7Listeners[p]=[]),h.dom7Listeners[p].push({listener:a,proxyListener:t}),h.addEventListener(p,t,l)}}return this},off:function(){for(var e,t=[],n=arguments.length;n--;)t[n]=arguments[n];var i=t[0],o=t[1],s=t[2],r=t[3];"function"==typeof t[1]&&(i=(e=t)[0],s=e[1],r=e[2],o=void 0),r||(r=!1);for(var a=i.split(" "),l=0;l<a.length;l+=1)for(var u=a[l],c=0;c<this.length;c+=1){var d=this[c],h=void 0;if(!o&&d.dom7Listeners?h=d.dom7Listeners[u]:o&&d.dom7LiveListeners&&(h=d.dom7LiveListeners[u]),h&&h.length)for(var f=h.length-1;0<=f;f-=1){var p=h[f];s&&p.listener===s?(d.removeEventListener(u,p.proxyListener,r),h.splice(f,1)):s||(d.removeEventListener(u,p.proxyListener,r),h.splice(f,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var n=e[0].split(" "),i=e[1],o=0;o<n.length;o+=1)for(var s=n[o],r=0;r<this.length;r+=1){var a=this[r],l=void 0;try{l=new J.CustomEvent(s,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=m.createEvent("Event")).initEvent(s,!0,!0),l.detail=i}a.dom7EventData=e.filter(function(e,t){return 0<t}),a.dispatchEvent(l),a.dom7EventData=[],delete a.dom7EventData}return this},transitionEnd:function(t){function n(e){if(e.target===this)for(t.call(this,e),i=0;i<o.length;i+=1)s.off(o[i],n)}var i,o=["webkitTransitionEnd","transitionend"],s=this;if(t)for(i=0;i<o.length;i+=1)s.on(o[i],n);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),n=m.body,i=e.clientTop||n.clientTop||0,o=e.clientLeft||n.clientLeft||0,s=e===J?J.scrollY:e.scrollTop,r=e===J?J.scrollX:e.scrollLeft;return{top:t.top+s-i,left:t.left+r-o}}return null},css:function(e,t){var n;if(1===arguments.length){if("string"!=typeof e){for(n=0;n<this.length;n+=1)for(var i in e)this[n].style[i]=e[i];return this}if(this[0])return J.getComputedStyle(this[0],null).getPropertyValue(e)}if(2!==arguments.length||"string"!=typeof e)return this;for(n=0;n<this.length;n+=1)this[n].style[e]=t;return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,n,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=z(e),n=0;n<t.length;n+=1)if(t[n]===i)return!0;return!1}if(e===m)return i===m;if(e===J)return i===J;if(e.nodeType||e instanceof u){for(t=e.nodeType?[e]:e,n=0;n<t.length;n+=1)if(t[n]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,n=this.length;return new u(n-1<e?[]:e<0?(t=n+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],n=arguments.length;n--;)t[n]=arguments[n];for(var i=0;i<t.length;i+=1){e=t[i];for(var o=0;o<this.length;o+=1)if("string"==typeof e){var s=m.createElement("div");for(s.innerHTML=e;s.firstChild;)this[o].appendChild(s.firstChild)}else if(e instanceof u)for(var r=0;r<e.length;r+=1)this[o].appendChild(e[r]);else this[o].appendChild(e)}return this},prepend:function(e){var t,n;for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=m.createElement("div");for(i.innerHTML=e,n=i.childNodes.length-1;0<=n;n-=1)this[t].insertBefore(i.childNodes[n],this[t].childNodes[0])}else if(e instanceof u)for(n=0;n<e.length;n+=1)this[t].insertBefore(e[n],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&z(this[0].nextElementSibling).is(e)?new u([this[0].nextElementSibling]):new u([]):this[0].nextElementSibling?new u([this[0].nextElementSibling]):new u([]):new u([])},nextAll:function(e){var t=[],n=this[0];if(!n)return new u([]);for(;n.nextElementSibling;){var i=n.nextElementSibling;e?z(i).is(e)&&t.push(i):t.push(i),n=i}return new u(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&z(t.previousElementSibling).is(e)?new u([t.previousElementSibling]):new u([]):t.previousElementSibling?new u([t.previousElementSibling]):new u([])}return new u([])},prevAll:function(e){var t=[],n=this[0];if(!n)return new u([]);for(;n.previousElementSibling;){var i=n.previousElementSibling;e?z(i).is(e)&&t.push(i):t.push(i),n=i}return new u(t)},parent:function(e){for(var t=[],n=0;n<this.length;n+=1)null!==this[n].parentNode&&(e?z(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return z(s(t))},parents:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var i=this[n].parentNode;i;)e?z(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return z(s(t))},closest:function(e){var t=this;return void 0===e?new u([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var i=this[n].querySelectorAll(e),o=0;o<i.length;o+=1)t.push(i[o]);return new u(t)},children:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var i=this[n].childNodes,o=0;o<i.length;o+=1)e?1===i[o].nodeType&&z(i[o]).is(e)&&t.push(i[o]):1===i[o].nodeType&&t.push(i[o]);return new u(s(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var n,i;for(n=0;n<e.length;n+=1){var o=z(e[n]);for(i=0;i<o.length;i+=1)this[this.length]=o[i],this.length+=1}return this},styles:function(){return this[0]?J.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){z.fn[e]=t[e]});var e,n,i,ee={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var n,i,o;void 0===t&&(t="x");var s=J.getComputedStyle(e,null);return J.WebKitCSSMatrix?(6<(i=s.transform||s.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),o=new J.WebKitCSSMatrix("none"===i?"":i)):n=(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=J.WebKitCSSMatrix?o.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===t&&(i=J.WebKitCSSMatrix?o.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),i||0},parseUrlQuery:function(e){var t,n,i,o,s={},r=e||J.location.href;if("string"==typeof r&&r.length)for(o=(n=(r=-1<r.indexOf("?")?r.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<o;t+=1)i=n[t].replace(/#\S+/g,"").split("="),s[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return s},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var n=Object(e[0]),i=1;i<e.length;i+=1){var o=e[i];if(null!=o)for(var s=Object.keys(Object(o)),r=0,a=s.length;r<a;r+=1){var l=s[r],u=Object.getOwnPropertyDescriptor(o,l);void 0!==u&&u.enumerable&&(ee.isObject(n[l])&&ee.isObject(o[l])?ee.extend(n[l],o[l]):!ee.isObject(n[l])&&ee.isObject(o[l])?(n[l]={},ee.extend(n[l],o[l])):n[l]=o[l])}}return n}},te=(i=m.createElement("div"),{touch:J.Modernizr&&!0===J.Modernizr.touch||!!(0<J.navigator.maxTouchPoints||"ontouchstart"in J||J.DocumentTouch&&m instanceof J.DocumentTouch),pointerEvents:!!(J.navigator.pointerEnabled||J.PointerEvent||"maxTouchPoints"in J.navigator),prefixedPointerEvents:!!J.navigator.msPointerEnabled,transition:(n=i.style,"transition"in n||"webkitTransition"in n||"MozTransition"in n),transforms3d:J.Modernizr&&!0===J.Modernizr.csstransforms3d||(e=i.style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=i.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),n=0;n<t.length;n+=1)if(t[n]in e)return!0;return!1}(),observer:"MutationObserver"in J||"WebkitMutationObserver"in J,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});J.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in J}),o=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},r={components:{configurable:!0}};o.prototype.on=function(e,t,n){var i=this;if("function"!=typeof t)return i;var o=n?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][o](t)}),i},o.prototype.once=function(i,o,e){var s=this;return"function"!=typeof o?s:s.on(i,function e(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];o.apply(s,t),s.off(i,e)},e)},o.prototype.off=function(e,i){var o=this;return o.eventsListeners&&e.split(" ").forEach(function(n){void 0===i?o.eventsListeners[n]=[]:o.eventsListeners[n]&&o.eventsListeners[n].length&&o.eventsListeners[n].forEach(function(e,t){e===i&&o.eventsListeners[n].splice(t,1)})}),o},o.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var n,i,o,s=this;return s.eventsListeners&&(o="string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],i=e.slice(1,e.length),s):(n=e[0].events,i=e[0].data,e[0].context||s),(Array.isArray(n)?n:n.split(" ")).forEach(function(e){if(s.eventsListeners&&s.eventsListeners[e]){var t=[];s.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(o,i)})}})),s},o.prototype.useModulesParams=function(n){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&ee.extend(n,t.params)})},o.prototype.useModules=function(i){void 0===i&&(i={});var o=this;o.modules&&Object.keys(o.modules).forEach(function(e){var n=o.modules[e],t=i[e]||{};n.instance&&Object.keys(n.instance).forEach(function(e){var t=n.instance[e];o[e]="function"==typeof t?t.bind(o):t}),n.on&&o.on&&Object.keys(n.on).forEach(function(e){o.on(e,n.on[e])}),n.create&&n.create.bind(o)(t)})},r.components.set=function(e){this.use&&this.use(e)},o.installModule=function(t){for(var e=[],n=arguments.length-1;0<n--;)e[n]=arguments[n+1];var i=this;i.prototype.modules||(i.prototype.modules={});var o=t.name||Object.keys(i.prototype.modules).length+"_"+ee.now();return(i.prototype.modules[o]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},o.use=function(e){for(var t=[],n=arguments.length-1;0<n--;)t[n]=arguments[n+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(o,r);var a={updateSize:function(){var e,t,n=this,i=n.$el;e=void 0!==n.params.width?n.params.width:i[0].clientWidth,t=void 0!==n.params.height?n.params.height:i[0].clientHeight,0===e&&n.isHorizontal()||0===t&&n.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),ee.extend(n,{width:e,height:t,size:n.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,n=e.$wrapperEl,i=e.size,o=e.rtlTranslate,s=e.wrongRTL,r=e.virtual&&t.virtual.enabled,a=r?e.virtual.slides.length:e.slides.length,l=n.children("."+e.params.slideClass),u=r?e.virtual.slides.length:l.length,c=[],d=[],h=[],f=t.slidesOffsetBefore;"function"==typeof f&&(f=t.slidesOffsetBefore.call(e));var p=t.slidesOffsetAfter;"function"==typeof p&&(p=t.slidesOffsetAfter.call(e));var m=e.snapGrid.length,g=e.snapGrid.length,v=t.spaceBetween,y=-f,b=0,w=0;if(void 0!==i){var x,C;"string"==typeof v&&0<=v.indexOf("%")&&(v=parseFloat(v.replace("%",""))/100*i),e.virtualSize=-v,o?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(u/t.slidesPerColumn)===u/e.params.slidesPerColumn?u:Math.ceil(u/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var T,k=t.slidesPerColumn,$=x/k,E=Math.floor(u/t.slidesPerColumn),S=0;S<u;S+=1){C=0;var j=l.eq(S);if(1<t.slidesPerColumn){var O=void 0,_=void 0,z=void 0;"column"===t.slidesPerColumnFill?(z=S-(_=Math.floor(S/k))*k,(E<_||_===E&&z===k-1)&&k<=(z+=1)&&(z=0,_+=1),O=_+z*x/k,j.css({"-webkit-box-ordinal-group":O,"-moz-box-ordinal-group":O,"-ms-flex-order":O,"-webkit-order":O,order:O})):_=S-(z=Math.floor(S/$))*$,j.css("margin-"+(e.isHorizontal()?"top":"left"),0!==z&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",_).attr("data-swiper-row",z)}if("none"!==j.css("display")){if("auto"===t.slidesPerView){var P=J.getComputedStyle(j[0],null),M=j[0].style.transform,L=j[0].style.webkitTransform;if(M&&(j[0].style.transform="none"),L&&(j[0].style.webkitTransform="none"),t.roundLengths)C=e.isHorizontal()?j.outerWidth(!0):j.outerHeight(!0);else if(e.isHorizontal()){var A=parseFloat(P.getPropertyValue("width")),D=parseFloat(P.getPropertyValue("padding-left")),H=parseFloat(P.getPropertyValue("padding-right")),q=parseFloat(P.getPropertyValue("margin-left")),I=parseFloat(P.getPropertyValue("margin-right")),R=P.getPropertyValue("box-sizing");C=R&&"border-box"===R?A+q+I:A+D+H+q+I}else{var N=parseFloat(P.getPropertyValue("height")),F=parseFloat(P.getPropertyValue("padding-top")),B=parseFloat(P.getPropertyValue("padding-bottom")),G=parseFloat(P.getPropertyValue("margin-top")),W=parseFloat(P.getPropertyValue("margin-bottom")),Y=P.getPropertyValue("box-sizing");C=Y&&"border-box"===Y?N+G+W:N+F+B+G+W}M&&(j[0].style.transform=M),L&&(j[0].style.webkitTransform=L),t.roundLengths&&(C=Math.floor(C))}else C=(i-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(C=Math.floor(C)),l[S]&&(e.isHorizontal()?l[S].style.width=C+"px":l[S].style.height=C+"px");l[S]&&(l[S].swiperSlideSize=C),h.push(C),t.centeredSlides?(y=y+C/2+b/2+v,0===b&&0!==S&&(y=y-i/2-v),0===S&&(y=y-i/2-v),Math.abs(y)<.001&&(y=0),t.roundLengths&&(y=Math.floor(y)),w%t.slidesPerGroup==0&&c.push(y),d.push(y)):(t.roundLengths&&(y=Math.floor(y)),w%t.slidesPerGroup==0&&c.push(y),d.push(y),y=y+C+v),e.virtualSize+=C+v,b=C,w+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+p,o&&s&&("slide"===t.effect||"coverflow"===t.effect)&&n.css({width:e.virtualSize+t.spaceBetween+"px"}),te.flexbox&&!t.setWrapperSize||(e.isHorizontal()?n.css({width:e.virtualSize+t.spaceBetween+"px"}):n.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(C+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?n.css({width:e.virtualSize+t.spaceBetween+"px"}):n.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){T=[];for(var V=0;V<c.length;V+=1){var X=c[V];t.roundLengths&&(X=Math.floor(X)),c[V]<e.virtualSize+c[0]&&T.push(X)}c=T}if(!t.centeredSlides){T=[];for(var U=0;U<c.length;U+=1){var K=c[U];t.roundLengths&&(K=Math.floor(K)),c[U]<=e.virtualSize-i&&T.push(K)}c=T,1<Math.floor(e.virtualSize-i)-Math.floor(c[c.length-1])&&c.push(e.virtualSize-i)}if(0===c.length&&(c=[0]),0!==t.spaceBetween&&(e.isHorizontal()?o?l.css({marginLeft:v+"px"}):l.css({marginRight:v+"px"}):l.css({marginBottom:v+"px"})),t.centerInsufficientSlides){var Q=0;if(h.forEach(function(e){Q+=e+(t.spaceBetween?t.spaceBetween:0)}),(Q-=t.spaceBetween)<i){var Z=(i-Q)/2;c.forEach(function(e,t){c[t]=e-Z}),d.forEach(function(e,t){d[t]=e+Z})}}ee.extend(e,{slides:l,snapGrid:c,slidesGrid:d,slidesSizesGrid:h}),u!==a&&e.emit("slidesLengthChange"),c.length!==m&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),d.length!==g&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,n=this,i=[],o=0;if("number"==typeof e?n.setTransition(e):!0===e&&n.setTransition(n.params.speed),"auto"!==n.params.slidesPerView&&1<n.params.slidesPerView)for(t=0;t<Math.ceil(n.params.slidesPerView);t+=1){var s=n.activeIndex+t;if(s>n.slides.length)break;i.push(n.slides.eq(s)[0])}else i.push(n.slides.eq(n.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;o=o<r?r:o}o&&n.$wrapperEl.css("height",o+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,n=t.params,i=t.slides,o=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var s=-e;o&&(s=e),i.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var r=0;r<i.length;r+=1){var a=i[r],l=(s+(n.centeredSlides?t.minTranslate():0)-a.swiperSlideOffset)/(a.swiperSlideSize+n.spaceBetween);if(n.watchSlidesVisibility){var u=-(s-a.swiperSlideOffset),c=u+t.slidesSizesGrid[r];(0<=u&&u<t.size||0<c&&c<=t.size||u<=0&&c>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(r),i.eq(r).addClass(n.slideVisibleClass))}a.progress=o?-l:l}t.visibleSlides=z(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,n=t.params,i=t.maxTranslate()-t.minTranslate(),o=t.progress,s=t.isBeginning,r=t.isEnd,a=s,l=r;r=0===i?s=!(o=0):(s=(o=(e-t.minTranslate())/i)<=0,1<=o),ee.extend(t,{progress:o,isBeginning:s,isEnd:r}),(n.watchSlidesProgress||n.watchSlidesVisibility)&&t.updateSlidesProgress(e),s&&!a&&t.emit("reachBeginning toEdge"),r&&!l&&t.emit("reachEnd toEdge"),(a&&!s||l&&!r)&&t.emit("fromEdge"),t.emit("progress",o)},updateSlidesClasses:function(){var e,t=this,n=t.slides,i=t.params,o=t.$wrapperEl,s=t.activeIndex,r=t.realIndex,a=t.virtual&&i.virtual.enabled;n.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=a?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+s+'"]'):n.eq(s)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?o.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):o.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=n.eq(0)).addClass(i.slideNextClass);var u=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===u.length&&(u=n.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?o.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):o.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),u.hasClass(i.slideDuplicateClass)?o.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+u.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):o.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+u.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,n=this,i=n.rtlTranslate?n.translate:-n.translate,o=n.slidesGrid,s=n.snapGrid,r=n.params,a=n.activeIndex,l=n.realIndex,u=n.snapIndex,c=e;if(void 0===c){for(var d=0;d<o.length;d+=1)void 0!==o[d+1]?i>=o[d]&&i<o[d+1]-(o[d+1]-o[d])/2?c=d:i>=o[d]&&i<o[d+1]&&(c=d+1):i>=o[d]&&(c=d);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if((t=0<=s.indexOf(i)?s.indexOf(i):Math.floor(c/r.slidesPerGroup))>=s.length&&(t=s.length-1),c!==a){var h=parseInt(n.slides.eq(c).attr("data-swiper-slide-index")||c,10);ee.extend(n,{snapIndex:t,realIndex:h,previousIndex:a,activeIndex:c}),n.emit("activeIndexChange"),n.emit("snapIndexChange"),l!==h&&n.emit("realIndexChange"),n.emit("slideChange")}else t!==u&&(n.snapIndex=t,n.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,n=t.params,i=z(e.target).closest("."+n.slideClass)[0],o=!1;if(i)for(var s=0;s<t.slides.length;s+=1)t.slides[s]===i&&(o=!0);if(!i||!o)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(z(i).attr("data-swiper-slide-index"),10):t.clickedIndex=z(i).index(),n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},c={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,n=this.rtlTranslate,i=this.translate,o=this.$wrapperEl;if(t.virtualTranslate)return n?-i:i;var s=ee.getTranslate(o[0],e);return n&&(s=-s),s||0},setTranslate:function(e,t){var n=this,i=n.rtlTranslate,o=n.params,s=n.$wrapperEl,r=n.progress,a=0,l=0;n.isHorizontal()?a=i?-e:e:l=e,o.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),o.virtualTranslate||(te.transforms3d?s.transform("translate3d("+a+"px, "+l+"px, 0px)"):s.transform("translate("+a+"px, "+l+"px)")),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l;var u=n.maxTranslate()-n.minTranslate();(0===u?0:(e-n.minTranslate())/u)!==r&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}},d={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var n=this,i=n.activeIndex,o=n.params,s=n.previousIndex;o.autoHeight&&n.updateAutoHeight();var r=t;if(r||(r=s<i?"next":i<s?"prev":"reset"),n.emit("transitionStart"),e&&i!==s){if("reset"===r)return void n.emit("slideResetTransitionStart");n.emit("slideChangeTransitionStart"),"next"===r?n.emit("slideNextTransitionStart"):n.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var n=this,i=n.activeIndex,o=n.previousIndex;n.animating=!1,n.setTransition(0);var s=t;if(s||(s=o<i?"next":i<o?"prev":"reset"),n.emit("transitionEnd"),e&&i!==o){if("reset"===s)return void n.emit("slideResetTransitionEnd");n.emit("slideChangeTransitionEnd"),"next"===s?n.emit("slideNextTransitionEnd"):n.emit("slidePrevTransitionEnd")}}},h={slideTo:function(e,t,n,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0);var o=this,s=e;s<0&&(s=0);var r=o.params,a=o.snapGrid,l=o.slidesGrid,u=o.previousIndex,c=o.activeIndex,d=o.rtlTranslate;if(o.animating&&r.preventInteractionOnTransition)return!1;var h=Math.floor(s/r.slidesPerGroup);h>=a.length&&(h=a.length-1),(c||r.initialSlide||0)===(u||0)&&n&&o.emit("beforeSlideChangeStart");var f,p=-a[h];if(o.updateProgress(p),r.normalizeSlideIndex)for(var m=0;m<l.length;m+=1)-Math.floor(100*p)>=Math.floor(100*l[m])&&(s=m);if(o.initialized&&s!==c){if(!o.allowSlideNext&&p<o.translate&&p<o.minTranslate())return!1;if(!o.allowSlidePrev&&p>o.translate&&p>o.maxTranslate()&&(c||0)!==s)return!1}return f=c<s?"next":s<c?"prev":"reset",d&&-p===o.translate||!d&&p===o.translate?(o.updateActiveIndex(s),r.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),"slide"!==r.effect&&o.setTranslate(p),"reset"!==f&&(o.transitionStart(n,f),o.transitionEnd(n,f)),!1):(0!==t&&te.transition?(o.setTransition(t),o.setTranslate(p),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,i),o.transitionStart(n,f),o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,f))}),o.$wrapperEl[0].addEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd))):(o.setTransition(0),o.setTranslate(p),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,i),o.transitionStart(n,f),o.transitionEnd(n,f)),!0)},slideToLoop:function(e,t,n,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0);var o=e;return this.params.loop&&(o+=this.loopedSlides),this.slideTo(o,t,n,i)},slideNext:function(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,o=i.params,s=i.animating;return o.loop?!s&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+o.slidesPerGroup,e,t,n)):i.slideTo(i.activeIndex+o.slidesPerGroup,e,t,n)},slidePrev:function(e,t,n){function i(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var o=this,s=o.params,r=o.animating,a=o.snapGrid,l=o.slidesGrid,u=o.rtlTranslate;if(s.loop){if(r)return!1;o.loopFix(),o._clientLeft=o.$wrapperEl[0].clientLeft}var c,d=i(u?o.translate:-o.translate),h=a.map(function(e){return i(e)}),f=(l.map(function(e){return i(e)}),a[h.indexOf(d)],a[h.indexOf(d)-1]);return void 0!==f&&(c=l.indexOf(f))<0&&(c=o.activeIndex-1),o.slideTo(c,e,t,n)},slideReset:function(e,t,n){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,o=i.activeIndex,s=Math.floor(o/i.params.slidesPerGroup);if(s<i.snapGrid.length-1){var r=i.rtlTranslate?i.translate:-i.translate,a=i.snapGrid[s];(i.snapGrid[s+1]-a)/2<r-a&&(o=i.params.slidesPerGroup)
}return i.slideTo(o,e,t,n)},slideToClickedSlide:function(){var e,t=this,n=t.params,i=t.$wrapperEl,o="auto"===n.slidesPerView?t.slidesPerViewDynamic():n.slidesPerView,s=t.clickedIndex;if(n.loop){if(t.animating)return;e=parseInt(z(t.clickedSlide).attr("data-swiper-slide-index"),10),n.centeredSlides?s<t.loopedSlides-o/2||s>t.slides.length-t.loopedSlides+o/2?(t.loopFix(),s=i.children("."+n.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+n.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(s)})):t.slideTo(s):s>t.slides.length-o?(t.loopFix(),s=i.children("."+n.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+n.slideDuplicateClass+")").eq(0).index(),ee.nextTick(function(){t.slideTo(s)})):t.slideTo(s)}else t.slideTo(s)}},f={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var o=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var n=e.slidesPerGroup-o.length%e.slidesPerGroup;if(n!==e.slidesPerGroup){for(var s=0;s<n;s+=1){var r=z(m.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(r)}o=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=o.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>o.length&&(i.loopedSlides=o.length);var a=[],l=[];o.each(function(e,t){var n=z(t);e<i.loopedSlides&&l.push(t),e<o.length&&e>=o.length-i.loopedSlides&&a.push(t),n.attr("data-swiper-slide-index",e)});for(var u=0;u<l.length;u+=1)t.append(z(l[u].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var c=a.length-1;0<=c;c-=1)t.prepend(z(a[c].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,n=t.params,i=t.activeIndex,o=t.slides,s=t.loopedSlides,r=t.allowSlidePrev,a=t.allowSlideNext,l=t.snapGrid,u=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var c=-l[i]-t.getTranslate();i<s?(e=o.length-3*s+i,e+=s,t.slideTo(e,0,!1,!0)&&0!==c&&t.setTranslate((u?-t.translate:t.translate)-c)):("auto"===n.slidesPerView&&2*s<=i||i>=o.length-s)&&(e=-o.length+i+s,e+=s,t.slideTo(e,0,!1,!0)&&0!==c&&t.setTranslate((u?-t.translate:t.translate)-c)),t.allowSlidePrev=r,t.allowSlideNext=a},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,n=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),n.removeAttr("data-swiper-slide-index")}},p={setGrabCursor:function(e){if(!(te.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){te.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}},g={appendSlide:function(e){var t=this,n=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var o=0;o<e.length;o+=1)e[o]&&n.append(e[o]);else n.append(e);i.loop&&t.loopCreate(),i.observer&&te.observer||t.update()},prependSlide:function(e){var t=this,n=t.params,i=t.$wrapperEl,o=t.activeIndex;n.loop&&t.loopDestroy();var s=o+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);s=o+e.length}else i.prepend(e);n.loop&&t.loopCreate(),n.observer&&te.observer||t.update(),t.slideTo(s,0,!1)},addSlide:function(e,t){var n=this,i=n.$wrapperEl,o=n.params,s=n.activeIndex;o.loop&&(s-=n.loopedSlides,n.loopDestroy(),n.slides=i.children("."+o.slideClass));var r=n.slides.length;if(e<=0)n.prependSlide(t);else if(r<=e)n.appendSlide(t);else{for(var a=e<s?s+1:s,l=[],u=r-1;e<=u;u-=1){var c=n.slides.eq(u);c.remove(),l.unshift(c)}if("object"==typeof t&&"length"in t){for(var d=0;d<t.length;d+=1)t[d]&&i.append(t[d]);a=e<s?s+t.length:s}else i.append(t);for(var h=0;h<l.length;h+=1)i.append(l[h]);o.loop&&n.loopCreate(),o.observer&&te.observer||n.update(),o.loop?n.slideTo(a+n.loopedSlides,0,!1):n.slideTo(a,0,!1)}},removeSlide:function(e){var t=this,n=t.params,i=t.$wrapperEl,o=t.activeIndex;n.loop&&(o-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+n.slideClass));var s,r=o;if("object"==typeof e&&"length"in e){for(var a=0;a<e.length;a+=1)s=e[a],t.slides[s]&&t.slides.eq(s).remove(),s<r&&(r-=1);r=Math.max(r,0)}else s=e,t.slides[s]&&t.slides.eq(s).remove(),s<r&&(r-=1),r=Math.max(r,0);n.loop&&t.loopCreate(),n.observer&&te.observer||t.update(),n.loop?t.slideTo(r+t.loopedSlides,0,!1):t.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},v=function(){var e=J.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:J.cordova||J.phonegap,phonegap:J.cordova||J.phonegap},n=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),o=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!o&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(n&&(t.os="windows",t.osVersion=n[2],t.windows=!0),i&&!n&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(o||r||s)&&(t.os="ios",t.ios=!0),r&&!s&&(t.osVersion=r[2].replace(/_/g,"."),t.iphone=!0),o&&(t.osVersion=o[2].replace(/_/g,"."),t.ipad=!0),s&&(t.osVersion=s[3]?s[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(r||o||s)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var a=t.osVersion.split("."),l=m.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(s||r)&&(1*a[0]==7?1<=1*a[1]:7<1*a[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=J.devicePixelRatio||1,t}(),y={attachEvents:function(){var e=this,t=e.params,n=e.touchEvents,i=e.el,o=e.wrapperEl;e.onTouchStart=function(e){var t=this,n=t.touchEventsData,i=t.params,o=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var s=e;if(s.originalEvent&&(s=s.originalEvent),n.isTouchEvent="touchstart"===s.type,(n.isTouchEvent||!("which"in s)||3!==s.which)&&!(!n.isTouchEvent&&"button"in s&&0<s.button||n.isTouched&&n.isMoved))if(i.noSwiping&&z(s.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||z(s).closest(i.swipeHandler)[0]){o.currentX="touchstart"===s.type?s.targetTouches[0].pageX:s.pageX,o.currentY="touchstart"===s.type?s.targetTouches[0].pageY:s.pageY;var r=o.currentX,a=o.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,u=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(r<=u||r>=J.screen.width-u)){if(ee.extend(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=r,o.startY=a,n.touchStartTime=ee.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(n.allowThresholdMove=!1),"touchstart"!==s.type){var c=!0;z(s.target).is(n.formElements)&&(c=!1),m.activeElement&&z(m.activeElement).is(n.formElements)&&m.activeElement!==s.target&&m.activeElement.blur();var d=c&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||d)&&s.preventDefault()}t.emit("touchStart",s)}}}}.bind(e),e.onTouchMove=function(e){var t=this,n=t.touchEventsData,i=t.params,o=t.touches,s=t.rtlTranslate,r=e;if(r.originalEvent&&(r=r.originalEvent),n.isTouched){if(!n.isTouchEvent||"mousemove"!==r.type){var a="touchmove"===r.type?r.targetTouches[0].pageX:r.pageX,l="touchmove"===r.type?r.targetTouches[0].pageY:r.pageY;if(r.preventedByNestedSwiper)return o.startX=a,void(o.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(n.isTouched&&(ee.extend(o,{startX:a,startY:l,currentX:a,currentY:l}),n.touchStartTime=ee.now()));if(n.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<o.startY&&t.translate<=t.maxTranslate()||l>o.startY&&t.translate>=t.minTranslate())return n.isTouched=!1,void(n.isMoved=!1)}else if(a<o.startX&&t.translate<=t.maxTranslate()||a>o.startX&&t.translate>=t.minTranslate())return;if(n.isTouchEvent&&m.activeElement&&r.target===m.activeElement&&z(r.target).is(n.formElements))return n.isMoved=!0,void(t.allowClick=!1);if(n.allowTouchCallbacks&&t.emit("touchMove",r),!(r.targetTouches&&1<r.targetTouches.length)){o.currentX=a,o.currentY=l;var u,c=o.currentX-o.startX,d=o.currentY-o.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))<t.params.threshold))if(void 0===n.isScrolling&&(t.isHorizontal()&&o.currentY===o.startY||t.isVertical()&&o.currentX===o.startX?n.isScrolling=!1:25<=c*c+d*d&&(u=180*Math.atan2(Math.abs(d),Math.abs(c))/Math.PI,n.isScrolling=t.isHorizontal()?u>i.touchAngle:90-u>i.touchAngle)),n.isScrolling&&t.emit("touchMoveOpposite",r),void 0===n.startMoving&&(o.currentX===o.startX&&o.currentY===o.startY||(n.startMoving=!0)),n.isScrolling)n.isTouched=!1;else if(n.startMoving){t.allowClick=!1,r.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&r.stopPropagation(),n.isMoved||(i.loop&&t.loopFix(),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),n.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",r)),t.emit("sliderMove",r),n.isMoved=!0;var h=t.isHorizontal()?c:d;o.diff=h,h*=i.touchRatio,s&&(h=-h),t.swipeDirection=0<h?"prev":"next",n.currentTranslate=h+n.startTranslate;var f=!0,p=i.resistanceRatio;if(i.touchReleaseOnEdges&&(p=0),0<h&&n.currentTranslate>t.minTranslate()?(f=!1,i.resistance&&(n.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+n.startTranslate+h,p))):h<0&&n.currentTranslate<t.maxTranslate()&&(f=!1,i.resistance&&(n.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-n.startTranslate-h,p))),f&&(r.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),0<i.threshold){if(!(Math.abs(h)>i.threshold||n.allowThresholdMove))return void(n.currentTranslate=n.startTranslate);if(!n.allowThresholdMove)return n.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,n.currentTranslate=n.startTranslate,void(o.diff=t.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===n.velocities.length&&n.velocities.push({position:o[t.isHorizontal()?"startX":"startY"],time:n.touchStartTime}),n.velocities.push({position:o[t.isHorizontal()?"currentX":"currentY"],time:ee.now()})),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}}}}else n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",r)}.bind(e),e.onTouchEnd=function(e){var t=this,n=t.touchEventsData,i=t.params,o=t.touches,s=t.rtlTranslate,r=t.$wrapperEl,a=t.slidesGrid,l=t.snapGrid,u=e;if(u.originalEvent&&(u=u.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",u),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);i.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var c,d=ee.now(),h=d-n.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(u),t.emit("tap",u),h<300&&300<d-n.lastClickTime&&(n.clickTimeout&&clearTimeout(n.clickTimeout),n.clickTimeout=ee.nextTick(function(){t&&!t.destroyed&&t.emit("click",u)},300)),h<300&&d-n.lastClickTime<300&&(n.clickTimeout&&clearTimeout(n.clickTimeout),t.emit("doubleTap",u))),n.lastClickTime=ee.now(),ee.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||0===o.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,c=i.followFinger?s?t.translate:-t.translate:-n.currentTranslate,i.freeMode){if(c<-t.minTranslate())return void t.slideTo(t.activeIndex);if(c>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<n.velocities.length){var f=n.velocities.pop(),p=n.velocities.pop(),m=f.position-p.position,g=f.time-p.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<g||300<ee.now()-f.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,n.velocities.length=0;var v=1e3*i.freeModeMomentumRatio,y=t.velocity*v,b=t.translate+y;s&&(b=-b);var w,x,C=!1,T=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(b<t.maxTranslate())i.freeModeMomentumBounce?(b+t.maxTranslate()<-T&&(b=t.maxTranslate()-T),w=t.maxTranslate(),C=!0,n.allowMomentumBounce=!0):b=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(b>t.minTranslate())i.freeModeMomentumBounce?(b-t.minTranslate()>T&&(b=t.minTranslate()+T),w=t.minTranslate(),C=!0,n.allowMomentumBounce=!0):b=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var k,$=0;$<l.length;$+=1)if(l[$]>-b){k=$;break}b=-(b=Math.abs(l[k]-b)<Math.abs(l[k-1]-b)||"next"===t.swipeDirection?l[k]:l[k-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)v=s?Math.abs((-b-t.translate)/t.velocity):Math.abs((b-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&C?(t.updateProgress(w),t.setTransition(v),t.setTranslate(b),t.transitionStart(!0,t.swipeDirection),t.animating=!0,r.transitionEnd(function(){t&&!t.destroyed&&n.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(w),r.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(b),t.setTransition(v),t.setTranslate(b),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,r.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(b),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||h>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var E=0,S=t.slidesSizesGrid[0],j=0;j<a.length;j+=i.slidesPerGroup)void 0!==a[j+i.slidesPerGroup]?c>=a[j]&&c<a[j+i.slidesPerGroup]&&(S=a[(E=j)+i.slidesPerGroup]-a[j]):c>=a[j]&&(E=j,S=a[a.length-1]-a[a.length-2]);var O=(c-a[E])/S;if(h>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(O>=i.longSwipesRatio?t.slideTo(E+i.slidesPerGroup):t.slideTo(E)),"prev"===t.swipeDirection&&(O>1-i.longSwipesRatio?t.slideTo(E+i.slidesPerGroup):t.slideTo(E))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(E+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(E)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var s="container"===t.touchEventsTarget?i:o,r=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var a=!("touchstart"!==n.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(n.start,e.onTouchStart,a),s.addEventListener(n.move,e.onTouchMove,te.passiveListener?{passive:!1,capture:r}:r),s.addEventListener(n.end,e.onTouchEnd,a)}(t.simulateTouch&&!v.ios&&!v.android||t.simulateTouch&&!te.touch&&v.ios)&&(s.addEventListener("mousedown",e.onTouchStart,!1),m.addEventListener("mousemove",e.onTouchMove,r),m.addEventListener("mouseup",e.onTouchEnd,!1))}else s.addEventListener(n.start,e.onTouchStart,!1),m.addEventListener(n.move,e.onTouchMove,r),m.addEventListener(n.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",e.onClick,!0),e.on(v.ios||v.android?"resize orientationchange observerUpdate":"resize observerUpdate",l,!0)},detachEvents:function(){var e=this,t=e.params,n=e.touchEvents,i=e.el,o=e.wrapperEl,s="container"===t.touchEventsTarget?i:o,r=!!t.nested;if(te.touch||!te.pointerEvents&&!te.prefixedPointerEvents){if(te.touch){var a=!("onTouchStart"!==n.start||!te.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(n.start,e.onTouchStart,a),s.removeEventListener(n.move,e.onTouchMove,r),s.removeEventListener(n.end,e.onTouchEnd,a)}(t.simulateTouch&&!v.ios&&!v.android||t.simulateTouch&&!te.touch&&v.ios)&&(s.removeEventListener("mousedown",e.onTouchStart,!1),m.removeEventListener("mousemove",e.onTouchMove,r),m.removeEventListener("mouseup",e.onTouchEnd,!1))}else s.removeEventListener(n.start,e.onTouchStart,!1),m.removeEventListener(n.move,e.onTouchMove,r),m.removeEventListener(n.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",e.onClick,!0),e.off(v.ios||v.android?"resize orientationchange observerUpdate":"resize observerUpdate",l)}},b,w={setBreakpoint:function(){var e=this,t=e.activeIndex,n=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var o=e.params,s=o.breakpoints;if(s&&(!s||0!==Object.keys(s).length)){var r=e.getBreakpoint(s);if(r&&e.currentBreakpoint!==r){var a=r in s?s[r]:void 0;a&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=a[e];void 0!==t&&(a[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var l=a||e.originalParams,u=o.loop&&l.slidesPerView!==o.slidesPerView;ee.extend(e.params,l),ee.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=r,u&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,n=[];Object.keys(e).forEach(function(e){n.push(e)}),n.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<n.length;i+=1){var o=n[i];this.params.breakpointsInverse?o<=J.innerWidth&&(t=o):o>=J.innerWidth&&!t&&(t=o)}return t||"max"}}},P={isIE:!!J.navigator.userAgent.match(/Trident/g)||!!J.navigator.userAgent.match(/MSIE/g),isEdge:!!J.navigator.userAgent.match(/Edge/g),isSafari:(b=J.navigator.userAgent.toLowerCase(),0<=b.indexOf("safari")&&b.indexOf("chrome")<0&&b.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)},x={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},C={update:a,translate:c,transition:d,slide:h,loop:f,grabCursor:p,manipulation:g,events:y,breakpoints:w,checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,n=this.params,e=this.rtl,i=this.$el,o=[];o.push(n.direction),n.freeMode&&o.push("free-mode"),te.flexbox||o.push("no-flexbox"),n.autoHeight&&o.push("autoheight"),e&&o.push("rtl"),1<n.slidesPerColumn&&o.push("multirow"),v.android&&o.push("android"),v.ios&&o.push("ios"),(P.isIE||P.isEdge)&&(te.pointerEvents||te.prefixedPointerEvents)&&o.push("wp8-"+n.direction),o.forEach(function(e){t.push(n.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,n,i,o,s){function r(){s&&s()}var a;e.complete&&o?r():t?((a=new J.Image).onload=r,a.onerror=r,i&&(a.sizes=i),n&&(a.srcset=n),t&&(a.src=t)):r()},preloadImages:function(){function e(){null!=t&&t&&!t.destroyed&&(void 0!==t.imagesLoaded&&(t.imagesLoaded+=1),t.imagesLoaded===t.imagesToLoad.length&&(t.params.updateOnImagesReady&&t.update(),t.emit("imagesReady")))}var t=this;t.imagesToLoad=t.$el.find("img");for(var n=0;n<t.imagesToLoad.length;n+=1){var i=t.imagesToLoad[n];t.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,e)}}}},T={},k=function(h){function f(){for(var e,t,o,n=[],i=arguments.length;i--;)n[i]=arguments[i];(o=1===n.length&&n[0].constructor&&n[0].constructor===Object?n[0]:(t=(e=n)[0],e[1]))||(o={}),o=ee.extend({},o),t&&!o.el&&(o.el=t),h.call(this,o),Object.keys(C).forEach(function(t){Object.keys(C[t]).forEach(function(e){f.prototype[e]||(f.prototype[e]=C[t][e])})});var s=this;void 0===s.modules&&(s.modules={}),Object.keys(s.modules).forEach(function(e){var t=s.modules[e];if(t.params){var n=Object.keys(t.params)[0],i=t.params[n];if("object"!=typeof i||null===i)return;if(!(n in o&&"enabled"in i))return;!0===o[n]&&(o[n]={enabled:!0}),"object"!=typeof o[n]||"enabled"in o[n]||(o[n].enabled=!0),o[n]||(o[n]={enabled:!1})}});var r=ee.extend({},x);s.useModulesParams(r),s.params=ee.extend({},r,T,o),s.originalParams=ee.extend({},s.params),s.passedParams=ee.extend({},o);var a=(s.$=z)(s.params.el);if(t=a[0]){if(1<a.length){var l=[];return a.each(function(e,t){var n=ee.extend({},o,{el:t});l.push(new f(n))}),l}t.swiper=s,a.data("swiper",s);var u,c,d=a.children("."+s.params.wrapperClass);return ee.extend(s,{$el:a,el:t,$wrapperEl:d,wrapperEl:d[0],classNames:[],slides:z(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===s.params.direction},isVertical:function(){return"vertical"===s.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===a.css("direction"),rtlTranslate:"horizontal"===s.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===a.css("direction")),wrongRTL:"-webkit-box"===d.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEvents:(u=["touchstart","touchmove","touchend"],c=["mousedown","mousemove","mouseup"],te.pointerEvents?c=["pointerdown","pointermove","pointerup"]:te.prefixedPointerEvents&&(c=["MSPointerDown","MSPointerMove","MSPointerUp"]),s.touchEventsTouch={start:u[0],move:u[1],end:u[2]},s.touchEventsDesktop={start:c[0],move:c[1],end:c[2]},te.touch||!s.params.simulateTouch?s.touchEventsTouch:s.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:ee.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.useModules(),s.params.init&&s.init(),s}}h&&(f.__proto__=h);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((f.prototype=Object.create(h&&h.prototype)).constructor=f).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,n=e.slides,i=e.slidesGrid,o=e.size,s=e.activeIndex,r=1;if(t.centeredSlides){for(var a,l=n[s].swiperSlideSize,u=s+1;u<n.length;u+=1)n[u]&&!a&&(r+=1,o<(l+=n[u].swiperSlideSize)&&(a=!0));for(var c=s-1;0<=c;c-=1)n[c]&&!a&&(r+=1,o<(l+=n[c].swiperSlideSize)&&(a=!0))}else for(var d=s+1;d<n.length;d+=1)i[d]-i[s]<o&&(r+=1);return r},f.prototype.update=function(){function e(){var e=n.rtlTranslate?-1*n.translate:n.translate,t=Math.min(Math.max(e,n.maxTranslate()),n.minTranslate());n.setTranslate(t),n.updateActiveIndex(),n.updateSlidesClasses()}var n=this;if(n&&!n.destroyed){var t=n.snapGrid,i=n.params;i.breakpoints&&n.setBreakpoint(),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),n.params.freeMode?(e(),n.params.autoHeight&&n.updateAutoHeight()):(("auto"===n.params.slidesPerView||1<n.params.slidesPerView)&&n.isEnd&&!n.params.centeredSlides?n.slideTo(n.slides.length-1,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0))||e(),i.watchOverflow&&t!==n.snapGrid&&n.checkOverflow(),n.emit("update")}},f.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},f.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var n=this,i=n.params,o=n.$el,s=n.$wrapperEl,r=n.slides;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),o.removeAttr("style"),s.removeAttr("style"),r&&r.length&&r.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(function(e){n.off(e)}),!1!==e&&(n.$el[0].swiper=null,n.$el.data("swiper",null),ee.deleteProps(n)),n.destroyed=!0),null},f.extendDefaults=function(e){ee.extend(T,e)},e.extendedDefaults.get=function(){return T},e.defaults.get=function(){return x},e.Class.get=function(){return h},e.$.get=function(){return z},Object.defineProperties(f,e),f}(o),$={name:"device",proto:{device:v},static:{device:v}},E={name:"support",proto:{support:te},static:{support:te}},S={name:"browser",proto:{browser:P},static:{browser:P}},j={name:"resize",create:function(){var e=this;ee.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){J.addEventListener("resize",this.resize.resizeHandler),J.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){J.removeEventListener("resize",this.resize.resizeHandler),J.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},O={func:J.MutationObserver||J.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var n=this,i=new O.func(function(e){if(1!==e.length){var t=function(){n.emit("observerUpdate",e[0])};J.requestAnimationFrame?J.requestAnimationFrame(t):J.setTimeout(t,0)}else n.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.observer.observers.push(i)},init:function(){var e=this;if(te.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),n=0;n<t.length;n+=1)e.observer.attach(t[n]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},_={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){ee.extend(this,{observer:{init:O.init.bind(this),attach:O.attach.bind(this),destroy:O.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},M={update:function(e){function t(){n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),n.lazy&&n.params.lazy.enabled&&n.lazy.load()}var n=this,i=n.params,o=i.slidesPerView,s=i.slidesPerGroup,r=i.centeredSlides,a=n.params.virtual,l=a.addSlidesBefore,u=a.addSlidesAfter,c=n.virtual,d=c.from,h=c.to,f=c.slides,p=c.slidesGrid,m=c.renderSlide,g=c.offset;n.updateActiveIndex();var v,y,b,w=n.activeIndex||0;v=n.rtlTranslate?"right":n.isHorizontal()?"left":"top",b=r?(y=Math.floor(o/2)+s+l,Math.floor(o/2)+s+u):(y=o+(s-1)+l,s+u);var x=Math.max((w||0)-b,0),C=Math.min((w||0)+y,f.length-1),T=(n.slidesGrid[x]||0)-(n.slidesGrid[0]||0);if(ee.extend(n.virtual,{from:x,to:C,offset:T,slidesGrid:n.slidesGrid}),d===x&&h===C&&!e)return n.slidesGrid!==p&&T!==g&&n.slides.css(v,T+"px"),void n.updateProgress();if(n.params.virtual.renderExternal)return n.params.virtual.renderExternal.call(n,{offset:T,from:x,to:C,slides:function(){for(var e=[],t=x;t<=C;t+=1)e.push(f[t]);return e}()}),void t();var k=[],$=[];if(e)n.$wrapperEl.find("."+n.params.slideClass).remove();else for(var E=d;E<=h;E+=1)(E<x||C<E)&&n.$wrapperEl.find("."+n.params.slideClass+'[data-swiper-slide-index="'+E+'"]').remove();for(var S=0;S<f.length;S+=1)x<=S&&S<=C&&(void 0===h||e?$.push(S):(h<S&&$.push(S),S<d&&k.push(S)));$.forEach(function(e){n.$wrapperEl.append(m(f[e],e))}),k.sort(function(e,t){return t-e}).forEach(function(e){n.$wrapperEl.prepend(m(f[e],e))}),n.$wrapperEl.children(".swiper-slide").css(v,T+"px"),t()},renderSlide:function(e,t){var n=this,i=n.params.virtual;if(i.cache&&n.virtual.cache[t])return n.virtual.cache[t];var o=i.renderSlide?z(i.renderSlide.call(n,e,t)):z('<div class="'+n.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return o.attr("data-swiper-slide-index")||o.attr("data-swiper-slide-index",t),i.cache&&(n.virtual.cache[t]=o),o},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var n=t.virtual.cache,i={};Object.keys(n).forEach(function(e){i[e+1]=n[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},L={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;ee.extend(e,{virtual:{update:M.update.bind(e),appendSlide:M.appendSlide.bind(e),prependSlide:M.prependSlide.bind(e),
renderSlide:M.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},A={handle:function(e){var t=this,n=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var o=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===o||t.isVertical()&&40===o))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===o||t.isVertical()&&38===o))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||m.activeElement&&m.activeElement.nodeName&&("input"===m.activeElement.nodeName.toLowerCase()||"textarea"===m.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(37===o||39===o||38===o||40===o)){var s=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var r=J.innerWidth,a=J.innerHeight,l=t.$el.offset();n&&(l.left-=t.$el[0].scrollLeft);for(var u=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],c=0;c<u.length;c+=1){var d=u[c];0<=d[0]&&d[0]<=r&&0<=d[1]&&d[1]<=a&&(s=!0)}if(!s)return}t.isHorizontal()?(37!==o&&39!==o||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===o&&!n||37===o&&n)&&t.slideNext(),(37===o&&!n||39===o&&n)&&t.slidePrev()):(38!==o&&40!==o||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===o&&t.slideNext(),38===o&&t.slidePrev()),t.emit("keyPress",o)}},enable:function(){this.keyboard.enabled||(z(m).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(z(m).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},D={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){ee.extend(this,{keyboard:{enabled:!1,enable:A.enable.bind(this),disable:A.disable.bind(this),handle:A.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}},H={lastScrollTime:ee.now(),event:-1<J.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in m;if(!t){var n=m.createElement("div");n.setAttribute(e,"return;"),t="function"==typeof n[e]}return!t&&m.implementation&&m.implementation.hasFeature&&!0!==m.implementation.hasFeature("","")&&(t=m.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,n=0,i=0,o=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),i=10*t,o=10*n,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||o)&&e.deltaMode&&(1===e.deltaMode?(i*=40,o*=40):(i*=800,o*=800)),i&&!t&&(t=i<1?-1:1),o&&!n&&(n=o<1?-1:1),{spinX:t,spinY:n,pixelX:i,pixelY:o}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,n=this,i=n.params.mousewheel;if(!n.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var o=0,s=n.rtlTranslate?-1:1,r=H.normalize(t);if(i.forceToAxis)if(n.isHorizontal()){if(!(Math.abs(r.pixelX)>Math.abs(r.pixelY)))return!0;o=r.pixelX*s}else{if(!(Math.abs(r.pixelY)>Math.abs(r.pixelX)))return!0;o=r.pixelY}else o=Math.abs(r.pixelX)>Math.abs(r.pixelY)?-r.pixelX*s:-r.pixelY;if(0===o)return!0;if(i.invert&&(o=-o),n.params.freeMode){n.params.loop&&n.loopFix();var a=n.getTranslate()+o*i.sensitivity,l=n.isBeginning,u=n.isEnd;if(a>=n.minTranslate()&&(a=n.minTranslate()),a<=n.maxTranslate()&&(a=n.maxTranslate()),n.setTransition(0),n.setTranslate(a),n.updateProgress(),n.updateActiveIndex(),n.updateSlidesClasses(),(!l&&n.isBeginning||!u&&n.isEnd)&&n.updateSlidesClasses(),n.params.freeModeSticky&&(clearTimeout(n.mousewheel.timeout),n.mousewheel.timeout=ee.nextTick(function(){n.slideToClosest()},300)),n.emit("scroll",t),n.params.autoplay&&n.params.autoplayDisableOnInteraction&&n.autoplay.stop(),a===n.minTranslate()||a===n.maxTranslate())return!0}else{if(60<ee.now()-n.mousewheel.lastScrollTime)if(o<0)if(n.isEnd&&!n.params.loop||n.animating){if(i.releaseOnEdges)return!0}else n.slideNext(),n.emit("scroll",t);else if(n.isBeginning&&!n.params.loop||n.animating){if(i.releaseOnEdges)return!0}else n.slidePrev(),n.emit("scroll",t);n.mousewheel.lastScrollTime=(new J.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!H.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=z(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(H.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!H.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=z(e.params.mousewheel.eventsTarged)),t.off(H.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},q={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var n=e.navigation,i=n.$nextEl,o=n.$prevEl;o&&0<o.length&&(e.isBeginning?o.addClass(t.disabledClass):o.removeClass(t.disabledClass),o[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,n=this,i=n.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=z(i.nextEl),n.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===n.$el.find(i.nextEl).length&&(e=n.$el.find(i.nextEl))),i.prevEl&&(t=z(i.prevEl),n.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===n.$el.find(i.prevEl).length&&(t=n.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",n.navigation.onNextClick),t&&0<t.length&&t.on("click",n.navigation.onPrevClick),ee.extend(n.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,n=t.$nextEl,i=t.$prevEl;n&&n.length&&(n.off("click",e.navigation.onNextClick),n.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},I={update:function(){var e=this,t=e.rtl,o=e.params.pagination;if(o.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var s,n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,r=e.params.loop?Math.ceil((n-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((s=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>n-1-2*e.loopedSlides&&(s-=n-2*e.loopedSlides),r-1<s&&(s-=r),s<0&&"bullets"!==e.params.paginationType&&(s=r+s)):s=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===o.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var a,l,u,c=e.pagination.bullets;if(o.dynamicBullets&&(e.pagination.bulletSize=c.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(o.dynamicMainBullets+4)+"px"),1<o.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=s-e.previousIndex,e.pagination.dynamicBulletIndex>o.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=o.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),a=s-e.pagination.dynamicBulletIndex,u=((l=a+(Math.min(c.length,o.dynamicMainBullets)-1))+a)/2),c.removeClass(o.bulletActiveClass+" "+o.bulletActiveClass+"-next "+o.bulletActiveClass+"-next-next "+o.bulletActiveClass+"-prev "+o.bulletActiveClass+"-prev-prev "+o.bulletActiveClass+"-main"),1<i.length)c.each(function(e,t){var n=z(t),i=n.index();i===s&&n.addClass(o.bulletActiveClass),o.dynamicBullets&&(a<=i&&i<=l&&n.addClass(o.bulletActiveClass+"-main"),i===a&&n.prev().addClass(o.bulletActiveClass+"-prev").prev().addClass(o.bulletActiveClass+"-prev-prev"),i===l&&n.next().addClass(o.bulletActiveClass+"-next").next().addClass(o.bulletActiveClass+"-next-next"))});else if(c.eq(s).addClass(o.bulletActiveClass),o.dynamicBullets){for(var d=c.eq(a),h=c.eq(l),f=a;f<=l;f+=1)c.eq(f).addClass(o.bulletActiveClass+"-main");d.prev().addClass(o.bulletActiveClass+"-prev").prev().addClass(o.bulletActiveClass+"-prev-prev"),h.next().addClass(o.bulletActiveClass+"-next").next().addClass(o.bulletActiveClass+"-next-next")}if(o.dynamicBullets){var p=Math.min(c.length,o.dynamicMainBullets+4),m=(e.pagination.bulletSize*p-e.pagination.bulletSize)/2-u*e.pagination.bulletSize,g=t?"right":"left";c.css(e.isHorizontal()?g:"top",m+"px")}}if("fraction"===o.type&&(i.find("."+o.currentClass).text(o.formatFractionCurrent(s+1)),i.find("."+o.totalClass).text(o.formatFractionTotal(r))),"progressbar"===o.type){var v;v=o.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var y=(s+1)/r,b=1,w=1;"horizontal"===v?b=y:w=y,i.find("."+o.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+b+") scaleY("+w+")").transition(e.params.speed)}"custom"===o.type&&o.renderCustom?(i.html(o.renderCustom(e,s+1,r)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](o.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,o="";if("bullets"===t.type){for(var s=e.params.loop?Math.ceil((n-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,r=0;r<s;r+=1)t.renderBullet?o+=t.renderBullet.call(e,r,t.bulletClass):o+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(o),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(o=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(o)),"progressbar"===t.type&&(o=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(o)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var n=this,e=n.params.pagination;if(e.el){var t=z(e.el);0!==t.length&&(n.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===n.$el.find(e.el).length&&(t=n.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),n.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=z(this).index()*n.params.slidesPerGroup;n.params.loop&&(t+=n.loopedSlides),n.slideTo(t)}),ee.extend(n.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var n=e.pagination.$el;n.removeClass(t.hiddenClass),n.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&n.off("click","."+t.bulletClass)}}},R={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,n=e.rtlTranslate,i=e.progress,o=t.dragSize,s=t.trackSize,r=t.$dragEl,a=t.$el,l=e.params.scrollbar,u=o,c=(s-o)*i;n?0<(c=-c)?(u=o-c,c=0):s<-c+o&&(u=s+c):c<0?(u=o+c,c=0):s<c+o&&(u=s-c),e.isHorizontal()?(te.transforms3d?r.transform("translate3d("+c+"px, 0, 0)"):r.transform("translateX("+c+"px)"),r[0].style.width=u+"px"):(te.transforms3d?r.transform("translate3d(0px, "+c+"px, 0)"):r.transform("translateY("+c+"px)"),r[0].style.height=u+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),a[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){a[0].style.opacity=0,a.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,n=t.$dragEl,i=t.$el;n[0].style.width="",n[0].style.height="";var o,s=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=e.size/e.virtualSize,a=r*(s/e.size);o="auto"===e.params.scrollbar.dragSize?s*r:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?n[0].style.width=o+"px":n[0].style.height=o+"px",i[0].style.display=1<=r?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),ee.extend(t,{trackSize:s,divider:r,moveDivider:a,dragSize:o}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,n=this,i=n.scrollbar,o=n.rtlTranslate,s=i.$el,r=i.dragSize,a=i.trackSize;t=((n.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-s.offset()[n.isHorizontal()?"left":"top"]-r/2)/(a-r),t=Math.max(Math.min(t,1),0),o&&(t=1-t);var l=n.minTranslate()+(n.maxTranslate()-n.minTranslate())*t;n.updateProgress(l),n.setTranslate(l),n.updateActiveIndex(),n.updateSlidesClasses()},onDragStart:function(e){var t=this,n=t.params.scrollbar,i=t.scrollbar,o=t.$wrapperEl,s=i.$el,r=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),o.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),s.transition(0),n.hide&&s.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,n=this.$wrapperEl,i=t.$el,o=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),n.transition(0),i.transition(0),o.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,n=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,n.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=ee.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),n.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,n=e.touchEventsTouch,i=e.touchEventsDesktop,o=e.params,s=t.$el[0],r=!(!te.passiveListener||!o.passiveListeners)&&{passive:!1,capture:!1},a=!(!te.passiveListener||!o.passiveListeners)&&{passive:!0,capture:!1};te.touch?(s.addEventListener(n.start,e.scrollbar.onDragStart,r),s.addEventListener(n.move,e.scrollbar.onDragMove,r),s.addEventListener(n.end,e.scrollbar.onDragEnd,a)):(s.addEventListener(i.start,e.scrollbar.onDragStart,r),m.addEventListener(i.move,e.scrollbar.onDragMove,r),m.addEventListener(i.end,e.scrollbar.onDragEnd,a))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,n=e.touchEventsTouch,i=e.touchEventsDesktop,o=e.params,s=t.$el[0],r=!(!te.passiveListener||!o.passiveListeners)&&{passive:!1,capture:!1},a=!(!te.passiveListener||!o.passiveListeners)&&{passive:!0,capture:!1};te.touch?(s.removeEventListener(n.start,e.scrollbar.onDragStart,r),s.removeEventListener(n.move,e.scrollbar.onDragMove,r),s.removeEventListener(n.end,e.scrollbar.onDragEnd,a)):(s.removeEventListener(i.start,e.scrollbar.onDragStart,r),m.removeEventListener(i.move,e.scrollbar.onDragMove,r),m.removeEventListener(i.end,e.scrollbar.onDragEnd,a))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,n=e.$el,i=e.params.scrollbar,o=z(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<o.length&&1===n.find(i.el).length&&(o=n.find(i.el));var s=o.find("."+e.params.scrollbar.dragClass);0===s.length&&(s=z('<div class="'+e.params.scrollbar.dragClass+'"></div>'),o.append(s)),ee.extend(t,{$el:o,el:o[0],$dragEl:s,dragEl:s[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},N={setTransform:function(e,t){var n=this.rtl,i=z(e),o=n?-1:1,s=i.attr("data-swiper-parallax")||"0",r=i.attr("data-swiper-parallax-x"),a=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),u=i.attr("data-swiper-parallax-opacity");if(r||a?(r=r||"0",a=a||"0"):this.isHorizontal()?(r=s,a="0"):(a=s,r="0"),r=0<=r.indexOf("%")?parseInt(r,10)*t*o+"%":r*t*o+"px",a=0<=a.indexOf("%")?parseInt(a,10)*t+"%":a*t+"px",null!=u){var c=u-(u-1)*(1-Math.abs(t));i[0].style.opacity=c}if(null==l)i.transform("translate3d("+r+", "+a+", 0px)");else{var d=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+r+", "+a+", 0px) scale("+d+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,o=i.progress,s=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,o)}),t.each(function(e,t){var n=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(n+=Math.ceil(e/2)-o*(s.length-1)),n=Math.min(Math.max(n,-1),1),z(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,n)})})},setTransition:function(o){void 0===o&&(o=this.params.speed),this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var n=z(t),i=parseInt(n.attr("data-swiper-parallax-duration"),10)||o;0===o&&(i=0),n.transition(i)})}},F={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,n=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,o=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(o-n,2))},onGestureStart:function(e){var t=this,n=t.params.zoom,i=t.zoom,o=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!te.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,o.scaleStart=F.getDistanceBetweenTouches(e)}o.$slideEl&&o.$slideEl.length||(o.$slideEl=z(e.target).closest(".swiper-slide"),0===o.$slideEl.length&&(o.$slideEl=t.slides.eq(t.activeIndex)),o.$imageEl=o.$slideEl.find("img, svg, canvas"),o.$imageWrapEl=o.$imageEl.parent("."+n.containerClass),o.maxRatio=o.$imageWrapEl.attr("data-swiper-zoom")||n.maxRatio,0!==o.$imageWrapEl.length)?(o.$imageEl.transition(0),t.zoom.isScaling=!0):o.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,n=this.zoom,i=n.gesture;if(!te.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;n.fakeGestureMoved=!0,i.scaleMove=F.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(n.scale=te.gestures?e.scale*n.currentScale:i.scaleMove/i.scaleStart*n.currentScale,n.scale>i.maxRatio&&(n.scale=i.maxRatio-1+Math.pow(n.scale-i.maxRatio+1,.5)),n.scale<t.minRatio&&(n.scale=t.minRatio+1-Math.pow(t.minRatio-n.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+n.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,n=this.zoom,i=n.gesture;if(!te.gestures){if(!n.fakeGestureTouched||!n.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!v.android)return;n.fakeGestureTouched=!1,n.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(n.scale=Math.max(Math.min(n.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+n.scale+")"),n.currentScale=n.scale,n.isScaling=!1,1===n.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,n=t.gesture,i=t.image;n.$imageEl&&0!==n.$imageEl.length&&(i.isTouched||(v.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,n=t.zoom,i=n.gesture,o=n.image,s=n.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,o.isTouched&&i.$slideEl)){o.isMoved||(o.width=i.$imageEl[0].offsetWidth,o.height=i.$imageEl[0].offsetHeight,o.startX=ee.getTranslate(i.$imageWrapEl[0],"x")||0,o.startY=ee.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(o.startX=-o.startX,o.startY=-o.startY));var r=o.width*n.scale,a=o.height*n.scale;if(!(r<i.slideWidth&&a<i.slideHeight)){if(o.minX=Math.min(i.slideWidth/2-r/2,0),o.maxX=-o.minX,o.minY=Math.min(i.slideHeight/2-a/2,0),o.maxY=-o.minY,o.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,o.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!o.isMoved&&!n.isScaling){if(t.isHorizontal()&&(Math.floor(o.minX)===Math.floor(o.startX)&&o.touchesCurrent.x<o.touchesStart.x||Math.floor(o.maxX)===Math.floor(o.startX)&&o.touchesCurrent.x>o.touchesStart.x))return void(o.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(o.minY)===Math.floor(o.startY)&&o.touchesCurrent.y<o.touchesStart.y||Math.floor(o.maxY)===Math.floor(o.startY)&&o.touchesCurrent.y>o.touchesStart.y))return void(o.isTouched=!1)}e.preventDefault(),e.stopPropagation(),o.isMoved=!0,o.currentX=o.touchesCurrent.x-o.touchesStart.x+o.startX,o.currentY=o.touchesCurrent.y-o.touchesStart.y+o.startY,o.currentX<o.minX&&(o.currentX=o.minX+1-Math.pow(o.minX-o.currentX+1,.8)),o.currentX>o.maxX&&(o.currentX=o.maxX-1+Math.pow(o.currentX-o.maxX+1,.8)),o.currentY<o.minY&&(o.currentY=o.minY+1-Math.pow(o.minY-o.currentY+1,.8)),o.currentY>o.maxY&&(o.currentY=o.maxY-1+Math.pow(o.currentY-o.maxY+1,.8)),s.prevPositionX||(s.prevPositionX=o.touchesCurrent.x),s.prevPositionY||(s.prevPositionY=o.touchesCurrent.y),s.prevTime||(s.prevTime=Date.now()),s.x=(o.touchesCurrent.x-s.prevPositionX)/(Date.now()-s.prevTime)/2,s.y=(o.touchesCurrent.y-s.prevPositionY)/(Date.now()-s.prevTime)/2,Math.abs(o.touchesCurrent.x-s.prevPositionX)<2&&(s.x=0),Math.abs(o.touchesCurrent.y-s.prevPositionY)<2&&(s.y=0),s.prevPositionX=o.touchesCurrent.x,s.prevPositionY=o.touchesCurrent.y,s.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+o.currentX+"px, "+o.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,n=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!n.isTouched||!n.isMoved)return n.isTouched=!1,void(n.isMoved=!1);n.isTouched=!1,n.isMoved=!1;var o=300,s=300,r=i.x*o,a=n.currentX+r,l=i.y*s,u=n.currentY+l;0!==i.x&&(o=Math.abs((a-n.currentX)/i.x)),0!==i.y&&(s=Math.abs((u-n.currentY)/i.y));var c=Math.max(o,s);n.currentX=a,n.currentY=u;var d=n.width*e.scale,h=n.height*e.scale;n.minX=Math.min(t.slideWidth/2-d/2,0),n.maxX=-n.minX,n.minY=Math.min(t.slideHeight/2-h/2,0),n.maxY=-n.minY,n.currentX=Math.max(Math.min(n.currentX,n.maxX),n.minX),n.currentY=Math.max(Math.min(n.currentY,n.maxY),n.minY),t.$imageWrapEl.transition(c).transform("translate3d("+n.currentX+"px, "+n.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,n,i,o,s,r,a,l,u,c,d,h,f,p,m,g,v=this,y=v.zoom,b=v.params.zoom,w=y.gesture,x=y.image;w.$slideEl||(w.$slideEl=v.clickedSlide?z(v.clickedSlide):v.slides.eq(v.activeIndex),w.$imageEl=w.$slideEl.find("img, svg, canvas"),w.$imageWrapEl=w.$imageEl.parent("."+b.containerClass)),w.$imageEl&&0!==w.$imageEl.length&&(w.$slideEl.addClass(""+b.zoomedSlideClass),n=void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,"touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,x.touchesStart.y),y.scale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,y.currentScale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,e?(m=w.$slideEl[0].offsetWidth,g=w.$slideEl[0].offsetHeight,i=w.$slideEl.offset().left+m/2-t,o=w.$slideEl.offset().top+g/2-n,a=w.$imageEl[0].offsetWidth,l=w.$imageEl[0].offsetHeight,u=a*y.scale,c=l*y.scale,f=-(d=Math.min(m/2-u/2,0)),p=-(h=Math.min(g/2-c/2,0)),(s=i*y.scale)<d&&(s=d),f<s&&(s=f),(r=o*y.scale)<h&&(r=h),p<r&&(r=p)):r=s=0,w.$imageWrapEl.transition(300).transform("translate3d("+s+"px, "+r+"px,0)"),w.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+y.scale+")"))},out:function(){var e=this,t=e.zoom,n=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?z(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+n.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+n.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var n=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,n),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,n),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,n)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,n),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,n),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,n)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var n=!("touchstart"!==e.touchEvents.start||!te.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};te.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,n),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,n),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,n)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,n),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,n),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,n)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},B={loadInSlide:function(e,l){void 0===l&&(l=!0);var u=this,c=u.params.lazy;if(void 0!==e&&0!==u.slides.length){var d=u.virtual&&u.params.virtual.enabled?u.$wrapperEl.children("."+u.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):u.slides.eq(e),t=d.find("."+c.elementClass+":not(."+c.loadedClass+"):not(."+c.loadingClass+")");!d.hasClass(c.elementClass)||d.hasClass(c.loadedClass)||d.hasClass(c.loadingClass)||(t=t.add(d[0])),0!==t.length&&t.each(function(e,t){var i=z(t);i.addClass(c.loadingClass);var o=i.attr("data-background"),s=i.attr("data-src"),r=i.attr("data-srcset"),a=i.attr("data-sizes");u.loadImage(i[0],s||o,r,a,!1,function(){if(null!=u&&u&&(!u||u.params)&&!u.destroyed){if(o?(i.css("background-image",'url("'+o+'")'),i.removeAttr("data-background")):(r&&(i.attr("srcset",r),i.removeAttr("data-srcset")),a&&(i.attr("sizes",a),i.removeAttr("data-sizes")),s&&(i.attr("src",s),i.removeAttr("data-src"))),i.addClass(c.loadedClass).removeClass(c.loadingClass),d.find("."+c.preloaderClass).remove(),u.params.loop&&l){var e=d.attr("data-swiper-slide-index");if(d.hasClass(u.params.slideDuplicateClass)){var t=u.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+u.params.slideDuplicateClass+")");u.lazy.loadInSlide(t.index(),!1)}else{var n=u.$wrapperEl.children("."+u.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');u.lazy.loadInSlide(n.index(),!1)}}u.emit("lazyImageReady",d[0],i[0])}}),u.emit("lazyImageLoad",d[0],i[0])})}},load:function(){function e(e){if(a){if(n.children("."+o.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function t(e){return a?z(e).attr("data-swiper-slide-index"):z(e).index()}var i=this,n=i.$wrapperEl,o=i.params,s=i.slides,r=i.activeIndex,a=i.virtual&&o.virtual.enabled,l=o.lazy,u=o.slidesPerView;if("auto"===u&&(u=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)n.children("."+o.slideVisibleClass).each(function(e,t){var n=a?z(t).attr("data-swiper-slide-index"):z(t).index();i.lazy.loadInSlide(n)});else if(1<u)for(var c=r;c<r+u;c+=1)e(c)&&i.lazy.loadInSlide(c);else i.lazy.loadInSlide(r);if(l.loadPrevNext)if(1<u||l.loadPrevNextAmount&&1<l.loadPrevNextAmount){for(var d=l.loadPrevNextAmount,h=u,f=Math.min(r+h+Math.max(d,h),s.length),p=Math.max(r-Math.max(h,d),0),m=r+u;m<f;m+=1)e(m)&&i.lazy.loadInSlide(m);for(var g=p;g<r;g+=1)e(g)&&i.lazy.loadInSlide(g)}else{var v=n.children("."+o.slideNextClass);0<v.length&&i.lazy.loadInSlide(t(v));var y=n.children("."+o.slidePrevClass);0<y.length&&i.lazy.loadInSlide(t(y))}}},G={LinearSpline:function(e,t){var n,i,o,s,r,a=function(e,t){for(i=-1,n=e.length;1<n-i;)e[o=n+i>>1]<=t?i=o:n=o;return n};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(r=a(this.x,e),s=r-1,(e-this.x[s])*(this.y[r]-this.y[s])/(this.x[r]-this.x[s])+this.y[s]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new G.LinearSpline(t.slidesGrid,e.slidesGrid):new G.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),o=-s.controller.spline.interpolate(-t)),o&&"container"!==s.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),o=(t-s.minTranslate())*i+e.minTranslate()),s.params.controller.inverse&&(o=e.maxTranslate()-o),e.updateProgress(o),e.setTranslate(o,s),e.updateActiveIndex(),e.updateSlidesClasses()}var i,o,s=this,r=s.controller.control;if(Array.isArray(r))for(var a=0;a<r.length;a+=1)r[a]!==t&&r[a]instanceof k&&n(r[a]);else r instanceof k&&t!==r&&n(r)},setTransition:function(t,e){function n(e){e.setTransition(t,o),0!==t&&(e.transitionStart(),e.params.autoHeight&&ee.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===o.params.controller.by&&e.loopFix(),e.transitionEnd())}))}var i,o=this,s=o.controller.control;if(Array.isArray(s))for(i=0;i<s.length;i+=1)s[i]!==e&&s[i]instanceof k&&n(s[i]);else s instanceof k&&e!==s&&n(s)}},W={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,n=t.params.a11y;if(13===e.keyCode){var i=z(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(n.lastSlideMessage):t.a11y.notify(n.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(n.firstSlideMessage):t.a11y.notify(n.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),
t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,n=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),n&&0<n.length&&(e.isEnd?e.a11y.disableEl(n):e.a11y.enableEl(n))}},updatePagination:function(){var i=this,o=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var n=z(t);i.a11y.makeElFocusable(n),i.a11y.addElRole(n,"button"),i.a11y.addElLabel(n,o.paginationBulletMessage.replace(/{{index}}/,n.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,n,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(n=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),n&&(e.a11y.makeElFocusable(n),e.a11y.addElRole(n,"button"),e.a11y.addElLabel(n,i.prevSlideMessage),n.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,n=this;n.a11y.liveRegion&&0<n.a11y.liveRegion.length&&n.a11y.liveRegion.remove(),n.navigation&&n.navigation.$nextEl&&(e=n.navigation.$nextEl),n.navigation&&n.navigation.$prevEl&&(t=n.navigation.$prevEl),e&&e.off("keydown",n.a11y.onEnterKey),t&&t.off("keydown",n.a11y.onEnterKey),n.pagination&&n.params.pagination.clickable&&n.pagination.bullets&&n.pagination.bullets.length&&n.pagination.$el.off("keydown","."+n.params.pagination.bulletClass,n.a11y.onEnterKey)}},Y={init:function(){var e=this;if(e.params.history){if(!J.history||!J.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=Y.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||J.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||J.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=Y.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=J.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var n=this.slides.eq(t),i=Y.slugify(n.attr("data-history"));J.location.pathname.includes(e)||(i=e+"/"+i);var o=J.history.state;o&&o.value===i||(this.params.history.replaceState?J.history.replaceState({value:i},null,i):J.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,n){var i=this;if(t)for(var o=0,s=i.slides.length;o<s;o+=1){var r=i.slides.eq(o);if(Y.slugify(r.attr("data-history"))===t&&!r.hasClass(i.params.slideDuplicateClass)){var a=r.index();i.slideTo(a,e,n)}}else i.slideTo(0,e,n)}},V={onHashCange:function(){var e=this,t=m.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var n=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===n)return;e.slideTo(n)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&J.history&&J.history.replaceState)J.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),n=t.attr("data-hash")||t.attr("data-history");m.location.hash=n||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=m.location.hash.replace("#","");if(t)for(var n=0,i=e.slides.length;n<i;n+=1){var o=e.slides.eq(n);if((o.attr("data-hash")||o.attr("data-history"))===t&&!o.hasClass(e.params.slideDuplicateClass)){var s=o.index();e.slideTo(s,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&z(J).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&z(J).off("hashchange",this.hashNavigation.onHashCange)}},X={run:function(){var e=this,t=e.slides.eq(e.activeIndex),n=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(n=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=ee.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},n)},start:function(){var e=this;return void 0===e.autoplay.timeout&&!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0)},stop:function(){var e=this;return!!e.autoplay.running&&void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0)},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},U={setTranslate:function(){for(var e=this,t=e.slides,n=0;n<t.length;n+=1){var i=e.slides.eq(n),o=-i[0].swiperSlideOffset;e.params.virtualTranslate||(o-=e.translate);var s=0;e.isHorizontal()||(s=o,o=0);var r=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+o+"px, "+s+"px, 0px)")}},setTransition:function(e){var n=this,t=n.slides,i=n.$wrapperEl;if(t.transition(e),n.params.virtualTranslate&&0!==e){var o=!1;t.transitionEnd(function(){if(!o&&n&&!n.destroyed){o=!0,n.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},K={setTranslate:function(){var e,t=this,n=t.$el,i=t.$wrapperEl,o=t.slides,s=t.width,r=t.height,a=t.rtlTranslate,l=t.size,u=t.params.cubeEffect,c=t.isHorizontal(),d=t.virtual&&t.params.virtual.enabled,h=0;u.shadow&&(c?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=z('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:s+"px"})):0===(e=n.find(".swiper-cube-shadow")).length&&(e=z('<div class="swiper-cube-shadow"></div>'),n.append(e)));for(var f=0;f<o.length;f+=1){var p=o.eq(f),m=f;d&&(m=parseInt(p.attr("data-swiper-slide-index"),10));var g=90*m,v=Math.floor(g/360);a&&(g=-g,v=Math.floor(-g/360));var y=Math.max(Math.min(p[0].progress,1),-1),b=0,w=0,x=0;m%4==0?(b=4*-v*l,x=0):(m-1)%4==0?(b=0,x=4*-v*l):(m-2)%4==0?(b=l+4*v*l,x=l):(m-3)%4==0&&(b=-l,x=3*l+4*l*v),a&&(b=-b),c||(w=b,b=0);var C="rotateX("+(c?0:-g)+"deg) rotateY("+(c?g:0)+"deg) translate3d("+b+"px, "+w+"px, "+x+"px)";if(y<=1&&-1<y&&(h=90*m+90*y,a&&(h=90*-m-90*y)),p.transform(C),u.slideShadows){var T=c?p.find(".swiper-slide-shadow-left"):p.find(".swiper-slide-shadow-top"),k=c?p.find(".swiper-slide-shadow-right"):p.find(".swiper-slide-shadow-bottom");0===T.length&&(T=z('<div class="swiper-slide-shadow-'+(c?"left":"top")+'"></div>'),p.append(T)),0===k.length&&(k=z('<div class="swiper-slide-shadow-'+(c?"right":"bottom")+'"></div>'),p.append(k)),T.length&&(T[0].style.opacity=Math.max(-y,0)),k.length&&(k[0].style.opacity=Math.max(y,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),u.shadow)if(c)e.transform("translate3d(0px, "+(s/2+u.shadowOffset)+"px, "+-s/2+"px) rotateX(90deg) rotateZ(0deg) scale("+u.shadowScale+")");else{var $=Math.abs(h)-90*Math.floor(Math.abs(h)/90),E=1.5-(Math.sin(2*$*Math.PI/360)/2+Math.cos(2*$*Math.PI/360)/2),S=u.shadowScale,j=u.shadowScale/E,O=u.shadowOffset;e.transform("scale3d("+S+", 1, "+j+") translate3d(0px, "+(r/2+O)+"px, "+-r/2/j+"px) rotateX(-90deg)")}var _=P.isSafari||P.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+_+"px) rotateX("+(t.isHorizontal()?0:h)+"deg) rotateY("+(t.isHorizontal()?-h:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},Q={setTranslate:function(){for(var e=this,t=e.slides,n=e.rtlTranslate,i=0;i<t.length;i+=1){var o=t.eq(i),s=o[0].progress;e.params.flipEffect.limitRotation&&(s=Math.max(Math.min(o[0].progress,1),-1));var r=-180*s,a=0,l=-o[0].swiperSlideOffset,u=0;if(e.isHorizontal()?n&&(r=-r):(u=l,a=-r,r=l=0),o[0].style.zIndex=-Math.abs(Math.round(s))+t.length,e.params.flipEffect.slideShadows){var c=e.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),d=e.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===c.length&&(c=z('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),o.append(c)),0===d.length&&(d=z('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),o.append(d)),c.length&&(c[0].style.opacity=Math.max(-s,0)),d.length&&(d[0].style.opacity=Math.max(s,0))}o.transform("translate3d("+l+"px, "+u+"px, 0px) rotateX("+a+"deg) rotateY("+r+"deg)")}},setTransition:function(e){var n=this,t=n.slides,i=n.activeIndex,o=n.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),n.params.virtualTranslate&&0!==e){var s=!1;t.eq(i).transitionEnd(function(){if(!s&&n&&!n.destroyed){s=!0,n.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)o.trigger(e[t])}})}}},Z={setTranslate:function(){for(var e=this,t=e.width,n=e.height,i=e.slides,o=e.$wrapperEl,s=e.slidesSizesGrid,r=e.params.coverflowEffect,a=e.isHorizontal(),l=e.translate,u=a?t/2-l:n/2-l,c=a?r.rotate:-r.rotate,d=r.depth,h=0,f=i.length;h<f;h+=1){var p=i.eq(h),m=s[h],g=(u-p[0].swiperSlideOffset-m/2)/m*r.modifier,v=a?c*g:0,y=a?0:c*g,b=-d*Math.abs(g),w=a?0:r.stretch*g,x=a?r.stretch*g:0;Math.abs(x)<.001&&(x=0),Math.abs(w)<.001&&(w=0),Math.abs(b)<.001&&(b=0),Math.abs(v)<.001&&(v=0),Math.abs(y)<.001&&(y=0);var C="translate3d("+x+"px,"+w+"px,"+b+"px)  rotateX("+y+"deg) rotateY("+v+"deg)";if(p.transform(C),p[0].style.zIndex=1-Math.abs(Math.round(g)),r.slideShadows){var T=a?p.find(".swiper-slide-shadow-left"):p.find(".swiper-slide-shadow-top"),k=a?p.find(".swiper-slide-shadow-right"):p.find(".swiper-slide-shadow-bottom");0===T.length&&(T=z('<div class="swiper-slide-shadow-'+(a?"left":"top")+'"></div>'),p.append(T)),0===k.length&&(k=z('<div class="swiper-slide-shadow-'+(a?"right":"bottom")+'"></div>'),p.append(k)),T.length&&(T[0].style.opacity=0<g?g:0),k.length&&(k[0].style.opacity=0<-g?-g:0)}}(te.pointerEvents||te.prefixedPointerEvents)&&(o[0].style.perspectiveOrigin=u+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},ne={init:function(){var e=this,t=e.params.thumbs,n=e.constructor;t.swiper instanceof n?(e.thumbs.swiper=t.swiper,ee.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),ee.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):ee.isObject(t.swiper)&&(e.thumbs.swiper=new n(ee.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var n=t.clickedIndex,i=t.clickedSlide;if(!(i&&z(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==n)){var o;if(o=t.params.loop?parseInt(z(t.clickedSlide).attr("data-swiper-slide-index"),10):n,e.params.loop){var s=e.activeIndex;e.slides.eq(s).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,s=e.activeIndex);var r=e.slides.eq(s).prevAll('[data-swiper-slide-index="'+o+'"]').eq(0).index(),a=e.slides.eq(s).nextAll('[data-swiper-slide-index="'+o+'"]').eq(0).index();o=void 0===r?a:void 0===a?r:a-s<s-r?a:r}e.slideTo(o)}}},update:function(e){var t=this,n=t.thumbs.swiper;if(n){var i="auto"===n.params.slidesPerView?n.slidesPerViewDynamic():n.params.slidesPerView;if(t.realIndex!==n.realIndex){var o,s=n.activeIndex;if(n.params.loop){n.slides.eq(s).hasClass(n.params.slideDuplicateClass)&&(n.loopFix(),n._clientLeft=n.$wrapperEl[0].clientLeft,s=n.activeIndex);var r=n.slides.eq(s).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),a=n.slides.eq(s).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();o=void 0===r?a:void 0===a?r:a-s==s-r?s:a-s<s-r?a:r}else o=t.realIndex;n.visibleSlidesIndexes.indexOf(o)<0&&(n.params.centeredSlides?o=s<o?o-Math.floor(i/2)+1:o+Math.floor(i/2)-1:s<o&&(o=o-i+1),n.slideTo(o,e?0:void 0))}var l=1,u=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),n.slides.removeClass(u),n.params.loop)for(var c=0;c<l;c+=1)n.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+c)+'"]').addClass(u);else for(var d=0;d<l;d+=1)n.slides.eq(t.realIndex+d).addClass(u)}}},ie=[$,E,S,j,_,L,D,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;ee.extend(e,{mousewheel:{enabled:!1,enable:H.enable.bind(e),disable:H.disable.bind(e),handle:H.handle.bind(e),handleMouseEnter:H.handleMouseEnter.bind(e),handleMouseLeave:H.handleMouseLeave.bind(e),lastScrollTime:ee.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;ee.extend(e,{navigation:{init:q.init.bind(e),update:q.update.bind(e),destroy:q.destroy.bind(e),onNextClick:q.onNextClick.bind(e),onPrevClick:q.onPrevClick.bind(e)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,n=t.$nextEl,i=t.$prevEl;!this.params.navigation.hideOnClick||z(e.target).is(i)||z(e.target).is(n)||(n&&n.toggleClass(this.params.navigation.hiddenClass),i&&i.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;ee.extend(e,{pagination:{init:I.init.bind(e),render:I.render.bind(e),update:I.update.bind(e),destroy:I.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!z(e.target).hasClass(t.params.pagination.bulletClass)&&t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;ee.extend(e,{scrollbar:{init:R.init.bind(e),destroy:R.destroy.bind(e),updateSize:R.updateSize.bind(e),setTranslate:R.setTranslate.bind(e),setTransition:R.setTransition.bind(e),enableDraggable:R.enableDraggable.bind(e),disableDraggable:R.disableDraggable.bind(e),setDragPosition:R.setDragPosition.bind(e),onDragStart:R.onDragStart.bind(e),onDragMove:R.onDragMove.bind(e),onDragEnd:R.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){ee.extend(this,{parallax:{setTransform:N.setTransform.bind(this),setTranslate:N.setTranslate.bind(this),setTransition:N.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var i=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){t[e]=F[e].bind(i)}),ee.extend(i,{zoom:t});var o=1;Object.defineProperty(i.zoom,"scale",{get:function(){return o},set:function(e){if(o!==e){var t=i.zoom.gesture.$imageEl?i.zoom.gesture.$imageEl[0]:void 0,n=i.zoom.gesture.$slideEl?i.zoom.gesture.$slideEl[0]:void 0;i.emit("zoomChange",e,t,n)}o=e}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){ee.extend(this,{lazy:{initialImageLoaded:!1,load:B.load.bind(this),loadInSlide:B.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;ee.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:G.getInterpolateFunction.bind(e),setTranslate:G.setTranslate.bind(e),setTransition:G.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;ee.extend(t,{a11y:{liveRegion:z('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(W).forEach(function(e){t.a11y[e]=W[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;ee.extend(e,{history:{init:Y.init.bind(e),setHistory:Y.setHistory.bind(e),setHistoryPopState:Y.setHistoryPopState.bind(e),scrollToSlide:Y.scrollToSlide.bind(e),destroy:Y.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;ee.extend(e,{hashNavigation:{initialized:!1,init:V.init.bind(e),destroy:V.destroy.bind(e),setHash:V.setHash.bind(e),onHashCange:V.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;ee.extend(t,{autoplay:{running:!1,paused:!1,run:X.run.bind(t),start:X.start.bind(t),stop:X.stop.bind(t),pause:X.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){ee.extend(this,{fadeEffect:{setTranslate:U.setTranslate.bind(this),setTransition:U.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){ee.extend(this,{cubeEffect:{setTranslate:K.setTranslate.bind(this),setTransition:K.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){ee.extend(this,{flipEffect:{setTranslate:Q.setTranslate.bind(this),setTransition:Q.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};ee.extend(e.params,t),ee.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){ee.extend(this,{coverflowEffect:{setTranslate:Z.setTranslate.bind(this),setTransition:Z.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){ee.extend(this,{thumbs:{swiper:null,init:ne.init.bind(this),update:ne.update.bind(this),onThumbClick:ne.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===k.use&&(k.use=k.Class.use,k.installModule=k.Class.installModule),k.use(ie),k}),$(document).ready(function(){function e(){
// Foundation
// ----------
Foundation.Interchange.SPECIAL_QUERIES["medium-retina"]="only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["large-retina"]="only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["xlarge-retina"]="only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["xxlarge-retina"]="only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)",$(document).foundation(),
// 1. Loading
// --------------------
$(function(){function o(e){if((e=e.toString().replace(/[\, ]/g,""))!=parseFloat(e))return"not a number";var t=e.indexOf(".");-1==t&&(t=e.length);for(var n=e.split(""),i="",o=0,s=0;s<t;s++)(t-s)%3==2?"1"==n[s]?(i+=a[Number(n[s+1])]+" ",s++,o=1):0!=n[s]&&(i+=l[n[s]-2]+" ",o=1):0!=n[s]&&(i+=r[n[s]]+" ");return i.replace(/\s+/g," ")}
/* 
Selectors 
*/
/*
Updated the clock 
*/
function t(e){var t=(e.getHours()+11)%12+1,n=e.getMinutes(),i=e.getSeconds();
//       period = (d.getHours() < 12) ? "am" : "pm";
console.log(t),s[0].innerHTML=o(t),u[0].innerHTML=o(n)+"&",c[0].innerHTML=o(i)+"seconds"}
/*
Run updateClock every second 
*/if("true"!=$.cookie("showed_modal")){$(".loader").removeClass("hide");var r=["zero","one","two","three","four","five","six","seven","eight","nine"],a=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],l=["twenty","thirty","forty","fifty"],s=document.getElementsByClassName("hour"),u=document.getElementsByClassName("min"),c=document.getElementsByClassName("sec"),e=!0;setInterval(function(){var e;t(new Date)},1e3),$(".loader").addClass("loading"),setTimeout(function(){$(".loader").addClass("loaded")},5e3),$.cookie("showed_modal","true",{expires:365})}}),
// 2. Animate on Scroll
// --------------------
$(function(){AOS.init({offset:64,easing:"ease-in-out-quart",duration:600})}),$(function(){window.addEventListener("load",AOS.refresh)}),$(document).ready(function(){var e=Math.floor(5*Math.random()),t=new Swiper(".swiper-container",{direction:"horizontal",slidesPerView:"auto",centeredSlides:!0,initialSlide:e,loop:!0,preventClicks:!0,slideToClickedSlide:!1,keyboard:{enabled:!0,onlyInViewport:!1},navigation:{nextEl:".swiper-button-next-test",prevEl:".swiper-button-prev-test"}});
//initialize swiper when document ready
}),$(".video").lightGallery({counter:!1,videoMaxWidth:"1080px",youtubePlayerParams:{modestbranding:1,showinfo:0,rel:0,autoplay:0},vimeoPlayerParams:{autoplay:0,title:0,byline:0,portrait:0,color:"FFFFFF"}})}
// Run once
// ---------------------------------------------
// ---------------------------------------------
// Page Transitions
// ---------------------------------------------
var t;e(),new Swup({animationSelector:'[class*="swup-transition-"]',elements:["#main"]}).on("contentReplaced",function(){e()})});