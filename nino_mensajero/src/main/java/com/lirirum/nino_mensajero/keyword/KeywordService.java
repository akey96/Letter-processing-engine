package com.lirirum.nino_mensajero.keyword;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KeywordService {
    @Autowired
    KeywordRepository keywordRepository;

    public KeywordService(KeywordRepository keywordRepository){
        this.keywordRepository = keywordRepository;
    }

    public Keyword saveKeyword(Keyword keyword){
        return this.keywordRepository.save(keyword);
    }
}
