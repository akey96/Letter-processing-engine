package com.lirirum.nino_mensajero.letterAnalysis;

import org.springframework.stereotype.Service;

@Service
public class LetterAnalysisService {
    LetterAnalysisRepository letterAnalysisRepositor;

    public LetterAnalysisService(LetterAnalysisRepository letterAnalysisRepositor){
        this.letterAnalysisRepositor =letterAnalysisRepositor;
    }

    public LetterAnalysis saveAnalysis(LetterAnalysis letterAnalysis){
        return this.letterAnalysisRepositor.save(letterAnalysis);
    }
}

