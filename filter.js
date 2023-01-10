// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
function filterByValue(array, myKey){
    return array.filter(function(val){
        return myKey in val;
    })
}

// write a function called find which accepts an array and a value and 
// returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
function find(array, myValue){
    return array.filter(function(val, idx){
        return array[idx] == myValue;
    })[0];
}
console.log(find([1,2,3,4,5, 3], 7));

// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
function findInObj(arr, myKey, myValue) {
    return arr.filter(function(val) {
      return val[myKey] === myValue;
    })[0];
  }

// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels 
// (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
function removeVowels(s){
    const array = Array.from(s);
    let newString = '';
    newString += array.filter(function(val){
        return !('aeiou'.includes(val.toLowerCase()))
    })
    return newString.toLowerCase();
}

// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled 
// (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers(array){
    return array.filter(function(val){
        return val%2 == 1;
    })
    .map(function(val){
        return val *2;
    })
}
