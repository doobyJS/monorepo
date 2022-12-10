import { Writable, writable, get } from "svelte/store";
import { ABSModel, Decoorators, Model, Property } from ".";
import 'reflect-metadata'

export default function createDecorators(models: Writable<Record<string, Model<any>>>): Decoorators {
    // @ts-ignore
    const temp = writable<{ [K in Function]: Property[] }>({})
    return {
        model: (data) => {
            return (a) => {
                Reflect.defineMetadata("dooby:name", data.name, a)
                models.update(m => {
                    m[data.name] = {
                        ...data,
                        // @ts-ignore
                        properties: get(temp)[a],
                        handle: a
                    }
                    console.log(m[data.name])
                    temp.update(t => {
                        // @ts-ignore
                        delete t[a]
                        return t
                    })
                    return m
                })
            }
        },
        field: (data) => {
            return (target, key, index) => {
                temp.update(t => {
                    // @ts-ignore
                    if(t[target]) {
                        // @ts-ignore
                        t[target].push(data)
                    } else {
                        // @ts-ignore
                        t[target] = [data]
                    }
                    return t
                })
            }
        }
    }
}