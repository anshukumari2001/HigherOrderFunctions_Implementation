/* radius of 4 circles are given */
const radius= [3,1,2,4];

const area= function(radius){
    return Math.PI*radius*radius;
}

const diameter = function(radius){
    return 2*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const calculate = function(radius, callback){
    const output =[];
    for(let i=0;i<radius.length;i++)
    {
        output.push(callback(radius[i]));
    }
    return output;
};

/* More optimized way to write exactly in the form of Map : 
Array.prototype.calculate = function(callback){
    const output =[];
    for(let i=0;i<this.length;i++)
    {
        output.push(callback(this[i]));
    }
    return output;
};

console.log(radius.calculate(area));
*/

document.write("\n1. Area of all 4 circles are : ")
document.write(calculate(radius, area));

document.write("\n2. Diamter of all 4 circles are : ")
document.write(calculate(radius, diameter));

document.write("\n3. Circumference of all 4 circles are : ")
document.write(calculate(radius, circumference));