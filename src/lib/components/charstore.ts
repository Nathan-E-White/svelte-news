import {readable, writable} from 'svelte/store';
import {NotImplementedError} from "./notImplementedError";
import {SvelteComponent} from "svelte";

export interface ICharacterReader {
    read(): string;
    update(): void;
}

export class CharacterReader extends SvelteComponent implements ICharacterReader {
    get readable() {
        return this._readable;
    }

    set readable(value) {
        this._readable = value;
    }
    private _text: string;
    private _index: number;
    private _readable: any;

    constructor(text: string) {
        super({target: document.body});
        this._text = text;
        this._index = 0;

        this._readable = readable(this._text, set => {
            set(this._text);
        });
    }

    read(): string {
        if (this._index < this._text.length) {
            return this._text[this._index++];
        }
        return "";
    }

    update(): void {
        // TODO: Implement
        throw new NotImplementedError("update");
    }

    get index(): number {
        return this._index;
    }

    get text(): string {
        return this._text;
    }

    get length(): number {
        return this._text.length;
    }

    set index(value: number) {
        this._index = value;
    }

    set text(value: string) {
        this._text = value;
    }

}

export class CharacterWriter {
    private _text: string;
    private _writeable: any;

    constructor(text: string) {
        this._text = text;
    }

    write(character: string): void {
        this._text += character;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }
}


export interface ICharacterSubscription {
    subscribe: (callback: (value: string) => void) => void;
    unsubscribe: () => void;
    update: (value: string) => void;
}

export class CharacterSubscription implements ICharacterSubscription {
    subscribe(callback: (value: string) => void): void {
        // TODO: Implement
        throw new NotImplementedError("Not implemented");
    }

    unsubscribe(): void {
        // TODO: Implement
        throw new NotImplementedError("Not implemented");
    }

    update(value: string): void {
        // TODO: Implement
        throw new NotImplementedError("Not implemented");
    }

    //implements AsyncIterableIterator<string> {

}

export class CharacterStore {
    constructor() {
        this.characters = writable([]);
        this.characters.subscribe((val: any) => {
            console.log("characters changed", val);
        });

        this.characters.set(["a", "b", "c"]);
    }

    characters: any;
}
