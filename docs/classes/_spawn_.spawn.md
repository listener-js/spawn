> **[@listener-js/spawn](../README.md)**

[Globals](../globals.md) / ["spawn"](../modules/_spawn_.md) / [Spawn](_spawn_.spawn.md) /

# Class: Spawn

## Hierarchy

* **Spawn**

## Index

### Properties

* [listeners](_spawn_.spawn.md#static-listeners)

### Methods

* [spawn](_spawn_.spawn.md#static-spawn)
* [spawnComplete](_spawn_.spawn.md#static-spawncomplete)
* [spawnTerminal](_spawn_.spawn.md#static-spawnterminal)

## Properties

### `Static` listeners

▪ **listeners**: *string[]* =  ["spawn", "spawnComplete"]

Defined in spawn.ts:35

## Methods

### `Static` spawn

▸ **spawn**(`id`: string[], `arg`: [SpawnArg](../interfaces/_spawn_.spawnarg.md)): *`Promise<SpawnReturn>`*

Defined in spawn.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`arg` | [SpawnArg](../interfaces/_spawn_.spawnarg.md) |

**Returns:** *`Promise<SpawnReturn>`*

___

### `Static` spawnComplete

▸ **spawnComplete**(`id`: string[], `arg`: [SpawnReturn](../interfaces/_spawn_.spawnreturn.md)): *[SpawnReturn](../interfaces/_spawn_.spawnreturn.md)*

Defined in spawn.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`arg` | [SpawnReturn](../interfaces/_spawn_.spawnreturn.md) |

**Returns:** *[SpawnReturn](../interfaces/_spawn_.spawnreturn.md)*

___

### `Static` spawnTerminal

▸ **spawnTerminal**(`arg`: [SpawnTerminalArg](../interfaces/_spawn_.spawnterminalarg.md)): *`Promise<SpawnTerminalReturn>`*

Defined in spawn.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [SpawnTerminalArg](../interfaces/_spawn_.spawnterminalarg.md) |

**Returns:** *`Promise<SpawnTerminalReturn>`*