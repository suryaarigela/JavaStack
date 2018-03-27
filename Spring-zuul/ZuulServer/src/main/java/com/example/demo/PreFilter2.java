package com.example.demo;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

@Component
public class PreFilter2 extends ZuulFilter {
	private static Logger log = LoggerFactory.getLogger(PreFilter2.class);

	  @Override
	  public String filterType() {
	    return "pre";
	  }

	  @Override
	  public int filterOrder() {
	    return 2;
	  }

	  @Override
	  public boolean shouldFilter() {
	    return true;
	  }

	  @Override
	  public Object run() {
	    RequestContext ctx = RequestContext.getCurrentContext();
	    HttpServletRequest request = ctx.getRequest();

	    log.info("PreFilter 2: " + String.format("%s request to %s", request.getMethod(), request.getRequestURL().toString()));
	    System.out.println("PreFilter 2: " + String.format("%s request to %s", request.getMethod(), request.getRequestURL().toString()));
	    return null;
	  }
}