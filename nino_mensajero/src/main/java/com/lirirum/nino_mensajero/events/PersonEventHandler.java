package com.lirirum.nino_mensajero.events;

import com.lirirum.nino_mensajero.keyword.KeywordRepository;
import com.lirirum.nino_mensajero.user.Person;
import com.lirirum.nino_mensajero.utils.textMotor.priority.MediumPriorityAnalizer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

import java.util.List;

@RepositoryEventHandler(Person.class)
public class PersonEventHandler {

    @Autowired
    private KeywordRepository keywordRepository;
    @HandleBeforeCreate
    public void handleAuthorBeforeCreate(Person person)
    {
        String[] keywords = person.getKeywords().split(",");
        for(String keyword:keywords){
            List<String> keywordSynonyms =MediumPriorityAnalizer.synonymsDictionary.get(keyword);
        }
    }
}
