const functions = require('./utils.js')

let mat1 = [
    [5, 3, 7],
    [0, 9, 4],
    [0, 0, 3],
]


let mat2 = [
    [4, 1, 8],
    [5, 3, 2],
    [7, 7, 11],
]

console.log(functions.matrixProduct(mat1, mat2));
console.log(functions.sumOfMatrices(mat1, mat2));
console.log(functions.sumOfEachRow(mat1));