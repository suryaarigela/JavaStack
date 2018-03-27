package com.javacodegeeks.snippets.enterprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Tiger {
	
	private String name;

	@Autowired
	(required=false)
	@Qualifier("anotherColor")
	private Color color;
	
	
//	public Tiger(Color color) {
//		this.color = color;
//	}
	
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
