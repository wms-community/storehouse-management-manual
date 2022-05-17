# 目录结构

<!-- textlint-disable terminology -->
::: vue

. 
├── app (应用目录) 
│   ├── controller (控制器目录) 
│   ├── lang (语言配置目录) 
│   ├── middleware (中间件目录) 
│   ├── view (模版目录)
│   │   ├── common (模版公共文件目录)
│   │   ├── index (首页模版目录) 
│   │   ├── install (安装程序模版目录) 
│   │   ├── login_reg (用户登录注册页面模版目录)
│   │   └── User.php (用户后台模版目录) 
│   └── ...
├── config (系统配置目录) 
├── runtime (系统缓存目录) 
├── extend (扩展类库目录) 
├── .env.example (示例配置文件) 
├── .env (系统配置文件) 
├── .htaccess (伪静态文件) 
├── apache.htaccess (Apache伪静态规则文件) 
├── nginx.htaccess (Nginx伪静态规则文件) 
└── index.php (系统入口文件) 

:::
<!-- textlint-enable -->

::: info 提示：

您不用担心打开后没有 '.env' 文件，此文件会在安装好后自动生成！

:::
