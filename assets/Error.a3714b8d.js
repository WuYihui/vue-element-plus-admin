import{d as e,a6 as r,o as s,c as t,e as o,t as a,g as i,a as n,w as l,k as c,x as u}from"./index.bb6aae4a.js";import{E as m}from"./el-button.816596c5.js";const p={class:"flex justify-center"},x={class:"text-center"},d=["src"],g={class:"text-14px text-[var(--el-color-info)]"},f={class:"mt-20px"},v=e({props:{type:r.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:r}){const v=e,{t:y}=c(),b={404:{url:"/assets/404.904e236c.svg",message:y("error.pageError"),buttonText:y("error.returnToHome")},500:{url:"/assets/500.40f0978f.svg",message:y("error.networkError"),buttonText:y("error.returnToHome")},403:{url:"/assets/403.7832526d.svg",message:y("error.noPermission"),buttonText:y("error.returnToHome")}},T=()=>{r("errorClick",v.type)};return(r,c)=>(s(),t("div",p,[o("div",x,[o("img",{width:"350",src:b[e.type].url,alt:""},null,8,d),o("div",g,a(b[e.type].message),1),o("div",f,[i(n(m),{type:"primary",onClick:T},{default:l((()=>[u(a(b[e.type].buttonText),1)])),_:1})])])]))}});export{v as _};
