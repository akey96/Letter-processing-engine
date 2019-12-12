package com.lirirum.nino_mensajero.utils.textMotor;

import com.lirirum.nino_mensajero.letterAnalysis.LetterAnalysis;
import com.lirirum.nino_mensajero.letterAnalysis.LetterAnalysisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class LetterComponent {
    @Autowired
    private LetterAnalysisRepository letterAnalysisRepository;

    public void storeAnalysis(LetterAnalysis letterAnalysis){
        letterAnalysisRepository.save(letterAnalysis);
    }
}
