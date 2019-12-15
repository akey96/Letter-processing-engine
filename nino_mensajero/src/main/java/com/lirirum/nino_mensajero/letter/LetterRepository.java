package com.lirirum.nino_mensajero.letter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface LetterRepository extends JpaRepository<Letter, Long> {
    Optional<List<Letter>> findByContentId(Long contentId);

    Optional<List<Letter>> findByResponsableId(Long responsableId);

}
