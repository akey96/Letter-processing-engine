package com.lirirum.nino_mensajero.letter;

import com.lirirum.nino_mensajero.Utils.TextCorrector.TextCorrector;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class LetterService {

    private LetterRepository2 letterRepository;

    public LetterService(LetterRepository2 letterRepository) {
        this.letterRepository = letterRepository;
    }

    public List<Letter> findAllLetters() {
        return letterRepository.findAll();
    }

    public Letter saveLetter(Letter letter) {
        return letterRepository.save(letter);
    }

    public Letter updateLetterStatusToRead(long letterId) {
        Optional<Letter> optionalLetter = letterRepository.findById(letterId);
        if (optionalLetter.isPresent()) {
            Letter letter = optionalLetter.get();
            letter.setStatus(Status.READ);
            return letterRepository.save(letter);
        } else {
            return null;
        }
    }


}
