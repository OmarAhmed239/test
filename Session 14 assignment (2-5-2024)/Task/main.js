function calculateTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
        return 'Base and height must be positive numbers.';
    }
    const area = 0.5 * base * height;
    return area;
}

console.log(calculateTriangleArea(5, 10)); //  25
console.log(calculateTriangleArea(7, 3));  //  10.5
console.log(calculateTriangleArea(-5, 10)); // "Base and height must be positive numbers."



function addition(num) {
    return num + 1;
}

// Example usage:
console.log(addition(5));    //  6
console.log(addition(-2));  //  -1
console.log(addition(0));  //    1



function convert(minutes) {
    return minutes * 60;
}

// Example usage:
console.log(convert(5));  //  300
console.log(convert(1));  //  60
console.log(convert(0));  //  0



function findPerimeter(length, width) {
    return 2 * (length + width);
}

// Example usage:
console.log(findPerimeter(5, 10)); //  30
console.log(findPerimeter(7, 3));  //  20
console.log(findPerimeter(0, 4));  //  8



function points(twoPointers, threePointers) {
    return (twoPointers * 2) + (threePointers * 3);
}

// Example usage:
console.log(points(5, 3)); //  27
console.log(points(0, 4)); //  12
console.log(points(2, 2)); //  10