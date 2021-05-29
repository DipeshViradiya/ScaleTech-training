const prompt = require('prompt-sync')();

/*
1.Check if a string is equal to other
 */

let str1 = prompt("Enter the first string : ");
let str2 = prompt("Enter the second string : ");

console.log(`${str1} equals ${str2} ? : ${(str1==str2)}`);

/*
2.Check if a string is palindrome
 */

let str4 = prompt("Enter the string to check palindrome : ");

//function checks if string is palindrome or not
function isPalindrome(teststr) {
    let left = 0;
    let right = teststr.length-1;
    while (left <= right) {
        if(teststr[left] != teststr[right]){
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
}

console.log(`the string ${str4} is palindrome? : ${isPalindrome(str4)}`);

/*
3 Remove all the duplicates in the string
 */

 let str6 = prompt("Enter the string to remove all duplicates : ");
 let set = new Set();
 let ans = str6[0];
 set.add(str6[0]);
 for (let i = 0; i < str6.length; i++) {
     if(!(set.has(str6[i]))){
         set.add(str6[i]);
         ans = ans + str6[i];
     }   
 }
 console.log(`Removing duplicates from ${str6} is :  ${ans} `);
