(window["webpackJsonphabit-geek-web"]=window["webpackJsonphabit-geek-web"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/001-burglar.fad4fb81.svg"},25:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/002-woman.972480c3.svg"},35:function(e,t,a){e.exports=a.p+"static/media/003-superhero.30672cbf.svg"},36:function(e,t,a){e.exports=a.p+"static/media/004-robot.4a1aa59e.svg"},37:function(e,t,a){e.exports=a.p+"static/media/005-dragon.ffaf3a24.svg"},38:function(e,t,a){e.exports=a.p+"static/media/006-cyborg.605d5cd3.svg"},40:function(e,t,a){e.exports=a(86)},51:function(e,t,a){var r={"./1FullWeek.json":52,"./3FullWeeks.json":53,"./PartialWeeks.json":54};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=51},52:function(e){e.exports=JSON.parse('{"weeks":{"y2019w3":{"a_OneWeek":{"name":"a_OneWeek","type":"Health","frequency":"3","habitSucceded":true,"checked":[true,false,false,true,true,false,false]},"b_Full":{"name":"b_Full","type":"Career","frequency":"5","habitFailed":true,"checked":[false,true,true,false,true,false,false]}}},"currentWeek":"y2019w3"}')},53:function(e){e.exports=JSON.parse('{"weeks":{"y2019w2":{"a_Previous":{"name":"a_Previous","type":"Health","frequency":"4","habitSucceded":true,"checked":[true,false,false,true,true,true,false]},"b_FullWeek":{"name":"b_FullWeek","type":"Career","frequency":"4","habitFailed":true,"checked":[false,true,true,false,true,false,false]}},"y2019w1":{"a_Previous":{"name":"a_Previous","type":"Health","frequency":"4","habitSucceded":true,"checked":[true,false,false,true,true,true,false]},"b_FullWeek":{"name":"b_FullWeek","type":"Career","frequency":"4","habitFailed":true,"checked":[false,true,true,false,true,false,false]}},"y2019w3":{"a_Actual":{"name":"a_Actual","type":"Health","frequency":"3","habitSucceded":true,"checked":[true,false,false,true,true,false,false]},"b_FullWeek":{"name":"b_FullWeek","type":"Career","frequency":"5","habitFailed":true,"checked":[false,true,true,false,true,false,false]}}},"currentWeek":"y2019w3","previousWeek":"y2019w2"}')},54:function(e){e.exports=JSON.parse('{"weeks":{"y2019w1":{"a_Partial":{"name":"a_Partial","type":"Health","frequency":"3","habitSucceded":true,"checked":[true,false,false,true,true,false,false]},"b_Week":{"name":"b_Week","type":"Career","frequency":"5","habitFailed":true,"checked":[false,true,true,false,true,false,false]}},"y2019w2":{},"y2019w3":{"a_Partial":{"name":"a_Partial","type":"Health","frequency":"3","habitSucceded":true,"checked":[true,false,false,true,true,false,false]},"b_Week":{"name":"b_Week","type":"Career","frequency":"5","habitFailed":true,"checked":[false,true,true,false,true,false,false]}}},"currentWeek":"y2019w3","previousWeek":"y2019w2"}')},77:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),i=a.n(c),o=a(7),l=a(27),s=a(8),u=a(18),b=a(28),m=a.n(b),d=a(3),f=a(2),p=a(12),h=function(e){return"".concat(e.getDate(),"/").concat(w(e))},y=function(e){var t=e||new Date;t.setHours(0,0,0,0);var a=new Date(t.getFullYear(),0,1),r=Math.ceil(((t-a)/864e5+a.getDay())/7);return"y".concat(t.getFullYear(),"w").concat(r)},v=function(){var e=new Date;return 0===e.getDay()?6:e.getDay()-1},k=function(e){var t=function(e){var t=e.substr(1).split("w"),a=Object(d.a)(t,2),r=a[0],n=a[1],c=new Date(r,0,1+7*(n-1)),i=c.getDay(),o=c;i<=4?o.setDate(c.getDate()-c.getDay()+1):o.setDate(c.getDate()+8-c.getDay());var l=new Date(o);return l.setDate(l.getDate()+6),{weekStart:o,weekEnd:l}}(e),a=t.weekStart,r=t.weekEnd,n=e.split("w")[1];return"".concat(p.a.t("week-description")," ").concat(n,": ").concat(h(a)," - ").concat(h(r))},w=function(e){return p.a.t("date-months-short",{returnObjects:!0})[e.getMonth()]},O=function(e,t){var a=v()===t;return e===y()&&a};function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(){return"undefined"!==typeof window&&window.Cypress?a(51)("./".concat(window.Cypress.habitMock,".json")):{weeks:Object(f.a)({},y(),{}),currentWeek:y()}},_=function(e,t,a){var r=v(),n=t[r]?6-r:7-r,c=t.filter((function(e){return e})).length,i=e<=c;return{habitSucceded:i,habitFailed:a?!i:e>c+n}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j(),t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"START_NEW_WEEK":var n,c={},i={};Object.keys(e.weeks[e.currentWeek]).forEach((function(t){var a=e.weeks[e.currentWeek][t],r=a.name,n=a.type,o=a.frequency,l=a.checked,s=_(o,l,!0),u=s.habitSucceded,b=s.habitFailed;i[t]=E({},a,{habitSucceded:u,habitFailed:b}),c[t]={name:r,type:n,frequency:o,checked:[!1,!1,!1,!1,!1,!1,!1]}}));var o=y(),l=o.split("w"),s=Object(d.a)(l,2),u=s[0],b=s[1],m="".concat(u,"w").concat(b-1),p=e.weeks[m]?m:void 0;return E({},e,{currentWeek:o,previousWeek:p,weeks:E({},e.weeks,(n={},Object(f.a)(n,e.currentWeek,i),Object(f.a)(n,o,c),n))});case"SAVE_HABIT":var h=r.id?e.weeks[e.currentWeek][r.id].checked:[!1,!1,!1,!1,!1,!1,!1],v=r.name.trim(),k=r.frequency,w=r.type,O=_(r.frequency,h),g=O.habitSucceded,N=O.habitFailed,S=E({},e.weeks[e.currentWeek],Object(f.a)({},v,{name:v,frequency:k,type:w,checked:h,habitSucceded:g,habitFailed:N}));return r.id&&r.id!==v&&delete S[r.id],E({},e,{weeks:E({},e.weeks,Object(f.a)({},e.currentWeek,S))});case"DELETE_HABIT":var D=E({},e.weeks[e.currentWeek]);return delete D[r.id.trim()],E({},e,{weeks:E({},e.weeks,Object(f.a)({},e.currentWeek,D))});case"TOGGLE_DAY_HABIT":var H=r.week,W=e.weeks[H][r.name].frequency,P=e.weeks[H][r.name].checked.map((function(e,t){return t!==r.day?e:!e})),q=r.week!==e.currentWeek,F=_(W,P,q),C=F.habitSucceded,A=F.habitFailed;return E({},e,{weeks:E({},e.weeks,Object(f.a)({},H,E({},e.weeks[H],Object(f.a)({},r.name,E({},e.weeks[H][r.name],{habitSucceded:C,habitFailed:A,checked:e.weeks[H][r.name].checked.map((function(e,t){return t!==r.day?e:!e}))})))))});default:return e}};function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={name:"",avatar:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"REGISTER_USER":var n=r.name,c=r.avatar;return D({},e,{name:n,avatar:c});default:return e}};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var q={0:function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)}},F=Object(s.b)({habits:N,user:W}),C={key:"root",storage:m.a,version:0,migrate:Object(u.a)(q)},A=Object(u.b)(C,F),T=Object(s.c)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),x=Object(u.c)(T),R=a(5),U=a(32),B=a.n(U);p.a.use(B.a).use(R.a).init({resources:{en:{translation:{"nav-my-habits":"My Habits","nav-history":"History","nav-profile":"Profile","my-habits-title":"How is the current week going{{username}}?","my-habits-new-habit":"Add new habit!","save-habit-title":"New habit","save-habit-name":"Name:","save-habit-name-validation":"Eerg... we kind of need this one, right?","save-habit-type":"Type:","save-habit-type-validation":"Dude, this field is mandatory.","save-habit-type-options":[{key:"Health",label:"Health"},{key:"Social",label:"Social"},{key:"Career",label:"Career"},{key:"Hobbies",label:"Hobbies"}],"save-habit-frequency":"Frequency:","save-habit-frequency-validation":"Funny, that's an easy way to ace it!","save-habit-save":"Let's start!","save-habit-delete":"Delete this!","save-habit-cancel":"Hmm... Changed my mind!","history-title":"My past weeks:","history-title-empty-data":"You just started, come back next week!","profile-title":"Super hero who?","profile-name":"Name:","profile-name-validation":"What an honor! The non-named habit geek among us?","profile-avatar":"Avatar:","profile-avatar-alt-desc":"Avatar, not really important. Don't worry!","profile-save":"Save!","week-description":"Week","date-days-short":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"date-months-short":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},pt:{translation:{"nav-my-habits":"Meus H\xe1bitos","nav-history":"Hist\xf3rico","nav-profile":"Perfil","my-habits-title":"Como a semana atual est\xe1 indo,{{username}}?","my-habits-new-habit":"Criar novo h\xe1bito!","save-habit-title":"Novo h\xe1bito","save-habit-name":"Nome:","save-habit-name-validation":"Umm... esse campo meio que \xe9 importante, n\xe3o?","save-habit-type":"Tipo:","save-habit-type-validation":"Campo obrigat\xf3rio.","save-habit-type-options":[{key:"Health",label:"Sa\xfade"},{key:"Social",label:"Social"},{key:"Career",label:"Carreira"},{key:"Hobbies",label:"Hobbies"}],"save-habit-frequency":"Frequ\xeancia:","save-habit-frequency-validation":"H\xe1bito sem frequ\xeancia? A\xed fica f\xe1cil, n\xe9?","save-habit-save":"Bora!","save-habit-delete":"Pode apagar!","save-habit-cancel":"Pera\xed! Quero voltar!","history-title":"Esse \xe9 o seu progresso at\xe9 agora:","history-title-empty-data":"Aparece aqui na semana que vem!","profile-title":"Quem \xe9 voc\xea na fila do p\xe3o?","profile-name":"Nome:","profile-name-validation":"Que honra! Um habit geeker que-n\xe3o-pode-ser-nomeado no meio de n\xf3s?","profile-avatar":"Avatar:","profile-avatar-alt-desc":"Avatar, n\xe3o \xe9 muito importante. N\xe3o se preocupe!","profile-save":"Salvar!","week-description":"Semana","date-days-short":["Seg","Ter","Qua","Qui","Sex","Sab","Dom"],"date-months-short":["Jan","FeV","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]}}},fallbackLng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});p.a,a(25);var M=a(9),I=(a(77),a(22)),J=a.n(I),V=a(34),G=a.n(V),L=a(35),z=a.n(L),Q=a(36),Y=a.n(Q),X=a(37),K=a.n(X),Z=a(38),$=a.n(Z),ee=[J.a,G.a,z.a,Y.a,K.a,$.a],te=function(e){var t=e.name,a=e.avatar,c=e.registerUser,i=Object(r.useState)(t),o=Object(d.a)(i,2),l=o[0],s=o[1],u=Object(r.useState)(a||J.a),b=Object(d.a)(u,2),m=b[0],f=b[1],p=Object(r.useState)(!1),h=Object(d.a)(p,2),y=h[0],v=h[1],k=Object(R.b)().t;return n.a.createElement("form",{className:"mobile-size-container ".concat(y?"was-validated":""),onSubmit:function(e){e.preventDefault(),v(!0),e.target.checkValidity()&&(c(l,m),Object(M.c)("/habits"))},noValidate:!0},n.a.createElement("h2",null,k("profile-title")),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"profile-name"},k("profile-name")),n.a.createElement("input",{id:"profile-name",className:"form-control",value:l,onChange:function(e){return s(e.target.value)},required:!0}),n.a.createElement("div",{className:"invalid-feedback"},k("profile-name-validation"))),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"profile-avatar"},k("profile-avatar")),n.a.createElement("div",{className:"input-group profile__avatar-container"},ee.map((function(e,t){return n.a.createElement("img",{key:"avatar-".concat(t),onClick:function(){return f(e)},src:e,alt:k("profile-avatar-alt-desc"),className:"profile__avatar ".concat(e===m?"profile__avatar--selected":"")})})))),n.a.createElement("hr",{className:"mb-4"}),n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block"},k("profile-save")))},ae={registerUser:function(e,t){return{type:"REGISTER_USER",payload:{name:e,avatar:t}}}},re=Object(o.b)((function(e){var t=e.user;return{name:t.name,avatar:t.avatar}}),ae)(te),ne=function(e){var t=e.id,a=e.name,c=void 0===a?"":a,i=e.type,o=void 0===i?"":i,l=e.frequency,s=void 0===l?"":l,u=e.saveHabit,b=e.deleteHabit,m=e.onGoBack,f=Object(r.useState)(c),p=Object(d.a)(f,2),h=p[0],y=p[1],v=Object(r.useState)(o),k=Object(d.a)(v,2),w=k[0],O=k[1],g=Object(r.useState)(s),E=Object(d.a)(g,2),j=E[0],_=E[1],N=Object(r.useState)(!1),S=Object(d.a)(N,2),D=S[0],H=S[1],W=Object(R.b)().t,P=W("save-habit-type-options",{returnObjects:!0});return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),H(!0),e.target.checkValidity()&&(u(t,h,w,j),m())},className:"mobile-size-container ".concat(D?"was-validated":""),noValidate:!0},n.a.createElement("h2",null,W("save-habit-title")),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"new-habit-name"},W("save-habit-name")),n.a.createElement("input",{id:"new-habit-name",className:"form-control",value:h,onChange:function(e){return y(e.target.value)},required:!0}),n.a.createElement("div",{className:"invalid-feedback"},W("save-habit-name-validation"))),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"new-habit-type"},W("save-habit-type")),n.a.createElement("select",{id:"new-habit-type",className:"form-control",value:w,onChange:function(e){return O(e.target.value)},onBlur:function(e){return O(e.target.value)},required:!0},n.a.createElement("option",{value:""}),P.map((function(e){var t=e.key,a=e.label;return n.a.createElement("option",{key:"save-habit-type-option-".concat(t),value:a},a)}))),n.a.createElement("div",{className:"invalid-feedback"},W("save-habit-type-validation"))),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"new-habit-frequency"},W("save-habit-frequency")),n.a.createElement("select",{id:"new-habit-frequency",className:"form-control",value:j,onChange:function(e){return _(e.target.value)},onBlur:function(e){return _(e.target.value)},required:!0},n.a.createElement("option",{value:""}),n.a.createElement("option",{value:"1"},"1x"),n.a.createElement("option",{value:"2"},"2x"),n.a.createElement("option",{value:"3"},"3x"),n.a.createElement("option",{value:"4"},"4x"),n.a.createElement("option",{value:"5"},"5x"),n.a.createElement("option",{value:"6"},"6x"),n.a.createElement("option",{value:"7"},"7x")),n.a.createElement("div",{className:"invalid-feedback"},W("save-habit-frequency-validation"))),n.a.createElement("hr",{className:"mb-4"}),n.a.createElement("button",{className:"btn btn-primary btn-lg btn-block"},W("save-habit-save")),t?n.a.createElement("button",{type:"button",className:"btn btn-danger btn-lg btn-block",onClick:function(){b(t),m()}},W("save-habit-delete")):null,n.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg btn-block",onClick:m},W("save-habit-cancel")))},ce=function(e){var t=e.isReadOnly,a=e.week,r=(0,Object(R.b)().t)("date-days-short",{returnObjects:!0}).map((function(e,t){var r=O(a,t)?"habit-row-frequency__cell--today-header":"";return n.a.createElement("h5",{key:"header-cell-".concat(t),className:"rounded-top habit-row-frequency__cell ".concat(r)},e)}));return n.a.createElement("div",{className:"habit-row__header"},n.a.createElement("div",{className:"habit-row__title"}),n.a.createElement("div",{className:"habit-row-frequency"},r),t?null:n.a.createElement("div",{className:"icon-button"}))},ie=a(17),oe=a(14),le=function(e){var t=e.week,a=e.name,r=e.onUpdateHabit;return t===y()?n.a.createElement("button",{className:"icon-button icon-button__edit btn btn-link",onClick:function(){return r(a)}},n.a.createElement(ie.a,{icon:oe.c})):n.a.createElement("div",{className:"icon-button"})},se=a(39),ue=(a(81),function(e){var t=e.isChecked,a=e.clickHandler,c=e.isDisabled,i=e.isReadOnly;return n.a.createElement(r.Fragment,null,n.a.createElement("label",{className:"toggle"},n.a.createElement("input",{className:"toggle__input",onChange:a,type:"checkbox",checked:t,disabled:!i&&c,"data-readonly":i}),n.a.createElement("span",{className:"toggle__label","data-readonly":i},n.a.createElement("span",{className:"toggle__text"}))))}),be=(a(82),function(e){var t=e.week,a=e.name,r=e.checked,c=e.habitSucceded,i=e.habitFailed,o=e.isReadOnly,l=e.toggleDayHabit,s=v(),u=y(),b=t===u,m=c?"table-success":"",d=i?"table-danger":"";return n.a.createElement("div",{className:"habit-row-frequency ".concat(m," ").concat(d)},Object(se.a)(Array(7).keys()).map((function(e){var c=O(t,e)?"habit-row-frequency__cell--today":"",i=!!b&&s<e;return n.a.createElement("div",{className:"habit-row-frequency__cell ".concat(c),key:"check-".concat(a,"-").concat(e)},n.a.createElement(ue,{clickHandler:function(){return l(t,a,e)},isChecked:r[e],isDisabled:i,isReadOnly:o}))})))}),me=(a(83),function(e){var t=e.week,a=e.habits,r=e.isReadOnly,c=e.toggleDayHabit,i=e.onUpdateHabit;return a.map((function(e,a){var o=e.name,l=e.frequency,s=e.checked,u=e.habitSucceded,b=e.habitFailed;return n.a.createElement("div",{key:"check-container-".concat(a),className:"habit-row"},n.a.createElement("div",{className:"habit-row__title"},n.a.createElement("span",null,"(",l,"x) - ",o)),n.a.createElement(be,{week:t,name:o,checked:s,habitSucceded:u,habitFailed:b,isReadOnly:r,toggleDayHabit:c}),r?null:n.a.createElement(le,{week:t,name:o,onUpdateHabit:i}))}))}),de=function(e){var t=e.week,a=e.habits,r=e.isReadOnly,c=e.onUpdateHabit,i=e.toggleDayHabit;return a.length>0?n.a.createElement("div",{className:"mb-3"},n.a.createElement(ce,{isReadOnly:r,week:t}),n.a.createElement(me,{habits:a,week:t,isReadOnly:r,toggleDayHabit:i,onUpdateHabit:c})):null},fe=function(e){var t=e.week,a=e.isCurrentWeek,r=e.hasPreviousWeek,c=e.toggleWeek,i=function(){return c(!a)},o=function(e,t,a){return n.a.createElement("button",{className:"icon-button icon-button-".concat(e," btn btn-link ").concat(a?"disabled":""),onClick:i},n.a.createElement(ie.a,{icon:t}))};return n.a.createElement("div",{className:"mb-3 d-flex justify-content-center align-items-baseline"},r?o("previous",oe.a,!a):null,n.a.createElement("h5",{className:"dashboard-week-header"},k(t)),r?o("forward",oe.b,a):null)},pe=function(e){var t=e.username,a=e.currentHabits,c=e.previousHabits,i=e.currentWeek,o=e.previousWeek,l=e.onAddNewHabit,s=e.onUpdateHabit,u=e.toggleDayHabit,b=Object(r.useState)(!0),m=Object(d.a)(b,2),f=m[0],p=m[1],h=Object(R.b)().t,y=t?" "+t:t;return n.a.createElement("div",{className:"large-size-container"},n.a.createElement("h2",{className:"mb-3"},h("my-habits-title",{username:y})),n.a.createElement(fe,{week:f?i:o,isCurrentWeek:f,hasPreviousWeek:o,toggleWeek:p}),n.a.createElement(de,{habits:f?a:c,week:f?i:o,toggleDayHabit:u,onUpdateHabit:s}),f?n.a.createElement(r.Fragment,null,n.a.createElement("hr",null),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("button",{className:"btn btn-primary btn-lg",onClick:l},h("my-habits-new-habit")))):null)},he=function(e){var t=e.username,a=e.currentHabits,c=e.previousHabits,i=e.currentWeek,o=e.previousWeek,l=e.saveHabit,s=e.deleteHabit,u=e.toggleDayHabit,b=Object(r.useState)({}),m=Object(d.a)(b,2),f=m[0],p=m[1];if(f.isEditing){var h=f.id?a.filter((function(e){return e.name===f.id}))[0]:{},y=h.name,v=h.frequency,k=h.type;return n.a.createElement(ne,{id:f.id,name:y,frequency:v,type:k,saveHabit:l,deleteHabit:s,onGoBack:function(){return p({})}})}return n.a.createElement(pe,{username:t,currentHabits:a,previousHabits:c,currentWeek:i,previousWeek:o,onAddNewHabit:function(){return p({isEditing:!0})},onUpdateHabit:function(e){return p({isEditing:!0,id:e})},toggleDayHabit:u})};function ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var ve=function(e){return e?Object.keys(e).sort().map((function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ye(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ye(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({name:t},e[t])})):[]},ke={saveHabit:function(e,t,a,r){return{type:"SAVE_HABIT",payload:{id:e,name:t,type:a,frequency:r}}},deleteHabit:function(e){return{type:"DELETE_HABIT",payload:{id:e}}},toggleDayHabit:function(e,t,a){return{type:"TOGGLE_DAY_HABIT",payload:{week:e,name:t,day:a}}}},we=Object(o.b)((function(e){var t=e.habits,a=e.user,r=t.currentWeek,n=t.previousWeek,c=ve(t.weeks[t.currentWeek]),i=ve(t.weeks[t.previousWeek]);return{username:a.name,currentHabits:c,previousHabits:i,currentWeek:r,previousWeek:i.length&&n}}),ke)(he);a(84);var Oe=function(e){var t=Object(R.b)().t,a=function(e){return{className:e.isCurrent?"nav-item nav-link active":"nav-item nav-link"}};return n.a.createElement("header",null,n.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark header"},n.a.createElement(M.a,{className:"navbar-brand",to:"/habits"},"Habit Geek!"),n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(M.a,{getProps:a,to:"/habits"},t("nav-my-habits")),n.a.createElement(M.a,{getProps:a,to:"/history"},t("nav-history")),n.a.createElement(M.a,{getProps:a,to:"/profile"},t("nav-profile")))))};var ge=function(e){var t=e.children;return n.a.createElement(r.Fragment,null,n.a.createElement(Oe,null),t)};a(85);function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var je=function(e){var t=e.weeks,a=Object(r.useState)(Object(f.a)({},t[0]?t[0].week:"empty",!0)),c=Object(d.a)(a,2),i=c[0],o=c[1],l=Object(R.b)().t,s=function(e){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i,Object(f.a)({},e,!i[e])))};return n.a.createElement("div",{className:"history large-size-container"},0===t.length?n.a.createElement("h2",{className:"mb-3 history__empty-data"},l("history-title-empty-data")):n.a.createElement(r.Fragment,null,n.a.createElement("h2",{className:"mb-3"},l("history-title")),n.a.createElement("div",{id:"history-accordion"},t.map((function(e){var t=e.week,a=e.habits;return n.a.createElement("div",{className:"card",key:"history-habit-".concat(t)},n.a.createElement("div",{className:"card-header history__header",id:"history-habit-header-".concat(t)},n.a.createElement("button",{className:"btn btn-secondary history__header-button","aria-expanded":i[t]?"True":"False","aria-controls":"history-habit-content-".concat(t),onClick:function(){return s(t)}},k(t))),n.a.createElement("div",{id:"history-habit-content-".concat(t),className:"collapse ".concat(i[t]?"show":""),"aria-labelledby":"history-habit-header-".concat(t)},n.a.createElement("div",{className:"card-body"},function(e,t){return n.a.createElement(de,{key:"history-habit-table-".concat(t),habits:e,isReadOnly:!0,toggleDayHabit:function(){}})}(a,t))))})))))},_e=Object(o.b)((function(e){var t=e.habits,a=Object.keys(t.weeks).sort().map((function(e){var a=Object.keys(t.weeks[e]);return 0!==a.length&&{week:e,habits:a.map((function(a){return t.weeks[e][a]}))}})).filter((function(e){return e})).reverse();return a.shift(),{weeks:a}}))(je);var Ne=function(e){var t=e.currentWeek,a=e.startNewWeek;return t!==y()&&a(),n.a.createElement("div",null,n.a.createElement(M.b,null,n.a.createElement(ge,{path:"/"},n.a.createElement(we,{path:"/",default:!0}),n.a.createElement(re,{path:"/profile"}),n.a.createElement(_e,{path:"/history"}))))},Se={startNewWeek:function(){return{type:"START_NEW_WEEK"}}},De=Object(o.b)((function(e){return{currentWeek:e.habits.currentWeek}}),Se)(Ne);i.a.render(n.a.createElement(o.a,{store:T},n.a.createElement(l.a,{loading:null,persistor:x},n.a.createElement(De,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.7287e4f6.chunk.js.map