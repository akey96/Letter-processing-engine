package com.lirirum.nino_mensajero.utils.textMotor;

import com.lirirum.nino_mensajero.keyword.Keyword;
import com.lirirum.nino_mensajero.keyword.KeywordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class KeywordComponent {
    @Autowired
    private KeywordRepository keywordRepository;

    public List<Keyword> getKeywords(){
        return keywordRepository.findAll();
    }
}
