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
  { name: '1. npm模板', value: 'npm', repo: 'npm-template' },
  { name: '2. Vue3 基础模板', value: 'base', repo: 'vue3-base-template' },
  { name: '3. Vue3 门户模板', value: 'portal', repo: 'vue-portal-template' },
  { name: '4. Vue3 后端管理系统模板', value: 'admin', repo: 'vue-admin-template' },
]
