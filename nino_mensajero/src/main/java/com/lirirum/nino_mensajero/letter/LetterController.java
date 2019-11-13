package com.lirirum.nino_mensajero.letter;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;


@RestController
@RequestMapping("/letters-2")
public class LetterController {

    private LetterService letterService;

    public LetterController(LetterService letterService) {
        this.letterService = letterService;
    }

//    @GetMapping
//    public List<Letter> findAllLetters() {
//        return letterService.findAllLetters();
//    }
//
//    @PostMapping
//    public Letter saveLetter(@RequestBody Letter letter) {
//        return letterService.saveLetter(letter);
//    }

    @PutMapping("/{letterId}/status/read") // mismo nombre en aqui y en PathVariable
    public Letter updateLetterStatusToRead(@PathVariable("letterId") long letterId) {
        return letterService.updateLetterStatusToRead(letterId);
    }
    /*@GetMapping ( " / redactor/letter-response/{letterId} " )
    public  Letter  datos ( @PathVariable ( "letterId" ) Long  letterId )
    {

        return  Letter;
    }*/
}
