# 手动构建

如果您想为此项目作贡献，或者抢先尝试未发布的新功能，您可以先用 GitHub 上的代码部署。

**不推荐不熟悉 shell 操作以及不想折腾的用户使用。**

## 步骤

请先确保您安装好以下工具：

- [Git](https://git-scm.org)
- [Composer](https://getcomposer.org)
- [PowerShell Core](https://github.com/PowerShell/PowerShell#get-powershell)

然后执行以下命令来拉取代码：

```bash
git clone https://github.com/wms-community/storehouse-management-server.git
cd storehouse-management-server
composer install
```

接下来按照 [安装指南](/zh-cn/install.md) 中的后续步骤去完成安装即可。

## 订阅我们的频道

如果您有在使用 Storehouse Management 的开发版（即仓库中 dev 分支的代码），建议您订阅我们的 [Storehouse Management News](https://t.me/storehouse_management_news)。当有新的代码被推送时，我们的机器人将会在频道内发送一条消息来提示您能否拉取最新代码，以及拉取后应该做什么。
