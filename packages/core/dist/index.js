try {
    window;
    throw new Error("Safety error: Dooby should not be run on the client");
}
catch (e) {
    if (!(e instanceof ReferenceError))
        throw new Error("Safety error: Dooby should not be run on the client");
}
// Type For constructor
class ABSModel {
}
import { writable } from "svelte/store";
import createDecorators from "./decs.js";
export default function dooby(config) {
    const models = writable({});
    models.subscribe((args) => {
        console.log({ index: args });
    });
    return {
        $: createDecorators(models)
    };
}
