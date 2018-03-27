
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Scanner;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;

public class ReplaceText {

	public static void main(String[] args) throws IOException {

		if (args.length != 2) {
			System.out.println("Folder is mandatory");
			System.out.println("Exiting.....");
			System.exit(0);
		}

		String folder = args[0];
		Scanner scanner = new Scanner(new FileReader(args[1]));
		HashMap<String, String> map = new HashMap<String, String>();
		while (scanner.hasNextLine()) {
			String[] columns = scanner.nextLine().split(":");
			map.put(columns[0], columns[1]);
		}

		if (!folder.isEmpty()) {
			replaceContent(folder, map);
		} else {
			System.out.println("Please provide all the values");
		}

	}

	private static void replaceContent(String folder, HashMap<String, String> map) throws IOException {
		File[] files = new File(folder).listFiles();
		for (File file : files) {
			if (file.isFile()) {
				replaceText(file, map);
			} else if (file.isDirectory()) {
				File[] Innerfiles = file.listFiles();
				for (File innerFile : Innerfiles) {
					if (innerFile.isFile()) {
						replaceText(innerFile, map);
					}
				}
			}
		}
	}

	private static void replaceText(File path, HashMap<String, String> map) throws IOException {
		Iterator<String> mapIter = map.keySet().iterator();
		while (mapIter.hasNext()) {
			String key = mapIter.next();
			String value = map.get(key);
			String bkp="C:\\IGC\\TestBkp\\"+path.getName();
			copyFileUsingApache(path,new File(bkp));
			Path path1 = Paths.get(path.toURI());
			Charset charset = StandardCharsets.UTF_8;
			String content = new String(Files.readAllBytes(path1), charset);
			content = StringUtils.replace(content, key, value);
			Files.write(path1, content.getBytes(charset));
		}

	}
	
	public static void copyFileUsingApache(File from, File to) throws IOException {
		FileUtils.copyFile(from, to);
	}

	
}
