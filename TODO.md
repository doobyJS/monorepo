1. Replit adapter
1. Base Data
1. Create docs
1. Release: 0.9.0a
1. Arrays
1. Release 0.9.0b 
1. Relashionships with reference value
1. Release 1.0.0
1. More adapters?

# Main idea

`db.ts`
```ts
import dooby, { ABSModel } from "@dooby/dooby";
// You do not require ABSModel but it gives you better support in code editors.
import adapter from "@dooby/adapter-???";

const Dooby = dooby({
    adapter: adapter(0, "", [], {}, () => {}),
    id: {
        generate: () => {
            // id cannot start with ?
            return nanoid(10)
        },
        // if false ids are modelname:id else objects have a _model property
        global: true
    }
})

@Dooby.$.model({ name: "user" })
class User extends ABSModel {
    @Dooby.$.field({ name: "username", type: String }) static username: any /* type here doesnt really matter since it will only be used to create the model */
    @Dooby.$.field({ name: "posts", type: String, array: true, reference: { name: "Ref-post-user" /*must be the same as name from post*/, from: "user", field: "%id" } }) static posts: any
    
    static stringify(): string {
        return JSON.stringify(this)
    }

    static fromString(string: string): any {
        return JSON.parse(string)
    }
}

@Dooby.$.model({ name: "post" })
class Post extends ABSModel {
    @Dooby.$.field({ name: "author", type: String, reference: { name: "Ref-post-user" /*must be the same as name from user*/, from: "user", field: "%id" } }) static author: any
    @Dooby.$.field({ name: "body", type: String }) static body: any
    
    static stringify(): string {
        return JSON.stringify(this)
    }

    static fromString(string: string): any {
        return JSON.parse(string)
    }
}

//! DO NOT EXPORT THE CLASSES!

export default Dooby.createDB()
```

`route.ts`
```ts
import db from './db.js'
await db.stuffhappens()
```