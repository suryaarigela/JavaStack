import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class TestArrayList {

	public static void main(String[] args) {
		List<String> list=new LinkedList<String>();
		list.add("1");list.add("2");list.add("3");list.add("4");list.add("5");list.add("6");list.add("7");;list.add("8");
		Iterator<String> it=list.iterator();
		
		 Collections.reverseOrder();
		 list= list.subList(4,5);
		System.out.println(list.size());
		for (String string : list) {
			System.out.println(string);
		}
	}
}
