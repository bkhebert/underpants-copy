// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === <--(this might be an accident, its returning) 5
*   _.identity({a: "b"}) === {a: "b"}
*/

/**
 * I: a value
 * O: the same value
 * C:
 * E:
 */

_.identity = function(value){
    //return the function parameter
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

/**
 * I: any value 
 * O: return a string
 * C: 
 * E: the string is the type of value 
 */

_.typeOf = function(value){
    if(Array.isArray(value)){
        return 'array'
    } else if(value === null){
        return "null"
    } else {
    return typeof value
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

/** I: array and number
 * O: an array
 * C:
 * E: what if num is negative or greater than array.length
 */

_.first = function(array, number){
    //initialize an empty array
    var emptyArray = [];
    //if the array is not an array
    if (Array.isArray(array) !== true || number < 0){
        //return an empty array
        return emptyArray;
        //else if the number is undefined OR the type of number is not a number
    } 
    if (number === undefined || typeof number !== "number"){
        //return the first number in the array
        return array[0];
    } //if the number is greater than the length of the array, return the entire array
    if (number > array.length){
        return array;
    } 


    if (number >= 0) {
        return array.slice(0, number)
    }
    
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

/**
 * I: An array a number 
 * O: return and a array
 * C:
 * E:
 */

//intialize a function
_.last = function(array, number){
    //initialize an empty array
    var emptyArray = [];
    //if the array is not an array
    if (Array.isArray(array) !== true || number < 0){
        //return an empty array
        return emptyArray;
        //else if the number is undefined OR the type of number is not a number
    } 
    if (number === undefined || typeof number !== "number"){
        //return the lastt number in the array
        return array[array.length - 1];
    } //if the number is greater than the length of the array, return the entire array
    if (number > array.length){
        return array;
    } 

    //if the number is greater than or equal to zero, return the array counting backwards from the end by the amount of that number
    if (number >= 0) {
        return array.slice(array.length - number)
    }
    
}






/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

/** 
* I: an array and a value
* O: a number 
* C:
* E:
*/

_.indexOf = function (array, value){
    //loop through the array
for(var i = 0; i < array.length; i++){
            //if the array at the index is equal to the value
            if(array[i] === value){
            //return the index of that value
            return i;
        } 
    }// if the value cannot be found, return -1
    return -1;
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function (array, value){
    //if the array contains this value, return a boolean
    return array.includes(value)?  true : false
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
/**
 * I: a collection a function
 * O: 
 * C:
 * E:
 */
//create a function that accepts both objects/ arrays and a function
_.each = function(collection, func){
    //if the datatype is an array
    if( Array.isArray(collection) === true ){
        //loop through the array
        for(let i = 0; i < collection.length; i++){
            //invoke the function and let its parameters take in the value, the current index, and the collection. thus, the entire array will 
            //be changed
           func(collection[i], i, collection); 
        }
        //if the collection is an object
    } else if (typeof collection === "object" && !null){
        //loop through each key in the object
        for(var key in collection){
            //apply the function to the property of the key, the key itself, and the object, thus the entire object will
            //be changed
            func(collection[key], key, collection);
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//the function takes in an array as a parameter
_.unique = function(array){
    //initialize a new array
    var newArray = [];
    //loop through the array
    for(var i = 0; i < array.length; i++){
        //if the index of the function is equal to the current index of the loop. this works because indexOf returns the FIRST OCCURANCE of the value
        if(_.indexOf(array, array[i]) === i)
        //push the unique value into the new array
        newArray.push(array[i]);
    } //return the new array 
    return newArray
}
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

/**
 * I: an array and a function
 * O: returns a new array
 * C:
 * E: w
 */
//take in an array and a function
_.filter = function(array, func){
    //declare a new variable and assign it to an empty array
    var returnArr = [];
    //loop through the array
    for( var i = 0; i < array.length; i++){
        //determine if the result of invoking function that takes in rotating array value / index  and single array is true
        if(func(array[i], i, array)){//
            //if it is true, add it to a new array
            returnArr.push(array[i]);
        }
    }
    //return the array
    return returnArr
}
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

/**
 * I: an array
 * O: a function
 * C: 
 * E: function will be called on each element in the array, passing in arguments 'elements, index, array
 * //will return a new array of elements for which calling function returned false. logical inverse of _.filter
 */
//function takes in an array and a function
_.reject = function(array, func){
            //create a new array;
    let newArr = [];
    //loop through each element in the array
    for(let i = 0; i < array.length; i++){
        //pass each element, index, and the array into the function, if it is false
        if(!func(array[i], i, array)){
            //push it into the new array
            newArr.push(array[i]);
        }
    }
    //return the new array
    return newArr;

}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
/**
 * I: an array and a function
 * O: return an array made up of 2 sub arrays
 * C: one array contains all the values for which func returned true, the other for which func returned false
 * E: this is going to return an array of arrays
 */

//create a function that takes in an array and a function
_.partition = (array, func) => {
    //initialize a truth array
    let truthArr = [];
    //initialize a false array
    let falseArr = [];
     //initialize both array
    let partitionArr = [];
    //loop through the array
    for(let i = 0; i < array.length; i++){
        //if the func returns true when element, index, and array is passed into it
        if(func(array[i], i, array)){
            //add that value to the truth array
            truthArr.push(array[i]);
        }
        //if the func returns false when element, index, and array is passed into it
       if(!func(array[i], i, array)){
             //add value to false array
            falseArr.push(array[i]);
        }
    }
    //add both arrays into the partition array with their own index
    partitionArr[0] = truthArr;
    partitionArr[1] = falseArr;
    //return the partition array
        return partitionArr;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
/**
 * I: A collection and a function
 * O: return an new array
 * C: call the function for each element in the collection, pass in arguments at Objective 1. save the return value of each
 * function in a new array.
 * E: 
 */

//take in a collection and a function
_.map = (collection, func) => {
    //initialize a new array
    let newArr = [];
    //if the collection is an array
    if(Array.isArray(collection)){
        //loop through the array
        for(let i = 0; i < collection.length; i++){
            //pass each value and index and the collection into the func and save the return value to a new Array
            newArr.push(func(collection[i], i, collection));
       }
    }//if the type of collection is an object and not equal to null
        if(typeof(collection) === 'object' && !Array.isArray(collection) && collection != null){
            //pass each value and index and the collection into the func and save the return value to a new Array
            for(var key in collection){
                //push each value into the new array
                newArr.push(func(collection[key], key, collection))
            }
        }
        //return the new array
        return newArr;
}



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
/**
 * I: an array of objects and a property
 * O: an array containing the value of property for each element nin the array
 * C: you must use _.map();
 * E: 
 */
//the pluck array takes in an array of objects and a property
_.pluck = (arrayOfObjects, property) => {
    //return an array of each elements property using map
    return arrayOfObjects.map( (e, i, a) => {return e[property]});}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
/**
 * I a collection and a function
 * O return a boolean value
 * C
 * E
 */

//declare an every function, takes in a collection and a function
_.every = (collection, func) => {

    //initialize a bool to true;
   
    let bool = true;
    //if the collection is an array
    if(Array.isArray(collection)){
        //loop through the array
        for(let i = 0; i < collection.length; i++){
            //if the func parameter is undefined
            if(typeof func != 'function'){
                if(collection[i] === false){
                    bool = false;
                }
            } else if(typeof func(collection[i], i, collection) != "boolean"){
                //if the value at the index is false
               if(collection[i] === false){
                //change bool to false
                    bool = false;
                }
            //if the func is not undefined, pass each value and index and the collection into the func, if it ever returns falsey value
            } else if(func(collection[i], i, collection) === false && func != undefined){
                //change the bool to false
                bool = false;
            };
            
       }
    }
    //if the type of collection is an object and not equal to null
        if(typeof(collection) === 'object' && !Array.isArray(collection) && collection != null){
            //loop through the object
            for(var key in collection){
                //if there is no function
                if(typeof func != 'function'){
                    if(collection[key] === false){
                        bool = false;
                    }
                } else if (typeof func(collection[key], key, collection) != "boolean"){
                    //loop through, if anything registers false
                    if(collection[key] === false){
                        //change bool to false
                         bool = false;
                     }
                }
                //if any of the keys passed into the collection returns false and the func is not undefined
                else if(func(collection[key], key, collection) === false && func != undefined){
                    //change the bool to false
                    bool = false;
                } 
            }
        }
        //return the bool
        return bool;
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = (collection, func) => {
    //initialize a bool to false;
    let bool = false;
    //if the collection is an array
    if(Array.isArray(collection)){
        //loop through the array
        for(let i = 0; i < collection.length; i++){
            //if the func parameter is undefined
            if(typeof func != 'function'){
                //and if the collection item is true
                if(collection[i] === true){
                //return true
                    bool = true;
                }
//if the function does not return a bool
            } else if(typeof func(collection[i], i, collection) != "boolean"){
                //if the value at the index is true
               if(collection[i] === true){
                //change bool to true
                    bool = true;
                }
            //if the func is not undefined, pass each value and index and the collection into the func, if it ever returns true value
            } else if(func(collection[i], i, collection) === true && func != undefined){
                //change the bool to true
                bool = true;
            };
            
       }
    }
    //if the type of collection is an object and not equal to null
    else if(typeof(collection) === 'object' && Array.isArray(collection) === false && collection != null && collection != undefined){
            //loop through the object
            for(var key in collection){
                //if there is no function
                if(typeof func != 'function'){
                    if(collection[key] === true){
                        bool = true;
                    }
                } else if (typeof func(collection[key], key, collection) != "boolean"){
                    //loop through, if anything registers false
                    if(collection[key] === true){
                        //change bool to false
                         bool = true;
                     }
                }
                //if any of the keys passed into the collection returns false and the func is not undefined
                else if(func(collection[key], key, collection) === true && func != undefined){
                    //change the bool to false
                    bool = true;
                } 
            }
        }
        //return the bool
        return bool;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

/**
 * I: an array, a function, a seed
 * O:a value of the final function call
 * C: call the function on every element in the array, let the return value of the function be the previous result
 * for the next iteration
 */

_.reduce = (array, func, seed) => {
    //initialize previous result to the first element in array
    let previousResult;
    //if the seed is defined
if(seed != undefined){

    //reassign the previous result to the invoking of a function with parameters seed, first index of array, and zero
    previousResult = func(seed, array[0], 0);

} else {
    //else, let previous result equal the first index in the array
    previousResult = array[0]
}
    //loop through collection starting at the next value
    for(let i = 1; i < array.length; i++){
       //reassign previous result to the result of the function invoked on previousResult, the array index, and index.
       previousResult = func(previousResult, array[i], i);
    }
    //return the previous result
    return previousResult
}




/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
/**
 * I: multiple objects
 * O: one object
 * C: object 1 will have properties of all objects
 * E:
 */

//uses destructuring to take in endless arguments
_.extend = function(...args){
    //args is can be accessed like an array. initialize a variable to the first argument, it should be an object 
    let obj = args[0];
   //loop through the arguments. all should be objects
    for(let i = 0; i <  args.length ; i++){
        //create a for in loop for objects, each index value of an object is entered inside the loop 
        for(var key in args[i]){
            //inside the loop, the obj key is given the same name as the object in the arguments index on the current loop, its also given the same value
            obj[key] = args[i][key];
        }
    }
    //return the object
    return obj
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}