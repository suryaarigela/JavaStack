package com.dineshonjava.sbmdb.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Image {

	Object image;

	public Object getImage() {
		return image;
	}

	public void setImage(Object image) {
		this.image = image;
	}
}
