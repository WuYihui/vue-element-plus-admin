import{H as e,O as a,I as i,aE as t,ak as n,aD as s,d as l,Q as c,ap as o,J as d,R as r,m as v,q as u,ax as h,B as f,_ as p,C as m,at as y,au as b,s as k,o as g,c as w,e as C,n as x,aq as I,v as V,w as S,Y as T,X as B,t as _,Z as E,g as j,$ as N,ar as P,a0 as D}from"./index.0096b5f4.js";import{i as K}from"./validator.f40216d8.js";import{U as q,C as z,I as F}from"./event.1d85f8f0.js";import{u as H}from"./index.b7b4ef21.js";import{c as J,u as L}from"./index.534af8a1.js";const O=e({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:Number,default:40},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:a,default:""},inactiveIcon:{type:a,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:i(Function)},size:{type:String,validator:K}}),Q=l({name:"ElSwitch",components:{ElIcon:c,Loading:o},props:O,emits:{[q]:e=>t(e)||n(e)||s(e),[z]:e=>t(e)||n(e)||s(e),[F]:e=>t(e)||n(e)||s(e)},setup(e,{emit:a}){const{formItem:i}=H(),n=J(d((()=>e.loading))),s=r("switch"),l=L(),c=v(!1!==e.modelValue),o=v(),p=v(),k=d((()=>[s.b(),s.m(l.value),s.is("disabled",n.value),s.is("checked",w.value)]));u((()=>e.modelValue),(()=>{c.value=!0})),u((()=>e.value),(()=>{c.value=!1}));const g=d((()=>c.value?e.modelValue:e.value)),w=d((()=>g.value===e.activeValue));[e.activeValue,e.inactiveValue].includes(g.value)||(a(q,e.inactiveValue),a(z,e.inactiveValue),a(F,e.inactiveValue)),u(w,(()=>{var a;o.value.checked=w.value,(e.activeColor||e.inactiveColor)&&x(),e.validateEvent&&(null==(a=null==i?void 0:i.validate)||a.call(i,"change").catch((e=>h())))}));const C=()=>{const i=w.value?e.inactiveValue:e.activeValue;a(q,i),a(z,i),a(F,i),m((()=>{o.value.checked=w.value}))},x=()=>{const a=w.value?e.activeColor:e.inactiveColor,i=p.value;e.borderColor?i.style.borderColor=e.borderColor:e.borderColor||(i.style.borderColor=a),i.style.backgroundColor=a,i.children[0].style.color=a};return f((()=>{(e.activeColor||e.inactiveColor||e.borderColor)&&x(),o.value.checked=w.value})),{ns:s,input:o,core:p,switchDisabled:n,checked:w,switchKls:k,handleChange:C,switchValue:()=>{if(n.value)return;const{beforeChange:a}=e;if(!a)return void C();const i=a();[y(i),t(i)].some((e=>e))||b("ElSwitch","beforeChange must return type `Promise<boolean>` or `boolean`"),y(i)?i.then((e=>{e&&C()})).catch((e=>{})):i&&C()},focus:()=>{var e,a;null==(a=null==(e=o.value)?void 0:e.focus)||a.call(e)}}}}),R=["aria-checked","aria-disabled"],U=["id","name","true-value","false-value","disabled"],X=["aria-hidden"],Y=["aria-hidden"],Z=["aria-hidden"],$=["aria-hidden"];const A=D(p(Q,[["render",function(e,a,i,t,n,s){const l=k("el-icon"),c=k("loading");return g(),w("div",{class:x(e.switchKls),role:"switch","aria-checked":e.checked,"aria-disabled":e.switchDisabled,onClick:a[2]||(a[2]=P(((...a)=>e.switchValue&&e.switchValue(...a)),["prevent"]))},[C("input",{id:e.id,ref:"input",class:x(e.ns.e("input")),type:"checkbox",name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:e.switchDisabled,onChange:a[0]||(a[0]=(...a)=>e.handleChange&&e.handleChange(...a)),onKeydown:a[1]||(a[1]=I(((...a)=>e.switchValue&&e.switchValue(...a)),["enter"]))},null,42,U),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?B("v-if",!0):(g(),w("span",{key:0,class:x([e.ns.e("label"),e.ns.em("label","left"),e.ns.is("active",!e.checked)])},[e.inactiveIcon?(g(),V(l,{key:0},{default:S((()=>[(g(),V(T(e.inactiveIcon)))])),_:1})):B("v-if",!0),!e.inactiveIcon&&e.inactiveText?(g(),w("span",{key:1,"aria-hidden":e.checked},_(e.inactiveText),9,X)):B("v-if",!0)],2)),C("span",{ref:"core",class:x(e.ns.e("core")),style:N({width:(e.width||40)+"px"})},[e.inlinePrompt?(g(),w("div",{key:0,class:x(e.ns.e("inner"))},[e.activeIcon||e.inactiveIcon?(g(),w(E,{key:0},[e.activeIcon?(g(),V(l,{key:0,class:x([e.ns.is("icon"),e.checked?e.ns.is("show"):e.ns.is("hide")])},{default:S((()=>[(g(),V(T(e.activeIcon)))])),_:1},8,["class"])):B("v-if",!0),e.inactiveIcon?(g(),V(l,{key:1,class:x([e.ns.is("icon"),e.checked?e.ns.is("hide"):e.ns.is("show")])},{default:S((()=>[(g(),V(T(e.inactiveIcon)))])),_:1},8,["class"])):B("v-if",!0)],64)):e.activeText||e.inactiveIcon?(g(),w(E,{key:1},[e.activeText?(g(),w("span",{key:0,class:x([e.ns.is("text"),e.checked?e.ns.is("show"):e.ns.is("hide")]),"aria-hidden":!e.checked},_(e.activeText.substring(0,3)),11,Y)):B("v-if",!0),e.inactiveText?(g(),w("span",{key:1,class:x([e.ns.is("text"),e.checked?e.ns.is("hide"):e.ns.is("show")]),"aria-hidden":e.checked},_(e.inactiveText.substring(0,3)),11,Z)):B("v-if",!0)],64)):B("v-if",!0)],2)):B("v-if",!0),C("div",{class:x(e.ns.e("action"))},[e.loading?(g(),V(l,{key:0,class:x(e.ns.is("loading"))},{default:S((()=>[j(c)])),_:1},8,["class"])):B("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?B("v-if",!0):(g(),w("span",{key:1,class:x([e.ns.e("label"),e.ns.em("label","right"),e.ns.is("active",e.checked)])},[e.activeIcon?(g(),V(l,{key:0},{default:S((()=>[(g(),V(T(e.activeIcon)))])),_:1})):B("v-if",!0),!e.activeIcon&&e.activeText?(g(),w("span",{key:1,"aria-hidden":!e.checked},_(e.activeText),9,$)):B("v-if",!0)],2))],10,R)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]));export{A as E};
