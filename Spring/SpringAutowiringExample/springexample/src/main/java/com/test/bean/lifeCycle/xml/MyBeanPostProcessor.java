package com.test.bean.lifeCycle.xml;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
public class MyBeanPostProcessor implements BeanPostProcessor {
	
	public Object postProcessAfterInitialization(Object bean, String beanName)
			throws BeansException {
		System.out.println("BeanPostProcessor.postProcessAfterInitialization");
		return bean;
	}
	
	public Object postProcessBeforeInitialization(Object bean, String beanName)
			throws BeansException {
		System.out.println("BeanPostProcessor.postProcessBeforeInitialization "+beanName);
		Book b=(Book)bean;
		System.out.println(b.getBookName() +" :: "+b.getPlace() );
		return bean;
	}
}