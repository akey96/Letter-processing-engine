package com.lirirum.nino_mensajero.content;

import com.lirirum.nino_mensajero.user.Person;

import java.util.Date;

public class ContentDTO {

    public long id;
    public String content;
    public Date creationDate;
    public Person person;
    public Iterable<Long> letters;
}
