package com.lirirum.nino_mensajero.content;

import com.lirirum.nino_mensajero.exceptions.ResourceNotFoundException;
import com.lirirum.nino_mensajero.letter.LetterRepository;
import com.lirirum.nino_mensajero.user.PersonRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class ContentService {

    private ContentRepository contentRepository;
    private PersonRepository personRepository;
    private LetterRepository letterRepository;


    public ContentService(ContentRepository contentRepository, PersonRepository personRepository, LetterRepository letterRepository) {
        this.contentRepository = contentRepository;
        this.personRepository = personRepository;
        this.letterRepository = letterRepository;
    }

    public Content createContent(Long personId, ContentDTO contentDTO) {

        Content content = new Content();
        content.setId(contentDTO.id);
        content.setDescription(contentDTO.description);
        content.setPerson(contentDTO.person);
        content.setCreationDate(contentDTO.creationDate);

        Content contentSave = personRepository.findById(personId).map(person -> {
            content.setPerson(person);

            return contentRepository.save(content);
        }).orElseThrow(() -> new ResourceNotFoundException("PersonId " + personId + " not found"));

        for ( Long id: contentDTO.letters) {
            letterRepository.findById(id).map(letter -> {
                letter.setContent(contentSave);
                return letterRepository.save(letter);
            });
        }
        return contentRepository.save(contentSave);
    }

    public Content updateContent( Long personId, Long contentId, Content contentRequest) {

        if(!personRepository.existsById(personId)) {
            throw new ResourceNotFoundException("PersonId " + personId + " not found");
        }

        return contentRepository.findById(contentId).map(content -> {
            return contentRepository.save(content);
        }).orElseThrow(() -> new ResourceNotFoundException("ContentId " + contentId + "not found"));
    }

    public ResponseEntity<?> deleteContent(Long personId, Long contentId) {
        return contentRepository.findByIdAndPersonId(contentId, personId).map(content -> {
            contentRepository.delete(content);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Content not found with id " + contentId + " and personId " + personId));
    }


}
