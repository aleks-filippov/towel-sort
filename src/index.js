
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0) return [];
    let temp = [];
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i === 0 || i % 2 === 0) temp = matrix[i];
        else temp = matrix[i].reverse();
        for (let k = 0; k < temp.length; k++) {
            arr.push(temp[k]);
        }
    }
    return arr;
};
