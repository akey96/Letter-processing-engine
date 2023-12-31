package com.lirirum.nino_mensajero.content;

import com.lirirum.nino_mensajero.content.Content;
import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.user.Person;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RepositoryRestResource
public interface ContentRepository extends JpaRepository<Content, Long> {
    Optional<List<Content>> findByPersonId(Long personId);
    Optional<Content> findByIdAndPersonId(Long id, Long personId);

}
