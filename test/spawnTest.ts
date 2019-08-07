import { listener } from "@listener-js/listener"
import { Log } from "@listener-js/log"
import { spawn } from "../"

listener({ Log, spawn }, { logAll: true })

test("defined", (): void => {
  expect(spawn).not.toBeUndefined()
})

test("spawn command", async (): Promise<void> => {
  const out = await spawn.command(["test"], {
    args: ["hi"],
    command: "echo"
  })

  expect(out).toMatchObject({
    code: 0,
    err: false,
    out: "hi\r\n",
    signal: 0,
  })
})

test("spawn command with options", async (): Promise<void> => {
  const out = await spawn.command(
    ["test"], { command: "pwd" }
  )

  expect(out).toMatchObject({
    code: 0,
    err: false,
    out: `${process.cwd()}\r\n`,
    signal: 0,
  })
})
