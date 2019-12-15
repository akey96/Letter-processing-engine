package com.lirirum.nino_mensajero.events;

import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.letter.Priority;
import com.lirirum.nino_mensajero.utils.textMotor.analizer.AnalizeLetter;
import com.lirirum.nino_mensajero.utils.textMotor.assignment.LetterAssignment;
import com.lirirum.nino_mensajero.utils.textMotor.priority.PriorityAnalizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RepositoryEventHandler(Letter.class)
public class LetterEventHandler {
    Logger logger = LoggerFactory.getLogger(this.getClass().getSimpleName());
    @Autowired
    private PriorityAnalizer priorityAnalizer;
    @Autowired
    private AnalizeLetter analizeLetter;
    @Autowired
    private LetterAssignment letterAssignment;
    @HandleBeforeCreate
    public void handleAuthorBeforeCreate(Letter letter){
        analizeLetter.analizeLetter(letter);
        letterAssignment.assignLetter(letter);
        priorityAnalizer.givePriority(letter);
    }

}
