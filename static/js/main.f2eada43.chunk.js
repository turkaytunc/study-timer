(this["webpackJsonpstudy-timer"]=this["webpackJsonpstudy-timer"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(4),c=n.n(s),r=(n(10),n(1)),o=n(2),l=(n(11),n(12),function(e){var t=e.s,n=e.handleLength;return i.a.createElement("div",{className:"break-section"},i.a.createElement("label",{id:"break-label"},"Break Length"),i.a.createElement("div",{className:"break-button-container"},i.a.createElement("button",{id:"break-decrement",onClick:function(){return n("break","decrement")},disabled:t.isPlaying},"-"),i.a.createElement("div",{id:"break-length"},t.breakLength),i.a.createElement("button",{id:"break-increment",onClick:function(){return n("break","increment")},disabled:t.isPlaying},"+")))}),u=(n(13),function(e){var t=e.s,n=e.handleLength;return i.a.createElement("div",{className:"session-section"},i.a.createElement("label",{id:"session-label"},"Session Length"),i.a.createElement("div",{className:"session-button-container"},i.a.createElement("button",{id:"session-decrement",onClick:function(){return n("session","decrement")},disabled:t.isPlaying},"-"),i.a.createElement("div",{id:"session-length"},t.sessionLength),i.a.createElement("button",{id:"session-increment",onClick:function(){return n("session","increment")},disabled:t.isPlaying},"+")))}),m=(n(14),function(e){var t=e.s,n=e.handleReset,a=e.startStop;return i.a.createElement("div",{className:"display-section"},i.a.createElement("div",{className:"display-timer-container"},i.a.createElement("label",{id:"timer-label"},t.isBreak?"Break Time":"Study Time"),i.a.createElement("div",{id:"time-left"}," ",t.minuteLeft<10?"0"+t.minuteLeft:t.minuteLeft," :"," ",t.secondLeft<10?"0"+t.secondLeft:t.secondLeft," ")),i.a.createElement("div",{className:"display-button-container"},i.a.createElement("button",{id:"start_stop",onClick:function(){return a()}},"Start-Stop"),i.a.createElement("button",{id:"reset",onClick:function(){return n()}},"Reset")))}),b={minuteLeft:25,secondLeft:0,sessionLength:25,breakLength:5,isPlaying:!1,isBreak:!1,cycleCount:0},d=function(e,t){return setTimeout((function(){e.secondLeft>0&&e.isPlaying?t(Object(r.a)(Object(r.a)({},e),{},{secondLeft:e.secondLeft-1})):e.secondLeft<=0&&e.minuteLeft>0&&e.isPlaying?t(Object(r.a)(Object(r.a)({},e),{},{minuteLeft:e.minuteLeft-1,secondLeft:59})):e.minuteLeft<=0&&e.secondLeft<=0&&e.isPlaying&&(new Audio("".concat("/study-timer","/sound/coin.ogg")).play(),e.isBreak?t(Object(r.a)(Object(r.a)({},e),{},{minuteLeft:e.sessionLength,isBreak:!1})):t(Object(r.a)(Object(r.a)({},e),{},{minuteLeft:e.breakLength,isBreak:!0,cycleCount:e.cycleCount+1})))}),1e3)};function f(){var e=i.a.useState(b),t=Object(o.a)(e,2),n=t[0],a=t[1],s=i.a.useState(null),c=Object(o.a)(s,2),f=c[0],L=c[1],g=function(e){var t=e.minuteLeft<10?"0"+e.minuteLeft:e.minuteLeft,n=e.secondLeft<10?"0"+e.secondLeft:e.secondLeft,a="".concat(t," : ").concat(n),i=e.isBreak?"Break Time":"Study Time";document.title="".concat(i," ").concat(a)};i.a.useEffect((function(){if(n.isPlaying){g(n);var e=d(n,a);L(e)}}),[n,a]);var k=function(e,t){switch(e){case"break":if("increment"===t){if(n.breakLength>59)return;a(Object(r.a)(Object(r.a)({},n),{},{breakLength:n.breakLength+1})),n.isBreak&&a(Object(r.a)(Object(r.a)({},n),{},{minuteLeft:n.minuteLeft+1,breakLength:n.breakLength+1}))}if("decrement"===t){if(n.breakLength<=1)return;a(Object(r.a)(Object(r.a)({},n),{},{breakLength:n.breakLength-1})),n.isBreak&&a(Object(r.a)(Object(r.a)({},n),{},{minuteLeft:n.breakLength-1,breakLength:n.breakLength-1}))}break;case"session":if("increment"===t){if(n.sessionLength>59)return;a(Object(r.a)(Object(r.a)({},n),{},{sessionLength:n.sessionLength+1})),n.isBreak||a(Object(r.a)(Object(r.a)({},n),{},{minuteLeft:n.minuteLeft+1,sessionLength:n.sessionLength+1}))}if("decrement"===t){if(n.sessionLength<=1)return;a(Object(r.a)(Object(r.a)({},n),{},{sessionLength:n.sessionLength-1})),!n.isBreak&&n.minuteLeft>0&&a(Object(r.a)(Object(r.a)({},n),{},{minuteLeft:n.minuteLeft-1,sessionLength:n.sessionLength-1}))}break;default:a(Object(r.a)({},n))}};return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"prog-title"},"Study Timer"),i.a.createElement("div",{className:"section-container"},i.a.createElement(l,{s:n,handleLength:k}),i.a.createElement(u,{s:n,handleLength:k})),i.a.createElement(m,{s:n,handleReset:function(){a(Object(r.a)(Object(r.a)({},n),b)),clearTimeout(f),g(b)},startStop:function(){a(Object(r.a)(Object(r.a)({},n),{},{isPlaying:!n.isPlaying})),clearTimeout(f)}}))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.f2eada43.chunk.js.map