(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{92:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a(37),s=a(24),i=a(39),o=a(38),r=a(0),c=a(13),h=a(29),p=(a(92),a(2)),m={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15},input:{padding:"5px",outline:"none"},title:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",clip:"rect(0 0 0 0)",overflow:"hidden"}},u=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",password:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e.handleChange=function(t){var a=t.target,l=a.name,s=a.value;e.setState(Object(n.a)({},l,s))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{style:m.title,children:"Register Page"}),Object(p.jsxs)("form",{style:m.form,onSubmit:this.handleSubmit,children:[Object(p.jsx)("h2",{className:"title-form",children:"Registration form"}),Object(p.jsxs)("label",{style:m.label,children:["Name",Object(p.jsx)("input",{style:m.input,type:"name",name:"name",value:t,onChange:this.handleChange,className:"form-control",placeholder:"enter your name"})]}),Object(p.jsxs)("label",{style:m.label,children:["Email",Object(p.jsx)("input",{style:m.input,type:"email",name:"email",value:a,onChange:this.handleChange,className:"input",placeholder:"your@email.com",autoComplete:"off"})]}),Object(p.jsxs)("label",{style:m.label,children:["Password",Object(p.jsx)("input",{style:m.input,className:"input",type:"password",name:"password",value:n,placeholder:"password",onChange:this.handleChange})]}),Object(p.jsx)("button",{type:"submit",className:"button",children:"Registration"})]})]})}}]),a}(r.Component),b={onRegister:h.d};t.default=Object(c.b)(null,b)(u)}}]);
//# sourceMappingURL=5.ecc9de0e.chunk.js.map