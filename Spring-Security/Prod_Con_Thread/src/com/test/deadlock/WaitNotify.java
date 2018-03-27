package com.test.deadlock;

public class WaitNotify {

	public static void main(String[] args) {
		PCCLass pc=new PCCLass();
		Producer p=new Producer(pc);
		Consumer c=new Consumer(pc);
		p.start();c.start();
	}
}
