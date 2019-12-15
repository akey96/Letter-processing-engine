package com.lirirum.nino_mensajero.utils.textMotor.priority;
import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.letter.Priority;
import com.lirirum.nino_mensajero.letterAnalysis.LetterAnalysis;
import com.lirirum.nino_mensajero.letterAnalysis.Sentiment;
import com.lirirum.nino_mensajero.user.Person;
import com.lirirum.nino_mensajero.utils.textCorrector.TextCorrector;
import com.lirirum.nino_mensajero.utils.textMotor.LetterComponent;
import com.lirirum.nino_mensajero.utils.textMotor.Pipeline;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.pipeline.CoreDocument;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class PriorityAnalizer {

    public  Letter givePriority(Letter letter){
        List<String> profileKeywords = retrieveKeywords(letter,letter.getResponsable());
        letter = HighPriorityAnalizer.checkPriority(letter,letter.getLetterAnalysis().getImportantWords(),profileKeywords);
        if(letter.getPriority().equals(Priority.LOW_PRIORITY))
            MediumPriorityAnalizer.checkPriority(letter,letter.getLetterAnalysis().getImportantWords(),profileKeywords);
        return letter;
    }

    private static List retrieveKeywords(Letter letter, Person person){
        return Arrays.asList(person.getKeywords().split(","));
    }
}
