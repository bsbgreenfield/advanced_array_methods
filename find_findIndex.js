// Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. 
// The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

function findUserByUsername(arr, s){
    return arr.find(function(val){
        return s == val['username'];
    })
}

// Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. 
// The function should remove the object from the array and return this object. If the object is not found, return undefined.
function removeUser(arr, username) {
    let foundIndex = arr.findIndex(function(user){
      return user.username === username;
    })
    if(foundIndex === -1) return;
  
    return arr.splice(foundIndex,1)[0];
  }

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  console.log(removeUser(users, 'akagen')) // {username: 'akagen'}
 console.log(removeUser(users, 'akagen'))  // undefined