const {expect} = require('chai');
let fs = require('node:fs');
let vm = require('node:vm');
let code = fs.readFileSync('./tasks/thirdTask.js');
vm.runInThisContext(code)


describe('Third Task tests', function () {
    it('should return [3,-2,1,-5,2,-4]', function () {
        expect(rearrangeArray([3, 1, -2, -5, 2, -4])).deep.equal([3,-2,1,-5,2,-4]);
    });

    it('should return [1,-1]', function () {
        expect(rearrangeArray([-1,1])).deep.equal([1,-1]);
    });

    it('should return [2, -1, 3, -1, 5, -2]', function () {
        expect(rearrangeArray([-1, -1, 2, 3, -2, 5])).deep.equal([2, -1, 3, -1, 5, -2]);
    });
});