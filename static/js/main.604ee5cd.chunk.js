(this["webpackJsonpfcc-front-end-libraries-projects"]=this["webpackJsonpfcc-front-end-libraries-projects"]||[]).push([[0],{45:function(e,t,a){e.exports=a(61)},50:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(18),i=(a(50),a(7)),s=a(30),m=a.n(s),u=a(39),d=a(11),f=Object(d.b)({name:"quotes",initialState:{loading:!1,hasErrors:!1,quote:"",author:"",quoteData:{},randomQuoteData:{}},reducers:{getQuotes:function(e){e.loading=!0},getQuotesSuccess:function(e,t){var a=t.payload;e.quoteData=a,e.loading=!1,e.hasErrors=!1},getQuotesFailure:function(e){e.loading=!1,e.hasErrors=!0},getRandomQuotes:function(e){e.randomQuoteData=e.quoteData.quotes[Math.floor(Math.random()*e.quoteData.quotes.length)],e.quote=e.randomQuoteData.quote,e.author=e.randomQuoteData.author}}}),h=f.actions,p=h.getQuotes,g=h.getQuotesSuccess,k=h.getQuotesFailure,E=h.getRandomQuotes,w=function(e){return e.quotes},y=f.reducer,b=a(21),v=a(67),x=a(68),C=function(){return r.a.createElement("header",null,r.a.createElement(v.a,{collapseOnSelect:!0,bg:"dark",variant:"dark",expand:"xl",fixed:"top"},r.a.createElement(v.a.Toggle,{className:"ml-5","aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,null,r.a.createElement(x.a,{className:"ml-5"},r.a.createElement(b.LinkContainer,{exact:!0,to:"/"},r.a.createElement(x.a.Link,null,"Home")),r.a.createElement(b.LinkContainer,{exact:!0,to:"/Quote-Machine"},r.a.createElement(x.a.Link,null,"Quote Machine")),r.a.createElement(b.LinkContainer,{exact:!0,to:"/Markdown-Previewer"},r.a.createElement(x.a.Link,null,"Markdown Previewer")),r.a.createElement(b.LinkContainer,{exact:!0,to:"/Drum-Machine"},r.a.createElement(x.a.Link,null,"Drum Machine"))))))},N=a(5),j=a(63),O=a(64),H=a(16),T=function(){return r.a.createElement("section",{className:"d-flex flex-column vh-100 align-items-center justify-content-center text-center"},r.a.createElement(j.a,{className:"my-5 overflow-auto"},r.a.createElement("h1",{className:"display-4"},"Welcome!"),r.a.createElement("p",{className:"my-5"},"Thanks for checking out my spin on the"," ",r.a.createElement("a",{href:"https://www.freecodecamp.org/"},"freecodecamp.org")," Front End Libraries Projects."),r.a.createElement("a",{href:"https://www.freecodecamp.org/mshuber1981"},r.a.createElement(O.a,{variant:"dark",size:"lg"},r.a.createElement(H.a,{className:"mr-2"})," FCC Profile"))))},L=function(){var e=Object(i.b)(),t=Object(i.c)(w),a=t.quote,n=t.author,c=t.loading,o=t.hasErrors;return c?r.a.createElement("h2",null,"Loading Quotes..."):o?r.a.createElement("h2",null,"Something went wrong..."):r.a.createElement(j.a,{id:"quote-box",className:"my-5 overflow-auto"},r.a.createElement("blockquote",null,r.a.createElement("p",{id:"text",className:"h5 overflow-auto"},a),r.a.createElement("footer",{id:"author",className:"my-4"},"\u2014 ",n)),r.a.createElement(O.a,{id:"new-quote",variant:"dark",onClick:function(){return e(E())}},"Random Quote"),r.a.createElement("div",{className:"my-4"}),r.a.createElement("a",{id:"tweet-quote",className:"d-inline-block h1 text-dark",href:'https://twitter.com/intent/tweet?text="'.concat(a,'"%20-%20').concat(n)},r.a.createElement(H.d,null)))},M=function(){return r.a.createElement("section",{className:"container text-center"},r.a.createElement(L,null))},Q=a(33),q=a.n(Q),D=a(65),z=a(66),S=Object(d.b)({name:"markdown",initialState:{markdown:"\n# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://techchronos.com/wp-content/uploads/SszarkLabs/stack-icon/cywBkaGwkMeDAuJbSt1k.png)\n"},reducers:{handleMarkdownChange:function(e,t){var a=t.payload;e.markdown=a.target.value}}}),A=S.actions.handleMarkdownChange,_=function(e){return e.markdown},P=S.reducer,I=function(){q.a.setOptions({breaks:!0});var e=Object(i.b)(),t=Object(i.c)(_).markdown;return r.a.createElement(D.a,null,r.a.createElement(z.a,{className:"mt-5 bg-light",lg:6},r.a.createElement("textarea",{id:"editor",className:"h-100 w-100 my-5 pt-5",onChange:function(t){return e(A(t))},type:"text",value:t})),r.a.createElement(z.a,{className:"mt-5 bg-light",lg:6},r.a.createElement("div",{id:"preview",className:"my-5 pt-5",dangerouslySetInnerHTML:{__html:q()(t)}})))},K=function(){return r.a.createElement("section",{className:"container-fluid overflow-auto"},r.a.createElement(I,null))},R=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"d-flex flex-column vh-100 align-items-center justify-content-center text-white"},"Sorry, page not found."))},B=[[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}],[{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}],[{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]],F=Object(d.b)({name:"drum",initialState:{display:"",audio:""},reducers:{playAudio:function(e,t){var a=t.payload;e.audio=a.keyTrigger,e.display=a.id,document.getElementById(e.audio).play()},handleKeyPress:function(e,t){var a=t.payload;[81,87,69,65,83,68,90,88,67].includes(a.keyCode)?(e.audio=a.key.toUpperCase(),e.display=document.getElementById(e.audio).className.replace(/clip/g,""),document.getElementById(e.audio).play()):e.display="No Match"},clearDisplay:function(e){e.display=""}}}),W=F.actions,J=W.playAudio,U=W.handleKeyPress,Y=W.clearDisplay,G=function(e){return e.drum},X=F.reducer,Z=function(){var e=Object(i.c)(G).display,t=Object(i.b)(),a=Object(n.useCallback)((function(e){var a=e.key,n=e.keyCode;t(U({key:a,keyCode:n}))}),[t]);return Object(n.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[a]),Object(n.useEffect)((function(){var e=setTimeout((function(){return t(Y())}),2e3);return function(){return clearTimeout(e)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{id:"drum-machine",className:"text-center"},r.a.createElement("h1",{className:"mb-4"},"Drum Me"," ",r.a.createElement("span",{role:"img","aria-label":"Speaker emoji"},"\ud83d\udd0a")),r.a.createElement("h2",{id:"display"},e),B.map((function(e,a){return r.a.createElement(D.a,{className:"justify-content-around",key:a},e.map((function(e){return r.a.createElement(z.a,{className:"m-2",key:e.id,xs:3},r.a.createElement(O.a,{id:e.id,className:"drum-pad",size:"lg",variant:"dark",onClick:function(){return t(J(e))}},r.a.createElement("audio",{id:e.keyTrigger,className:"clip ".concat(e.id),src:e.url}),e.keyTrigger))})))}))))},V=function(){return r.a.createElement("section",null,r.a.createElement(Z,null))},$=function(){return r.a.createElement(N.g,null,r.a.createElement(N.d,{exact:!0,path:"/",component:T}),r.a.createElement(N.d,{exact:!0,path:"/Quote-Machine",component:M}),r.a.createElement(N.d,{exact:!0,path:"/Markdown-Previewer",component:K}),r.a.createElement(N.d,{exact:!0,path:"/Drum-Machine",component:V}),r.a.createElement(N.d,{component:R}))},ee=function(){return r.a.createElement("footer",{className:"d-flex flex-column align-items-center fixed-bottom bg-dark"},r.a.createElement("div",{className:"h1 d-inline my-2"},r.a.createElement("a",{href:"https://www.linkedin.com/in/michael-huber-9b567a173",className:"text-white"},r.a.createElement(H.c,null)),r.a.createElement("a",{href:"https://www.freecodecamp.org/mshuber1981",className:"mx-5 text-white"},r.a.createElement(H.a,null)),r.a.createElement("a",{href:"https://github.com/mshuber1981",className:"text-white"},r.a.createElement(H.b,null))))},te=function(){var e=Object(i.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(u.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(p()),e.prev=1,e.next=4,fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()}));case 4:a=e.sent,t(g(a)),t(E()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(k());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("main",{className:"d-flex flex-column vh-100 align-items-center justify-content-center bg-light overflow-auto"},r.a.createElement($,null)),r.a.createElement(ee,null))},ae=Object(d.a)({middleware:Object(d.c)({serializableCheck:{ignoredActions:["markdown/handleMarkdownChange"]}}),reducer:{quotes:y,markdown:P,drum:X}});o.a.render(r.a.createElement(i.a,{store:ae},r.a.createElement(l.HashRouter,null,r.a.createElement(te,null))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.604ee5cd.chunk.js.map