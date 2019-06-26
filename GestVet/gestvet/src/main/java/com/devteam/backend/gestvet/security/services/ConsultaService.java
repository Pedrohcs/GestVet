package com.devteam.backend.gestvet.security.services;

import com.devteam.backend.gestvet.model.Consulta;
import com.devteam.backend.gestvet.model.Animal;

import java.util.List;


public interface ConsultaService {
    Consulta create(Consulta consulta);

    Consulta delete(Long id);

    List<Consulta> findAll();

    Consulta findById(Long id);

    Consulta update(Consulta consulta);

    List<Consulta> findByAnimal(Long idAnimal);
}
