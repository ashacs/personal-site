(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(50)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),c=n.n(i),o=(n(21),n(2)),l=n(3),s=n(5),u=n(4),m=n(6),h=n(52),p=n(53),d=(n(23),n(25),n(27),n(51)),b=(n(29),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"padding-small navLink"},r.a.createElement(d.a,{to:"/".concat(this.props.title)},this.props.title))}}]),t}(a.Component)),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderNavItems",value:function(){return this.props.navItemsList.map(function(e){return r.a.createElement(b,{key:e,title:e})})}},{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"listBare navList"},this.renderNavItems()))}}]),t}(a.Component),v=f;f.defaultProps={navItemsList:[]};n(33);var y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"rounded",src:this.props.imagePath,alt:"",width:"25%"}))}}]),t}(a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel"},r.a.createElement("a",{href:"/"},r.a.createElement("h1",{className:"panelTitle"},"Asha ",r.a.createElement("br",null),"Camper ",r.a.createElement("br",null),"Singh")),r.a.createElement(y,{imagePath:"/resources/avatar.jpg"}),r.a.createElement(v,{navItemsList:["about","career","interests"]}))}}]),t}(a.Component),j=(n(35),n(37),n(39),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"timelineEvent"},r.a.createElement("div",null,r.a.createElement("h2",null,this.props.title)),r.a.createElement("div",{className:"timelineMarker"}),r.a.createElement("div",null,r.a.createElement("p",null,this.props.body)))}}]),t}(a.Component)),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderEvents",value:function(){return r.a.createElement("ul",{className:"listBare timelineList"},this.props.events.map(function(e){return r.a.createElement(j,{key:e.title,title:e.title,body:e.body})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"timeline"},this.props.header,this.renderEvents())}}]),t}(a.Component),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).events=[{title:"Sacramento",body:"Born and raised! Lady Bird really did capture everything you need to know."},{title:"San Diego",body:"I graduaced from UC San Diego with a Bachelors in Computer Science. While the sun was shining outside, I spent my time especially interested in computational theory, discrete mathematics, and cryptography. "},{title:"San Francisco",body:"From the sunniest place in California, to the foggiest place in California. I entered the software engineering industry, starting a full-time developer position at Salesforce."}],e.state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderHeader",value:function(){return r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Map emoji"},"\ud83d\uddfa\ufe0f")," ","My Journey")}},{key:"render",value:function(){return r.a.createElement("div",{className:"page-content "},r.a.createElement(E,{header:this.renderHeader(),events:this.events}))}}]),t}(a.Component),k=(n(41),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).events=[{title:"Transaction Security",body:"On my first team at the company, I worked on a security feature that intercepts Salesforce events and applies security policies to them. Our code lived in some pretty important parts of the application, so I learned a lot about quality!"},{title:"Event Monitoring",body:"My second team continued to support Transaction Security, but also had the expanded scope of providing information about the events to the customer. We stored events in HBase and streamed them through Kafka."},{title:"Trailhead",body:"Third time's the charm! This move to work on Salesforce's free learning platform was inspired by my passion for education. It also gave me the opportunity to do full stack development with technologies like TypeScript, GraphQL, and web components."}],e.state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderHeader",value:function(){return r.a.createElement("div",{className:"heading"},r.a.createElement("img",{src:"/resources/sfdc-cloud.png",alt:"",className:"heading-icon"}),r.a.createElement("h1",null," ","Salesforce"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"page-content "},r.a.createElement(E,{header:this.renderHeader(),events:this.events}))}}]),t}(a.Component));n(43),n(45);var N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("h1",{className:"card-title"},this.props.title),r.a.createElement("ul",null,this.props.items.map(function(e){return r.a.createElement("li",{key:e.title},function(e){return e.title&&e.link?r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title):e.title}(e))})))}}]),t}(a.Component),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-content interests"},r.a.createElement(N,{title:"Listening",items:[{title:"Reply All (podcast)",link:"https://gimletmedia.com/shows/reply-all"},{title:"Tennis (band)",link:"https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM"},{title:"Papooz (band)",link:"https://open.spotify.com/artist/2gaCpvhi31OZtozJKsr5gm"}]}),r.a.createElement(N,{title:"Watching",items:[{title:"The West Wing"},{title:"Brooklyn Nine-Nine"},{title:"Top Chef"}]}),r.a.createElement(N,{title:"Reading",items:[{title:"The Agony and the Ecstasy"}]}))}}]),t}(a.Component),C=(n(47),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-content home"},r.a.createElement("p",{className:"home-blurb"},"Hi, my name is ",r.a.createElement("span",{className:"home-blurb-emphasis"},"Asha"),"! I'm a software engineer by day and a puzzle-doer (puzzler?) by night."))}}]),t}(a.Component)),I=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:""},r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(p.a,{path:"/",exact:!0,component:C}),r.a.createElement(p.a,{path:"/about",component:g}),r.a.createElement(p.a,{path:"/career",component:k}),r.a.createElement(p.a,{path:"/interests",component:w})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,2,1]]]);
//# sourceMappingURL=main.8e00b657.chunk.js.map