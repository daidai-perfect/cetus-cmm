import{_ as q}from"./refresh-icon.4eb63a6f.js";import{_ as j,a as _}from"./coin-select.428378f2.js";import{a as x,_ as oo}from"./swap-setting.7868fc9b.js";import{k as T,f7 as no,Y as io,o as t,c as C,F as S,m as n,t as i,C as v,l as d,q as I,E as h,K as Z,s as Q,v as W,f8 as eo,r as y,b as so,i as F,e as to,w as P,x as ao,z as V,X as lo,f9 as L,p as u,fa as ro,U as mo,H as co}from"./entry.12ef1f17.js";import"./img-no-Positions_2x.e41c0467.js";const X=o=>(Q("data-v-6addc3a9"),o=o(),W(),o),uo=X(()=>n("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),fo={class:"swap-confirm-container"},po={class:"card-content"},Co={class:"top"},ho={class:"coin"},vo=["src"],go=X(()=>n("div",{class:"svg-box"},[n("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-swap2"})])],-1)),Ao={class:"coin"},bo=["src"],wo={class:"bottom"},yo={class:"induction"},So={class:"item"},ko={class:"induction-text"},Io={class:"induction-value induction-value-change"},No={key:0},Bo={key:1},$o=X(()=>n("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),Eo=[$o],Ro={class:"item"},Fo={class:"induction-text"},Do={class:"induction-value"},Mo={class:"item"},Oo={class:"induction-text"},Po={class:"induction-value"},To={class:"item"},Qo={class:"induction-text"},Wo={class:"item"},Xo={class:"induction-text"},Yo={class:"induction-value"};function Uo(o,e,r,a,g,k){const f=Z,A=io("Modal");return t(),C(A,{width:"440px",visible:!0,footer:null,title:o.$t("modal.swapConfirmTitle"),class:"swap-confirm-modal",onCancel:e[2]||(e[2]=p=>o.$emit("on-close"))},{closeIcon:S(()=>[uo]),default:S(()=>[n("div",fo,[n("div",po,[n("div",Co,[n("div",ho,[n("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.fromCoin.symbol.toLowerCase()}.png`)},null,8,vo),n("p",null,i(o.fromCoinAmount),1),v(" \xA0\xA0 "),n("p",null,i(o.fromCoin.symbol),1)]),go,n("div",Ao,[n("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.toCoin.symbol.toLowerCase()}.png`)},null,8,bo),n("p",null,i(o.toCoinAmount),1),v(" \xA0\xA0 "),n("p",null,i(o.toCoin.symbol),1)])]),n("div",wo,[n("div",yo,[n("div",So,[n("div",ko,i(o.$t("common.rate")),1),n("div",Io,[o.rateChange?(t(),d("span",Bo," 1 "+i(o.toCoin.symbol)+" \u2248 "+i(o.fixD(Number(o.fromCoinAmount)/Number(o.toCoinAmount),o.toCoin.decimals))+" "+i(o.fromCoin.symbol),1)):(t(),d("span",No," 1 "+i(o.fromCoin.symbol)+" \u2248 "+i(o.fixD(Number(o.toCoinAmount)/Number(o.fromCoinAmount),o.toCoin.decimals))+" "+i(o.toCoin.symbol),1)),(t(),d("svg",{class:"icon-change","aria-hidden":"true",onClick:e[0]||(e[0]=p=>o.rateChange=!o.rateChange)},Eo))])]),n("div",Ro,[n("div",Fo,i(o.$t("modal.slippageTolerance")),1),n("div",Do,i(o.slippage)+"%",1)]),n("div",Mo,[n("div",Oo,i(o.fixedFromCoin?o.$t("common.minimumReceived"):o.$t("common.maximumSold")),1),n("div",Po,i(o.fixedFromCoin?o.fixD(o.toCoinAmount-Number(o.toCoinAmount)*Number(o.slippage)/100,o.toCoin.decimals):o.fixD(Number(o.fromCoinAmount)*Number(o.slippage)/100+Number(o.fromCoinAmount),o.fromCoin.decimals))+" "+i(o.fixedFromCoin?o.toCoin.symbol:o.fromCoin.symbol),1)]),n("div",To,[n("div",Qo,i(o.$t("common.priceImpact")),1),n("div",{class:I(["induction-value",o.impact<1?"impact-s":o.impact<10&&o.impact>1?"impact-w":"impact-e"])},i(o.impact<.01?"<0.01":o.impact>100?"100":o.impact)+"% ",3)]),n("div",Wo,[n("div",Xo,i(o.$t("common.fee")),1),n("div",Yo,i(o.decimalFormat(o.fromCoinAmount*o.fee/100,o.fromCoin.decimals))+" "+i(o.fromCoin.symbol)+" ("+i(o.fee)+"%) ",1)])])])])]),h(f,{class:"big-btn swap-confirm-btn",onClick:e[1]||(e[1]=p=>o.clickNextBtn())},{default:S(()=>[v(i(o.$t("button.confirmSwap")),1)]),_:1})]),_:1},8,["title"])}const zo=T(no,[["render",Uo],["__scopeId","data-v-6addc3a9"]]);async function Ko(o){const{prices:e}=await $fetch(`https://api.coingecko.com/api/v3/coins/${o}/market_chart?vs_currency=usd&id=${o}&days=1&interval=hourly`,{headers:{Connection:"keep-alive",Accept:"*/*"}});return e}const Vo={props:{coin:{type:Object,default:()=>({})},refresh:{type:Boolean,default:!1},id:{type:String,default:""}},setup(o,e){const{$echarts:r}=eo();let a=null,g;const k=y(!0),f=(m,c,w)=>{g={xAxis:{type:"category",boundaryGap:!1,show:!1,data:c},yAxis:{type:"value",show:!1,min:function(s){return s.min-s.min*.1},max:function(s){return s.max+s.max*.1}},grid:{top:1,right:1,bottom:1,left:1},tooltip:{trigger:"axis",borderWidth:0,padding:0,backgroundColor:"transparent",axisPointer:{lineStyle:{color:"#68FFD8"}},formatter:function(s){return`<div class="chart-tip">
              <div>${s&&s[0]&&s[0].name}</div>
              <div>$${V(s&&s[0]&&s[0].value,4)}</div>
            </chart-tip>`}},color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#0C4535"},{offset:1,color:"#151817"}]},series:[{data:m,type:"line",showSymbol:!1,areaStyle:{},lineStyle:{color:"#68FFD8",width:2,type:"solid"}}]},g&&a.clear(),g&&a.setOption(g,!0),a.resize(),k.value=!1},A=so(),p=F(()=>A),N=y(""),B=y(""),$=async m=>{var z,K;const c=[],w=[],s=await Ko(m);N.value=s&&s.length>1&&(s[s.length-1][1]-s[0][1])/s[0][1]*100,B.value=s&&s.length>1&&s[s.length-1][1],s.forEach(O=>{c.push(O[1]);const J=L(O[0],"MD"),G=L(O[0],"HM");w.push(J+" "+G)});let H=document.getElementById(`main${(z=o.coin)==null?void 0:z.name}`);a=r.init(H),f(c,w,(K=o.coin)==null?void 0:K.name)},E=to(),D=F(()=>E),M=F(()=>D.value.chainName),R=F(()=>lo[M.value]);P(()=>o.id,(m,c)=>{console.log(m,c,"===>oldValue"),console.log(!k.value,"!isFirst.value"),m&&setTimeout(()=>{$(m)},1e3)},{immediate:!0});const l=y(""),Y=y(""),U=y("");return P(()=>[p.value.tokensObj,o.coin],([m,c])=>{var w,s;m&&c&&m[c.address]&&(console.log(m[c.address],"===>newValue[coin.address]"),Y.value=((w=m[c.address])==null?void 0:w.labels)&&((s=m[c.address])==null?void 0:s.labels[0]),l.value=m[c.address].name,U.value=m[c.address].symbol)},{immediate:!0,deep:!0}),P(()=>o.refresh,m=>{m&&$(o.id)}),{store:E,importIcon:ao,fixD:V,config:R,price_rate_24h:N,nowPrice:B,coinName:l,coinLabels:Y,coinSymbol:U}}},Lo=o=>(Q("data-v-a112913d"),o=o(),W(),o),Zo={class:"token-info"},Ho={class:"token-info-padding"},Jo={class:"token-info-header"},Go={class:"left"},qo=["src"],jo={class:"name"},_o={class:"desc"},xo={class:"right"},on={class:"price"},nn={class:"token-info-footer"},en={class:"left"},sn={class:"address"},tn={class:"pc-address"},an={class:"h5-address"},ln=Lo(()=>n("use",{"xlink:href":"#icon-icon-copy"},null,-1)),rn=[ln],dn={class:"right"},mn=["id"];function cn(o,e,r,a,g,k){var f;return t(),d("div",Zo,[n("div",Ho,[n("div",Jo,[n("div",Go,[n("img",{src:r.coin.logoURI||a.importIcon(`/image/coins/${r.coin.symbol.toLowerCase()}.png`)},null,8,qo),n("div",null,[n("div",jo,i(a.coinSymbol),1),n("div",_o,[n("span",null,i(a.coinName)+" "+i(a.coinLabels?`(${a.coinLabels})`:""),1)])])]),n("div",xo,[n("div",on,"$"+i(a.fixD(a.nowPrice,2)),1),a.price_rate_24h?(t(),d("div",{key:0,class:I(a.price_rate_24h>0?"increase up":a.price_rate_24h<0?"increase down":"increase up")},i(a.price_rate_24h>0?`+ ${a.fixD(a.price_rate_24h,2)}`:a.price_rate_24h<0?+`${a.fixD(a.price_rate_24h,2)}`:`+${a.fixD(a.price_rate_24h,2)}`)+"% ",3)):u("",!0)])]),n("div",nn,[n("div",en,[n("div",sn,[n("span",tn,i(r.coin&&r.coin.address.substr(0,8))+" ... "+i(r.coin&&r.coin.address.substr(r.coin.address.length-8,8)),1),n("span",an,i(r.coin&&r.coin.address.substr(0,4))+" ... "+i(r.coin&&r.coin.address.substr(r.coin.address.length-4,4)),1),(t(),d("svg",{class:"icon","aria-hidden":"true",onClick:e[0]||(e[0]=A=>a.store.copy(r.coin&&r.coin.address))},rn))])]),n("div",dn,[n("div",{id:`main${(f=r.coin)==null?void 0:f.name}`,class:"main"},null,8,mn)])])])])}const un=T(Vo,[["render",cn],["__scopeId","data-v-a112913d"]]),fn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAGCBAMAAAAmlj/IAAAAFVBMVEVHcEwzMzMzMzMyMjI0NDQvLy8zMzOcydXuAAAABnRSTlMAy9hRbBs90ObtAAAAWklEQVRIx2NgYBFLdGBgYBVLS0sMYGBMMg1WE2BwU2VgCEphEDNgYGBOZEgLAMqnMaQxAEEaTBCqBKoBqh1qGAMDWwLDKDVKjVKj1Cg1So1So9QoNdwo6rccATYwqRNK4tkrAAAAAElFTkSuQmCC",pn="data:image/png;base64,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",b=o=>(Q("data-v-a5b0087d"),o=o(),W(),o),Cn={class:"swap-container"},hn={class:"title"},vn={class:"left"},gn={class:"right title-right"},An=b(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),bn={class:"swap-card"},wn={class:"card-container"},yn={class:"card-item"},Sn={class:"card-item"},kn=b(()=>n("use",{"xlink:href":"#icon-icon-swap1"},null,-1)),In=[kn],Nn={key:0,class:"induction"},Bn={key:0,class:"exchange-rate-btn"},$n={key:0},En=["src"],Rn={key:0},Fn=["src"],Dn={key:1},Mn={key:0},On=["src"],Pn=["src"],Tn=b(()=>n("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),Qn=[Tn],Wn={class:"item"},Xn={class:"induction-text"},Yn={key:1},Un={class:"item"},zn={class:"induction-text"},Kn={class:"induction-value"},Vn={class:"item"},Ln={class:"induction-text"},Zn={class:"induction-value"},Hn={key:0,class:"icon","aria-hidden":"true"},Jn=b(()=>n("use",{"xlink:href":"#icon-icon-swap"},null,-1)),Gn=[Jn],qn={key:3,class:"token-info-container"},jn={class:"token-info-title"},_n=b(()=>n("span",{class:"coingecko"},"Ref. CoinGecko",-1)),xn=b(()=>n("img",{src:pn,alt:""},null,-1)),oi=b(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-information"})],-1));function ni(o,e,r,a,g,k){const f=q,A=j,p=mo,N=Z,B=x,$=_,E=oo,D=zo,M=co,R=un;return t(),d("div",Cn,[n("div",hn,[n("div",vn,i(o.$t("menu.swap")),1),n("div",gn,[n("div",{class:"slippage-icon",onClick:e[0]||(e[0]=l=>o.isShowSwapSetting=!0)},[An,n("span",null,i(o.slippage)+"%",1)]),h(f,{loading:o.refresh,"auto-refresh-time":o.autoRefreshTime,countdown:o.countdown,onClickRefresh:o.clickRefresh},null,8,["loading","auto-refresh-time","countdown","onClickRefresh"])])]),n("div",bn,[n("div",wn,[n("div",yn,[h(A,{modelValue:o.fromCoinAmount,"onUpdate:modelValue":e[1]||(e[1]=l=>o.fromCoinAmount=l),"input-value":o.fromCoinAmount,"coin-symbol":o.fromCoin?o.fromCoin.symbol:null,"coin-name":o.fromCoin?o.fromCoin.name:null,balance:o.fromCoinBlance,"coin-icon":o.fromCoin?o.fromCoin.logo_url:"",address:o.fromCoin?o.fromCoin.address:"","swap-direction":"From",onOnMax:e[2]||(e[2]=l=>o.maxBtnSelect("fromCoin")),onOnHalf:e[3]||(e[3]=l=>o.halfBtnSelect("fromCoin")),onOnInput:e[4]||(e[4]=l=>{o.fromCoinAmount=l,o.fixedFromCoin=!0}),onOnSelect:e[5]||(e[5]=l=>o.openCoinSelect("fromCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),n("div",Sn,[h(A,{modelValue:o.toCoinAmount,"onUpdate:modelValue":e[6]||(e[6]=l=>o.toCoinAmount=l),"input-value":o.toCoinAmount,havemax:!1,"coin-symbol":o.toCoin?o.toCoin.symbol:null,"coin-name":o.toCoin?o.toCoin.name:null,balance:o.toCoinBlance,"swap-direction":"To","coin-icon":o.toCoin?o.toCoin.logo_url:"",address:o.toCoin?o.toCoin.address:"",onOnInput:e[7]||(e[7]=l=>{o.toCoinAmount=l,o.fixedFromCoin=!1}),onOnSelect:e[8]||(e[8]=l=>o.openCoinSelect("toCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),n("img",{class:I(o.change?"gang animationex":"gang"),src:fn,alt:""},null,2),n("div",{class:"exchange",onClick:e[9]||(e[9]=l=>o.clickExchange())},[(t(),d("svg",{class:I(o.change?"icon animationex":"icon"),"aria-hidden":"true"},In,2))])]),o.poolInfo&&o.fromCoinAmount&&o.toCoinAmount&&o.fromCoinAmount!=="0"&&o.toCoinAmount!=="0"&&o.swapBtnText!==o.$t("button.poolNotFound")?(t(),d("div",Nn,[o.fromCoinAmount&&o.toCoinAmount?(t(),d("div",Bn,[o.rateChange?Number(o.fromCoinAmount)&&Number(o.toCoinAmount)&&o.rateChange?(t(),d("span",Dn,[Number(o.fromCoinAmount)&&Number(o.toCoinAmount)?(t(),d("span",Mn,[n("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.toCoin.symbol.toLowerCase()}.png`)},null,8,On),v(" 1 "+i(o.toCoin.symbol)+" \u2248 ",1),n("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.fromCoin.symbol.toLowerCase()}.png`)},null,8,Pn),v(" "+i(o.fixD(Number(o.fromCoinAmount)/Number(o.toCoinAmount),o.fromCoin.decimals))+" "+i(o.fromCoin.symbol),1)])):(t(),C(p,{key:1,indicator:o.indicator},null,8,["indicator"]))])):u("",!0):(t(),d("span",$n,[n("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.fromCoin.symbol.toLowerCase()}.png`)},null,8,En),v(" 1 "+i(o.fromCoin.symbol)+" \u2248 ",1),Number(o.fromCoinAmount)&&Number(o.toCoinAmount)?(t(),d("span",Rn,[n("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.toCoin.symbol.toLowerCase()}.png`)},null,8,Fn),v(" "+i(o.fixD(Number(o.toCoinAmount)/Number(o.fromCoinAmount),o.toCoin.decimals))+" "+i(o.toCoin.symbol),1)])):(t(),C(p,{key:1,indicator:o.indicator},null,8,["indicator"]))])),(t(),d("svg",{class:"icon-change","aria-hidden":"true",onClick:e[10]||(e[10]=l=>o.rateChange=!o.rateChange)},Qn))])):u("",!0),n("div",Wn,[n("div",Xn,i(o.$t("common.priceImpact")),1),o.swaping?(t(),d("div",Yn,[h(p,{indicator:o.indicator},null,8,["indicator"])])):(t(),d("div",{key:0,class:I(["induction-value",o.impact<1?"impact-s":o.impact<10&&o.impact>1?"impact-w":"impact-e"])},i(o.impact<.01?"<0.01":o.impact>100?"100":o.impact)+"% ",3))]),n("div",Un,[n("div",zn,i(o.fixedFromCoin?o.$t("common.minimumReceived"):o.$t("common.maximumSold")),1),n("div",Kn,i(o.fixedFromCoin?o.fixD(Number(o.toCoinAmount)-Number(o.toCoinAmount)*Number(o.slippage)/100,o.toCoin.decimals):o.fixD(Number(o.fromCoinAmount)*Number(o.slippage)/100+Number(o.fromCoinAmount),o.fromCoin.decimals))+" "+i(o.fixedFromCoin?o.toCoin.symbol:o.fromCoin.symbol),1)]),n("div",Vn,[n("div",Ln,i(o.$t("common.fee")),1),n("div",Zn,i(o.formatFee)+" "+i(o.fromCoin.symbol)+" ("+i(o.poolInfo.fee*100)+"%) ",1)])])):u("",!0)]),h(N,{disabled:o.wallet.connected?o.swaping||!o.fromCoin||!o.toCoin||!Number(o.fromCoinAmount)||!Number(o.toCoinAmount)||Number(o.fromCoinAmount)>Number(o.fromCoinBlance)||o.swapBtnText==o.$t("button.poolNotFound")||o.swapBtnText!==o.$t("button.swap")||o.poolInfo.is_pause:!1,class:"big-btn",loading:o.swaping||!o.poolInfo,onClick:e[11]||(e[11]=l=>o.wallet.connected?o.isSwapConfirmMpdal=!0:o.wallet.setIsShowWalletModal(!0))},{default:S(()=>[o.wallet.connected?(t(),d("svg",Hn,Gn)):u("",!0),n("span",null,i(o.wallet.connected?o.swapBtnText:o.$t("button.connectWallet")),1)]),_:1},8,["disabled","loading"]),h(B),o.showCoinSelect?(t(),C($,{key:0,"existing-coins":o.existingCoins,"last-select-coin":o.lastSelectCoin,onOnSelect:o.onCoinSelect,onOnClose:e[12]||(e[12]=l=>o.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","onOnSelect"])):u("",!0),o.isShowSwapSetting?(t(),C(E,{key:1,onOnClose:e[13]||(e[13]=l=>o.isShowSwapSetting=!1)})):u("",!0),o.isSwapConfirmMpdal?(t(),C(D,{key:2,"fixed-from-coin":o.fixedFromCoin,"from-coin":o.fromCoin,"to-coin":o.toCoin,"from-coin-amount":o.fromCoinAmount,"to-coin-amount":o.toCoinAmount,impact:o.impact,fee:o.poolInfo.fee,onOnClose:e[14]||(e[14]=l=>o.isSwapConfirmMpdal=!1),onToSwap:o.toSwap},null,8,["fixed-from-coin","from-coin","to-coin","from-coin-amount","to-coin-amount","impact","fee","onToSwap"])):u("",!0),o.chainName&&(o.formCoinId||o.toCoinId)?(t(),d("div",qn,[n("div",jn,[_n,xn,h(M,{placement:"top","arrow-point-at-center":""},{title:S(()=>[v(" The following price is only an external reference from CoinGecko, which may not reflect actual data on Cetus. ")]),default:S(()=>[oi]),_:1})]),o.fromCoin&&o.formCoinId?(t(),C(R,{key:0,id:o.formCoinId,coin:o.fromCoin,refresh:o.refresh},null,8,["id","coin","refresh"])):u("",!0),o.toCoin&&o.toCoinId?(t(),C(R,{key:1,id:o.toCoinId,coin:o.toCoin,refresh:o.refresh},null,8,["id","coin","refresh"])):u("",!0)])):u("",!0)])}const li=T(ro,[["render",ni],["__scopeId","data-v-a5b0087d"]]);export{li as default};
