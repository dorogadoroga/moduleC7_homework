import { revertString } from "./C7.js";

describe('test for revertString function', () => {
    const invalidArgs = [null, -1, true, false, undefined, NaN, ['a', 'b'], {}]
    it('invalid type of argument', () => {
        invalidArgs.forEach(elem => expect(revertString(elem)).toBe("Неверный тип аргумента"));
    }),
    it('valid type of argument', () => {
        expect(revertString('abcd')).toBe('dcba');
    });
});
