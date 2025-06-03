export default class ConceptLink<T extends string = string> {
    readonly value: T;
    readonly type = "Link"

    constructor(value: T) {
        this.value = value;
    }

    toString(): string {
        return this.value;
    }
}
