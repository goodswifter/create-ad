import type {
  CommandOptions,
  GitCloneOptions,
  InquirerAnswer,
  TemplateOption,
} from '../types/index.js'
import fs from 'fs/promises'
import path from 'path'
import git from '@npmcli/git'
import { program } from 'commander'
import inquirer from 'inquirer'
import { GIT_BASE_URL, TEMPLATE_LIST, VUE_REPO_BRANCH } from '../config/repo'
import { compileEjs } from '../utils/compile-ejs'
import execCommand from '../utils/exec-command'
import { camelCaseToKebabCase } from '../utils/string-util'
import { writeFile } from '../utils/write-file'

/**
 * 添加组件
 * @param cpnName 组件名称
 */
export async function addComponentAction(cpnName: string): Promise<void> {
  // 1.创建一个组件: 编写组件的模板, 根据内容给模板中填充数据
  const result = await compileEjs('component.vue.ejs', {
    name: cpnName,
    lowername: cpnName.toLowerCase(),
  })

  // 2. 文件名处理
  const cpnKebabName = camelCaseToKebabCase(cpnName)

  // 3. 将result写到到对应的文件夹中
  const options = program.opts<CommandOptions>()
  const optDest = options.dest || 'src/components'
  const isDir = options.dir || false

  const dest = isDir ? `${optDest}/${cpnKebabName}` : optDest
  try {
    await fs.mkdir(dest, { recursive: true })
  }
  catch (error: any) {
    if (error.code !== 'EEXIST') {
      throw error
    }
  }

  // 4.将result写入到对应的文件夹中
  const file = isDir ? 'index.vue' : `${cpnKebabName}.vue`
  await writeFile(`${dest}/${file}`, result)
  console.log('创建组件成功:', `${cpnName}.vue`)
}

/**
 * 执行命令
 * @param project 项目名称
 */
const execCmds = async (project: string): Promise<void> => {
  // 1. 帮助执行 pnpm install
  console.log(process.platform)
  const isWin = process.platform === 'win32'
  const commandName = 'pnpm'
  await execCommand(commandName, ['install'], { cwd: `./${project}` })

  // 2. 删除.git
  await fs.rm(path.join(project, '.git'), { recursive: true })

  // 3. git init
  await execCommand('git', ['init'], { cwd: `./${project}` })

  // 4. 打开项目文件夹
  const openName = isWin ? 'start' : 'open'
  await execCommand(openName, [`./${project}`])
}

/**
 * 下载模板
 * @param project 项目名称
 * @param targetPath 目标路径
 * @param options 可选配置
 */
const downloadTemplate = async (
  project: string,
  targetPath: string,
  options: GitCloneOptions,
): Promise<void> => {
  const { repo } = options
  console.log(repo)
  // 1. 克隆仓库
  console.log('开始克隆仓库...')
  await git.clone(repo, VUE_REPO_BRANCH, targetPath, options)
  console.log(`克隆仓库完成, ${targetPath}`)

  // 2. 修改 package.json 中的 name 字段
  const packageJsonPath = path.join(targetPath, 'package.json')
  const packageJsonData = await fs.readFile(packageJsonPath, 'utf-8')
  const packageJson = JSON.parse(packageJsonData)
  packageJson.name = project

  // 3. 写回文件
  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2))
}

/**
 * 创建项目
 * @param project 项目名称
 */
export async function createProjectAction(project: string): Promise<void> {
  console.log(`创建项目: ${project}`)

  try {
    const answers = await inquirer.prompt<InquirerAnswer>([
      {
        type: 'list',
        name: 'template',
        message: '请选择一个模板:',
        choices: TEMPLATE_LIST,
      },
    ])

    console.log(`你选择的模板是: ${answers.template}`)
    const template = TEMPLATE_LIST.find((item: TemplateOption) => item.value === answers.template)

    if (!template) {
      throw new Error('未找到指定的模板')
    }

    const targetPath = `./${project}` // 克隆到当前目录下的项目文件夹
    const options: GitCloneOptions = { repo: `${GIT_BASE_URL}/${template.repo}.git` }

    // 1. 下载模板
    await downloadTemplate(project, targetPath, options)

    // 2. 执行命令
    await execCmds(project)
  }
  catch (error: any) {
    if (error.toString().includes('ExitPromptError')) {
      console.log('退出成功')
    }
    else {
      console.error('Error:', error)
    }
  }
}
