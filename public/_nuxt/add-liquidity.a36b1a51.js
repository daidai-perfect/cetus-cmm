import{_ as B}from"./coin-pair-name.04a357ce.js";import{_ as w}from"./status-block.0ca976a3.js";import{a as A,k as _,o as i,l as s,m as n,t as e,q as b,V as P,Z as q,r,f as N,J as m,w as g,ad as E,Q as T,x as K,z as R,L as z,Y as D,c as M,F as h,E as v,C as W,K as U,s as V,v as Z}from"./entry.12ef1f17.js";import{p as F}from"./precision.ce0280e5.js";const Do="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAngAAABUBAMAAADjSFdtAAAAMFBMVEVHcEwlW04lW04mW04lWUwmW04mXE4lW04mW04SHx4gPzclWk1o/9gVKyhSyKs8jnpksmsVAAAACXRSTlMA6xZ3ykwulK7bAIv/AAAEOUlEQVR42u2dTU8TURSGh7YUEjeISkxm04pREzZoJC66qR8Ji9lgiNGkm2LcsSGKKzZo4qq/YCyFtTQmjC1YevEHEEf2FdE1CX+AhYlt7xk6t3PvnSld2JD33QxluumTOee899yPMQzoAio2v/zQdK7OzqTAold0zy1Gct4CX08aLjBnduZlKnZrftlktTkQia5Jkz3Oex+S95lzD0yi6rZZFWhNWuw1qERT3Kzlxf8kC840uETKd1Y3uxa9CsBE0UpVUh+Gm3F7A2zCdJMpIvQVuwY6IUFrTshvJM3LDJZFr1xNYYlHakYmCz7aSsuWFHeGdoyhLwCkU0ZZVRPbxtQWAOkyni+tJR+0GgNvPNsSd55ZqyCky3idB++FSX2BD9QqsJiTByG1YqaX8WJ3GdtsNEqlTcau8BISf4Ixmk6JWodd3SaVPXpNfohbzeBinP54yj7bZ/p55o4TX8FIXS4oqY2wb7ZPh55/ScImq6O24tWGui2oXKXAzYyBksrk0QhigTVEeCU2IeKFgrV2jkaxu3aXiuRShp0UOKlGr22l63ZAZSolhSVwkiq9w6/WbhBescrvLY6DkzzlrVKpJWB/Tlz34C99oII7iqQnl8nzWo5sStFtix7Dw22eDx1wkro8ikzzE6+wewdNiocn3zm8j1QqLDg9mSgi4xS1Jfe0ddlwybZQdz6DEZpMU7zVmaao3Tjg15NTittx/7cgUTlukTM8au11ite9Y4pb/mAmtkFK1hXgcWlSmK794Ndf+xTGvFTE0RuQycrz5gB5k7V98WrzpgDKrXRwxqmM1lXwyrxUmBigKZ3K0K4KXnEMXkUlSmaLang7/tQICW2BilBsg/Co3GbQGgiKPMiKGh5/NHNwyc2y+e56XoDHo9JqqOCVeFJczIKdscCYsKSH1lKYani8HE+NgZ1ReH+nJoNnq+DZgwcvsfmfxFIxwe9e2mpfmBoe839vAH5BdlDhuYIGFd6Ahq0MHnJeaMEgeP4JDBcFI5pVKTSU8GBVIppkCTzPJANe2PCM8/p97IeH4VnExoDrtykuGgM9taRk8NCSUkpshkrgoRmqkdCGl8CjNnwVpCQSJoA4r3VfwcAEkE7C1GPQqmDqUSdh0jsID5PeOgnLLYLwsNwigleJtRf6BBoDWOijl3+JWQAelpjp1b24URAWN+qFZbX9tAawoLuPARq2EvST9LhNxiaW8yjC9qksKKmcHjbu9dMbCNkymkZXQBO3Z5OR8s3KBUStrt56TqS9Tf7Ito862+Sb0Yxaq5PmgIZWuUA7Sl8yOhWh62gQ8SYks3qV892DDN1xSE3/Mg0+IVlPdRBXrICMF5r1VEfALTjIeKFSHD4YZ4/AJsIwQ3rspYXBRaTAlR64WkXQRqu4OOq3DwUPmXZwgFlk4XjzvvIeDtbvQ75XOlTxSofe8eFlIhda/wAfMfQ7ksgW2wAAAABJRU5ErkJggg==",Mo=""+new URL("img-lock_2x.693ff210.png",import.meta.url).href,J=A({props:{direct:{type:Boolean,default:!0},formCoinSymbol:{type:String,default:""},toCoinSymbol:{type:String,default:""}}});const Q={class:"coin-tab"};function X(o,t,k,S,u,C){return i(),s("div",Q,[n("div",{class:b(o.direct?"active":""),onClick:t[0]||(t[0]=l=>o.$emit("changeDirect",!0))},e(o.formCoinSymbol),3),n("div",{class:b(o.direct?"":"active"),onClick:t[1]||(t[1]=l=>o.$emit("changeDirect",!1))},e(o.toCoinSymbol),3)])}const $=_(J,[["render",X],["__scopeId","data-v-6ad39d39"]]),Y=A({components:{Modal:P},props:{isIncrease:{type:Boolean,required:!1},fromCoin:{type:Object,required:!0},toCoin:{type:Object,required:!0},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},currentPriceReverse:{type:String,default:""},currentPrice:{type:String,default:""},poolInfo:{type:Object,required:!0}},setup(o,t){const{t:k,locale:S}=q(),u=r(!0);function C(a){u.value=a}const l=r(""),d=r(""),p=r(""),f=r(""),y=r(""),c=r("");return N(()=>{l.value=String(m(String(o.minPrice),6)),d.value=String(m(String(o.maxPrice),6)),p.value=o.currentPrice,f.value=o.currentPriceReverse,console.log(p,"===>currentPrice")}),g(u,a=>{a?(l.value=String(m(String(o.minPrice),6)),d.value=String(m(String(o.maxPrice),6))):(l.value=String(m(String(1/Number(o.maxPrice)),6)),d.value=String(m(String(1/Number(o.minPrice)),6))),p.value=o.currentPrice,f.value=o.currentPriceReverse}),g(()=>o.minPrice,a=>{a&&(y.value=a.toString())},{immediate:!0}),g(()=>o.maxPrice,a=>{a&&(c.value=a.toString()),console.log(c.value,"===>mockMax.value")},{immediate:!0}),{showNum:E,precision:F,addCommom:T,t:k,clickAddBtn:async()=>{t.emit("toAdd")},min:l,max:d,importIcon:K,fixD:R,decimalFormat:z,direct:u,changeDirect:C,mockMin:y,mockMax:c}}});const I=o=>(V("data-v-d5fd7f03"),o=o(),Z(),o),O=I(()=>n("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),G={class:"add-liquidity-container"},j={class:"top"},L={class:"induction info"},H={class:"item"},x={class:"induction-text"},oo={key:0,class:"induction-value"},eo={key:1,class:"induction-value"},no={class:"item"},io={class:"induction-text"},to={key:0,class:"induction-value"},so={key:1,class:"induction-value"},ao={class:"item"},lo={class:"induction-text"},ro={class:"induction-value"},co={class:"range-box"},mo={class:"range-title"},uo={class:"current-price"},po={key:0},fo={key:1},yo={class:"price-range-block"},vo={class:"price-item"},ko={class:"title"},Co={class:"price"},go={key:0,class:"text"},ho={key:1,class:"text"},So={class:"price-item"},bo={class:"title"},Ao={class:"price"},_o={key:0,class:"text"},Io={key:1,class:"text"},Bo={class:"text-block"},wo={class:"note"},Po={class:"note"},qo=I(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-add"})],-1));function No(o,t,k,S,u,C){const l=B,d=w,p=$,f=U,y=D("Modal");return i(),M(y,{width:"440px",visible:!0,footer:null,title:o.$t("button.addLiquidity"),class:"add-liquidity-modal",onCancel:t[1]||(t[1]=c=>o.$emit("onClose"))},{closeIcon:h(()=>[O]),default:h(()=>[n("div",G,[n("div",j,[v(l,{"from-coin":o.fromCoin,"to-coin":o.toCoin},null,8,["from-coin","to-coin"]),v(d,{"current-status":o.poolInfo.currentStatus||""},null,8,["current-status"])]),n("div",L,[n("div",H,[n("span",x,e(o.fromCoin.symbol),1),o.isIncrease?(i(),s("span",eo,e(o.showNum(o.poolInfo.amountA,o.poolInfo&&o.poolInfo.token_a&&o.poolInfo.token_a.decimals))+" \u2192 "+e(o.showNum(o.precision.plus(Number(o.poolInfo.amountA),Number(o.fromCoinAmount)),o.poolInfo&&o.poolInfo.token_a&&o.poolInfo.token_a.decimals)),1)):(i(),s("span",oo,e(o.fromCoinAmount||0),1))]),n("div",no,[n("span",io,e(o.toCoin.symbol),1),o.isIncrease?(i(),s("span",so,e(o.showNum(o.poolInfo.amountB,o.poolInfo&&o.poolInfo.token_b&&o.poolInfo.token_b.decimals))+" \u2192 "+e(o.showNum(o.precision.plus(Number(o.poolInfo.amountB),Number(o.toCoinAmount)),o.poolInfo&&o.poolInfo.token_b&&o.poolInfo.token_b.decimals)),1)):(i(),s("span",to,e(o.toCoinAmount||0),1))]),n("div",ao,[n("span",lo,e(o.$t("common.feeTier")),1),n("span",ro,e(o.poolInfo.fee*100)+" %",1)])]),n("div",co,[n("div",mo,[n("h3",null,e(o.$t("common.selectedRange")),1)]),n("div",uo,[o.direct?(i(),s("div",po,"1 "+e(o.fromCoin.symbol)+" \u2248 "+e(o.addCommom(o.currentPrice,o.toCoin.decimals))+"\xA0"+e(o.toCoin.symbol),1)):(i(),s("div",fo,"1 "+e(o.toCoin.symbol)+" \u2248 "+e(o.addCommom(o.currentPriceReverse,o.toCoin.decimals))+"\xA0"+e(o.fromCoin.symbol),1)),v(p,{direct:o.direct,"form-coin-symbol":o.fromCoin.symbol,"to-coin-symbol":o.toCoin.symbol,onChangeDirect:t[0]||(t[0]=c=>o.direct=c)},null,8,["direct","form-coin-symbol","to-coin-symbol"])]),n("div",yo,[n("div",vo,[n("div",ko,e(o.$t("common.minPrice")),1),n("p",Co,e(o.min),1),o.direct?(i(),s("div",ho,e(o.toCoin.symbol)+" per "+e(o.fromCoin.symbol),1)):(i(),s("div",go,e(o.fromCoin.symbol)+" per "+e(o.toCoin.symbol),1))]),n("div",So,[n("div",bo,e(o.$t("common.maxPrice")),1),n("p",Ao,e(o.mockMax.indexOf("\u221E")>-1||o.mockMax.indexOf("+")>-1?"\u221E":o.max),1),o.direct?(i(),s("div",Io,e(o.toCoin.symbol)+" per "+e(o.fromCoin.symbol),1)):(i(),s("div",_o,e(o.fromCoin.symbol)+" per "+e(o.toCoin.symbol),1))])]),n("div",Bo,[n("div",wo,e(o.t("common.positionwillBe",{symbol:`${o.fromCoin.symbol}`})),1),n("div",Po,e(o.t("common.positionwillBe",{symbol:`${o.toCoin.symbol}`})),1)])])]),v(f,{class:"big-btn liquidity-btn",onClick:o.clickAddBtn},{default:h(()=>[qo,W(" "+e(o.isIncrease?o.$t("newAdd.addMore"):o.$t("button.addLiquidity")),1)]),_:1},8,["onClick"])]),_:1},8,["title"])}const Wo=_(Y,[["render",No],["__scopeId","data-v-d5fd7f03"]]);export{Do as _,Mo as a,Wo as b,$ as c};
