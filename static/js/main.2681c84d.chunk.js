(this["webpackJsonpreact-deploy-test"]=this["webpackJsonpreact-deploy-test"]||[]).push([[0],{26:function(e,t,s){},28:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),c=s(19),a=s.n(c),i=(s(26),s(8)),o=s(2),l=s(1);var u=function(){return Object(l.jsx)("div",{className:"About",children:Object(l.jsx)("h2",{class:"text-center",children:"This is About Page!"})})};var j=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsx)("h2",{class:"text-center",children:"This is Home Page!"})})},h=s(21),b=s(12),d=s(13),x=s(17),O=s(16);s(28);var v=function(){return Object(l.jsxs)("div",{className:"TicTacToe",children:[Object(l.jsx)("h2",{class:"text-center",children:"This is TicTacToe Page!"}),Object(l.jsx)("div",{class:"container",children:Object(l.jsx)(p,{})})]})};function m(e){return Object(l.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var f=function(e){Object(x.a)(s,e);var t=Object(O.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"renderSquare",value:function(e){var t=this;return Object(l.jsx)(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(l.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(l.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),s}(r.a.Component),p=function(e){Object(x.a)(s,e);var t=Object(O.a)(s);function s(e){var n;return Object(b.a)(this,s),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(d.a)(s,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),s=t[t.length-1].squares.slice();N(s)||s[e]||(s[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:s}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,s=this.state.history,n=s[this.state.stepNumber],r=N(n.squares),c=s.map((function(e,s){var n=s?"Go to move #"+s:"Go to game start";return Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){return t.jumpTo(s)},children:n})},s)}));return e=r?"Winner: "+r:"Next player: "+(this.state.xIsNext?"X":"O"),Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("div",{className:"game-board",children:Object(l.jsx)(f,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})}),Object(l.jsxs)("div",{className:"game-info",children:[Object(l.jsx)("div",{children:e}),Object(l.jsx)("ol",{children:c})]})]})}}]),s}(r.a.Component);function N(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var n=Object(h.a)(t[s],3),r=n[0],c=n[1],a=n[2];if(e[r]&&e[r]===e[c]&&e[r]===e[a])return e[r]}return null}var y={color:"#09D3AC"},T={textDecoration:"none",color:"blue"},q=function(){return Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(i.b,{to:"/",activeStyle:y,exact:!0,style:T,children:"Home"})," \xa0",Object(l.jsx)(i.b,{to:"/about",activeStyle:y,style:T,children:"About"})," \xa0",Object(l.jsx)(i.b,{to:"/TicTacToe",activeStyle:y,style:T,children:"TicTacToe"})]})};var g=function(){return Object(l.jsxs)(i.a,{basename:"/react-deploy-test",children:[Object(l.jsx)("h3",{className:"mt-3 fw-bold text-center",children:"Hello, React!"}),Object(l.jsx)("div",{className:"d-flex justify-content-center my-4",children:Object(l.jsx)(q,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(o.a,{path:"/about",component:u}),Object(l.jsx)(o.a,{path:"/TicTacToe",component:v})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),c(e),a(e)}))};s(34);a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),S()}},[[35,1,2]]]);
//# sourceMappingURL=main.2681c84d.chunk.js.map