import type { TemplateOption } from '../types'

/** 远程仓库分支 */
export const VUE_REPO_BRANCH = 'master'

/** 远程仓库根地址 */
export const GIT_BASE_URL = 'https://gitee.com/zad-front-end'

/**
 * 模板列表
 * @value 模板值
 * @repo 模板仓库名称
 */
export const TEMPLATE_LIST: TemplateOption[] = [
  { name: '1. npm 单包模板', value: 'npm', repo: 'npm-template' },
  { name: '2. github page 模板', value: 'github', repo: 'github-page-template' },
]
