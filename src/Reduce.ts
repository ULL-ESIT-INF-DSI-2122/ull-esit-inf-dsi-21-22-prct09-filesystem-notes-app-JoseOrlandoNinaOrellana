export abstract class Reduce {
    constructor(protected array: number[], protected result: number = 0) {}

    protected abstract reduce(): number

    protected abstract printResult(): string

    protected init() {}

    protected afterReduce() {}

    public run(): string {
        this.init();
        this.reduce();
        this.afterReduce();
        return this.printResult();
    }
}