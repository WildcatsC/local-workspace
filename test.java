import java.util.*;

 class Test{
	public static void main(String[] args){
		Stack<Integer> test = new Stack<Integer>();
		test.add(1);
		test.add(2);
		test.add(100);
		System.out.print(test.toString());
		test.pop();
		System.out.print(test.toString());
}

}
