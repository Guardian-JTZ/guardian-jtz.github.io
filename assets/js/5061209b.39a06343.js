"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[2892],{53518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(74848),a=n(28453);const s={sidebar_position:5,tags:["Easy","Linux","\u4fe1\u606f\u6cc4\u9732","\u6587\u4ef6\u4e0a\u4f20","SUID"],title:"RootMe",sidebar_label:"RootMe"},r="RootMe",o={id:"box/TryHackMe/5",title:"RootMe",description:"\u7aef\u53e3\u626b\u63cf",source:"@site/docs/box/TryHackMe/5.md",sourceDirName:"box/TryHackMe",slug:"/box/TryHackMe/5",permalink:"/docs/box/TryHackMe/5",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"\u4fe1\u606f\u6cc4\u9732",permalink:"/docs/tags/\u4fe1\u606f\u6cc4\u9732"},{label:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/tags/\u6587\u4ef6\u4e0a\u4f20"},{label:"SUID",permalink:"/docs/tags/suid"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["Easy","Linux","\u4fe1\u606f\u6cc4\u9732","\u6587\u4ef6\u4e0a\u4f20","SUID"],title:"RootMe",sidebar_label:"RootMe"},sidebar:"boxSidebar",previous:{title:"Pickle Rick",permalink:"/docs/box/TryHackMe/4"},next:{title:"LazyAdmin",permalink:"/docs/box/TryHackMe/6"}},l={},c=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"www-data",id:"www-data",level:3},{value:"www-data \u2014&gt; root",id:"www-data--root",level:3},{value:"\u6269\u5c55",id:"\u6269\u5c55",level:2},{value:"\u5907\u4efd\u6587\u4ef6",id:"\u5907\u4efd\u6587\u4ef6",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"rootme",children:"RootMe"}),"\n",(0,i.jsx)(t.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525124045.png",alt:"20240525124045"})}),"\n",(0,i.jsx)(t.h2,{id:"80",children:"80"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525124055.png",alt:"20240525124055"})}),"\n",(0,i.jsx)(t.p,{children:"\u6211\u4eec\u53d1\u73b0\u4e00\u4e2a\u65b0\u7684\u9875\u9762 panel \u8bbf\u95ee\u53d1\u73b0\u5176\u5b9e\u662f\u4e00\u4e2a\u6587\u4ef6\u4e0a\u4f20\u4f4d\u7f6e"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525124107.png",alt:"20240525124107"})}),"\n",(0,i.jsxs)(t.p,{children:["\u53c8\u53d1\u73b0\u4e00\u4e2a ",(0,i.jsx)(t.code,{children:"http://10.10.230.100/uploads/"}),"  \u8fd9\u5e94\u8be5\u662f\u6587\u4ef6\u4e0a\u4f20\u7684\u4f4d\u7f6e\uff0c \u6211\u4eec\u4e0b\u8f7d\u4e00\u4e2a php reverse shell \u4e0a\u4f20\u5230\u76ee\u6807\u8fdb\u884c\u6267\u884c,\n\u53d1\u73b0\u6587\u4ef6\u4e0a\u4f20\u5b58\u5728\u8fc7\u6ee4\u4e0d\u5141\u8bb8 php \u540e\u7f00\u4e0a\u4f20\uff0c \u4f46\u662f\u53d1\u73b0\u53ef\u4ee5\u4e0a\u4f20 phtml \u540e\u7f00\u6587\u4ef6"]}),"\n",(0,i.jsx)(t.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,i.jsx)(t.h3,{id:"www-data",children:"www-data"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525124130.png",alt:"20240525124130"})}),"\n",(0,i.jsx)(t.h3,{id:"www-data--root",children:"www-data \u2014> root"}),"\n",(0,i.jsxs)(t.p,{children:["\u67e5\u627e\u53d1\u73b0\u5b58\u5728 SUID \u7279\u6b8a\u6587\u4ef6, \u76f4\u63a5 ",(0,i.jsx)(t.a,{href:"https://gtfobins.github.io/gtfobins/python/#suid",children:"GTFOBins"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525124146.png",alt:"20240525124146"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525124231.png",alt:"20240525124231"})}),"\n",(0,i.jsx)(t.h2,{id:"\u6269\u5c55",children:"\u6269\u5c55"}),"\n",(0,i.jsx)(t.h3,{id:"\u5907\u4efd\u6587\u4ef6",children:"\u5907\u4efd\u6587\u4ef6"}),"\n",(0,i.jsx)(t.p,{children:"\u5728\u67e5\u770b\u7cfb\u7edf\u76ee\u5f55\u65f6\u53d1\u73b0\uff0c \u7f51\u7ad9\u4e0b\u5b58\u5728\u4e00\u4e2a website.zip \u6587\u4ef6\uff0c \u5982\u679c\u6211\u4eec\u5728\u76ee\u5f55\u626b\u63cf\u4e2d\u53d1\u73b0\u6b64\u5907\u4efd\u6587\u4ef6, \u6211\u4eec\u5c31\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u8fdb\u884c\u5206\u6790"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240525124250.png",alt:"20240525124250"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);