package com.exception;

public class Equals {

	public static void main(String[] args) {
		String s1=new String("surya");
		String s2=new String("surya");
		if(s1==s2){
			System.out.println("Strings =");
		}
		if(s1.equals(s2)){
			System.out.println("Strings equals");
		}
	}
}
