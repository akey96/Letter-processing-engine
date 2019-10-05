package com.lirirum.nino_mensajero.user;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;

@Data
@Entity
@Table(name = "PERSON")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @NotBlank
    @NotNull
    private String name;
    @NotNull
    @NotBlank
    @Column(unique = true, nullable = false)
    private String email;
    @Past
    private Date birthday;
    @NotNull
    private String username;
    @NotNull
    private String password;
    @Enumerated(EnumType.STRING)
    private PersonRole userRole;
    @Enumerated(EnumType.STRING)
    private PersonStatus userStatus;
}
