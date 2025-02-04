function printArray(number) {
    var newArray = [];

    for (var i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}

console.log(printArray(1));  // ➞ [1]
console.log(printArray(3));  // ➞ [1, 2, 3]
console.log(printArray(6));  // ➞ [1, 2, 3, 4, 5, 6]


function findIndex(arr, str) {
    return arr.indexOf(str);
}

// Example usage
console.log(findIndex(['apple', 'banana', 'cherry'], 'apple')); // ➞ 0
console.log(findIndex(['dog', 'cat', 'mouse'], 'cat'));         // ➞ 1
console.log(findIndex(['red', 'blue', 'green'], 'yellow'));     // ➞ -1 (not found)




function arrayValuesTypes(arr) {
    return arr.map(value => typeof value);
}

console.log(arrayValuesTypes([1, 'hello', true, null, {}, []]));
// ➞ ['number', 'string', 'boolean', 'object', 'object', 'object']




function getSumOfItems(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}


console.log(getSumOfItems([1, 2, 3, 4]));     // ➞ 10
console.log(getSumOfItems([-1, -2, -3, -4])); // ➞ -10
console.log(getSumOfItems([0, 0, 0, 0]));     // ➞ 0
console.log(getSumOfItems([1.5, 2.5, 3.5]));  // ➞ 7.5



function addOddToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

console.log(addOddToN(1));  // ➞ 1
console.log(addOddToN(3));  // ➞ 4 (1 + 3)
console.log(addOddToN(5));  // ➞ 9 (1 + 3 + 5)
console.log(addOddToN(9));  // ➞ 25 (1 + 3 + 5 + 7 + 9)
