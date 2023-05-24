---
slug: wordpress环境搭建
title: wordpress环境搭建
authors: kenanyah
tags: [study, phpstudy, wordpress]
---

### 下载并安装phpstudy

首先，你需要下载并安装phpstudy。phpstudy是一款集成了Apache、PHP、MySQL等服务的软件，可以方便地搭建本地开发环境。你可以在phpstudy官网上下载最新版本的软件。

### 启动Apache和MySQL服务

安装完成后，启动phpstudy并点击“启动”按钮，启动Nginx和MySQL服务。

### 创建数据库

在phpstudy的主界面中，点击“MySQL管理”，进入MySQL管理页面。在页面中，点击“新建”按钮，创建一个新的数据库。

### 下载并解压WordPress

在WordPress官网上下载最新版本的WordPress，并将其解压到根目录下（默认为D:\phpstudy\WWW）。

### 配置WordPress

打开WordPress根目录下的wp-config-sample.php文件，将其中的数据库信息修改为你刚才创建的数据库信息，并将文件名改为wp-config.php。

### 安装WordPress

在浏览器中输入 `http://localhost/wordpress`，进入WordPress的安装页面。按照页面提示，填写站点信息和管理员信息，并完成安装。

### 安装主题和插件

安装完成后，你可以在WordPress后台中选择喜欢的主题和插件，来定制你的WordPress网站。
