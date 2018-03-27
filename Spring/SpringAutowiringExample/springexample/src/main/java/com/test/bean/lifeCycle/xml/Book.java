package com.test.bean.lifeCycle.xml;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanClassLoaderAware;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class Book implements  InitializingBean, DisposableBean, BeanFactoryAware, BeanNameAware, BeanClassLoaderAware {
	private String bookName;
	private String place;
	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		System.out.println("Place we set "+place);
		this.place = place;
	}

	/*private Book() {
		System.out.println("---inside constructor---");
	}*/
	 
	public void setBeanClassLoader(ClassLoader classLoader) {
	       System.out.println("---BeanClassLoaderAware.setBeanClassLoader---"+classLoader.toString());
	}	
	 
	public void setBeanName(String name) {
   	       System.out.println("---BeanNameAware.setBeanName---"+name);
	}	
	public void myPostConstruct() {
	    	 System.out.println("---init-method---");
	}	
	@PostConstruct
	public void surya() {
	    	 System.out.println("---@PostConstruct Surya---");
	}
	 
	public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
		System.out.println("---BeanFactoryAware.setBeanFactory---"+beanFactory.toString());
	}	
	 
	public void afterPropertiesSet() throws Exception {
		System.out.println("---InitializingBean.afterPropertiesSet---");
	}	
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
		System.out.println("setBookName: Book name has set." +bookName);		
	}
	public void myPreDestroy() {
		System.out.println("---destroy-method---");
	}
	@PreDestroy
	public void springPreDestroy() {
		System.out.println("---@PreDestroy---");
	}
	 
	public void destroy() throws Exception {
		System.out.println("---DisposableBean.destroy---");
	}
	 
	protected void finalize() {
		System.out.println("---inside finalize---");
	}
}
