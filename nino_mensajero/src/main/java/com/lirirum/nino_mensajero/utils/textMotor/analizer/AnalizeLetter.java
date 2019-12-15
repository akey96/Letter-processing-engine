package com.lirirum.nino_mensajero.utils.textMotor.analizer;

import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.letterAnalysis.LetterAnalysis;
import com.lirirum.nino_mensajero.letterAnalysis.Sentiment;
import com.lirirum.nino_mensajero.utils.textCorrector.TextCorrector;
import com.lirirum.nino_mensajero.utils.textMotor.LetterComponent;
import com.lirirum.nino_mensajero.utils.textMotor.Pipeline;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.pipeline.CoreDocument;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service` `
public class AnalizeLetter {

    private final static String[] selectedTags = {"ADJ","NOUN","PROPN","PRON","VERB"};
    @Autowired
    private LetterComponent letterComponent;
    private static StanfordCoreNLP stanfordCoreNLP;
    static{
        stanfordCoreNLP = Pipeline.getPipeline();
    }

    public void analizeLetter(Letter letter){
        String correctedText = TextCorrector.spellChecker(letter.getMessage()).toLowerCase();
        System.out.println(correctedText);
        LetterAnalysis letterAnalysis =new LetterAnalysis();
        letterAnalysis.setTextCorrected(correctedText);
        letterAnalysis.setLetterSentiment(Sentiment.NEGATIVE);
        CoreDocument coreDocument =new CoreDocument(correctedText);
        stanfordCoreNLP.annotate(coreDocument);

        List<CoreLabel> coreLabelList = coreDocument.tokens();
        List<String> importantWords = collectImportantWords(coreLabelList);

        letterAnalysis.setImportantWords(importantWords);

        letterComponent.storeAnalysis(letterAnalysis);
        letter.setLetterAnalysis(letterAnalysis);

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
}
