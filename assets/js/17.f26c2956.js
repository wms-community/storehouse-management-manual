(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{199:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"安装指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装指南"}},[t._v("#")]),t._v(" 安装指南")]),t._v(" "),s("p",[t._v("虽然不会图文并茂，但我们会尽量用通俗的语言写详细点，希望你能看懂。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("如果你在安装过程中遇到任何问题，请先查阅 "),s("RouterLink",{attrs:{to:"/zh-cn/faq.html"}},[t._v("常见问题解答")]),t._v("，确认你遇到的问题不在此列后，再依照 "),s("RouterLink",{attrs:{to:"/zh-cn/report.html"}},[t._v("报告问题的正确姿势")]),t._v(" 中的要求联系开发者。")],1)]),t._v(" "),s("h2",{attrs:{id:"检查你的机器是否符合安装需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查你的机器是否符合安装需求"}},[t._v("#")]),t._v(" 检查你的机器是否符合安装需求")]),t._v(" "),s("h3",{attrs:{id:"基本要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本要求"}},[t._v("#")]),t._v(" 基本要求")]),t._v(" "),s("p",[t._v("流畅运行 Storehouse Management 对你的服务器的配置的要求非常低。你需要检查的是你的运行环境。")]),t._v(" "),s("p",[t._v("Storehouse Management 只支持 Nginx 或 Apache 作为 Web 服务器，不支持 IIS。PHP 版本必须为 7.2.5 或以上。")]),t._v(" "),s("h3",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),s("p",[t._v("Storehouse Management 有自带一些运行时环境检查（报错以 "),s("code",[t._v("[Error]")]),t._v(" 开头），遇到这种情况就说明你的环境不符合需求(环境验证功能开发中)。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("建议")]),t._v(" "),s("p",[t._v("除非有特别需要，我们不建议使用 Windows 作为服务器的操作系统。使用 Windows 不仅会影响系统的运行效率，还有可能会产生一些不会在 Linux 上出现的奇怪问题。")])]),t._v(" "),s("h2",{attrs:{id:"下载安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载安装包"}},[t._v("#")]),t._v(" 下载安装包")]),t._v(" "),s("p",[t._v("各版本的完整安装包可以在这里找到："),s("a",{attrs:{href:""}},[t._v("GitHub Releases")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("你应该下载文件名类似 "),s("code",[t._v("storehouse-management-server-xxx.zip")]),t._v(" 的文件，而不是下载 "),s("code",[t._v("Source Code")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"解压安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压安装包"}},[t._v("#")]),t._v(" 解压安装包")]),t._v(" "),s("p",[t._v("把安装包解压到你喜欢的地方去，必须保证 "),s("code",[t._v("index.php")]),t._v(" 在网站根目录下。")]),t._v(" "),s("h2",{attrs:{id:"配置-url-重写规则-伪静态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-url-重写规则-伪静态"}},[t._v("#")]),t._v(" 配置 URL 重写规则（伪静态）")]),t._v(" "),s("h3",{attrs:{id:"apache-用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-用户"}},[t._v("#")]),t._v(" Apache 用户")]),t._v(" "),s("p",[t._v("请确定站点根目录为网站根目录，并确保你安装好并启用了 URL Rewrite 模块。。")]),t._v(" "),s("p",[t._v("BStorehouse Management 自带开箱即用的 "),s("code",[t._v(".htaccess")]),t._v("，所以你无需额外配置 URL 重写规则，直接进入下一步即可。")]),t._v(" "),s("h3",{attrs:{id:"nginx-用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-用户"}},[t._v("#")]),t._v(" Nginx 用户")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("找到你的 Nginx 站点配置文件（也就是你这个域名的 "),s("code",[t._v("server {}")]),t._v(" 块）\n不知道你的 Nginx 站点配置文件在哪儿？建议更换 Apache。")])]),t._v(" "),s("li",[s("p",[t._v("在 "),s("code",[t._v("server {}")]),t._v(" 块中适当的地方添加nginx.htaccess文件内的规则：")])])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" (!-e "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v("  ^(.*)$  /index.php?s=/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("  last")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"测试伪静态是否生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试伪静态是否生效"}},[t._v("#")]),t._v(" 测试伪静态是否生效")]),t._v(" "),s("p",[t._v("打开你的浏览器，访问 "),s("code",[t._v("http://yourdomain/install")]),t._v("。")]),t._v(" "),s("p",[t._v("如果显示 404 且页面上没有任何 "),s("code",[t._v("玉桂库房管理系统")]),t._v(" 字样，就说明伪静态没生效，请根据前面的指导重新检查。")]),t._v(" "),s("p",[t._v("如果正确显示了安装界面，就可以继续了。")]),t._v(" "),s("h2",{attrs:{id:"运行安装向导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行安装向导"}},[t._v("#")]),t._v(" 运行安装向导")]),t._v(" "),s("p",[t._v("现在访问你的网站可以看到欢迎页面了：")]),t._v(" "),s("p",[t._v("跟着安装向导填写必要信息即可快速完成安装。")]),t._v(" "),s("h2",{attrs:{id:"安装完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装完成"}},[t._v("#")]),t._v(" 安装完成")]),t._v(" "),s("p",[t._v("不出意外的话，你已经完成了 Storehouse Management 的安装，尽情使用吧。")])])}),[],!1,null,null,null);a.default=r.exports}}]);