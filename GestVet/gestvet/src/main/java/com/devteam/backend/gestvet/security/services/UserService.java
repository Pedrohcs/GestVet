package com.devteam.backend.gestvet.security.services;

import com.devteam.backend.gestvet.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User create(User user);

    List<User> findAll();

    Optional<User> findById(Long id);

    User findByName(String name);

    User upgrade(User user);
}
