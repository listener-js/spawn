import { spawn } from "node-pty"

export interface SpawnArg {
  args?: string[]
  command: string
  cwd?: string
  exit?: boolean
  json?: boolean
  quiet?: boolean
  save?: boolean
}

export interface SpawnReturn {
  code: number
  err: boolean
  out: string
  signal: number
}

export interface SpawnTerminalArg {
  args?: string[]
  command: string
  cwd?: string
  env?: Record<string, string>
}

export interface SpawnTerminalReturn {
  code: number
  out: string
  signal: number
}

export class Spawn {

  public static listeners: string[] = ["spawn", "spawnComplete"]

  public static async spawn(
    id: string[],
    arg: SpawnArg
  ): Promise<SpawnReturn> {
    const { exit, json } = arg

    let { code, out, signal } =
      await this.spawnTerminal(arg)

    const err = code > 0

    if (!err && json) {
      out = JSON.parse(out)
    }

    const output = { code, err, out, signal }

    this.spawnComplete(id, output)

    if (err && exit) {
      process.exit(code)
    }

    return output
  }

  public static spawnComplete(
    id: string[], arg: SpawnReturn
  ): SpawnReturn {
    return arg
  }

  public static async spawnTerminal(
    arg: SpawnTerminalArg
  ): Promise<SpawnTerminalReturn> {
    const cols = process.stdout.columns
    const rows = process.stdout.rows

    const { args = [], command, cwd, env } = arg

    const pty = spawn(command, args, {
      cols,
      cwd,
      env,
      name: "xterm-color",
      rows,
    })

    let out = ""

    pty.on("data", (data): void => {
      out += data
    })

    return new Promise((resolve): void => {
      pty.on("exit", (code, signal): void =>
        resolve({ code, out, signal })
      )
    })
  }
}
