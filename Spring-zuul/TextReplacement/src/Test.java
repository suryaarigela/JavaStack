import org.apache.commons.lang3.StringUtils;

public class Test {

	public static void main(String[] args) {
		String s="abc.\"\"";
	//	s=s.replaceAll(".\"\"", ".\"");
		System.out.println(s);
		s=StringUtils.replace(s, ".\"\"", ".\"");
		System.out.println(s);
	}
}
