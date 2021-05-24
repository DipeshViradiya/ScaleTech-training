/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
import java.util.*;
class Node{
    Node left, right;
    int data;
    public Node(int data){
        this.data = data;
        left = null;
        right = null;
    }
}
public class Main
{
	static Scanner sc = null;
	public static void main(String[] args) {
	    sc = new Scanner(System.in);
		System.out.println("Hello World");
		Node node = createTree();
		System.out.println(node);
	}
	static Node createTree(){
	    Node root = null;
	    System.out.println("Enter the data : ");
	    int data = sc.nextInt();
	    if(data == -1) return null;
	    root = new Node(data);
	    
	    System.out.println("Enter left data of : " + data);
	    root.left = createTree();
	    System.out.println("Enter right data of : " + data);
	    root.right = createTree();
	    
	    return root;
	}
}
