export interface TemplateOption {
  /** 模板描述 */
  name: string
  /** 模板值 */
  value: string
  /** 模板仓库名称 */
  repo: string
}

export interface CommandOptions {
  dest?: string
  dir?: boolean
}

export interface GitCloneOptions {
  repo: string
}

export interface CompileData {
  name: string
  lowername: string
}

export interface InquirerAnswer {
  template: string
} 