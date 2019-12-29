package com.lirirum.nino_mensajero.utils.textCorrector;


import java.util.ArrayList;
import java.util.List;

import org.languagetool.JLanguageTool;
import org.languagetool.language.Spanish;
import org.languagetool.rules.RuleMatch;
import java.io.IOException;

public class TextCorrector {


    public static String spellChecker(String texto){
        try {
            texto = texto.trim();
            texto = texto.toLowerCase();
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
            for (int i = 0; i < wrongWords.size(); i++) {
                texto = texto.replaceAll(wrongWords.get(i), checkedWords.get(i));
            }
        }
        catch(IOException exception){
            exception.printStackTrace();
        }
    return texto;
    }
}
