package com.lirirum.nino_mensajero.content;

import com.lirirum.nino_mensajero.exceptions.ResourceNotFoundException;
import com.lirirum.nino_mensajero.content.Content;
import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.user.PersonRepository;
import com.lirirum.nino_mensajero.content.ContentRepository;
import com.lirirum.nino_mensajero.letter.LetterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;

@RestController
public class ContentController {

    @Autowired
    private ContentRepository contentRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private LetterRepository letterRepository;


    @GetMapping("/persons/{personId}/content")
    public List<Content> getAllContentByPersonId(@PathVariable (value = "personId") Long personId,
                                                 Pageable pageable) {

        return contentRepository.findByPersonId(personId).orElseThrow(() -> new ResourceNotFoundException("Perosn not found with id " + personId));

    }

    @PostMapping("/persons/{personId}/content")
    public Content createContent(@PathVariable (value = "personId") Long personId,
                                 @Valid @RequestBody ContentDTO contentDTO) {
        Content content = new Content();
        content.setId(contentDTO.id);
        content.setContent(contentDTO.content);
        content.setPerson(contentDTO.person);
        content.setCreationDate(contentDTO.creationDate);

        Content contentSave = personRepository.findById(personId).map(person -> {
            content.setPerson(person);
            return contentRepository.save(content);
        }).orElseThrow(() -> new ResourceNotFoundException("PersonId " + personId + " not found"));

        for (Long id: contentDTO.letters) {
            letterRepository.findById(id).map(letter -> {
                letter.setContent(contentSave);
                return letterRepository.save(letter);
            });
        }
        return contentRepository.save(contentSave);
    }

    @PutMapping("/persons/{personId}/content/{contentId}")
    public Content updateContent(@PathVariable (value = "personId") Long personId,
                                 @PathVariable (value = "contentId") Long contentId,
                                 @Valid @RequestBody Content contentRequest) {
        if(!personRepository.existsById(personId)) {
            throw new ResourceNotFoundException("PersonId " + personId + " not found");
        }

        return contentRepository.findById(contentId).map(content -> {
            content.setContent(contentRequest.getContent());
            return contentRepository.save(content);
        }).orElseThrow(() -> new ResourceNotFoundException("ContentId " + contentId + "not found"));
    }

    @DeleteMapping("/persons/{personId}/content/{contentId}")
    public ResponseEntity<?> deleteContent(@PathVariable (value = "personId") Long personId,
                                           @PathVariable (value = "contentId") Long contentId) {
        return contentRepository.findByIdAndPersonId(contentId, personId).map(content -> {
            contentRepository.delete(content);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Content not found with id " + contentId + " and personId " + personId));
    }


}
