const {expect} = require('chai');
let fs = require('node:fs');
let vm = require('node:vm');
let code = fs.readFileSync('./tasks/fourthTask.js');
vm.runInThisContext(code)


describe('Fourth Task tests', function () {
    it('should return [10,8]', function () {
        expect(findLonely([10, 6, 5, 8])).to.have.deep.members([10, 8]);
    });

    it('should return [1, 5]', function () {
        expect(findLonely([1, 3, 5, 3])).to.have.deep.members([1, 5]);
    });

    it('should return [7, 5]', function () {
        expect(findLonely([1, 1, 1, 5, 2, 7, 3])).to.have.deep.members([7, 5]);
    });
});
