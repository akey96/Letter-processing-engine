package com.lirirum.nino_mensajero.Utils.TextCorrector;


import java.util.ArrayList;
import java.util.List;

import org.languagetool.JLanguageTool;
import org.languagetool.language.Spanish;
import org.languagetool.rules.RuleMatch;
import java.io.IOException;

public class TextCorrector {


    public static String spellChecker(String texto) throws IOException {

            JLanguageTool langTool = new JLanguageTool(new Spanish());
            List<RuleMatch> matches = langTool.check(texto);
            List<String> wrongWords = new ArrayList<String>();
            List<String> checkedWords = new ArrayList<String>();

            for (RuleMatch match : matches) {

                if (match.getSuggestedReplacements().size() > 0) {
                    wrongWords.add(texto.substring(match.getFromPos(), match.getToPos()));
                    checkedWords.add(match.getSuggestedReplacements().get(0));
                }
            }
            System.out.println(wrongWords);
            System.out.println(checkedWords);

            for (int i = 0; i < wrongWords.size(); i++) {
                texto = texto.replaceAll(wrongWords.get(i), checkedWords.get(i));
            }
        
    return texto;
    }
}
