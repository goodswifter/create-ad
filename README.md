# create-ad

[![NPM version](https://img.shields.io/npm/v/@goodswifter/create-ad?color=a1b858&label=)](https://www.npmjs.com/package/@goodswifter/create-ad)

一个简单高效的 Vue3 项目脚手架工具，专注于自动生成模板，让开发者快速搭建项目。

## ✨ 特性

- 🚀 快速创建 Vue3 项目
- 📦 多种项目模板可选
- 🎨 自动生成 Vue 组件
- 💻 智能目录结构管理
- 🔧 支持命令行交互式配置
- 📱 跨平台兼容（Windows/macOS/Linux）

## 📦 安装

使用 npm 全局安装：

```bash
npm install -g @goodswifter/create-ad
```

或使用 pnpm：

```bash
pnpm add -g @goodswifter/create-ad
```

## 🚀 快速开始

### 创建项目

```bash
ad create my-project
```

运行命令后，会出现交互式界面供您选择项目模板：

1. **npm模板** - 基础 npm 包模板
2. **Vue3 基础模板** - Vue3 基础项目模板
3. **Vue3 门户模板** - Vue3 门户网站模板
4. **Vue3 后端管理系统模板** - Vue3 后台管理系统模板

### 添加组件

在项目中快速生成 Vue 组件：

```bash
# 在默认位置(src/components)创建组件
ad addCpn MyComponent

# 在指定目录创建组件
ad addCpn NavBar -d src/layout

# 创建组件并生成独立文件夹
ad addCpn UserCard -d src/components --dir
```

## 📋 命令详解

### `ad create <project-name>`

创建新项目

**参数：**
- `project-name` - 项目名称

**示例：**
```bash
ad create my-vue-app
```

### `ad addCpn <component-name> [options]`

添加 Vue 组件

**参数：**
- `component-name` - 组件名称（支持驼峰命名）

**选项：**
- `-d, --dest <directory>` - 指定组件生成目录（默认：src/components）
- `--dir` - 为组件创建独立文件夹

**示例：**
```bash
# 基础用法
ad addCpn UserProfile

# 指定目录
ad addCpn HeaderNav -d src/layout

# 创建独立文件夹
ad addCpn ProductCard -d src/components --dir
```

## 🛠️ 功能详情

### 项目创建流程

1. 选择项目模板
2. 自动克隆远程模板仓库
3. 自动安装项目依赖
4. 初始化 Git 仓库
5. 自动打开项目文件夹

### 组件生成特性

- 自动将驼峰命名转换为 kebab-case 文件名
- 生成标准的 Vue3 Composition API 组件结构
- 支持指定目录和独立文件夹模式
- 自动创建不存在的目录

## 📁 项目结构

生成的 Vue 组件模板包含：

```vue
<template>
  <div class="component-name">
    <h2>ComponentName: {{ message }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('哈哈哈')
</script>

<style>
.component-name {
  color: red;
}
</style>
```

## 🌟 模板库

当前支持的项目模板：

| 模板类型 | 描述 | 适用场景 |
|---------|------|----------|
| npm模板 | 基础 npm 包开发模板 | 工具库开发 |
| Vue3 基础模板 | 纯净的 Vue3 项目 | 小型项目 |
| Vue3 门户模板 | 企业门户网站模板 | 官网、展示站 |
| Vue3 后端管理系统模板 | 完整的后台管理系统 | 管理后台 |

## 📄 许可证

[MIT](./LICENSE) License © 2024 [goodswifter](https://github.com/goodswifter)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系

- 作者：goodswifter
- 邮箱：104248086@qq.com
- GitHub：https://github.com/goodswifter/create-ad
