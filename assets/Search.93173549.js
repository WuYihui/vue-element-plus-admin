import{_ as e}from"./Form.vue_vue_type_script_lang.3a42fc5f.js";import{d as t,a6 as a,m as s,J as o,bW as i,a as n,b0 as l,s as r,o as c,c as d,g as m,w as u,$ as f,v as p,X as h,Z as y,x as v,t as g,k as x}from"./index.0096b5f4.js";import{E as b}from"./el-button.f53ecc2f.js";import{u as k}from"./useForm.ebe08a91.js";const w={key:0},_=t({props:{schema:{type:Array,default:()=>[]},isCol:a.bool.def(!1),labelWidth:a.oneOfType([String,Number]).def("auto"),layout:a.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttomPosition:a.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:a.bool.def(!0),showReset:a.bool.def(!0),expand:a.bool.def(!1),expandField:a.string.def("")},emits:["search","reset"],setup(t,{emit:a}){const _=t,{t:F}=x(),C=s(!0),R=o((()=>{let e=i(_.schema);if(_.expand&&_.expandField&&!n(C)){const t=l(e,(e=>e.field===_.expandField));if(t>-1){const a=e.length;e.splice(t+1,a)}}return"inline"===_.layout&&(e=e.concat([{field:"action",formItemProps:{labelWidth:"0px"}}])),e})),{register:j,elFormRef:S,methods:W}=k(),q=async()=>{var e;await(null==(e=n(S))?void 0:e.validate((async e=>{if(e){const{getFormData:e}=W,t=await e();a("search",t)}})))},P=async()=>{var e;null==(e=n(S))||e.resetFields();const{getFormData:t}=W,s=await t();a("reset",s)},A=o((()=>({textAlign:_.buttomPosition}))),D=()=>{var e;null==(e=n(S))||e.resetFields(),C.value=!n(C)};return(a,s)=>{const o=r("Icon");return c(),d(y,null,[m(n(e),{"is-custom":!1,"label-width":t.labelWidth,"hide-required-asterisk":"",inline:"","is-col":t.isCol,schema:n(R),onRegister:n(j)},{action:u((()=>["inline"===t.layout?(c(),d("div",w,[t.showSearch?(c(),p(n(b),{key:0,type:"primary",onClick:q},{default:u((()=>[m(o,{icon:"ep:search",class:"mr-5px"}),v(" "+g(n(F)("common.query")),1)])),_:1})):h("v-if",!0),t.showReset?(c(),p(n(b),{key:1,onClick:P},{default:u((()=>[m(o,{icon:"ep:refresh-right",class:"mr-5px"}),v(" "+g(n(F)("common.reset")),1)])),_:1})):h("v-if",!0),t.expand?(c(),p(n(b),{key:2,type:"text",onClick:D},{default:u((()=>[v(g(n(F)(C.value?"common.shrink":"common.expand"))+" ",1),m(o,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):h("v-if",!0)])):h("v-if",!0)])),_:1},8,["label-width","is-col","schema","onRegister"]),"bottom"===t.layout?(c(),d("div",{key:0,style:f(n(A))},[t.showSearch?(c(),p(n(b),{key:0,type:"primary",onClick:q},{default:u((()=>[m(o,{icon:"ep:search",class:"mr-5px"}),v(" "+g(n(F)("common.query")),1)])),_:1})):h("v-if",!0),t.showReset?(c(),p(n(b),{key:1,onClick:P},{default:u((()=>[m(o,{icon:"ep:refresh-right",class:"mr-5px"}),v(" "+g(n(F)("common.reset")),1)])),_:1})):h("v-if",!0),t.expand?(c(),p(n(b),{key:2,type:"text",onClick:D},{default:u((()=>[v(g(n(F)(C.value?"common.shrink":"common.expand"))+" ",1),m(o,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):h("v-if",!0)],4)):h("v-if",!0)],64)}}});export{_};
