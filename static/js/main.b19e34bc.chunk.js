(this.webpackJsonpapisaou=this.webpackJsonpapisaou||[]).push([[0],{121:function(e,t,a){e.exports=a(251)},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),o=(a(126),a(6)),i=(a(127),a(128),a(129),function(){return c.a.createElement("div",{className:"Title"},c.a.createElement("span",{className:"Span-color"},"myApiProject "))}),s=(a(130),a(18)),u=function(){return c.a.createElement("div",{className:"Logo"},c.a.createElement(s.b,{to:"/"},"header"))},m=(a(135),a(136),a(55)),d=a.n(m),f=a(58),h=a.n(f),b=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=document.cookie.split(";");e=e[0].split("=");var t=document.getElementById("API");"theme"===e[0]?(t.classList.add(e[1]),r(e[1])):(t.classList.add("lightmode"),r("lightmode"))}),[]);return c.a.createElement("div",{className:"ThemeFunc-flex"},"lightmode"===a?c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=new Date;t.setDate(t.getDate()+1);var a="; expires="+t.toUTCString();document.cookie="theme=darkmode"+a+";";var n=document.getElementById("API");n.classList.add("darkmode"),n.classList.remove("lightmode"),r("darkmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(d.a,{className:"ThemeFunc-icon"}))):c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=document.getElementById("API"),a=new Date;a.setDate(a.getDate()+1);var n="; expires="+a.toUTCString();document.cookie="theme=lightmode"+n+";",t.classList.add("lightmode"),t.classList.remove("darkmode"),r("lightmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(h.a,{className:"ThemeFunc-icon"}))))},p=function(){return console.log("func"),c.a.createElement("div",{className:"funcBar-grid"},c.a.createElement(b,null))},v=function(){return c.a.createElement("div",{className:"Header-grid"},c.a.createElement(u,null),c.a.createElement(i,null),c.a.createElement(p,null))},E=a(12),g=(a(138),a(139),a(140),a(96)),j=a.n(g),O=function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))},N=function(e){var t=e.currencyOptions,a=e.selectedCurrency,r=e.onChangeCurrency,l=e.onChangeAmount,i=e.amount,s=e.compereCurreny,u=Object(n.useState)(!1),m=Object(o.a)(u,2),d=m[0],f=m[1],h=Object(n.useState)(""),b=Object(o.a)(h,1)[0],p=Object(n.useRef)(null);return O(p,(function(){!0===d&&f(!1)})),c.a.createElement("div",{className:"Currecy"},c.a.createElement("div",{className:!0===d?"color-picker open":"color-picker",onClick:function(e){f(!d)}},c.a.createElement("input",{id:"color-input",type:"hidden",name:"coloris_panneau",value:b}),c.a.createElement("div",{className:"color-value list-item"},a,c.a.createElement(j.a,{className:!0===d?"arrowdown upside":"arrowdown"})),c.a.createElement("ul",{className:"list",ref:!0===d?p:null},t.filter((function(e){return e!==s})).map((function(e){return c.a.createElement("li",{key:e,className:a===e?"list-item picked":"list-item",onClick:function(t){return r(e)}},c.a.createElement("span",null,e))})))),c.a.createElement("input",{type:"number",className:"money-conver",value:i,onChange:l}))},k=(a(141),function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("span",null,"Loading"))}),y="https://api.exchangeratesapi.io/latest",w=function(e){var t,a,r=e.currencyOptions,l=Object(n.useState)(r[0]),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(r[1]),d=Object(o.a)(m,2),f=d[0],h=d[1],b=Object(n.useState)(),p=Object(o.a)(b,2),v=p[0],E=p[1],g=Object(n.useState)(1),j=Object(o.a)(g,2),O=j[0],w=j[1],x=Object(n.useState)(!0),C=Object(o.a)(x,2),S=C[0],A=C[1];S?(a=O,t=O*v):(t=O,a=O/v),Object(n.useEffect)((function(){fetch(y).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];E(e.rates[t])}))}),[]),Object(n.useEffect)((function(){null!=s&&null!=f&&fetch("".concat(y,"?base=").concat(s,"&symbols=").concat(f)).then((function(e){return e.json()})).then((function(e){return E(e.rates[f])}))}),[s,f]);var D=Object(n.useCallback)((function(e){w(e.target.value),A(!0)}),[]),I=Object(n.useCallback)((function(e){w(e.target.value),A(!1)}),[]);return null==s||null==f||null==r||null==a||null==v?c.a.createElement(k,null):c.a.createElement("div",{className:"coverter-main"},c.a.createElement(N,{currencyOptions:r,selectedCurrency:s,onChangeCurrency:function(e){return u(e)},onChangeAmount:function(e){return D(e)},amount:a,compereCurreny:f}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement(N,{currencyOptions:r,selectedCurrency:f,onChangeCurrency:function(e){return h(e)},onChangeAmount:function(e){return I(e)},amount:t,compereCurreny:s}))},x=a(45),C=a.n(x),S=a(17),A=a(72),D=(a(143),a(106)),I=a(15),M=a(279),B=a(99),L=a.n(B),P=(a(144),a(97)),R=a.n(P),T=function(e){var t=e.text;return c.a.createElement("div",{className:"error-cant-search-limit"},c.a.createElement(R.a,null),c.a.createElement("div",{className:"error-text"},t))},F=a(98),H=a.n(F),_=a(278),z=(a(145),{classes:{underline:"date-border-color",input:"date-input-color"},endAdornment:c.a.createElement(_.a,{position:"end"},c.a.createElement(H.a,{className:"event-color"}))}),G={classes:{root:"date-label-color"}},W=function(e){var t=e.handleStuff,a=Object(n.useState)(new Date),r=Object(o.a)(a,2),l=r[0],i=r[1],s=function(){return l.getFullYear()>=2011&&l.getMonth()>=0&&l.getDate()>3};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"date"},c.a.createElement(I.a,{utils:D.a},c.a.createElement(M.a,{disableFuture:!0,InputLabelProps:G,InputProps:z,label:"Responsive",views:["year","month","date"],value:l,onChange:function(e){return i(e)},format:"dd/MM/yyyy"})),c.a.createElement("button",{className:"button-class",disabled:!s(),onClick:function(e){return t(e,l)}},c.a.createElement(L.a,{className:!1===s()?"disabled":"date-search"}))),!1===s()?c.a.createElement(T,{text:"cant search data earlier then 04/01/2011"}):null)},q=(a(146),a(59)),J=a(102),Y=a.n(J),Z=(a(147),a(100)),U={labels:"",datasets:[{label:"\u05e2\u05e8\u05da \u05d4\u05de\u05d8\u05d1\u05e2",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#007c9a",pointBackgroundColor:"#fff",pointBorderWidth:3,pointHoverRadius:6,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:3,pointRadius:1,pointHitRadius:10,data:""}]},V=function(e){var t=e.latestDate,a=(e.openGraph,e.pickData),r=e.closeGraph,l=Object(n.useState)(U),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(!1),d=Object(o.a)(m,2),f=d[0],h=d[1],b=Object(n.useState)({}),p=Object(o.a)(b,2),v=p[0],E=p[1];Object(n.useEffect)((function(){navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?E({width:"80vw",height:"40vh",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2),1px 1px 1px 0px rgba(0,0,0,0.14)"}):E({width:"50vw",height:"40vh",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2),1px 1px 1px 0px rgba(0,0,0,0.14)"}),document.getElementById("test").scrollIntoView({behavior:"smooth"})}),[]),Object(n.useEffect)((function(){var e,n=new Date(t),c=n.getFullYear()+"-"+(((e=n.getMonth()+1)>=10?e:"0"+e)+"-")+(n.getDate()-7);fetch("".concat("https://api.exchangeratesapi.io/","history?start_at=").concat(c,"&end_at=").concat(t,"&symbols=ILS&base=").concat(a)).then((function(e){return e.json()})).then((function(e){console.table(e);var t=Object(q.a)(s.datasets)[0],a=[];t.data=Object.values(e.rates);for(var n=Object.keys(e.rates).sort(),c=0;c<Object.values(e.rates).length;c++)a.push(e.rates[n[c]].ILS);t.data=a,u(Object(S.a)(Object(S.a)({},s),{},{datasets:[t]})),u(Object(S.a)(Object(S.a)({},s),{},{labels:n}))}))}),[a]);return c.a.createElement("div",{className:"coinGraph-container"},c.a.createElement("div",{id:"test",className:!1===f?"scale-in-center":"roll-out-left"},a,c.a.createElement("button",{className:"left-exit",onClick:function(e){return h(!0),void setTimeout((function(){r()}),1e3)}},c.a.createElement(Y.a,null)),s.labels.length>0?c.a.createElement("div",{className:"chartline",style:v},c.a.createElement(Z.a,{data:s,options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"".concat(a," \u05e2\u05e8\u05da \u05d4\u05de\u05d8\u05d1\u05e2 "),fontSize:10},legend:{display:!0,position:"top",labels:{fontSize:17,fontColor:"black"}},scales:{yAxes:[{ticks:{fontColor:"black",fontSize:14,stepSize:.005}}],xAxes:[{ticks:{fontColor:"black",fontSize:14,stepSize:1}}]}}})):null))},X=(a(240),function(){return c.a.createElement("thead",{className:"tableHeader"},c.a.createElement("tr",null,c.a.createElement("td",null,"type"),c.a.createElement("td",null,"rate"),c.a.createElement("td",null,"daily change"),c.a.createElement("td",null,"graph")))}),$=a(103),K=a.n($),Q=(a(241),function(e){var t=e.latestRate,a=e.dailyChange,n=e.PickDataToGraph,r=function(e){return e>0?"positive":e<0?"negative":"same"};return c.a.createElement("tbody",{className:"tableBody"},Object.entries(t).filter((function(e){return"ILS"!==e[0]})).map((function(e){return c.a.createElement("tr",{key:e[0]},c.a.createElement("td",{className:"text-color"},e[0]),c.a.createElement("td",{className:"text-color"},e[1]),c.a.createElement("td",{className:r(a(e))},Math.abs(a(e))+"%"),c.a.createElement("td",null,c.a.createElement(K.a,{className:"icon-color",onClick:function(t){n(t,e[0])}})))})))}),ee=function(e){var t=e.latestRate,a=e.yesterdayRate,r=e.latestDate,l=Object(n.useState)(!1),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(""),d=Object(o.a)(m,2),f=d[0],h=d[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"table"},c.a.createElement("table",{className:"tableCovertor"},c.a.createElement(X,null),c.a.createElement(Q,{latestRate:t,dailyChange:function(e){return function(e){var t=100-e[1]/a[e[0]]*100,n=t.toString().split(".")[0],c=t.toString().split(".")[1];return void 0!=c?2===(c=c.substring(0,3)).length?c+="0":1===c.length&&(c+="00"):c="0",n+"."+c}(e)},PickDataToGraph:function(e,t){return function(e,t){h(t),u(!0)}(0,t)}}))),!0===s?c.a.createElement(V,{latestDate:r,openGraph:s,pickData:f,closeGraph:function(e){return u(!1)}}):null)},te="https://api.exchangeratesapi.io/",ae={},ne=function(e){var t=e.currencyOptions,a=Object(n.useState)(""),r=Object(o.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)({}),u=Object(o.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)({}),h=Object(o.a)(f,2),b=h[0],p=h[1],v=Object(n.useState)(t.length),E=Object(o.a)(v,1)[0];Object(n.useEffect)((function(){fetch("".concat(te,"latest")).then((function(e){return e.json()})).then((function(e){var t=e.date,a=new Date(t),n=e.rates;n[e.base]="",i(e.date),Object.keys(n).map(function(){var e=Object(A.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(te,"latest?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=m;a[t]=Object.entries(e.rates)[0][1],d(Object(S.a)(Object(S.a)({},m),a[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var c,r=a.getFullYear()+"-"+(((c=a.getMonth()+1)>=10?c:"0"+c)+"-")+(a.getDate()-1);Object.keys(n).map(function(){var e=Object(A.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(te).concat(r,"?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=b;a[t]=Object.entries(e.rates)[0][1],p(Object(S.a)(Object(S.a)({},b),a[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[]);var g=function(e,a){var n=new Date(a),c=function(e){return e>=10?e:"0"+e},r=n.getFullYear()+"-"+c(n.getMonth()+1)+"-"+(n.getDate()-1),l=n.getFullYear()+"-"+c(n.getMonth()+1)+"-"+n.getDate();p(Object(S.a)({},ae)),d(Object(S.a)({},ae)),t.filter((function(e){return"ILS"!==e})).map((function(e){fetch("".concat(te).concat(l,"?symbols=ILS&base=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=m;a[t]=Object.entries(e.rates)[0][1],d(Object(S.a)(Object(S.a)({},m),a[t]))})),fetch("".concat(te).concat(r,"?symbols=ILS&base=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=b;a[t]=Object.entries(e.rates)[0][1],p(Object(S.a)(Object(S.a)({},b),a[t]))}))}))};return E!==Object.keys(b).length||Object.keys(m).length!==E?c.a.createElement(k,null):c.a.createElement("div",{className:"date-table slide-in-bck-center-table"},c.a.createElement(W,{handleStuff:function(e,t){return g(0,t)}}),c.a.createElement(ee,{latestRate:m,yesterdayRate:b,latestDate:l}))},ce=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),l=Object(o.a)(r,2),i=(l[0],l[1],Object(n.useState)()),s=Object(o.a)(i,2),u=(s[0],s[1],Object(n.useState)()),m=Object(o.a)(u,2);m[0],m[1];return Object(n.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest").then((function(e){return e.json()})).then((function(e){Object.keys(e.rates)[0];c([e.base].concat(Object(q.a)(Object.keys(e.rates))))}))}),[]),[a]},re=function(){var e=ce(),t=Object(o.a)(e,1)[0],a=ce("exchangeRate");Object(o.a)(a,1)[0];return 0===t.length?c.a.createElement(k,null):c.a.createElement("div",{className:"converter-warrper"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"Converter-Header"},"Convert")),c.a.createElement(w,{currencyOptions:t}),c.a.createElement(ne,{currencyOptions:t}))},le=(a(242),a(243),function(){return c.a.createElement("div",{className:"convertor"},c.a.createElement("div",{className:"coin-flip"},c.a.createElement("div",{className:"coin-flip-inner"},c.a.createElement("div",{className:"front-coin"}),c.a.createElement("div",{className:"back-coin"}))),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(s.b,{to:"/Converter",className:"converter-link"},"Convertor")))}),oe=(a(244),function(){return c.a.createElement("div",{className:"poxedex"},c.a.createElement("div",{className:"pokeball"},c.a.createElement("div",{className:"pokeball__button"})),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(s.b,{to:"/poke",className:"poxedex-link"},"Poxedec")))}),ie=function(){return c.a.createElement("div",{className:"MainPage"},c.a.createElement(le,null),c.a.createElement(le,null),c.a.createElement(le,null),c.a.createElement(oe,null),c.a.createElement(le,null))},se=(a(245),function(e){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("div",{id:"letter-object",className:"text-flicker-in-glow anim-object",onClick:function(e){return console.log("d")}},"404"),c.a.createElement("div",{className:"navigation-notfound"},c.a.createElement("button",{className:"prev-page",onClick:function(t){return e.history.goBack()}},"Back toprevious page"),c.a.createElement("div",{className:"back-home"},c.a.createElement(s.b,{className:"link-home",to:"/"},"Back to Home"))))}),ue=a(104),me=a.n(ue),de=(a(246),a(247),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=document.cookie.split(";");e=e[0].split("=");var t=document.getElementById("API");"theme"===e[0]?(t.classList.add(e[1]),r(e[1])):(t.classList.add("lightmode"),r("lightmode"))}),[]);return c.a.createElement("div",{className:"ThemeFunc-flex"},"lightmode"===a?c.a.createElement("span",{className:"middle"},c.a.createElement(d.a,{className:"ThemeFunc-icon",onClick:function(e){return function(e){var t=new Date;t.setDate(t.getDate()+1);var a="; expires="+t.toUTCString();document.cookie="theme=darkmode"+a+";";var n=document.getElementById("API");n.classList.add("darkmode"),n.classList.remove("lightmode"),r("darkmode")}()}})):c.a.createElement("span",{className:"middle"},c.a.createElement(h.a,{className:"ThemeFunc-icon",onClick:function(e){return function(e){var t=document.getElementById("API"),a=new Date;a.setDate(a.getDate()+1);var n="; expires="+a.toUTCString();document.cookie="theme=lightmode"+n+";",t.classList.add("lightmode"),t.classList.remove("darkmode"),r("lightmode")}()}})))}),fe=(a(248),function(){return c.a.createElement("svg",{className:"Icon-root-spacex",viewBox:"0 0 331.644 40.825",stroke:"none"},">",c.a.createElement("g",null,c.a.createElement("path",{fill:"#005288",d:"M77.292,15.094H49.249l-1.039,0.777v24.947h7.763v-9.355l0.741-0.664h20.579   c5.196,0,7.632-1.398,7.632-4.985v-5.728C84.924,16.493,82.489,15.094,77.292,15.094 M77.292,24.317   c0,1.69-1.118,2.041-3.554,2.041H56.799l-0.827-0.804V20.21l0.741-0.678h17.025c2.436,0,3.554,0.347,3.554,2.045V24.317z"}),c.a.createElement("polyline",{fill:"#005288",points:"99.081,19.813 105.761,29.6 105.391,30.548 90.618,30.548 86.847,35.187 108.837,35.187 110.361,36.115 113.775,40.824 122.659,40.824 103.186,14.775"}),c.a.createElement("polyline",{fill:"#005288",points:"187.418,35.757 187.418,28.833 188.217,28.143 203.079,28.143 203.079,23.734 179.524,23.734 179.524,40.823 214.27,40.823 214.27,36.435 188.252,36.435"}),c.a.createElement("rect",{x:"179.524",y:"15.094",fill:"#005288",width:"35.113",height:"4.848"}),c.a.createElement("path",{fill:"#005288",d:"M140.361,19.685h28.288c-0.436-3.597-2.668-4.595-8.33-4.595H140.06c-6.389,0-8.427,1.247-8.427,6.082   v13.565c0,4.84,2.038,6.087,8.427,6.087h20.259c5.745,0,7.945-1.079,8.095-4.81h-28.053l-0.832-0.783V20.209"}),c.a.createElement("path",{fill:"#005288",d:"M29.333,25.118H8.754l-0.606-0.667v-4.402l0.603-0.466h27.742l0.379-0.927   c-0.945-2.431-3.392-3.565-7.936-3.565H9.665c-6.385,0-8.426,1.247-8.426,6.082v2.844c0,4.841,2.041,6.086,8.426,6.086h20.533   l0.645,0.566v4.602l-0.526,0.718H6.83v-0.022H0.678c0,0-0.704,0.353-0.677,0.518c0.525,3.382,2.829,4.34,8.345,4.34h20.987   c6.384,0,8.486-1.247,8.486-6.087v-3.543C37.819,26.363,35.717,25.118,29.333,25.118"}),c.a.createElement("path",{fill:"#005288",d:"M236.725,14.988h-11.551l-0.627,1.193l12.828,9.351c2.43-1.407,5.074-2.833,7.95-4.24"}),c.a.createElement("path",{fill:"#005288",d:"M247.075,32.603l11.275,8.222h11.692l0.484-1.089L253.69,27.413   C251.454,29.054,249.245,30.787,247.075,32.603"}),c.a.createElement("path",{fill:"#A7A9AC",d:"M235.006,40.806h-10.451l-0.883-1.383C230.778,32.562,262.56,3.151,331.644,0   C331.644,0,273.658,1.956,235.006,40.806"})))}),he=function(){return c.a.createElement("div",null,c.a.createElement("span",{className:"middle"},c.a.createElement("svg",{className:"Icon-root",viewBox:"0 0 32 32",stroke:"none"},c.a.createElement("path",{id:"red",d:"M2,16 a 6 6 0 0 1 28 0 Z"}),c.a.createElement("path",{id:"blue",d:"M2,16 a 6 6 0 0 0 28 0 Z"}),c.a.createElement("path",{id:"white",d:"M2,16 a 6 6 0 0 0 28 0 Z",fill:"white"}),c.a.createElement("line",{x1:"2",y1:"16",x2:"30",y2:"16",stroke:"black"}),c.a.createElement("circle",{cx:"16",cy:"16",r:"5",fill:"grey",stroke:"black"}),c.a.createElement("circle",{cx:"16",cy:"16",r:"3",fill:"white",stroke:"black"}),c.a.createElement("circle",{cx:"16",cy:"16",r:"14",fill:"none",stroke:"black"}))))},be=(a(249),a(105)),pe=a.n(be),ve=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useRef)(null);return O(l,(function(){!0===a&&r(!1)})),c.a.createElement("div",{className:"test"},c.a.createElement("div",{className:"NavigatorMobile-warrper"},c.a.createElement("div",{className:"middle-flex"},c.a.createElement(s.b,{className:"home-link",to:"/"},c.a.createElement("div",{className:"icon-warrper"},c.a.createElement(me.a,{className:"home-link-icon"})))),c.a.createElement(de,null),c.a.createElement("div",{className:"middle-flex all-links",onClick:function(e){return r(!0)}},c.a.createElement(pe.a,{className:"home-link"})),!0===a?c.a.createElement("div",{className:"all-apps",ref:!0===a?l:null},c.a.createElement("div",{className:"middle-flex",onClick:function(e){return r(!1)}},c.a.createElement(s.b,{to:"/poke",className:"Pokemon"},c.a.createElement(he,null))),c.a.createElement("div",{className:"middle-flex",onClick:function(e){return r(!1)}},c.a.createElement(s.b,{to:"/SpaceX",className:"D"},c.a.createElement(fe,null)))):null))},Ee=(a(250),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],u=i[1];Object(n.useEffect)((function(){fetch("https://api.spacexdata.com/v3/launches/upcoming").then((function(e){return e.json()})).then((function(e){r(e);var t=new Date(e[0].launch_date_local),a=Date.parse(t)-Date.parse(new Date),n=Math.floor(a/1e3%60),c=Math.floor(a/1e3/60%60),l=Math.floor(a/36e5%24),o=Math.floor(a/864e5);u(o+" : "+l+" : "+c+" : "+n)}))}),[]),function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if(e.length>0){var t=new Date(e[0].launch_date_local),n=Date.parse(t)-Date.parse(new Date),c=Math.floor(n/1e3%60),r=Math.floor(n/1e3/60%60),l=Math.floor(n/36e5%24),o=Math.floor(n/864e5);u("T- "+o+" : "+l+" : "+r+" : "+c)}}()}),1e3);return c.a.createElement("div",{className:"CountDown-warrper"},c.a.createElement("button",{onClick:function(e){navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?window.open("maps://www.google.com/maps/search/?api=1&query=28.626486173436586,-80.62047030219247&query_place_id=ChIJZer0yrO74IgRbTR4IzfGf1s"):window.open("https://www.google.com/maps/search/?api=1&query=28.626486173436586,-80.62047030219247&query_place_id=ChIJZer0yrO74IgRbTR4IzfGf1s")}},"ddd"),a.length>0?c.a.createElement("div",{className:"CountDown-card"},c.a.createElement("div",{className:"grid-badges"},c.a.createElement("div",{className:"MissionName"},"mission name:",c.a.createElement("span",{className:"data-of-mission"},a[0].mission_name)),c.a.createElement("div",{className:"FlightNumber"},"flight number:",c.a.createElement("span",{className:"data-of-mission"},a[0].flight_number)),c.a.createElement("div",{className:"badge-flex"},c.a.createElement("img",{className:"badge",src:a[0].links.mission_patch}))),c.a.createElement("div",{className:"span-warrper"},c.a.createElement("span",null,s))):null)}),ge=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&r(!0)}),[]),c.a.createElement("div",{className:"app"},c.a.createElement(v,null),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/",component:ie}),c.a.createElement(E.a,{exact:!0,path:"/Converter/",component:re}),c.a.createElement(E.a,{exact:!0,path:"/SpaceX/",component:Ee}),c.a.createElement(E.a,{component:se})),!0===a?c.a.createElement(ve,null):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,null,c.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.b19e34bc.chunk.js.map