package com.lirirum.nino_mensajero.letter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface LetterRepository extends JpaRepository<Letter, Long> {

}
