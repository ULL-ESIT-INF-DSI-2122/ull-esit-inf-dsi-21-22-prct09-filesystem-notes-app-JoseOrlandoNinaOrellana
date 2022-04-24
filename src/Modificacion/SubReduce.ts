import { Reduce } from './Reduce'

/**
 * Clase SubReduce que el método reduce sumando
 */
export class SubReduce extends Reduce {
    /**
     * Contructor
     * @param array Array de números 
     */
    constructor(array: number[]) {
        super(array);
    }

    /**
     * Método reduce
     * @returns El resultado del reduce
     */
    protected reduce(): number {
        let result = 2;

        this.array.forEach((n: number) => {
            result -= n;
        });

        this.result = result;
        return result;
    }

    /**
     * Método printResult
     * @returns Mensaje indicando el resultado
     */
    protected printResult(): string {
        return 'The result of sub reduce is [' + this.array + '] = ' + this.result;
    }
}