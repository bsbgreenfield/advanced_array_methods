// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

function extractValue(array, myKey){
    return array.reduce(function(accumulator, nextVal){
        accumulator.push(nextVal[myKey])
        return accumulator;
    }, [])
}
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values 
// as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(s){
    return Array.from(s).reduce(function(acc, nextVal){
        if ('aeiou'.includes(nextVal.toLowerCase())){
            if (acc[nextVal.toLowerCase()]){
                acc[nextVal.toLowerCase()] += 1;
            }
            else{
                acc[nextVal.toLowerCase()] = 1;
            }
        }
        return acc;
    },{})
}
// Write a function called addKeyAndValue which accepts an array of objects and 
// returns the array of objects passed to it with each object now including the key and value passed to the function.

function addKeyAndValue(arr, myKey, myValue){
    return arr.reduce(function(acc, nextVal){
        nextVal[myKey] = myValue;
        acc.push(nextVal);
        return acc
    }, [])
}


// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. 
// The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, 
// the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

function partition(array, callback){
    return array.reduce(function(acc, nextVal){
        if (callback(nextVal)){
            acc[0].push(nextVal);
        }
        else{
            acc[1].push(nextVal);
        }
        return acc;
    }, [[], []])
}
