﻿(function(e){e(["jquery"],function(e){return function(){function u(e,t,n){return v({type:s.error,iconClass:g().iconClasses.error,message:e,optionsOverride:n,title:t})}function a(e,t,n){return v({type:s.info,iconClass:g().iconClasses.info,message:e,optionsOverride:n,title:t})}function f(e){r=e}function l(e,t,n){return v({type:s.success,iconClass:g().iconClasses.success,message:e,optionsOverride:n,title:t})}function c(e,t,n){return v({type:s.warning,iconClass:g().iconClasses.warning,message:e,optionsOverride:n,title:t})}function h(t){var r=g();if(!n){m(r)}if(t&&e(":focus",t).length===0){t[r.hideMethod]({duration:r.hideDuration,easing:r.hideEasing,complete:function(){y(t)}});return}if(n.children().length){n[r.hideMethod]({duration:r.hideDuration,easing:r.hideEasing,complete:function(){n.remove()}})}}function p(){return{tapToDismiss:true,toastClass:"toast",containerId:"toast-container",debug:false,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:undefined,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:undefined,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:true}}function d(e){if(!r){return}r(e)}function v(t){function h(t){if(e(":focus",u).length&&!t){return}return u[r.hideMethod]({duration:r.hideDuration,easing:r.hideEasing,complete:function(){y(u);if(r.onHidden){r.onHidden()}c.state="hidden";c.endTime=new Date,d(c)}})}function p(){if(r.timeOut>0||r.extendedTimeOut>0){o=setTimeout(h,r.extendedTimeOut)}}function v(){clearTimeout(o);u.stop(true,true)[r.showMethod]({duration:r.showDuration,easing:r.showEasing})}var r=g(),s=t.iconClass||r.iconClass;if(typeof t.optionsOverride!=="undefined"){r=e.extend(r,t.optionsOverride);s=t.optionsOverride.iconClass||s}i++;n=m(r);var o=null,u=e("<div/>"),a=e("<div/>"),f=e("<div/>"),l=e(r.closeHtml),c={toastId:i,state:"visible",startTime:new Date,options:r,map:t};if(t.iconClass){u.addClass(r.toastClass).addClass(s)}if(t.title){a.append(t.title).addClass(r.titleClass);u.append(a)}if(t.message){f.append(t.message).addClass(r.messageClass);u.append(f)}if(r.closeButton){l.addClass("toast-close-button");u.prepend(l)}u.hide();if(r.newestOnTop){n.prepend(u)}else{n.append(u)}u[r.showMethod]({duration:r.showDuration,easing:r.showEasing,complete:r.onShown});if(r.timeOut>0){o=setTimeout(h,r.timeOut)}u.hover(v,p);if(!r.onclick&&r.tapToDismiss){u.click(h)}if(r.closeButton&&l){l.click(function(e){if(e.stopPropagation){e.stopPropagation()}else if(e.cancelBubble!==undefined&&e.cancelBubble!==true){e.cancelBubble=true}h(true)})}if(r.onclick){u.click(function(){r.onclick();h()})}d(c);if(r.debug&&console){console.log(c)}return u}function m(t){if(!t){t=g()}n=e("#"+t.containerId);if(n.length){return n}n=e("<div/>").attr("id",t.containerId).addClass(t.positionClass);n.appendTo(e(t.target));return n}function g(){return e.extend({},p(),o.options)}function y(e){if(!n){n=m()}if(e.is(":visible")){return}e.remove();e=null;if(n.children().length===0){n.remove()}}var t="2.0.1";var n;var r;var i=0;var s={error:"error",info:"info",success:"success",warning:"warning"};var o={clear:h,error:u,getContainer:m,info:a,options:{},subscribe:f,success:l,version:t,warning:c};return o}()})})(typeof define==="function"&&define.amd?define:function(e,t){if(typeof module!=="undefined"&&module.exports){module.exports=t(require("jquery"))}else{window["toastr"]=t(window["jQuery"])}})