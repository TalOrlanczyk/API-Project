(this.webpackJsonpapisaou=this.webpackJsonpapisaou||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),l=n.n(r),o=(n(82),n(83),n(84),n(85),function(){return c.a.createElement("div",{className:"Title"},c.a.createElement("span",{className:"Span-color"},"myApiProject "))}),s=(n(86),n(22)),u=function(){return c.a.createElement("div",{className:"Logo"},c.a.createElement(s.b,{to:"/"},"header"))},i=(n(92),n(12)),m=(n(93),n(56)),d=n.n(m),f=n(57),b=n.n(f),E=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=document.cookie.split(";");e=e[0].split("=");var t=document.getElementById("API");"theme"===e[0]?(t.classList.add(e[1]),r(e[1])):(t.classList.add("lightmode"),r("lightmode"))}),[]);return c.a.createElement("div",{className:"ThemeFunc-flex"},"lightmode"===n?c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=new Date;t.setDate(t.getDate()+1);var n="; expires="+t.toUTCString();document.cookie="theme=darkmode"+n+";";var a=document.getElementById("API");a.classList.add("darkmode"),a.classList.remove("lightmode"),r("darkmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(d.a,{className:"ThemeFunc-icon"}))):c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=document.getElementById("API"),n=new Date;n.setDate(n.getDate()+1);var a="; expires="+n.toUTCString();document.cookie="theme=lightmode"+a+";",t.classList.add("lightmode"),t.classList.remove("darkmode"),r("lightmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(b.a,{className:"ThemeFunc-icon"}))))},v=function(){return console.log("func"),c.a.createElement("div",{className:"funcBar-grid"},c.a.createElement(E,null))},p=function(){return c.a.createElement("div",{className:"Header-grid"},c.a.createElement(u,null),c.a.createElement(o,null),c.a.createElement(v,null))},h=n(11),j=(n(95),n(44)),O=(n(96),n(97),n(58)),g=n.n(O),N=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(a.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},y=function(e){var t=e.currencyOptions,n=e.selectedCurrency,r=e.onChangeCurrency,l=e.onChangeAmount,o=e.amount,s=e.compereCurreny,u=Object(a.useState)(!1),m=Object(i.a)(u,2),d=m[0],f=m[1],b=Object(a.useState)(""),E=Object(i.a)(b,1)[0],v=Object(a.useRef)(null);return N(v,(function(){!0===d&&f(!1)})),c.a.createElement("div",{className:"Currecy"},c.a.createElement("div",{className:!0===d?"color-picker open":"color-picker",onClick:function(e){f(!d)}},c.a.createElement("input",{id:"color-input",type:"hidden",name:"coloris_panneau",value:E}),c.a.createElement("div",{className:"color-value list-item"},n,c.a.createElement(g.a,{className:!0===d?"arrowdown upside":"arrowdown"})),c.a.createElement("ul",{className:"list",ref:!0===d?v:null},t.filter((function(e){return e!==s})).map((function(e){return c.a.createElement("li",{key:e,className:n===e?"list-item picked":"list-item",onClick:function(t){return r(e)}},c.a.createElement("span",null,e))})))),c.a.createElement("input",{type:"number",className:"money-conver",value:o,onChange:l}))},k=(n(98),function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("span",null,"Loading"))}),C="https://api.exchangeratesapi.io/latest",w=function(){var e,t,n=Object(a.useState)([]),r=Object(i.a)(n,2),l=r[0],o=r[1],s=Object(a.useState)(),u=Object(i.a)(s,2),m=u[0],d=u[1],f=Object(a.useState)(),b=Object(i.a)(f,2),E=b[0],v=b[1],p=Object(a.useState)(),h=Object(i.a)(p,2),O=h[0],g=h[1],N=Object(a.useState)(1),w=Object(i.a)(N,2),S=w[0],x=w[1],L=Object(a.useState)(!0),I=Object(i.a)(L,2),D=I[0],A=I[1];D?(t=S,e=S*O):(e=S,t=S/O),Object(a.useEffect)((function(){fetch(C).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];o([e.base].concat(Object(j.a)(Object.keys(e.rates)))),d(e.base),v(t),g(e.rates[t])}))}),[]),Object(a.useEffect)((function(){null!=m&&null!=E&&fetch("".concat(C,"?base=").concat(m,"&symbols=").concat(E)).then((function(e){return e.json()})).then((function(e){return g(e.rates[E])}))}),[m,E]);var F=Object(a.useCallback)((function(e){x(e.target.value),A(!0)}),[]),M=Object(a.useCallback)((function(e){x(e.target.value),A(!1)}),[]);return null==m||null==E||null==l||null==t||null==O?c.a.createElement(k,null):c.a.createElement("div",{className:"coverter-main"},c.a.createElement(y,{currencyOptions:l,selectedCurrency:m,onChangeCurrency:function(e){return d(e)},onChangeAmount:function(e){return F(e)},amount:t,compereCurreny:E}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement(y,{currencyOptions:l,selectedCurrency:E,onChangeCurrency:function(e){return v(e)},onChangeAmount:function(e){return M(e)},amount:e,compereCurreny:m}))},S=n(30),x=n.n(S),L=n(24),I=n(45),D=(n(100),n(61)),A=n.n(D),F=n(62),M=n(15),P=n(133),B=n(59),T=n.n(B),H=n(132),Y=n(60),_=n.n(Y),J="https://api.exchangeratesapi.io/",R={classes:{root:"date-label-color"}},U=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)({}),o=Object(i.a)(l,2),s=o[0],u=o[1],m=Object(a.useState)({}),d=Object(i.a)(m,2),f=d[0],b=d[1],E=Object(a.useState)(""),v=Object(i.a)(E,2),p=v[0],h=v[1],O=Object(a.useState)(new Date),g=Object(i.a)(O,2),N=g[0],y=g[1];Object(a.useEffect)((function(){fetch("".concat(J,"latest")).then((function(e){return e.json()})).then((function(e){var t=e.date,n=new Date(t),a=e.rates;a[e.base]="",h(Object.keys(a).length),r([e.base].concat(Object(j.a)(Object.keys(e.rates)))),Object.keys(a).map(function(){var e=Object(I.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"latest?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,n=s;n[t]=Object.entries(e.rates)[0][1],u(Object(L.a)(Object(L.a)({},s),n[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var c,l=n.getFullYear()+"-"+(((c=n.getMonth()+1)>=10?c:"0"+c)+"-")+(n.getDate()-1);Object.keys(a).map(function(){var e=Object(I.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J).concat(l,"?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,n=f;n[t]=Object.entries(e.rates)[0][1],b(Object(L.a)(Object(L.a)({},f),n[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[]);var C=function(e){var t=100-e[1]/f[e[0]]*100,n=t.toString().split(".")[0],a=t.toString().split(".")[1];return void 0!=a&&(a=a.substring(0,3)),2===a.length?a+="0":1===a.length&&(a+="00"),n+"."+a},w=function(e){return e>0?"positive":e<0?"negative":"same"};return p!==Object.keys(f).length||Object.keys(s).length!==p||Object.keys(s).length!==Object.keys(f).length?c.a.createElement(k,null):c.a.createElement("div",{className:"date-table"},c.a.createElement("div",{className:"date"},c.a.createElement(M.a,{utils:F.a},c.a.createElement(P.a,{disableFuture:!0,InputLabelProps:R,InputProps:{classes:{underline:"date-border-color",input:"date-input-color"},endAdornment:c.a.createElement(H.a,{position:"end"},c.a.createElement(T.a,{className:"Event-color"}))},label:"Responsive",views:["year","month","date"],value:N,onChange:function(e){return y(e)},format:"dd/MM/yyyy"})),c.a.createElement(_.a,{className:"date-search",onClick:function(e){return function(e){var t=new Date(N),a=function(e){return e>=10?e:"0"+e},c=t.getFullYear()+"-"+a(t.getMonth()+1)+"-"+(t.getDate()-1),r=t.getFullYear()+"-"+a(t.getMonth()+1)+"-"+t.getDate();n.filter((function(e){return"ILS"!==e})).map(function(){var e=Object(I.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J).concat(r,"?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,n=s;n[t]=Object.entries(e.rates)[0][1],u(Object(L.a)(Object(L.a)({},s),n[t]))}));case 2:return e.next=4,fetch("".concat(J).concat(c,"?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,n=f;n[t]=Object.entries(e.rates)[0][1],b(Object(L.a)(Object(L.a)({},f),n[t]))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}()}})),c.a.createElement("div",{className:"table"},c.a.createElement("table",{className:"tableCovertor"},c.a.createElement("thead",{className:"tableHeader"},c.a.createElement("tr",null,c.a.createElement("td",null,"type"),c.a.createElement("td",null,"rate"),c.a.createElement("td",null,"daily change"),c.a.createElement("td",null,"graph"))),c.a.createElement("tbody",{className:"tableBody"},Object.entries(s).filter((function(e){return"ILS"!==e[0]})).map((function(e){return c.a.createElement("tr",{key:e[0]},c.a.createElement("td",{className:"text-color"},e[0]),c.a.createElement("td",{className:"text-color"},e[1]),c.a.createElement("td",{className:w(C(e))},Math.abs(C(e))+"%"),c.a.createElement("td",null,c.a.createElement(A.a,{className:"icon-color"})))}))))))},W=function(){return c.a.createElement("div",{className:"converter-warrper"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"Converter-Header"},"Convert")),c.a.createElement(w,null),c.a.createElement(U,null))},q=(n(101),n(102),function(){return c.a.createElement("div",{className:"convertor"},c.a.createElement("div",{className:"coin-flip"},c.a.createElement("div",{className:"coin-flip-inner"},c.a.createElement("div",{className:"front-coin"}),c.a.createElement("div",{className:"back-coin"}))),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(s.b,{to:"/Converter",className:"converter-link"},"Convertor")))}),$=(n(103),function(){return c.a.createElement("div",{className:"poxedex"},c.a.createElement("div",{className:"pokeball"},c.a.createElement("div",{className:"pokeball__button"})),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(s.b,{to:"/Converter",className:"poxedex-link"},"Poxedec")))}),z=function(){return c.a.createElement("div",{className:"MainPage"},c.a.createElement(q,null),c.a.createElement(q,null),c.a.createElement(q,null),c.a.createElement($,null),c.a.createElement(q,null))},G=(n(104),function(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("div",{id:"letter-object",className:"text-flicker-in-glow anim-object",onClick:function(e){return console.log("d")}},"404"))}),K=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:z}),c.a.createElement(h.a,{exact:!0,path:"/Converter/",component:W}),c.a.createElement(h.a,{component:G})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,null,c.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,n){e.exports=n(105)},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[77,1,2]]]);
//# sourceMappingURL=main.60309c7f.chunk.js.map