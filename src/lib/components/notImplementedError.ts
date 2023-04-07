import type {INotImplementedError} from "./INotImplementedError";

export class NotImplementedError extends Error implements INotImplementedError {
    message: string;

    constructor(message: string) {
        super(message);
        this.message = message;
    }
}