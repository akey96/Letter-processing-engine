package com.lirirum.nino_mensajero;

import com.lirirum.nino_mensajero.content.Content;
import com.lirirum.nino_mensajero.letter.Letter;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class GlobalRepositoryRestConfigurer extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Content.class, Letter.class);
        config.getCorsRegistry()
                .addMapping("/**")
                .allowedOrigins("*")
                .allowedHeaders("*")
                .allowedMethods("POST", "GET", "DELETE", "PUT", "PATCH");
        config.exposeIdsFor(Letter.class);
    }

}
