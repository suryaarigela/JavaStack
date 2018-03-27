package com.test.deadlock;

public class Producer extends Thread {

	PCCLass pc;
	
	public Producer(PCCLass pc) {
		this.pc=pc;
	}
	
	public void run(){
		for(int i=0;i<10;i++){
			pc.put(i);
		}
	}
}
