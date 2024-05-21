"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[6524],{24757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(74848),a=r(28453),s=r(11470),l=r(19365);const o={sidebar_position:2,tags:["\u6d41\u91cf\u5206\u6790"],title:"NewStarCTF \u516c\u5f00\u8d5b\u8d5b\u9053 WebShell"},u="[NewStarCTF \u516c\u5f00\u8d5b\u8d5b\u9053]WebShell!",i={id:"ctf/BUUCTF/NewStartCTF WebShell",title:"NewStarCTF \u516c\u5f00\u8d5b\u8d5b\u9053 WebShell",description:"\u6253\u5f00\u6587\u4ef6\u4e4b\u540e, \u6211\u4f7f\u7528\u7edf\u8ba1\u529f\u80fd\u8fdb\u884c\u4e86\u4e00\u4e9b\u7b80\u5355\u7684\u4e86\u89e3",source:"@site/docs/ctf/BUUCTF/NewStartCTF WebShell.md",sourceDirName:"ctf/BUUCTF",slug:"/ctf/BUUCTF/NewStartCTF WebShell",permalink:"/docs/ctf/BUUCTF/NewStartCTF WebShell",draft:!1,unlisted:!1,tags:[{label:"\u6d41\u91cf\u5206\u6790",permalink:"/docs/tags/\u6d41\u91cf\u5206\u6790"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["\u6d41\u91cf\u5206\u6790"],title:"NewStarCTF \u516c\u5f00\u8d5b\u8d5b\u9053 WebShell"},sidebar:"ctfSidebar",previous:{title:"\u83dc\u5200666",permalink:"/docs/ctf/BUUCTF/\u83dc\u5200666"},next:{title:"MISC",permalink:"/docs/category/misc"}},c={},d=[];function h(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"newstarctf-\u516c\u5f00\u8d5b\u8d5b\u9053webshell",children:"[NewStarCTF \u516c\u5f00\u8d5b\u8d5b\u9053]WebShell!"}),"\n",(0,n.jsx)(t.p,{children:"\u6253\u5f00\u6587\u4ef6\u4e4b\u540e, \u6211\u4f7f\u7528\u7edf\u8ba1\u529f\u80fd\u8fdb\u884c\u4e86\u4e00\u4e9b\u7b80\u5355\u7684\u4e86\u89e3"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"part1",label:"\u8bf7\u6c42\u72b6\u6001\u56fe",default:!0,children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411170818.png",alt:""})})}),(0,n.jsx)(l.A,{value:"part2",label:"HTTP \u8bf7\u6c42",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411170842.png",alt:""})})})]}),"\n",(0,n.jsxs)(t.p,{children:["\u8fd9\u4e9b\u4fe1\u606f\u544a\u8bc9\u6211, \u653b\u51fb\u8005\u4f7f\u7528\u4e86\u76ee\u5f55\u679a\u4e3e\u7684\u624b\u6bb5, \u540c\u65f6\u771f\u6b63\u53d7\u5230\u5a01\u80c1\u7684\u8bf7\u6c42\u5730\u5740\u662f ",(0,n.jsx)(t.code,{children:"/"}),", \u57fa\u4e8e\u6b64\u6211\u7f16\u5199\u4e86\u4e00\u4e2a\u8fc7\u6ee4\u89c4\u5219"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-txt",children:'http.request.uri == "/"\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411171035.png",alt:""}),"\n\u4ece\u8fd9\u4e9b\u4fe1\u606f\u4e2d\u5c31\u53ef\u4ee5\u786e\u5b9a\u5176\u5bf9\u5e94\u7684\u5de5\u5177\u662f\u8681\u5251, \u4e4b\u540e\u67e5\u770b\u540e\u95e8\u7684\u5bc6\u7801, \u4ece\u524d\u51e0\u4e2a\u8fde\u63a5\u4e2d\u5c31\u53ef\u4ee5\u76f4\u63a5\u770b\u51fa\u5bf9\u5e94\u7684\u4fe1\u606f\n",(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411172848.png",alt:""}),"\n\u968f\u540e\u89e3\u5bc6\u76f8\u5173\u6d41\u91cf\u83b7\u53d6\u5176\u5bc6\u7801\u4fe1\u606f, \u8681\u5251\u7684\u6d41\u91cf\u770b\u6700\u957f\u7684\u90a3\u4e32base64\u7684\u89e3\u7801\u5c31\u884c\uff0c\u5e76\u4e14\u4e00\u822c\u662f\u8be5\u53c2\u6570\u4e24\u4f4d\u4e4b\u540e\u7684\u624d\u662f\u6b63\u786e\u7684\u547d\u4ee4\u7684Base64\u7f16\u7801\n",(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240411175726.png",alt:""})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'\u250c\u2500\u2500(root\u327fJTZ)-[~]\n\u2514\u2500# php -r "var_dump(base64_decode(\'Y2QgIi92YXIvd3d3L2h0bWwiO2NhdCAvc2VjcmV0O2VjaG8gZDBmNGE2OGE7cHdkO2VjaG8gMjVlNzA=\'));"\nstring(59) "cd "/var/www/html";cat /secret;echo d0f4a68a;pwd;echo 25e70"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u968f\u540e\u4e0d\u65ad\u89e3\u5bc6\u6211\u4eec\u5c31\u53ef\u4ee5\u53d1\u73b0\u5176\u4e2d\u6709\u4e00\u4e2a ",(0,n.jsx)(t.code,{children:"whoami"})," \u65b9\u6cd5, \u4ee5\u53ca\u67e5\u770b\u79d8\u5bc6\u6587\u4ef6\u7684\u547d\u4ee4, \u6700\u540e\u53ef\u4ee5\u6784\u9020\u51fa\u5bf9\u5e94\u7684 flag"]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),a=r(34164),s=r(23104),l=r(56347),o=r(205),u=r(57485),i=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,d]=p({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=i??b;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function w(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=o[r].value;a!==n&&(i(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function T(e){const t=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);