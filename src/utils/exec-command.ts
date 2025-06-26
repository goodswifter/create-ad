import type { ChildProcess, SpawnOptions } from 'child_process'
import { spawn } from 'child_process'

const execCommand = (
  command: string,
  args: string[] = [],
  options?: SpawnOptions,
): Promise<void> => {
  return new Promise((resolve) => {
    // npm install/npm run dev
    // 1.开启子进程执行命令
    const childProcess: ChildProcess = options
      ? spawn(command, args, options)
      : spawn(command, args)

    // 2.获取子进程的输出和错误信息
    if (childProcess.stdout) {
      childProcess.stdout.pipe(process.stdout)
    }
    if (childProcess.stderr) {
      childProcess.stderr.pipe(process.stderr)
    }

    // 3.监听子进程执行结束, 关闭掉
    childProcess.on('close', () => {
      resolve()
    })
  })
}

export default execCommand
