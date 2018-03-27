package com.javainuse.processor;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import com.javainuse.exception.CamelCustomException;

public class MyProcessor implements Processor {

    public void process(Exchange exchange) throws Exception {
        System.out.println("hello");
        throw new CamelCustomException();
    }

}
