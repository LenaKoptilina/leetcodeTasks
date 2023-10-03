const {expect} = require('chai');
let fs = require('node:fs');
let vm = require('node:vm');
let code = fs.readFileSync('./secondTask.js');
vm.runInThisContext(code)


describe('Second Task tests', function () {
    it('should return all small letters for words <=2 letters and first capitalized letter for words > 2 letters', function () {
    expect(capitalizeTitle("i lOve leetcode")).to.be.equal('i Love Leetcode');
    });

    it('should return all small letters for words <=2 letters and first capitalized letter for words > 2 letters', function () {
    expect(capitalizeTitle("I LOVE LEETCODE")).to.be.equal('i Love Leetcode');
    });

    it('should return all small letters for words <=2 letters and first capitalized letter for words > 2 letters', function () {
        expect(capitalizeTitle("i love IN leetcode")).to.be.equal('i Love in Leetcode');
    });
});
