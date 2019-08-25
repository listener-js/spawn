> **[@listener-js/spawn](README.md)**

[Globals](globals.md) /

# @listener-js/spawn

Listener child process spawner

![spawn](media/spawn.gif)

## Install

```bash
npm install @listener-js/listener @listener-js/spawn
```

## Setup

```ts
import { listener } from "@listener-js/listener"
import { spawn } from "@listener-js/spawn"

listener({ spawn })
```

## Usage

```js
await spawn.command([], {
  args: ["hi"],
  command: "echo",
})
```