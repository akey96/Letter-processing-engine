package com.lirirum.nino_mensajero.user;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@Entity
public class ContactInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @NotBlank
    @Column(nullable = false)
    private String reference;
    @NotNull
    @Column(nullable = false)
    private String contact;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
