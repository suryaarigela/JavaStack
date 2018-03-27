package com.javacodegeeks.snippets.enterprise;

public class Dog {
	private String name;

	private Color1 color1;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Color1 getColor1() {
		return color1;
	}

	public void setColor1(Color1 color1) {
		this.color1 = color1;
	}
	
	@Override
	public String toString() {
		return "The " + name + " has " + color1.toString();
		
	}
}
