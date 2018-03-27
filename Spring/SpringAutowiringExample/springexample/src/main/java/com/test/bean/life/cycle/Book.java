package com.test.bean.life.cycle;

import org.springframework.beans.factory.InitializingBean;

public class Book implements InitializingBean {
	private String bookName;
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
		System.out.println("---Inside setBookName---");
	}

	public void afterPropertiesSet() throws Exception {
		System.out.println("---afterPropertiesSet---");
		bookName = bookName + "-Hello";
	}
}
