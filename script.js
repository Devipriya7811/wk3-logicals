// // 1.Pattern Printing: Write a function that takes a 
// positive integer n as input and prints a pattern like the following for n = 5: 

// // 1 
// // 2 2 
// // 3 3 3 
// // 4 4 4 4 
// // 5 5 5 5 5 
let rows = 5;
let char = "";

for (let i=1; i<=rows; i++){ 
    for(let j=1; j<=i; j++){
        char +=i;
    }
    char +="\n";
}
console.log(char);

// // 2.Frequency Count: Write a function that takes an array of 
// integers as input and returns an object representing the frequency count of each 
// number in the array. 

const arr = [1,1,1,5,5,5,5,5,6,8];
const counts = {};
for(const num of arr){
    counts[num] = counts[num] ? counts[num]+1 : 1;
}
console.log(counts);

// // 3.Remove Duplicates: Write a function that takes an array as 
// input and returns a new array with duplicates removed 
// (maintaining the original order). 

function removeDup(element){
    let unique = [];
    for (let i = 0;i <= element.length;i++){
        if(!unique.includes(element[i])){
            unique.push(element[i]);
        }
    }
    return unique;
}
const element = [1,2,3];
console.log(removeDup(element));

// // 4.Array Sum: Write a function that takes an array of 
// numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumbers(numbers){
    let sum = 0;


    for(let i=0; i<=numbers.length; i++){
        if(numbers[i]>0){
        sum += numbers[i];
        }
    }
    return sum;
}
const numbers = [3,5,6,7,-4,-6,-8,6];
const positiveSum = sumOfPositiveNumbers(numbers)
console.log(positiveSum);

// // 5.Object Transformation: Given an array of objects with 
// 'id' and 'name' properties, write a function that transforms the array 
// into an object where the keys are the 'id' values and the values are the 'name' values. 

function transformArrayToObject(array){
    const transformedObject = {};
    array.forEach(obj =>{
        const {id,name} = obj;
        transformedObject [id] = name;
    });
    return transformedObject;
}
const inputArray =[
    {id:1,name:'grace'},
    {id:2,name:'chutki'},
    {id:3,name:'kiyo'}
];
const transformedObject = transformArrayToObject(inputArray);
console.log(transformedObject)


// // 6.Nested Array Sum: Write a function that takes a nested array 
// of numbers as input and returns the sum of all elements in the array. 

function nestedArray(numbers){
    sum = 0;

    for(let i=0;i<=numbers.length;i++){
        if(Array.isArray(arr[i])){
            nestedArray(arr[i])
        }else{
            sum += arr[i]
        }
    }
    return sum;
}
const nestArr = [2,3,[4,5,2]];
const sum  = nestedArray(nestArr);
console.log(sum);

// // 7.Largest Difference: Write a function that takes an array of 
// numbers as input and returns the largest difference between any two elements in 
// the array. 

function largestDifference(array){
    sum = 0;
    for(let i=0;i<=array.length; i++){
        sum += numbers[i];
    }
}

// // 8.Array Rotation: Write a function that rotates elements of an array to the 
// left by a given number of positions. 

const fruits = ['apple','banana','cherry','mango','grapes'];
const n = 3;

for(i=0;i<=n;i++){
    let firstElement = fruits.shift()
    fruits.push(firstElement);
}
console.log(fruits);

// // 9.Object Sorting: Write a function that takes an array of objects 
// with 'name' and 'age' properties and sorts the objects based on age in ascending order. 

function objectSorting(obj){
    obj.sort( (a,b) => a.age - b.age);
    return obj;
}
const details = [
    {name:'jack' , age:23},
    {name:'mini' , age:19},
    {name:'jeni' , age:25},
];
const sorted = objectSorting(details);
console.log(sorted);

// // 10.Array Intersection: Write a function that takes two arrays as input 
// and returns an array containing the elements that are present in both arrays. 
function interSection(array1,array2){

}