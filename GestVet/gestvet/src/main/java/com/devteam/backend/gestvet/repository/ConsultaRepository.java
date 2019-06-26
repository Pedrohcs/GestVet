package com.devteam.backend.gestvet.repository;

import com.devteam.backend.gestvet.model.Consulta;
import com.devteam.backend.gestvet.model.Animal;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ConsultaRepository extends Repository<Consulta, Integer> {

    Consulta save(Consulta consulta);

    List<Consulta> findAll();

    Consulta findById(Long id);

    void delete(Consulta consulta);

    List<Consulta> findByAnimal(Animal animal);
}
