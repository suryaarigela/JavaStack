package com.javainuse;

import org.apache.camel.builder.RouteBuilder;

public class SimpleRouteBuilder extends RouteBuilder {

    @Override
    public void configure() throws Exception {
        from("file:C:/inputFolder?noop=true").to("file:C:/outputFolder");
    }

}
