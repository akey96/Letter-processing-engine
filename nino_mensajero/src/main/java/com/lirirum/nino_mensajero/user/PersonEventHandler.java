package com.lirirum.nino_mensajero.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler
public class PersonEventHandler {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @HandleBeforeCreate()
    public void handlePersonCreation(Person person) {
        person.setUsername(person.getUsername().toLowerCase());
        person.setPassword(passwordEncoder.encode(person.getPassword()));
    }

}
