(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,n){var o=n("fc6a"),i=n("241c").f,r={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==r.call(t)?s(t):i(o(t))}},"0841":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Notes")]),t.edit?n("form",{on:{submit:function(e){return e.preventDefault(),t.editNote(t.noteEdit)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.noteEdit.title,expression:"noteEdit.title"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.noteEdit.title},on:{input:function(e){e.target.composing||t.$set(t.noteEdit,"title",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.noteEdit.description,expression:"noteEdit.description"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.noteEdit.description},on:{input:function(e){e.target.composing||t.$set(t.noteEdit,"description",e.target.value)}}}),n("b-button",{staticClass:"btn-warning my-2",attrs:{type:"submit"}},[t._v(" edit")]),n("b-button",{staticClass:"my-2",attrs:{type:"submit"},on:{click:function(e){t.edit=!1}}},[t._v(" cancel")])],1):t._e(),t.edit?t._e():n("form",{on:{submit:function(e){return e.preventDefault(),t.addNote()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.description,expression:"note.description"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.note.description},on:{input:function(e){e.target.composing||t.$set(t.note,"description",e.target.value)}}}),n("b-button",{staticClass:"btn-success my-2",attrs:{type:"submit"}},[t._v(" add")])],1),n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.notes,(function(e,o){return n("tr",{key:o},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e._id))]),n("td",[t._v(t._s(e.title))]),n("td",[t._v(t._s(e.description))]),n("td",[n("b-button",{staticClass:"btn-danger btn-sm",on:{click:function(n){return t.killNote(e._id)}}},[t._v(" delete")]),n("b-button",{staticClass:"btn-warning btn-sm",on:{click:function(n){return t.editNoteActivate(e._id)}}},[t._v(" edit")])],1)])})),0)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("title")]),n("th",{attrs:{scope:"col"}},[t._v("description")]),n("th",{attrs:{scope:"col"}},[t._v("action")])])])}],r=(n("a4d3"),n("e01a"),n("c740"),n("a434"),{data:function(){return{notes:[],note:{title:"",description:""},edit:!1,noteEdit:{}}},created:function(){this.showNotes()},methods:{showNotes:function(){var t=this;this.axios.get("/").then((function(e){t.notes=e.data})).catch((function(t){console.log(t.response)}))},addNote:function(){var t=this;this.axios.post("/",this.note).then((function(e){t.notes.push(e.data),t.note.title="",t.note.description=""})).catch((function(t){console.log(t.response)}))},killNote:function(t){var e=this;this.axios.delete("/".concat(t)).then((function(t){var n=e.notes.findIndex((function(e){return e._id===t.data.id}));e.notes.splice(n,1)})).catch((function(t){console.log(t.response)}))},editNoteActivate:function(t){var e=this;this.edit=!0,this.axios.get("/".concat(t)).then((function(t){e.noteEdit=t.data})).catch((function(t){console.log(t.response)}))},editNote:function(t){var e=this;this.axios.put("/".concat(t._id),t).then((function(t){var n=e.notes.findIndex((function(e){return e._id===t.data._id}));e.notes[n].title=t.data.title,e.notes[n].description=t.data.description,e.edit=!1})).catch((function(t){console.log(t.response)}))}}}),c=r,s=n("2877"),a=Object(s["a"])(c,o,i,!1,null,null,null);e["default"]=a.exports},"1dde":function(t,e,n){var o=n("d039"),i=n("b622"),r=n("2d00"),c=i("species");t.exports=function(t){return r>=51||!o((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var o=n("861d"),i=n("e8b5"),r=n("b622"),c=r("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var o=n("428f"),i=n("5135"),r=n("e538"),c=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});i(e,t)||c(e,t,{value:r.f(t)})}},8418:function(t,e,n){"use strict";var o=n("c04e"),i=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var c=o(e);c in t?i.f(t,c,r(0,n)):t[c]=n}},a434:function(t,e,n){"use strict";var o=n("23e7"),i=n("23cb"),r=n("a691"),c=n("50c4"),s=n("7b0b"),a=n("65f0"),u=n("8418"),f=n("1dde"),l=f("splice"),d=Math.max,p=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var n,o,f,l,b,m,y=s(this),g=c(y.length),w=i(t,g),_=arguments.length;if(0===_?n=o=0:1===_?(n=0,o=g-w):(n=_-2,o=p(d(r(e),0),g-w)),g+n-o>v)throw TypeError(h);for(f=a(y,o),l=0;l<o;l++)b=w+l,b in y&&u(f,l,y[b]);if(f.length=o,n<o){for(l=w;l<g-o;l++)b=l+o,m=l+n,b in y?y[m]=y[b]:delete y[m];for(l=g;l>g-o+n;l--)delete y[l-1]}else if(n>o)for(l=g-o;l>w;l--)b=l+o-1,m=l+n-1,b in y?y[m]=y[b]:delete y[m];for(l=0;l<n;l++)y[l+w]=arguments[l+2];return y.length=g-o+n,f}})},a4d3:function(t,e,n){"use strict";var o=n("23e7"),i=n("da84"),r=n("d066"),c=n("c430"),s=n("83ab"),a=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),v=n("825a"),h=n("7b0b"),b=n("fc6a"),m=n("c04e"),y=n("5c6c"),g=n("7c73"),w=n("df75"),_=n("241c"),x=n("057f"),S=n("7418"),O=n("06cf"),E=n("9bf2"),N=n("d1e7"),j=n("9112"),C=n("6eeb"),P=n("5692"),k=n("f772"),A=n("d012"),$=n("90e3"),I=n("b622"),T=n("e538"),D=n("746f"),J=n("d44e"),M=n("69f3"),F=n("b727").forEach,B=k("hidden"),Q="Symbol",W="prototype",q=I("toPrimitive"),z=M.set,G=M.getterFor(Q),H=Object[W],K=i.Symbol,L=r("JSON","stringify"),R=O.f,U=E.f,V=x.f,X=N.f,Y=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),nt=P("wks"),ot=i.QObject,it=!ot||!ot[W]||!ot[W].findChild,rt=s&&f((function(){return 7!=g(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=R(H,e);o&&delete H[e],U(t,e,n),o&&t!==H&&U(H,e,o)}:U,ct=function(t,e){var n=Y[t]=g(K[W]);return z(n,{type:Q,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},at=function(t,e,n){t===H&&at(Z,e,n),v(t);var o=m(e,!0);return v(n),l(Y,o)?(n.enumerable?(l(t,B)&&t[B][o]&&(t[B][o]=!1),n=g(n,{enumerable:y(0,!1)})):(l(t,B)||U(t,B,y(1,{})),t[B][o]=!0),rt(t,o,n)):U(t,o,n)},ut=function(t,e){v(t);var n=b(e),o=w(n).concat(vt(n));return F(o,(function(e){s&&!lt.call(n,e)||at(t,e,n[e])})),t},ft=function(t,e){return void 0===e?g(t):ut(g(t),e)},lt=function(t){var e=m(t,!0),n=X.call(this,e);return!(this===H&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,B)&&this[B][e])||n)},dt=function(t,e){var n=b(t),o=m(e,!0);if(n!==H||!l(Y,o)||l(Z,o)){var i=R(n,o);return!i||!l(Y,o)||l(n,B)&&n[B][o]||(i.enumerable=!0),i}},pt=function(t){var e=V(b(t)),n=[];return F(e,(function(t){l(Y,t)||l(A,t)||n.push(t)})),n},vt=function(t){var e=t===H,n=V(e?Z:b(t)),o=[];return F(n,(function(t){!l(Y,t)||e&&!l(H,t)||o.push(Y[t])})),o};if(a||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),n=function(t){this===H&&n.call(Z,t),l(this,B)&&l(this[B],e)&&(this[B][e]=!1),rt(this,e,y(1,t))};return s&&it&&rt(H,e,{configurable:!0,set:n}),ct(e,t)},C(K[W],"toString",(function(){return G(this).tag})),C(K,"withoutSetter",(function(t){return ct($(t),t)})),N.f=lt,E.f=at,O.f=dt,_.f=x.f=pt,S.f=vt,T.f=function(t){return ct(I(t),t)},s&&(U(K[W],"description",{configurable:!0,get:function(){return G(this).description}}),c||C(H,"propertyIsEnumerable",lt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:K}),F(w(nt),(function(t){D(t)})),o({target:Q,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=K(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),o({target:"Object",stat:!0,forced:!a,sham:!s},{create:ft,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:dt}),o({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),o({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),L){var ht=!a||f((function(){var t=K();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}));o({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var o,i=[t],r=1;while(arguments.length>r)i.push(arguments[r++]);if(o=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!st(e))return e}),i[1]=e,L.apply(null,i)}})}K[W][q]||j(K[W],q,K[W].valueOf),J(K,Q),A[B]=!0},b727:function(t,e,n){var o=n("0366"),i=n("44ad"),r=n("7b0b"),c=n("50c4"),s=n("65f0"),a=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(v,h,b,m){for(var y,g,w=r(v),_=i(w),x=o(h,b,3),S=c(_.length),O=0,E=m||s,N=e?E(v,S):n||d?E(v,0):void 0;S>O;O++)if((p||O in _)&&(y=_[O],g=x(y,O,w),t))if(e)N[O]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:a.call(N,y)}else switch(t){case 4:return!1;case 7:a.call(N,y)}return l?-1:u||f?f:N}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c740:function(t,e,n){"use strict";var o=n("23e7"),i=n("b727").findIndex,r=n("44d2"),c="findIndex",s=!0;c in[]&&Array(1)[c]((function(){s=!1})),o({target:"Array",proto:!0,forced:s},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},e01a:function(t,e,n){"use strict";var o=n("23e7"),i=n("83ab"),r=n("da84"),c=n("5135"),s=n("861d"),a=n("9bf2").f,u=n("e893"),f=r.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var v=p.toString,h="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;a(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=v.call(t);if(c(l,t))return"";var n=h?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var o=n("b622");e.f=o},e8b5:function(t,e,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},f820:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],r=n("2877"),c={},s=Object(r["a"])(c,o,i,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=about.2213c275.js.map