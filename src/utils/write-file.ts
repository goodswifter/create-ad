import fs from 'fs'

export const writeFile = (path: string, content: string): Promise<void> => {
  return fs.promises.writeFile(path, content)
} 