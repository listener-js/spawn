import { Listener } from "@listener-js/listener"
import { Log } from "@listener-js/log"
import { spawn } from "node-pty"

import {
  SpawnArg,
  SpawnReturn,
  SpawnTerminalArg,
  SpawnTerminalReturn
} from "./types"

let log: typeof Log.log = (): void => {}

export class Spawn {

  public static listeners: string[] = ["spawn", "spawnComplete"]

  public static listen(listener: Listener): void {
    log = listener.instances.Log.log
  }

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

    this.spawnComplete(id, arg, output)

    if (err && exit) {
      process.exit(code)
    }

    return output
  }

  public static spawnComplete(
    id: string[], arg: SpawnArg, output: SpawnReturn
  ): [ SpawnArg, SpawnReturn ] {
    const { code, out } = output
    const level = code > 0 ? "error" : "debug"

    const message = [
      `\ncommand: ${arg.command}${
        arg.args ? " " + arg.args.join(" ") : ""
      }`,
      `code: ${code}`,
      `cwd: ${arg.cwd || process.cwd()}`,
      `\n${out}`,
    ]

    log(id, level, message.join("\n"))
    
    return [ arg, output ]
  }

  public static async spawnTerminal(
    arg: SpawnTerminalArg
  ): Promise<SpawnTerminalReturn> {
    const cols = process.stdout.columns
    const rows = process.stdout.rows

    if (arg.args) {
      arg.args = Array.isArray(arg.args) ?
        arg.args :
        [arg.args]
    }

    const { args = [], command, cwd, env } = arg

    const pty = spawn(
      command,
      args,
      {
        cols,
        cwd,
        env,
        name: "xterm-color",
        rows,
      }
    )

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
