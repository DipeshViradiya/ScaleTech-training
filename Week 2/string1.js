/*
1.Check if a string is equal to other
 */

let str1 = "abcdefg";
let str2 = "abdgfhy";
let str3 = "abcdefg";

console.log("str1 equals str2 ? : "+ (str1==str2));
console.log("str1 equals str3 ? : "+ (str1==str3));

/*
2.Check if a string is palindrome
 */

let str4 = "abcdefgfedcba";
let str5 = "srdcfgvhnkm";

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

console.log(isPalindrome(str4) + "   " + isPalindrome(str5));

/*
3 Remove all the duplicates in the string
 */

 let str6 = "aabbccaabbccddffggthjkh";
 let set = new Set();
 let ans = str6[0];
 set.add(str6[0]);
 for (let i = 0; i < str6.length; i++) {
     if(!(set.has(str6[i]))){
         set.add(str6[i]);
         ans = ans + str6[i];
     }   
 }
 console.log("Removing duplicates from " + str6 + " is : " + ans );
