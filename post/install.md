# 安装指南

虽然不会图文并茂，但我们会尽量用通俗的语言写详细点，希望你能看懂。

::: tip 提示

如果你在安装过程中遇到任何问题，请先查阅 [常见问题解答](/faq.md)，确认你遇到的问题不在此列后，再依照 [报告问题的正确姿势](/report.md) 中的要求联系开发者。

:::

## 检查你的机器是否符合安装需求

### 基本要求

流畅运行 Storehouse Management 对你的服务器的配置的要求非常低。你需要检查的是你的运行环境。

Storehouse Management 只支持 Nginx 或 Apache 作为 Web 服务器，不支持 IIS。PHP 版本必须为 7.2.5 或以上。

### 其它

Storehouse Management 有自带一些运行时环境检查（报错以 `[Error]` 开头），遇到这种情况就说明你的环境不符合需求(环境验证功能开发中)。

::: tip 建议

除非有特别需要，我们不建议使用 Windows 作为服务器的操作系统。使用 Windows 不仅会影响系统的运行效率，还有可能会产生一些不会在 Linux 上出现的奇怪问题。

:::

## 下载安装包

各版本的完整安装包可以在这里找到：[GitHub Releases]()

::: tip 提示

您可以下载 `Source Code`。

:::

## 解压安装包

把安装包解压到你喜欢的地方去，必须保证 `index.php` 在网站根目录下。

## 配置 URL 重写规则（伪静态）

### Apache 用户

请确定站点根目录为网站根目录，并确保你安装好并启用了 URL Rewrite 模块。。

BStorehouse Management 自带开箱即用的 `.htaccess`，所以你无需额外配置 URL 重写规则，直接进入下一步即可。

### Nginx 用户

1. 找到你的 Nginx 站点配置文件（也就是你这个域名的 `server {}` 块）
   不知道你的 Nginx 站点配置文件在哪儿？建议更换 Apache。

2. 在 `server {}` 块中适当的地方添加nginx.htaccess文件内的规则：

```nginx
location / {
   if (!-e $request_filename) {
        rewrite  ^(.*)$  /index.php?s=/$1  last;
    }
}
```

## 测试伪静态是否生效

打开你的浏览器，访问 `http://yourdomain/install`。

如果显示 404 且页面上没有任何 `玉桂库房管理系统` 字样，就说明伪静态没生效，请根据前面的指导重新检查。

如果正确显示了安装界面，就可以继续了。

## 运行安装向导

现在访问你的网站可以看到欢迎页面了：

跟着安装向导填写必要信息即可快速完成安装。

## 安装完成

不出意外的话，你已经完成了 Storehouse Management 的安装，尽情使用吧。
