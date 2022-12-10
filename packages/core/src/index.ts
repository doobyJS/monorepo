try {
    window
    throw new Error("Safety error: Dooby should not be run on the client")
} catch(e) {
    if(!(e instanceof ReferenceError)) throw new Error("Safety error: Dooby should not be run on the client")
}
// Type For constructor
abstract class ABSModel {
    abstract stringify(): string
    abstract fromString(): any
}

export type DoobyEnum = {
    [K in string]: string | number | boolean
}
export type PropertyType = Function | DoobyEnum

export type ModelConfig = {
    __id: Function,
    name: string
}

export type Property = {
    name: string,
    type: Function
}

export type Model<T extends ABSModel> = {
    name: string,
    properties: Property[],
    handle: T
}

export type ValueConfig = {
    name?: string,
    type: PropertyType
}

export type MaybePromise<T = any> = Promise<T> | T


export type Adapter = {
    get<T>(key: string): MaybePromise<T>,
    set<T>(key: string, value: T): MaybePromise<T>,
    allKeys(): MaybePromise,
}

export type DoobyConfig = {
    adapter: Adapter,
}

type PropertyDecorator = (target: Object, propertyKey: string, parameterIndex: number) => void
type ClassDecorator = <C extends ABSModel>(C: C) => void

export type Decoorators = {
    model(data: ModelConfig): ClassDecorator,
    field(data: Property): PropertyDecorator
}

export type Dooby = {
    /**
     * @description @Dooby.$.model/@Dooby.$.field
     */
    $: Decoorators
}

import { writable } from "svelte/store"
import createDecorators from "./decs.js"

export default function dooby(config: DoobyConfig): Dooby {
    const models = writable<Record<string, Model<any>>>({})
    models.subscribe((args) => {
        console.log({ index: args })
    })
    return {
        $: createDecorators(models)
    }
}