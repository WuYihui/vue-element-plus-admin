import{_ as e}from"./Form.vue_vue_type_script_lang.e6453c1c.js";import{u as t}from"./useForm.c9c033bf.js";import{d as o,k as r,r as s,q as p,o as a,v as m,a as l}from"./index.bb6aae4a.js";import{r as i}from"./formRules.ba26a93a.js";import"./el-col.f7ecf519.js";import"./typescript.1883a211.js";import"./el-popper.481e5445.js";import"./el-input.ea3c4763.js";import"./index.4c2313bf.js";import"./event.1d85f8f0.js";import"./index.77b475e8.js";import"./el-tag.f6e5a8c9.js";import"./tsxHelper.b80ce775.js";import"./validator.6f720630.js";import"./resize-event.45d54176.js";import"./index.0ef1ce5e.js";import"./scroll.0fc7e5a7.js";import"./browser.6de9a428.js";import"./arrow-up.5aa585d6.js";import"./el-button.816596c5.js";import"./el-input-number.78adb8f4.js";import"./arrow-down.6a10ee4b.js";import"./el-switch.e7d1bb79.js";import"./el-divider.46d995f9.js";import"./InputPassword.7327ca47.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.6653b13a.js";import"./aria.769ecda0.js";import"./set.57b1ce7f.js";const n=o({props:{currentRow:{type:Object,default:()=>null}},setup(o,{expose:n}){const c=o,{t:u}=r(),d=s([{field:"title",label:u("exampleDemo.title"),component:"Input",formItemProps:{rules:[i]},colProps:{span:24}},{field:"author",label:u("exampleDemo.author"),component:"Input",formItemProps:{rules:[i]}},{field:"display_time",label:u("exampleDemo.displayTime"),component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"},formItemProps:{rules:[i]}},{field:"importance",label:u("exampleDemo.importance"),component:"Select",formItemProps:{rules:[i]},componentProps:{options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},{field:"pageviews",label:u("exampleDemo.pageviews"),component:"InputNumber",value:0,formItemProps:{rules:[i]}},{field:"content",component:"Editor",colProps:{span:24},componentProps:{defaultHtml:"",onChange:e=>{const{setValues:t}=b;t({content:e.getHtml()})}},label:u("exampleDemo.content")}]),f=s({title:[i],author:[i],importance:[i],pageviews:[i],display_time:[i],content:[i]}),{register:j,methods:b,elFormRef:v}=t({schema:d});return p((()=>c.currentRow),(e=>{if(!e)return;const{setValues:t,setSchema:o}=b;t(e),o([{field:"content",path:"componentProps.defaultHtml",value:e.content}])}),{deep:!0,immediate:!0}),n({elFormRef:v,getFormData:b.getFormData}),(t,o)=>(a(),m(l(e),{rules:l(f),onRegister:l(j)},null,8,["rules","onRegister"]))}});export{n as default};
