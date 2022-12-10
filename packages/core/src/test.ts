import dooby from "./index.js";

const db = {  }

const Dooby = dooby({
    adapter: {
        allKeys() {
            return Object.keys(db)
        },
        get(k) {
            // @ts-ignore PsuedoCode
            return db[k]
        },
        set(k, v) {
            // @ts-ignore PsuedoCode
            db[k] = v
            // @ts-ignore PsuedoCode
            return db[k]
        }
    }
})


@Dooby.$.model({ __id: Number, name: "user" })
class User {
    @Dooby.$.field({ name: "username", type: String }) static username: any
    
    static stringify() {
        return this.username
    }

    static fromString() {
        return this
    }
}