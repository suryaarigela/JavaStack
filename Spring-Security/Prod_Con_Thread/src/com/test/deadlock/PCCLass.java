package com.test.deadlock;

public class PCCLass {
	
	boolean flag=false;
    int num;
	synchronized  void  put(int i) {
		
		if(flag){

			try {
				wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
		}
		this.num=i;
		System.out.println("Produced number "+this.num);
		flag=true;
		notify();
		
	}

	synchronized  int  get() {
		if(!flag){
			try {
				wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println("received number "+this.num);
		flag=false;
		notify();
		return this.num;
	}
}
