package com.lirirum.nino_mensajero.events.Configuration;

import com.lirirum.nino_mensajero.events.LetterEventHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RepositoryConfiguration {

    @Bean
    LetterEventHandler letterEventHandler(){
        return new LetterEventHandler();
    }
}
