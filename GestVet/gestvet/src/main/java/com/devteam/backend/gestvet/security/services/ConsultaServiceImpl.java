package com.devteam.backend.gestvet.security.services;

import com.devteam.backend.gestvet.model.Consulta;
import com.devteam.backend.gestvet.model.Animal;
import com.devteam.backend.gestvet.repository.ConsultaRepository;
import com.devteam.backend.gestvet.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultaServiceImpl implements ConsultaService {
    @Autowired
    private ConsultaRepository repository;

    @Autowired
    private AnimalRepository animalRepository;

    @Override
    public Consulta create(Consulta consulta) {
        return repository.save(consulta);
    }

    @Override
    public Consulta delete(Long id) {
        Consulta consulta = findById(id);
        if(consulta != null){
            repository.delete(consulta);
        }
        return consulta;
    }

    @Override
    public List<Consulta> findAll() {
        return repository.findAll();
    }

    @Override
    public Consulta findById(Long id){
        return repository.findById(id);
    }

    @Override
    public Consulta update(Consulta consulta) {
        return repository.save(consulta);
    }

    @Override
    public List<Consulta> findByAnimal(Long idAnimal) {
        Animal animal = animalRepository.findById(idAnimal);
        return repository.findByAnimal(animal);
    }
}
