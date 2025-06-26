#!/usr/bin/env tsx
import { program } from 'commander'
import helpOptions from './core/help-options.js'
import { addComponentAction, createProjectAction } from './core/actions.js'

// 1. 配置所有的options
helpOptions()

// 2. 增加一些功能操作
program
  .command('create <project> [options]')
  .description('创建一个vue3项目, 比如: ad create my-project')
  .action(createProjectAction)

program
  .command('addCpn <cpnName> [options]')
  .description('add vue component into a folder, 比如: ad addcpn NavBar -d src/components')
  .action(addComponentAction)

// 解析命令行参数
program.parse(process.argv)
