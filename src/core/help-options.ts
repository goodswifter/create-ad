import { createRequire } from 'module'
import { program } from 'commander'

const helpOptions = (): void => {
  const require = createRequire(import.meta.url)
  const pkg = require('../../package.json')

  // 处理 --version 的操作
  program.version(pkg.version, '-v, --version', '打印版本号')

  // 处理 --dest 的操作
  program.option('-d, --dest <dest>', '设置目标目录')

  // 创建组件时, 是否配置目录
  program.option('--dir', '是否配置目录')

  // 处理 --help 的操作
  // program.helpOption('-h, --help', 'Display help for command11')

  // 最后的提示
  program.on('--help', () => {
    console.log('')
    console.log('Usage: ad [options] <command>')
    console.log('')
  })
}

export default helpOptions 