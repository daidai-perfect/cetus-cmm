import{k as h,a9 as S,o as a,l,m as s,t,p,s as b,v as $,aa as T,Y as y,c as _,F as i,E as r,C as c,G as B,T as A,q as d,ab as V,I as M,K as E}from"./entry.12ef1f17.js";const F=e=>(b("data-v-bd6c0e96"),e=e(),$(),e),q={key:0,class:"network-tips"},z=F(()=>s("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1));function D(e,o,v,f,k,N){return e.isShowTips&&e.chainName==="Aptos"&&e.aptosConnected?(a(),l("div",q,[z,s("span",null,t(e.$t("newAdd.walletNotConnect",{network:`${e.config[e.chainName].networkTip}`})),1)])):p("",!0)}const ee=h(S,[["render",D],["__scopeId","data-v-bd6c0e96"]]),u=e=>(b("data-v-5157461d"),e=e(),$(),e),G=u(()=>s("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),K={class:"setting-container"},L={class:"title"},U={class:"tag-list"},Y={class:"input-box"},j={class:"custom"},H={key:0,class:"icon modal-icon-close","aria-hidden":"true"},J=u(()=>s("use",{"xlink:href":"#icon-icon-tips"},null,-1)),O=[J],P={key:1,class:"icon modal-icon-close","aria-hidden":"true"},Q=u(()=>s("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),R=[Q],W={class:"footer"};function X(e,o,v,f,k,N){const w=V,C=M,g=E,I=y("Modal");return a(),_(I,{title:e.$t("modal.settingModalTitle"),class:"setting",centered:"",visible:!0,width:"400px",onCancel:o[2]||(o[2]=n=>e.$emit("onClose"))},{closeIcon:i(()=>[G]),footer:i(()=>[s("div",W,[r(g,{type:"cancel",class:"cancel-btn cancel-btn-new",onClick:o[1]||(o[1]=n=>e.$emit("onClose"))},{default:i(()=>[c(t(e.$t("button.cancel")),1)]),_:1}),r(g,{class:"confirmbtn",disabled:Number(e.slippage)==0||Number(e.slippage)>100,onClick:e.confirm},{default:i(()=>[c(t(e.$t("button.confirm")),1)]),_:1},8,["disabled","onClick"])])]),default:i(()=>[s("div",K,[s("div",L,t(e.$t("modal.slippageTolerance")),1),s("div",U,[(a(!0),l(B,null,A(e.settingArr,(n,m)=>(a(),_(w,{key:m,class:d(n==e.slippage?"tag-active":""),onClick:Z=>e.changeActiveIndex(m,n)},{default:i(()=>[c(t(n)+"% ",1)]),_:2},1032,["class","onClick"]))),128))]),s("div",Y,[r(C,{value:e.slippage,"onUpdate:value":o[0]||(o[0]=n=>e.slippage=n),placeholder:"",suffix:"%",class:d(["slippage-input",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-input-waring":Number(e.slippage)>50?"slippage-input-error":""])},null,8,["value","class"]),s("span",j,t(e.$t("modal.customSlippage")),1)])]),e.slippage?(a(),l("div",{key:0,class:d(["slippage-hint",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-hint-waring":Number(e.slippage)>50?"slippage-hint-error":""])},[Number(e.slippage)>1&&50>=Number(e.slippage)?(a(),l("svg",H,O)):p("",!0),Number(e.slippage)>50?(a(),l("svg",P,R)):p("",!0),s("p",null,t(Number(e.slippage)>1&&50>=Number(e.slippage)?e.$t("tips.slippageTolerance2"):Number(e.slippage)>50?e.$t("tips.slippageTolerance1"):""),1)],2)):p("",!0)]),_:1},8,["title"])}const se=h(T,[["render",X],["__scopeId","data-v-5157461d"]]);export{se as _,ee as a};
