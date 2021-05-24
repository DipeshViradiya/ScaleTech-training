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

    insertData (data){
        var node = new Node(data);
        if(this.root == null) { 
            this.root = node;
            console.log("new root added : "+ node + node.data);
        } else {
            this.findPlaceAndInsert(this.root, node);
            
        } 
    }

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

    inorder(root) {
        if(root !== null) {
            this.inorder(root.left);
            console.log(root.data);
            this.inorder(root.right);
        }
    }

    maxDepth (root) {
        if (!root) {
            return 0;
        }

        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
    };
}
var binaryTreeObj = new BinaryTree();
var inputDepth = 2;
do{
    binaryTreeObj.insertData(Math.floor(Math.random() * 100));
} while (binaryTreeObj.maxDepth(binaryTreeObj.root) <= inputDepth)
console.log(binaryTreeObj.inorder(binaryTreeObj.root));


/*
binaryTreeObj.insertData(7);
binaryTreeObj.insertData(2);
binaryTreeObj.insertData(5);
binaryTreeObj.insertData(1);
binaryTreeObj.insertData(3);
binaryTreeObj.insertData(7);
binaryTreeObj.insertData(4);
binaryTreeObj.insertData(6);
binaryTreeObj.insertData(45);
console.log(binaryTreeObj.root + " " + binaryTreeObj.node);
console.log(Object.keys(binaryTreeObj));
console.log(Object.values(binaryTreeObj));
console.log(binaryTreeObj.maxDepth(binaryTreeObj.root));
console.log(binaryTreeObj.inorder(binaryTreeObj.root));
*/








