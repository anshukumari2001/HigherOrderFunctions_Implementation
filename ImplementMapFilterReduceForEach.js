/** 
 * Implementing Map
 * Input : arr = [1,2,3,4]
 * Expected Output : ans = [2,4,6,8]  x= x*2
 */

 let arr = [1,2,3,4]
 let myMap = function(arr, callback){
      // new Array
      let newArray =[];
      for(let i=0; i<arr.length; i++){
        newArray.push(callback(arr[i]))
      }
      return newArray;
 }

let  mapLogic = (x) => x*2; 

// let _mapLogic = function(x){
//     return x*2;
// }

let _map = myMap(arr, mapLogic);
console.log(_map);


/**
 * 
 * Implementing filter
 * Input : arr = [1,2,3,4]
 * Expected Output : ans = [2, 4] (even only)
 */

let myFilter = function(arr, callback){
    let newArray =[];
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray
}

let _filterLogic = (x) => x%2 == 0;
let _filter = myFilter(arr, _filterLogic);
console.log(_filter)


/**
 * 
 * Implementing forEach
 * Input : arr = [1,2,3,4]
 * output : ans = [1,2,3,4] (Provide iteration/traversal of each element)
 */

 let myForEach = function(arr, callback){
    for(let i=0; i<arr.length; i++){
        callback(arr[i])
    }
}

let _forEachLogic = (x) => console.log(x);
let _forEach = myFilter(arr, _forEachLogic);
console.log(_forEach)



/**
 * 
 * Implementing Reduce
 * Input : arr = [1,2,3,4]
 * Output : ans = 10 (summation of all element)
 */

 let myReduce = function(arr, callback, inititalValue = 0){
    let accumulator = inititalValue
    for(let i=0; i<arr.length; i++){
        accumulator =  callback(accumulator, arr[i]);
    }
    return accumulator
}

let _reduceLogic = (prevValue, currentVal) => prevValue+currentVal;
let _reduce = myReduce(arr, _reduceLogic);
console.log(_reduce);