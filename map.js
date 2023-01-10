// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValuesWithMap(array){
   return array.map(function(val){
        return val*2;
    })
}

// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
function valTimesIndex(array){
    return array.map(function(val, idx){
        return val*idx;
    })
}

// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
function extractKey(array, myKey){
    return array.map(function(val){
        return val[myKey];
    })
}
// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” 
// and the value of a key with the name of “last” in each object, concatenated together with a space.
function extractFullName(array){
    return array.map(function(val){
        let resultString =  val['first'] + " " + val['last']
        return resultString;
    })
}
