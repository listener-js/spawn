> **[@listener-js/spawn](../README.md)**

[Globals](../globals.md) / ["spawn"](../modules/_spawn_.md) / [Spawn](_spawn_.spawn.md) /

# Class: Spawn

## Hierarchy

* **Spawn**

## Index

### Properties

* [listeners](_spawn_.spawn.md#static-listeners)

### Methods

* [listen](_spawn_.spawn.md#static-listen)
* [spawn](_spawn_.spawn.md#static-spawn)
* [spawnComplete](_spawn_.spawn.md#static-spawncomplete)
* [spawnTerminal](_spawn_.spawn.md#static-spawnterminal)

## Properties

### `Static` listeners

▪ **listeners**: *string[]* =  ["spawn", "spawnComplete"]

Defined in spawn.ts:16

## Methods

### `Static` listen

▸ **listen**(`listener`: `Listener`): *void*

Defined in spawn.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`listener` | `Listener` |

**Returns:** *void*

___

### `Static` spawn

▸ **spawn**(`id`: string[], `arg`: [SpawnArg](../interfaces/_types_.spawnarg.md)): *`Promise<SpawnReturn>`*

Defined in spawn.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`arg` | [SpawnArg](../interfaces/_types_.spawnarg.md) |

**Returns:** *`Promise<SpawnReturn>`*

___

### `Static` spawnComplete

▸ **spawnComplete**(`id`: string[], `arg`: [SpawnArg](../interfaces/_types_.spawnarg.md), `output`: [SpawnReturn](../interfaces/_types_.spawnreturn.md)): *[[SpawnArg](../interfaces/_types_.spawnarg.md), [SpawnReturn](../interfaces/_types_.spawnreturn.md)]*

Defined in spawn.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`arg` | [SpawnArg](../interfaces/_types_.spawnarg.md) |
`output` | [SpawnReturn](../interfaces/_types_.spawnreturn.md) |

**Returns:** *[[SpawnArg](../interfaces/_types_.spawnarg.md), [SpawnReturn](../interfaces/_types_.spawnreturn.md)]*

___

### `Static` spawnTerminal

▸ **spawnTerminal**(`arg`: [SpawnTerminalArg](../interfaces/_types_.spawnterminalarg.md)): *`Promise<SpawnTerminalReturn>`*

Defined in spawn.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [SpawnTerminalArg](../interfaces/_types_.spawnterminalarg.md) |

**Returns:** *`Promise<SpawnTerminalReturn>`*