import{_ as e}from"./ContentWrap.0b70df28.js";import{_ as a}from"./Search.93173549.js";import{_ as t}from"./Dialog.88b19275.js";import{d as l,r as o,aC as i,m as r,o as s,c as m,g as n,a as p,w as d,Z as u,k as c,e as f,x as b,t as j,v,X as g}from"./index.0096b5f4.js";import{E as w}from"./el-button.f53ecc2f.js";import{E as x}from"./el-tag.9f870711.js";import{_ as y}from"./Table.vue_vue_type_script_lang.ff37cd01.js";import{g as D,d as _,s as k}from"./index.604712e7.js";import{u as R}from"./useTable.f491ab0f.js";import h from"./Write.e96512a8.js";import C from"./Detail.e2985aad.js";import"./el-card.f763efc6.js";import"./el-popper.c14f4f2a.js";import"./Form.vue_vue_type_script_lang.3a42fc5f.js";import"./el-col.ba2e55bb.js";import"./typescript.1883a211.js";import"./el-input.d51fd258.js";import"./index.534af8a1.js";import"./event.1d85f8f0.js";import"./index.b7b4ef21.js";import"./tsxHelper.9b9c9bff.js";import"./validator.f40216d8.js";import"./resize-event.c57c73db.js";import"./index.f3e681be.js";import"./scroll.3a0fada0.js";import"./browser.d3ab30f1.js";import"./arrow-up.ec07f54a.js";import"./el-input-number.945704e7.js";import"./arrow-down.f15a8022.js";import"./el-switch.4c9d5f02.js";import"./el-divider.3b7ea829.js";import"./InputPassword.271e9910.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.99137bfb.js";import"./aria.769ecda0.js";import"./set.16c3b1c3.js";import"./useForm.ebe08a91.js";import"./el-overlay.407b66bd.js";import"./vnode.4266945c.js";import"./use-dialog.24e9047c.js";import"./useAxios.b9ed04d0.js";import"./el-message-box.31b0591f.js";import"./formRules.849381b2.js";import"./Descriptions.bf7a2d6f.js";import"./index.931dab75.js";const S={class:"mb-10px"},P=l({setup(l){const{register:P,tableObject:z,methods:L}=R({getListApi:D,delListApi:_,response:{list:"list",total:"total"}}),{getList:F,setSearchParams:A}=L;F();const{t:E}=c(),T=[{label:E("exampleDemo.title"),value:"",component:"Input",field:"title"}],U=o([{field:"index",label:E("tableDemo.index"),type:"index"},{field:"title",label:E("tableDemo.title")},{field:"author",label:E("tableDemo.author")},{field:"display_time",label:E("tableDemo.displayTime")},{field:"importance",label:E("tableDemo.importance"),formatter:(e,a,t)=>i(x,{type:1===t?"success":2===t?"warning":"danger"},(()=>E(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:E("tableDemo.pageviews")},{field:"action",width:"260px",label:E("tableDemo.action")}]),V=r(!1),I=r(""),W=()=>{I.value=E("exampleDemo.add"),z.currentRow=null,V.value=!0},H=r(!1),O=async(e,a)=>{var t;z.currentRow=e;const{delList:l,getSelections:o}=L,i=await o();H.value=!0,await l(a?i.map((e=>e.id)):[null==(t=z.currentRow)?void 0:t.id],a).finally((()=>{H.value=!1}))},X=r(""),Z=(e,a)=>{I.value=E("edit"===a?"exampleDemo.edit":"exampleDemo.detail"),X.value=a,z.currentRow=e,V.value=!0},q=r(),B=r(!1),G=async()=>{var e;const a=p(q);await(null==(e=null==a?void 0:a.elFormRef)?void 0:e.validate((async e=>{if(e){B.value=!0;const e=await(null==a?void 0:a.getFormData());await k({data:e}).catch((()=>{})).finally((()=>{B.value=!1}))&&(V.value=!1,z.currentPage=1,F())}})))};return(l,o)=>(s(),m(u,null,[n(p(e),null,{default:d((()=>[n(p(a),{schema:T,onSearch:p(A),onReset:p(A)},null,8,["onSearch","onReset"]),f("div",S,[n(p(w),{type:"primary",onClick:W},{default:d((()=>[b(j(p(E)("exampleDemo.add")),1)])),_:1}),n(p(w),{loading:H.value,type:"danger",onClick:o[0]||(o[0]=e=>O(null,!0))},{default:d((()=>[b(j(p(E)("exampleDemo.del")),1)])),_:1},8,["loading"])]),n(p(y),{pageSize:p(z).pageSize,"onUpdate:pageSize":o[1]||(o[1]=e=>p(z).pageSize=e),currentPage:p(z).currentPage,"onUpdate:currentPage":o[2]||(o[2]=e=>p(z).currentPage=e),columns:p(U),data:p(z).tableList,loading:p(z).loading,pagination:{total:p(z).total},onRegister:p(P)},{action:d((({row:e})=>[n(p(w),{type:"primary",onClick:a=>Z(e,"edit")},{default:d((()=>[b(j(p(E)("exampleDemo.edit")),1)])),_:2},1032,["onClick"]),n(p(w),{type:"success",onClick:a=>Z(e,"detail")},{default:d((()=>[b(j(p(E)("exampleDemo.detail")),1)])),_:2},1032,["onClick"]),n(p(w),{type:"danger",onClick:a=>O(e,!1)},{default:d((()=>[b(j(p(E)("exampleDemo.del")),1)])),_:2},1032,["onClick"])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),n(p(t),{modelValue:V.value,"onUpdate:modelValue":o[4]||(o[4]=e=>V.value=e),title:I.value},{footer:d((()=>["detail"!==X.value?(s(),v(p(w),{key:0,type:"primary",loading:B.value,onClick:G},{default:d((()=>[b(j(p(E)("exampleDemo.save")),1)])),_:1},8,["loading"])):g("v-if",!0),n(p(w),{onClick:o[3]||(o[3]=e=>V.value=!1)},{default:d((()=>[b(j(p(E)("dialogDemo.close")),1)])),_:1})])),default:d((()=>["detail"!==X.value?(s(),v(h,{key:0,ref_key:"writeRef",ref:q,"current-row":p(z).currentRow},null,8,["current-row"])):g("v-if",!0),"detail"===X.value?(s(),v(C,{key:1,"current-row":p(z).currentRow},null,8,["current-row"])):g("v-if",!0)])),_:1},8,["modelValue","title"])],64))}});export{P as default};
