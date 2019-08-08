> **[@listener-js/spawn](../README.md)**

[Globals](../globals.md) / ["spawn"](../modules/_spawn_.md) / [Spawn](_spawn_.spawn.md) /

# Class: Spawn

## Hierarchy

* **Spawn**

## Index

### Properties

* [listeners](_spawn_.spawn.md#listeners)

### Methods

* [command](_spawn_.spawn.md#command)
* [listen](_spawn_.spawn.md#listen)
* [log](_spawn_.spawn.md#private-log)
* [spawnComplete](_spawn_.spawn.md#spawncomplete)
* [spawnTerminal](_spawn_.spawn.md#spawnterminal)

## Properties

###  listeners

• **listeners**: *string[]* =  ["command", "spawnComplete"]

Defined in spawn.ts:14

## Methods

###  command

▸ **command**(`id`: string[], `arg`: [SpawnArg](../interfaces/_types_.spawnarg.md)): *`Promise<SpawnReturn>`*

Defined in spawn.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`arg` | [SpawnArg](../interfaces/_types_.spawnarg.md) |

**Returns:** *`Promise<SpawnReturn>`*

___

###  listen

▸ **listen**(`instanceId`: string, `listener`: `Listener`): *void*

Defined in spawn.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |
`listener` | `Listener` |

**Returns:** *void*

___

### `Private` log

▸ **log**(): *void*

Defined in spawn.ts:16

**Returns:** *void*

___

###  spawnComplete

▸ **spawnComplete**(`id`: string[], `arg`: [SpawnArg](../interfaces/_types_.spawnarg.md), `output`: [SpawnReturn](../interfaces/_types_.spawnreturn.md)): *[[SpawnArg](../interfaces/_types_.spawnarg.md), [SpawnReturn](../interfaces/_types_.spawnreturn.md)]*

Defined in spawn.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`arg` | [SpawnArg](../interfaces/_types_.spawnarg.md) |
`output` | [SpawnReturn](../interfaces/_types_.spawnreturn.md) |

**Returns:** *[[SpawnArg](../interfaces/_types_.spawnarg.md), [SpawnReturn](../interfaces/_types_.spawnreturn.md)]*

___

###  spawnTerminal

▸ **spawnTerminal**(`arg`: [SpawnTerminalArg](../interfaces/_types_.spawnterminalarg.md)): *`Promise<SpawnTerminalReturn>`*

Defined in spawn.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [SpawnTerminalArg](../interfaces/_types_.spawnterminalarg.md) |

**Returns:** *`Promise<SpawnTerminalReturn>`*