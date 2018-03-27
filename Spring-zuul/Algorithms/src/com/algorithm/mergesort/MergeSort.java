package com.algorithm.mergesort;

public class MergeSort {
	private int[] array;
	private int[] tempMergArr;
	private int length;

	public static void main(String[] args) {

		int[] inputArr = { 45, 23, 11, 89, 77, 98, 4, 28, 65, 43 };
		MergeSort mms = new MergeSort();
		mms.sort(inputArr);
		for (int i : inputArr) {
			System.out.print(i);
			System.out.print(" ");
		}
	}

	private void sort(int[] inputArr) {
		// TODO Auto-generated method stub
		this.array = inputArr;
		this.length = inputArr.length;
		this.tempMergArr = new int[length];
		doMergeSort(0, length - 1);
	}

	private void doMergeSort(int lowerIndex, int higherIndex) {
		if (lowerIndex < higherIndex) {
		int middle = lowerIndex + (higherIndex - lowerIndex) / 2;
		// Below step sorts the left side of the array
		doMergeSort(lowerIndex, middle);
		// Below step sorts the right side of the array
		doMergeSort(middle + 1, higherIndex);
		// Now merge both sides
		mergeParts(lowerIndex, middle, higherIndex);
  }
		
	}

	private  void mergeParts(int lowerIndex, int middle, int higherIndex) {
		for (int i = lowerIndex; i <= higherIndex; i++) {
			
			tempMergArr[i] = array[i];
		}
		int i = lowerIndex;
		int j = middle + 1;
	}
	}

