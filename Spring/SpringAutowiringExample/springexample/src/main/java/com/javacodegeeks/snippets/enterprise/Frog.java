package com.javacodegeeks.snippets.enterprise;

public class Frog {
	private String name;

	private Color color;
	
	public Frog(Color color){
		this.color = color;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Color getColor() {
		return color;
	}

	public void setColor(Color color) {
		this.color = color;
	}
	
	@Override
	public String toString() {
		return "The " + name + " has " + color.toString();
		
	}
}
