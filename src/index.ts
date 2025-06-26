#!/usr/bin/env tsx
import { program } from 'commander'
import { createProjectAction } from './core/actions.js'
import helpOptions from './core/help-options.js'

// 1. 配置所有的options
helpOptions()

const args = process.argv.slice(2)
const projectName = args[0] || 'my-app'

// 直接创建
// 设置默认命令 - 当没有指定子命令时执行
program
  .argument('<project>', projectName)
  .action(createProjectAction)

// 解析命令行参数
program.parse(process.argv)
