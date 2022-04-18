import 'mocha';
import { expect } from 'chai';
import { AddReduce } from '../src/AddReduce';
import { ProdReduce } from '../src/ProdReduce';
import { SubReduce } from '../src/SubReduce';
import { DivReduce } from '../src/DivReduce';

describe('AddReduce test', () => {

    let add = new AddReduce([1, 2, 3, 4, 5, 6]);

    it('Instance AddReduce test', () => {
        expect(add).instanceOf(AddReduce);
    });

    it('Run Add test', () => {
        expect(add.run()).to.be.equal('The result of add reduce is [1,2,3,4,5,6] = 21');
    });

    let prod = new ProdReduce([1, 2, 3, 4, 5, 6]);

    it('Instance ProdReduce test', () => {
        expect(prod).instanceOf(ProdReduce);
    });

    it('Run Prod test', () => {
        expect(prod.run()).to.be.equal('The result of prod reduce is [1,2,3,4,5,6] = 720');
    });

    let sub = new SubReduce([1, 2, 3, 4, 5, 6]);

    it('Instance SubReduce test', () => {
        expect(sub).instanceOf(SubReduce);
    });

    it('Run Sub test', () => {
        expect(sub.run()).to.be.equal('The result of sub reduce is [1,2,3,4,5,6] = -19');
    });

    let div = new DivReduce([1, 2, 3, 4, 5, 6]);

    it('Instance DivReduce test', () => {
        expect(div).instanceOf(DivReduce);
    });

    it('Run Div test', () => {
        expect(div.run()).to.be.equal('The result of div reduce is [1,2,3,4,5,6] = 0.001388888888888889');
    });
});