'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
    let arr = string.split("")
    console.log(arr);
    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2.unshift(arr[i])
        console.log(arr[i]);

    }
    console.log(arr2);

    return arr2.join("")
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    //write your code here ...
    let arr2 = []
    let filter = "^_^"
    let result = arr.map(elemnt => {

        if (elemnt.includes(filter)) {
            arr2.push(elemnt)
        }
    })
    return arr2
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    //write your code here ...
    let arr2 = []
    let arr = str.split("")
    for (let i = 0; i < arr.length; i += 2) {
        arr2.push(arr[i]);
    }
    return arr2.join("")
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let filter = "chicken"
    let result = arr.map(elemnt => {
        let result2 = elemnt.filter(elemnt2 => (
        elemnt2.includes(filter)
       )

        )
        return result2
    })
    return result
}

// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
