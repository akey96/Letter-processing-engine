package com.lirirum.nino_mensajero.utils.textMotor.priority;

import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.letter.Priority;
import com.lirirum.nino_mensajero.letterAnalysis.LetterAnalysis;
import com.lirirum.nino_mensajero.utils.textCorrector.TextCorrector;
import com.lirirum.nino_mensajero.utils.textMotor.LetterComponent;
import com.lirirum.nino_mensajero.utils.textMotor.Pipeline;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.pipeline.CoreDocument;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class PriorityAnalizer {


    private final static String[] selectedTags = {"ADJ","NOUN","PROPN","PRON","VERB"};

    private static StanfordCoreNLP stanfordCoreNLP;

    static{
        stanfordCoreNLP = Pipeline.getPipeline();
    }
    public static Letter givePriority(Letter letter){

        String correctedText = TextCorrector.spellChecker(letter.getMessage());
        LetterAnalysis letterAnalysis =new LetterAnalysis();
        letterAnalysis.setTextCorrected(correctedText);
        CoreDocument coreDocument =new CoreDocument(correctedText);
        stanfordCoreNLP.annotate(coreDocument);

        List<CoreLabel> coreLabelList = coreDocument.tokens();
        List<String> importantWords = collectImportantWords(coreLabelList);
        List<String> profileKeywords = retrieveKeywords(letter);

        letterAnalysis.setImportantWords(importantWords);

        new LetterComponent().storeAnalysis(letterAnalysis);

        letter = HighPriorityAnalizer.checkPriority(letter,importantWords,profileKeywords);

        if(letter.getPriority().equals(Priority.LOW_PRIORITY))
            MediumPriorityAnalizer.checkPriority(letter,importantWords,profileKeywords);

        return letter;
    }
    private static List<String> collectImportantWords(List<CoreLabel> coreLabelList){
        List<String> importantWords = new ArrayList<>();
        for(CoreLabel coreLabel: coreLabelList)
            if(checkTag(coreLabel.tag()))
                importantWords.add(coreLabel.word()); // we add the relevant words of the document to a list for further analysis
        return importantWords;
    }
    private static boolean checkTag(String tag){
        for(String x:selectedTags)
            if(tag.equals(x))
                return true;
        return false;
    }

    private static List retrieveKeywords(Letter letter){
        //when the letter will have its own profile assigned the keywords will be assigned//now is hardcoded
        return Arrays.asList("pelota","feliz","torta","colegio","gato","terco","terror", "vago", "tosco", "tolerante"); //example
    }
}
