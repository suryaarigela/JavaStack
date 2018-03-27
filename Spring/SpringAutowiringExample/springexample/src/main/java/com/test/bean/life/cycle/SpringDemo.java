package com.test.bean.life.cycle;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
public class SpringDemo {
   public static void main(String[] args) {
       AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
       ctx.register(AppConfig.class);
       ctx.refresh();
  	   Book book = ctx.getBean(Book.class);
	   System.out.println("Book Name:"+ book.getBookName());
       ctx.close();
   }
}
