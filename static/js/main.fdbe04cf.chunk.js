(this.webpackJsonpflipkart=this.webpackJsonpflipkart||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c(33),n=c.n(a),i=(c(41),c(42),c(9)),j=c(2),r=Object(s.createContext)(null),l=Object(s.createContext)(null);function b(e){var t=e.children,c=Object(s.useState)("null"),a=Object(i.a)(c,2),n=a[0],r=a[1];return Object(j.jsx)(l.Provider,{value:{user:n,setUser:r},children:t})}var o=c(11),d=c(70),u=c(71),m=c(72);var O=function(){var e=Object(o.e)(),t=Object(s.useContext)(r).firebase,c=Object(s.useContext)(l).user;return Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{children:[" ",Object(j.jsx)(u.a,{children:Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(m.a,{xs:"",children:Object(j.jsx)("div",{className:"space"})}),Object(j.jsx)(m.a,{xs:"",children:Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{className:"img",src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"})})}),Object(j.jsx)(m.a,{xs:"",children:Object(j.jsx)("div",{className:"searchbar",children:Object(j.jsx)("input",{className:"input",type:"text",placeholder:"search for products,brands and more"})})}),Object(j.jsx)(m.a,{xs:"",children:Object(j.jsx)("div",{className:"btn",children:c?"":Object(j.jsx)("button",{className:"login",onClick:function(){return e.push("/login")},children:" Login"})})}),Object(j.jsxs)(m.a,{xs:"",children:[Object(j.jsx)("div",{className:"more",children:Object(j.jsx)("h4",{children:"More"})}),Object(j.jsx)("div",{className:"cart",children:Object(j.jsx)("h4",{children:"Cart"})})]}),Object(j.jsx)(m.a,{xs:"",children:c&&Object(j.jsx)("p",{className:"logout",onClick:function(){t.auth().signOut(),e.push("/login")},children:" Logout "})}),Object(j.jsx)(m.a,{xs:"",children:Object(j.jsx)("p",{className:"add",onClick:function(){e.push("/create")},children:"add"})})]})})]})})};c(48);var x=function(){return Object(j.jsxs)("div",{className:"banner",children:[Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{className:"image",src:"https://rukminim1.flixcart.com/flap/128/128/image/634095dbd3751807.png?q=100"}),Object(j.jsx)("p",{className:"p",children:" Mobile "})]}),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{className:"image",src:"https://rukminim1.flixcart.com/flap/128/128/image/b8c8a1076d07aa72.png?q=100"}),Object(j.jsx)("p",{className:"p",children:"Fashion "})]}),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{className:"image",src:"https://rukminim1.flixcart.com/flap/128/128/image/ca0e272331a3892c.png?q=100"}),Object(j.jsx)("p",{className:"p",children:"Electronics"})]}),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{className:"image",src:"https://rukminim1.flixcart.com/flap/128/128/image/634095dbd3751807.png?q=100"}),Object(j.jsx)("p",{className:"p",children:" Mobile "})]}),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{className:"image",src:"https://rukminim1.flixcart.com/flap/128/128/image/b8c8a1076d07aa72.png?q=100"}),Object(j.jsx)("p",{className:"p",children:"Fashion "})]}),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{className:"image",src:"https://rukminim1.flixcart.com/flap/128/128/image/ca0e272331a3892c.png?q=100"}),Object(j.jsx)("p",{className:"p",children:"Electronics"})]}),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{className:"image",src:"https://rukminim1.flixcart.com/flap/128/128/image/b8c8a1076d07aa72.png?q=100"}),Object(j.jsx)("p",{className:"p",children:"Fashion "})]})]})};c(49);var p=function(){return Object(j.jsx)("div",{className:"banner",children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"imgb2",src:"https://rukminim1.flixcart.com/flap/1688/280/image/2bf503338031dd0f.jpg?q=50"})})})},h=c(22),f=(c(50),Object(s.createContext)(null));var g=function(e){var t=e.children,c=Object(s.useState)(),a=Object(i.a)(c,2),n=a[0],r=a[1];return Object(j.jsx)(f.Provider,{value:{postDetails:n,setPostDetails:r},children:t})};var v=function(){var e=Object(s.useContext)(f).setPostDetails,t=Object(s.useState)([]),c=Object(i.a)(t,2),a=c[0],n=c[1],l=Object(s.useContext)(r).firebase,b=Object(o.e)();return Object(s.useEffect)((function(){l.firestore().collection("products").get().then((function(e){var t=e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})}));n(t)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"post-layer",children:a.map((function(t){return Object(j.jsxs)("div",{className:"post2",onClick:function(){e(t),b.push("/view")},children:[Object(j.jsxs)("div",{className:"postimgclass",children:[Object(j.jsx)("img",{className:"postimg",src:t.url}),Object(j.jsx)("p",{className:"category",children:t.name}),Object(j.jsx)("p",{className:"price",children:t.price}),Object(j.jsx)("p",{className:"content",children:"Apple,samsung and More"})]}),Object(j.jsx)("div",{className:"posttext"})]})}))})})};var N=function(){return Object(j.jsx)("div",{})};c(51);function C(){return Object(j.jsxs)("div",{className:"poster1",children:[Object(j.jsx)("div",{className:"poster",children:Object(j.jsx)("img",{className:"posterimg",src:"https://rukminim1.flixcart.com/flap/480/480/image/2f30db9425df5cec.jpg?q=50"})}),Object(j.jsx)("div",{className:"poster",children:Object(j.jsx)("img",{className:"posterimg",src:"https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50"})}),Object(j.jsx)("div",{className:"poster",children:Object(j.jsx)("img",{className:"posterimg",src:"https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50"})})]})}c(52);var w=function(){var e=Object(s.useContext)(r).firebase,t=Object(s.useState)([]),c=Object(i.a)(t,2),a=c[0],n=c[1],l=Object(s.useContext)(f).setPostDetails,b=Object(o.e)();return Object(s.useEffect)((function(){e.firestore().collection("products").get().then((function(e){var t=e.docs.map((function(e){return Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id})}));n(t),console.log(t)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"post-layer",children:a.map((function(e){return Object(j.jsxs)("div",{className:"post2",onClick:function(){l(e),b.push("/view")},children:[Object(j.jsxs)("div",{className:"postimgclass",children:[Object(j.jsx)("img",{className:"postimg",src:e.url}),Object(j.jsx)("p",{className:"category",children:e.name}),Object(j.jsxs)("p",{className:"price",children:["\u20b9",e.price]}),Object(j.jsx)("p",{className:"content",children:e.category})]}),Object(j.jsx)("div",{className:"posttext"})]})}))})})};c(53);var k=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsx)(x,{}),Object(j.jsx)(p,{}),Object(j.jsx)(v,{}),Object(j.jsx)(N,{}),Object(j.jsx)(C,{}),Object(j.jsx)(w,{})]})};c(56);var y=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),l=Object(i.a)(n,2),b=l[0],d=l[1],u=Object(s.useContext)(r).firebase,m=Object(o.e)();return Object(j.jsx)("div",{className:"background",children:Object(j.jsxs)("div",{className:"loginParentDiv",children:[Object(j.jsxs)("div",{className:"leftlogin",children:[Object(j.jsx)("span",{}),Object(j.jsx)("div",{}),Object(j.jsx)("p",{className:"textl",children:"Login"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{}),Object(j.jsx)("h4",{className:"text2",children:"Get access to Your Orders,"}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"text3",children:"Wishlist and Recommendations"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{}),Object(j.jsx)("img",{className:"imglogin",width:"200px",height:"200px",src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.auth().signInWithEmailAndPassword(c,b).then((function(){m.push("/")}))},className:"formclass",children:[Object(j.jsx)("label",{htmlFor:"fname",children:"Enter Email/Mobile Number"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",type:"email",id:"fname",name:"email",defaultValue:"John",value:c,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",type:"password",id:"lname",name:"password",defaultValue:"Doe",value:b,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{children:"Login"}),Object(j.jsx)("div",{className:"signup-class",onClick:function(e){m.push("/signin")},children:Object(j.jsx)("a",{className:"signup",children:"Signup"})})]})]})})};var S=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(y,{})})};c(57);var D=function(){var e=Object(o.e)(),t=Object(s.useState)(""),c=Object(i.a)(t,2),a=c[0],n=c[1],l=Object(s.useState)(""),b=Object(i.a)(l,2),d=b[0],u=b[1],m=Object(s.useState)(""),O=Object(i.a)(m,2),x=O[0],p=O[1],h=Object(s.useState)(""),f=Object(i.a)(h,2),g=f[0],v=f[1],N=Object(s.useContext)(r).firebase;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"signupParentDiv",children:[Object(j.jsx)("img",{className:"signupimg",width:"200px",height:"200px",src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),N.auth().createUserWithEmailAndPassword(d,g).then((function(t){t.user.updateProfile({displayName:a}).then((function(){N.firestore().collection("users").add({id:t.user.uid,username:a,phone:x}).then((function(){e.push("/login")}))}))}))},children:[Object(j.jsx)("label",{htmlFor:"fname",children:"Username"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",type:"text",id:"fname",name:"name",defaultValue:"Doe",value:a,onChange:function(e){return n(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"fname",children:"Email"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",type:"email",id:"fname",name:"email",defaultValue:"@gmail.com",value:d,onChange:function(e){return u(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"lname",children:"Phone"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",type:"number",id:"lname",name:"phone",defaultValue:"966..",value:x,onChange:function(e){return p(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"lname",children:"Password"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",type:"password",id:"lname",name:"password",defaultValue:"Doe",value:g,onChange:function(e){return v(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{children:"SignIn"})]}),Object(j.jsx)("a",{children:"Login"})]})})};var P=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsx)(D,{})]})};c(58);var F=function(){var e=Object(s.useState)(),t=Object(i.a)(e,2),c=(t[0],t[1],Object(s.useContext)(f).postDetails);return Object(s.useContext)(r).firebase,Object(s.useEffect)((function(){c.use}),[]),Object(j.jsxs)("div",{className:"viewParentDiv",children:[Object(j.jsx)("div",{className:"imageShowDiv",children:Object(j.jsx)("img",{className:"imageView",src:c.url,alt:""})}),Object(j.jsx)("div",{}),Object(j.jsxs)("div",{className:"rightSection",children:[Object(j.jsxs)("p",{style:{fontWeight:800,fontSize:28},children:[" ",c.name," "]}),Object(j.jsxs)("div",{className:"productDetails",children:[Object(j.jsxs)("p",{children:["\u20b9",c.price," "]}),Object(j.jsx)("span",{children:c.name}),Object(j.jsx)("p",{children:c.category})]}),Object(j.jsx)("div",{className:"contactDetails",children:Object(j.jsx)("p",{children:c.category})}),Object(j.jsx)("div",{className:"discription",children:Object(j.jsx)("p",{className:"para2",children:c.discription})})]}),Object(j.jsx)("p",{className:"para1"})]})};var E=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsx)(F,{})]})};c(59);var q=function(){var e=Object(s.useContext)(r).firebase,t=Object(s.useContext)(l).user,c=Object(s.useState)(""),a=Object(i.a)(c,2),n=a[0],b=a[1],d=Object(s.useState)(""),u=Object(i.a)(d,2),m=u[0],O=u[1],x=Object(s.useState)(""),p=Object(i.a)(x,2),h=p[0],f=p[1],g=Object(s.useState)(""),v=Object(i.a)(g,2),N=v[0],C=v[1],w=Object(s.useState)(null),k=Object(i.a)(w,2),y=k[0],S=k[1],D=(Object(o.e)(),new Date);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"hdr"}),Object(j.jsx)("h1",{className:"hdw",children:"Give Us We Will Market Your Product"}),Object(j.jsx)("card",{children:Object(j.jsxs)("div",{className:"centerDiv",children:[Object(j.jsx)("p",{htmlFor:"fname",children:"Sell Your Product"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"fname",children:"Name"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",type:"text",id:"fname",name:"Name",defaultValue:"John..",value:n,onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"fname",children:"Category"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",type:"text",id:"fname",name:"category",defaultValue:"Product Category",value:m,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"fname",children:"Discription"}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"index",id:"fname",rows:"5",name:"Discription",value:h,onChange:function(e){return f(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"fname",style:{fontWeight:"900"},children:"Price"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"input",type:"number",id:"fname",name:"Price",value:N,onChange:function(e){return C(e.target.value)}}),Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"imgdiv",children:Object(j.jsx)("img",{alt:"Posts",width:"200px",height:"200px",src:y?URL.createObjectURL(y):""})}),Object(j.jsxs)("form",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"file",className:"imgsize",onChange:function(e){return S(e.target.files[0])}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(c){c.preventDefault(),e.storage().ref("/image/".concat(y.name)).put(y).then((function(c){c.ref.getDownloadURL().then((function(c){e.firestore().collection("products").add({name:n,userId:t.uid,category:m,price:N,url:c,discription:h,createdAt:D.toDateString()})}))}))}.reset,className:"uploadBtn",children:"upload and Submit"})]})]})})]})};var L=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsx)(q,{})]})},V=c(17);var I=function(){var e=Object(s.useContext)(l).setUser,t=Object(s.useContext)(r).firebase;return Object(s.useEffect)((function(){t.auth().onAuthStateChanged((function(t){e(t)}))})),Object(j.jsx)("div",{children:Object(j.jsxs)(V.a,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(k,{})}),Object(j.jsx)(o.a,{path:"/signin",children:Object(j.jsx)(P,{})}),Object(j.jsx)(o.a,{path:"/view",children:Object(j.jsx)(E,{})}),Object(j.jsx)(o.a,{path:"/login",children:Object(j.jsx)(S,{})}),Object(j.jsx)(o.a,{path:"/create",children:Object(j.jsx)(L,{})})]})})},U=c(35),W=(c(64),c(65),c(66),U.a.initializeApp({apiKey:"AIzaSyBReoFD10Jl_6VEq9oFvD1E_J_LmgnVyn8",authDomain:"flipkart-beeb4.firebaseapp.com",databaseURL:"https://flipkart-beeb4-default-rtdb.firebaseio.com",projectId:"flipkart-beeb4",storageBucket:"flipkart-beeb4.appspot.com",messagingSenderId:"848917937823",appId:"1:848917937823:web:f759da8e28fdbe14562caa",measurementId:"G-3WHL95EV7L"}));c(67);n.a.render(Object(j.jsx)(r.Provider,{value:{firebase:W},children:Object(j.jsx)(b,{children:Object(j.jsx)(g,{children:Object(j.jsx)(I,{})})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.fdbe04cf.chunk.js.map