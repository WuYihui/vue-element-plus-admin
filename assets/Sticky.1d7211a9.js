var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,a,o)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o;import{_ as p}from"./ContentWrap.0b70df28.js";import{H as r,I as i,d as u,R as f,aL as m,c1 as g,c2 as x,m as y,J as c,q as v,B as d,au as b,bQ as C,aN as h,o as k,c as j,e as _,E as w,n as O,a as $,$ as S,_ as E,a0 as I,v as P,w as T,k as A,g as z}from"./index.0096b5f4.js";import{_ as N}from"./Sticky.24fb25a5.js";import{a as q}from"./scroll.3a0fada0.js";import"./el-card.f763efc6.js";import"./el-popper.c14f4f2a.js";const D=r({zIndex:{type:i([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),W=u((B=((t,e)=>{for(var a in e||(e={}))n.call(e,a)&&s(t,a,e[a]);if(o)for(var a of o(e))l.call(e,a)&&s(t,a,e[a]);return t})({},{name:"ElAffix"}),e(B,a({props:D,emits:{scroll:({scrollTop:t,fixed:e})=>"number"==typeof t&&"boolean"==typeof e,change:t=>"boolean"==typeof t},setup(t,{expose:e,emit:a}){const o=t,n=f("affix"),l=m(),s=m(),p=m(),{height:r}=g(),{height:i,width:u,top:E,bottom:I,update:P}=x(s),T=x(l),A=y(!1),z=y(0),N=y(0),D=c((()=>({height:A.value?`${i.value}px`:"",width:A.value?`${u.value}px`:""}))),W=c((()=>{if(!A.value)return{};const t=o.offset?`${o.offset}px`:0;return{height:`${i.value}px`,width:`${u.value}px`,top:"top"===o.position?t:"",bottom:"bottom"===o.position?t:"",transform:N.value?`translateY(${N.value}px)`:"",zIndex:o.zIndex}})),B=()=>{if(p.value)if(z.value=p.value instanceof Window?document.documentElement.scrollTop:p.value.scrollTop||0,"top"===o.position)if(o.target){const t=T.bottom.value-o.offset-i.value;A.value=o.offset>E.value&&T.bottom.value>0,N.value=t<0?t:0}else A.value=o.offset>E.value;else if(o.target){const t=r.value-T.top.value-o.offset-i.value;A.value=r.value-o.offset<I.value&&r.value>T.top.value,N.value=t<0?-t:0}else A.value=r.value-o.offset<I.value};return v(A,(t=>a("change",t))),d((()=>{var t;o.target?(l.value=null!=(t=document.querySelector(o.target))?t:void 0,l.value||b("ElAffix",`Target is not existed: ${o.target}`)):l.value=document.documentElement,p.value=q(s.value,!0),P()})),C(p,"scroll",(()=>{a("scroll",{scrollTop:z.value,fixed:A.value})})),h(B),e({update:B}),(t,e)=>(k(),j("div",{ref_key:"root",ref:s,class:O($(n).b()),style:S($(D))},[_("div",{class:O({[$(n).m("fixed")]:A.value}),style:S($(W))},[w(t.$slots,"default")],6)],6))}}))));var B;const H=I(E(W,[["__file","/home/runner/work/element-plus/element-plus/packages/components/affix/src/affix.vue"]]));const J=_("div",{style:{padding:"10px","background-color":"lightblue"}}," Sticky 距离顶部90px ",-1),L=_("p",{style:{margin:"80px"}},"Content",-1),Q=_("p",{style:{margin:"80px"}},"Content",-1),R=_("div",{style:{padding:"10px","background-color":"lightblue"}},"Affix 距离顶部150px ",-1),Y=_("p",{style:{margin:"80px"}},"Content",-1),F=_("p",{style:{margin:"80px"}},"Content",-1),G=_("p",{style:{margin:"80px"}},"Content",-1),K=_("p",{style:{margin:"80px"}},"Content",-1),M=_("p",{style:{margin:"80px"}},"Content",-1),U=_("p",{style:{margin:"80px"}},"Content",-1),V=_("p",{style:{margin:"80px"}},"Content",-1),X=_("p",{style:{margin:"80px"}},"Content",-1),Z=_("p",{style:{margin:"80px"}},"Content",-1),tt=_("p",{style:{margin:"80px"}},"Content",-1),et=_("p",{style:{margin:"80px"}},"Content",-1),at=_("p",{style:{margin:"80px"}},"Content",-1),ot=_("p",{style:{margin:"80px"}},"Content",-1),nt=_("p",{style:{margin:"80px"}},"Content",-1),lt=_("p",{style:{margin:"80px"}},"Content",-1),st=_("p",{style:{margin:"80px"}},"Content",-1),pt=_("p",{style:{margin:"80px"}},"Content",-1),rt=_("p",{style:{margin:"80px"}},"Content",-1),it=_("p",{style:{margin:"80px"}},"Content",-1),ut=_("p",{style:{margin:"80px"}},"Content",-1),ft=_("p",{style:{margin:"80px"}},"Content",-1),mt=_("p",{style:{margin:"80px"}},"Content",-1),gt=_("p",{style:{margin:"80px"}},"Content",-1),xt=_("p",{style:{margin:"80px"}},"Content",-1),yt=_("p",{style:{margin:"80px"}},"Content",-1),ct=_("p",{style:{margin:"80px"}},"Content",-1),vt=_("div",{style:{padding:"10px","background-color":"lightblue"}},"Affix 距离底部150px ",-1),dt=_("p",{style:{margin:"80px"}},"Content",-1),bt=_("p",{style:{margin:"80px"}},"Content",-1),Ct=_("div",{style:{padding:"10px","background-color":"lightblue"}}," Sticky 距离底部90px ",-1),ht=_("p",{style:{margin:"80px"}},"Content",-1),kt=_("p",{style:{margin:"80px"}},"Content",-1),jt=u({setup(t){const{t:e}=A();return(t,a)=>(k(),P($(p),{title:$(e)("stickyDemo.sticky")},{default:T((()=>[z($(N),{offset:90},{default:T((()=>[J])),_:1}),L,Q,z($(H),{offset:150},{default:T((()=>[R])),_:1}),Y,F,G,K,M,U,V,X,Z,tt,et,at,ot,nt,lt,st,pt,rt,it,ut,ft,mt,gt,xt,yt,ct,z($(H),{offset:150,position:"bottom"},{default:T((()=>[vt])),_:1}),dt,bt,z($(N),{offset:90,position:"bottom"},{default:T((()=>[Ct])),_:1}),ht,kt])),_:1},8,["title"]))}});export{jt as default};
