package com.lirirum.nino_mensajero;

import com.lirirum.nino_mensajero.user.Person;
import com.lirirum.nino_mensajero.user.PersonRepository;
import com.lirirum.nino_mensajero.user.PersonRole;
import com.lirirum.nino_mensajero.user.PersonStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {
    @Autowired
    PersonRepository personRepository;

    @Autowired
    public PasswordEncoder encoder;

    @Value("${admin.username}")
    private String usernameAdmin;

    @Value("${admin.password}")
    private String passwordAdmin;

    @Value("${admin.name}")
    private String nameAdmin;

    @Value("${admin.ci}")
    private String ciAdmin;

    @Value("${admin.email}")
    private String emailAdmin;

    @Override
    public void run(String...args) throws Exception {

        Person admin = personRepository.findByUsername("fer").orElse(new Person());
        admin.setUsername(usernameAdmin.toLowerCase());
        admin.setPassword(encoder.encode(passwordAdmin));
        admin.setName(nameAdmin);
        admin.setCi(ciAdmin);
        admin.setEmail(emailAdmin);
        admin.setBirthday(new Date());
        admin.setPersonRole(PersonRole.ROLE_ADMINISTRATOR);
        admin.setPersonStatus(PersonStatus.ACTIVE);
        personRepository.save(admin);
    }
}