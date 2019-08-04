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
