var e=Object.defineProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(l,t,s)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s,r=(e,r)=>{for(var n in r||(r={}))t.call(r,n)&&a(e,n,r[n]);if(l)for(var n of l(r))s.call(r,n)&&a(e,n,r[n]);return e};import{d as n,G as i,S as o,R as c,aC as p,_ as d,s as u,o as f,c as m,e as b,Z as y,a8 as v,v as g,g as h,A as w,J as x,n as k,E as S,x as j,t as $,X as _,a0 as A,a1 as E,a6 as D,b as O,am as N,m as C,a as I,w as P,j as R,aA as W,aK as z,W as K}from"./index.0096b5f4.js";import{E as B}from"./el-popper.c14f4f2a.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import{E as J}from"./index.931dab75.js";import{g as M}from"./vnode.4266945c.js";import{i as X}from"./validator.f40216d8.js";import{u as Z}from"./index.534af8a1.js";var q=n({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:i("elDescriptions",{})}),render(){var e,l,t,s,a,r;const n=M(this.cell),{border:i,direction:d}=this.descriptions,u="vertical"===d,f=(null==(t=null==(l=null==(e=this.cell)?void 0:e.children)?void 0:l.label)?void 0:t.call(l))||n.label,m=null==(r=null==(a=null==(s=this.cell)?void 0:s.children)?void 0:a.default)?void 0:r.call(a),b=n.span,y=n.align?`is-${n.align}`:"",v=n.labelAlign?`is-${n.labelAlign}`:y,g=n.className,h=n.labelClassName,w={width:o(n.width),minWidth:o(n.minWidth)},x=c("descriptions");switch(this.type){case"label":return p(this.tag,{style:w,class:[x.e("cell"),x.e("label"),x.is("bordered-label",i),x.is("vertical-label",u),v,h],colSpan:u?b:1},f);case"content":return p(this.tag,{style:w,class:[x.e("cell"),x.e("content"),x.is("bordered-content",i),x.is("vertical-content",u),y,g],colSpan:u?b:2*b-1},m);default:return p("td",{style:w,class:[x.e("cell"),y],colSpan:b},[p("span",{class:[x.e("label"),h]},f),p("span",{class:[x.e("content"),g]},m)])}}});const F=n({name:"ElDescriptionsRow",components:{[q.name]:q},props:{row:{type:Array}},setup:()=>({descriptions:i("elDescriptions",{})})}),H={key:1};var L=d(F,[["render",function(e,l,t,s,a,r){const n=u("el-descriptions-cell");return"vertical"===e.descriptions.direction?(f(),m(y,{key:0},[b("tr",null,[(f(!0),m(y,null,v(e.row,((e,l)=>(f(),g(n,{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),b("tr",null,[(f(!0),m(y,null,v(e.row,((e,l)=>(f(),g(n,{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(f(),m("tr",H,[(f(!0),m(y,null,v(e.row,((l,t)=>(f(),m(y,{key:`tr3-${t}`},[e.descriptions.border?(f(),m(y,{key:0},[h(n,{cell:l,tag:"td",type:"label"},null,8,["cell"]),h(n,{cell:l,tag:"td",type:"content"},null,8,["cell"])],64)):(f(),g(n,{key:1,cell:l,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}],["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);var Q=d(n({name:"ElDescriptions",components:{[L.name]:L},props:{border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,default:"horizontal"},size:{type:String,validator:X},title:{type:String,default:""},extra:{type:String,default:""}},setup(e,{slots:l}){w("elDescriptions",e);const t=Z(),s=c("descriptions"),a=x((()=>[s.b(),s.is(s.m(t.value),!!t.value)])),r=e=>{const l=Array.isArray(e)?e:[e],t=[];return l.forEach((e=>{Array.isArray(e.children)?t.push(...r(e.children)):t.push(e)})),t},n=(e,l,t,s=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),s&&(e.props.span=l),e);return{descriptionKls:a,getRows:()=>{var t;const s=r(null==(t=l.default)?void 0:t.call(l)).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),a=[];let i=[],o=e.column,c=0;return s.forEach(((l,t)=>{var r;const p=(null==(r=l.props)?void 0:r.span)||1;if(t<s.length-1&&(c+=p>o?o:p),t===s.length-1){const t=e.column-c%e.column;return i.push(n(l,t,o,!0)),void a.push(i)}p<o?(o-=p,i.push(l)):(i.push(n(l,p,o)),a.push(i),o=e.column,i=[])})),a},ns:s}}}),[["render",function(e,l,t,s,a,r){const n=u("el-descriptions-row");return f(),m("div",{class:k(e.descriptionKls)},[e.title||e.extra||e.$slots.title||e.$slots.extra?(f(),m("div",{key:0,class:k(e.ns.e("header"))},[b("div",{class:k(e.ns.e("title"))},[S(e.$slots,"title",{},(()=>[j($(e.title),1)]))],2),b("div",{class:k(e.ns.e("extra"))},[S(e.$slots,"extra",{},(()=>[j($(e.extra),1)]))],2)],2)):_("v-if",!0),b("div",{class:k(e.ns.e("body"))},[b("table",{class:k([e.ns.e("table"),e.ns.is("bordered",e.border)])},[b("tbody",null,[(f(!0),m(y,null,v(e.getRows(),((e,l)=>(f(),g(n,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/index.vue"]]),T=n({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const U=A(Q,{DescriptionsItem:T}),V=E(T);const Y={class:"flex items-center"};var ee=G(n({props:{title:D.string.def(""),message:D.string.def(""),collapse:D.bool.def(!0),schema:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},setup(e){const l=e,t=O(),s=x((()=>t.getMobile)),a=N(),{getPrefixCls:n}=R(),i=n("descriptions"),o=x((()=>{const e=["title","message","collapse","schema","data","class"],t=r(r({},a),l);for(const l in t)-1!==e.indexOf(l)&&delete t[l];return t})),c=C(!0),p=()=>{l.collapse&&(c.value=!I(c))};return(l,t)=>{const a=u("Icon");return f(),m("div",{class:k([I(i),"bg-[var(--el-color-white)]"])},[e.title?(f(),m("div",{key:0,class:k([`${I(i)}-header`,"h-50px flex justify-between items-center mb-10px border-bottom-1 border-solid border-[var(--tags-view-border-color)] px-10px cursor-pointer"]),onClick:p},[b("div",{class:k([`${I(i)}-header__title`,"relative font-18px font-bold ml-10px"])},[b("div",Y,[j($(e.title)+" ",1),e.message?(f(),g(I(B),{key:0,content:e.message,placement:"right"},{default:P((()=>[h(a,{icon:"ep:warning",class:"ml-5px"})])),_:1},8,["content"])):_("v-if",!0)])],2),e.collapse?(f(),g(a,{key:0,icon:c.value?"ep:arrow-down":"ep:arrow-up"},null,8,["icon"])):_("v-if",!0)],2)):_("v-if",!0),h(I(J),null,{default:P((()=>[W(b("div",{class:k([`${I(i)}-content`,"p-10px"])},[h(I(U),K({column:2,border:"",direction:I(s)?"vertical":"horizontal"},I(o)),{default:P((()=>[(f(!0),m(y,null,v(e.schema,(t=>(f(),g(I(V),K({key:t.field},(e=>{const l=["field"],t=r({},e);for(const s in t)-1!==l.indexOf(s)&&delete t[s];return t})(t)),{label:P((()=>[S(l.$slots,`${t.field}-label`,{label:t.label},(()=>[j($(t.label),1)]),!0)])),default:P((()=>[S(l.$slots,t.field,{row:e.data},(()=>[j($(e.data[t.field]),1)]),!0)])),_:2},1040)))),128))])),_:3},16,["direction"])],2),[[z,c.value]])])),_:3})],2)}}}),[["__scopeId","data-v-4929904a"]]);export{ee as D};
