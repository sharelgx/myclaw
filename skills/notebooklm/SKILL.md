---
name: notebooklm
description: Google NotebookLM 集成，用于创建笔记本、添加文档源、基于文档库提问、生成播客音频等功能。当用户提到笔记本、文档库、知识库、播客生成或 NotebookLM 时使用此技能。
---

# NotebookLM Skill

帮助用户使用 Google NotebookLM 进行知识管理和内容生成。

## 功能概述

- 创建和管理笔记本
- 添加文档源（URL、文本等）
- 基于文档库进行智能问答
- 生成播客风格的音频概述

## 安装前置条件

确保已安装 `notebooklm-py`：

```bash
/opt/homebrew/bin/python3.11 -m pip install notebooklm-py
/opt/homebrew/bin/python3.11 -m playwright install chromium
```

## 首次使用

首次运行时需要登录 Google 账号：

```bash
/opt/homebrew/bin/python3.11 -m notebooklm login
```

这会打开浏览器进行 Google 账号授权。

## 常用命令

### 创建笔记本

```bash
/opt/homebrew/bin/python3.11 -m notebooklm create "笔记本名称"
```

### 添加文档源

```bash
/opt/homebrew/bin/python3.11 -m notebooklm source add <URL>
```

添加文档到指定笔记本：

```bash
/opt/homebrew/bin/python3.11 -m notebooklm source add <URL> -n "笔记本名称"
```

### 问答

```bash
/opt/homebrew/bin/python3.11 -m notebooklm ask "你的问题"
```

对指定笔记本提问：

```bash
/opt/homebrew/bin/python3.11 -m notebooklm ask "你的问题" -n "笔记本名称"
```

### 列出笔记本

```bash
/opt/homebrew/bin/python3.11 -m notebooklm list
```

### 生成音频

```bash
/opt/homebrew/bin/python3.11 -m notebooklm audio generate -n "笔记本名称"
```

## 使用示例

**用户:** 用 notebooklm 创建一个叫「周报」的本子
**回复:** 正在创建笔记本「周报」...

**用户:** 用 notebooklm 把 https://example.com 推到「周报」里
**回复:** 正在添加文档到笔记本...

**用户:** 用 notebooklm 查一下「周报」里的内容
**回复:** 正在查询笔记本内容...

**用户:** 用 notebooklm 把「周报」生成播客音频
**回复:** 正在生成播客音频...

## 注意事项

1. 文档链接必须是公开可访问的
2. 国内访问可能需要配置代理
3. 首次使用需要浏览器登录授权
4. 生成的音频需要一些时间处理

## 故障排除

**命令找不到:** 重新运行安装命令

**登录失败:** 检查网络连接，可能需要代理

**推送失败:** 确认链接可公开访问
