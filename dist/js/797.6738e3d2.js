"use strict";(self["webpackChunkhm_vant_h5"]=self["webpackChunkhm_vant_h5"]||[]).push([[797],{3797:function(e,r,s){s.r(r),s.d(r,{default:function(){return c}});var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container-login"},[r("van-form",{ref:"form"},[r("van-nav-bar",{attrs:{title:"面经注册"}}),r("van-field",{attrs:{label:"用户名",placeholder:"请输入用户名",rules:e.rules.username},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}}),r("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",rules:e.rules.username},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("van-button",{attrs:{block:""},on:{click:e.submit}},[e._v("注册")]),r("p",{staticClass:"register"},[r("router-link",{attrs:{to:"/login"}},[e._v("已有账号?去登录")])],1)],1)},n=[],a=(s(7658),s(2900)),o={data(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"onChange"},{pattern:/^\w{4,12}$/,message:"请输入4-12位用户名",trigger:"onChange"}],password:[{required:!0,message:"请输入用户名",trigger:"onChange"},{pattern:/^\w{6,12}$/,message:"请输入6-12位密码",trigger:"onChange"}]}}},methods:{submit(){this.$refs.form.validate().then((async()=>{await(0,a.N$)(this.form),console.log(this.form),this.$router.push("/login")})).catch((()=>{console.log("验证失败")}))}}},u=o,l=s(3736),i=(0,l.Z)(u,t,n,!1,null,"2937c207",null),c=i.exports},2900:function(e,r,s){s.d(r,{N$:function(){return n},i_:function(){return o},n$:function(){return a}});var t=s(435);const n=e=>(0,t.Z)({method:"POST",url:"/h5/user/register",data:e}),a=e=>(0,t.Z)({method:"POST",url:"/h5/user/login",data:e}),o=()=>(0,t.Z)({method:"GET",url:"/h5/user/currentUser"})}}]);