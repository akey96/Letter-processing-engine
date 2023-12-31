package com.lirirum.nino_mensajero.letter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource
public interface LetterRepository extends JpaRepository<Letter, Long> {
    List<Letter> findByContentId(Long contentId);
    List<Letter> findByResponsableId(Long responsableId);

}
