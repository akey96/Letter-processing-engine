package com.lirirum.nino_mensajero.letter;

import com.lirirum.nino_mensajero.user.Person;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "LETTER")
@Data
public class Letter {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @NotBlank
    @NotNull
    @Column(nullable = false)
    private String message;
    @NotNull
    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date creationDate;
    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Priority priority;
    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;
    @ElementCollection
    private Set<String> images;
    private String response;
    @ManyToOne
    @JoinColumn(name = "responsable_id")
    private Person responsable;
}
