package com.lirirum.nino_mensajero.utils.textMotor.assignment;

import com.lirirum.nino_mensajero.keyword.Keyword;
import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.user.Person;
import com.lirirum.nino_mensajero.utils.textMotor.KeywordComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LetterAssignment {

    @Autowired
    private KeywordComponent keywordComponent;
    public void assignLetter(Letter letter){
        List<Keyword> keywords = keywordComponent.getKeywords();
        List<String> importantWordsList = letter.getLetterAnalysis().getImportantWords();
        Map<Person,Integer> candidates = new HashMap<>();
        for(String importantWord:importantWordsList){
            Keyword k = getKeyword(keywords,importantWord);
            if(k != null){
                addCandidates(k,candidates);
            }
        }
        if(candidates.isEmpty()||keywords.isEmpty()){
            letter.setResponsable(keywords.get(0).getPersonSet().iterator().next());
        }
        else{
            Person person= Collections.max(candidates.entrySet(), Map.Entry.comparingByValue()).getKey();
            letter.setResponsable(person);
        }
    }
    private void addCandidates(Keyword keyword,Map<Person,Integer> candidates){
        Set<Person> persons = keyword.getPersonSet();
        for(Person p:persons)
            candidates.merge(p, 1, Integer::sum);
    }
    private Keyword getKeyword(List<Keyword> keywords,String keyword){
        for(Keyword k: keywords)
            if(k.getKeyword().equals(keyword))
                return k;
        return null;
    }
}
