package com.lirirum.nino_mensajero.security;

import com.lirirum.nino_mensajero.user.Person;
import com.lirirum.nino_mensajero.user.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Person person = personRepository.findByUsername(username).get();
        if (person != null) {
            CustomUserDetails customUserDetails = new CustomUserDetails();
            customUserDetails.setUserName(person.getUsername());
            customUserDetails.setPassword(person.getPassword());
            Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
            authorities.add(new CustomGrantedAuthority(person.getPersonRole().toString()));
            customUserDetails.setGrantedAuthorities(authorities);
            return customUserDetails;
        }
        throw new UsernameNotFoundException(username);
    }
}
