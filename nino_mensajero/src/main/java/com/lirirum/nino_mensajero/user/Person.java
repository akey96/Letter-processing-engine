package com.lirirum.nino_mensajero.user;

import com.lirirum.nino_mensajero.letter.Letter;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;
import java.util.Set;

@Data
@Entity
@Table(name = "PERSON")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String name;
    @NotNull
    @NotBlank
    @Column(nullable = false, unique = true)
    private String ci;
    @NotNull
    @Past
    @Column(nullable = false)
    private Date birthday;
    @NotNull
    @NotBlank
    @Column( nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PersonRole personRole;
    @Enumerated(EnumType.STRING)
    private PersonStatus personStatus;
    @OneToMany(mappedBy = "responsable", cascade = CascadeType.ALL)
    private Set<Letter> assignedCards;
}
