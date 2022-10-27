import{_ as e,d as l,r as n,i as a,e as s,o as t,a as c,b as i,g as o,f as d,c as r}from"./index.86543397.js";const u={setup(){const e=l(),s=n(r.privacy.user),t=n(!1),c=n([]),i=n(),o=n(),d=n(),u=n([{name:"SK 텔레콤",code:"001"},{name:"KT",code:"005"},{name:"LG U+",code:"007"}]),v=a({get:()=>{let e=s.value.length===c.value.length;return t.value=!e,e},set:e=>{m(e)}}),m=e=>{c.value=[],e?s.value.forEach((e=>{c.value.push(e.name)})):c.value=[]};return{isNotAgree:t,privacyList:s,allPrivacy:v,checkList:c,selectTelecom:i,telecomList:u,birth:o,gender:d,selectDocument:()=>{e.push({path:"/choise"})}}}},v={class:"m-2"},m=i("div",null,[i("p",{class:"text-xl font-bold"}," 진료내역 확인을 위해 주민등록번호를 입력해 주세요. "),i("p",{class:"text-sm font-thin"}," 입력한 주민등록번호는 암호화되어 저장되니 안심하세요 ")],-1),p={class:"mt-3"},h={class:"mt-3 flex justify-content-between align-items-center w-12"},x=i("span",null," - ",-1),f={class:"mt-3"},b={class:"m-3"},y={class:"mt-3"};const g=e(u,[["render",function(e,l,n,a,r,u){const g=s("InputText"),w=s("InputNumber"),k=s("Button");return t(),c("div",v,[m,i("div",p,[i("div",null,[o(g,{class:"h-2rem w-full",placeholder:"성함"})]),i("div",h,[o(w,{useGrouping:!1,inputClass:"w-1",class:"h-2rem",placeholder:"000000",max:1,modelValue:a.birth,"onUpdate:modelValue":l[0]||(l[0]=e=>a.birth=e)},null,8,["modelValue"]),x,o(w,{useGrouping:!1,inputClass:"w-1",class:"h-2rem",placeholder:"1xxxxx",modelValue:a.gender,"onUpdate:modelValue":l[1]||(l[1]=e=>a.gender=e)},null,8,["modelValue"])]),d(' <div class="mt-3">\n        <Dropdown\n          class="w-5"\n          inputClass="text-xs"\n          v-model="selectTelecom"\n          :options="telecomList"\n          optionLabel="name"\n          optionValue="code"\n          placeholder="통신사를 선택하세요"\n        />\n      </div> '),i("div",f,[o(g,{class:"h-2rem w-12",placeholder:"010-0000-0000"})])]),i("div",b,[d(' <div class="text-md">\n        <p>서류 발급을 위해서는</p>\n        <p>서비스 약관의 동의가 필요합니다.</p>\n      </div> '),d(' <div class="mt-3">\n        <div class="field-checkbox text-lg font-bold">\n          <Checkbox\n            inputId="allPrivacy"\n            :binary="allPrivacy"\n            v-model="allPrivacy"\n          />\n          <label for="allPrivacy">전체 동의</label>\n        </div>\n        <div\n          class="flex justify-content-between"\n          v-for="(privacy, index) in privacyList"\n          :key="index"\n        >\n          <div class="field-checkbox text-sm">\n            <Checkbox\n              :inputId="privacy.name"\n              name="privacy"\n              :value="privacy.name"\n              v-model="checkList"\n            />\n            <label :for="privacy.name">\n              {{ privacy.description }}\n            </label>\n          </div>\n        </div>\n      </div> '),i("div",y,[o(k,{disabled:a.isNotAgree,class:"p-button-rounded w-full",label:"본인인증 받기",onClick:a.selectDocument},null,8,["disabled","onClick"])])])])}],["__file","/Users/jeff/Documents/jeff/test/sample/221017/dev_1/src/views/home/select/UserData.vue"]]);export{g as default};
