(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(11),u=t.n(r),o=t(12),i=t(2),l=function(e){var n=e.value,t=e.handler;return c.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4: ",c.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.submitHandler,t=e.name,a=e.nameChangeHandler,r=e.number,u=e.numberChangeHandler;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"nimi: ",c.a.createElement("input",{value:t,onChange:a})),c.a.createElement("div",null,"numero: ",c.a.createElement("input",{value:r,onChange:u})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},m=function(e){var n=e.persons,t=e.deleteHandler;return n.map(function(e){return c.a.createElement("p",{key:e.id},e.name," ",e.number," ",c.a.createElement("button",{onClick:function(){return t(e)}},"poista"))})},f=function(e){if(null===e.notification)return null;var n=e.notification,t=n.message,a=n.type;return c.a.createElement("div",{className:"notification ".concat(a)},t)},d=t(3),p=t.n(d),v="/api/persons",b=function(){return console.log("getAll"),p.a.get(v).then(function(e){return e.data})},h=function(e){return console.log("create",e),p.a.post(v,e).then(function(e){return e.data})},E=function(e){return console.log("update",e),p.a.put("".concat(v,"/").concat(e.id),e).then(function(e){return e.data})},g=function(e){return console.log("remove",e),p.a.delete("".concat(v,"/").concat(e)).then(function(e){return e})},j=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),p=d[0],v=d[1],j=Object(a.useState)(""),O=Object(i.a)(j,2),w=O[0],y=O[1],C=Object(a.useState)(""),k=Object(i.a)(C,2),H=k[0],S=k[1],T=Object(a.useState)([]),J=Object(i.a)(T,2),L=J[0],N=J[1],P=Object(a.useState)(null),x=Object(i.a)(P,2),A=x[0],B=x[1],D=Object(a.useState)(null),I=Object(i.a)(D,2),K=I[0],M=I[1];Object(a.useEffect)(function(){b().then(function(e){r(e),q("Moro! Tiedot haettu (".concat(e.length," kpl)"))}).catch(function(e){q("Tietojen haku ep\xe4onnistui","error")})},[]);var q=function(e,n){clearTimeout(K),B({message:e,type:n}),M(setTimeout(function(){B(null),M(null)},5e3))};return c.a.createElement("div",null,c.a.createElement("h1",null,"Puhelinluettelo"),c.a.createElement(f,{notification:A}),c.a.createElement(l,{value:H,handler:function(e){S(e.target.value),N(t.filter(function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}))}}),c.a.createElement("h2",null,"lis\xe4\xe4 uusi"),c.a.createElement(s,{submitHandler:function(e){e.preventDefault();var n=t.find(function(e){return e.name===p});if(n){if(window.confirm("".concat(n.name," on jo olemaassa. Korvataanko vanha numero uudella?"))){var a=Object(o.a)({},n,{number:w});E(a).then(function(e){r(t.map(function(n){return n.id===e.id?e:n})),q("".concat(a.name," p\xe4ivitetty"),"success"),v(""),y("")}).catch(function(e){q("".concat(a.name," p\xe4ivitys ep\xe4onnisui"),"error")})}}else{var c={name:p,number:w};h(c).then(function(e){r(t.concat(e)),q("".concat(c.name," lis\xe4tty"),"success"),v(""),y("")}).catch(function(e){q("".concat(c.name," lis\xe4ys ep\xe4onnisui"),"error")})}},name:p,nameChangeHandler:function(e){return v(e.target.value)},number:w,numberChangeHandler:function(e){return y(e.target.value)}}),c.a.createElement("h2",null,"Numerot"),c.a.createElement(m,{persons:""!==H?L:t,deleteHandler:function(e){window.confirm("Poistetaanko ".concat(e.name," ?"))&&g(e.id).then(function(){r(t.filter(function(n){return n.id!==e.id})),q("".concat(e.name," poistettu"),"success")}).catch(function(n){404===n.response.status?(q("".concat(e.name," oli jo poistettu!"),"error"),r(t.filter(function(n){return n.id!==e.id}))):q("".concat(e.name," poisto ep\xe4onnistui!"),"error")})}}))};t(38);u.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b3be0473.chunk.js.map