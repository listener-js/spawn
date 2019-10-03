[@listener-js/spawn](../README.md) › [Globals](../globals.md) › ["spawn"](../modules/_spawn_.md) › [Spawn](_spawn_.spawn.md)

# Class: Spawn

## Hierarchy

* **Spawn**

## Index

### Methods

* [command](_spawn_.spawn.md#command)
* [listenerJoins](_spawn_.spawn.md#private-listenerjoins)
* [log](_spawn_.spawn.md#private-log)
* [spawnComplete](_spawn_.spawn.md#spawncomplete)
* [spawnTerminal](_spawn_.spawn.md#spawnterminal)

## Methods

###  command

▸ **command**(`lid`: string[], `arg`: [SpawnArg](../interfaces/_types_.spawnarg.md)): *Promise‹[SpawnReturn](../interfaces/_types_.spawnreturn.md)›*

Defined in spawn.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`arg` | [SpawnArg](../interfaces/_types_.spawnarg.md) |

**Returns:** *Promise‹[SpawnReturn](../interfaces/_types_.spawnreturn.md)›*

___

### `Private` listenerJoins

▸ **listenerJoins**(`lid`: string[]): *ListenerJoins*

Defined in spawn.ts:100

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |

**Returns:** *ListenerJoins*

___

### `Private` log

▸ **log**(): *void*

Defined in spawn.ts:13

**Returns:** *void*

___

###  spawnComplete

▸ **spawnComplete**(`lid`: string[], `arg`: [SpawnArg](../interfaces/_types_.spawnarg.md), `output`: [SpawnReturn](../interfaces/_types_.spawnreturn.md)): *[[SpawnArg](../interfaces/_types_.spawnarg.md), [SpawnReturn](../interfaces/_types_.spawnreturn.md)]*

Defined in spawn.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`arg` | [SpawnArg](../interfaces/_types_.spawnarg.md) |
`output` | [SpawnReturn](../interfaces/_types_.spawnreturn.md) |

**Returns:** *[[SpawnArg](../interfaces/_types_.spawnarg.md), [SpawnReturn](../interfaces/_types_.spawnreturn.md)]*

___

###  spawnTerminal

▸ **spawnTerminal**(`arg`: [SpawnTerminalArg](../interfaces/_types_.spawnterminalarg.md)): *Promise‹[SpawnTerminalReturn](../interfaces/_types_.spawnterminalreturn.md)›*

Defined in spawn.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [SpawnTerminalArg](../interfaces/_types_.spawnterminalarg.md) |

**Returns:** *Promise‹[SpawnTerminalReturn](../interfaces/_types_.spawnterminalreturn.md)›*
