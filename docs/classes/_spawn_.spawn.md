> **[@listener-js/spawn](../README.md)**

[Globals](../globals.md) / ["spawn"](../modules/_spawn_.md) / [Spawn](_spawn_.spawn.md) /

# Class: Spawn

## Hierarchy

* **Spawn**

## Index

### Properties

* [listenerInstances](_spawn_.spawn.md#listenerinstances)
* [listeners](_spawn_.spawn.md#listeners)

### Methods

* [command](_spawn_.spawn.md#command)
* [log](_spawn_.spawn.md#private-log)
* [spawnComplete](_spawn_.spawn.md#spawncomplete)
* [spawnTerminal](_spawn_.spawn.md#spawnterminal)

## Properties

###  listenerInstances

• **listenerInstances**: *string[]* =  ["log.log"]

Defined in spawn.ts:15

___

###  listeners

• **listeners**: *string[]* =  ["command", "spawnComplete"]

Defined in spawn.ts:13

## Methods

###  command

▸ **command**(`id`: string[], `arg`: [SpawnArg](../interfaces/_types_.spawnarg.md)): *`Promise<SpawnReturn>`*

Defined in spawn.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |
`arg` | [SpawnArg](../interfaces/_types_.spawnarg.md) |

**Returns:** *`Promise<SpawnReturn>`*

___

### `Private` log

▸ **log**(): *void*

Defined in spawn.ts:17

**Returns:** *void*

___

###  spawnComplete

▸ **spawnComplete**(`id`: string[], `arg`: [SpawnArg](../interfaces/_types_.spawnarg.md), `output`: [SpawnReturn](../interfaces/_types_.spawnreturn.md)): *[[SpawnArg](../interfaces/_types_.spawnarg.md), [SpawnReturn](../interfaces/_types_.spawnreturn.md)]*

Defined in spawn.ts:45

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

Defined in spawn.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [SpawnTerminalArg](../interfaces/_types_.spawnterminalarg.md) |

**Returns:** *`Promise<SpawnTerminalReturn>`*