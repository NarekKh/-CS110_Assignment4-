module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
}

function matrixProduct(mat1, mat2) {
    let mat = [];
    let sum = 0;

    for (let i = 0; i < mat1.length; i++)
    {
        mat[i] = [];
        for (let j = 0; j < mat2[0].length; j++)
        {
            sum = 0;
            for (let g = 0; g < mat1[i].length; g++)
            {

                sum += mat1[i][g] * mat2[g][j];
            }
            mat[i][j] = sum;
        }
    }


    return mat;
}

function sumOfMatrices(mat1, mat2) {
    let mat = [];
    for (let i = 0; i < mat1.length; i++)
    {
        mat[i] = [];
        for (let j = 0; j < mat2[i].length; j++)
        {
            mat[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return mat;
}

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}

function sumOfEachRow(mat) {
    let arr = [];
    for (let i = 0; i < mat.length; i++) arr.push(sumOfArray(mat[i]))
    return arr;
}
