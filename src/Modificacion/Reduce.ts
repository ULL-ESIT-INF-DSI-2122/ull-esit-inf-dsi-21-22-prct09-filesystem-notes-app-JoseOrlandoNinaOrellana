/**
 * Clase Reduce que emula el reduce de un array
 */
export abstract class Reduce {
    /**
     * Constructor
     * @param array Array de números
     * @param result Resultado del reduce
     */
    constructor(protected array: number[], protected result: number = 0) {}

    /**
     * Método abstracto reduce
     */
    protected abstract reduce(): number

    /**
     * Método abstracto printresult
     * @returns Mensaje indicando el resultado del reduce
     */
    protected abstract printResult(): string

    protected init() {}

    protected afterReduce() {}

    /**
     * Métod run
     * @returns Mensaje con el resultado
     */
    public run(): string {
        this.init();
        this.reduce();
        this.afterReduce();
        return this.printResult();
    }
}