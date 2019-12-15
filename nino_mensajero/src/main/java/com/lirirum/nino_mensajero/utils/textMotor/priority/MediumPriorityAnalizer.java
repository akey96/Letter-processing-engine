package com.lirirum.nino_mensajero.utils.textMotor.priority;


import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.letter.Priority;
import org.springframework.core.io.ClassPathResource;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.*;

public class MediumPriorityAnalizer {
    public static HashMap<String, List<String>> synonymsDictionary = new HashMap<>();
    static{
        InputStream stream = chargeStream();
        chargeSynonyms(stream);
    }
    private static InputStream chargeStream(){
        InputStream resource = null;
        try {
            resource =new ClassPathResource("sinonimos.txt").getInputStream();
        }
        catch(IOException exception){
            exception.printStackTrace();
        }
        return resource;
    }
    private static void chargeSynonyms(InputStream stream)
    {
        BufferedReader buff = new BufferedReader(new InputStreamReader(stream));
        String line="";
        String word="";
        List<String> synonyms = new ArrayList<>();
        try {
            while ((line = buff.readLine()) != null) {
                line = line.replaceAll("\\s+","");
                word=line.substring(0,line.indexOf(';'));
                synonyms = Arrays.asList(line.substring(line.indexOf(';')+1).split(","));
                synonymsDictionary.put(word,synonyms);
            }
        }
        catch(IOException exception){
            exception.printStackTrace();
        }
    }
    public static Letter checkPriority(Letter letter,List<String> importantWords,List<String> profileKeywords){
        Set<String> profileKeywordSynonyms = new HashSet<>();
        fillImportantWordsSynonyms(profileKeywordSynonyms,profileKeywords);
        
        for(String importantWord: importantWords)
            if(profileKeywordSynonyms.contains(importantWord)){
                letter.setPriority(Priority.MEDIUM_PRIORITY);
                break;
            }
        return letter;
    }
    private static void fillImportantWordsSynonyms(Set<String> profileKeywordSynonyms,List<String> profileKeywords){
        for(String word:profileKeywords){
            List<String> wordSynonyms = synonymsDictionary.get(word);
            if(wordSynonyms != null){
                for(String synonym: wordSynonyms)
                    profileKeywordSynonyms.add(synonym);
            }
        }

    }

}
