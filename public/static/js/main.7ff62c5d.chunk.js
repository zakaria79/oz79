(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{110:function(e,t,a){e.exports=a(143)},115:function(e,t,a){},116:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(115),a(10)),i=a(6),s=a(15),u=a(40),m=(a(116),a(144)),p=a(188),E=a(189),d=a(48),f=a(191),b=a(190),g=a(82),h=a.n(g),v=a(85),w=a.n(v),y=a(83),O=a.n(y),j=a(23),k=a(26),S=a.n(k),P=a(43),D=a(28),x=a.n(D),N=Object(m.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}),C=Object(j.b)(function(e){return{user:e.user}},{logout:function(){return function(){var e=Object(P.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/users/logout");case 3:if(!(a=e.sent).data.error){e.next=7;break}return console.log(a),e.abrupt("return");case 7:t({type:"LOGOUT",payload:{}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()}})(function(e){var t=N(),a=e.user;return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(b.a,{onClick:e.toggleDrawer("left",!0),edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(h.a,null)),r.a.createElement(d.a,{variant:"h6",className:t.title},"Zakaria Othmane"),a.isLoggedIn?r.a.createElement(f.a,{color:"inherit",onClick:e.logout},r.a.createElement(O.a,null)):r.a.createElement(f.a,{color:"inherit"},r.a.createElement(s.b,{to:"/signin",style:{color:"white"}},r.a.createElement(w.a,null))))))}),A=a(208),L=a(192),I=a(196),M=a(193),T=a(194),W=a(195),q=a(94),F=a.n(q),J=a(86),R=a.n(J),_=a(87),U=a.n(_),H=a(88),B=a.n(H),z=a(89),G=a.n(z),Q=a(90),V=a.n(Q),Z=a(93),K=a.n(Z),Y=a(91),$=a.n(Y),X=a(92),ee=a.n(X),te=Object(m.a)({list:{width:250},fullList:{width:"auto"},link:{color:"rgba(0, 0, 0, 0.87)"},homeLink:{color:"#3f51b5",lineHeight:".1"},homeSmall:{fontSize:".5rem"}});function ae(e){var t,a=te();return r.a.createElement("div",null,r.a.createElement(A.a,{open:e.state.left,onClose:e.toggleDrawer("left",!1)},(t="left",r.a.createElement("div",{className:a.list,role:"presentation",onClick:e.toggleDrawer(t,!1),onKeyDown:e.toggleDrawer(t,!1)},r.a.createElement(L.a,null,r.a.createElement(s.b,{className:a.homeLink,to:"/"},r.a.createElement(M.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(R.a,{color:"primary"})),r.a.createElement("div",null,r.a.createElement(W.a,{primary:"Zakaria Othmane"}),r.a.createElement("div",null,r.a.createElement("small",{className:a.homeSmall},"D\xe9veloppeur Fullstack")))))),r.a.createElement(I.a,null),r.a.createElement(L.a,null,r.a.createElement(s.b,{className:a.link,to:"/a-propos"},r.a.createElement(M.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(U.a,null)),r.a.createElement(W.a,{primary:"\xc0 Propos"}))),r.a.createElement(s.b,{className:a.link,to:"/competences"},r.a.createElement(M.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(B.a,null)),r.a.createElement(W.a,{primary:"Mes Comp\xe9tences"}))),r.a.createElement(s.b,{className:a.link,to:"/langages"},r.a.createElement(M.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(G.a,null)),r.a.createElement(W.a,{primary:"Langages"}))),r.a.createElement(s.b,{className:a.link,to:"/frameworks"},r.a.createElement(M.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(V.a,null)),r.a.createElement(W.a,{primary:"Frameworks"}))),r.a.createElement(s.b,{className:a.link,to:"/orm-odm-db"},r.a.createElement(M.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement($.a,null)),r.a.createElement(W.a,{primary:"ORM et ODM"}))),r.a.createElement(s.b,{className:a.link,to:"/environements"},r.a.createElement(M.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(ee.a,null)),r.a.createElement(W.a,{primary:"Environements"}))),r.a.createElement(s.b,{className:a.link,to:"/realisations"},r.a.createElement(M.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(K.a,null)),r.a.createElement(W.a,{primary:"Mes R\xe9alisations"}))),r.a.createElement(s.b,{className:a.link,to:"/contact"},r.a.createElement(M.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(F.a,null)),r.a.createElement(W.a,{primary:"Contact"}))))))))}var ne=a(204),re=a(198),le=a(197),ce=a(95),oe=a.n(ce);function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var se=Object(m.a)(function(e){return{textField:{width:"100%",boxSizing:"border-box"},textField2:{width:"80%"},h2:{color:"#2ecc71"},formWrapper:{width:"95%",margin:"auto"},button:{margin:e.spacing(1),textAlign:"right"},rightIcon:{marginLeft:e.spacing(1)},buttonBlock:{textAlign:"center"}}}),ue=function(e){var t=Object(n.useState)({email:"test@test.com",message:"Je souhaiterais vous contacter..."}),a=Object(i.a)(t,2),l=a[0],c=a[1],s=function(e){var t=e.currentTarget,a=t.value,n=t.name;c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},l,Object(o.a)({},n,a)))},u=se();return r.a.createElement("div",{className:"ContactForm"},r.a.createElement("h2",{className:u.h2},"Contactez-moi!"),r.a.createElement("p",null,"N'h\xe9sitez pas \xe0 me contacter pour tout type de projet web"),r.a.createElement("div",{className:u.formWrapper},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),x.a.post("/contacts",l).then(function(e){console.log(e)}).catch(function(e){return console.log("[Erreur] : "+e)})}},r.a.createElement("div",{className:u.textField},r.a.createElement(le.a,{style:{width:"100%"},container:!0,spacing:1,alignItems:"flex-end",justify:"center"},r.a.createElement(le.a,{item:!0},r.a.createElement(oe.a,null)),r.a.createElement(le.a,{style:{width:"85%"},item:!0},r.a.createElement(ne.a,{style:{width:"100%"},id:"input-with-icon-grid",onChange:s,name:"email",label:"E-mail",value:l.email})))),r.a.createElement(ne.a,{id:"outlined-textarea",name:"message",onChange:s,label:"Votre message",placeholder:"Je souhaiterais \xe9changer avec vous au sujet de...",value:l.message,multiline:!0,className:u.textField,margin:"normal",variant:"outlined"}),r.a.createElement("div",{className:u.buttonBlock},r.a.createElement(f.a,{variant:"contained",type:"submit",color:"primary",className:u.button},"Envoyer",r.a.createElement(re.a,{className:u.rightIcon},"send"))))))},me=Object(m.a)(function(e){return{h1:{color:"#3f51b5",fontSize:"1.3rem"},h2:{color:"#3f51b5"}}}),pe=Object(j.b)(function(e){return{user:e.user}},null)(function(e){var t=me();return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",{className:t.h1},"D\xe9veloppeur web ind\xe9pendant"),r.a.createElement("p",null,"D\xe9veloppement de Site et Applications Web pour entreprises et particuliers"),r.a.createElement("h2",{className:t.h2},"Mes services"),r.a.createElement("p",null,"Cr\xe9ation de Sites et Applications web sur mesure. Du d\xe9veloppement \xe0 la mise en production"),r.a.createElement("p",null,"Refonte ou ajout de fonctionnalit\xe9s sur projets existants"),r.a.createElement("h2",{className:t.h2},"Technologies"),r.a.createElement("p",null,"PHP, Node JS, React JS, Express JS..."),r.a.createElement(ue,null))}),Ee=(a(141),function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"2016 - 2017 :\xa0",r.a.createElement("a",{href:"https://www.lesitedelassurance.fr",target:"_blank",rel:"noopener noreferrer"},"lesitedelassurance")),r.a.createElement("p",null,"J'ai cr\xe9\xe9 un\xa0",r.a.createElement("a",{href:"https://www.lesitedelassurance.fr",target:"_blank",rel:"noopener noreferrer"},"lesitedelassurance")," ","pour un courtier en assurance. J'ai pu pr\xe9senter ce projet pour obtenir mon dipl\xf4me de fin de fomation (Titre RNCP \xe9quivalent BAC+2)"),r.a.createElement("p",null,"J'ai d\xfb d'ailleurs utiliser beaucoup de code natif (PHP, JS, SQL...) dans ce projet puisque c'\xe9tait ce qui \xe9tait demand\xe9 par le jury."),r.a.createElement("p",null,"J'y ai cr\xe9\xe9 un calendrier/agenda avec gestion de RDVs, \xe9v\xe9nements r\xe9currents, vues multiples (jour, semaine, mois), enti\xe8rement en code natif. Ce qui m'a fait consid\xe9rablement monter en comp\xe9tence."))}),de=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"2018 - 2019 :\xa0",r.a.createElement("a",{href:"https://www.i2si.fr",target:"_blank",rel:"noopener noreferrer"},"I2SI")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.i2si.fr",target:"_blank",rel:"noopener noreferrer"},"I2SI")," ","cr\xe9e des logiciels pour les courtiers, assureurs, et autres professionnels des m\xe9tiers de la construction."),r.a.createElement("p",null,"J'ai travailler sur le projet CapData (d\xe9veloppement, maintenance, assistance...), cr\xe9\xe9 par\xa0",r.a.createElement("a",{href:"https://www.i2si.fr",target:"_blank",rel:"noopener noreferrer"},"I2SI"),"."),r.a.createElement("p",null,"La r\xe9glementation des contrats de construction (CMI) \xe9tant tr\xe8s strict (loi-1990), CapData permet de faciliter et d'automatiser au maximum les processus :"),r.a.createElement("ul",{style:{listStyle:"initial"}},r.a.createElement("li",null,"Suivi des chantiers"),r.a.createElement("li",null,"D\xe9livrance des attestations"),r.a.createElement("li",null,"Acc\xe8s aux dossiers par les diff\xe9rents acteurs concern\xe9s (compagnies d'assurance, courtiers, partenaires, distributeurs, constructeurs, commerciaux...)"),r.a.createElement("li",null,"Plusieurs passerelles (API) entre CapData et les IDE et logiciels des diff\xe9rents acteurs (compagnies, courtiers, constructeurs...) permettant plus d'automatisation"),r.a.createElement("li",null,"Configuration tr\xe8s pouss\xe9e (permissions, fonctionnalit\xe9s, produits...)"),r.a.createElement("li",null,"Gestion des signatures \xe9lectroniques"),r.a.createElement("li",null,"GED"),r.a.createElement("li",null,"...")),r.a.createElement("h3",null,"Technologies utilis\xe9es par dans ce projet"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.i2si.fr",target:"_blank",rel:"noopener noreferrer"},"I2SI")," ","D\xe9veloppe principalement avec son propre framework (PHP, JS, SQL), cr\xe9\xe9 et maintenu par son \xe9quipe de d\xe9veloppeurs."),r.a.createElement("p",null,"Cela permet de r\xe9pondre \xe0 des besoins importants de performances, et de moins d\xe9pendre d'autres technologies qui \xe9voluent tr\xe8s vite, parfois sans r\xe9trocompatibilit\xe9, et qui risquent ne plus \xeatre maintenues."))},fe=function(e){return r.a.createElement("div",{className:"APropos"},r.a.createElement("h1",null,"Mon Parcours"),r.a.createElement("h2",null,"Formations"),r.a.createElement("h3",null,"2015 - 2016 : Formation en ligne"),r.a.createElement("p",null,"Comme tous les ",r.a.createElement("em",null,"autodidactes"),", j'ai commenc\xe9 \xe0 me former (2015) en ligne \xe0 l'aide de plateformes telles que :"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://openclassrooms.com",target:"_blank",rel:"noopener noreferrer"},"openclassrooms.com")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.codecademy.com",target:"_blank",rel:"noopener noreferrer"},"codecademy.com")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.udemy.com",target:"_blank",rel:"noopener noreferrer"},"udemy.com")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://developer.mozilla.org",target:"_blank",rel:"noopener noreferrer"},"developer.mozilla.org")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.php.net",target:"_blank",rel:"noopener noreferrer"},"php.net")),r.a.createElement("li",{style:{color:"gray",fontStyle:"italic"}},"\xa0et beaucoup d'autres...")),r.a.createElement("p",null,"J'ai pu acqu\xe9rir de bonnes bases dans le d\xe9veloppement web ( PHP, SQL, Javascript, HTML, CSS) ainsi que dans l'environement Linux (",r.a.createElement("i",null,"Bash, ssh..."),")"),r.a.createElement("h3",null,"2016 - 2017 :\xa0",r.a.createElement("a",{href:"https://diplome.3wa.fr/othmane-zakaria",target:"_blank",rel:"noopener noreferrer"},"3W Academy")," ","(Paris)"),r.a.createElement("p",null,"Puis j'ai suivi une formation de",r.a.createElement("a",{href:"https://diplome.3wa.fr/othmane-zakaria",target:"_blank",rel:"noopener noreferrer"}," ","D\xe9veloppeur Int\xe9grateur en r\xe9alisation d'Applications Web")," ","(2016) \xe0 la 3W Academy de Paris."),r.a.createElement("p",null,"Formation intensive bas\xe9e sur la pratique"),r.a.createElement("h3",null,"2015 - 2019 : Veille constante"),r.a.createElement("p",null,"Je fais beaucoup de veille technologique. Le Web \xe9volue \xe0 une tr\xe8s grande vitesse. De nouveaux frameworks appara\xeessent tous les jours et il est tr\xe8s facile de s'y perdre."),r.a.createElement("p",null,"J'essaie de tester les technos et solutions qui parra\xeessent le plus int\xe9ressantes (Docker, Devops, IA, AWS...) et de m'y int\xe9resser de plus pr\xe8s quand je pense qu'elles sont pertinentes (ce qui n'est pas le cas avec tout ce qui est nouveau !)"),r.a.createElement("h2",null,"Experience"),r.a.createElement(Ee,null),r.a.createElement(de,null),r.a.createElement("h3",null,"Ao\xfbt 2019"),r.a.createElement("p",null,"D\xe9veloppeur Fullstack Ind\xe9pendant"),r.a.createElement(ue,null))},be=function(e){return r.a.createElement("div",{className:"Languages"},r.a.createElement("h3",null,"Langages Informatiques"),r.a.createElement("ul",null,r.a.createElement("li",null,"PHP (5/7)"),r.a.createElement("li",null,"Javascript (ES5/ES6)"),r.a.createElement("li",null,"SQL (MySQL/MariaDB)"),r.a.createElement("li",null,"HTML5"),r.a.createElement("li",null,"CSS3"),r.a.createElement("li",null,"Bash (bases)"),r.a.createElement("li",null,"Python (notions)"),r.a.createElement("li",null,"C++ (notions)")))},ge=function(e){return r.a.createElement("div",{className:"Frameworks"},r.a.createElement("h3",null,"Frameworks"),r.a.createElement("ul",null,r.a.createElement("li",null,"Express JS"),r.a.createElement("li",null,"React JS"),r.a.createElement("li",null,"Symfony"),r.a.createElement("li",null,"Django (notions)")))},he=function(e){return r.a.createElement("div",{className:"OrmOdmDB"},r.a.createElement("h3",null,"Bases de donn\xe9es"),r.a.createElement("ul",null,r.a.createElement("li",null,"MySQL"),r.a.createElement("li",null,"MariaDB"),r.a.createElement("li",null,"MongoDB")),r.a.createElement("h3",null,"ORM/ODM et utilitaires"),r.a.createElement("ul",null,r.a.createElement("li",null,"Doctrine (bases)"),r.a.createElement("li",null,"Mongoose (bases)"),r.a.createElement("li",null,"PhpMyAdmin"),r.a.createElement("li",null,"Compass")))},ve=function(e){return r.a.createElement("div",{className:"Environements"},r.a.createElement("h3",null,"Syst\xe8mes d'exploitations"),r.a.createElement("ul",null,r.a.createElement("li",null,"Linux (Ubuntu, Debian)"),r.a.createElement("li",null,"Windows (7, 10)")),r.a.createElement("h3",null,"Environement"),r.a.createElement("ul",null,r.a.createElement("li",null,"Lamp (Linux, Apache, MySQL, PHP)"),r.a.createElement("li",null,"Node JS, npm"),r.a.createElement("li",null,"Composer (PHP)"),r.a.createElement("li",null,"Git (bases)"),r.a.createElement("li",null,"Docker (notions)"),r.a.createElement("li",null,"AWS (notions)"),r.a.createElement("li",null,"Webpack")),r.a.createElement("h3",null,"IDE et \xe9diteurs"),r.a.createElement("ul",null,r.a.createElement("li",null,"VIM"),r.a.createElement("li",null,"Sublime Text"),r.a.createElement("li",null,"Visual Studio Code"),r.a.createElement("li",null,"Atom"),r.a.createElement("li",null,"Rapid PHP")))},we=function(e){return r.a.createElement("div",{className:"APropos"},r.a.createElement("h2",null,"Mes Comp\xe9tences"),r.a.createElement(be,null),r.a.createElement(ge,null),r.a.createElement(he,null),r.a.createElement(ve,null),r.a.createElement(ue,null))},ye=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Mes R\xe9alisations"),r.a.createElement(Ee,null),r.a.createElement(de,null),r.a.createElement("div",null,r.a.createElement("h3",null,"Exemples de fonctionnalit\xe9s"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/camera"},"Cam\xe9ra/photo")))),r.a.createElement(ue,null))},Oe=function(e){return r.a.createElement(ue,null)},je=a(201),ke=a(200),Se=a(202),Pe=a(207),De=a(96),xe=a.n(De),Ne=a(199);function Ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ce(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ce(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Le=Object(m.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),Ie=Object(j.b)(function(e){return{user:e.user}},{updateUser:function(e){return function(t){return t({type:"UPDATE_USER",payload:e})}}})(function(e){var t=e.user,a=Le(),l=Object(n.useState)({login:"truc",password:"a",rememberme:!0}),c=Object(i.a)(l,2),s=c[0],m=c[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),b=E[0],g=E[1];if(t.isLoggedIn&&t.roles.includes("admin"))return r.a.createElement(u.a,{to:"/admin"});var h=function(e){var t=e.currentTarget,a=t.name,n=t.value;m(Ae({},s,Object(o.a)({},a,n)))};return r.a.createElement(Ne.a,{component:"main",maxWidth:"xs"},b&&r.a.createElement("div",{style:{color:"red",textAlign:"center",marginTop:"2rem"}},b),r.a.createElement(ke.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(je.a,{className:a.avatar},r.a.createElement(xe.a,null)),r.a.createElement(d.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(t){t.preventDefault(),x.a.post("/users/signin",s).then(function(t){if(t.data.error)return console.log(t),g(t.data.message);g(""),console.log(t),e.updateUser(t.data)}).catch(function(e){return console.log(e)})}},r.a.createElement(ne.a,{onChange:h,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:s.login,id:"login",label:"Login",name:"login",autoComplete:"login",autoFocus:!0}),r.a.createElement(ne.a,{onChange:h,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",value:s.password,label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(Se.a,{control:r.a.createElement(Pe.a,{onChange:function(e){m(Ae({},s,{rememberme:e.currentTarget.checked}))},value:"remember",checked:s.rememberme,color:"primary"}),label:"Remember me"}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"))))}),Me=a(203),Te=a(205),We={padding:".3rem"},qe=function(){return r.a.createElement("div",{className:"Footer",style:We},r.a.createElement(Te.a,{mt:8},r.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"D\xe9velopp\xe9 par Zakaria OTHMANE \xa9 - ",r.a.createElement(Me.a,{color:"inherit",href:"http//www.oz79.fr"},"OZ79.fr "," - ")," ".concat((new Date).getFullYear()," - Tous droits r\xe9serv\xe9s"))))},Fe=a(63),Je=a.n(Fe),Re=(a(142),function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",{className:"Camera"},r.a.createElement("h1",null,"Camera"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){m(!u)}},u?"D\xe9sactiver":"Activer")),u&&r.a.createElement("div",null,l&&r.a.createElement("div",null,r.a.createElement("div",{style:{width:"20%",margin:"auto"}},r.a.createElement("img",{style:{width:"100%"},src:l,alt:"photo"}),r.a.createElement("div",null,r.a.createElement("a",{style:{color:"blue"},href:l,download:"photo.png"},"T\xe9l\xe9charger")))),r.a.createElement("div",null,r.a.createElement(Je.a,{idealFacingMode:Fe.FACING_MODES.ENVIRONMENT,onTakePhoto:function(e){return function(e){console.log(e),c(e),console.log("take photo")}(e)}}))))}),_e=a(97),Ue=a.n(_e),He=function(e){return e.contacts.map(function(t){return r.a.createElement("div",{className:"Contact",key:t._id,style:{background:"#eee",margin:"1rem .5rem",borderRadius:"2px"}},r.a.createElement("div",{className:"Email",style:{paddingLeft:".5rem",display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{color:"blue"}},t.email),r.a.createElement("div",{style:{color:"#d32323",padding:".5rem"},onClick:function(){return e.deleteContact(t._id)}},r.a.createElement(Ue.a,null))),r.a.createElement("div",{className:"Message",style:{padding:".5rem"}},t.message))})},Be=Object(j.b)(function(e){return{user:e.user}},null)(function(e){var t=e.user,a=Object(n.useState)([]),l=Object(i.a)(a,2),c=l[0],o=l[1],s=function(){var e=Object(P.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/contacts");case 3:if(!(t=e.sent).error){e.next=6;break}return e.abrupt("return",console.log(t.message));case 6:o(t.data.contacts),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){var e=!1;function t(){return(t=Object(P.a)(S.a.mark(function t(){var a;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("/contacts");case 3:a=t.sent,e||o(a.data.contacts),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e=!0}},[]);var m=function(){var e=Object(P.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/contacts/delete/"+t);case 3:if(!(a=e.sent).error){e.next=6;break}return e.abrupt("return",console.log(a.message));case 6:s(),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}();return t.isLoggedIn&&t.roles.includes("admin")?r.a.createElement("div",{className:"Admin"},r.a.createElement("h1",null,"Admin"),r.a.createElement(He,{contacts:c,deleteContact:m})):r.a.createElement(u.a,{to:"/signin"})});function ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ze(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ze(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Qe=Object(j.b)(null,{fetchUser:function(){return function(){var e=Object(P.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/users/user");case 3:if(!(a=e.sent).data.error){e.next=6;break}return e.abrupt("return");case 6:t({type:"FETCH_USER",payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()}})(function(e){var t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1,fetchUser:!1}),a=Object(i.a)(t,2),n=a[0],l=a[1];n.fetchUser||(e.fetchUser(),l(Ge({},n,{fetchUser:!0})));var c=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Ge({},n,Object(o.a)({},e,t)))}};return document.title="Portfolio D\xe9veloppeur Web Fullstack Freelance",r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement("header",{className:"App-header"},r.a.createElement(C,{toggleDrawer:c})),r.a.createElement(ae,{toggleDrawer:c,state:n}),r.a.createElement(ke.a,null),r.a.createElement(Ne.a,{fixed:!0},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:pe}),r.a.createElement(u.b,{path:"/a-propos",component:fe}),r.a.createElement(u.b,{path:"/competences",component:we}),r.a.createElement(u.b,{path:"/realisations",component:ye}),r.a.createElement(u.b,{path:"/contact",component:Oe}),r.a.createElement(u.b,{path:"/langages",component:be}),r.a.createElement(u.b,{path:"/frameworks",component:ge}),r.a.createElement(u.b,{path:"/orm-odm-db",component:he}),r.a.createElement(u.b,{path:"/environements",component:ve}),r.a.createElement(u.b,{path:"/signin",component:Ie}),r.a.createElement(u.b,{path:"/admin",component:Be}),r.a.createElement(u.b,{path:"/camera",component:Re}))),r.a.createElement(qe,null)))}),Ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ze(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Ke=a(36),Ye=a(98),$e=a(99);function Xe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function et(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Xe(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Xe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var tt={login:"anonymous",isLoggedIn:!1},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER":case"FETCH_USER":return et({},t.payload,{isLoggedIn:!0});case"LOGOUT":return et({},tt);default:return e}},nt=Object(Ke.combineReducers)({user:at});c.a.render(r.a.createElement(j.a,{store:function(e){var t=[Ye.a],a=[Ke.applyMiddleware.apply(void 0,t)],n=$e.composeWithDevTools.apply(void 0,a);return Object(Ke.createStore)(nt,e,n)}()},r.a.createElement(Qe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");Ve?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ze(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ze(t,e)})}}()}},[[110,1,2]]]);
//# sourceMappingURL=main.7ff62c5d.chunk.js.map