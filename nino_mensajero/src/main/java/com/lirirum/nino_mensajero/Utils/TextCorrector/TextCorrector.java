package com.lirirum.nino_mensajero.Utils.TextCorrector;


import java.util.ArrayList;
import java.util.List;

import org.languagetool.JLanguageTool;
import org.languagetool.language.Spanish;
import org.languagetool.rules.RuleMatch;
import java.io.IOException;

public class TextCorrector {


    public static String correctorGaby(String texto) {
        try {
            JLanguageTool langTool = new JLanguageTool(new Spanish());
            List<RuleMatch> matches = langTool.check(texto);
            List<String> palabrasErroneas = new ArrayList<String>();
            List<String> palabrasCorregidas = new ArrayList<String>();

            for (RuleMatch match : matches) {

                if (match.getSuggestedReplacements().size() > 0) {
                    palabrasErroneas.add(texto.substring(match.getFromPos(), match.getToPos()));
                    palabrasCorregidas.add(match.getSuggestedReplacements().get(0));
                }
            }
            System.out.println(palabrasErroneas);
            System.out.println(palabrasCorregidas);

            for (int i = 0; i < palabrasErroneas.size(); i++) {
                texto = texto.replaceAll(palabrasErroneas.get(i), palabrasCorregidas.get(i));
            }
        }
        catch (IOException exception){
            exception.printStackTrace();
        }
        return texto;
    }
}
