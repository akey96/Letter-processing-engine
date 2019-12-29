package com.lirirum.nino_mensajero.user;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.lirirum.nino_mensajero.keyword.Keyword;
import lombok.Data;
import com.lirirum.nino_mensajero.letter.Letter;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;
import java.util.Set;
@EqualsAndHashCode(exclude = "assignedCards")
@Data
@Entity
@Table(name = "PERSON")

public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @NotNull
    @NotBlank
    @Column(nullable = false, unique = true)
    private String username;
    @NotNull
    @NotBlank
    @Column(nullable = true)
    private String password;
    @NotNull
    @NotBlank
    private String name;
    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String ci;
    @NotNull
    @Past
    @Column(nullable = false)
    private Date birthday;
    @NotNull
    @NotBlank
    @Column( nullable = false)
    private String email;

    private String keywords;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PersonRole personRole;
    @Enumerated(EnumType.STRING)
    private PersonStatus personStatus;
    @JsonIgnoreProperties("responsable")
    @OneToMany(mappedBy = "responsable", cascade = CascadeType.ALL)
    private Set<Letter> assignedCards;

    @JsonIgnoreProperties("personSet")
    @ManyToMany(mappedBy = "personSet")
    private Set<Keyword> keywordSet;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCi() {
        return ci;
    }

    public void setCi(String ci) {
        this.ci = ci;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public PersonRole getPersonRole() {
        return personRole;
    }

    public void setPersonRole(PersonRole personRole) {
        this.personRole = personRole;
    }

    public PersonStatus getPersonStatus() {
        return personStatus;
    }

    public void setPersonStatus(PersonStatus personStatus) {
        this.personStatus = personStatus;
    }

    public Set<Letter> getAssignedCards() {
        return assignedCards;
    }

    public void setAssignedCards(Set<Letter> assignedCards) {
        this.assignedCards = assignedCards;
    }

    public Set<Keyword> getKeywordSet() {
        return keywordSet;
    }

    public void setKeywordSet(Set<Keyword> keywordSet) {
        this.keywordSet = keywordSet;
    }
}
