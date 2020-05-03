(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),u=(n(93),n(94),n(19)),s=n(22),l=n(67),i=n(75),p=n(21),f="[Locale] Set locale in reducer",m=function(e){return{type:f,payload:e}},d={locale:"En"},v="[Request] Set current request id in store",y="[Request] Get info about all country",_="[Request] Get info country by short name",b="[Request] Get info country by full name",h="[Request] Get info country by code",g="[Request] Get info country by currency",E="[Request] Set info about countries in store",w="[Request] Set country for modal window",x="[getFailure] Get failure",S=function(e){return{type:E,payload:e}},O=function(e){return{type:x,payload:e}},I={currentRequestId:0,infoAboutRequestCountry:[],countryForModalWindow:{}},N="[Input] Set input value in reducer",k=function(e){return{type:N,payload:e}},j={inputValue:""},z="[Modal] Set modal value in reducer",q=function(e){return{type:z,payload:e}},C={modalValue:!1},R="[Modal] Set font size in store",J={fontSize:!1},A=Object(s.combineReducers)({locale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(p.a)({},e,{locale:t.payload});default:return e}},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(p.a)({},e,{currentRequestId:t.payload});case E:return Object(p.a)({},e,{infoAboutRequestCountry:t.payload});case w:return Object(p.a)({},e,{countryForModalWindow:t.payload});default:return e}},input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(p.a)({},e,{inputValue:t.payload});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(p.a)({},e,{modalValue:t.payload});default:return e}},styles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(p.a)({},e,{fontSize:t.payload});default:return e}}}),B=n(12),F=n.n(B),V=n(15),W=n(40),M=n(68),G=n(101),T=function e(){Object(M.a)(this,e)};T.getInfoAboutAllCountries=Object(W.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.getItem("https://restcountries.eu/rest/v2/all")){e.next=5;break}return e.abrupt("return",JSON.parse(localStorage.getItem("https://restcountries.eu/rest/v2/all")||"[]"));case 5:return e.next=7,G.get("https://restcountries.eu/rest/v2/all");case 7:return t=e.sent,localStorage.setItem("https://restcountries.eu/rest/v2/all",JSON.stringify(t.data)),e.abrupt("return",t.data);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),T.getInfoCountryByShortName=function(){var e=Object(W.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.getItem("https://restcountries.eu/rest/v2/name/".concat(t))){e.next=5;break}return e.abrupt("return",JSON.parse(localStorage.getItem("https://restcountries.eu/rest/v2/name/".concat(t))||"[]"));case 5:return e.next=7,G.get("https://restcountries.eu/rest/v2/name/".concat(t));case 7:return n=e.sent,localStorage.setItem("https://restcountries.eu/rest/v2/name/".concat(t),JSON.stringify(n.data)),e.abrupt("return",n.data);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),T.getInfoCountryByFullName=function(){var e=Object(W.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.getItem("https://restcountries.eu/rest/v2/name/".concat(t,"?fullText=true"))){e.next=5;break}return e.abrupt("return",JSON.parse(localStorage.getItem("https://restcountries.eu/rest/v2/name/".concat(t,"?fullText=true"))||"[]"));case 5:return e.next=7,G.get("https://restcountries.eu/rest/v2/name/".concat(t,"?fullText=true"));case 7:return n=e.sent,localStorage.setItem("https://restcountries.eu/rest/v2/name/".concat(t,"?fullText=true"),JSON.stringify(n.data)),e.abrupt("return",n.data);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),T.getInfoCountryByCode=function(){var e=Object(W.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.getItem("https://restcountries.eu/rest/v2/alpha/".concat(t))){e.next=5;break}return e.abrupt("return",JSON.parse(localStorage.getItem("https://restcountries.eu/rest/v2/alpha/".concat(t))||"[]"));case 5:return e.next=7,G.get("https://restcountries.eu/rest/v2/alpha/".concat(t));case 7:return n=e.sent,localStorage.setItem("https://restcountries.eu/rest/v2/alpha/".concat(t),JSON.stringify(n.data)),e.abrupt("return",n.data);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),T.getInfoCountryByCurrency=function(){var e=Object(W.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.getItem("https://restcountries.eu/rest/v2/currency/".concat(t))){e.next=5;break}return e.abrupt("return",JSON.parse(localStorage.getItem("https://restcountries.eu/rest/v2/currency/".concat(t))||"[]"));case 5:return e.next=7,G.get("https://restcountries.eu/rest/v2/currency/".concat(t));case 7:return n=e.sent,localStorage.setItem("https://restcountries.eu/rest/v2/currency/".concat(t),JSON.stringify(n.data)),e.abrupt("return",n.data);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();var L=F.a.mark(Q),P=F.a.mark(U),D=F.a.mark(X),K=F.a.mark(Y),$=F.a.mark(Z),H=F.a.mark(ee);function Q(){var e;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.getInfoAboutAllCountries();case 3:return e=t.sent,t.next=6,Object(V.a)(S(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(V.a)(O(t.t0));case 12:case"end":return t.stop()}}),L,null,[[0,8]])}function U(e){var t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T.getInfoCountryByShortName(e.payload);case 3:return t=n.sent,n.next=6,Object(V.a)(S(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(V.a)(O(n.t0));case 12:case"end":return n.stop()}}),P,null,[[0,8]])}function X(e){var t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T.getInfoCountryByFullName(e.payload);case 3:return t=n.sent,n.next=6,Object(V.a)(S(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(V.a)(O(n.t0));case 12:case"end":return n.stop()}}),D,null,[[0,8]])}function Y(e){var t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T.getInfoCountryByCode(e.payload);case 3:return t=n.sent,n.next=6,Object(V.a)(S([t]));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(V.a)(O(n.t0));case 12:case"end":return n.stop()}}),K,null,[[0,8]])}function Z(e){var t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T.getInfoCountryByCurrency(e.payload);case 3:return t=n.sent,n.next=6,Object(V.a)(S(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(V.a)(O(n.t0));case 12:case"end":return n.stop()}}),$,null,[[0,8]])}function ee(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.b)(y,Q);case 2:return e.next=4,Object(V.b)(_,U);case 4:return e.next=6,Object(V.b)(b,X);case 6:return e.next=8,Object(V.b)(h,Y);case 8:return e.next=10,Object(V.b)(g,Z);case 10:case"end":return e.stop()}}),H)}var te=n(158),ne=n(52),ae=Object(u.b)((function(e){return{locale:e.locale.locale,fontSize:e.styles.fontSize,modalValue:e.modal.modalValue,countryForModalWindow:e.request.countryForModalWindow}}))((function(e){var t=e.locale,n=e.fontSize,a=e.modalValue,c=e.countryForModalWindow,o=e.dispatch;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(te.a,{component:"div",className:"modal__window__container",onClick:function(e){return o(q(!1))}},r.a.createElement(ne.a,{variant:"h4",className:"modal__window__close_text ".concat(n?"big_font_size":"normal_font_size")},"En"===t?"Click here to close the modal window":"\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044c \u0447\u0442\u043e \u0431\u044b \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),r.a.createElement(te.a,{component:"div",className:"modal__window__container__info",onClick:function(e){return e.stopPropagation()}},r.a.createElement("pre",null,r.a.createElement("code",{className:n?"big_font_size":"normal_font_size"},JSON.stringify(c,null,2))))))})),re=n(153),ce=n(147),oe=n(161),ue=n(72),se=n.n(ue),le=Object(u.b)((function(e){return{locale:e.locale.locale,fontSize:e.styles.fontSize,currentRequestId:e.request.currentRequestId,inputValue:e.input.inputValue}}))((function(e){var t=e.locale,n=e.fontSize,c=e.currentRequestId,o=e.inputValue,u=e.dispatch;Object(a.useEffect)((function(){c||u({type:y})}),[c,u]);var s=function(e){if(!e||"Enter"===e.key){switch(c){case 1:u({type:_,payload:o});break;case 2:u(function(e){return{type:b,payload:e}}(o));break;case 3:u({type:h,payload:o});break;case 4:u({type:g,payload:o});break;default:return}u(k(""))}};return r.a.createElement(ce.a,{className:"header__request__container"},r.a.createElement(se.a,{className:"header__request__container__search_icon",onClick:function(){return s()}}),r.a.createElement(oe.a,{value:o,placeholder:!c&&("En"===t?"Chose request":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")||"En"===t&&"Input data"||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",className:"header__request__container__input ".concat(n?"big_font_size":"normal_font_size"),disabled:!c,onInput:function(e){return function(e){u(k(e.target.value))}(e)},onKeyPress:function(e){return s(e)}}))})),ie=n(149),pe=n(150),fe=n(157),me=n(152),de=n(148),ve=n(162),ye=Object(de.a)((function(e){return Object(ve.a)({select:{"&:before":{borderColor:"white"},"& div":{color:"white"},"&:after":{borderColor:"white"}},icon:{fill:"white"}})})),_e=n(73),be=n.n(_e),he=n(74),ge=n.n(he),Ee=Object(u.b)((function(e){return{locale:e.locale.locale,fontSize:e.styles.fontSize}}))((function(e){var t=e.locale,n=e.fontSize,c=e.dispatch,o=ye();Object(a.useEffect)((function(){var e=localStorage.getItem("locale");e&&c(m(e))}),[c]);return r.a.createElement(ce.a,{className:"header__version__container"},r.a.createElement(ie.a,{variant:"contained",color:"primary",onClick:function(){return c({type:R,payload:!n})}},!n&&r.a.createElement(be.a,{className:"header__version__container__view"})||r.a.createElement(ge.a,{className:"header__version__container__view"})),r.a.createElement(pe.a,{className:"header__version__container__Language"},r.a.createElement(fe.a,{className:"".concat(o.select," ").concat(n?"big_font_size":"normal_font_size"),inputProps:{classes:{icon:o.icon}},value:t,onChange:function(e){return function(e){c(m(e.target.value)),localStorage.setItem("locale",e.target.value)}(e)}},r.a.createElement(me.a,{className:n?"big_font_size":"normal_font_size",value:"En"},"En"),r.a.createElement(me.a,{className:n?"big_font_size":"normal_font_size",value:"Ru"},"Ru"))))})),we=function(){return r.a.createElement(re.a,{className:"header"},r.a.createElement(le,null),r.a.createElement(Ee,null))},xe=n(151),Se=n(123),Oe=n(154),Ie=function(e){var t=e.item,n=e.dispatch,a=e.locale,c=e.id,o=e.currentRequest,u=e.fontSize;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se.a,{className:"card_request__container"},r.a.createElement(ie.a,{variant:o?"contained":"text",color:"primary",onClick:function(){return n({type:v,payload:c})&&n(S([]))},className:u?"big_font_size":"normal_font_size"},r.a.createElement(ne.a,{variant:"button"},"En"===a?"Name request:":"\u0418\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),r.a.createElement(ne.a,{variant:"h4"},t))),r.a.createElement(Oe.a,{variant:"inset",component:"li"}))},Ne=[["all","\u0432\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u044b"],["name","\u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0438\u043c\u044f"],["fullName","\u043f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"],["code","\u043a\u043e\u0434 \u0441\u0442\u0440\u0430\u043d\u044b"],["currency","\u0432\u0430\u043b\u044e\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u044b"]],ke=Object(u.b)((function(e){return{locale:e.locale.locale,fontSize:e.styles.fontSize,currentRequestId:e.request.currentRequestId}}))((function(e){var t=e.locale,n=e.fontSize,a=e.currentRequestId,c=e.dispatch;return r.a.createElement(te.a,{component:"div",display:"grid",className:"list_request__container"},r.a.createElement(xe.a,{className:"list_request__container__list"},Ne.map((function(e,o){return r.a.createElement(Ie,{key:o,item:"En"===t&&e[0]||e[1],dispatch:c,locale:t,id:o,currentRequest:o===a,fontSize:n})}))))})),je=n(155),ze=n(163),qe=n(156),Ce=[["Wait!","\u041e\u0436\u0438\u0434\u0430\u0439\u0442\u0435!"],["Input short name country please and press enter","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u044b \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0432\u0432\u043e\u0434 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"],["Input full name country please and press enter","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u044b \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0432\u0432\u043e\u0434 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"],["Input code country please and press enter","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0441\u0442\u0440\u0430\u043d\u044b \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0432\u0432\u043e\u0434 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"],["Input currency country please and press enter","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u044b \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0432\u0432\u043e\u0434 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"]],Re=Object(u.b)((function(e){return{locale:e.locale.locale,fontSize:e.styles.fontSize,infoAboutRequestCountry:e.request.infoAboutRequestCountry,currentRequestId:e.request.currentRequestId}}))((function(e){var t=e.locale,n=e.fontSize,a=e.infoAboutRequestCountry,c=e.currentRequestId,o=e.dispatch;return r.a.createElement(xe.a,{component:"div",className:"response__info__container"},a&&a.length>0&&a.map((function(e,c){return r.a.createElement(Se.a,{key:c,button:!0,onClick:function(){var e;o(q(!0))&&o((e=a[c],{type:w,payload:e}))},className:"response__info__container__item"},r.a.createElement(je.a,null,r.a.createElement(ze.a,{alt:"Avatar}",src:e.flag})),r.a.createElement(qe.a,{className:n?"big_font_size":"normal_font_size",primary:e.name,secondary:"En"===t?"Name country":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u044b"}),r.a.createElement(qe.a,{className:n?"big_font_size":"normal_font_size",primary:"".concat(e.alpha2Code," ").concat(e.alpha3Code),secondary:"En"===t?"Country codes":"\u041a\u043e\u0434\u044b \u0441\u0442\u0440\u0430\u043d\u044b"}),r.a.createElement(qe.a,{className:n?"big_font_size":"normal_font_size",primary:e.currencies[0].code,secondary:"En"===t?"Country currency":"\u0412\u0430\u043b\u044e\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u044b"}))}))||r.a.createElement(ne.a,{variant:"h4",className:n?"big_font_size":"normal_font_size"},"En"===t&&Ce[c][0]||Ce[c][1]))})),Je=n(159),Ae=Object(i.a)(),Be=Object(s.createStore)(A,Object(l.composeWithDevTools)({trace:!0,traceLimit:25})(Object(s.applyMiddleware)(Ae)));Ae.run(ee);var Fe=function(){return r.a.createElement(u.a,{store:Be},r.a.createElement(Je.a,null,r.a.createElement(te.a,{component:"div",className:"wrapper"},r.a.createElement(ae,null),r.a.createElement(we,null),r.a.createElement(te.a,{component:"div",className:"main"},r.a.createElement(ke,null),r.a.createElement(Re,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ve=document.getElementById("root");o.a.render(r.a.createElement(Fe,null),Ve),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,n){e.exports=n(120)},93:function(e,t,n){},94:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.e50400c7.chunk.js.map