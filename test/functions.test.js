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

test('multiplyBySeven() should multiply a number by 7', (expect) => {
    const expected = 14;

    const actual = multiplyBySeven(2);

    expect.equal(actual, expected, '2 times 7 is 14');

    const expected2 = 63;

    const actual2 = multiplyBySeven(9);

    expect.equal(actual2, expected2, '9 times 7 is 63');

    const expected3 = 77;

    const actual3 = multiplyBySeven(11);

    expect.equal(actual3, expected3, '11 times 7 is 77');
});

test('multiplyBy12ThenHalve() should multiply a number by 12 then divide by 2', (expect) => {
    const expected = 6;

    const actual = multiplyBy12ThenHalve(1);

    expect.equal(actual, expected, '1 times 12 divided by 2 is 6');

    const expected2 = 60;

    const actual2 = multiplyBy12ThenHalve(10);

    expect.equal(actual2, expected2, '10 times 12 divided by 2 is 60');

    const expected3 = 18;

    const actual3 = multiplyBy12ThenHalve(3);

    expect.equal(actual3, expected3, '3 times 12 divided by 2 is 18');
});

test('divideThenMultiply() should take in three numbers divide num1 by num2 then multiply that result by num3', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, '8 divided by 4 is 2, times 5 is 10');

    const expected2 = 4;

    const actual2 = divideThenMultiply(10, 5, 2);

    expect.equal(actual2, expected2, '10 divided by 5 is 2, times 2 is 4');

    const expected3 = 60;

    const actual3 = divideThenMultiply(30, 3, 6);

    expect.equal(actual3, expected3, '30 divided by 3 is 10, times 6 is 60');
});

test('', (expect) => {
    const expected = true;

    const actual = returnAsAnArray();

    expect.equal(actual, expected, '');

    const expected2 = true;

    const actual2 = returnAsAnArray();

    expect.equal(actual2, expected2, '');

    const expected3 = true;

    const actual3 = returnAsAnArray();

    expect.equal(actual3, expected3, '');
});

test('', (expect) => {
    const expected = true;

    const actual = returnAsAString();

    expect.equal(actual, expected, '');

    const expected2 = true;

    const actual2 = returnAsAString();

    expect.equal(actual2, expected2, '');

    const expected3 = true;

    const actual3 = returnAsAString();

    expect.equal(actual3, expected3, '');
});

test('', (expect) => {
    const expected = true;

    const actual = makeLuckyGreeting();

    expect.equal(actual, expected, '');

    const expected2 = true;

    const actual2 = makeLuckyGreeting();

    expect.equal(actual2, expected2, '');

    const expected3 = true;

    const actual3 = makeLuckyGreeting();

    expect.equal(actual3, expected3, '');
});

test('', (expect) => {
    const expected = true;

    const actual = getSecondItem();

    expect.equal(actual, expected, '');

    const expected2 = true;

    const actual2 = getSecondItem();

    expect.equal(actual2, expected2, '');

    const expected3 = true;

    const actual3 = getSecondItem();

    expect.equal(actual3, expected3, '');
});

test('', (expect) => {
    const expected = true;

    const actual = getLastItem();

    expect.equal(actual, expected, '');

    const expected2 = true;

    const actual2 = getLastItem();

    expect.equal(actual2, expected2, '');

    const expected3 = true;

    const actual3 = getLastItem();

    expect.equal(actual3, expected3, '');
});


test('', (expect) => {
    const expected = true;

    const actual = getRandomNumber();

    expect.equal(actual, expected, '');

    const expected2 = true;

    const actual2 = getRandomNumber();

    expect.equal(actual2, expected2, '');

    const expected3 = true;

    const actual3 = getRandomNumber();

    expect.equal(actual3, expected3, '');
});


