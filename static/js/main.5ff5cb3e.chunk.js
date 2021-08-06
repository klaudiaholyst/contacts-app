(this["webpackJsonpcontacts-app"]=this["webpackJsonpcontacts-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),c=n.n(r),s=(n(94),n(13)),o=n(40),l=n(80),d=function(e,t){switch(t.type){case"ADD_CONTACT":return[].concat(Object(l.a)(e),[{name:t.contact.name,surname:t.contact.surname,email:t.contact.email,number:t.contact.number,tags:t.contact.tag.join(", "),id:(new Date).getTime()}]);case"IMPORT_CONTACTS":return t.payload;case"PUT_TO_TRASH":return e.map((function(e){return e.id===t.payload?Object.assign({},e,{inTrash:!0}):e}));case"PUT_OUTSIDE_TRASH":return e.map((function(e){return e.id===t.payload?Object.assign({},e,{inTrash:!1}):e}));default:return e}},j=n(72),u=n(2),b=Object(a.createContext)(),O=function(e){var t=Object(a.useState)(["clients","family","friends","relatives"]),n=Object(s.a)(t,2),i=n[0],r=(n[1],Object(a.useState)("")),c=Object(s.a)(r,2),o=c[0],l=c[1],O=Object(a.useState)(!1),h=Object(s.a)(O,2),m=h[0],p=h[1],g=Object(a.useReducer)(d,[]),x=Object(s.a)(g,2),f=x[0],v=x[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):null;v(e?{type:"IMPORT_CONTACTS",payload:e}:{type:"IMPORT_CONTACTS",payload:j})}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(f))}),[f]),Object(u.jsx)(b.Provider,{value:{contacts:f,dispatch:v,tagsList:i,activeTag:o,setActiveTag:l,showTrash:m,setShowTrash:p},children:e.children})},h=n(150),m=n(177),p=n(153),g=n(155),x=n(158),f=n(104),v=n(156),T=n(157),S=n(159),w=n(74),y=n.n(w),C=n(57),N=n.n(C),P=n(77),I=n.n(P),k=n(75),A=n.n(k),D=n(76),M=n.n(D),L=240,_=Object(h.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(L,"px)"),marginLeft:L,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:L,flexShrink:0},drawerPaper:{width:L,paddingTop:64,zIndex:1e3},drawerHeader:Object(o.a)(Object(o.a)({display:"block",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},nested:{paddingLeft:e.spacing(4)},listItem:{paddingTop:"12px",paddingBottom:"12px"}}}));function R(e){var t=_(),n=Object(a.useState)(!0),i=Object(s.a)(n,2),r=i[0],c=i[1],o=function(){c(!r)};return Object(u.jsxs)("div",{className:t.root,children:[Object(u.jsx)(p.a,{}),Object(u.jsx)(m.a,{className:t.drawer,variant:"persistent",anchor:"left",open:e.openDrawer,classes:{paper:t.drawerPaper},children:Object(u.jsx)(b.Consumer,{children:function(e){var n=e.tagsList,a=e.setActiveTag,i=e.activeTag,c=e.setShowTrash,s=e.showTrash;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g.a,{disablePadding:!0,children:Object(u.jsxs)(f.a,{button:!0,selected:""===i&&!s,onClick:function(){a(""),c(!1)},className:t.listItem,children:[Object(u.jsx)(v.a,{children:Object(u.jsx)(y.a,{})}),Object(u.jsx)(T.a,{primary:"Show all contacts"})]},"Contacts")}),Object(u.jsx)(x.a,{}),Object(u.jsxs)(g.a,{disablePadding:!0,children:[Object(u.jsxs)(f.a,{button:!0,onClick:o,children:[Object(u.jsx)(v.a,{children:r?Object(u.jsx)(A.a,{}):Object(u.jsx)(M.a,{})}),Object(u.jsx)(T.a,{primary:"Tags"})]}),Object(u.jsx)(S.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(u.jsx)(g.a,{component:"div",disablePadding:!0,children:n.map((function(e){return Object(u.jsxs)(f.a,{button:!0,onClick:function(){a(e),c(!1)},selected:i===e,className:t.nested,children:[Object(u.jsx)(v.a,{children:Object(u.jsx)(I.a,{fontSize:"small"})}),Object(u.jsx)(T.a,{primary:e})]},e)}))})})]}),Object(u.jsx)(x.a,{}),Object(u.jsx)(g.a,{disablePadding:!0,children:Object(u.jsxs)(f.a,{button:!0,onClick:function(){c(!0),a("")},selected:s,children:[Object(u.jsx)(v.a,{children:Object(u.jsx)(N.a,{})}),Object(u.jsx)(T.a,{primary:"Trash"})]},"Trash")})]})}})})]})}var B=n(160),E=n(161),z=n(59),H=n(162),W=n(78),J=n.n(W),U=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"left"}}}));function F(e){var t=U();return Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)(B.a,{position:"fixed",children:Object(u.jsxs)(E.a,{children:[Object(u.jsx)(H.a,{onClick:function(){return e.isDrawerOpen()},edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(u.jsx)(J.a,{})}),Object(u.jsx)(z.a,{variant:"h6",className:t.title,children:"Contacts"})]})})})}var G=n(53),V=n(4),q=n(168),K=n(15),Q=n(176),X=n(163),Y=n(178),Z=n(179),$=n(167),ee=n(166),te=n(175),ne=n(180);n(100);function ae(){return Math.round(20*Math.random())-10}function ie(){var e=50+ae(),t=50+ae();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var re=Object(h.a)((function(e){return{paper:{position:"absolute",width:700,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},formControl:{margin:e.spacing(1),width:"300px"},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),ce={PaperProps:{style:{maxHeight:224,width:250}}};function se(e,t,n){return{fontWeight:-1===t.indexOf(e)?n.typography.fontWeightRegular:n.typography.fontWeightMedium}}function oe(e){var t=re(),n=i.a.useState(ie),r=Object(s.a)(n,1)[0],c=Object(K.a)(),o=Object(a.useState)(""),l=Object(s.a)(o,2),d=l[0],j=l[1],O=Object(a.useState)(""),h=Object(s.a)(O,2),m=h[0],p=h[1],g=Object(a.useState)(""),x=Object(s.a)(g,2),f=x[0],v=x[1],T=Object(a.useState)(""),S=Object(s.a)(T,2),w=S[0],y=S[1],C=Object(a.useState)([]),N=Object(s.a)(C,2),P=N[0],I=N[1],k=Object(a.useContext)(b),A=k.dispatch,D=k.tagsList,M=Object(u.jsxs)("div",{style:r,className:t.paper,children:[Object(u.jsx)("h2",{id:"simple-modal-title",children:"Add new"}),Object(u.jsxs)(X.a,{container:!0,direction:"column",alignItems:"flex-start",justify:"flex-start",spacing:2,children:[Object(u.jsxs)(X.a,{item:!0,container:!0,spacing:2,children:[Object(u.jsx)(X.a,{item:!0,xs:4,children:Object(u.jsx)(Y.a,{onChange:function(e){return j(e.target.value)},size:"small",id:"name",label:"Name",variant:"outlined"})}),Object(u.jsx)(X.a,{item:!0,xs:4,children:Object(u.jsx)(Y.a,{onChange:function(e){return p(e.target.value)},size:"small",id:"surname",label:"Surname",variant:"outlined"})})]}),Object(u.jsx)(X.a,{item:!0,xs:4,children:Object(u.jsx)(Y.a,{onChange:function(e){return v(e.target.value)},size:"small",id:"email",label:"E-mail",variant:"outlined"})}),Object(u.jsx)(X.a,{item:!0,xs:4,children:Object(u.jsx)(Y.a,{onChange:function(e){return y(e.target.value)},size:"small",id:"number",label:"Phone",variant:"outlined"})}),Object(u.jsxs)(X.a,{item:!0,container:!0,direction:"row",alignItems:"center",spacing:2,children:[Object(u.jsxs)(X.a,{item:!0,container:!0,xs:8,alignItems:"center",spacing:1,children:[Object(u.jsx)(X.a,{item:!0,children:Object(u.jsx)(z.a,{variant:"body1",className:t.title,children:"Tags:"})}),Object(u.jsx)(X.a,{item:!0,xs:8,children:Object(u.jsx)(ee.a,{className:t.formControl,children:Object(u.jsx)(te.a,{labelId:"demo-mutiple-chip-label",id:"demo-mutiple-chip",multiple:!0,value:P,onChange:function(e){I(e.target.value)},input:Object(u.jsx)(Z.a,{className:"input-modified"}),renderValue:function(e){return Object(u.jsx)("div",{className:t.chips,children:e.map((function(e){return Object(u.jsx)(ne.a,{label:e,className:t.chip},e)}))})},MenuProps:ce,children:D.map((function(e){return Object(u.jsx)($.a,{value:e,style:se(e,e,c),children:e},e)}))})})})]}),Object(u.jsxs)(X.a,{item:!0,container:!0,xs:4,direction:"row",alignItems:"flex-end",justify:"flex-end",spacing:2,children:[Object(u.jsx)(X.a,{item:!0,children:Object(u.jsx)(q.a,{onClick:e.handleCloseModal,variant:"outlined",color:"primary",children:"Cancel"})}),Object(u.jsx)(X.a,{item:!0,children:Object(u.jsx)(q.a,{onClick:function(t){t.preventDefault(),A({type:"ADD_CONTACT",contact:{name:d,surname:m,email:f,number:w,tag:P}}),j(""),p(""),v(""),y(""),I([]),e.handleCloseModal()},variant:"contained",color:"primary",children:"Save"})})]})]})]})]});return Object(u.jsx)("div",{children:Object(u.jsx)(Q.a,{open:e.openModal,onClose:e.handleCloseModal,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:M})})}var le=Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(3),float:"right"}}}}));function de(){var e=le(),t=i.a.useState(!1),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)(q.a,{variant:"contained",color:"primary",onClick:function(){r(!0)},children:"Add new"}),Object(u.jsx)(oe,{openModal:a,handleCloseModal:function(){r(!1)}})]})}var je=n(170),ue=n(174),be=n(173),Oe=n(169),he=n(171),me=n(172),pe=n(103),ge=n(79),xe=n.n(ge),fe=Object(h.a)({table:{minWidth:650,"& td, th":{borderLeft:"solid 1px rgb(224, 224, 224)"},"& th":{fontWeight:"bold"}}});function ve(){var e=fe();return Object(u.jsx)(b.Consumer,{children:function(t){var n=t.contacts,a=t.activeTag,i=t.dispatch,r=t.showTrash;return Object(u.jsx)(Oe.a,{component:pe.a,children:Object(u.jsxs)(je.a,{className:e.table,"aria-label":"simple table",variant:"body",children:[Object(u.jsx)(he.a,{children:Object(u.jsxs)(me.a,{children:[Object(u.jsx)(be.a,{children:"Name"}),Object(u.jsx)(be.a,{align:"left",children:"E-mail"}),Object(u.jsx)(be.a,{align:"left",children:"Phone number"}),Object(u.jsx)(be.a,{align:"left",children:"Tags"}),Object(u.jsx)(be.a,{align:"left"})]})}),Object(u.jsxs)(ue.a,{children:[r&&n.filter((function(e){return e.inTrash})).map((function(e){return Object(u.jsxs)(me.a,{children:[Object(u.jsxs)(be.a,{scope:"row",children:[e.name," ",e.surname]}),Object(u.jsx)(be.a,{align:"left",children:e.email}),Object(u.jsx)(be.a,{align:"left",children:e.number}),Object(u.jsx)(be.a,{align:"left",children:e.tags}),Object(u.jsx)(be.a,{align:"center",children:Object(u.jsx)(xe.a,{onClick:function(){return i({type:"PUT_OUTSIDE_TRASH",payload:e.id})}})})]},e.id)})),!r&&n&&n.filter((function(e){return e.tags.includes(a)})).filter((function(e){return!e.inTrash})).map((function(e){return Object(u.jsxs)(me.a,{children:[Object(u.jsxs)(be.a,{scope:"row",children:[e.name," ",e.surname]}),Object(u.jsx)(be.a,{align:"left",children:e.email}),Object(u.jsx)(be.a,{align:"left",children:e.number}),Object(u.jsx)(be.a,{align:"left",children:e.tags}),Object(u.jsx)(be.a,{align:"center",children:Object(u.jsx)(N.a,{onClick:function(){return i({type:"PUT_TO_TRASH",payload:e.id})}})})]},e.id)}))]})]})})}})}var Te=240,Se=Object(h.a)((function(e){return{root:{display:"flex"},nested:{paddingLeft:e.spacing(4)},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Te,"px)"),marginLeft:Te,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:Te,flexShrink:0},drawerPaper:{width:Te,paddingTop:64,zIndex:1e3},drawerHeader:Object(o.a)(Object(o.a)({display:"block",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),paddingTop:0,marginTop:64,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:Te}}}));function we(e){var t=Se();return Object(u.jsxs)("main",{className:Object(V.a)(t.content,Object(G.a)({},t.contentShift,e.openDrawer)),children:[Object(u.jsx)(de,{}),Object(u.jsx)(ve,{})]})}n(101);var ye=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(F,{isDrawerOpen:function(){return i(!n)}}),Object(u.jsxs)(O,{children:[Object(u.jsx)(R,{openDrawer:n}),Object(u.jsx)(we,{openDrawer:n})]})]})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(ye,{})}),document.getElementById("root")),Ce()},72:function(e){e.exports=JSON.parse('[{"name":"John","surname":"Snow","email":"johnyys@test.com","number":"+43 687 125 458","tags":"clients","id":1},{"name":"Mary","surname":"Winter","email":"mary@test.com","number":"+43 654 213 215","tags":"friends","id":2}]')},94:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.5ff5cb3e.chunk.js.map