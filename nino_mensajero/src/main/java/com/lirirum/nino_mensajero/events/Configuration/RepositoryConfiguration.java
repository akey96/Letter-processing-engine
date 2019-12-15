package com.lirirum.nino_mensajero.events.Configuration;

import com.lirirum.nino_mensajero.events.LetterEventHandler;
import com.lirirum.nino_mensajero.events.PersonEventHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RepositoryConfiguration {

    @Bean
    LetterEventHandler letterEventHandler(){
        return new LetterEventHandler();
    }
    @Bean
    PersonEventHandler personEventHandler(){
        return new PersonEventHandler();
    }
}
