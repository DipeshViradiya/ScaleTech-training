const prompt = require('prompt-sync')();

/*

1 Find if a string has equal number of frequency for all characters
   for eg. abcd is equal frequencies as all characters a presne t 1 time,
   but aabcc has unequal frequency as b is present once

*/

let str1 = prompt("Find a string to check equal frequency of characters : ");

//function to check frequency of string
function containsSameFrequency(test){
    let map = new Map();
    for (let i = 0; i < test.length; i++) {
        if(map.has(test[i])){
            map.set(test[i], map.get(test[i]) + 1);
        } else {
            map.set(test[i], 1);
        }
    }
    let ans = map.get(test[0]);
    for(let freq of map.values()){
        if(ans != freq) return false;
    }
    return true;
}

console.log(`string = ${str1} contains same character frequency ? : ${containsSameFrequency(str1)}`);


/*

2. Take a string from input
    also take a start and end position
    in between start and end position of the string determine the maximum possible palindromes in whatever combination

 */ 
let str5 = prompt("Enter the string to find maximum palindrome : ");
const start = parseInt(prompt("Enter the start pointer of string : "));
const end = parseInt(prompt("Enter the end pointer of string : "));
str5 = str5.substring(start, end+1);

let maxCombinations = new Set();     //a set to avoid duplicates
for(let i = 0; i < str5.length-1; i++){
    for(let j = i+1; j < str5.length; j++){
        if(str5.slice(i, j) !== '') {
            if(isPalindrome(str5.slice(i,j))) {
                maxCombinations.add(str5.slice(i,j));
            }
        }
    }
}

//function to check if string is palindrome
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


console.log("The maximum possible combinations of palindrome is : ");
maxCombinations.forEach(element => {
    console.log(element);  
});



