'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let arr = []
    let count = 0
    let ind = 0
    arr = str.split(" ")
    count = arr.length
    if (count % 2 == 1) {
        ind = (Math.floor(count / 2))
        let num = arr[ind].length
        return num
    } else {
        return 1
    }


}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    let text1;
    let text2;
    if (str1.length == str2.length) {
        text1 = str1.split("").sort().join("");
        text2 = str2.split("").sort().join("");
        if (text1 == text2) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    //     write your code here
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == int) {
            return i
        } else if (arr[i] < int && (arr[i + 1] > int || arr[i + 1] === undefined)) {
            arr.splice(i + 1, 0, int);
        }

    }



    // let result = arr.reduce((acc, cur, i) => {
    //     if (cur == int) {

    //       return i;
    //     }
    //     console.log("this="+acc);
    //     return acc;
    //   }, "");

    //   return result;
}
// // -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };