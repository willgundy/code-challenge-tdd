// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
    getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });


// skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

test('addExclamationPoints() should add three exclamation points to a string', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected, 'Should return !!! after bunny rabbit');

    const expected2 = 'hooray!!!';

    const actual2 = addExclamationPoints('hooray');

    expect.equal(actual2, expected2, 'Should return !!! after hooray');

    const expected3 = 'ice cream!!!';

    const actual3 = addExclamationPoints('ice cream');

    expect.equal(actual3, expected3, 'Should return !!! after ice cream');
});

