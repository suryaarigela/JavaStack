package com.replace.text;

import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ReplaceText {

	public static void main(String[] args) throws IOException {

		if (args.length != 1) {
			System.out.println("Folder is mandatory");
			System.out.println("Exiting.....");
			System.exit(0);
		}

		String folder = args[0];

		Scanner scanner = new Scanner(new FileReader("placeholder.txt"));

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
		try (Stream<Path> paths = Files.walk(Paths.get(folder))) {
			paths.filter(Files::isRegularFile).forEach(file -> {
				try {
					replaceText(file, map);
				} catch (IOException e) {
					e.printStackTrace();
				}
			});
		}

	}

	private static void replaceText(Path path, HashMap<String, String> map) throws IOException {

		map.forEach((key, value) -> {
			Stream<String> lines = null;
			try {
				lines = Files.lines(path);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			List<String> replaced = lines.map(line -> line.replaceAll(key, value)).collect(Collectors.toList());
			try {
				Files.write(path, replaced);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			lines.close();
			System.out.println("Find and Replace done!!!");
		});

	}
}
