import { Writable } from "svelte/store";
import { Decoorators, Model } from ".";

export default function createDecorators(models: Writable<Record<string, Model<any>>>): Decoorators {
    return {
        model: (data) => {
            return (a) => {
                console.log(data)
                models.update(m => {
                    m[data.name] = {
                        ...data,
                        properties: [],
                        handle: a
                    }
                    return m
                })
            }
        },
        field: (data) => {
            return (a, name, index) => {
                console.log(a, name, index)
            }
        }
    }
}