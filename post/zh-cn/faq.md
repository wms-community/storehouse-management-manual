# 常见问题解答

提问之前请先看看您的问题是否在以下列表中：

::: tip 提示：

请善用浏览器的 <kbd>Ctrl</kbd> + <kbd>F</kbd> 页内查找功能。

:::

[[toc]]

## 配置文件 `.env` 在哪？

请仔细阅读 [配置文件介绍](/zh-cn/env.md)

## 目录下没有 `install` 这个文件夹啊，怎么访问？

Storehouse Management 使用了 URL 重写来实现路由功能。

一般来说，只要您按照 [安装指南](/zh-cn/install.md#配置-url-重写规则（伪静态）) 正确配置了 URL 重写之后，您就能正常安装和使用 Storehouse Management。

## 提示「根目录下没有 `vendor` 文件夹」？

有两种解决方法：

1. 给我认认真真地再看一遍 [安装指南](/zh-cn/install.md)
2. 下载最新版本覆盖

## 出现 500 Internal Server Error

如果服务器报错 500，且页面上没有任何 玉桂库房管理系统 字样，请查看 `runtime/logs` 目录下是否有日志文件，如果没有，说明是您文件权限设置错误，请设置正确的文件权限。

如果有，请编辑 `.env` 文件，添加 `APP_DEBUG = true`，保存退出后再次打开系统就能看到更详细的调试信息，读一读页面最顶上的报错应该就知道是什么问题了。

::: warning

解决报错后，请再次编辑 `.env` 文件，将 `APP_DEBUG` 这一项的值改为 `false`，否则可能泄露重要机密信息。

:::

## 404 Not Found

如果您可以访问首页，其他页面都是 404，请检查您的 URL 重写（伪静态）规则 **是否生效**。

如果所有页面（包括 `/index.php`）都是 404，请检查您自己的 Web 服务器配置。

## 忘了密码怎么办

1. 使用系统自带的「找回密码功能」
2. 使用一个「新密码」注册一个新用户，然后在数据库 `users` 表中用新注册用户的 `password` 字段内容替换掉您原来那个用户的 `password` 字段。替换完成后您就可以使用「新密码」登录您原来的账户了。

## 如何设置第二个超级管理员？

去系统数据库 `user` 表那个用户记录的 `admin` 字段设置为 `1`。

## MySQL 错误码：2054

出错消息会像这样：无法连接至 MySQL/MariaDB 服务器，请检查您的配置。服务器返回的信息：SQLSTATE[HY000] [2054] The server requested authentication method unknown to the client

MySQL 8 默认使用了新的密码验证插件：caching_sha2_password，而之前的 PHP 版本中所带的 mysqlnd 无法支持这种验证。

解决方法：新建一个使用 mysql_native_password 方式的账户，并给予权限；或将现有账户验证方式改为 mysql_native_password 。

## 页面的样式失效

请检查您的浏览器地址栏中是否包含 `index.php`，如果有，请去掉。

## 升级的时候出现 503 错误

有两种解决方法：

### 在 503 页面登录

当出现 503 错误页面时，页面中会有一个「登录」按钮。点击打开登录页面然后像往常一样进行登录。

在登录之后，如果刚才登录的是管理员账号，那么这个升级过程就可以继续进行。

### 下载新版本覆盖

下载新版本程序，解压覆盖到系统根目录即可。

### Nginx

修改 `/etc/nginx/mime.types` 文件，添加以下一行内容：

```
application/wasm  wasm;
```

然后重新启动 Web Server。

### Apache

我们已经在 `.htaccess` 进行了配置，如果对您不起作用，可以考虑以下方法。

一种方法是修改 `/etc/mime.types`，在这个文件中添加以下一行：

```
application/wasm  wasm
```

还有一种方法是修改您的 Apache 配置文件，添加以下一行：

```
AddType application/wasm .wasm
```

## MySQL 提示「Specified key was too long...」

这往往发生在 Windows 系统上。

最彻底的解决办法是使用 Linux 作为服务器的操作系统（但请不要使用宝塔之类的面板软件），这不仅能解决这个问题，还可以避免其它只会出现在 Windows 中的问题。

临时的解决办法是修改 MySQL 的配置文件。打开 `my.ini` 文件，在 `[mysqld]` 下面加两行：

```ini
innodb_large_prefix=ON
innodb_file_format=Barracuda
```

保存并重新启动 MySQL。

## 安装或升级时遇到「Table * already exists」

打开数据库，删除所报错的数据表即可。
