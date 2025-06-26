import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { program } from 'commander'

const helpOptions = (): void => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  let version = '0.0.0' // 默认版本号
  try {
    // 尝试多个可能的路径
    const possiblePaths = [
      join(__dirname, '../../package.json'), // 源代码环境：src/core/../../package.json
      join(__dirname, '../package.json'), // 可能的路径
      './package.json', // 当前工作目录
      'package.json', // 当前工作目录
    ]

    let packageContent = ''

    for (const path of possiblePaths) {
      try {
        packageContent = readFileSync(path, 'utf-8')
        break
      } catch {
        continue
      }
    }

    if (packageContent) {
      const pkg = JSON.parse(packageContent)
      version = pkg.version
    } else {
      throw new Error('Package.json not found in any expected location')
    }
  } catch {
    // 如果读取失败，使用默认版本号
    console.warn('Warning: Could not read package.json, using default version')
  }

  // 处理 --version 的操作
  program.version(version, '-v, --version', '打印版本号')

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
