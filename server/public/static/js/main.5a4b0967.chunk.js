(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(15),i=c.n(r),s=c(18),o=c.n(s),l=c(22),j=c(8),u=c(19),d=(c(69),[{title:"Favorites",url:"/favoriterecipes"},{title:"My Recipes",url:"/myrecipes"},{title:"Log out",url:"/logout"},{title:"Swipe",url:"/demo"}]),b=c(32),O=c(2),p=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],r=d.map((function(e,t){var c=e.url,n=e.title;return Object(O.jsx)("li",{onClick:function(){return a(!1)},children:Object(O.jsx)(b.b,{exact:!0,to:c,activeClassName:"active",children:n})},t)}));return Object(O.jsxs)("nav",{children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsxs)("a",{href:"/demo",children:["Food",Object(O.jsx)("font",{children:"Finder"})]})}),Object(O.jsx)("div",{className:"menu-icon",onClick:function(){a(!c)},children:Object(O.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(O.jsx)("ul",{className:c?"menu-list":"menu-list close",children:r})]})},x=[{title:"Login",url:"/"},{title:"Register",url:"/register"}],h=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],r=x.map((function(e,t){var c=e.url,n=e.title;return Object(O.jsx)("li",{onClick:function(){return a(!1)},children:Object(O.jsx)(b.b,{exact:!0,to:c,activeClassName:"active",children:n})},t)}));return Object(O.jsxs)("nav",{children:[Object(O.jsx)("div",{className:"logo",children:Object(O.jsxs)("a",{href:"/",children:["Food",Object(O.jsx)("font",{children:"Finder"})]})}),Object(O.jsx)("div",{className:"menu-icon",onClick:function(){a(!c)},children:Object(O.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(O.jsx)("ul",{className:c?"menu-list":"menu-list close",children:r})]})},f=c(43),m=c(36),v=c(84),g=c(23),N=c.n(g),w=c(88),y=function(e){var t=e.i,c=e.x,n=e.y,a=e.rot,r=e.scale,i=e.trans,s=e.bind,o=e.data;if(o&&o.length&&o[t]){console.log(o[t]);var l=o[t],j=l.id,u=l.title,d=l.readyInMinutes,b=l.image;return Object(O.jsx)(m.a.div,{style:{transform:Object(m.b)([c,n],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))},children:Object(O.jsx)(m.a.div,Object(f.a)(Object(f.a)({},s(t,j)),{},{style:{transform:Object(m.b)([a,r],i)},children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)(w.a,{children:Object(O.jsx)("img",{src:b,alt:"foodPicture"})}),Object(O.jsx)("h3",{className:"cardtitle",children:u}),Object(O.jsxs)("h5",{children:[Object(O.jsx)("i",{className:"far fa-clock"})," ",d," minutes"]})]})}))},t)}return null},C=(c(79),function(e){return{x:0,y:-1*e,scale:1,rot:6*Math.random()-3,delay:210*e}}),k=function(e,t){return"perspective(1500px) rotateX(12deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")};var R=function(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)((function(){return new Set})),i=Object(j.a)(r,1)[0],s=Object(n.useState)([{}]),u=Object(j.a)(s,2),d=u[0],b=u[1],p=Object(n.useState)([]),x=Object(j.a)(p,2),h=x[0],g=x[1],w=Object(n.useState)(0),R=Object(j.a)(w,2),S=R[0],I=R[1],L=Object(m.c)(10,(function(e){return Object(f.a)(Object(f.a)({},C(e)),{},{from:{rot:0,scale:1,y:-1e3}})})),F=Object(j.a)(L,2),P=F[0],M=F[1],E=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/recipe-card");case 2:t=e.sent,console.log(t.data),b(t.data),console.log("recipes gathered");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/members-only/addlike",{recipe_id:t});case 2:c=e.sent,console.log(c.data),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){E()}),[]),Object(n.useEffect)((function(){!function(){var e=d.slice(10*c,10*(c+1)).map((function(e){return{id:e.id,title:e.title,readyInMinutes:e.readyInMinutes,image:e.image}}));g(e),console.log("Current recipes updated",e.length)}()}),[d,c]),Object(n.useEffect)((function(){0!==S&&(a(c+1),console.log("Next stack",c))}),[S]);var B=Object(v.a)((function(e){var t=Object(j.a)(e.args,2),c=t[0],n=t[1],a=e.down,r=Object(j.a)(e.delta,1)[0],s=(e.distance,Object(j.a)(e.direction,1)[0]),o=e.velocity,l=s<0?-1:1;!a&&o>.2&&i.add(c),M((function(e){if(c===e){a||1!==l||0===l||T(n),a||-1!==l||(console.log(e),console.log("swiped left"));var t=i.has(c);return{x:t?(200+window.innerWidth)*l:a?r:0,rot:r/100+(t?10*l*o:0),scale:a?1.1:1,delay:void 0,config:{friction:20,tension:a?800:t?200:500}}}})),a||10!==i.size||(setTimeout((function(){return i.clear()||M((function(e){return C(e)}))}),600),I((new Date).getTime()))}));return P.map((function(e,t){var c=e.x,n=e.y,a=e.rot,r=e.scale;return Object(O.jsx)(y,{i:t,x:c,y:n,rot:a,scale:r,trans:k,data:h,bind:B},t)}))},S=function(){return Object(O.jsx)("div",{id:"deckroot",children:Object(O.jsx)(R,{})})},I=c(167),L=function(e){var t=e.preparation.split("."),c=e.ingredients;return Object(O.jsx)("div",{className:"fav-div",children:Object(O.jsx)("div",{className:"favcontainer",id:"favcontainer",children:Object(O.jsxs)("div",{className:"favcontinner",id:"favcontinner",children:[Object(O.jsx)("div",{onClick:e.hide,className:"Favline",children:Object(O.jsx)("div",{className:"title-div",children:Object(O.jsx)("h2",{className:"fav-title",children:e.title})})}),Object(O.jsx)("div",{className:"img-div",id:"favimgdiv",children:Object(O.jsx)("img",{className:"fav-image",src:e.image,alt:e.title})}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{className:"ingredient-title",children:"Ingredients"}),Object(O.jsx)("ul",{children:c.map((function(e){return Object(O.jsx)("li",{className:"ingredient-list",children:e})}))}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{className:"prep-title",children:"Preparation"}),Object(O.jsx)("ol",{children:t.map((function(e){return Object(O.jsx)("li",{className:"prep-list",children:e})}))}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"close-button-recipe-card",children:Object(O.jsx)(I.a,{color:"secondary",variant:"contained",className:"favbutton",onClick:e.hide,children:"Close"})})]})})})};function F(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1];return console.log(e),console.log(e.recipes),0===e.recipes.length?null:Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"myrecipes",children:[Object(O.jsx)("h1",{className:"PageTitle",children:"My Favorites"}),Object(O.jsx)("ul",{children:e.recipes.map((function(e){return e.Recipe?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{onClick:function(t){return r(e.Recipe.title)},className:"fav-list",children:e.Recipe.title},e.Recipe.id),e.Recipe&&e.Recipe.title===a&&Object(O.jsx)("li",{children:Object(O.jsx)(L,{hide:function(){r("")},title:e.Recipe.title,image:e.Recipe.image,ingredients:e.Recipe.ingredients,preparation:e.Recipe.preparation})},(new Date).getTime())]}):null}))}),Object(O.jsx)("br",{})]})]})}var P=c(17),M=c(55);var E=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(""),s=Object(j.a)(i,2),u=s[0],d=s[1],b=Object(n.useState)(""),p=Object(j.a)(b,2),x=p[0],h=p[1],f=function(){var t=Object(l.a)(o.a.mark((function t(c){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,N.a.post("/api/users/login",{username:a,password:u});case 4:n=t.sent,console.log(n),e.doLogin(),h("Logging in..."),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),h("Invalid username or password");case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"login-div",children:Object(O.jsxs)("div",{className:"login-card",children:[Object(O.jsx)("h1",{children:"Login"}),x&&Object(O.jsx)("h2",{className:"login-message",children:x}),Object(O.jsxs)(P.a,{onSubmit:f,children:[Object(O.jsxs)(P.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(P.a.Label,{children:"Username"}),Object(O.jsx)(P.a.Control,{value:a,placeholder:"Enter Username",onChange:function(e){return r(e.target.value)}}),Object(O.jsx)(P.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(O.jsxs)(P.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(P.a.Label,{children:"Password"}),Object(O.jsx)(P.a.Control,{type:"password",value:u,placeholder:"Password",onChange:function(e){return d(e.target.value)}})]}),Object(O.jsx)(P.a.Group,{controlId:"formBasicCheckbox",children:Object(O.jsx)(P.a.Check,{type:"checkbox",label:"Remember Me"})}),Object(O.jsx)(M.a,{variant:"primary",type:"submit",children:"Submit"}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"register-here",children:Object(O.jsx)("a",{href:"/register",children:"Register Here"})})]})]})})};var T=function(e){var t=function(){var t=Object(l.a)(o.a.mark((function t(c){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,N.a.post("/api/users/logout");case 3:n=t.sent,console.log(n),e.doLogout();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"logout-div",children:Object(O.jsx)("div",{className:"logout-button#",children:Object(O.jsx)(I.a,{color:"default",variant:"contained",className:"favbutton",onClick:t,children:"Logout"})})})};var B=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(""),s=Object(j.a)(i,2),u=s[0],d=s[1],b=Object(n.useState)(""),p=Object(j.a)(b,2),x=p[0],h=p[1],f=Object(n.useState)(""),m=Object(j.a)(f,2),v=m[0],g=m[1],w=function(){var t=Object(l.a)(o.a.mark((function t(c){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),u!==x){t.next=10;break}return t.next=4,N.a.post("/api/users/new",{usernameReg:a,passwordReg:u});case 4:n=t.sent,console.log(n),g("Creating User"),e.doLogin(),t.next=11;break;case 10:g("Passwords don't match");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"reg-div",children:Object(O.jsxs)("section",{className:"reg-card",children:[Object(O.jsx)("h1",{children:"Register"}),v&&Object(O.jsx)("h2",{children:v}),Object(O.jsxs)(P.a,{onSubmit:w,children:[Object(O.jsxs)(P.a.Group,{controlId:"formBasicEmail",children:[Object(O.jsx)(P.a.Label,{children:"Username"}),Object(O.jsx)(P.a.Control,{value:a,placeholder:"Enter Username",onChange:function(e){return r(e.target.value)}}),Object(O.jsx)(P.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(O.jsxs)(P.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(P.a.Label,{children:"Password"}),Object(O.jsx)(P.a.Control,{type:"password",value:u,placeholder:"Password",onChange:function(e){return d(e.target.value)}})]}),Object(O.jsxs)(P.a.Group,{controlId:"formBasicPassword",children:[Object(O.jsx)(P.a.Label,{children:"Re-enter Password"}),Object(O.jsx)(P.a.Control,{type:"password",placeholder:"Password",value:x,onChange:function(e){return h(e.target.value)}})]}),Object(O.jsx)(P.a.Group,{controlId:"formBasicCheckbox",children:Object(O.jsx)(P.a.Check,{type:"checkbox",label:"Remember Me"})}),Object(O.jsx)(M.a,{variant:"primary",type:"submit",children:"Register"})]})]})})},D=c(65),G=c(173),U=c(172),W=c(85),J=c.n(W),Y=c(86),_=c.n(Y),z=c(64),H=c(171),V=c(87),X=c.n(V),Z=Object(H.a)((function(e){return{root:{"& .MuiTextField-root":{background:"white",margin:e.spacing(2),width:300}},button:{margin:e.spacing(6),alignContent:"center"}}}));function q(e){var t=Object(n.useState)(!1),c=Object(j.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(""),s=Object(j.a)(i,2),u=s[0],d=s[1],b=Object(n.useState)(""),p=Object(j.a)(b,2),x=p[0],h=p[1],f=Object(n.useState)(""),m=Object(j.a)(f,2),v=m[0],g=m[1],w=Object(n.useState)(""),y=Object(j.a)(w,2),C=y[0],k=y[1],R=Z(),S=Object(n.useState)([{id:Object(z.v4)(),Ingredients:""}]),L=Object(j.a)(S,2),F=L[0],P=L[1];Object(n.useEffect)((function(){e.recipe&&d(e.recipe.title)}),[e]);var M=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("/api/members-only/addlike",{recipe_id:t});case 2:c=e.sent,console.log(c.data),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={inputFields:F.map((function(e){return e.Ingredients})),title:u,readyInMinutes:x,preparation:C},console.log(c),e.next=5,N.a.post("/api/recipes/add",c);case 5:n=e.sent,(new FormData).append("file",v),console.log(n),M(n.data.id),console.log(n.data.id);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){P([].concat(Object(D.a)(F),[{id:Object(z.v4)(),Ingredients:""}]))};return Object(O.jsx)("div",{className:"newform",children:Object(O.jsxs)("form",{className:R.root,onSubmit:E,action:"/profile",method:"post",encType:"multipart/form-data",children:[Object(O.jsx)("div",{className:"create-recipe-button",children:Object(O.jsx)(I.a,{onClick:function(){return r(!a)},variant:"contained",children:"Create New Recipe"})}),a?Object(O.jsxs)("div",{className:"form1",children:[Object(O.jsx)(G.a,{id:"filled-basic",value:u,onChange:function(e){d(e.target.value)},label:"Recipe Name",fullWidth:!0,variant:"filled"}),Object(O.jsx)("br",{}),Object(O.jsx)(G.a,{id:"filled-basic",label:"Cooking Time in Mins",variant:"filled",value:x,onChange:function(e){h(e.target.value)}}),F.map((function(e){return Object(O.jsxs)("div",{className:R.root,children:[Object(O.jsx)(G.a,{name:"Ingredients",label:"Ingredients",variant:"filled",value:e.Ingredients,onChange:function(t){return function(e,t){console.log(t.target.value);var c=F.map((function(c){return e===c.id&&(c[t.target.name]=t.target.value),c}));P(c)}(e.id,t)}}),Object(O.jsxs)(U.a,{disabled:1===F.length,onClick:function(){return function(e){var t=Object(D.a)(F);t.splice(t.findIndex((function(t){return t.id===e})),1),P(t)}(e.id)},children:[Object(O.jsx)(J.a,{}),Object(O.jsx)("br",{})]}),Object(O.jsx)(U.a,{onClick:T,children:Object(O.jsx)(_.a,{})})]},e.id)})),Object(O.jsx)(G.a,{id:"filled-multiline-static",label:"Instructions",multiline:!0,fullWidth:!0,rows:6,length:10,variant:"filled",value:C,onChange:function(e){k(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"choose-file",children:[Object(O.jsx)("input",{accept:"image/*",className:R.input,id:"icon-button-file",type:"file",name:"image",onChange:function(e){g(e.target.files[0])}}),Object(O.jsx)("label",{htmlFor:"icon-button-file",children:"Choose File"})]}),Object(O.jsx)("label",{htmlFor:"icon-button-file",children:Object(O.jsx)(U.a,{color:"black","aria-label":"upload picture",component:"span",children:Object(O.jsx)(X.a,{})})}),Object(O.jsx)("br",{}),Object(O.jsx)(I.a,{variant:"contained",onClick:E,children:"Create"})]}):null]})})}function A(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"myrecipes",children:[Object(O.jsx)("br",{}),Object(O.jsx)("h1",{className:"PageTitle",children:"My Recipes"}),Object(O.jsx)("ul",{children:e.recipes.map((function(e){return e.Recipe&&e.Recipe.id>187?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{onClick:function(t){return r(e.Recipe.title)},className:"fav-list",children:e.Recipe.title},e.Recipe.id),e.Recipe&&e.Recipe.title===a&&Object(O.jsx)("li",{children:Object(O.jsx)(L,{hide:function(){r("")},title:e.Recipe.title,image:e.Recipe.image,ingredients:e.Recipe.ingredients,preparation:e.Recipe.preparation})},(new Date).getTime())]}):null}))}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]}),Object(O.jsx)("div",{className:"myform",children:Object(O.jsx)(q,{})})]})}var K=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([{}]),i=Object(j.a)(r,2),s=i[0],d=i[1],b=Object(u.f)(),x=function(){console.log("You are now logged in"),a(!0),b.push("/")},f=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api/list/retrieveList");case 2:t=e.sent,console.log(t.data),d(t.data.myRecipes);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log("you are already logged in"),a(!0)}catch(t){console.log("error, not logged in"),a(!1)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){console.log("Value of isLoggedIn: ".concat(c)),c&&f()}),[c]),Object(O.jsx)("div",{className:"app1",children:Object(O.jsx)("div",{className:"container1",children:c?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p,{}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/",exact:!0,component:S}),Object(O.jsx)(u.a,{path:"/favoriterecipes",children:Object(O.jsx)(F,{recipes:s})}),Object(O.jsx)(u.a,{path:"/myrecipes",children:Object(O.jsx)(A,{recipes:s})}),Object(O.jsx)(u.a,{path:"/logout",children:Object(O.jsx)(T,{doLogout:function(){console.log("Logging out..."),a(!1)}})}),Object(O.jsx)(u.a,{path:"/demo",exact:!0,component:S})]})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsx)(u.c,{children:Object(O.jsx)(u.a,{path:"/",exact:!0,component:E,children:Object(O.jsx)(E,{doLogin:x})})}),Object(O.jsx)(u.c,{children:Object(O.jsx)(u.a,{path:"/register",exact:!0,component:B,children:Object(O.jsx)(B,{doLogin:x})})})]})})})};c(134);i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(K,{})})}),document.getElementById("root"))},69:function(e,t,c){},79:function(e,t,c){}},[[135,1,2]]]);
//# sourceMappingURL=main.5a4b0967.chunk.js.map