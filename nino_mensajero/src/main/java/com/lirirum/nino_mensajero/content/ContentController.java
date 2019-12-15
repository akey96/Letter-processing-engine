
package com.lirirum.nino_mensajero.content;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


    @RestController
    public class ContentController {

        @Autowired
        private ContentService contentService;

        @PostMapping("/persons/{personId}/content")
        public Content createContent(@PathVariable (value = "personId") Long personId,
                                     @Valid @RequestBody ContentDTO contentDTO) {

            return contentService.createContent(personId,contentDTO) ;
        }

        @PutMapping("/persons/{personId}/content/{contentId}")
        public Content updateContent(@PathVariable (value = "personId") Long personId,
                                     @PathVariable (value = "contentId") Long contentId,
                                     @Valid @RequestBody Content contentRequest) {
            return contentService.updateContent(personId,contentId, contentRequest);
        }

        @DeleteMapping("/persons/{personId}/content/{contentId}")
        public ResponseEntity<?> deleteContent(@PathVariable (value = "personId") Long personId,
                                               @PathVariable (value = "contentId") Long contentId) {
            return contentService.deleteContent(personId,contentId);
        }

    }
