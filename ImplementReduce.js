/* Diameter of 5 circles are given */
const Diamter =[2,3,5,6,7];

/* Here the use of reduce function is to provide the sum of all the diameter of circle */
const returnSum= (prevValue, currentValue) => prevValue+currentValue;

const findSum= function findSum(arr, callback, inititalValue=0){
    let accumulator = inititalValue;
    for(let i=0;i<arr.length;i++){
        accumulator= callback(accumulator, arr[i]);
    }
    return accumulator;
}

console.log(findSum(Diamter, returnSum));