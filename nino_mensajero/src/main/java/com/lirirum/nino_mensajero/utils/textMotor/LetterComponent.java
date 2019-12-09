package com.lirirum.nino_mensajero.utils.textMotor;

import com.lirirum.nino_mensajero.letterAnalysis.LetterAnalysis;
import com.lirirum.nino_mensajero.letterAnalysis.LetterAnalysisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LetterComponent {
    @Autowired
    private LetterAnalysisRepository letterAnalysisRepository;

    public void storeAnalysis(LetterAnalysis letterAnalysis){
        System.out.println(letterAnalysis.getImportantWords());
        letterAnalysisRepository.save(letterAnalysis);
    }
}
