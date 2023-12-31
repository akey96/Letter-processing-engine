package com.lirirum.nino_mensajero.events;

import com.lirirum.nino_mensajero.keyword.Keyword;
import com.lirirum.nino_mensajero.keyword.KeywordRepository;
import com.lirirum.nino_mensajero.user.Person;
import com.lirirum.nino_mensajero.user.PersonRole;
import com.lirirum.nino_mensajero.utils.textCorrector.TextCorrector;
import com.lirirum.nino_mensajero.utils.textMotor.priority.MediumPriorityAnalizer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.w3c.dom.Text;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@RepositoryEventHandler(Person.class)
public class PersonEventHandler {

    @Autowired
    private KeywordRepository keywordRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @HandleBeforeCreate()
    public void handlePersonCreation(Person person) {
        person.setUsername(person.getUsername().toLowerCase());
        person.setPassword(passwordEncoder.encode(person.getPassword()));
        cleanKeywords(person);
        System.out.println(person.getKeywords());
    }

    @HandleAfterCreate
    public void handleAuthorBeforeCreate(Person person)
    {
        if (person.getPersonRole() == PersonRole.ROLE_REDACTOR) {
            String[] keywords = person.getKeywords().split(",");
            keywords = correctedWords(keywords);
            for(String keyword:keywords){
                addKeyword(keyword,person);
                List<String> keywordSynonyms =MediumPriorityAnalizer.synonymsDictionary.get(keyword);
                if(keywordSynonyms != null) {
                    for(String synonym: keywordSynonyms)
                        addKeyword(synonym,person);
                }

            }
        }
    }
    private void cleanKeywords(Person p){
        String [] temp = p.getKeywords().split(",");
        String res = "";
        for(int i = 0 ; i < temp.length;i++){
            res+=TextCorrector.spellChecker(temp[i])+",";
        }
        String save =  res.substring(0,res.length()-1);
        System.out.println(save);
        p.setKeywords(save );
    }
    private String[] correctedWords(String[] keywords){
        for(int i = 0 ; i < keywords.length;i++) {
           keywords[i] = TextCorrector.spellChecker(keywords[i]);
        }
        return keywords;
    }
    private void addKeyword(String keyword,Person person){
        Optional<Keyword> foundKeyword= keywordRepository.findById(keyword);
        Keyword temp;
        if(foundKeyword.isPresent()) {
            temp = foundKeyword.get();
            temp.getPersonSet().add(person);
            keywordRepository.save(temp);
        }
        else{
            temp = new Keyword();
            temp.setKeyword(keyword);
            temp.setPersonSet(new HashSet<>());
            temp.getPersonSet().add(person);
            keywordRepository.save(temp);
        }
    }

}
