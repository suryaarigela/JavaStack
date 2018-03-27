package com.exception;

public class EmployeeTest {

	public static void main(String[] args) {
		Employee e1= new Employee("surya");
		Employee e2= new Employee("surya");
		
		if(e1.equals(e2)){
			System.out.println("equals");
		}else{
			System.out.println("not equals");
		}
	}
}
