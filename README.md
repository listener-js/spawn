# spawn

Listener child process spawner

![spawn](media/spawn.gif)

## Install

```bash
npm install @listener-js/listener @listener-js/spawn
```

## Setup

```ts
import { listener } from "@listener-js/listener"
import { Spawn } from "@listener-js/spawn"

listener({ Spawn })
```

## Usage

```js
await Spawn.spawn([], {
  args: ["hi"],
  command: "echo",
})
```
