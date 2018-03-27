package com.javacodegeeks.snippets.enterprise;

public class Cat {
	
	private String name;

	private Color color;
	
	public String getName() {
		return name;
	}

	public Color getColor() {
		return color;
	}

	public void setColor(Color color) {
		this.color = color;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	@Override
	public String toString() {
		return "The " + name + " has " + color.toString();
		
	}
}
