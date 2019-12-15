package com.lirirum.nino_mensajero.letterAnalysis;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.lirirum.nino_mensajero.letter.Letter;
import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@Entity
@Table(name = "LETTER_ANALYSIS")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class LetterAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String textCorrected;
    @NotNull
    @Column( nullable = false)
    @ElementCollection(targetClass=String.class)
    private List<String> importantWords;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Sentiment letterSentiment;

    @OneToOne(mappedBy = "letterAnalysis")
    private Letter letter;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTextCorrected() {
        return textCorrected;
    }

    public void setTextCorrected(String textCorrected) {
        this.textCorrected = textCorrected;
    }

    public List<String> getImportantWords() {
        return importantWords;
    }

    public void setImportantWords(List<String> importantWords) {
        this.importantWords = importantWords;
    }

    public Sentiment getLetterSentiment() {
        return letterSentiment;
    }

    public void setLetterSentiment(Sentiment letterSentiment) {
        this.letterSentiment = letterSentiment;
    }

    public Letter getLetter() {
        return letter;
    }

    public void setLetter(Letter letter) {
        this.letter = letter;
    }
}




