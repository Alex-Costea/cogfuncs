export default class Link<T extends string = string> {
    readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    toString(): string {
        return this.value;
    }
}
