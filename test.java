import java.util.*;

class Test {
	public static void main(String[] args) {
		Stack<Integer> test = new Stack<Integer>();
		test.add(1);
		test.add(2);
		test.add(100);
		// System.out.print(test.toString());
		test.pop();
		// System.out.print(test.toString());

		Set<Integer> set = new HashSet<Integer>();
		set.add(1);
		// System.out.println(set.toString() + "haha this is a set");

		List<List<Integer>> l = new ArrayList<List<Integer>>();
		List<Integer> row = new ArrayList<Integer>();
		row.add(1);
		row.add(2);
		l.add(row);
		for(List<Integer> k : l){
			System.out.println(l.get(0)==row);
		}
		


	}

}
