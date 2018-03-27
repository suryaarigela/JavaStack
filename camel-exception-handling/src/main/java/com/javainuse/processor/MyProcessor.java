package com.javainuse.processor;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import com.javainuse.exception.CamelCustomException;

public class MyProcessor implements Processor {

    public static int count = 1;

    public void process(Exchange exchange) throws Exception {
        System.out.println("Exception Thrown");
        throw new CamelCustomException();
    }

}
