import { Writable } from "svelte/store";
import { Decoorators, Model } from ".";
export default function createDecorators(models: Writable<Record<string, Model<any>>>): Decoorators;
