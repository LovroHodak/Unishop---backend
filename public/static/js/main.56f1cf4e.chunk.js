(this.webpackJsonpmihispredaj=this.webpackJsonpmihispredaj||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(27),r=a.n(s),i=(a(64),a(11)),l=(a(65),a(9)),o=a(6),j=a(15),d=a.n(j),b=a(1),x=Object(c.createContext)(),m=function(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),l=Object(o.a)(r,2),j=l[0],m=l[1],h=Object(c.useState)([]),u=Object(o.a)(h,2),O=u[0],p=u[1],f=Object(c.useState)([]),g=Object(o.a)(f,2),v=g[0],y=g[1],N=Object(c.useState)([]),w=Object(o.a)(N,2),C=w[0],k=w[1],I=Object(c.useState)([]),S=Object(o.a)(I,2),T=S[0],_=S[1],B=Object(c.useState)(0),F=Object(o.a)(B,2),D=F[0],E=F[1],P=Object(c.useState)(0),W=Object(o.a)(P,2),G=W[0],K=W[1],A=Object(c.useState)([]),q=Object(o.a)(A,2),L=q[0],M=q[1];Object(c.useEffect)((function(){d.a.get("http://localhost:5000/api/category",{withCredentials:!0}).then((function(e){s(e.data)})).catch((function(e){console.log("this is error: ",e)})),d.a.get("http://localhost:5000/api/products",{withCredentials:!0}).then((function(e){m(e.data),p(e.data),_(e.data.sort((function(e,t){return t.sold-e.sold})).slice(0,3)),k(e.data.sort((function(e,t){return t.sold-e.sold})).slice(3,5))})).catch((function(e){console.log("this is error: ",e)})),d.a.get("http://localhost:5000/api/orders",{withCredentials:!0}).then((function(e){M(e.data)})).catch((function(e){console.log("this is error: ",e)}))}),[]);return Object(b.jsx)(x.Provider,{value:[n,s,j,m,C,k,T,_,function(e){var t=j.map((function(t){return t._id===e?Object(i.a)(Object(i.a)({},t),{},{stock:t.stock-1,sold:t.sold+1}):t}));m(t);var a=[];O.forEach((function(e){t.forEach((function(t){e._id===t._id&&e.stock!==t.stock&&a.push({_id:e._id,name:e.name,price:e.price,nrOfItems:e.stock-t.stock,fotoImg:e.fotoImg})}))})),y(a),E(D+1);var c=a.reduce((function(e,t){return e+t.price*t.nrOfItems}),0);K(c)},function(e){var t=j.map((function(t){return t._id===e?Object(i.a)(Object(i.a)({},t),{},{stock:t.stock+1,sold:t.sold-1}):t}));m(t);var a=[];O.forEach((function(e){t.forEach((function(t){e._id===t._id&&e.stock!==t.stock&&a.push({_id:e._id,name:e.name,price:e.price,nrOfItems:e.stock-t.stock,fotoImg:e.fotoImg})}))})),y(a),E(D-1);var c=a.reduce((function(e,t){return e+t.price*t.nrOfItems}),0);K(c)},v,y,D,E,G,K,L,M,O,p],children:e.children})},h=a(7),u=a(111),O=a(103);function p(){var e=Object(c.useContext)(x),t=Object(o.a)(e,8),a=(t[0],t[1],t[2],t[3],t[4]),n=(t[5],t[6]);t[7];return Object(b.jsxs)("div",{className:"w-100 p-0",children:[Object(b.jsx)("h1",{className:"text-white text-center font-weight-light mt-3 mb-3 d-none d-md-block",children:"Best Sellers"}),Object(b.jsx)("div",{className:"p-0 d-md-flex justify-content-between ",children:n.map((function(e){return Object(b.jsxs)(u.a,{className:"mx-1 my-1",children:[Object(b.jsx)(u.a.Img,{variant:"top p-1",src:e.fotoImg[0].lnk,alt:e.name}),Object(b.jsxs)(u.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(b.jsx)(u.a.Title,{children:e.name}),Object(b.jsx)(O.a,{variant:"primary",as:h.b,to:"/detail/".concat(e._id),children:"Go somewhere"})]})]},e.id)}))}),Object(b.jsx)("div",{className:"p-0 d-md-flex justify-content-between",children:a.map((function(e){return Object(b.jsxs)(u.a,{className:"mx-1 my-1",children:[Object(b.jsx)(u.a.Img,{variant:"top p-1",src:e.fotoImg[0].lnk,alt:e.name}),Object(b.jsxs)(u.a.Body,{className:"d-flex flex-column align-items-center",children:[Object(b.jsx)(u.a.Title,{children:e.name}),Object(b.jsx)(O.a,{variant:"primary",as:h.b,to:"/detail/".concat(e._id),children:"Go somewhere"})]})]},e.id)}))})]})}a(90);var f=a(109);function g(){var e=Object(c.useContext)(x),t=Object(o.a)(e,2),a=t[0];t[1];return Object(b.jsx)(f.a,{className:"d-none d-md-block",children:a.map((function(e,t){return Object(b.jsxs)(f.a.Item,{children:[Object(b.jsx)("img",{className:"d-block w-100",src:e.categoryImg,alt:e.categoryName}),Object(b.jsxs)(f.a.Caption,{children:[Object(b.jsx)("h3",{children:e.categoryName}),Object(b.jsx)("p",{children:e.categoryDesc})]})]},t)}))})}function v(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(g,{}),Object(b.jsx)(p,{})]})}a(91);var y=a(110),N=a(104),w=a(105),C=a(108);function k(){var e=Object(c.useContext)(x),t=Object(o.a)(e,14),a=(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12]);t[13];return Object(b.jsxs)(y.a,{expand:"lg",collapseOnSelect:!0,fixed:"top",bg:"primary",className:"mx-auto p-0 d-flex flex-wrap",style:{maxWidth:"1140px"},children:[Object(b.jsx)(N.a,{className:"w-25 d-lg-none d-xl-none pl-2",children:Object(b.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"})}),Object(b.jsx)(y.a.Brand,{className:"d-none d-lg-block d-xl-block w-25 m-0 text-white fontCart pl-2",children:"Logo"}),Object(b.jsx)(y.a.Brand,{as:h.b,to:"/",className:"text-center w-50 m-0 text-white font-weight-bold font-italic fontTitle",children:"UniShop"}),Object(b.jsxs)(y.a.Brand,{as:h.b,to:"/cart",href:"#home",className:"d-flex justify-content-end align-items-center w-25 m-0 pr-2 pl-0",children:[Object(b.jsx)(w.a,{src:"https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1620035862~hmac=c134dfe427174161081dd31161d70b90",alt:"cartIcon",className:"imageClass"}),Object(b.jsx)(y.a.Text,{className:"text-white pl-1 fontCart",children:a})]}),Object(b.jsx)(y.a.Collapse,{id:"basic-navbar-nav ",children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(C.a.Link,{eventKey:"1",as:h.b,to:"/kuhinja",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Kuhinja"}),Object(b.jsx)(C.a.Link,{eventKey:"2",as:h.b,to:"/vrt",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Vrt"}),Object(b.jsx)(C.a.Link,{eventKey:"3",as:h.b,to:"/sport",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Sport"}),Object(b.jsx)(C.a.Link,{eventKey:"4",as:h.b,to:"/relax",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Relax"}),Object(b.jsx)(C.a.Link,{eventKey:"5",as:h.b,to:"/drugo",className:"d-lg-none d-xl-none text-white fontText pl-2",children:"Drugo"})]})}),Object(b.jsxs)(y.a,{className:"d-none d-lg-block d-xl-block w-100",children:[Object(b.jsx)(O.a,{as:h.b,to:"/kuhinja",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Kuhinja"}),Object(b.jsx)(O.a,{as:h.b,to:"/vrt",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Vrt"}),Object(b.jsx)(O.a,{as:h.b,to:"/sport",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Sport"}),Object(b.jsx)(O.a,{as:h.b,to:"/relax",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Relax"}),Object(b.jsx)(O.a,{as:h.b,to:"/drugo",variant:"info",style:{width:"15%",margin:"0 2.5%"},children:"Drugo"})]})]})}a(93);function I(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("h1",{children:Object(b.jsx)(h.b,{to:"/admin",children:"Admin"})})})}a(94);var S=a(106);function T(){var e=Object(c.useContext)(x),t=Object(o.a)(e,20),a=(t[0],t[1],t[2]),n=(t[3],t[4],t[5],t[6],t[7],t[8]),s=t[9],r=t[10],i=(t[11],t[12],t[13],t[14]);t[15],t[16],t[17],t[18],t[19];return Object(b.jsx)("div",{className:"cart pt-2 pb-1",children:0===r.length?Object(b.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(b.jsx)("h1",{className:"text-white",children:"Your cart is empty.."}),Object(b.jsx)("img",{className:"emptyCartImg",alt:"emptyCart",src:"https://www.finfunmermaid.com/static/version1615882237/frontend/bsp/bartleby/en_US/images/icons/ff-sad-empty-cart.svg"})]}):Object(b.jsxs)("div",{children:[r.map((function(e,t){return Object(b.jsxs)("div",{className:"d-flex \r align-items-center \r m-1 p-1 border \r border-white rounded\r cartItem",children:[Object(b.jsx)("img",{src:e.fotoImg[0].lnk,alt:e.name,className:"rounded cartItemImg"}),Object(b.jsx)("h1",{className:"text-center text-white cartItemName",children:Object(b.jsx)(h.b,{to:"/detail/".concat(e._id),className:"text-white",children:e.name})}),Object(b.jsxs)("h2",{className:"text-center text-black cartItemPrice",children:[e.nrOfItems," x ",e.price," \u20ac"]}),Object(b.jsxs)("div",{className:"cartItemBtns",children:[a.map((function(t,a){if(e._id===t._id&&t.stock>0)return Object(b.jsx)(O.a,{className:"cartBtn",variant:"success m-1",onClick:function(){return n(e._id)},children:"Add"},a)})),Object(b.jsx)(O.a,{className:"cartBtn",variant:"danger m-1",onClick:function(){return s(e._id)},children:"Delete"})]})]},t)})),Object(b.jsxs)(S.a,{children:[Object(b.jsxs)("h1",{className:"text-center d-flex flex-column align-items-center",children:["Total:"," ",Object(b.jsxs)("span",{style:{display:"flex",color:"red"},children:[" ",i," \u20ac"]})]}),Object(b.jsx)("p",{className:"text-center",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(b.jsx)("p",{className:"text-center",children:Object(b.jsx)(O.a,{as:h.b,to:"/userData",variant:"primary",children:"Confirm"})})]})]})})}a(28);function _(){var e=Object(c.useContext)(x),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(b.jsxs)("div",{className:"kategorije",children:[Object(b.jsxs)(u.a,{className:"text-center featCard",children:[Object(b.jsx)(u.a.Header,{children:"Featured"}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:"Special title treatment"}),Object(b.jsx)(u.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(b.jsx)(O.a,{variant:"primary",children:"Go somewhere"})]}),Object(b.jsx)(u.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Kuhinja"===e.category)return Object(b.jsxs)(u.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(b.jsx)(u.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:e.name}),Object(b.jsx)(u.a.Text,{children:e.shortDesc}),Object(b.jsx)(O.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}function B(){var e=Object(c.useContext)(x),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(b.jsxs)("div",{className:"kategorije",children:[Object(b.jsxs)(u.a,{className:"text-center featCard",children:[Object(b.jsx)(u.a.Header,{children:"Featured"}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:"Special title treatment"}),Object(b.jsx)(u.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(b.jsx)(O.a,{variant:"primary",children:"Go somewhere"})]}),Object(b.jsx)(u.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Vrt"===e.category)return Object(b.jsxs)(u.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(b.jsx)(u.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:e.name}),Object(b.jsx)(u.a.Text,{children:e.shortDesc}),Object(b.jsx)(O.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}function F(){var e=Object(c.useContext)(x),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(b.jsxs)("div",{className:"kategorije",children:[Object(b.jsxs)(u.a,{className:"text-center featCard",children:[Object(b.jsx)(u.a.Header,{children:"Featured"}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:"Special title treatment"}),Object(b.jsx)(u.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(b.jsx)(O.a,{variant:"primary",children:"Go somewhere"})]}),Object(b.jsx)(u.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Sport"===e.category)return Object(b.jsxs)(u.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(b.jsx)(u.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:e.name}),Object(b.jsx)(u.a.Text,{children:e.shortDesc}),Object(b.jsx)(O.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}function D(){var e=Object(c.useContext)(x),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(b.jsxs)("div",{className:"kategorije",children:[Object(b.jsxs)(u.a,{className:"text-center featCard",children:[Object(b.jsx)(u.a.Header,{children:"Featured"}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:"Special title treatment"}),Object(b.jsx)(u.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(b.jsx)(O.a,{variant:"primary",children:"Go somewhere"})]}),Object(b.jsx)(u.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Relax"===e.category)return Object(b.jsxs)(u.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(b.jsx)(u.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:e.name}),Object(b.jsx)(u.a.Text,{children:e.shortDesc}),Object(b.jsx)(O.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}function E(){var e=Object(c.useContext)(x),t=Object(o.a)(e,4),a=(t[0],t[1],t[2]);t[3];return Object(b.jsxs)("div",{className:"kategorije",children:[Object(b.jsxs)(u.a,{className:"text-center featCard",children:[Object(b.jsx)(u.a.Header,{children:"Featured"}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:"Special title treatment"}),Object(b.jsx)(u.a.Text,{children:"With supporting text below as a natural lead-in to additional content."}),Object(b.jsx)(O.a,{variant:"primary",children:"Go somewhere"})]}),Object(b.jsx)(u.a.Footer,{className:"text-muted",children:"2 days ago"})]}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:a.map((function(e,t){if("Drugo"===e.category)return Object(b.jsxs)(u.a,{style:{maxWidth:300},className:"mx-1 my-1",children:[Object(b.jsx)(u.a.Img,{variant:"top",src:e.fotoImg[0].lnk,alt:e.name}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Title,{children:e.name}),Object(b.jsx)(u.a.Text,{children:e.shortDesc}),Object(b.jsx)(O.a,{as:h.b,to:"/detail/".concat(e._id),variant:"primary",children:"View More"})]})]},t)}))})]})}a(95);function P(e){var t=e.match,a=Object(c.useContext)(x),n=Object(o.a)(a,12),s=(n[0],n[1],n[2]),r=n[3],l=(n[4],n[5],n[6],n[7],n[8]),j=(n[9],n[10],n[11],t.params.id),d=function(e){var t=s.map((function(e){return e._id===j?Object(i.a)(Object(i.a)({},e),{},{fotoImg:e.fotoImg.map((function(e){return!0===e.active?Object(i.a)(Object(i.a)({},e),{},{active:!1}):e}))}):e})).map((function(t){return t._id===j?Object(i.a)(Object(i.a)({},t),{},{fotoImg:t.fotoImg.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{active:!0}):t}))}):t}));r(t)};return Object(b.jsx)("div",{className:"detail",children:s.map((function(e,t){if(e._id===j)return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"detailTop d-flex justify-content-between mb-2",children:[Object(b.jsxs)("div",{className:"detailTopLeft d-flex justify-content-between mt-2",children:[Object(b.jsx)("div",{className:"detailSmall",children:e.fotoImg.map((function(e,t){return!0===e.active?Object(b.jsx)("div",{className:"detailSmallActive m-1",children:Object(b.jsx)(w.a,{src:e.lnk,alt:"smallFoto",onClick:function(){return d(e.id)}})},t):Object(b.jsx)("div",{className:"detailSmallPassive m-1",children:Object(b.jsx)(w.a,{src:e.lnk,alt:"smallFoto",onClick:function(){return d(e.id)}})},t)}))}),Object(b.jsx)("div",{className:"detailBig m-1",children:e.fotoImg.map((function(e,t){if(!0===e.active)return Object(b.jsx)(w.a,{src:e.lnk,alt:"bigFoto"},t)}))})]}),Object(b.jsxs)("div",{className:"detailTopRight text-white text-center mt-2",children:[Object(b.jsx)("h1",{children:e.name}),Object(b.jsxs)("p",{children:["Price: ",e.price," \u20ac"]}),Object(b.jsxs)("p",{children:["In Stock: ",e.stock]}),Object(b.jsx)("div",{children:e.stock>0?Object(b.jsx)(O.a,{onClick:function(){return l(e._id)},variant:"success",children:"Add"}):Object(b.jsx)(b.Fragment,{})})]})]}),Object(b.jsx)("div",{className:"detailBottom m-1 text-white",children:Object(b.jsx)("p",{children:e.longDesc})})]},t)}))})}var W=a(59),G=(a(53),a(107));function K(){var e=Object(l.f)(),t=Object(c.useContext)(x),a=Object(o.a)(t,20),n=(a[0],a[1],a[2]),s=a[3],r=(a[4],a[5]),i=(a[6],a[7]),j=(a[8],a[9],a[10]),m=a[11],h=(a[12],a[13]),u=a[14],p=(a[15],a[16],a[17]),f=(a[18],a[19]),g=Object(c.useState)(""),v=Object(o.a)(g,2),y=v[0],N=v[1],w=Object(c.useState)(""),C=Object(o.a)(w,2),k=C[0],I=C[1],S=Object(c.useState)(""),T=Object(o.a)(S,2),_=T[0],B=T[1],F=Object(c.useState)(""),D=Object(o.a)(F,2),E=D[0],P=D[1],K=Object(c.useState)(!1),A=Object(o.a)(K,2),q=A[0],L=A[1];return Object(b.jsx)("div",{className:"userData",children:Object(b.jsxs)(G.a,{onSubmit:function(t){t.preventDefault();var a={name:k,email:y,address:_,city:E,total:u,payment:!0===q?"Cash - after delivery":"Credit Card",cart:j.map((function(e){return{namee:e.name,pricee:e.price,nrOfItemss:e.nrOfItems}}))};p((function(e){return[].concat(Object(W.a)(e),[a])})),N(""),I(""),B(""),P(""),!0===q?(m([]),h(0),f(n),r(n.sort((function(e,t){return t.sold-e.sold})).slice(3,5)),i(n.sort((function(e,t){return t.sold-e.sold})).slice(0,3)),e.push("/successPage"),d.a.patch("http://localhost:5000/api/products",{allProducts:n}).then((function(e){s(e.data),console.log("afterDelivery")})),d.a.post("http://localhost:5000/api/newOrder",a).then((function(){d.a.post("http://localhost:5000/api/send-email",a,{withCredentials:!0}).then((function(){console.log("send mail")})).catch((function(e){return console.log("Mail sent but error: ",e)}))}))):(console.log("withCard"),e.push("/cardComponent"))},className:"p-1",children:[Object(b.jsx)(G.a.Group,{controlId:"formBasicName",className:"p-1",children:Object(b.jsx)(G.a.Control,{onChange:function(e){I(e.target.value)},type:"text",name:"name",value:k,placeholder:"Enter name",required:!0})}),Object(b.jsx)(G.a.Group,{controlId:"formBasicEmail",className:"p-1",children:Object(b.jsx)(G.a.Control,{onChange:function(e){e.target.value,N(e.target.value)},type:"email",name:"email",value:y,placeholder:"Enter email",required:!0})}),Object(b.jsx)(G.a.Group,{controlId:"formBasicName",className:"p-1",children:Object(b.jsx)(G.a.Control,{onChange:function(e){B(e.target.value)},type:"text",name:"address",value:_,placeholder:"Enter address",required:!0})}),Object(b.jsx)(G.a.Group,{controlId:"formBasicEmail",className:"p-1",children:Object(b.jsx)(G.a.Control,{onChange:function(e){P(e.target.value)},type:"text",name:"city",value:E,placeholder:"Enter city",required:!0})}),Object(b.jsxs)(G.a.Group,{controlId:"formBasicCheckbox",className:"p-1",children:[Object(b.jsx)(G.a.Check,{type:"radio",class:"form-check-input",id:"validationFormCheck2",name:"radio-stacked",required:!0,label:"Placilo po povzetju",onClick:function(){return L(!0)}}),Object(b.jsx)(G.a.Check,{type:"radio",class:"form-check-input",id:"validationFormCheck3",name:"radio-stacked",required:!0,label:"Placilo z kartico",onClick:function(){return L(!1)}})]}),Object(b.jsx)(O.a,{variant:"success m-1",type:"submit",style:{width:150},children:"Submit"})]})})}a(96);function A(){var e=Object(c.useContext)(x),t=Object(o.a)(e,20),a=(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15],t[16]);t[17],t[18],t[19];return Object(b.jsx)("div",{className:"successPage",children:a.length>0?Object(b.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center text-white",children:[Object(b.jsxs)("h1",{children:["Thank you ",a[a.length-1].name.toUpperCase()," ","for your order!"]}),Object(b.jsx)(w.a,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrA-Hjwh0PrysnRa-wKM7rY7rlSL4dT45Ivw&usqp=CAU",roundedCircle:!0})]}):Object(b.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center text-white",children:[Object(b.jsx)("h1",{children:"This is not the page you are looking for!"}),Object(b.jsx)("img",{style:{maxWidth:600},alt:"lostImg",src:"https://www.finfunmermaid.com/media/wysiwyg/fun-transition-page-graphics/ff-no-results-binoculars.svg"})]})})}a(97);function q(){var e=Object(c.useContext)(x),t=Object(o.a)(e,20),a=(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15],t[16]);t[17],t[18],t[19];return Object(b.jsx)("div",{className:"admin",children:0!==a.length?Object(b.jsx)("div",{children:a.map((function(e,t){return Object(b.jsxs)("div",{className:"purchase m-1",style:{border:"2px dotted white",borderRadius:5},children:[Object(b.jsxs)("div",{className:"text-white w-50 p-1",children:[Object(b.jsxs)("p",{className:"ejg1",children:[t+1,". ",e.name]}),Object(b.jsx)("p",{children:e.email}),Object(b.jsx)("p",{children:e.address}),Object(b.jsx)("p",{children:e.city})]}),Object(b.jsxs)("div",{className:"p-1",children:[e.cart.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:"ejg3",children:[e.namee," "]}),Object(b.jsxs)("p",{children:[e.nrOfItemss," x ",e.pricee," \u20ac"]})]},t)})),Object(b.jsxs)("h6",{children:["Payment method: ",e.payment]}),Object(b.jsxs)("p",{className:"text-warning ejg1",children:["Total: ",e.total," \u20ac"]})]})]},t)})).reverse()}):Object(b.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center text-white",children:[Object(b.jsx)("h1",{children:"C'mon make that first sale!"}),Object(b.jsx)("img",{style:{maxWidth:230},alt:"lostImg",src:"https://cdn.pixabay.com/photo/2014/12/21/23/57/money-576443_960_720.png"})]})})}var L=a(58),M=a(25),H=a(30),V=a.n(H),J=a(43);a(99);function z(e){var t=e.items,a=Object(c.useState)(!1),n=Object(o.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(null),j=Object(o.a)(i,2),m=j[0],h=j[1],u=Object(c.useState)(""),O=Object(o.a)(u,2),p=O[0],f=O[1],g=Object(c.useState)(!0),v=Object(o.a)(g,2),y=v[0],N=v[1],w=Object(c.useState)(""),C=Object(o.a)(w,2),k=C[0],I=C[1],S=Object(M.useStripe)(),T=Object(M.useElements)(),_=Object(c.useContext)(x),B=Object(o.a)(_,20),F=(B[0],B[1],B[2]),D=B[3],E=(B[4],B[5]),P=(B[6],B[7]),W=(B[8],B[9],B[10],B[11]),G=(B[12],B[13]),K=(B[14],B[15],B[16]),A=(B[17],B[18],B[19]),q=Object(l.f)();Object(c.useEffect)((function(){window.fetch("http://localhost:5000/api/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:t})}).then((function(e){return e.json()})).then((function(e){I(e.clientSecret)}))}),[]);var L=function(){var e=Object(J.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(t.empty),h(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(J.a)(V.a.mark((function e(t){var a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.next=4,S.confirmCardPayment(k,{payment_method:{card:T.getElement(M.CardElement)}});case 4:(a=e.sent).error?(h("Payment failed ".concat(a.error.message)),f(!1)):(h(null),f(!1),r(!0),d.a.patch("http://localhost:5000/api/products",{allProducts:F}).then((function(e){D(e.data),console.log("Card payment")})),d.a.post("http://localhost:5000/api/newOrder",K[K.length-1]).then((function(){d.a.post("http://localhost:5000/api/send-email",K[K.length-1],{withCredentials:!0}).then((function(){console.log("send mail")})).catch((function(e){return console.log("Mail sent but error: ",e)}))})),W([]),G(0),A(F),E(F.sort((function(e,t){return t.sold-e.sold})).slice(3,5)),P(F.sort((function(e,t){return t.sold-e.sold})).slice(0,3)),q.push("/successPage"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{className:"stripeForm",id:"payment-form",onSubmit:H,children:[Object(b.jsx)(M.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:L}),Object(b.jsx)("button",{className:"buttonStripe",disabled:p||y||s,id:"submit",children:Object(b.jsx)("span",{id:"button-text",children:p?Object(b.jsx)("div",{className:"spinner",id:"spinner"}):"Pay"})}),m&&Object(b.jsx)("div",{className:"card-error",role:"alert",children:m}),Object(b.jsx)("p",{className:s?"result-message":"result-message hidden",children:"Payment succeeded, see the result in your"})]})}function R(){var e=Object(L.a)("pk_test_51Hj18ZKqS56uvZe83wuhJjH6JFhxzj139IXZQAFhBT3NNzhJir4vntXcjEOha7Gw4JK6QQzD2Y2BEI4CFycD3LoW00GYaFr3so"),t=Object(c.useContext)(x),a=Object(o.a)(t,20),n=(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10]);a[11],a[12],a[13],a[14],a[15],a[16],a[17],a[18],a[19];return Object(b.jsxs)("div",{className:"cardComponent",children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(b.jsx)("h3",{children:"For testing purposes use this code: "}),Object(b.jsx)("p",{children:"4242 4242 4242 4242 - 04 / 24 - 242 - 42424"})]}),Object(b.jsx)(M.Elements,{stripe:e,children:Object(b.jsx)(z,{items:n})})]})}var U=Object(l.g)((function(){return Object(b.jsx)(m,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(k,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(v,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/cart",render:function(){return Object(b.jsx)(T,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/kuhinja",render:function(){return Object(b.jsx)(_,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/vrt",render:function(){return Object(b.jsx)(B,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/sport",render:function(){return Object(b.jsx)(F,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/drugo",render:function(){return Object(b.jsx)(E,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/relax",render:function(){return Object(b.jsx)(D,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/detail/:id",render:function(e){return Object(b.jsx)(P,Object(i.a)({},e))}}),Object(b.jsx)(l.a,{exact:!0,path:"/userData",render:function(){return Object(b.jsx)(K,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/successPage",render:function(){return Object(b.jsx)(A,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/admin",render:function(){return Object(b.jsx)(q,{})}}),Object(b.jsx)(l.a,{exact:!0,path:"/cardComponent",render:function(){return Object(b.jsx)(R,{})}})]}),Object(b.jsx)(I,{})]})})}));a(100);r.a.render(Object(b.jsx)(h.a,{children:Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(U,{})})}),document.getElementById("root"))},28:function(e,t,a){},53:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.56f1cf4e.chunk.js.map