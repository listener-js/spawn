import { listener } from "@listener-js/listener"
import { Log } from "@listener-js/log"
import { Spawn } from "../"

listener({ Log, Spawn }, { logAll: true })

test("defined", (): void => {
  expect(Spawn).not.toBeUndefined()
})

test("spawn command", async (): Promise<void> => {
  const out = await Spawn.spawn(["test"], {
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
  const out = await Spawn.spawn(["test"], { command: "pwd" })

  expect(out).toMatchObject({
    code: 0,
    err: false,
    out: `${process.cwd()}\r\n`,
    signal: 0,
  })
})
