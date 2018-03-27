package com.dineshonjava.sbmdb.models;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface FaceBookRepository extends MongoRepository<FaceBookUser, String> {
	
	public FaceBookUser findByUserName(String userName);
	
	public FaceBookUser findByEmail(String email);
	
	public void deleteByEmail(String email);
}
