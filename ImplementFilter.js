/* Radius of 4 circles are given */
const Radius= [3,1,2,4];

//Output will be even radius number hence filtering is done
const isEven = function(number){
    return number%2==0
}

const findNumbers = function(number, callback){
    const output =[];
    for(let i=0;i<number.length;i++)
    {
        if(callback(number[i])){
            output.push(number[i]);
        }
    }
    return output;
};

/* More optimized way to write exactly in the form of Filter :
Array.prototype.findNumbers = function(callback){
    const output =[];
    for(let i=0;i<this.length;i++)
    {
        if(callback(this[i])){
            output.push(this[i]);
        }
    }
    return output;
}; 

console.log(Radius.findNumbers(isEven));

*/

console.log(findNumbers(Radius, isEven));