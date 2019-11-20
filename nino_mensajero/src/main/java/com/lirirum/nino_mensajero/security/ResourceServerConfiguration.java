package com.lirirum.nino_mensajero.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.provider.error.OAuth2AccessDeniedHandler;

@Configuration
@EnableResourceServer
public class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {
    private static String EVERY_ROLE = "hasRole('ADMINISTRATOR') or hasRole('REDACTOR') or hasRole('EDITOR')";
    private static String ADMIN = "hasRole('ADMINISTRATOR')";
    private static String REDACTOR = "hasRole('REDACTOR')";
    private static String EDITOR = "hasRole('EDITOR')";
    private static String ADMIN_REDACTOR = "hasRole('ADMINISTRATOR') or hasRole('REDACTOR')";
    private static String ADMIN_EDITOR = "hasRole('ADMINISTRATOR') or hasRole('EDITOR')";
    private static String REDACTOR_EDITOR = "hasRole('REDACTOR') or hasRole('EDITOR')";

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.
                anonymous().disable()
                .requestMatchers().antMatchers("/persons/**")
                .and().authorizeRequests()
                .antMatchers(HttpMethod.GET,"/persons/**").access(EVERY_ROLE)
                .antMatchers(HttpMethod.POST,"/persons/**").access(ADMIN)
                .antMatchers(HttpMethod.PUT, "/letters/**").access(REDACTOR_EDITOR)
                .antMatchers(HttpMethod.GET, "/letters/**").access(REDACTOR_EDITOR)
                .and().exceptionHandling().accessDeniedHandler(new OAuth2AccessDeniedHandler());
    }
}
