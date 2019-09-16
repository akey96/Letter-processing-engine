package com.lirirum.nino_mensajero.user;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;
import java.util.Date;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @NotBlank
    private String Name;
    @Past
    private Date birthday;
    @Email
    @NotBlank
    private String primaryEmail;
    @OneToOne
    private UserCredentials userCredentials;
    @OneToOne
    private ContactInformation contactInformation;
}
