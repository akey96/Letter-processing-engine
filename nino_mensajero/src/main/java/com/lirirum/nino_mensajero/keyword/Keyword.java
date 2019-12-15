package com.lirirum.nino_mensajero.keyword;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.lirirum.nino_mensajero.user.Person;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.Set;
@EqualsAndHashCode(exclude = "personSet")
@Data
@Entity
@Table(name = "KEYWORD")
public class Keyword {

    @Id
    private String keyword;

    @JsonIgnoreProperties("keywordSet")
    @ManyToMany
    @JoinTable(
            name = "keyword_person",
            joinColumns = @JoinColumn(name= "keyword"),
            inverseJoinColumns = @JoinColumn(name = "id"))
    Set<Person> personSet;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public Set<Person> getPersonSet() {
        return personSet;
    }

    public void setPersonSet(Set<Person> personSet) {
        this.personSet = personSet;
    }
}
