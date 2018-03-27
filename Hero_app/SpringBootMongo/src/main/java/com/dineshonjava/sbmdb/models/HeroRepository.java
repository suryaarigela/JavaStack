package com.dineshonjava.sbmdb.models;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface HeroRepository extends MongoRepository<Hero, String> {
	
	//public Hero findByName(String name);
	
	public Hero findByHeroId(int heroId);
	
	@Query("{ 'name':{$regex:?0,$options:'i'}}") 
	public Hero[] findByName(String name);
}
