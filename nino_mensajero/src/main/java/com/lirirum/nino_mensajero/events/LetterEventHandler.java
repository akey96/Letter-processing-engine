package com.lirirum.nino_mensajero.events;

import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.letter.Priority;
import com.lirirum.nino_mensajero.utils.textMotor.priority.PriorityAnalizer;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RepositoryEventHandler(Letter.class)
public class LetterEventHandler {
    Logger logger = LoggerFactory.getLogger(this.getClass().getSimpleName());

    @HandleBeforeCreate
    public void handleAuthorBeforeCreate(Letter letter){
        PriorityAnalizer.givePriority(letter);
    }

}