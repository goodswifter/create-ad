import type { CompileData } from '../types'
import path from 'path'
import { fileURLToPath } from 'url'
import ejs from 'ejs'

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const compileEjs = (tempName: string, data: CompileData): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 1.获取当前模板的路径
    const tempPath = `../template/${tempName}`
    const absolutePath = path.resolve(__dirname, tempPath)

    // 2.使用ejs引擎编译模板
    ejs.renderFile(absolutePath, data, (err: Error | null, result?: string) => {
      if (err) {
        console.log('编译模板失败:', err)
        reject(err)
        return
      }

      resolve(result!)
    })
  })
}
