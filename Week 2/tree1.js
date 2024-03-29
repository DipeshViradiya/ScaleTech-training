const prompt = require('prompt-sync')();

//Node class to implement basic structure of a particular node in tree
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }
    //insertData function inserts data in tree at right place
    insertData (data){
        var node = new Node(data);
        if(this.root == null) { 
            this.root = node;
            console.log("new root added : "+ node + node.data);
        } else {
            this.findPlaceAndInsert(this.root, node);
            
        } 
    }
    //findPlaceAndInsert function takes root of tree and adds node at a certain place according to binary search tree manner
    findPlaceAndInsert(root, node){
        if(node.data < root.data){
            if(root.left == null){
                root.left = node;
                console.log("left node added" + node + node.data);
            } else {
                this.findPlaceAndInsert(root.left, node);
            }
        } else {
            if(root.right == null){
                root.right = node;
                console.log("right node added" + node + node.data);
            } else {
                this.findPlaceAndInsert(root.right, node);
            }
        }
    }
    //function to print tree in inorder traversal manner
    inorder(root) {
        if(root !== null) {
            this.inorder(root.left);
            console.log(root.data);
            this.inorder(root.right);
        }
    }
    //function to find depth of tree by entering node
    maxDepth (root) {
        if (!root) {
            return 0;
        }

        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    }
    //function to find hierarchy in tree which sums equals to input k
    findAndPrintHierarchy(root, k) {
        if(root === null) {
            return;
        }
        stack.push(root.data);
        this.findAndPrintHierarchy(root.left, k);
        this.findAndPrintHierarchy(root.right, k);
        
        let sum = 0;

        for(let i = stack.length - 1; i >= 0 ; i--) {
            sum = sum + stack[i];
            if(sum === k) {
                flag = true;
                console.log("Possible Hierarchies : ");
                for(let j = i; j< stack.length ; j++) {
                    console.log(stack[j] + " ");
                }
                console.log();
            }
        }
        stack.pop();
    }
}
var binaryTreeObj = new BinaryTree();
let stack = [];
var flag = false;

/*
---------- This code is to generate random integers from 0 to 99 in tree----------
*/

var inputDepth = prompt("Enter the depth of a tree you want to create : ");
do{
    binaryTreeObj.insertData(Math.floor(Math.random() * 100));
} while (binaryTreeObj.maxDepth(binaryTreeObj.root) <= inputDepth)
console.log(binaryTreeObj.inorder(binaryTreeObj.root));

var sum = prompt("Enter the sum you want to print a hierarchy for... : ");
binaryTreeObj.findAndPrintHierarchy(binaryTreeObj.root, parseInt(sum));
if(!flag){
    console.log("No such hierarchies...");
}


/*
---the test code for small tree---

binaryTreeObj.insertData(4);
binaryTreeObj.insertData(2);
binaryTreeObj.insertData(6);
binaryTreeObj.insertData(1);
binaryTreeObj.insertData(3);
binaryTreeObj.insertData(5);
binaryTreeObj.insertData(7);
*/


/*

//binaryTreeObj.insertData(8);
//binaryTreeObj.insertData(45);
//console.log(binaryTreeObj.root + " " + binaryTreeObj.node);
//console.log(Object.keys(binaryTreeObj));
//console.log(Object.values(binaryTreeObj));
//console.log(binaryTreeObj.maxDepth(binaryTreeObj.root));
//console.log(binaryTreeObj.inorder(binaryTreeObj.root));*/

//binaryTreeObj.findAndPrintHierarchy(binaryTreeObj.root, 4);


/*

         4
         
  2             6
1    3      5      7


*/

/*
OUTPUT:
PS D:\ScaleTech\Training JS\Week 2> node .\tree1.js
new root added : [object Object]4
left node added[object Object]2  
right node added[object Object]6 
left node added[object Object]1  
right node added[object Object]3 
left node added[object Object]5  
right node added[object Object]7 
4 
2 

6 

DONE

 */
console.log("DONE");
