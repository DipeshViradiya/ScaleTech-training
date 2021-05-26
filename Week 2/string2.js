/*

1 Find if a string has equal number of frequency for all characters
   for eg. abcd is equal frequencies as all characters a presne t 1 time,
   but aabcc has unequal frequency as b is present once

*/

let str1 = "abcdefghijklmnopqrstuvwxyz";
let str2 = "aabbccddeeffgghhiiaabbccddeeffgghhii";
let str3 = "aabccdeefgg";
let str4 = "aaaaaaaaaaaaabbbbbbbbbbbccccccccccccccccccc";

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

console.log(containsSameFrequency(str1));
console.log(containsSameFrequency(str2));
console.log(containsSameFrequency(str3));
console.log(containsSameFrequency(str4));


/*

2. Take a string from input
    also take a start and end position
    in between start and end position of the string determine the maximum possible palindromes in whatever combination

 */ 
let str5 = "zxyabacabaabazx"
let combinations = [];
for(let i = 0; i < str5.length-1; i++){
    for(let j = i+1; j < str5.length; j++){
        if(str5.slice(i, j) !== '') {
            combinations.push(str5.slice(i, j));
        }
    }
}

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
let maxCombinations = [];
for (let i = 0; i < combinations.length; i++) {
    if(isPalindrome(combinations[i])){
        maxCombinations.push(combinations[i]);
    }
}

console.log(maxCombinations);



