(this.webpackJsonpmihispredaj=this.webpackJsonpmihispredaj||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(27),r=a.n(s),i=(a(64),a(11)),l=(a(65),a(9)),o=a(6),j=a(15),d=a.n(j),b="http://localhost:5000",x=a(1),m=Object(c.createContext)(),u=function(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),l=Object(o.a)(r,2),j=l[0],u=l[1],h=Object(c.useState)([]),O=Object(o.a)(h,2),p=O[0],f=O[1],g=Object(c.useState)([]),v=Object(o.a)(g,2),y=v[0],N=v[1],w=Object(c.useState)([]),C=Object(o.a)(w,2),k=C[0],I=C[1],S=Object(c.useState)([]),T=Object(o.a)(S,2),_=T[0],B=T[1],F=Object(c.useState)(0),D=Object(o.a)(F,2),E=D[0],P=D[1],W=Object(c.useState)(0),G=Object(o.a)(W,2),K=G[0],A=G[1],q=Object(c.useState)([]),L=Object(o.a)(q,2),M=L[0],H=L[1];Object(c.useEffect)((function(){d.a.get("".concat(b,"/api/category"),{withCredentials:!0}).then((function(e){s(e.data)})).catch((function(e){console.log("this is error: ",e)})),d.a.get("".concat(b,"/api/products"),{withCredentials:!0}).then((function(e){u(e.data),f(e.data),B(e.data.sort((function(e,t){return t.sold-e.sold})).slice(0,3)),I(e.data.sort((function(e,t){return t.sold-e.sold})).slice(3,5))})).catch((function(e){console.log("this is error: ",e)})),d.a.get("".concat(b,"/api/orders"),{withCredentials:!0}).then((function(e){H(e.data)})).catch((function(e){console.log("this is error: ",e)}))}),[]);return Object(x.jsx)(m.Provider,{value:[n,s,j,u,k,I,_,B,function(e){var t=j.map((function(t){return t._id===e?Object(i.a)(Object(i.a)({},t),{},{stock:t.stock-1,sold:t.sold+1}):t}));u(t);var a=[];p.forEach((function(e){t.forEach((function(t){e._id===t._id&&e.stock!==t.stock&&a.push({_id:e._id,name:e.name,price:e.price,nrOfItems:e.stock-t.stock,fotoImg:e.fotoImg})}))})),N(a),P(E+1);var c=a.reduce((function(e,t){return e+t.price*t.nrOfItems}),0);A(c)},function(e){var t=j.map((function(t){return t._id===e?Object(i.a)(Object(i.a)({},t),{},{stock:t.stock+1,sold:t.sold-1}):t}));u(t);var a=[];p.forEach((function(e){t.forEach((function(t){e._id===t._id&&e.stock!==t.stock&&a.push({_id:e._id,name:e.name,price:e.price,nrOfItems:e.stock-t.stock,fotoImg:e.fotoImg})}))})),N(a),P(E-1);var c=a.reduce((function(e,t){return e+t.price*t.nrOfItems}),0);A(c)},y,N,E,P,K,A,M,H,p,f],children:e.children})},h=a(7),O=a(111),p=a(103);function f(){var e=Object(c.useContext)(m),t=Object(o.a)(e,8),a=(t[0],t[1],t[2],t[3],t[4]),n=(t[5],t[6]);t[7];return Object(x.jsxs)("div",{className:"w-100 p-0",children:[Object(x.jsx)("h1",{className:"text-white text-center font-weight-light mt-3 mb-3 d-none d-md-block",children:"Best Sellers"}),Object(x.jsx)("div",{className:"p-0 d-md-flex justify-content-between ",children:n.map((function(e){return Object(x.jsxs)(O.a,{className:"mx-1 my-1",children:[Object(x.jsx)(O.a.Img,{variant:"top p-1",src:e.fotoImg[0].lnk,alt:e.name}),Object(x.jsxs)(O.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(x.jsx)(O.a.Title,{children:e.name}),Object(x.jsx)(p.a,{variant:"primary",as:h.b,to:"/detail/".concat(e._id),children:"Go somewhere"})]})]},e.id)}))}),Object(x.jsx)("div",{className:"p-0 d-md-flex justify-content-between",children:a.map((function(e){return Object(x.jsxs)(O.a,{className:"mx-1 my-1",children:[Object(x.jsx)(O.a.Img,{variant:"top p-1",src:e.fotoImg[0].lnk,alt:e.name}),Object(x.jsxs)(O.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(x.jsx)(O.a.Title,{children:e.name}),Object(x.jsx)(p.a,{variant:"primary",as:h.b,to:"/detail/".concat(e._id),children:"Go somewhere"})]})]},e.id)}))})]})}a(90);var g=a(109);function v(){var e=Object(c.useContext)(m),t=Object(o.a)(e,2),a=t[0];t[1];return Object(x.jsx)(g.a,{className:"d-none d-md-block",children:a.map((function(e,t){return Object(x.jsxs)(g.a.Item,{children:[Object(x.jsx)("img",{className:"d-block w-100",src:e.categoryImg,alt:e.categoryName}),Object(x.jsxs)(g.a.Caption,{children:[Object(x.jsx)("h3",{children:e.categoryName}),Object(x.jsx)("p",{children:e.categoryDesc})]})]},t)}))})}function y(){return Object(x.jsxs)("div",{className:"home",children:[Object(x.jsx)(v,{}),Object(x.jsx)(f,{})]})}a(91);var N=a(110),w=a(104),C=a(105),k=a(108);function I(){var e=Object(c.useContext)(m),t=Object(o.a)(e,14),a=(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12]);t[13];return Object(x.jsxs)(N.a,{expand:"lg",collapseOnSelect:!0,fixed:"top",bg:"primary",className:"mx-auto p-0 d-flex flex-wrap",style:{maxWidth:"1140px"},children:[Object(x.jsx)(w.a,{className:"w-25 d-lg-none d-xl-none pl-2",children:Object(x.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"})}),Object(x.jsx)(N.a.Brand,{className:"d-none d-lg-block d-xl-block w-25 m-0 text-white fontCart pl-2",children:"Logo"}),Object(x.jsx)(N.a.Brand,{as:h.b,to:"/",className:"text-center w-50 m-0 text-white font-weight-bold font-italic fontTitle",children:"UniShop"}),Object(x.jsxs)(N.a.Brand,{as:h.b,to:"/cart",href:"#home",className:"d-flex justify-content-end align-items-center w-25 m-0 pr-2 pl-0",children:[Object(x.jsx)(C.a,{src:"https://image.flaticon.com/icons/png/128/2211/2211008.png",alt:"cartIcon",className:"imageClass"}),Object(x.jsx)(N.a.Text,{className:"text-white pl-1 fontCart",children:a})]}),Object(x.jsx)(N.a.Collapse,{id:"basic-navbar-nav ",children:Object(x.jsxs)(k.a,{children:[Object(x.jsx)(k.a.Link,{eventKey:"1",as:h.b,to:"/kuhinja",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Kuhinja"}),Object(x.jsx)(k.a.Link,{eventKey:"2",as:h.b,to:"/vrt",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Vrt"}),Object(x.jsx)(k.a.Link,{eventKey:"3",as:h.b,to:"/sport",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Sport"}),Object(x.jsx)(k.a.Link,{eventKey:"4",as:h.b,to:"/relax",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Relax"}),Object(x.jsx)(k.a.Link,{eventKey:"5",as:h.b,to:"/drugo",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Drugo"})]})}),Object(x.jsxs)(N.a,{className:"d-none d-lg-block d-xl-block w-100",children:[Object(x.jsx)(p.a,{as:h.b,to:"/kuhinja",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Kuhinja"}),Object(x.jsx)(p.a,{as:h.b,to:"/vrt",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Vrt"}),Object(x.jsx)(p.a,{as:h.b,to:"/sport",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Sport"}),Object(x.jsx)(p.a,{as:h.b,to:"/relax",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Relax"}),Object(x.jsx)(p.a,{as:h.b,to:"/drugo",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Drugo"})]})]})}a(93);function S(){return Object(x.jsx)("div",{className:"footer",children:Object(x.jsx)("h1",{children:Object(x.jsx)(h.b,{to:"/admin",children:"Admin"})})})}a(94);var T=a(106);function _(){var e=Object(c.useContext)(m),t=Object(o.a)(e,20),a=(t[0],t[1],t[2]),n=(t[3],t[4],t[5],t[6],t[7],t[8]),s=t[9],r=t[10],i=(t[11],t[12],t[13],t[14]);t[15],t[16],t[17],t[18],t[19];return Object(x.jsx)("div",{className:"cart pt-2 pb-1",children:0===r.length?Object(x.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(x.jsx)("h1",{className:"text-white",children:"Your cart is empty.."}),Object(x.jsx)("img",{className:"emptyCartImg",alt:"emptyCart",src:"https://www.finfunmermaid.com/static/version1615882237/frontend/bsp/bartleby/en_US/images/icons/ff-sad-empty-cart.svg"})]}):Object(x.jsxs)("div",{children:[r.map((function(e,t){return Object(x.jsxs)("div",{className:"d-flex \r align-items-center \r m-1 p-1 border \r border-white rounded\r cartItem",children:[Object(x.jsx)("img",{src:e.fotoImg[0].lnk,alt:e.name,className:"rounded cartItemImg"}),Object(x.jsx)("h1",{className:"text-center text-white cartItemName",children:Object(x.jsx)(h.b,{to:"/detail/".concat(e._id),className:"text-white",children:e.name})}),Object(x.jsxs)("h2",{className:"text-center text-black cartItemPrice",children:[e.nrOfItems," x ",e.price," \u20ac"]}),Object(x.jsxs)("div",{className:"cartItemBtns",children:[a.map((function(t,a){if(e._id===t._id&&t.stock>0)return Object(x.jsx)(p.a,{className:"cartBtn",variant:"success m-1",onClick:function(){return n(e._id)},children:"Add"},a)})),Object(x.jsx)(p.a,{className:"cartBtn",variant:"danger m-1",onClick:function(){return s(e._id)},children:"Delete"})]})]},t)})),Object(x.jsxs)(T.a,{children:[Object(x.jsxs)("h1",{className:"text-center d-flex flex-column align-items-center",children:["Total:"," ",Object(x.jsxs)("span",{style:{display:"flex",color:"red"},children:[" ",i," \u20ac"]})]}),Object(x.jsx)("p",{className:"text-center",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(x.jsx)("p",{className:"text-center",children:Object(x.jsx)(p.a,{as:h.b,to:"/userData",variant:"primary",children:"Confirm"})})]})]})})}a(28);function B(){var e=Object(c.useContext)(m),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(x.jsxs)("div",{className:"kategorije",children:[Object(x.jsxs)(O.a,{className:"text-center featCard",children:[Object(x.jsx)(O.a.Header,{children:"Featured"}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Special title treatment"}),Object(x.jsx)(O.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(x.jsx)(p.a,{variant:"primary",children:"Go somewhere"})]}),Object(x.jsx)(O.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Kuhinja"===e.category)return Object(x.jsxs)(O.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(x.jsx)(O.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:e.name}),Object(x.jsx)(O.a.Text,{children:e.shortDesc}),Object(x.jsx)(p.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}function F(){var e=Object(c.useContext)(m),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(x.jsxs)("div",{className:"kategorije",children:[Object(x.jsxs)(O.a,{className:"text-center featCard",children:[Object(x.jsx)(O.a.Header,{children:"Featured"}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Special title treatment"}),Object(x.jsx)(O.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(x.jsx)(p.a,{variant:"primary",children:"Go somewhere"})]}),Object(x.jsx)(O.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Vrt"===e.category)return Object(x.jsxs)(O.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(x.jsx)(O.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:e.name}),Object(x.jsx)(O.a.Text,{children:e.shortDesc}),Object(x.jsx)(p.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}function D(){var e=Object(c.useContext)(m),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(x.jsxs)("div",{className:"kategorije",children:[Object(x.jsxs)(O.a,{className:"text-center featCard",children:[Object(x.jsx)(O.a.Header,{children:"Featured"}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Special title treatment"}),Object(x.jsx)(O.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(x.jsx)(p.a,{variant:"primary",children:"Go somewhere"})]}),Object(x.jsx)(O.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Sport"===e.category)return Object(x.jsxs)(O.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(x.jsx)(O.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:e.name}),Object(x.jsx)(O.a.Text,{children:e.shortDesc}),Object(x.jsx)(p.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}function E(){var e=Object(c.useContext)(m),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(x.jsxs)("div",{className:"kategorije",children:[Object(x.jsxs)(O.a,{className:"text-center featCard",children:[Object(x.jsx)(O.a.Header,{children:"Featured"}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Special title treatment"}),Object(x.jsx)(O.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(x.jsx)(p.a,{variant:"primary",children:"Go somewhere"})]}),Object(x.jsx)(O.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Relax"===e.category)return Object(x.jsxs)(O.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(x.jsx)(O.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:e.name}),Object(x.jsx)(O.a.Text,{children:e.shortDesc}),Object(x.jsx)(p.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}function P(){var e=Object(c.useContext)(m),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(x.jsxs)("div",{className:"kategorije",children:[Object(x.jsxs)(O.a,{className:"text-center featCard",children:[Object(x.jsx)(O.a.Header,{children:"Featured"}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:"Special title treatment"}),Object(x.jsx)(O.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(x.jsx)(p.a,{variant:"primary",children:"Go somewhere"})]}),Object(x.jsx)(O.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Drugo"===e.category)return Object(x.jsxs)(O.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(x.jsx)(O.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(x.jsxs)(O.a.Body,{children:[Object(x.jsx)(O.a.Title,{children:e.name}),Object(x.jsx)(O.a.Text,{children:e.shortDesc}),Object(x.jsx)(p.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}a(95);function W(e){var t=e.match,a=Object(c.useContext)(m),n=Object(o.a)(a,12),s=(n[0],n[1],n[2]),r=n[3],l=(n[4],n[5],n[6],n[7],n[8]),j=(n[9],n[10],n[11],t.params.id),d=function(e){var t=s.map((function(e){return e._id===j?Object(i.a)(Object(i.a)({},e),{},{fotoImg:e.fotoImg.map((function(e){return!0===e.active?Object(i.a)(Object(i.a)({},e),{},{active:!1}):e}))}):e})).map((function(t){return t._id===j?Object(i.a)(Object(i.a)({},t),{},{fotoImg:t.fotoImg.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{active:!0}):t}))}):t}));r(t)};return Object(x.jsx)("div",{className:"detail",children:s.map((function(e,t){if(e._id===j)return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"detailTop d-flex justify-content-between mb-2",children:[Object(x.jsxs)("div",{className:"detailTopLeft d-flex justify-content-between mt-2",children:[Object(x.jsx)("div",{className:"detailSmall",children:e.fotoImg.map((function(e,t){return!0===e.active?Object(x.jsx)("div",{className:"detailSmallActive m-1",children:Object(x.jsx)(C.a,{src:e.lnk,alt:"smallFoto",onClick:function(){return d(e.id)}})},t):Object(x.jsx)("div",{className:"detailSmallPassive m-1",children:Object(x.jsx)(C.a,{src:e.lnk,alt:"smallFoto",onClick:function(){return d(e.id)}})},t)}))}),Object(x.jsx)("div",{className:"detailBig m-1",children:e.fotoImg.map((function(e,t){if(!0===e.active)return Object(x.jsx)(C.a,{src:e.lnk,alt:"bigFoto"},t)}))})]}),Object(x.jsxs)("div",{className:"detailTopRight text-white text-center mt-2",children:[Object(x.jsx)("h1",{children:e.name}),Object(x.jsxs)("p",{children:["Price: ",e.price," \u20ac"]}),Object(x.jsxs)("p",{children:["In Stock: ",e.stock]}),Object(x.jsx)("div",{children:e.stock>0?Object(x.jsx)(p.a,{onClick:function(){return l(e._id)},variant:"success",children:"Add"}):Object(x.jsx)(x.Fragment,{})})]})]}),Object(x.jsx)("div",{className:"detailBottom m-1 text-white",children:Object(x.jsx)("p",{children:e.longDesc})})]},t)}))})}var G=a(59),K=(a(53),a(107));function A(){var e=Object(l.f)(),t=Object(c.useContext)(m),a=Object(o.a)(t,20),n=(a[0],a[1],a[2]),s=a[3],r=(a[4],a[5]),i=(a[6],a[7]),j=(a[8],a[9],a[10]),u=a[11],h=(a[12],a[13]),O=a[14],f=(a[15],a[16],a[17]),g=(a[18],a[19]),v=Object(c.useState)(""),y=Object(o.a)(v,2),N=y[0],w=y[1],C=Object(c.useState)(""),k=Object(o.a)(C,2),I=k[0],S=k[1],T=Object(c.useState)(""),_=Object(o.a)(T,2),B=_[0],F=_[1],D=Object(c.useState)(""),E=Object(o.a)(D,2),P=E[0],W=E[1],A=Object(c.useState)(!1),q=Object(o.a)(A,2),L=q[0],M=q[1];return Object(x.jsx)("div",{className:"userData",children:Object(x.jsxs)(K.a,{onSubmit:function(t){t.preventDefault();var a={name:I,email:N,address:B,city:P,total:O,payment:!0===L?"Cash - after delivery":"Credit Card",cart:j.map((function(e){return{namee:e.name,pricee:e.price,nrOfItemss:e.nrOfItems}}))};f((function(e){return[].concat(Object(G.a)(e),[a])})),w(""),S(""),F(""),W(""),!0===L?(u([]),h(0),g(n),r(n.sort((function(e,t){return t.sold-e.sold})).slice(3,5)),i(n.sort((function(e,t){return t.sold-e.sold})).slice(0,3)),e.push("/successPage"),d.a.patch("".concat(b,"/api/products"),{allProducts:n}).then((function(e){s(e.data),console.log("afterDelivery")})),d.a.post("".concat(b,"/api/newOrder"),a).then((function(){d.a.post("".concat(b,"/api/send-email"),a,{withCredentials:!0}).then((function(){console.log("send mail")})).catch((function(e){return console.log("Mail sent but error: ",e)}))}))):(console.log("withCard"),e.push("/cardComponent"))},className:"p-1",children:[Object(x.jsx)(K.a.Group,{controlId:"formBasicName",className:"p-1",children:Object(x.jsx)(K.a.Control,{onChange:function(e){S(e.target.value)},type:"text",name:"name",value:I,placeholder:"Enter name",required:!0})}),Object(x.jsx)(K.a.Group,{controlId:"formBasicEmail",className:"p-1",children:Object(x.jsx)(K.a.Control,{onChange:function(e){e.target.value,w(e.target.value)},type:"email",name:"email",value:N,placeholder:"Enter email",required:!0})}),Object(x.jsx)(K.a.Group,{controlId:"formBasicName",className:"p-1",children:Object(x.jsx)(K.a.Control,{onChange:function(e){F(e.target.value)},type:"text",name:"address",value:B,placeholder:"Enter address",required:!0})}),Object(x.jsx)(K.a.Group,{controlId:"formBasicEmail",className:"p-1",children:Object(x.jsx)(K.a.Control,{onChange:function(e){W(e.target.value)},type:"text",name:"city",value:P,placeholder:"Enter city",required:!0})}),Object(x.jsxs)(K.a.Group,{controlId:"formBasicCheckbox",className:"p-1",children:[Object(x.jsx)(K.a.Check,{type:"radio",class:"form-check-input",id:"validationFormCheck2",name:"radio-stacked",required:!0,label:"Placilo po povzetju",onClick:function(){return M(!0)}}),Object(x.jsx)(K.a.Check,{type:"radio",class:"form-check-input",id:"validationFormCheck3",name:"radio-stacked",required:!0,label:"Placilo z kartico",onClick:function(){return M(!1)}})]}),Object(x.jsx)(p.a,{variant:"success m-1",type:"submit",style:{width:150},children:"Submit"})]})})}a(96);function q(){var e=Object(c.useContext)(m),t=Object(o.a)(e,20),a=(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15],t[16]);t[17],t[18],t[19];return Object(x.jsx)("div",{className:"successPage",children:a.length>0?Object(x.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center text-white",children:[Object(x.jsxs)("h1",{children:["Thank you ",a[a.length-1].name.toUpperCase()," ","for your order!"]}),Object(x.jsx)(C.a,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrA-Hjwh0PrysnRa-wKM7rY7rlSL4dT45Ivw&usqp=CAU",roundedCircle:!0})]}):Object(x.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center text-white",children:[Object(x.jsx)("h1",{children:"This is not the page you are looking for!"}),Object(x.jsx)("img",{style:{maxWidth:600},alt:"lostImg",src:"https://www.finfunmermaid.com/media/wysiwyg/fun-transition-page-graphics/ff-no-results-binoculars.svg"})]})})}a(97);function L(){var e=Object(c.useContext)(m),t=Object(o.a)(e,20),a=(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15],t[16]);t[17],t[18],t[19];return Object(x.jsx)("div",{className:"admin",children:0!==a.length?Object(x.jsx)("div",{children:a.map((function(e,t){return Object(x.jsxs)("div",{className:"purchase m-1",style:{border:"2px dotted white",borderRadius:5},children:[Object(x.jsxs)("div",{className:"text-white w-50 p-1",children:[Object(x.jsxs)("p",{className:"ejg1",children:[t+1,". ",e.name]}),Object(x.jsx)("p",{children:e.email}),Object(x.jsx)("p",{children:e.address}),Object(x.jsx)("p",{children:e.city})]}),Object(x.jsxs)("div",{className:"p-1",children:[e.cart.map((function(e,t){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{className:"ejg3",children:[e.namee," "]}),Object(x.jsxs)("p",{children:[e.nrOfItemss," x ",e.pricee," \u20ac"]})]},t)})),Object(x.jsxs)("h6",{children:["Payment method: ",e.payment]}),Object(x.jsxs)("p",{className:"text-warning ejg1",children:["Total: ",e.total," \u20ac"]})]})]},t)})).reverse()}):Object(x.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center text-white",children:[Object(x.jsx)("h1",{children:"C'mon make that first sale!"}),Object(x.jsx)("img",{style:{maxWidth:230},alt:"lostImg",src:"https://cdn.pixabay.com/photo/2014/12/21/23/57/money-576443_960_720.png"})]})})}var M=a(58),H=a(25),V=a(30),J=a.n(V),z=a(43);a(99);function R(e){var t=e.items,a=Object(c.useState)(!1),n=Object(o.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(null),j=Object(o.a)(i,2),u=j[0],h=j[1],O=Object(c.useState)(""),p=Object(o.a)(O,2),f=p[0],g=p[1],v=Object(c.useState)(!0),y=Object(o.a)(v,2),N=y[0],w=y[1],C=Object(c.useState)(""),k=Object(o.a)(C,2),I=k[0],S=k[1],T=Object(H.useStripe)(),_=Object(H.useElements)(),B=Object(c.useContext)(m),F=Object(o.a)(B,20),D=(F[0],F[1],F[2]),E=F[3],P=(F[4],F[5]),W=(F[6],F[7]),G=(F[8],F[9],F[10],F[11]),K=(F[12],F[13]),A=(F[14],F[15],F[16]),q=(F[17],F[18],F[19]),L=Object(l.f)();Object(c.useEffect)((function(){window.fetch("".concat(b,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:t})}).then((function(e){return e.json()})).then((function(e){S(e.clientSecret)}))}),[]);var M=function(){var e=Object(z.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(t.empty),h(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(z.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),e.next=4,T.confirmCardPayment(I,{payment_method:{card:_.getElement(H.CardElement)}});case 4:(a=e.sent).error?(h("Payment failed ".concat(a.error.message)),g(!1)):(h(null),g(!1),r(!0),d.a.patch("".concat(b,"/api/products"),{allProducts:D}).then((function(e){E(e.data),console.log("Card payment")})),d.a.post("".concat(b,"/api/newOrder"),A[A.length-1]).then((function(){d.a.post("".concat(b,"/api/send-email"),A[A.length-1],{withCredentials:!0}).then((function(){console.log("send mail")})).catch((function(e){return console.log("Mail sent but error: ",e)}))})),G([]),K(0),q(D),P(D.sort((function(e,t){return t.sold-e.sold})).slice(3,5)),W(D.sort((function(e,t){return t.sold-e.sold})).slice(0,3)),L.push("/successPage"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{className:"stripeForm",id:"payment-form",onSubmit:V,children:[Object(x.jsx)(H.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:M}),Object(x.jsx)("button",{className:"buttonStripe",disabled:f||N||s,id:"submit",children:Object(x.jsx)("span",{id:"button-text",children:f?Object(x.jsx)("div",{className:"spinner",id:"spinner"}):"Pay"})}),u&&Object(x.jsx)("div",{className:"card-error",role:"alert",children:u}),Object(x.jsx)("p",{className:s?"result-message":"result-message hidden",children:"Payment succeeded, see the result in your"})]})}function U(){var e=Object(M.a)("pk_test_51Hj18ZKqS56uvZe83wuhJjH6JFhxzj139IXZQAFhBT3NNzhJir4vntXcjEOha7Gw4JK6QQzD2Y2BEI4CFycD3LoW00GYaFr3so"),t=Object(c.useContext)(m),a=Object(o.a)(t,20),n=(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10]);a[11],a[12],a[13],a[14],a[15],a[16],a[17],a[18],a[19];return Object(x.jsxs)("div",{className:"cardComponent",children:[Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(x.jsx)("h3",{children:"For testing purposes use this code: "}),Object(x.jsx)("p",{children:"4242 4242 4242 4242 - 04 / 24 - 242 - 42424"})]}),Object(x.jsx)(H.Elements,{stripe:e,children:Object(x.jsx)(R,{items:n})})]})}var Y=Object(l.g)((function(){return Object(x.jsx)(u,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(I,{}),Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(x.jsx)(y,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/cart",render:function(){return Object(x.jsx)(_,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/kuhinja",render:function(){return Object(x.jsx)(B,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/vrt",render:function(){return Object(x.jsx)(F,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/sport",render:function(){return Object(x.jsx)(D,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/drugo",render:function(){return Object(x.jsx)(P,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/relax",render:function(){return Object(x.jsx)(E,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/detail/:id",render:function(e){return Object(x.jsx)(W,Object(i.a)({},e))}}),Object(x.jsx)(l.a,{exact:!0,path:"/userData",render:function(){return Object(x.jsx)(A,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/successPage",render:function(){return Object(x.jsx)(q,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/admin",render:function(){return Object(x.jsx)(L,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/cardComponent",render:function(){return Object(x.jsx)(U,{})}})]}),Object(x.jsx)(S,{})]})})}));a(100);r.a.render(Object(x.jsx)(h.a,{children:Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(Y,{})})}),document.getElementById("root"))},28:function(e,t,a){},53:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.0600e3d7.chunk.js.map