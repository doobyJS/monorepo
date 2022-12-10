var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import dooby from "./index.js";
const db = {};
const Dooby = dooby({
    adapter: {
        allKeys() {
            return Object.keys(db);
        },
        get(k) {
            // @ts-ignore PsuedoCode
            return db[k];
        },
        set(k, v) {
            // @ts-ignore PsuedoCode
            db[k] = v;
            // @ts-ignore PsuedoCode
            return db[k];
        }
    }
});
let User = class User {
    // @ts-ignore
    static username;
    static stringify() {
        return this.username;
    }
    static fromString() {
        return this;
    }
};
__decorate([
    Dooby.$.field({ name: "username", type: String })
], User, "username", void 0);
User = __decorate([
    Dooby.$.model({ __id: Number, name: "user" })
], User);
