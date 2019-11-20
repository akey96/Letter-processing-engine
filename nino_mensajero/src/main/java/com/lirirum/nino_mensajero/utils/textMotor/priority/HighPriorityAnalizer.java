package com.lirirum.nino_mensajero.utils.textMotor.priority;

import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.letter.Priority;
import edu.stanford.nlp.ling.CoreLabel;

import java.util.Arrays;
import java.util.List;

public class HighPriorityAnalizer {

    public static Letter checkPriority(Letter letter,List<String> importantWords,List<String> profileKeywords){
        for(String word: importantWords){
                if(containsKeyword(profileKeywords,word)) {
                    letter.setPriority(Priority.HIGH_PRIORITY);
                    break;
                }
        }
        return letter;
    }

    private static boolean containsKeyword(List<String> profileKeywords,String word){
        return profileKeywords.contains(word.toLowerCase());
    }
}
