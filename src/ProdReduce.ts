import { Reduce } from './Reduce'

/**
 * Clase ProdReduce que el método reduce mult
 */
export class ProdReduce extends Reduce {
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
        let result = 1;

        this.array.forEach((n: number) => {
            result *= n;
        });

        this.result = result;
        return result;
    }

    /**
     * Método printResult
     * @returns Mensaje indicando el resultado
     */
    protected printResult(): string {
        return 'The result of prod reduce is [' + this.array + '] = ' + this.result;
    }
}