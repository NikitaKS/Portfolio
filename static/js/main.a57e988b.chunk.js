(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{1:function(e,t,a){e.exports={outlineNone:"Content_outlineNone__ATc46",content:"Content_content__3PeaQ",headerContent:"Content_headerContent__2fvQ1",headerContentIn:"Content_headerContentIn__12zxw",text:"Content_text__RavBI",AboutMe:"Content_AboutMe__1-8m-",AboutMeWrapper:"Content_AboutMeWrapper__2ytnN",AboutMeNav:"Content_AboutMeNav__1baFr",NavMenu:"Content_NavMenu__1A-DU",activeBtn:"Content_activeBtn__2IPOt",AboutMeDescWrapper:"Content_AboutMeDescWrapper__26eIp index_aboutMeTabs__2mOXi",left:"Content_left__1KoQP",right:"Content_right__3cAef",title:"Content_title__WocFr",desc:"Content_desc__2Ddl_",skillsWrapper:"Content_skillsWrapper__3paJ5 index_aboutMeTabs__2mOXi",skillItem:"Content_skillItem__2EuGQ",skillsTop:"Content_skillsTop__1CKHf",skillTitle:"Content_skillTitle__1IyZ3",skillStatus:"Content_skillStatus__34MV7",skillsBottom:"Content_skillsBottom__2e9ww",skillProgressBar:"Content_skillProgressBar__c2qvQ",skillProgressBarIn:"Content_skillProgressBarIn__27f8K",servicesWrapper:"Content_servicesWrapper__37WFn index_aboutMeTabs__2mOXi",servicesIcon:"Content_servicesIcon__2l2uH",servicesTitle:"Content_servicesTitle__aGYsE",servicesDesc:"Content_servicesDesc__1wqjB",ProjectsWrapper:"Content_ProjectsWrapper__2Z_jr",project:"Content_project__3w8hw",projectImg:"Content_projectImg__2_JVm",projectDetails:"Content_projectDetails__1xAM5",projectServices:"Content_projectServices__8EdMv",projectTitle:"Content_projectTitle__yFcy9",projectDesc:"Content_projectDesc__2Uzce",SocialWrapper:"Content_SocialWrapper__RWwR7",Title:"Content_Title__34AIt",SocialItemWrapper:"Content_SocialItemWrapper__3mB0s",SocialItemIcon:"Content_SocialItemIcon__36s16",SocialItemTitle:"Content_SocialItemTitle__J5kJV",SocialItemDesc:"Content_SocialItemDesc__3cvKh"}},11:function(e,t,a){},176:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),c=a.n(s),i=(a(66),a(67),a(68),a(11),a(4)),l=a(5),o=a(7),m=a(6),u=a(8),v=a(3),d=a.n(v),p=a(55),A=a.n(p);var E=function(){return r.a.createElement("div",{className:d.a.HeaderLogo},r.a.createElement("img",{className:d.a.logo_img,src:A.a,alt:""}),r.a.createElement("div",{className:d.a.logoDesc},"Web Developer"))},f=a(9),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={mobileMenu:!1},a.showMenu=function(){a.state.mobileMenu?a.setState({mobileMenu:!1}):a.setState({mobileMenu:!0})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){f.Events.scrollEvent.register("begin",(function(){console.log("begin",arguments)})),f.Events.scrollEvent.register("end",(function(){console.log("end",arguments)}))}},{key:"scrollTo",value:function(){f.scroller.scrollTo("scroll-to-element",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"componentWillUnmount",value:function(){f.Events.scrollEvent.remove("begin"),f.Events.scrollEvent.remove("end")}},{key:"render",value:function(){var e=!1===this.state.mobileMenu?d.a.buttonMenu:"".concat(d.a.buttonMenu," ").concat(d.a.open),t=!1===this.state.mobileMenu?d.a.Menu:"".concat(d.a.Menu," ").concat(d.a.menuActive);return r.a.createElement("div",{id:"home",className:d.a.header},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:d.a.headerWrapper},r.a.createElement(E,null),r.a.createElement("div",{onClick:this.showMenu,className:e},r.a.createElement("div",{className:"".concat(d.a.lineMenu," ").concat(d.a.half," ").concat(d.a.start)}),r.a.createElement("div",{className:d.a.lineMenu}),r.a.createElement("div",{className:"".concat(d.a.lineMenu," ").concat(d.a.half," ").concat(d.a.end)})),r.a.createElement("div",{className:d.a.MenuWrapper},r.a.createElement("ul",{className:t},r.a.createElement("li",null,r.a.createElement(f.Link,{to:"home",spy:!0,smooth:!0,duration:500},"Home")),r.a.createElement("li",null,r.a.createElement(f.Link,{to:"about me",spy:!0,smooth:!0,duration:500},"About Me")),r.a.createElement("li",null,r.a.createElement(f.Link,{to:"projects",spy:!0,smooth:!0,duration:500},"Projects")),r.a.createElement("li",null,r.a.createElement(f.Link,{to:"contact",spy:!0,smooth:!0,duration:500},"Contact"))),r.a.createElement("div",{className:d.a.MenuButton},r.a.createElement("a",{className:"MenuButtonIn",href:"#"},"Let`s Chat"))))))}}]),t}(r.a.Component),b=a(1),N=a.n(b);var C=function(){return r.a.createElement("div",{className:N.a.headerContent},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N.a.headerContentIn},r.a.createElement("div",{className:N.a.text},"Hello, I\u2019m Nikita WebDeveloper"),r.a.createElement("div",{className:N.a.photo}))))},_=a(56),w=a.n(_),j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:N.a.AboutMeDescWrapper},r.a.createElement("div",{className:N.a.left},r.a.createElement("img",{src:w.a,alt:""})),r.a.createElement("div",{className:N.a.right},r.a.createElement("div",{className:N.a.title},"Why hire me for your next project?"),r.a.createElement("div",{className:N.a.desc},r.a.createElement("p",null,"Meet my startup design agency Shape Rex Currently I am working at CodeNext as Product Designer. Before that I\u2019ve worked at SpurBee, Dhaka as a UX, UI Designer."),r.a.createElement("p",null,"I love to work in User Experience & User Interface designing. Because I love to solve the design problem and find easy and better solutions to solve it. I always try my best to make good user interface with the best user experience. I have been working as a Visual designer from."))))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.percent+"%";return r.a.createElement("div",{className:N.a.skillItem},r.a.createElement("div",{className:N.a.skillsTop},r.a.createElement("div",{className:N.a.skillTitle},this.props.title),r.a.createElement("div",{className:N.a.skillStatus},this.props.percent," %")),r.a.createElement("div",{className:N.a.skillsBottom},r.a.createElement("div",{className:N.a.skillProgressBar},r.a.createElement("div",{style:{width:e},className:N.a.skillProgressBarIn}))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={skillitem:[{title:"javaScript",percent:65},{title:"HTML",percent:100},{title:"css",percent:80},{title:"react",percent:50},{title:"redux",percent:30}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.skillitem.map((function(e){return r.a.createElement(M,{percent:e.percent,title:e.title})}));return r.a.createElement("div",{className:N.a.skillsWrapper},e)}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null," AWARDS ")}}]),t}(n.Component),k=a(16),S=a(12),B=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:N.a.servicesItem},r.a.createElement("div",{className:N.a.servicesIcon},r.a.createElement(k.a,{icon:S.c,size:"3x"})),r.a.createElement("div",{className:N.a.servicesTitle},"Business Strategy"),r.a.createElement("div",{className:N.a.servicesDesc},"Strategy develop customer in organisational knowledge and market perspectives that inform and provoke."))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:N.a.servicesWrapper},r.a.createElement(B,null),r.a.createElement(B,null),r.a.createElement(B,null),r.a.createElement(B,null))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isAboutMe:!0,isSkills:!1,isServices:!1,isAward:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onClickButton",value:function(e){switch(e){case"About Me":return this.setState({isAboutMe:!0,isSkills:!1,isServices:!1,isAward:!1});case"Skills":return this.setState({isAboutMe:!1,isSkills:!0,isServices:!1,isAward:!1});case"Services":return this.setState({isAboutMe:!1,isSkills:!1,isServices:!0,isAward:!1});case"Awards":return this.setState({isAboutMe:!1,isSkills:!1,isServices:!1,isAward:!0});default:return this.setState({isAboutMe:!0,isSkills:!1,isServices:!1,isAward:!1})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"about me",className:N.a.AboutMe},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N.a.AboutMeWrapper},r.a.createElement("div",{className:N.a.AboutMeNav},r.a.createElement("ul",{className:N.a.NavMenu},r.a.createElement("li",{className:this.state.isAboutMe?N.a.activeBtn:"",onClick:function(){return e.onClickButton("About Me")}},"About Me"),r.a.createElement("li",{className:this.state.isSkills?N.a.activeBtn:"",onClick:function(){return e.onClickButton("Skills")}},"Skills"),r.a.createElement("li",{className:this.state.isServices?N.a.activeBtn:"",onClick:function(){return e.onClickButton("Services")}},"Services"))),this.state.isAboutMe&&r.a.createElement(j,null),this.state.isSkills&&r.a.createElement(I,null),this.state.isServices&&r.a.createElement(O,null),this.state.isAward&&r.a.createElement(g,null))))}}]),t}(n.Component),y=a(57),W=a.n(y);var L=function(){return r.a.createElement("div",{className:N.a.project},r.a.createElement("div",{className:N.a.projectImg},r.a.createElement("img",{src:W.a,alt:""})),r.a.createElement("div",{className:N.a.projectDetails},r.a.createElement("div",{className:N.a.projectServices},"UI/UX, WEB, HTML, CSS"),r.a.createElement("div",{className:N.a.projectTitle},"Project Management Admin Panel"),r.a.createElement("div",{className:N.a.projectDesc},"Discover Business Strategy A thoughtful discovery process")))},H=a(58),D=a.n(H),Q=(a(176),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={settings:{slidesToShow:3,dots:!0,duration:100,arrows:!1},width:window.innerWidth},a.updateDimensions=function(){a.setState({width:window.innerWidth})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){return this.state.width<935?this.state.settings.slidesToShow=1:this.state.settings.slidesToShow=3,r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"projects",className:N.a.Title},"Projects"),r.a.createElement("div",{className:N.a.ProjectsWrapper},r.a.createElement(D.a,this.state.settings,r.a.createElement("div",{className:N.a.outlineNone},r.a.createElement(L,null)),r.a.createElement("div",{className:N.a.outlineNone},r.a.createElement(L,null)),r.a.createElement("div",{className:N.a.outlineNone},r.a.createElement(L,null)),r.a.createElement("div",{className:N.a.outlineNone},r.a.createElement(L,null)),r.a.createElement("div",{className:N.a.outlineNone},r.a.createElement(L,null)),r.a.createElement("div",{className:N.a.outlineNone},r.a.createElement(L,null))))))}}]),t}(r.a.Component));var x=function(e){return r.a.createElement("div",{className:N.a.SocialItemWrapper},r.a.createElement("div",{className:N.a.SocialItemtext},r.a.createElement("div",{className:N.a.SocialItemTitle},e.title),r.a.createElement("div",{className:N.a.SocialItemDesc},e.desc)),r.a.createElement("div",{className:N.a.SocialItemIcon},r.a.createElement(k.a,{className:N.a.SocialItemIcon,icon:e.icon,size:"3x"})))};var P=function(e){var t=e.social.map((function(e){return r.a.createElement(x,{key:e.id,title:e.title,desc:e.desc,icon:e.icon})}));return r.a.createElement("div",{id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:N.a.Title},"Let`s Be Friends?"),r.a.createElement("div",{className:N.a.SocialWrapper},t)))};var F=function(){var e=[{id:0,title:"LinedIn",desc:"Professional social profile",icon:S.b},{id:1,title:"Instagram",desc:"Image base social communications",icon:S.a},{id:2,title:"Telegramm",desc:"@asdsdsd",icon:S.d}];return r.a.createElement("div",{className:N.a.content},r.a.createElement("div",{className:N.a.contentWrapper},r.a.createElement(C,null),r.a.createElement(T,null),r.a.createElement(Q,null),r.a.createElement(P,{social:e})))},G=a(27),J=a.n(G);var U=function(){return r.a.createElement("div",{className:J.a.footer},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:J.a.footerWrapper},r.a.createElement(E,null),r.a.createElement("div",{className:J.a.FooterButton},r.a.createElement("a",{className:"MenuButtonIn",href:"#"},"Let`s Chat")))))},q=a(59),Z=a(60),z=a.n(Z);var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(h,null),r.a.createElement(F,null),r.a.createElement(U,null)),r.a.createElement(z.a,{ContainerClassName:"scrollToTop",TransitionClassName:"scrollToTopTransition",EasingType:"easeInBack",AnimationDuration:700,ShowAtPosition:400},r.a.createElement("div",null,r.a.createElement(k.a,{icon:q.a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},27:function(e,t,a){e.exports={footer:"Footer_footer__3-5TF",footerWrapper:"Footer_footerWrapper__Gn-tI",footerText:"Footer_footerText__2dihg",FooterButton:"Footer_FooterButton__laCWi",FooterButtonIn:"Footer_FooterButtonIn__1Zhfx"}},3:function(e,t,a){e.exports={header:"Header_header__36V0S",menu:"Header_menu__3na3-",headerWrapper:"Header_headerWrapper__7xsil",HeaderLogo:"Header_HeaderLogo__-Q7uv",logo_img:"Header_logo_img__2873I",logoDesc:"Header_logoDesc__HQrra",MenuWrapper:"Header_MenuWrapper__3oImQ",Menu:"Header_Menu__3pDYM",buttonMenu:"Header_buttonMenu__3tU3o",open:"Header_open__hbjG5",lineMenu:"Header_lineMenu__gwVPI",half:"Header_half__38Fo9",start:"Header_start__3hpuF",end:"Header_end__1H1Jh",MenuButton:"Header_MenuButton__2kLa2",menuActive:"Header_menuActive__2J4x0"}},55:function(e,t){e.exports="data:image/png;base64,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"},56:function(e,t,a){e.exports=a.p+"static/media/about-pic.59a1bc80.png"},57:function(e,t,a){e.exports=a.p+"static/media/projectDef.007be451.png"},61:function(e,t,a){e.exports=a(179)},66:function(e,t,a){},68:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.a57e988b.chunk.js.map