package com.exception;

public class Employee {
	
	private String name;
	
	private int id;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public Employee(String name) {
		this.name=name;
	}
	@Override
	public boolean equals(Object obj) {
		if(obj!= null && obj instanceof Employee){
			Employee emp=(Employee)obj;
			return emp.getName().equals(this.getName());
		}else{
			return false;
		}
	}
	@Override
	public int hashCode(){
		return getId();
	}

}
