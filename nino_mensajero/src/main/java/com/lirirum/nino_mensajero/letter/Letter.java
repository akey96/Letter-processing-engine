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


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }


    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Set<String> getImages() {
        return images;
    }

    public void setImages(Set<String> images) {
        this.images = images;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public Person getResponsable() {
        return responsable;
    }

    public void setResponsable(Person responsable) {
        this.responsable = responsable;
    }

}
