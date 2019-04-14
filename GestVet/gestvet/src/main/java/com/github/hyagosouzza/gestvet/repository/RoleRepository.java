package com.github.hyagosouzza.gestvet.repository;

import java.util.Optional;

import com.github.hyagosouzza.gestvet.model.Role;
import com.github.hyagosouzza.gestvet.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}