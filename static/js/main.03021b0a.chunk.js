(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(6),s=c.n(r),i=(c(11),c(2)),l=c(0);var o=function(e){return Object(l.jsx)("header",{children:e.children})};function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function b(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var d=function(e){var t=e.pages,c=void 0===t?[]:t,n=e.setCurrentPage,r=e.currentPage;return Object(a.useEffect)((function(){document.title=j(r.name)}),[r]),Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",id:"mainNav",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("a",{href:"/",className:"navbar-brand js-scroll-trigger",children:"Shane Crisostomo"}),Object(l.jsx)("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(l.jsx)("ul",{className:"navbar-nav ml-auto",children:c.map((function(e){return Object(l.jsx)("li",{className:"nav-item nav-link js-scroll-trigger ".concat(r.name===e.name&&"active"),children:Object(l.jsx)("span",{onClick:function(){return n(e)},children:j(e.name)})},e.name)}))})})]})})},m=function(e){return Object(l.jsx)("div",{children:e.children})};var h=function(){var e=Object(a.useState)([{name:"about me"}]),t=Object(i.a)(e,1)[0],c=Object(a.useState)(t[0]),n=Object(i.a)(c,1)[0];return Object(l.jsx)("div",{className:"masthead text-center text-white d-flex",children:Object(l.jsx)("div",{className:"container my-auto",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-lg-10 mx-auto",children:[Object(l.jsx)("h1",{children:j(n.name)}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{className:"text-faded mb-5",children:"Aspiring front-end developer with robust experience in cyber security and cloud services."}),Object(l.jsx)("p",{className:"text-faded mb-5",children:"My experience in cybersecurity and full-stack web development has enabled me to see how things are, but what could be. These traditionally separate fields have become more interdependent and these experience has taught me to think creatively in solving challenging problems, while always being attentive to details and the cascade of events that can result from one decision. Collaboration, effective written and verbal communicaton, and critical thinking are invaluable skills that are the cornerstone of my education and abilities."})]})})})})};var u=function(e){var t=e.project,c=t.name,a=t.repo,n=t.link,r=t.description;return Object(l.jsx)("div",{className:"col-lg-4 col-sm-6",children:Object(l.jsxs)("div",{className:"portfolio-box",children:[Object(l.jsx)("img",{alt:b(c),className:"img-fluid"}),Object(l.jsx)("div",{className:"portfolio-box-caption",children:Object(l.jsxs)("div",{className:"portfolio-box-caption-content",children:[Object(l.jsx)("a",{href:a,className:"project-category text-faded",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fab fa-github"})}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:n,className:"project-category text-faded",target:"_blank",rel:"noreferrer",children:b(c)})," ",Object(l.jsx)("p",{className:"project-name",children:r})]})})]},c)})};var x=function(){var e=Object(a.useState)([{name:"portfolio"}]),t=Object(i.a)(e,1)[0],c=Object(a.useState)(t[0]),n=Object(i.a)(c,1)[0],r=Object(a.useState)([{name:"quizzam",description:"Interactive Full-Stack Project",link:"https://quizam-project2.herokuapp.com/",repo:"https://github.com/shaner3423/quizam/blob/main/README.md"},{name:"find-fresh",description:"Interactive Front-End Project",link:"https://shaner3423.github.io/Find-nFresh/",repo:"https://github.com/shaner3423/Find-nFresh"},{name:"portfolio",description:"HTML/CSS",link:"https://shaner3423.github.io/portfolio/",repo:"https://github.com/shaner3423/portfolio"}]),s=Object(i.a)(r,1)[0];return Object(l.jsx)("section",{className:"p-0",children:Object(l.jsxs)("div",{className:"container-fluid p-0",children:[Object(l.jsx)("h1",{className:"text-center margin-top",children:j(n.name)}),Object(l.jsx)("hr",{className:"my-4"}),Object(l.jsx)("div",{className:"row no-gutters popup-gallery",children:s.map((function(e,t){return Object(l.jsx)(u,{project:e},"project"+t)}))})]})})},O=c(3),p=c(5);var f=function(){var e=Object(a.useState)([{name:"contact"}]),t=Object(i.a)(e,1)[0],c=Object(a.useState)(t[0]),n=Object(i.a)(c,1)[0],r=Object(a.useState)({name:"",email:"",message:""}),s=Object(i.a)(r,2),o=s[0],b=s[1],d=Object(a.useState)(""),m=Object(i.a)(d,2),h=m[0],u=m[1],x=o.name,f=o.email,v=o.message,g=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."));h||(b(Object(p.a)(Object(p.a)({},o),{},Object(O.a)({},e.target.name,e.target.value))),console.log("Handle Form",o))};return Object(l.jsx)("section",{className:"bg-dark",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-lg-10 mx-auto text-white mb-4",children:[Object(l.jsx)("h1",{className:"text-center",children:j(n.name)}),Object(l.jsx)("hr",{className:"light my-4"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),h||console.log("Submit Form",o)},className:"mb-5",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{className:"form-control",placeholder:"Name",type:"text",name:"name",defaultValue:x,onBlur:g})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{className:"form-control",placeholder:"Email",type:"email",name:"email",defaultValue:f,onBlur:g})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{className:"form-control",placeholder:"Message",name:"message",rows:"5",defaultValue:v,onBlur:g})]}),h&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:h})}),Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-primary btn-xl js-scroll-trigger",children:"Submit"})})]}),Object(l.jsxs)("h4",{children:["Shane Crisostomo  ",Object(l.jsx)("br",{}),"Or simply send me an email at:  ",Object(l.jsx)("a",{href:"mailto:scrisostomo17@gmail.com",children:" scrisostomo17@gmail.com"})]})]})})})})},v=c.p+"static/media/S.Crisostomo-Resume.653131ed.pdf";var g=function(){var e=Object(a.useState)([{name:"resume"}]),t=Object(i.a)(e,1)[0],c=Object(a.useState)(t[0]),n=Object(i.a)(c,1)[0];return Object(l.jsx)("section",{className:"bg-dark",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-lg-10 mx-auto text-white mb-4",children:[Object(l.jsx)("h1",{className:"text-center",children:j(n.name)}),Object(l.jsx)("hr",{className:"light my-4"}),Object(l.jsx)("h3",{children:"Front-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"Git"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"}),Object(l.jsx)("li",{children:"Bulma"}),Object(l.jsx)("li",{children:"Materialize"})]}),Object(l.jsx)("h3",{children:"Back-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL, Sequelize, SQLite"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"MERN Stack"})]}),Object(l.jsx)("h3",{children:"Additional Skills and Certification"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Network+"}),Object(l.jsx)("li",{children:"Security+"}),Object(l.jsx)("li",{children:"CompTIA A+ Certification"}),Object(l.jsx)("li",{children:"Certified Ethical Hacker Certifiation"}),Object(l.jsx)("li",{children:"Python"}),Object(l.jsx)("li",{children:"Amazon Web Services"}),Object(l.jsx)("li",{children:"Amazon Web Services Cloud Practitioner "})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{className:"text-center",children:Object(l.jsx)("a",{href:v,className:"text-faded white-link",download:!0,children:"Download my resume"})})]})})})})};var N=function(e){var t=e.currentPage;return Object(l.jsx)("section",{children:Object(l.jsx)(m,{children:function(){switch(t.name){default:return Object(l.jsx)(h,{});case"portfolio":return Object(l.jsx)(x,{});case"contact":return Object(l.jsx)(f,{});case"resume":return Object(l.jsx)(g,{})}}()})})};var S=function(){return Object(l.jsx)("section",{className:"footer",children:Object(l.jsx)("footer",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-lg-8 mx-auto text-center",children:[{name:"fab fa-github",link:"https://github.com/shaner3423"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/shane-crisostomo/"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/users/story/15880698"}].map((function(e){return Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:e.name})},e.name)}))})})})})};var k=function(){var e=Object(a.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(i.a)(e,1)[0],c=Object(a.useState)(t[0]),n=Object(i.a)(c,2),r=n[0],s=n[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{children:Object(l.jsx)(d,{pages:t,setCurrentPage:s,currentPage:r})}),Object(l.jsx)("main",{children:Object(l.jsx)(N,{currentPage:r})}),Object(l.jsx)(S,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),w()}},[[13,1,2]]]);
//# sourceMappingURL=main.03021b0a.chunk.js.map