(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{197:function(_,v,e){"use strict";e.r(v);var a=e(6),t=Object(a.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"配置文件介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件介绍"}},[_._v("#")]),_._v(" 配置文件介绍")]),_._v(" "),e("h2",{attrs:{id:"什么是-env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-env"}},[_._v("#")]),_._v(" 什么是 "),e("code",[_._v(".env")]),_._v("？")]),_._v(" "),e("p",[e("code",[_._v(".env")]),_._v(" 是一个文件，其中保存了 Storehouse Management 最基础的配置信息（数据库信息、密码安全、更新源等）。")]),_._v(" "),e("h2",{attrs:{id:"如何创建-env-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何创建-env-文件"}},[_._v("#")]),_._v(" 如何创建 "),e("code",[_._v(".env")]),_._v(" 文件？")]),_._v(" "),e("p",[_._v("无需手动创建 "),e("code",[_._v(".env")]),_._v(" 文件，只需安装，即可自动创建。")]),_._v(" "),e("h2",{attrs:{id:"配置文件字段详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件字段详解"}},[_._v("#")]),_._v(" 配置文件字段详解")]),_._v(" "),e("p",[_._v("为了优化安装代码，我们并未为 "),e("code",[_._v(".env")]),_._v(" 文件添加注释，但是为了方便用户，下面将介绍一下各个字段的含义。")]),_._v(" "),e("h3",{attrs:{id:"应用基本选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用基本选项"}},[_._v("#")]),_._v(" 应用基本选项")]),_._v(" "),e("h4",{attrs:{id:"app-debug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-debug"}},[_._v("#")]),_._v(" "),e("code",[_._v("APP_DEBUG")])]),_._v(" "),e("p",[_._v("请务必在生产环境（线上环境）下关闭 "),e("code",[_._v("APP_DEBUG")]),_._v("（即设置为 "),e("code",[_._v("false")]),_._v("），不然你的数据库信息可能被泄露。\n相反，如果遇到什么错误要报告的话请开启这个选项以获得报错的详细堆栈信息。")]),_._v(" "),e("h4",{attrs:{id:"app-fallback-locale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-fallback-locale"}},[_._v("#")]),_._v(" "),e("code",[_._v("APP_FALLBACK_LOCALE")])]),_._v(" "),e("p",[_._v("降级语言设置。如果 Storehouse Management 无法从浏览器和客户端中检测用户使用哪种语言，Storehouse Management 将使用这个选项所指定的值作为语言，默认为 "),e("code",[_._v("en")]),_._v(" 即英语。")]),_._v(" "),e("h3",{attrs:{id:"数据库相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库相关"}},[_._v("#")]),_._v(" 数据库相关")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("DB_CONNECTION")]),_._v(" 数据库的连接类型，目前仅支持 "),e("code",[_._v("mysql")]),_._v(" ，即 MySQL（或 MariaDB）。")]),_._v(" "),e("li",[e("code",[_._v("DB_HOST")]),_._v(" 数据库主机，一般为 "),e("code",[_._v("localhost")])]),_._v(" "),e("li",[e("code",[_._v("DB_PORT")]),_._v(" 数据库端口")]),_._v(" "),e("li",[e("code",[_._v("DB_DATABASE")]),_._v(" 数据库名，自行修改")]),_._v(" "),e("li",[e("code",[_._v("DB_USERNAME")]),_._v(" 数据库用户名")]),_._v(" "),e("li",[e("code",[_._v("DB_PASSWORD")]),_._v(" 数据库用户密码")]),_._v(" "),e("li",[e("code",[_._v("DB_PREFIX")]),_._v(" 数据表前缀，当你有在一个数据库中安装多个库房管理系统的需求时，请为每个系统设置不同的数据表前缀")])]),_._v(" "),e("h3",{attrs:{id:"安全相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全相关"}},[_._v("#")]),_._v(" 安全相关")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("PWD_METHOD")]),_._v(" 用户密码加密方式，可选的值有：\n"),e("ul",[e("li",[e("code",[_._v("MD5")]),_._v("（默认的）")])])])]),_._v(" "),e("p",[_._v("在未定义加密方式时，将会直接使用默认加密方式")]),_._v(" "),e("p",[e("strong",[_._v("请注意，系统安装好后请勿随意更改这些安全设置，否则会导致原有的用户无法登录。")])]),_._v(" "),e("h3",{attrs:{id:"redis-相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-相关"}},[_._v("#")]),_._v(" Redis 相关")]),_._v(" "),e("p",[_._v("如果条件允许，请为您的站点使用 Redis。Redis 作为内存数据库，能在一定程度上提升站点的性能。")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("REDIS_CLIENT")]),_._v(" 这一项的值只能为 "),e("code",[_._v("phpredis")]),_._v(" 或 "),e("code",[_._v("predis")]),_._v("。如果您的站点有在使用 Redis，请安装 PHP 的 Redis 扩展，并将此值改为 "),e("code",[_._v("phpredis")]),_._v("。")]),_._v(" "),e("li",[e("code",[_._v("REDIS_HOST")]),_._v(" Redis 数据库的主机地址，通常为 127.0.0.1，请根据您的实际情况进行修改。")]),_._v(" "),e("li",[e("code",[_._v("REDIS_PASSWORD")]),_._v(" Redis 数据库密码。默认为 "),e("code",[_._v("null")]),_._v("，如果您有为 Redis 设置密码，请相应地修改此项。")]),_._v(" "),e("li",[e("code",[_._v("REDIS_PORT")]),_._v(" Redis 数据库端口，默认为 6379。")])]),_._v(" "),e("p",[_._v("Redis功能正在开发中...")]),_._v(" "),e("h3",{attrs:{id:"插件相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件相关"}},[_._v("#")]),_._v(" 插件相关")]),_._v(" "),e("p",[_._v("通常您不需要修改这部分配置。")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("PLUGINS_DIR")]),_._v(" 此配置项会影响插件的存放位置，Storehouse Management 中的插件市场会把插件安装在此处，并从这个目录中读取并加载插件。请确保这个目录有可读写权限。不填写以使用默认值。")]),_._v(" "),e("li",[e("code",[_._v("PLUGINS_URL")]),_._v(" 此配置项会影响插件中的前端资源文件 URL。建议不填写以使用默认值。")])]),_._v(" "),e("p",[_._v("插件系统正在开发中...")]),_._v(" "),e("h3",{attrs:{id:"更新源配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新源配置"}},[_._v("#")]),_._v(" 更新源配置")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("UPDATE_SOURCE")]),_._v(" 修改此项配置可更改 Storehouse Management 的更新源。（即，告诉 Storehouse Management 将从哪里获取新版本信息）如果您觉得默认的更新源速度慢，可更换为第三方源。（可用的第三方更新源见 "),e("RouterLink",{attrs:{to:"/zh-cn/update-sources.html"}},[_._v("此处")]),_._v("）")],1)]),_._v(" "),e("p",[_._v("更新功能正在开发中...")])])}),[],!1,null,null,null);v.default=t.exports}}]);