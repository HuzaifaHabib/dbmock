(window.webpackJsonpnewapp=window.webpackJsonpnewapp||[]).push([[0],{103:function(e,t,a){e.exports=a(159)},108:function(e,t,a){},109:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),s=(a(108),a(19)),c=a(20),m=a(23),i=a(21),u=a(22),d=(a(109),a(160)),E=a(161),f=a(162),h=a(163),p=a(164),g=a(165),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"loading..."))},v="http://localhost:3000/",N=a(28);function O(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exittransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{src:v+t.image,alt:t.name}),r.a.createElement(f.a,null,r.a.createElement(h.a,null,t.name),t.designation?r.a.createElement(p.a,null,t.designation):null,r.a.createElement(g.a,null,t.description))))}var y=function(e){return console.log("Props is "+JSON.stringify(e)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-item-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(O,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrmess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(O,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrmess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(O,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrmess}))))},w=a(166),j=a(167),k=a(168),S=a(8);function D(e){var t=e.dish;return r.a.createElement("div",{key:t.id,className:"col-12 col-md-5 mt-1"},r.a.createElement(d.a,null,r.a.createElement(S.b,{to:"/menu/".concat(t.id)},r.a.createElement(E.a,{src:v+t.image}),r.a.createElement(w.a,null,r.a.createElement(h.a,null,t.name)))))}var L=function(e){var t=e.dishes.dishes.map((function(e){return r.a.createElement(D,{dish:e,key:e.id})}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errmess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errmess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(j.a,null,r.a.createElement(k.a,null,r.a.createElement(S.b,{to:"/home"},"Home")),r.a.createElement(k.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"))),r.a.createElement("div",{className:"row"},t))},M=a(6),P=a(169),C=a(187),F=a(170),x=a(171),I=a(172),A=a(173),T=a(9),R=a(47),_=a.n(R),H=function(e){return function(t){return!t||t.length<=e}},q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={isModalOpen:!1},a.toggleModal=a.toggleModal.bind(Object(M.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(M.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComments(this.props.dishId,e.rating,e.authorname,e.comment)}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(P.a,{onClick:this.toggleModal,outline:!0},r.a.createElement("span",{className:"fa fa-comments fa-lg"})," Submit Comment")),r.a.createElement("div",null,r.a.createElement(C.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(F.a,{toggle:this.toggleModal},"Submit Comments"),r.a.createElement(x.a,null,r.a.createElement(T.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(I.a,null,r.a.createElement(A.a,{htmlFor:"rating",md:2},"Rating"),r.a.createElement(_.a,{md:10},r.a.createElement(T.Control.select,{model:".rating",name:"rating",v:!0,className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(I.a,null,r.a.createElement(A.a,{htmlFor:"authorname",md:2},"Your Name"),r.a.createElement(_.a,{md:10},r.a.createElement(T.Control.text,{model:".authorname",name:"authorname",id:"authorname",className:"form-control",validators:{minlength:(e=3,function(t){return!t||t.length>=e}),maxLength:H(15)}}),r.a.createElement(T.Errors,{className:"text-danger",model:".authorname",show:"touched",messages:{minlength:" Must be greater than 2 Characters",maxLength:" Must be atleast 15 charecters or less"}}))),r.a.createElement(I.a,null,r.a.createElement(A.a,{htmlFor:"comment",md:2},"Comment"),r.a.createElement(_.a,{md:10},r.a.createElement(T.Control.textarea,{model:".comment",name:"comment",id:"comment",placeholder:"Your Message Here",rows:"6",className:"form-control"}))),r.a.createElement(I.a,null,r.a.createElement(_.a,{md:10},r.a.createElement(P.a,{color:"primary",type:"submit"},"Submit"))))))))}}]),t}(n.Component);function W(e){var t=e.dish;return null!=t?r.a.createElement(N.FadeTransform,{in:!0,transformProps:{exittransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{src:v+t.image}),r.a.createElement(f.a,null,r.a.createElement(h.a,null,t.name),r.a.createElement(g.a,null,t.description)))):r.a.createElement("div",null)}function G(e){var t=e.comments,a=e.postComments,n=e.dishId;if(null==t)return r.a.createElement("div",null);console.log(n);var l=t.map((function(e){return r.a.createElement(N.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", \xa0",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(e.date)))))}));return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null," Comments "),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(N.Stagger,{in:!0},l)),r.a.createElement(q,{dishId:n,postComments:a}))}var U=function(e){return console.log(e),e.isloading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errmess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errmess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(j.a,null,r.a.createElement(k.a,null,r.a.createElement(S.b,{to:"/home"},"Home")),r.a.createElement(k.a,null,r.a.createElement(S.b,{to:"/menu"},"Menu")),r.a.createElement(k.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 mt-1"},r.a.createElement(W,{dish:e.dish})),r.a.createElement(G,{comments:e.comments,postComments:e.postComments,dishId:e.dish.id}))):void 0},J=a(174),B=a(175),Y=a(176),K=a(177),z=a(178),Z=a(179),$=a(180),Q=a(181),V=a(182),X=a(60),ee=a.n(X),te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={isNavOpen:!1,isModalOpen:!1},a.togglenav=a.togglenav.bind(Object(M.a)(a)),a.toggleModal=a.toggleModal.bind(Object(M.a)(a)),a.handleLogin=a.handleLogin.bind(Object(M.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"togglenav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+"Password :"+this.password.value+"Remember :"+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(B.a,{onClick:this.togglenav}),r.a.createElement(Y.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante ConFusion"})),r.a.createElement(K.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(z.a,{navbar:!0},r.a.createElement(Z.a,null,r.a.createElement(S.c,{className:"nav-link",to:"/home"}," ",r.a.createElement("span",{className:" fa fa-home fa-lg"})," Home")),r.a.createElement(Z.a,null,r.a.createElement(S.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(Z.a,null,r.a.createElement(S.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(Z.a,null,r.a.createElement(S.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us")),r.a.createElement(Z.a,null,r.a.createElement(S.c,{className:"nav-link",to:"/hero"},r.a.createElement("span",{className:"fa fa-man fa-lg"})," Hero"))))),r.a.createElement(z.a,{className:"ml-auto"},r.a.createElement(Z.a,null,r.a.createElement("button",{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))),r.a.createElement($.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(C.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(F.a,{toggle:this.toggleModal},"Login"),r.a.createElement(x.a,null,r.a.createElement(Q.a,{onSubmit:this.handleLogin},r.a.createElement(ee.a,null,r.a.createElement(A.a,{htmlFor:"userName"},"Username"),r.a.createElement(V.a,{type:"text",id:"userName",name:"userName",innerRef:function(t){return e.username=t}})),r.a.createElement(ee.a,null,r.a.createElement(A.a,{htmlFor:"password"},"Password"),r.a.createElement(V.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(ee.a,{check:!0},r.a.createElement(A.a,{check:!0},r.a.createElement(V.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember Me")),r.a.createElement(P.a,{color:"primary",type:"submit",onClick:this.handleLogin},"Login")))))}}]),t}(n.Component);var ae=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(S.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},ne=a(183),re=a(184),le=function(e){return e&&e.length},oe=function(e){return function(t){return!t||t.length<=e}},se=function(e){return function(t){return!t||t.length>=e}},ce=function(e){return!isNaN(Number(e))},me=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(M.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("The Current State is "+JSON.stringify(e)),this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(j.a,null,r.a.createElement(k.a,null,r.a.createElement(S.b,{to:"/home"},"Home")),r.a.createElement(k.a,{active:!0},r.a.createElement(S.b,{to:"/contactus"},"Contact Us"))),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"#"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send Us your feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(T.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(re.a,{md:10},r.a.createElement(T.Control.text,{model:".firstname",name:"firstname",id:"firstname",placeholder:"First Name",className:"form-control",validators:{required:le,minlength:se(3),maxLength:oe(15)}}),r.a.createElement(T.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minlength:" Must be greater than 2 character",maxLength:" Must be less than 15 charecters or less"}}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(re.a,{md:10},r.a.createElement(T.Control.text,{model:".lastname",name:"lastname",id:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:le,minlength:se(3),maxLength:oe(15)}}),r.a.createElement(T.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minlength:" Must be greater than 2 character",maxLength:" Must be less than 15 charecters or less"}}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"telnum",md:2},"Telephone Number"),r.a.createElement(re.a,{md:10},r.a.createElement(T.Control.text,{model:".telnum",name:"telnum",id:"telnum",placeholder:"Phone Number",className:"form-control",validators:{required:le,minlength:se(3),maxLength:oe(15),isNumber:ce}}),r.a.createElement(T.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:" Required",minlength:" Must be greater than 2 Numbers",maxLength:" Must be less than 15 charecters or less",isNumber:" Must be a number"}}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"Email",md:2},"Email"),r.a.createElement(re.a,{md:10},r.a.createElement(T.Control.text,{model:".email",name:"email",id:"email",placeholder:"Email ID",className:"form-control",validators:{required:le,validEmail:me}}),r.a.createElement(T.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(re.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check",check:!0},r.a.createElement(A.a,{check:!0},r.a.createElement(T.Control.checkbox,{model:".agree",name:"agree",className:"form-check"})," "," ",r.a.createElement("strong",null,"May We Contact you?")))),r.a.createElement(re.a,{md:{size:3,offset:1}},r.a.createElement(T.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(A.a,{htmlFor:"Feedback",md:2},"Feedback"),r.a.createElement(re.a,{md:10},r.a.createElement(T.Control.textarea,{model:".message",name:"message",id:"message",placeholder:"Email ID",rows:"12",className:"form-control"}))),r.a.createElement(ne.a,{className:"form-group"},r.a.createElement(re.a,{md:{size:10,offset:2}},r.a.createElement(P.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),ue=a(185),de=a(186);function Ee(e){var t=e.leader;return r.a.createElement(N.Fade,{in:!0},r.a.createElement("div",null,r.a.createElement("div",{key:t.id,className:"col-12 mt-5"},r.a.createElement(ue.a,{tag:"li"},r.a.createElement(ue.a,{left:!0,middle:!0},r.a.createElement(ue.a,{object:!0,src:t.image,alt:t.name})),r.a.createElement(ue.a,{body:!0,className:"ml-5"},r.a.createElement(ue.a,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description))))))}var fe=function(e){if(e.leaders.isLoading)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null)));if(e.errmess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errmess)));if(null!=e.leaders){console.log("I am Console"+JSON.stringify(e.leaders));var t=e.leaders.leaders.map((function(e){return r.a.createElement(Ee,{leader:e,key:e.id})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(j.a,null,r.a.createElement(k.a,null,r.a.createElement(S.b,{to:"/home"},"Home")),r.a.createElement(k.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.a,null,r.a.createElement(de.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(f.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.a,null,r.a.createElement(f.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(ue.a,{list:!0},r.a.createElement(N.Stagger,{in:!0},t)))))}},he=a(32),pe=a(26),ge=function(){return{type:"DISHES_LOADING"}},be=function(e){return{type:"DISHES_FAILED",payload:e}},ve=function(e){return{type:"ADD_DISHES",payload:e}},Ne=function(e){return{type:"COMMENTS_FAILED",payload:e}},Oe=function(e){return{type:"ADD_COMMENTS",payload:e}},ye=function(){return{type:"PROMOS_LOADING"}},we=function(e){return{type:"PROMOS_FAILED",payload:e}},je=function(e){return{type:"ADD_PROMOS",payload:e}},ke=function(){return{type:"PROMOS_LOADING"}},Se=function(e){return{type:"LEADERS_FAILED",payload:e}},De=function(e){return{type:"ADD_LEADERS",payload:e}},Le=a(59),Me=a(96),Pe=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(te,null),r.a.createElement(Le.a,null,r.a.createElement(Me.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(he.d,null,r.a.createElement(he.b,{path:"/home",component:function(){return r.a.createElement(y,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrmess:e.props.dishes.errmess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrmess:e.props.promotions.errmess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrmess:e.props.leaders.errmess})}}),r.a.createElement(he.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(L,{dishes:e.props.dishes})}}),r.a.createElement(he.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(ie,{postFeedback:e.props.postFeedback,resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(he.b,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(U,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isloading:e.props.dishes.isLoading,errmess:e.props.dishes.errmess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrmess:e.props.comments.errmess,postComments:e.props.postComments})}}),r.a.createElement(he.b,{path:"/aboutus",component:function(){return r.a.createElement(fe,{leaders:e.props.leaders})}}),r.a.createElement(he.a,{to:"/home"})))),r.a.createElement(ae,null))}}]),t}(n.Component),Ce=Object(he.g)(Object(pe.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComments:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(v+"comments",{method:"post",body:JSON.stringify(l),headers:{"content-Type":"application/JSON"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post Comment :"+e.message),alert("your Comment couldnt be posted\nError:"+e.message)}))}}(t,a,n,r))},fetchDishes:function(){e((function(e){return e(ge(!0)),fetch(v+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ve(t))})).catch((function(t){return e(be(t.message))}))}))},resetFeedbackForm:function(){e(T.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(v+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Oe(t))})).catch((function(t){return e(Ne(t.message))}))}))},fetchPromos:function(){e((function(e){return e(ye()),fetch(v+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(je(t))})).catch((function(t){return e(we(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(ke()),fetch(v+"leaders").then((function(e){if(e.ok)return console.log("This is "+e),e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(De(t))})).catch((function(t){return e(Se(t.message))}))}))},postFeedback:function(e,t,a,n,r,l,o){return function(e,t,a,n,r,l,o){var s={firstname:e,lastname:t,telnum:a,email:n,agree:r,contactType:l,message:o};return s.date=(new Date).toISOString(),fetch(v+"feedback",{method:"post",body:JSON.stringify(s),headers:{"content-Type":"application/JSON"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return alert("Thank You for your feedback "+JSON.stringify(e))})).catch((function(e){console.log("Post feedback :"+e.message),alert("your feedback couldnt be posted\nError:"+e.message)}))}(e,t,a,n,r,l,o)}}}))(Pe)),Fe=a(16),xe=a(27);function Ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ie(a,!0).forEach((function(t){Object(Fe.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Ae({},e,{isLoading:!1,errmess:null,dishes:t.payload});case"DISHES_LOADING":return Ae({},e,{isLoading:!0,errmess:null,dishes:[]});case"DISHES_FAILED":return Ae({},e,{isLoading:!1,errmess:t.payload,dishes:[]});default:return e}};function Re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _e(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Re(a,!0).forEach((function(t){Object(Fe.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Re(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return _e({},e,{isLoading:!1,errmess:null,promotions:t.payload});case"PROMOS_LOADING":return _e({},e,{isLoading:!0,errmess:null,promotions:[]});case"PROMOS_FAILED":return _e({},e,{isLoading:!1,errmess:t.payload,promotions:[]});default:return e}};function qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function We(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?qe(a,!0).forEach((function(t){Object(Fe.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):qe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return We({},e,{isLoading:!1,errmess:null,leaders:t.payload});case"PROMOS_LOADING":return We({},e,{isLoading:!0,errmess:null,leaders:[]});case"LEADERS_FAILED":return We({},e,{isLoading:!1,errmess:t.payload,leaders:[]});default:return e}};function Ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ue(a,!0).forEach((function(t){Object(Fe.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ue(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Je({},e,{isLoading:!1,errmess:null,comments:t.payload});case"COMMENTS_FAILED":return Je({},e,{isLoading:!1,errmess:t.payload,comments:[]});case"ADD_COMMENT":var a=t.payload;return console.log(e.comments.concat(a)),Je({},e,{comments:e.comments.concat(a)});default:return e}},Ye=a(100),Ke=a(101),ze=a.n(Ke),Ze={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"tel.",message:""};function $e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Qe=Object(xe.createStore)(Object(xe.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$e(a,!0).forEach((function(t){Object(Fe.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$e(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({dishes:Te,promotions:He,leaders:Ge,comments:Be},Object(T.createForms)({feedback:Ze}))),Object(xe.applyMiddleware)(Ye.a,ze.a)),Ve=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(pe.Provider,{store:Qe},r.a.createElement(S.a,null,r.a.createElement("div",null,r.a.createElement(Ce,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(156),a(157),a(158);o.a.render(r.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[103,1,2]]]);
//# sourceMappingURL=main.dcae1514.chunk.js.map