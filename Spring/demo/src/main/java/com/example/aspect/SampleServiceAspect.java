package com.example.aspect;

import org.slf4j.Logger;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class SampleServiceAspect {
    private static final Logger LOGGER = LoggerFactory.getLogger(SampleServiceAspect.class);
    @Before("execution(com.example.controller.myFirstApp())")
    public void beforeSampleCreation() {
    	System.out.println("Before calling ");
        LOGGER.info("Before calling ");
    }
}
