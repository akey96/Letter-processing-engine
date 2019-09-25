package com.lirirum.nino_mensajero.user;

import com.lirirum.nino_mensajero.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UserRepository  extends JpaRepository<User, Long> {
}
