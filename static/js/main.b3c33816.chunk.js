(this.webpackJsonpapisaou=this.webpackJsonpapisaou||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),l=n.n(r),o=(n(83),n(84),n(85),n(86),function(){return c.a.createElement("div",{className:"Title"},c.a.createElement("span",{className:"Span-color"},"myApiProject "))}),s=(n(87),n(23)),i=function(){return c.a.createElement("div",{className:"Logo"},c.a.createElement(s.b,{to:"/"},"header"))},u=(n(93),n(11)),m=(n(94),n(56)),d=n.n(m),f=n(57),b=n.n(f),E=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=document.cookie.split(";");e=e[0].split("=");var t=document.getElementById("API");"theme"===e[0]?(t.classList.add(e[1]),r(e[1])):(t.classList.add("lightmode"),r("lightmode"))}),[]);return c.a.createElement("div",{className:"ThemeFunc-flex"},"lightmode"===n?c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=new Date;t.setDate(t.getDate()+1);var n="; expires="+t.toUTCString();document.cookie="theme=darkmode"+n+";";var a=document.getElementById("API");a.classList.add("darkmode"),a.classList.remove("lightmode"),r("darkmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(d.a,{className:"ThemeFunc-icon"}))):c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=document.getElementById("API"),n=new Date;n.setDate(n.getDate()+1);var a="; expires="+n.toUTCString();document.cookie="theme=lightmode"+a+";",t.classList.add("lightmode"),t.classList.remove("darkmode"),r("lightmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(b.a,{className:"ThemeFunc-icon"}))))},v=function(){return console.log("func"),c.a.createElement("div",{className:"funcBar-grid"},c.a.createElement(E,null))},p=function(){return c.a.createElement("div",{className:"Header-grid"},c.a.createElement(i,null),c.a.createElement(o,null),c.a.createElement(v,null))},h=n(12),j=(n(96),n(44)),O=(n(97),n(98),n(58)),g=n.n(O),N=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(a.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},k=function(e){var t=e.currencyOptions,n=e.selectedCurrency,r=e.onChangeCurrency,l=e.onChangeAmount,o=e.amount,s=e.compereCurreny,i=Object(a.useState)(!1),m=Object(u.a)(i,2),d=m[0],f=m[1],b=Object(a.useState)(""),E=Object(u.a)(b,1)[0],v=Object(a.useRef)(null);return N(v,(function(){!0===d&&f(!1)})),c.a.createElement("div",{className:"Currecy"},c.a.createElement("div",{className:!0===d?"color-picker open":"color-picker",onClick:function(e){f(!d)}},c.a.createElement("input",{id:"color-input",type:"hidden",name:"coloris_panneau",value:E}),c.a.createElement("div",{className:"color-value list-item"},n,c.a.createElement(g.a,{className:!0===d?"arrowdown upside":"arrowdown"})),c.a.createElement("ul",{className:"list",ref:!0===d?v:null},t.filter((function(e){return e!==s})).map((function(e){return c.a.createElement("li",{key:e,className:n===e?"list-item picked":"list-item",onClick:function(t){return r(e)}},c.a.createElement("span",null,e))})))),c.a.createElement("input",{type:"number",className:"money-conver",value:o,onChange:l}))},y=(n(99),function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("span",null,"Loading"))}),C="https://api.exchangeratesapi.io/latest",w=function(){var e,t,n=Object(a.useState)([]),r=Object(u.a)(n,2),l=r[0],o=r[1],s=Object(a.useState)(),i=Object(u.a)(s,2),m=i[0],d=i[1],f=Object(a.useState)(),b=Object(u.a)(f,2),E=b[0],v=b[1],p=Object(a.useState)(),h=Object(u.a)(p,2),O=h[0],g=h[1],N=Object(a.useState)(1),w=Object(u.a)(N,2),S=w[0],x=w[1],I=Object(a.useState)(!0),L=Object(u.a)(I,2),D=L[0],A=L[1];D?(t=S,e=S*O):(e=S,t=S/O),Object(a.useEffect)((function(){fetch(C).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];o([e.base].concat(Object(j.a)(Object.keys(e.rates)))),d(e.base),v(t),g(e.rates[t])}))}),[]),Object(a.useEffect)((function(){null!=m&&null!=E&&fetch("".concat(C,"?base=").concat(m,"&symbols=").concat(E)).then((function(e){return e.json()})).then((function(e){return g(e.rates[E])}))}),[m,E]);var B=Object(a.useCallback)((function(e){x(e.target.value),A(!0)}),[]),F=Object(a.useCallback)((function(e){x(e.target.value),A(!1)}),[]);return null==m||null==E||null==l||null==t||null==O?c.a.createElement(y,null):c.a.createElement("div",{className:"coverter-main slide-in-bck-center"},c.a.createElement(k,{currencyOptions:l,selectedCurrency:m,onChangeCurrency:function(e){return d(e)},onChangeAmount:function(e){return B(e)},amount:t,compereCurreny:E}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement(k,{currencyOptions:l,selectedCurrency:E,onChangeCurrency:function(e){return v(e)},onChangeAmount:function(e){return F(e)},amount:e,compereCurreny:m}))},S=n(38),x=n.n(S),I=n(20),L=n(48),D=(n(101),n(62)),A=n.n(D),B=n(63),F=n(15),M=n(135),P=n(60),T=n.n(P),G=n(134),H=n(61),Y=n.n(H),_=n(59),J=n.n(_),R=(n(102),function(e){e.openGraph;var t=e.pickData,n=e.closeGraph,r=Object(a.useState)(!1),l=Object(u.a)(r,2),o=l[0],s=l[1];Object(a.useEffect)((function(){document.getElementById("test").scrollIntoView({behavior:"smooth"})}),[]);return c.a.createElement("div",{className:"coinGraph-container"},c.a.createElement("div",{id:"test",className:!1===o?"scale-in-center":"roll-out-left"},t,c.a.createElement("button",{className:"left-exit",onClick:function(e){return s(!0),void setTimeout((function(){n()}),600)}},c.a.createElement(J.a,null))))}),U="https://api.exchangeratesapi.io/",W={classes:{underline:"date-border-color",input:"date-input-color"},endAdornment:c.a.createElement(G.a,{position:"end"},c.a.createElement(T.a,{className:"event-color"}))},q={classes:{root:"date-label-color"}},V={},$=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)({}),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(a.useState)({}),d=Object(u.a)(m,2),f=d[0],b=d[1],E=Object(a.useState)(""),v=Object(u.a)(E,2),p=v[0],h=v[1],O=Object(a.useState)(new Date),g=Object(u.a)(O,2),N=g[0],k=g[1],C=Object(a.useState)(!1),w=Object(u.a)(C,2),S=w[0],D=w[1],P=Object(a.useState)(""),T=Object(u.a)(P,2),G=T[0],H=T[1];Object(a.useEffect)((function(){fetch("".concat(U,"latest")).then((function(e){return e.json()})).then((function(e){var t=e.date,n=new Date(t),a=e.rates;a[e.base]="",h(Object.keys(a).length),r([e.base].concat(Object(j.a)(Object.keys(e.rates)))),Object.keys(a).map(function(){var e=Object(L.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U,"latest?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,n=s;n[t]=Object.entries(e.rates)[0][1],i(Object(I.a)(Object(I.a)({},s),n[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var c,l=n.getFullYear()+"-"+(((c=n.getMonth()+1)>=10?c:"0"+c)+"-")+(n.getDate()-1);Object.keys(a).map(function(){var e=Object(L.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U).concat(l,"?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,n=f;n[t]=Object.entries(e.rates)[0][1],b(Object(I.a)(Object(I.a)({},f),n[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[]);var _=function(e){var t=100-e[1]/f[e[0]]*100,n=t.toString().split(".")[0],a=t.toString().split(".")[1];return void 0!=a?2===(a=a.substring(0,3)).length?a+="0":1===a.length&&(a+="00"):a="0",n+"."+a},J=function(e){return e>0?"positive":e<0?"negative":"same"},$=function(e){var t=new Date(N),a=function(e){return e>=10?e:"0"+e},c=t.getFullYear()+"-"+a(t.getMonth()+1)+"-"+(t.getDate()-1),r=t.getFullYear()+"-"+a(t.getMonth()+1)+"-"+t.getDate();b(Object(I.a)({},V)),i(Object(I.a)({},V)),n.filter((function(e){return"ILS"!==e})).map((function(e){fetch("".concat(U).concat(r,"?symbols=ILS&base=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.base,n=s;n[t]=Object.entries(e.rates)[0][1],i(Object(I.a)(Object(I.a)({},s),n[t]))})),fetch("".concat(U).concat(c,"?symbols=ILS&base=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.base,n=f;n[t]=Object.entries(e.rates)[0][1],b(Object(I.a)(Object(I.a)({},f),n[t]))}))}))};return p!==Object.keys(f).length||Object.keys(s).length!==p||Object.keys(s).length!==Object.keys(f).length?c.a.createElement(y,null):c.a.createElement("div",{className:"date-table slide-in-bck-center"},c.a.createElement("div",{className:"date"},c.a.createElement(F.a,{utils:B.a},c.a.createElement(M.a,{disableFuture:!0,InputLabelProps:q,InputProps:W,label:"Responsive",views:["year","month","date"],value:N,onChange:function(e){return k(e)},format:"dd/MM/yyyy"})),c.a.createElement("button",{className:"button-class",disabled:!1,onClick:function(e){return $()}},c.a.createElement(Y.a,{className:"date-search"}))),c.a.createElement("div",{className:"table"},c.a.createElement("table",{className:"tableCovertor"},c.a.createElement("thead",{className:"tableHeader"},c.a.createElement("tr",null,c.a.createElement("td",null,"type"),c.a.createElement("td",null,"rate"),c.a.createElement("td",null,"daily change"),c.a.createElement("td",null,"graph"))),c.a.createElement("tbody",{className:"tableBody"},Object.entries(s).filter((function(e){return"ILS"!==e[0]})).map((function(e){return c.a.createElement("tr",{key:e[0]},c.a.createElement("td",{className:"text-color"},e[0]),c.a.createElement("td",{className:"text-color"},e[1]),c.a.createElement("td",{className:J(_(e))},Math.abs(_(e))+"%"),c.a.createElement("td",null,c.a.createElement(A.a,{className:"icon-color",onClick:function(t){!function(e,t){H(t),D(!0),window.scrollTo(0,document.body.scrollHeight+300)}(0,e[0])}})))}))))),!0===S?c.a.createElement(R,{openGraph:S,pickData:G,closeGraph:function(e){return D(!1)}}):null)},z=function(){return c.a.createElement("div",{className:"converter-warrper"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"Converter-Header"},"Convert")),c.a.createElement(w,null),c.a.createElement($,null))},K=(n(103),n(104),function(){return c.a.createElement("div",{className:"convertor"},c.a.createElement("div",{className:"coin-flip"},c.a.createElement("div",{className:"coin-flip-inner"},c.a.createElement("div",{className:"front-coin"}),c.a.createElement("div",{className:"back-coin"}))),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(s.b,{to:"/Converter",className:"converter-link"},"Convertor")))}),Q=(n(105),function(){return c.a.createElement("div",{className:"poxedex"},c.a.createElement("div",{className:"pokeball"},c.a.createElement("div",{className:"pokeball__button"})),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(s.b,{to:"/Converter",className:"poxedex-link"},"Poxedec")))}),X=function(){return c.a.createElement("div",{className:"MainPage"},c.a.createElement(K,null),c.a.createElement(K,null),c.a.createElement(K,null),c.a.createElement(Q,null),c.a.createElement(K,null))},Z=(n(106),function(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("div",{id:"letter-object",className:"text-flicker-in-glow anim-object",onClick:function(e){return console.log("d")}},"404"))}),ee=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:X}),c.a.createElement(h.a,{exact:!0,path:"/Converter/",component:z}),c.a.createElement(h.a,{component:Z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,null,c.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,n){e.exports=n(107)},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[78,1,2]]]);
//# sourceMappingURL=main.b3c33816.chunk.js.map