declare abstract class ABSModel {
    abstract stringify(): string;
    abstract fromString(): any;
}
export declare type DoobyEnum = {
    [K in string]: string | number | boolean;
};
export declare type PropertyType = Function | DoobyEnum;
export declare type ModelConfig = {
    __id: Function;
    name: string;
};
export declare type Property = {
    name: string;
    type: Function;
};
export declare type Model<T extends ABSModel> = {
    name: string;
    properties: Property[];
    handle: T;
};
export declare type ValueConfig = {
    name?: string;
    type: PropertyType;
};
export declare type MaybePromise<T = any> = Promise<T> | T;
export declare type Adapter = {
    get<T>(key: string): MaybePromise<T>;
    set<T>(key: string, value: T): MaybePromise<T>;
    allKeys(): MaybePromise;
};
export declare type DoobyConfig = {
    adapter: Adapter;
};
declare type PropertyDecorator = (target: Object, propertyKey: string, parameterIndex: number) => void;
declare type ClassDecorator = <C extends ABSModel>(C: C) => void;
export declare type Decoorators = {
    model(data: ModelConfig): ClassDecorator;
    field(data: Property): PropertyDecorator;
};
export declare type Dooby = {
    /**
     * @description @Dooby.$.model/@Dooby.$.field
     */
    $: Decoorators;
};
export default function dooby(config: DoobyConfig): Dooby;
export {};
