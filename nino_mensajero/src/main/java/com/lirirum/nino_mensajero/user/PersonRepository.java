package com.lirirum.nino_mensajero.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface PersonRepository extends JpaRepository<Person, Long> {
    Person findByUsername(String username);
    List<Person> findAllByUsername(String username);
}
