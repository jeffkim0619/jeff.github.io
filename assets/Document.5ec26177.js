import{_ as e,m as t,r as l,e as n,o as s,a,b as c,g as i,F as o,h as u,w as d,t as m}from"./index.86543397.js";const r={emits:["next-page"],setup(){const{emit:e}=t(),n=l(),s=l(!1),a=l(!0),c=l(),i=l([{documentNm:"소견서 사본",eCharge:"N",description:"재발급만 가능합니다. a",price:"1,000원",documentIdx:"001"},{documentNm:"영문 진단서 사본",eCharge:"N",description:"재발급만 가능합니다. y",price:"1,000원",documentIdx:"002"},{documentNm:"진단서 사본",eCharge:"N",description:"재발급만 가능합니다. t",price:"1,000원",documentIdx:"003"}]),o=l({});return{check:n,isConstraint:s,isCheckDocument:a,documentList:i,documentDescription:c,nextPage:()=>{s.value=!1,e("next-page",{fromData:o.value,pageIndex:0})},checkConstraint:e=>{if(a.value=!1,e>0){s.value=!0;for(let t=0;t<i.value.length;t++)c.value=i.value[e-1].description,o.value={documentNm:i.value[e-1].documentNm,documentPrice:i.value[e-1].price}}else 0===e&&(o.value={documentNm:"외래 영수증",documentPrice:"0"})},closeConfrim:()=>{s.value=!1,n.value=""}}}},p={class:"m-2"},v=c("div",null,[c("p",{class:"text-lg font-bold"},"발급가능한 증명서 입니다."),c("p",{class:"text-xs"}," 영수증은 발급 후 바로 보험사 간편청구를 진행할수 있어요 "),c("p",{class:"text-xs text-red-500"},"유료 결제 시 발급 수수료와 별도의"),c("p",{class:"text-xs text-red-500"},"발급 대행 수수료 0000원이 부과됩니다.")],-1),x={class:"mt-3"},f={class:"flex justify-content-between align-items-center"},h={class:"field-radiobutton"},b=c("label",{for:"receipt"},[c("p",{class:"text-md"},"외래 영수증"),c("p",{class:"mt-1 text-xs font-light"},"실비보험금 간편청구 가능")],-1),g=c("div",null,[c("span",null,"무료")],-1),C=c("hr",null,null,-1),k={class:"field-radiobutton"},N=["for"],w={class:"text-md"},I={class:"mt-1 text-xs font-light"},D={class:"mt-1 text-xs font-light"},j=c("div",null,[c("span",null,"1,000원")],-1),y={class:"mt-3 mb-3"},V=c("p",null,"이미 병원에서 발급을 받았던 서류 인가요?",-1),P={class:"flex justify-content-between align-items-center"},_={class:"w-6 m-1"},U={class:"w-6 m-1"};const B=e(r,[["render",function(e,t,l,r,B,L){const F=n("RadioButton"),R=n("Button"),S=n("Sidebar");return s(),a("div",p,[v,c("div",x,[c("div",f,[c("div",h,[i(F,{inputId:"receipt",name:"receipt",value:"receipt",modelValue:r.check,"onUpdate:modelValue":t[0]||(t[0]=e=>r.check=e),onChange:t[1]||(t[1]=e=>r.checkConstraint(0))},null,8,["modelValue"]),b]),g]),C,(s(!0),a(o,null,u(r.documentList,((e,l)=>(s(),a("div",{class:"mt-2 flex justify-content-between align-items-center",key:l},[c("div",k,[i(F,{inputId:e.documentIdx,value:e.documentNm,modelValue:r.check,"onUpdate:modelValue":t[2]||(t[2]=e=>r.check=e),onChange:e=>r.checkConstraint(l+1)},null,8,["inputId","value","modelValue","onChange"]),c("label",{for:e.documentIdx},[c("p",w,m(e.documentNm),1),c("p",I,m(e.description),1),c("p",D,m("Y"===e.eCharge?"실비보험금 간편청구 가능":"실비보험금 간편청구 불가"),1)],8,N)]),j])))),128))]),c("div",y,[i(R,{class:"w-full",label:"다음",disabled:r.isCheckDocument,onClick:r.nextPage},null,8,["disabled","onClick"])]),i(S,{visible:r.isConstraint,"onUpdate:visible":t[3]||(t[3]=e=>r.isConstraint=e),class:"p-sidebar-lg",baseZIndex:1e3,position:"bottom"},{default:d((()=>[c("div",null,[c("p",null,m(r.documentDescription),1),V]),c("div",P,[c("div",_,[i(R,{class:"w-full p-button-secondary",label:"아니오",onClick:r.closeConfrim},null,8,["onClick"])]),c("div",U,[i(R,{class:"w-full",label:"네",onClick:r.nextPage},null,8,["onClick"])])])])),_:1},8,["visible"])])}],["__file","/Users/jeff/Documents/jeff/test/sample/221017/dev_1/src/views/home/select/choise/Document.vue"]]);export{B as default};
