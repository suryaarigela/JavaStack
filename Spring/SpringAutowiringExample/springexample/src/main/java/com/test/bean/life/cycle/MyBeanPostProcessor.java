package com.test.bean.life.cycle;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;
@Component
public class MyBeanPostProcessor implements BeanPostProcessor {

	public Object postProcessBeforeInitialization(Object bean, String beanName)
			throws BeansException {
		    System.out.println("postProcessBeforeInitialization: Bean Name- " + beanName);
		    if (bean instanceof Book) {
		    	Book b = (Book)bean;
		    	b.setBookName(b.getBookName()+"-Before");
		    }
		    return bean;
	}	

	public Object postProcessAfterInitialization(Object bean, String beanName)
			throws BeansException {
	        System.out.println("postProcessAfterInitialization: Bean Name- " + beanName);
		    if (bean instanceof Book) {
		    	Book b = (Book)bean;
		    	b.setBookName(b.getBookName()+"-After");
		    }
		    return bean;
	}
}