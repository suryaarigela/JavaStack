package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("classpath*:/spring/si-config.xml")
public class HelloWorldSiActivemqApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldSiActivemqApplication.class, args);
    }
}