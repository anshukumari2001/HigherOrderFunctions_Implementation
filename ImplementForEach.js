/* Diameter of 4 circles are given */
const diameterValue= [1,2,3,4];

/* Use of forEach is iterating the elements of array */
const printIteration = (x) => console.log(x);

const findIteration = function(arr, callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}

console.log(findIteration(diameterValue, printIteration));

