(this["webpackJsonppath-finder-visualiser"]=this["webpackJsonppath-finder-visualiser"]||[]).push([[0],[,,,,,,,,,function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var i=e(1),r=e.n(i),s=e(4),o=e.n(s),a=(e(9),e(2)),c=(e(10),e(0)),u=function(t){var n=t.isStart,e=t.isEnd,i=t.isWall,r=t.row,s=t.col,o=n?"node-start":i?"node-wall":e?"node-end":"";return Object(c.jsx)("div",{className:"node ".concat(o),id:"node-".concat(r,"-").concat(s)})};var h=function(t,n){return Math.abs(t.x-t.y)+Math.abs(n.x-n.y)},d=function(t,n){var e=[],i=[],r=[],s=[];e.push(t);for(var o=function(){for(var t=0,o=0;o<e.length;o++)e[o].f<e[t].f&&(t=o);var a=e[t];if(s.push(a),a===n){var c=a;for(r.push(c);c.previous;)r.push(c.previous),c=c.previous;return{v:{path:r,visitedNodes:s}}}e=e.filter((function(t){return t!==a})),i.push(a);for(var u=a.neighbours,d=0;d<u.length;d++){var f=u[d];if(!i.includes(f)&&!f.isWall){var l=a.g+1,v=!1;e.includes(f)?l<f.g&&(f.g=l,v=!0):(f.g=l,v=!0,e.push(f)),v&&(f.h=h(f,n),f.f=f.g+f.h,f.previous=a)}}};e.length>0;){var a=o();if("object"===typeof a)return a.v}return{path:r,visitedNodes:s,error:"no path found"}};function f(t,n,e,i,r,s){this.x=t,this.y=n,this.isStart=e,this.isEnd=i,this.g=0,this.f=0,this.f=0,this.neighbours=[],this.isWall=!1,Math.random(1)<.2&&(this.isWall=!0),this.previous=void 0,this.addNeighbours=function(t){var n=this.x,e=this.y;n>0&&this.neighbours.push(t[n-1][e]),n<r-1&&this.neighbours.push(t[n+1][e]),e>0&&this.neighbours.push(t[n][e-1]),e<s-1&&this.neighbours.push(t[n][e+1])}}e(12);var l=25,v=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],s=Object(i.useState)([]),o=Object(a.a)(s,2),h=o[0],v=o[1],p=Object(i.useState)([]),b=Object(a.a)(p,2),j=b[0],g=b[1];Object(i.useEffect)((function(){O()}),[]);var O=function(){for(var t=new Array(l),n=0;n<l;n++)t[n]=new Array(25);m(t),r(t),x(t);var e=t[0][0],i=t[24][24],s=d(e,i),o=s.path,a=s.visitedNodes;e.isWall=!1,i.isWall=!1,v(o),g(a)},m=function(t){for(var n=0;n<l;n++)for(var e=0;e<25;e++){var i=0===n&&0===e,r=24===n&&24===e;t[n][e]=new f(n,e,i,r,l,25)}},x=function(t){for(var n=0;n<l;n++)for(var e=0;e<25;e++)t[n][e].addNeighbours(t)},w=Object(c.jsx)("div",{children:e.map((function(t,n){return Object(c.jsx)("div",{className:"rowWrapper",children:t.map((function(t,e){var i=t.isStart,r=t.isEnd,s=t.isWall;return Object(c.jsx)(u,{isStart:i,isEnd:r,row:n,col:e,isWall:s},e)}))},n)}))});return Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)("h1",{children:"Pathfind Visualiser"}),Object(c.jsx)("button",{onClick:function(){for(var t=function(t){t===j.length?setTimeout((function(){!function(t){for(var n=function(n){setTimeout((function(){var e=t[n];document.getElementById("node-".concat(e.x,"-").concat(e.y)).className="node node-shortest-path"}),10*n)},e=0;e<t.length;e++)n(e)}(h)}),2*t):setTimeout((function(){var n=j[t];document.getElementById("node-".concat(n.x,"-").concat(n.y)).className="node node-visited"}),2*t)},n=0;n<=j.length;n++)t(n)},children:"visualise pathfinder"}),Object(c.jsx)("button",{onClick:function(){window.location.reload()},children:"reset"}),w]})};e(13);var p=function(){return Object(c.jsx)(v,{})},b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(n){var e=n.getCLS,i=n.getFID,r=n.getFCP,s=n.getLCP,o=n.getTTFB;e(t),i(t),r(t),s(t),o(t)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.ee54ee00.chunk.js.map