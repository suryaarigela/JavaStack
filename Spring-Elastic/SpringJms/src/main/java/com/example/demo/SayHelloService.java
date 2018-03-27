package com.example.demo;

import org.springframework.stereotype.Service;

@Service
public class SayHelloService {
    public void sayHello(String name){
        System.out.println("################################");
        System.out.println("################################");
        System.out.println("################################");
        System.out.println("##  Hello " + name + "!!!" );
        System.out.println("################################");
        System.out.println("################################");
        System.out.println("################################");
    }
}