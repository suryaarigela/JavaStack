package com.javainuse;

import org.apache.camel.builder.RouteBuilder;

public class SimpleRouteBuilder extends RouteBuilder {

    @Override
    public void configure() throws Exception {
        from("file:C:/inbox?noop=true").split().tokenize("\n").to("jms:queue:javainuse");
    }

}