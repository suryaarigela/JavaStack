package com.javacodegeeks.snippets.enterprise;

public class Color {
	
	Color(){
		System.out.println("Color instance created "+this.baseColor);
	}
	private String baseColor;
	
	private String textureColor;
	
	public String getBaseColor() {
		return baseColor;
	}

	public void setBaseColor(String baseColor) {
		System.out.println("Setting base color "+baseColor);
		this.baseColor = baseColor;
	}

	public String getTextureColor() {
		return textureColor;
	}

	public void setTextureColor(String textureColor) {
		this.textureColor = textureColor;
	}

	@Override
	public String toString() {
		return baseColor + " base skin color and " + textureColor + " texture color." ;
		
	}
}
