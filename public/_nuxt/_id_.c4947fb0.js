import{_ as xo}from"./back.fd4ae9d3.js";import{_ as oe}from"./status-block.0ca976a3.js";import{a as uo,Z as co,r as u,e as po,b as mo,i as b,ad as z,x as fo,L as Lo,Q as P,k as vo,o as p,l as f,m as e,E as g,F as w,t as i,q as M,p as E,S as Uo,s as Io,v as ko,V as ee,Y as ne,c as ro,C as O,K as jo,W as se,w as J,$ as ie,f8 as ae,f as te,fb as B,fi as No,A as le,j as W,z as H,X as re,R as lo,N as de,O as ue,G as ce,T as pe,U as me}from"./entry.12ef1f17.js";/* empty css              */import{_ as Bo,a as Eo}from"./icon-arrow_2x.db44c7c5.js";import{_ as fe}from"./apr-tab.55e0ddd0.js";import{_ as ve}from"./apr-tips.5c5f76b1.js";import{p as Ie}from"./precision.ce0280e5.js";import"./index.b2a6d162.js";const ke=uo({props:{positionInfo:{type:Object,required:!0}},setup(o){const{t:m}=co();let N=u(!1),q=u(!0);const k=po(),_=mo(),d=b(()=>_),I=b(()=>{var c,C,l,D,n,v,G,V;const T=o.positionInfo.amountA*((C=d.value.RATES[(c=o.positionInfo)==null?void 0:c.token_a.address])==null?void 0:C.price),$=o.positionInfo.amountB*((D=d.value.RATES[(l=o.positionInfo)==null?void 0:l.token_b.address])==null?void 0:D.price);return((v=d.value.RATES[(n=o.positionInfo)==null?void 0:n.token_a.address])==null?void 0:v.price)&&((V=d.value.RATES[(G=o.positionInfo)==null?void 0:G.token_b.address])==null?void 0:V.price)?T+$:" --"}),h=b(()=>{var T,$,c,C;return(($=d.value.RATES[(T=o.positionInfo)==null?void 0:T.token_a.name.toUpperCase()])==null?void 0:$.price)&&I.value!=="--"?(o.positionInfo.amountA*((C=d.value.RATES[(c=o.positionInfo)==null?void 0:c.token_a.name.toUpperCase()])==null?void 0:C.price)/I.value*100).toFixed(0):" --"}),L=b(()=>{var T,$,c,C;return(($=d.value.RATES[(T=o.positionInfo)==null?void 0:T.token_b.name.toUpperCase()])==null?void 0:$.price)&&I.value!=="--"?(o.positionInfo.amountB*((C=d.value.RATES[(c=o.positionInfo)==null?void 0:c.token_b.name.toUpperCase()])==null?void 0:C.price)/I.value*100).toFixed(0):" --"}),U=b(()=>d.value.tokensObj&&o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.address&&d.value.tokensObj[o.positionInfo.token_a.address]&&d.value.tokensObj[o.positionInfo.token_a.address].logoURI),X=b(()=>d.value.tokensObj&&o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.address&&d.value.tokensObj[o.positionInfo.token_b.address]&&d.value.tokensObj[o.positionInfo.token_b.address].logoURI);return console.log(o.positionInfo,"===>positionInfo"),{fromPercent:L,toPercent:h,amountUSD:I,showNum:z,t:m,importIcon:fo,indexStore:k,rateChange:q,decimalFormat:Lo,fromCoinUrl:U,toCoinUrl:X,pools:d,addCommom:P,isPc:N}}});const he=o=>(Io("data-v-c4a61f98"),o=o(),ko(),o),ge={class:"position-card"},be={class:"coin-pair"},_e=["src"],we=["src"],ye={class:"fee"},$e={class:"right"},Ce={key:0,class:"status"},Se={class:"min-and-max"},Ae={key:0},Te={class:"text"},Re={key:0,src:Bo,alt:""},Oe={key:1,src:Eo,alt:""},Pe={class:"text"},Ne={key:1},Le={class:"text"},Ue={key:0,src:Bo,alt:""},je={key:1,src:Eo,alt:""},Be={class:"text"},Ee=he(()=>e("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),qe=[Ee],De={class:"liquidity"},Fe={class:"label"},We={class:"value"},He={class:"token-num"},Me={class:"item"},ze=["src"],Ge={class:"rate"},Ke={class:"item"},Qe=["src"],Xe={class:"rate"};function Ye(o,m,N,q,k,_){const d=Uo,I=oe;return p(),f("div",ge,[e("div",{class:M(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[g(d,{class:"left-skeleton",loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[e("div",be,[e("div",null,[e("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,_e),e("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,we)]),e("span",null,i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" - "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)]),e("div",ye,i(o.$t("common.fee"))+" "+i(o.positionInfo.fee*100)+"%",1)]),_:1},8,["loading"])],2),e("div",$e,[o.pools.currentPositionLoading?E("",!0):(p(),f("div",Ce,[g(I,{"current-status":o.positionInfo.currentStatus||"","block-name":"detail"},null,8,["current-status"])])),g(d,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[e("div",Se,[o.rateChange?(p(),f("div",Ae,[e("div",Te,i(o.addCommom(o.decimalFormat(String(o.positionInfo.minPrice),6))),1),o.indexStore.theme=="default"?(p(),f("img",Re)):(p(),f("img",Oe)),e("div",Pe,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("\u221E")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"\u221E":o.addCommom(o.decimalFormat(String(o.positionInfo.maxPrice),6)))+" "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(p(),f("div",Ne,[e("div",Le,i(o.addCommom(o.decimalFormat(String(1/Number(o.positionInfo.maxPrice)),6))),1),o.indexStore.theme=="default"?(p(),f("img",Ue)):(p(),f("img",je)),e("div",Be,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("\u221E")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"\u221E":o.addCommom(o.decimalFormat(String(1/Number(o.positionInfo.minPrice)),6),6))+" "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),(p(),f("svg",{class:"icon-change","aria-hidden":"true",onClick:m[0]||(m[0]=h=>o.rateChange=!o.rateChange)},qe))])]),_:1},8,["loading"]),e("div",De,[g(d,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[e("div",Fe,i(o.$t("common.liquidity")),1),e("div",We," $"+i(o.amountUSD=="--"?"--":Number(o.amountUSD)==0?0:Number(o.amountUSD)<.01?"<0.01":o.addCommom(o.amountUSD,2)),1)]),_:1},8,["loading"])]),e("div",He,[g(d,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[e("div",Me,[e("div",null,[e("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,ze),e("p",null,i(o.showNum(o.positionInfo.amountA,o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.decimals)),1),e("span",null,i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" "+i(o.positionInfo.token_a.labels&&o.positionInfo.token_a.labels[0]?`(${o.positionInfo.token_a.labels[0]})`:""),1)]),e("div",Ge,i(o.addCommom(o.positionInfo.fromPercent,0))+"% ",1)]),e("div",Ke,[e("div",null,[e("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,Qe),e("p",null,i(o.showNum(o.positionInfo.amountB,o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.decimals)),1),e("span",null,i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_b.symbol)+" "+i(o.positionInfo.token_b.labels&&o.positionInfo.token_b.labels[0]?`(${o.positionInfo.token_b.labels[0]})`:""),1)]),e("div",Xe,i(o.addCommom(o.positionInfo.toPercent,0))+"%",1)])]),_:1},8,["loading"])])])])}const Ze=vo(ke,[["render",Ye],["__scopeId","data-v-c4a61f98"]]),Je=uo({components:{Modal:ee},props:{positionInfo:{type:Object,required:!0},isLoading:{type:Boolean,required:!0}},setup(o,m){const{t:N,locale:q}=co(),k=po(),{copy:_}=k,d=()=>{m.emit("toClaim")},I=mo(),h=b(()=>I),L=b(()=>h.value.tokensObj&&o.positionInfo.token_a.address&&h.value.tokensObj[o.positionInfo.token_a.address]&&h.value.tokensObj[o.positionInfo.token_a.address].logoURI),U=b(()=>h.value.tokensObj&&o.positionInfo.token_b.address&&h.value.tokensObj[o.positionInfo.token_b.address]&&h.value.tokensObj[o.positionInfo.token_b.address].logoURI);return{showNum:z,fromCoinUrl:L,toCoinUrl:U,toClaim:d,t:N,addCommom:P,importIcon:fo,store:k,copy:_}}});const Ve=o=>(Io("data-v-39d55de9"),o=o(),ko(),o),xe=Ve(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),on={class:"claim-container"},en={key:0,class:"pc-claim"},nn=["src"],sn={key:1,class:"pc-claim"},an=["src"];function tn(o,m,N,q,k,_){const d=jo,I=ne("Modal");return p(),ro(I,{visible:!0,class:"claim-fees",centered:"",closable:!0,title:o.$t("modal.claimFees"),width:"400px",footer:null,onCancel:m[0]||(m[0]=h=>o.$emit("onClose"))},{closeIcon:w(()=>[xe]),default:w(()=>[e("div",on,[o.positionInfo&&o.positionInfo.token_a.symbol?(p(),f("div",en,[e("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,nn),e("span",null,i(o.showNum(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals))+" "+i(o.positionInfo.token_a.symbol),1)])):E("",!0),o.positionInfo&&o.positionInfo.token_b.symbol?(p(),f("div",sn,[e("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,an),e("span",null,i(o.showNum(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals))+" "+i(o.positionInfo.token_b.symbol),1)])):E("",!0)]),g(d,{class:"big-btn claim-btn",disabled:o.isLoading||o.addCommom(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals)==0&&o.addCommom(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals)==0||o.positionInfo.poolInfo.is_pause,onClick:o.toClaim},{default:w(()=>[O(i(o.$t("common.claim")),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["title"])}const ln=vo(Je,[["render",tn],["__scopeId","data-v-39d55de9"]]),rn=uo({setup(){const o=u(!1),m=u(!1),N=u(!1),q=u(!0),k=po(),_=b(()=>k),d=mo(),I=u(""),h=u(""),L=u(""),U=u(30),X=u("Estimated APR"),T=u([{time:"24H",num:24},{time:"7D",num:7},{time:"30D",num:30}]),$=u(!0),c=s=>{console.log(s,"====>>>>item",s.num,U.value),U.value=s.num},C=()=>{$.value=!$.value},l=b(()=>d),D=b(()=>{var r,a,y,R;const s=n.value.feeOwedA*((r=l.value.RATES[n.value&&n.value.token_a&&n.value.token_a.address])==null?void 0:r.price),t=n.value.feeOwedB*((a=l.value.RATES[n.value&&n.value.token_b&&n.value.token_b.address])==null?void 0:a.price);return((y=l.value.RATES[n.value&&n.value.token_a&&n.value.token_a.address])==null?void 0:y.price)&&((R=l.value.RATES[n.value&&n.value.token_b&&n.value.token_b.address])==null?void 0:R.price)?s+t:" --"}),n=u(l.value.currentPositionInfo||{}),v=se();function G(){v.push(`/remove-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}&pos=${n.value.pos_object_id}`)}function V(){v.push(`/increase-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}&pos=${n.value.pos_object_id}`)}const qo=()=>{eo(),N.value=!0,setTimeout(()=>{N.value=!1},1e3)},S=b(()=>_.value.chainName?le(_.value.chainName):{}),eo=async()=>{l.value.setCurrentPositionLoading(!0);const s=v.currentRoute.value.query.token||"",t=v.currentRoute.value.query.collect||"",r=v.currentRoute.value.query.address||"",a=v.currentRoute.value.query.pos||"";h.value=r,_.value.chainName==="Aptos"?s&&t&&r&&(I.value=t,L.value=s,l.value.setCurrentPositionInfo(h.value,I.value,L.value,_.value.chainName)):s&&r&&a&&(I.value=t,L.value=s,l.value.setCurrentPositionInfo(r,I.value,L.value,_.value.chainName,a))},Do=b(()=>{var t,r,a;const s=((a=(r=(t=v==null?void 0:v.currentRoute)==null?void 0:t.value)==null?void 0:r.query)==null?void 0:a.address)||"";return s&&l.value.addressLpTokens&&!W(l.value.addressLpTokens)&&l.value.addressLpTokens[s]?l.value.addressLpTokens[s]:null});J(()=>Do.value,(s,t)=>{s&&!W(s)&&s.current_sqrt_price!==(t==null?void 0:t.current_sqrt_price)&&eo()},{immediate:!0});const ho=u(""),go=u(""),bo=u(""),Fo=(s,t)=>s&&t?H(Ie.plus(lo(s),lo(t)),2)+"%":s,_o=s=>{let t=0;return s&&s.forEach(r=>{console.log(r,"===>ele"),t+=lo(String(r))}),String(H(String(t),2))},wo=u(""),yo=u("");J(()=>[_.value.newTopPoolsObj,n.value,U],([s,t])=>{if(!W(s)&&!W(t)){const r=t.poolAddress,a=s[r];ho.value=a&&a.apr_7day,yo.value=_o(a&&a.rewarder_apr),wo.value=Fo(a&&a.apr_7day,a&&_o(a.rewarder_apr)),go.value=a&&H(a.tvl_in_usd,2),bo.value=a&&H(a.vol_in_usd_24h,2)}},{immediate:!0,deep:!0});const Wo=ie(),K=b(()=>Wo),{t:no}=co(),{$notify:$o}=ae(),Ho=async()=>{o.value=!0,m.value=!1,k.setTransactionDesc(no("newAdd.claimWaitingText",{from:P(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${z(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`,and:P(n.value.feeOwedA,n.value.token_a.decimals)==0||P(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and",to:P(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${z(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`})),k.setIsShowWaiting(!0);let s;const t={pool:n.value.poolInfo,position:n.value};try{const r=await S.value.getCollectFeeTransactionPayload(t);if(_.value.chainName==="Aptos")s=await K.value.currentWallet.signAndSubmitTransaction(r);else{const a=await K.value.currentWallet.signAndExecuteTransaction(r);s=S.value.handleTx(a)}if(s){k.setTransactionTxid(s.hash),k.setIsShowWaiting(!1),k.setIsShowSuccess(!0);const a={title:"Claim",desc:"",hash:s.hash,tit:`Claimed Fee: ${n.value.poolInfo.symbol}`,text:`Claim ${P(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${z(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`}  
              ${P(n.value.feeOwedA,n.value.token_a.decimals)==0||P(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and"} ${P(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${z(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`}
              
            `};S.value.showTransitionPending(a);const y=await S.value.watchTransaction(a);console.log("0310##toClaim###transitionStatus####",y),y&&setTimeout(()=>{eo()},1e3)}else k.setIsShowWaiting(!1),k.setIsShowRejected(!0),$o.error({icon:B("svg",{class:{icon:!0},"aria-hidden":!0},[B("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:B("div",{class:"notification-title"},[B("span",{innerHTML:No.global.t("newAdd.claimFailed")},null)]),description:no("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});o.value=!1,console.log("claim####test###",s)}catch(r){console.log("claim###error####",r),o.value=!1,k.setIsShowWaiting(!1),k.setIsShowRejected(!0),$o.error({icon:B("svg",{class:{icon:!0},"aria-hidden":!0},[B("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:B("div",{class:"notification-title"},[B("span",{innerHTML:No.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:no("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},so=u(""),io=u(""),Mo=()=>{so.value=n.value.token_b,io.value=n.value.token_a},Co=async(s=null)=>{const t=s||n.value,r=l.value.addressLpTokens[v.currentRoute.value.query.address];console.log("0309###getRewarder###pools.value.addressLpTokens###",l.value.addressLpTokens),console.log("0309###getRewarder###pool###",r);const a=await S.value.getTickDataByIndex(r.ticks_handle,Number(t.tick_lower_index)),y=await S.value.getTickDataByIndex(r.ticks_handle,Number(t.tick_upper_index));let R={};So.value==="Aptos"?R=await S.value.getPosRewardersAmount({poolAddress:v.currentRoute.value.query.address,positionName:v.currentRoute.value.query.token,tickLowerData:a,tickUpperData:y}):R=await S.value.getPosRewardersAmount({poolAddress:v.currentRoute.value.query.address,positionName:v.currentRoute.value.query.token,tickLowerData:a,tickUpperData:y,pos:v.currentRoute.value.query.pos});const F=[];let j=0;R.forEach((A,Y)=>{if(t.poolInfo[`rewarder_display${Y+1}`]){const Z=l.value.newTokenObj[A.coin_address].decimals,Jo=l.value.newTokenObj[A.coin_address];console.log(A.amount_owed.toString(),"===>element.amount_owed.toString()");const Oo=Number(A.amount_owed.toString())/Math.pow(10,Z),Vo=l.value.RATES[A.coin_address].price,Po=Oo*Vo;j+=Po,F.push({...A,...Jo,amount:H(Oo,Z),amountUSD:H(Po,2)})}}),x.value=F,console.log(F,"====>result722"),ao.value=j,Ao.value=Number(H(j,2))};J(()=>l.value.currentPositionInfo,s=>{s&&(n.value=s,so.value=s==null?void 0:s.token_a,io.value=s==null?void 0:s.token_b,console.log(s,"positionInfo.valuepositionInfo.value"))},{immediate:!0});const zo=b(()=>(console.log(l.value.tokensObj,"===>pools.value.tokensObj"),console.log(n.value.token_a.address,"===>positionInfo.value.token_a.address"),l.value.tokensObj&&n&&n.value.token_a&&n.value.token_a.address&&l.value.tokensObj[n.value.token_a.address]&&l.value.tokensObj[n.value.token_a.address].logoURI)),Go=b(()=>l.value.tokensObj&&n&&n.value.token_b&&n.value.token_b.address&&l.value.tokensObj[n.value.token_b.address]&&l.value.tokensObj[n.value.token_b.address].logoURI),So=b(()=>_.value.chainName),Ko=b(()=>re[So.value]),ao=u(0),x=u([]),Ao=u(0);te(()=>{ao.value=0,x.value=[],Ao.value=0});const{setIsShowSuccess:Qo,setIsShowRejected:To,setIsShowWaiting:to,setTransactionDesc:cs,setTransactionTxid:Xo}=k,oo=u(!1),Yo=async()=>{console.log("0310###toClaimRewards##start"),oo.value=!0;const s=x.value;let t={coinTypeA:n.value.poolInfo.coinTypeA,coinTypeB:n.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:n.value.poolAddress,pos_index:n.value.index,rewarder_nums:s.length};t.coinTypeC=s[0]?s[0].coin_address:"",t.coinTypeD=s[1]?s[1].coin_address:"",t.coinTypeE=s[2]?s[2].coin_address:"",console.log(t,"===>collectRewarderParams");try{const r=await S.value.getCollectRewarderTransactionPayload(t);let a;if(_.value.chainName==="Aptos")a=await K.value.currentWallet.signAndSubmitTransaction(r);else{const y=await K.value.currentWallet.signAndExecuteTransaction(r);a=S.value.handleTx(y)}if(console.log("0310###toClaimRewards##tx###",a),a&&a.hash){Xo(a.hash),to(!1),Qo(!0);const y=s[0].amount+s[0].symbol,R=t.coinTypeD?" and "+s[1].amount+s[1].symbol:"",F=t.coinTypeE?" and "+s[2].amount+s[2].symbol:"",j={title:"Claim",desc:"",hash:a.hash,tit:`Claimed Rewards: ${n.value.poolInfo.symbol}`,text:y+R+F};S.value.showTransitionPending(j);const A=await S.value.watchTransaction(j);console.log("0310###toClaimRewards###transitionStatus###",A),A&&setTimeout(()=>{Co(),S.value.getAccount(K.value.address)},1e3)}else console.log("0310###toClaimRewards###else###"),to(!1),To(!0);oo.value=!1}catch(r){console.log("0310###Claim Error###",r),oo.value=!1,to(!1),To(!0)}};console.log(n,"===>positionInfo");const Ro=u([]);J(()=>[n.value,l.value.addressLpTokens,l.value.newTokenObj,_.value.newTopPoolsObj],([s,t,r,a])=>{if(!W(s)&&!W(t)&&!W(r)){const y=s.address,R=t[y];let F=R.rewarder_infos||[];const j=a[y],A=[];F.forEach((Y,Z)=>{R[`rewarder_display${Z+1}`]&&A.push({...Y,symbol:r[Y.coinAddress].symbol,rewarderApr:j.rewarder_apr[Z],logoUrl:r[Y.coinAddress].logoURI})}),Ro.value=A,Co(s)}},{immediate:!0});const Zo=u();return J(()=>l.value.RATES,s=>{s&&(Zo.value=s)},{immediate:!0}),{rewarderArr:Ro,feeOwed:D,config:Ko,showNum:z,index:_,fromCoinUrl:zo,toCoinUrl:Go,toggle:Mo,fromCoin:so,toCoin:io,apr:ho,liquidityTvl:go,vol24:bo,addCommom:P,decimalFormat:Lo,wallet:K,isLoading:o,toClaim:Ho,pools:l,positionInfo:n,importIcon:fo,router:v,toRemove:G,toIncrease:V,isShowClaim:m,direct:q,refresh:N,clickRefresh:qo,pendingRewarderArr:x,pendingRewarder:ao,toClaimRewards:Yo,rewarderLoading:oo,aprRewardsParameter:U,aprRewardsDateList:T,aprTab:c,reviseValue:C,label:$,aprTitle:X,aprTotal:wo,rewardAprList:yo}}});const Q=o=>(Io("data-v-b97ec9fb"),o=o(),ko(),o),dn={key:0,class:"position-detail-container"},un={class:"position-detail-header"},cn={class:"back-and-refresh"},pn=Q(()=>e("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),mn=[pn],fn={class:"action-position"},vn={class:"coin-pair"},In=Q(()=>e("use",{"xlink:href":"#icon-icon-copy"},null,-1)),kn=[In],hn=["href"],gn=Q(()=>e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon-jump"})],-1)),bn=[gn],_n=["href"],wn=Q(()=>e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon-jump"})],-1)),yn=[wn],$n={class:"acton-btn-box"},Cn=Q(()=>e("svg",{"aria-hidden":"true",class:"action-icon"},[e("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),Sn=Q(()=>e("svg",{"aria-hidden":"true",class:"action-icon"},[e("use",{"xlink:href":"#icon-icon-add"})],-1)),An={class:"position-content"},Tn={class:"pedding-fee pedding-apr"},Rn={class:"pedding-fee"},On={class:"top"},Pn={class:"left"},Nn={class:"bottom"},Ln=["src"],Un=["src"],jn={key:0,class:"pedding-fee"},Bn={class:"top"},En={class:"left"},qn={class:"bottom"},Dn=["src"],Fn={key:1,class:"poolInfo"},Wn={class:"pool-info-title"},Hn={class:"currentPrice"},Mn={key:0,class:"coin"},zn={key:1,class:"coin"},Gn={class:"toggle"},Kn=["src"],Qn=["src"],Xn={key:0},Yn={class:"info-block-container"},Zn={class:"info-block"},Jn={class:"leabl"},Vn={class:"text"},xn={class:"apr-hover-content"},os={class:"info-block"},es={class:"leabl"},ns={class:"text"},ss={class:"info-block"},is={class:"leabl"},as={class:"text"},ts={class:"info-block"},ls={class:"leabl"},rs={class:"text"},ds={class:"loading-global"};function us(o,m,N,q,k,_){const d=xo,I=jo,h=Uo,L=Ze,U=fe,X=ve,T=ln,$=me;return o.positionInfo?(p(),f("div",dn,[e("div",un,[e("div",cn,[g(d),(p(),f("svg",{"aria-hidden":"true",class:M(o.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:m[0]||(m[0]=(...c)=>o.clickRefresh&&o.clickRefresh(...c))},mn,2))]),e("div",fn,[g(h,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[e("div",vn,[O(i(o.positionInfo.tokenName)+" ",1),(p(),f("svg",{class:"icon","aria-hidden":"true",onClick:m[1]||(m[1]=c=>o.index.copy(o.positionInfo.nftHash))},kn)),o.index&&o.index.chainName==="Aptos"?(p(),f("a",{key:0,href:`${o.config.explorerUrl}/token/${o.positionInfo.nftHash}/0?network=${o.config.network}`,target:"_blank"},bn,8,hn)):(p(),f("a",{key:1,href:`${o.config.explorerUrl}/object/${o.positionInfo.nftHash}?network=${o.config.network}`,target:"_blank"},yn,8,_n))]),e("div",$n,[g(I,{class:M(["remove-liquidity action-btn",o.positionInfo.poolInfo.is_pause?"text-default":""]),disabled:o.positionInfo.poolInfo.is_pause,onClick:o.toRemove},{default:w(()=>[Cn,O(" "+i(o.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),g(I,{class:"increase-liquidity action-btn",disabled:o.positionInfo.poolInfo.is_pause,onClick:o.toIncrease},{default:w(()=>[Sn,O(" "+i(o.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]),_:1},8,["loading"])])]),e("div",An,[g(L,{"position-info":o.positionInfo},null,8,["position-info"])]),e("div",Tn,[(p(),ro(U,{key:0,"apr-title":o.aprTitle,"apr-rewards-date-list":o.aprRewardsDateList,"apr-rewards-parameter":o.aprRewardsParameter,"name-tab":"position","from-coin":o.fromCoin,"to-coin":o.toCoin,"pool-info":o.positionInfo.poolInfo,"min-price":o.positionInfo.minPrice,"max-price":o.positionInfo.maxPrice,onAprTab:o.aprTab},null,8,["apr-title","apr-rewards-date-list","apr-rewards-parameter","from-coin","to-coin","pool-info","min-price","max-price","onAprTab"]))]),e("div",Rn,[e("div",On,[e("div",Pn,[e("span",null,i(o.$t("newAdd.pendingFees")),1),e("p",null," $"+i(o.pools.currentPositionLoading||o.feeOwed=="--"?"--":Number(o.feeOwed)==0?0:Number(o.feeOwed)<.01?"<0.01":o.addCommom(o.feeOwed,2)),1)]),g(I,{class:"increase-liquidity action-btn",disabled:o.isLoading||!o.wallet.connected||!(Number(o.positionInfo&&o.positionInfo.feeOwedA)||Number(o.positionInfo&&o.positionInfo.feeOwedB))||o.positionInfo.poolInfo.is_pause,onClick:m[2]||(m[2]=c=>o.isShowClaim=!0)},{default:w(()=>[O(i(o.$t("common.claim")),1)]),_:1},8,["disabled"])]),g(h,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[e("div",Nn,[e("div",null,[e("img",{src:o.fromCoinUrl},null,8,Ln),e("p",null,i(o.showNum(o.positionInfo.feeOwedA,o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.decimals)),1),e("span",null,i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)]),e("div",null,[e("img",{src:o.toCoinUrl},null,8,Un),e("p",null,i(o.showNum(o.positionInfo.feeOwedB,o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.decimals)),1),e("span",null,i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])])]),_:1},8,["loading"])]),o.positionInfo&&o.positionInfo.poolInfo&&o.positionInfo.poolInfo.rewarder_infos&&o.positionInfo.poolInfo.rewarder_infos.length>0&&o.positionInfo.poolInfo.is_display_rewarder&&o.pendingRewarderArr&&o.pendingRewarderArr.length>0?(p(),f("div",jn,[e("div",Bn,[e("div",En,[e("span",null,i(o.$t("newAdd.pendingRewards")),1),e("p",null," $"+i(o.pendingRewarder=="--"?"--":Number(o.pendingRewarder)==0?0:Number(o.pendingRewarder)<.01?"<0.01":o.addCommom(o.pendingRewarder,2)),1)]),g(I,{class:"increase-liquidity action-btn",disabled:o.rewarderLoading||!o.wallet.connected||o.pendingRewarder<=0||o.positionInfo.poolInfo.is_pause,loading:o.rewarderLoading,onClick:o.toClaimRewards},{default:w(()=>[O(i(o.$t("common.claim")),1)]),_:1},8,["disabled","loading","onClick"])]),g(h,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[e("div",qn,[(p(!0),f(ce,null,pe(o.pendingRewarderArr,c=>(p(),f("div",{key:c,class:M(Number(c==null?void 0:c.amount)==0?"reward-none":"")},[e("img",{src:c.logoURI,alt:""},null,8,Dn),e("p",null,i(Number(c.amount)),1),e("span",null,i(c.symbol),1)],2))),128))])]),_:1},8,["loading"])])):E("",!0),o.poolInfo?(p(),f("div",Fn,[e("div",Wn,i(o.$t("newAdd.poolInfo")),1),e("div",Hn,[g(h,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>{var c,C,l,D,n,v;return[o.direct?(p(),f("div",Mn,[e("span",null,i(o.$t("common.currentPrice")),1),O(" "+i(o.addCommom(o.decimalFormat(o.positionInfo.currentPrice,6),6))+" "+i((c=o.toCoin)==null?void 0:c.symbol)+" per "+i((C=o.fromCoin)==null?void 0:C.symbol),1)])):(p(),f("div",zn,[e("span",null,i(o.$t("common.currentPrice")),1),O(" "+i(o.addCommom(o.decimalFormat(1/o.positionInfo.currentPrice,6),6))+" "+i((l=o.fromCoin)==null?void 0:l.symbol)+" per "+i((D=o.toCoin)==null?void 0:D.symbol),1)])),e("div",Gn,[e("div",{class:M(o.direct?"item active-item":"item"),onClick:m[3]||(m[3]=G=>o.direct=!0)},[e("img",{src:o.fromCoinUrl,alt:""},null,8,Kn),O(" "+i(o.positionInfo&&o.positionInfo.token_a&&((n=o.positionInfo.token_a)==null?void 0:n.symbol)),1)],2),e("div",{class:M(o.direct?"item ":"item active-item"),onClick:m[4]||(m[4]=G=>o.direct=!1)},[e("img",{src:o.toCoinUrl,alt:""},null,8,Qn),O(" "+i(o.positionInfo&&o.positionInfo.token_b&&((v=o.positionInfo.token_b)==null?void 0:v.symbol)),1)],2)])]}),_:1},8,["loading"])]),g(h,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[o.aprTotal&&o.liquidityTvl&&o.vol24?(p(),f("div",Xn,[e("div",Yn,[e("div",Zn,[e("div",Jn,i(o.$t("common.apr")),1),e("div",Vn,[O(i(o.aprTotal?o.addCommom(o.aprTotal.substring(0,o.aprTotal.length-1),2):0)+"% ",1),e("div",xn,[g(X,{class:M(o.isShow?"showHover apr-hover-con":"noHover apr-hover-con"),"l-item":{apr:o.apr,rewarder_apr:o.rewardAprList,aprTotal:o.aprTotal,is_display_rewarder:o.positionInfo.poolInfo.is_display_rewarder},"rewarder-info":o.rewarderArr},null,8,["class","l-item","rewarder-info"])])])]),e("div",os,[e("div",es,i(o.$t("common.liquidity")),1),e("div",ns,"$"+i(o.addCommom(o.liquidityTvl,2)),1)]),e("div",ss,[e("div",is,i(o.$t("common.volume24h")),1),e("div",as,"$"+i(o.addCommom(o.vol24,2)),1)]),e("div",ts,[e("div",ls,i(o.$t("newAdd.tickSpacing")),1),e("div",rs,i(o.positionInfo.tickSpacing),1)])])])):E("",!0)]),_:1},8,["loading"])])):E("",!0),o.isShowClaim?(p(),ro(T,{key:2,"is-loading":o.isLoading,"position-info":o.positionInfo,onOnClose:m[5]||(m[5]=c=>o.isShowClaim=!1),onToClaim:o.toClaim},null,8,["is-loading","position-info","onToClaim"])):E("",!0),de(e("div",ds,[g($)],512),[[ue,o.pools.currentPositionLoading]])])):E("",!0)}const _s=vo(rn,[["render",us],["__scopeId","data-v-b97ec9fb"]]);export{_s as default};
