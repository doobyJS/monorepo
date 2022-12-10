


# Main idea

`db.ts`
```ts
import dooby from "@dooby/dooby";
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
class User {
    @Dooby.$.field({ name: "username", type: String }) static username: any /* type here doesnt really matter since it will only be used to create the model */
    @Dooby.$.field({ name: "posts", type: String, array: true, reference: { name: "Ref-post-user" /*must be the same as name from post*/, from: "user", field: "%id" } }) static posts: any
    
    static stringify() {
        return this.username
    }

    static fromString() {
        return this
    }
}

@Dooby.$.model({ name: "post" })
class Post {
    @Dooby.$.field({ name: "author", type: String, reference: { name: "Ref-post-user" /*must be the same as name from user*/, from: "user", field: "%id" } }) static author: any
    @Dooby.$.field({ name: "body", type: String }) static body: any
    
    static stringify() {
        return this.body
    }

    static fromString() {
        return this
    }
}

//! DO NOT EXPORT THE CLASSES!

export default Dooby.createDB()
```

`route.ts`
```ts
import db from './db.js'
db.
```