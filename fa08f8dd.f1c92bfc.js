(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"Torus",(function(){return c}));var o=t(206),s=t(4),i=t(0),a=t.n(i),u=t(126),r=t.n(u),m=t(207),c=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={mouseX:0,mouseY:0},t.onMouseMove=t.onMouseMove.bind(Object(o.a)(t)),t}Object(s.a)(n,e);var t=n.prototype;return t.componentWillUnmount=function(){this.canvas.parentElement.removeEventListener("mousemove",this.onMouseMove)},t.componentDidMount=function(){var e=this,n=new m.g({antialias:!0,alpha:!0}),t=new m.e,o=new m.d(75,1,.1,1e3);o.lookAt(0,0,0),o.position.set(250,250,170),n.setSize(700,700),this.canvas.appendChild(n.domElement);var s,i,a,u,r,c;s=0,i=0,a=0,u=new m.f(65,8,14,4,11,7),r=new m.h(u),(c=new m.c(r,new m.b({color:16777215}))).position.set(s,i,a),t.add(c),this.canvas.parentElement.addEventListener("mousemove",this.onMouseMove);!function s(){requestAnimationFrame(s),o.position.x=e.state.mouseX,o.position.y=e.state.mouseY,o.lookAt(t.position),n.render(t,o)}()},t.onMouseMove=function(e){this.setState({mouseX:this.state.mouseX+.1*e.movementX,mouseY:this.state.mouseY+.2*e.movementY})},t.render=function(){var e=this;return a.a.createElement("div",{className:r.a.canvasContainer,ref:function(n){return e.canvas=n}})},n}(i.Component);n.default=c}}]);