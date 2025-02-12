//1
function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumArray([1, 2, 3, 4]));         // ➞ 10
console.log(sumArray([-1, -2, -3, -4]));     // ➞ -10
console.log(sumArray([0, 0, 0, 0]));         // ➞ 0
console.log(sumArray([1.5, 2.5, 3.5]));      // ➞ 7.5


// 2
function convertToUppercase(strings) {
    return strings.map(str => str.toUpperCase());
}

console.log(convertToUppercase(['hello', 'world'])); // ➞ ['HELLO', 'WORLD']
console.log(convertToUppercase(['JavaScript', 'is', 'fun'])); // ➞ ['JAVASCRIPT', 'IS', 'FUN']
console.log(convertToUppercase(['lowercase', 'UPPERCASE'])); // ➞ ['LOWERCASE', 'UPPERCASE']



// 3
function findLargestNumber(numbers) {
    return Math.max(...numbers);
}

console.log(findLargestNumber([1, 2, 3, 4]));         // ➞ 4
console.log(findLargestNumber([-1, -2, -3, -4]));     // ➞ -1
console.log(findLargestNumber([0, 100, 50, 25]));     // ➞ 100
console.log(findLargestNumber([5.5, 2.2, 8.8, 3.3])); // ➞ 8.8



// 4
function findSmallestNumber(numbers) {
    return Math.min(...numbers);
}

console.log(findSmallestNumber([1, 2, 3, 4]));         // ➞ 1
console.log(findSmallestNumber([-1, -2, -3, -4]));     // ➞ -4
console.log(findSmallestNumber([0, 100, 50, 25]));     // ➞ 0
console.log(findSmallestNumber([5.5, 2.2, 8.8, 3.3])); // ➞ 2.2



// 5
function calculateAverage(numbers) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4]));         // ➞ 2.5
console.log(calculateAverage([-1, -2, -3, -4]));     // ➞ -2.5
console.log(calculateAverage([0, 100, 50, 25]));     // ➞ 43.75
console.log(calculateAverage([5.5, 2.2, 8.8, 3.3])); // ➞ 4.45



// 6
function sumEvenNumbers(numbers) {
    return numbers.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4]));
// ➞ 6 (2 + 4)
console.log(sumEvenNumbers([-1, -2, -3, -4]));
// ➞ -6 (-2 + -4)
console.log(sumEvenNumbers([0, 100, 50, 25]));
// ➞ 150 (0 + 100 + 50)
console.log(sumEvenNumbers([5.5, 2.2, 8.8, 3.3]));
// ➞ 11 (2.2 + 8.8)



// 7
function findSecondLargestNumber(numbers) {
    const uniqueNumbers = [...new Set(numbers)]; // Remove duplicates
    if (uniqueNumbers.length < 2) return null; // Not enough numbers for second largest
    uniqueNumbers.sort((a, b) => b - a); // Sort in descending order
    return uniqueNumbers[1]; // Return the second largest
}

console.log(findSecondLargestNumber([1, 2, 3, 4]));         // ➞ 3
console.log(findSecondLargestNumber([-1, -2, -3, -4]));     // ➞ -2
console.log(findSecondLargestNumber([0, 100, 50, 25]));     // ➞ 50
console.log(findSecondLargestNumber([5.5, 2.2, 8.8, 3.3])); // ➞ 5.5
console.log(findSecondLargestNumber([1, 1, 1]));            // ➞ null 



// 8
function rearrangeOddEven(numbers) {
    const odds = numbers.filter(num => num % 2 !== 0); // Filter odd numbers
    const evens = numbers.filter(num => num % 2 === 0); // Filter even numbers
    return [...odds, ...evens]; // Concatenate odd and even arrays
}

console.log(rearrangeOddEven([1, 2, 3, 4]));         // ➞ [1, 3, 2, 4]
console.log(rearrangeOddEven([4, 3, 2, 1]));         // ➞ [3, 1, 4, 2]
console.log(rearrangeOddEven([0, 100, 50, 25]));     // ➞ [25, 0, 100, 50]
console.log(rearrangeOddEven([5.5, 2.2, 8.8, 3.3])); // ➞ [5.5, 3.3, 2.2, 8.8]