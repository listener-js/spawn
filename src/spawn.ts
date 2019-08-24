import { log } from "@listener-js/log"
import { spawn as spawnPty } from "node-pty"

import {
  SpawnArg,
  SpawnReturn,
  SpawnTerminalArg,
  SpawnTerminalReturn
} from "./types"

export class Spawn {

  public listeners = ["command", "spawnComplete"]

  public instances = ["log.log"]

  private log: typeof log.log = (): void => {}

  public async command(
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

  public spawnComplete(
    id: string[], arg: SpawnArg, output: SpawnReturn
  ): [ SpawnArg, SpawnReturn ] {
    const { args, command, cwd } = arg
    const { code, out } = output

    const level = code > 0 ? "error" : "debug"

    const message = [
      `\ncommand: ${command}${
        args ? " " + args.join(" ") : ""
      }`,
      `code: ${code}`,
      `cwd: ${cwd || process.cwd()}`,
      `\n${out}`,
    ]

    this.log(id, level, message.join("\n"))
    
    return [ arg, output ]
  }

  public async spawnTerminal(
    arg: SpawnTerminalArg
  ): Promise<SpawnTerminalReturn> {
    const cols = process.stdout.columns
    const rows = process.stdout.rows

    const { args = [] } = arg
    arg.args = Array.isArray(args) ? args : [args]

    const { command, cwd, env } = arg

    const pty = spawnPty(
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

export const spawn = new Spawn()
