import { Reduce } from './Reduce'

/**
 * Clase AddReduce que el método reduce sumando
 */
export class AddReduce extends Reduce {
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
        let result = 0;

        this.array.forEach((n: number) => {
            result += n;
        });

        this.result = result;
        return result;
    }

    /**
     * Método printResult
     * @returns Mensaje indicando el resultado
     */
    protected printResult(): string {
        return 'The result of add reduce is [' + this.array + '] = ' + this.result;
    }
}