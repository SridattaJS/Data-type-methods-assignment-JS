//1. remove duplicates from the array
let myArr = [1, 2, 3, 4, 4, 5, 6, 8]
const removeDup = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 2.Check if a given string is a palindrome
const checkPalindrome = (str) => {
    const processedStr = str.toLowerCase()
    const reversedStr = processedStr.split('').reverse().join('');
    return processedStr === reversedStr;
}

//3.Generate the first `n` numbers of the Fibonacci sequence.
const feboFunction = (n) => {
    const fibSequence = [0, 1];
    Array(n).fill(0).map((_, index) => {
        const nextFib = fibSequence[index + 1] + fibSequence[index];
        fibSequence.push(nextFib);
    });

    return fibSequence.slice(0, n).filter((ele, index) => fibSequence.indexOf(ele) === index);
}
console.log(feboFunction(10))

// 4. Find and return the largest number in an array.
const largest = (arr) => {
    return arr.reduce((accum, ele) => accum > ele ? accum : ele)
}

console.log(largest(myArr), largest);

// 5. Implement the FizzBuzz logic: print numbers 1 to 100, but print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

const fixBuzzGame = (num) => {
    return Array(num).fill(0).map((_, ind) =>
        (ind % 3 === 0 && ind % 5 === 0) ? "fizzBuzz" : (ind % 3 === 0) ? "fizz" : (ind % 5 === 0) ? "buzz" : ind
    )
}

console.log(fixBuzzGame(10))

// 6. Reverse the digits of a given integer while maintaining the sign.
const reverseNum = (num) => {
    const isNegative = num < 0;
    const reversedString = Math.abs(num).toString().split('').reverse().join('');
    return isNegative ? -reversedString : reversedString;
}

console.log(reverseNum(-654))

// 7. Check if two given strings are anagrams (contain the same characters in a different order).
const checkAnageam = (str1, str2) => {
    let compArr = str1.split('').sort().join('');
    let compArr1 = str2.split('').sort().join('')
    return compArr === compArr1
}

console.log(checkAnageam("hello", "ohelol"))

// 8. Find and return the first non-repeating character in a string.
const nonRepeating = (str) => {
    const charArray = str.split('');
    for (let char of charArray) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}
console.log(nonRepeating("sajjan"))


// 9. Write a function to calculate the sum of all numbers in a nested array, handling arrays within arrays.
const calcallSum = (arr) => {
    let flatArr = arr.flat();
    return flatArr.reduce((acc, ele) => acc + ele)
}

console.log(calcallSum([2, 3, 4, 5, [5, 7, 8]]))


// 10. Move all zeroes in an array to the end while keeping the order of non-zero elements.
const nonzeroAtend = (arr) => {
    const nonZeroElements = arr.filter(num => num !== 0);
    const zeroElements = arr.filter(num => num === 0);
    return nonZeroElements.concat(zeroElements);
}

console.log(nonzeroAtend([9, 8, 76, 7, 0, 2, 0, 0, 2, 4, 5, 6]))

// 11. Count the number of vowels (a, e, i, o, u) in a given string.

const countOvels = (string) => {
    let vowels = "aeiou"
    let strArr = string.split('')
    return strArr.reduce((acc, ele) => vowels.includes(ele) ? acc + 1 : acc, 0);
}

console.log(countOvels("apple"))

// 12. Find the missing number in a sequence of integers from 1 to `n`, where one number is missing.
const findMissing = (arr, n) => {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 3, 5, 6], 6))

// 13. Flatten a nested array into a single-level array.

const flattenArray = (arr) => {
    return arr.flat()
}
console.log(flattenArray([1, 2, 3, 4, [3, 4, 5], [7]]))

// 14. Find the longest word in a given string.
const findLongWord = (word) => {
    let arr = word.split(' ')
    return arr.reduce((acc, ele) => ele.length > acc.length ? ele : acc);
}

console.log(findLongWord("hello i am shanthala"))

// 15. Given an array of integers and a target sum, return the indices of the two numbers that add up to the target.
const targetCalc = (arr, target) => {
    const map = new Map();
    arr.forEach((num, index) => {
        const complement = target - num;
        if (map.has(complement)) {
            return [map.get(complement), index];
        }
        map.set(num, index);
    });
    return [];
}

console.log(targetCalc([1, 3, 4, 5, 7, 8, 10], 8))
