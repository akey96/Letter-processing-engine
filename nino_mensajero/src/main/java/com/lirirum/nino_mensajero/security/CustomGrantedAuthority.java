package com.lirirum.nino_mensajero.security;

import java.io.Serializable;

import org.springframework.security.core.GrantedAuthority;

public class CustomGrantedAuthority implements GrantedAuthority, Serializable {

    private String name;

    public CustomGrantedAuthority(String name) {
        this.name = name;
    }

    @Override
    public String getAuthority() {
        return name;
    }

}