package com.devteam.backend.gestvet.repository;

import java.util.List;
import java.util.Optional;

import com.devteam.backend.gestvet.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findById(Long id);
    User findByName(String name);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    List<User> findByCrmvIsNotNull();
}