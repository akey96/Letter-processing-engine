package com.lirirum.nino_mensajero.letter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LetterRepository2 extends JpaRepository<Letter, Long> {

}
