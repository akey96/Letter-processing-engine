package com.lirirum.nino_mensajero.user;


import lombok.Data;
import com.lirirum.nino_mensajero.letter.Letter;
import com.lirirum.nino_mensajero.profile.Profile;
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
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(
            name = "PERSON-PROFILE",
            joinColumns = @JoinColumn(name = "person_id"),
            inverseJoinColumns = @JoinColumn(name = "profile_id"))
    private Set<Profile> profiles;
}
