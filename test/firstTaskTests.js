const {expect} = require('chai');
let fs = require('node:fs');
let vm = require('node:vm');
let code = fs.readFileSync('./firstTask.js');
vm.runInThisContext(code)


describe('First Task tests', function () {
    it('should return ["abc","def","ghi"]', function () {
        expect(divideString('abcdefghi', 3, 'x')).deep.equal(["abc", "def", "ghi"]);
    });

    it('should return ["abc","def","ghi","jxx"]', function () {
        expect(divideString('abcdefghij', 3, 'x')).deep.equal(["abc", "def", "ghi", "jxx"]);
    });
});