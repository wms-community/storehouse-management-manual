# 配置文件介绍

## 什么是 `.env`？

`.env` 是一个文件，其中保存了 Storehouse Management 最基础的配置信息（数据库信息、密码安全、更新源等）。

## 如何创建 `.env` 文件？

无需手动创建 `.env` 文件，只需安装，即可自动创建。

## 配置文件字段详解

为了优化安装代码，我们并未为 `.env` 文件添加注释，但是为了方便用户，下面将介绍一下各个字段的含义。

### 应用基本选项

#### `APP_DEBUG`

请务必在生产环境（线上环境）下关闭 `APP_DEBUG`（即设置为 `false`），不然你的数据库信息可能被泄露。
相反，如果遇到什么错误要报告的话请开启这个选项以获得报错的详细堆栈信息。

#### `APP_FALLBACK_LOCALE`

降级语言设置。如果 Storehouse Management 无法从浏览器和客户端中检测用户使用哪种语言，Storehouse Management 将使用这个选项所指定的值作为语言，默认为 `en` 即英语。

### 数据库相关

- `DB_CONNECTION` 数据库的连接类型，目前仅支持 `mysql` ，即 MySQL（或 MariaDB）。
- `DB_HOST` 数据库主机，一般为 `localhost`
- `DB_PORT` 数据库端口
- `DB_DATABASE` 数据库名，自行修改
- `DB_USERNAME` 数据库用户名
- `DB_PASSWORD` 数据库用户密码
- `DB_PREFIX` 数据表前缀，当你有在一个数据库中安装多个库房管理系统的需求时，请为每个系统设置不同的数据表前缀

### 安全相关

- `PWD_METHOD` 用户密码加密方式，可选的值有：
	- `MD5`（默认的）
	
在未定义加密方式时，将会直接使用默认加密方式

**请注意，系统安装好后请勿随意更改这些安全设置，否则会导致原有的用户无法登录。**

### Redis 相关

如果条件允许，请为您的站点使用 Redis。Redis 作为内存数据库，能在一定程度上提升站点的性能。

- `REDIS_CLIENT` 这一项的值只能为 `phpredis` 或 `predis`。如果您的站点有在使用 Redis，请安装 PHP 的 Redis 扩展，并将此值改为 `phpredis`。
- `REDIS_HOST` Redis 数据库的主机地址，通常为 127.0.0.1，请根据您的实际情况进行修改。
- `REDIS_PASSWORD` Redis 数据库密码。默认为 `null`，如果您有为 Redis 设置密码，请相应地修改此项。
- `REDIS_PORT` Redis 数据库端口，默认为 6379。

Redis功能正在开发中...

### 插件相关

通常您不需要修改这部分配置。

- `PLUGINS_DIR` 此配置项会影响插件的存放位置，Storehouse Management 中的插件市场会把插件安装在此处，并从这个目录中读取并加载插件。请确保这个目录有可读写权限。不填写以使用默认值。
- `PLUGINS_URL` 此配置项会影响插件中的前端资源文件 URL。建议不填写以使用默认值。

插件系统正在开发中...

### 更新源配置

- `UPDATE_SOURCE` 修改此项配置可更改 Storehouse Management 的更新源。（即，告诉 Storehouse Management 将从哪里获取新版本信息）如果您觉得默认的更新源速度慢，可更换为第三方源。（可用的第三方更新源见 [此处](/zh-cn/update-sources.md)）

更新功能正在开发中...
