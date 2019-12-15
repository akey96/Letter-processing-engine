package com.lirirum.nino_mensajero.keyword;

import com.lirirum.nino_mensajero.user.Person;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;
@Data
@Entity
@Table(name = "KEYWORD")
public class Keyword {

    @Id
    private String keyword;

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
