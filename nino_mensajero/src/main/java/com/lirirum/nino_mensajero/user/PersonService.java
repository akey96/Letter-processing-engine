package com.lirirum.nino_mensajero.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public List<Person> getPersons(String username) {
        return (username == null) ? personRepository.findAll() : personRepository.findAllByUsername(username);
    }
}
