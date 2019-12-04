package com.lirirum.nino_mensajero;

import com.lirirum.nino_mensajero.user.Person;
import com.lirirum.nino_mensajero.user.PersonRepository;
import com.lirirum.nino_mensajero.user.PersonRole;
import com.lirirum.nino_mensajero.user.PersonStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {
    @Autowired
    PersonRepository personRepository;

    @Override
    public void run(String...args) throws Exception {
        Person admin = new Person();
        admin.setUsername("fer");
        admin.setPassword("$2a$04$EZzbSqieYfe/nFWfBWt2KeCdyq0UuDEM1ycFF8HzmlVR6sbsOnw7u");
        admin.setName("fernando");
        admin.setCi("5232821CB");
        admin.setEmail("fernando.soto@fundacion-jala.org");
        admin.setBirthday(new Date());
        admin.setPersonRole(PersonRole.ADMINISTRATOR);
        admin.setPersonStatus(PersonStatus.ACTIVE);
        personRepository.save(admin);
    }
}