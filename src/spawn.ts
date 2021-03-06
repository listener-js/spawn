import { ListenerJoins } from "@listener-js/join"
import log from "@listener-js/log"
import { spawn as spawnPty } from "node-pty"

import {
  SpawnArg,
  SpawnReturn,
  SpawnTerminalArg,
  SpawnTerminalReturn,
} from "./types"

export class Spawn {
  private log: typeof log.log = (): void => {}

  public async command(
    lid: string[],
    arg: SpawnArg
  ): Promise<SpawnReturn> {
    const { exit, json } = arg

    const spawnOut = await this.spawnTerminal(arg)

    const { code, signal } = spawnOut

    const err = code > 0

    let { out } = spawnOut

    if (!err && json) {
      out = JSON.parse(out)
    }

    const output = { code, err, out, signal }

    this.spawnComplete(lid, arg, output)

    if (err && exit) {
      process.exit(code)
    }

    return output
  }

  public spawnComplete(
    lid: string[],
    arg: SpawnArg,
    output: SpawnReturn
  ): [SpawnArg, SpawnReturn] {
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

    this.log(lid, level, message.join("\n"))

    return [arg, output]
  }

  public async spawnTerminal(
    arg: SpawnTerminalArg
  ): Promise<SpawnTerminalReturn> {
    const cols = process.stdout.columns
    const rows = process.stdout.rows

    const { args = [] } = arg
    arg.args = Array.isArray(args) ? args : [args]

    const { command, cwd, env } = arg

    const pty = spawnPty(command, args, {
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

  private listenerJoins(lid: string[]): ListenerJoins {
    return [[["log.log"]]]
  }
}

export default new Spawn()
