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

test('returnAsAnArray() should combine three inputs and create an array', (expect) => {
    const expected = [1, 2, 3];

    const actual = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual, expected, 'An array of 1, 2, 3, should be returned');

    const expected2 = [10, 100, 1000];

    const actual2 = returnAsAnArray(10, 100, 1000);

    expect.deepEqual(actual2, expected2, 'An array of 10, 100, 1000 should be returned');

    const expected3 = [11, 7, 3];

    const actual3 = returnAsAnArray(11, 7, 3);

    expect.deepEqual(actual3, expected3, 'An array of 11, 7, 3 should be returned');
});

test('returnAsAString() should take three numbers and return them as concatenated string', (expect) => {
    const expected = '123';

    const actual = returnAsAString(1, 2, 3);

    expect.equal(actual, expected, '1, 2, 3 values should concat to 123');

    const expected2 = '111819';

    const actual2 = returnAsAString(11, 18, 19);

    expect.equal(actual2, expected2, '11, 18, 19 values should concat to 111819');

    const expected3 = '2022';

    const actual3 = returnAsAString(20, 2, 2);

    expect.equal(actual3, expected3, '20, 2, 2 values should concat to 2022');
});

test('makeLuckyGreeting() should take the product of two numbers and announce it as the luck number of the day', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(6, 2);

    expect.equal(actual, expected, '6 times 2 is 12 which should be the lucky number of the day');

    const expected2 = 'Hello! Your lucky number for the day is 27.';

    const actual2 = makeLuckyGreeting(9, 3);

    expect.equal(actual2, expected2, '9 times 3 is 27 which should be the lucky number of the day');

    const expected3 = 'Hello! Your lucky number for the day is 99.';

    const actual3 = makeLuckyGreeting(9, 11);

    expect.equal(actual3, expected3, '9 times 11 is 99 which should be the lucky number of the day');
});

test('getSecondItem() should get the second item in a provided array', (expect) => {
    const expected = 'two';

    const actual = getSecondItem(['one', 'two', 'three']);

    expect.equal(actual, expected, 'The second item in the array is the string two');

    const expected2 = 2;

    const actual2 = getSecondItem([1, 2, 3]);

    expect.equal(actual2, expected2, 'The second item in the array is the number 2');

    const expected3 = '2';

    const actual3 = getSecondItem(['1', '2', '3']);

    expect.equal(actual3, expected3, 'The second item in the array is the string 2');
});

test('getLastItem() should return the last item in a provided array', (expect) => {
    const expected = 'zero index';

    const actual = getLastItem(['zero index']);

    expect.equal(actual, expected, 'Zero index is the only value in the array');

    const expected2 = 25;

    const actual2 = getLastItem([1, 2, 3, 4, 5, 6, 25]);

    expect.equal(actual2, expected2, '25 is the last value in the array');

    const expected3 = 'Pras';

    const actual3 = getLastItem(['Lauryn Hill', 'Wyclef', 'Pras']);

    expect.equal(actual3, expected3, 'Pras is the last value in the array');
});


test('getRandomNumber() should return a random number between 0 and 5', (expect) => {
    const expected = true;

    const number = getRandomNumber();

    const isValidNumber = number === 0 || number === 1 || number === 2 || number === 3 || number === 4 || number === 5;

    expect.equal(isValidNumber, expected, 'returned number should equal 0, 1, 2, 3, 4, or 5');

    const expected2 = true;

    const number2 = getRandomNumber();

    const isValidNumber2 = number2 >= 0 && number2 <= 5;

    expect.equal(isValidNumber2, expected2, 'returned number should be greater than 0 but less than or equal to 5');

    const expectedArray = [0, 1, 2, 3, 4, 5];

    const number3 = getRandomNumber();

    const isValidNumber3 = expectedArray.includes(number3);

    expect.equal(isValidNumber3, true, 'returned number should be included in the array [0, 1, 2, 3, 4, 5]');
});


