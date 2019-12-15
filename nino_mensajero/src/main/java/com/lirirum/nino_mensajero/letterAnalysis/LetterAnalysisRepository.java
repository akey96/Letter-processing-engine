package com.lirirum.nino_mensajero.letterAnalysis;

import com.lirirum.nino_mensajero.letter.Letter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LetterAnalysisRepository extends JpaRepository<LetterAnalysis, Long> {

}