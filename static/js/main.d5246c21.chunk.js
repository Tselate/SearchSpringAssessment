(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(5),r=a.n(c),i=(a(11),a(4)),o=a.n(i),l=a(6),u=a(2),m=a(0);var j=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(u.a)(c,2),i=r[0],j=r[1],h=Object(s.useState)(""),b=Object(u.a)(h,2),g=b[0],p=b[1],d=Object(s.useState)(""),O=Object(u.a)(d,2),f=O[0],x=O[1],v=Object(s.useState)(""),N=Object(u.a)(v,2),S=N[0],P=N[1],y=JSON.parse(sessionStorage.getItem("paginationKey")),I=JSON.parse(sessionStorage.getItem("itemsKey"))||[],C=JSON.parse(sessionStorage.getItem("searchKey")),F=function(){var e=Object(l.a)(o.a.mark((function e(t){var s,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s="https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&q=".concat(a,"&resultsFormat=native&page=").concat(S||1," "),e.prev=2,e.next=5,fetch(s);case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,p(c.results),x(c.pagination),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),alert("Item not found");case 16:j(""!==a?a:C);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){g&&I.splice(0,1,g),sessionStorage.setItem("itemsKey",JSON.stringify(I))}),[g,I,a]),Object(s.useEffect)((function(){P(1)}),[a]),g&&(sessionStorage.setItem("paginationKey",JSON.stringify(f)),sessionStorage.setItem("searchKey",JSON.stringify(i)));var J=[];if(y){var k=y.totalPages,B=y.currentPage+2,K=y.currentPage-2;K<1&&(K=1,k=y.totalPages),y.currentPage===y.totalPages&&((K=y.totalPages-4)<1&&(K=1),k=y.totalPages);for(var q=K;q<=B;q++)B>=k&&(B=y.totalPages),J.push(q);1!==y.currentPage&&J.unshift("<"),y.currentPage!==y.totalPages&&J.push(">")}function w(e){"<"===e.target.value?1===y.currentPage?P(1):P(y.previousPage):">"===e.target.value?y.currentPage===y.totalPages?P(y.totalPages):P(y.nextPage):"<"===e.target.value&&">"===e.target.value||P(e.target.value),n(C)}return I[0]?Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsx)("h6",{className:"logo",children:"SearchSpring"}),Object(m.jsxs)("form",{name:"myForm",className:"search-form",onSubmit:F,children:[Object(m.jsx)("input",{type:"text",name:"item",placeholder:"Search here...",className:"searchInput",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),Object(m.jsx)("button",{className:"searchBtn",type:"submit",children:"Search"})]})]}),Object(m.jsxs)("div",{className:"paginationContainer",children:[" ",Object(m.jsxs)("h6",{className:"resultAmt",children:["Showing ",y.perPage," results"]}),Object(m.jsx)("form",{onSubmit:F,children:J.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{type:"submit",name:"subBtn",className:"btn",value:e,onClick:w,children:e},e.value)})}))})]}),Object(m.jsx)("div",{className:"resultDisplay",children:I[0].map((function(e){return Object(m.jsx)("div",{className:"itemCard",children:Object(m.jsxs)("div",{className:"itemInfo",children:[Object(m.jsx)("img",{className:"itemImg",src:e.imageUrl,alt:"Item"}),Object(m.jsx)("p",{className:"itemName",children:e.name}),e.msrp>e.price?Object(m.jsxs)("p",{className:"itemMsrp",children:["$",e.msrp,".00"]}):null,Object(m.jsxs)("p",{className:"itemPrice",children:["$",e.price%1!==0?"".concat(e.price,"0"):"".concat(e.price,".00")]})]},e.uid)})}))}),Object(m.jsx)("div",{className:"paginationContainer",children:Object(m.jsx)("form",{onSubmit:F,className:" bottomPagination",children:J.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{type:"submit",name:"subBtn",className:"btn",value:e,onClick:w,children:e},e.value)})}))})})]}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsx)("h6",{className:"logo",children:"SearchSpring"}),Object(m.jsxs)("form",{name:"myForm",className:"search-form",onSubmit:F,children:[Object(m.jsx)("input",{type:"text",name:"item",placeholder:"Search here...",className:"searchInput",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),Object(m.jsx)("button",{className:"searchBtn",type:"submit",children:"Search"})]})]}),Object(m.jsx)("div",{className:"initialMessage",children:Object(m.jsx)("p",{children:"Let's go shopping!!"})})]})};a(14);var h=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(j,{})})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.d5246c21.chunk.js.map