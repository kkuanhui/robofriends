(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),i=n(8),s=n(6),u=n(14),l=(n(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d={searchField:""},b={isPending:!1,robots:[],error:""},p=(n(27),n(1)),f=n(2),m=n(4),g=n(3),O=n(5),v=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},o.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))}}]),t}(o.a.Component),E=function(e){var t=e.robots;e.isPending;return o.a.createElement(r.Fragment,null,console.log("CardList",t),t.map((function(e,n){return o.a.createElement(v,{key:t[n].id,id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email})})))},j=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props===e}},{key:"render",value:function(){var e=this.props.SearchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:e}))}}]),t}(r.Component),y=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},this.props.children)}}]),t}(o.a.Component),C=(n(28),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooooops! It is not good."):this.props.children}}]),t}(r.Component)),w=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).updateCount=function(){n.setState((function(e){return{count:e.count+1}}))},n.state={count:0},n}return Object(O.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement(r.Fragment,null,console.log("CounterButton"),o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count : ",this.state.count))}}]),t}(r.PureComponent),S=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement(r.Fragment,null,console.log("Header"),o.a.createElement("h1",null,"RoboFriends"),o.a.createElement(w,{color:"red"}))}}]),t}(o.a.Component),R=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.searchField,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"tc ma5 "},o.a.createElement(S,null),o.a.createElement(j,{SearchChange:t}),o.a.createElement(y,null,o.a.createElement(C,null,o.a.createElement(E,{robots:c,isPending:a}))))}}]),t}(o.a.Component),k=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),P=Object(s.d)(_,Object(s.a)(u.a));c.a.render(o.a.createElement(i.a,{store:P},o.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.c4d2acfc.chunk.js.map