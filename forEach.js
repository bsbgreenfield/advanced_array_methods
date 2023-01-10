// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled


function doubleValues(array){
    array.forEach(function(val){
        console.log(val * 2);
    })
}



// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

function onlyEvenValues(array){
    let newArr = [];
    array.forEach(function(val){
        if (val%2 == 0){
            newArr.push(val);
        }
    })
    console.log(newArr);
}

// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

function showFirstAndLast(array){
    let newArr = [];
    array.forEach(function(val, idx){
        if (idx == 0 || idx == (array.length - 1)){
            newArr.push(val);
        }
    })
    console.log(newArr);
}


// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

function addKeyAndValue(array, newKey, newValue){
    array.forEach(function(val){
       val[newKey] = newValue;
    })
    console.log(array);
}

//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel 
// and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(s){
    let arr = Array.from(s);
    var obj = {};
    arr.forEach(function(val){
        if ('aeiou'.includes(val.toLowerCase())){
            if(obj[val.toLowerCase()]){
                obj[val.toLowerCase()] ++
            }
            else{
                obj[val.toLowerCase()] = 1;
            }
        }   
    })
    console.log(obj);
}
vowelCount('I Am awesome and so are you');