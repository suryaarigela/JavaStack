package com.test.deadlock;

public class Consumer extends Thread {


	PCCLass pc;
	
	public Consumer(PCCLass pc) {
		this.pc=pc;
	}
	
	public void run(){
		for(int i=0;i<10;i++){
			pc.get();
		}
	}

}
