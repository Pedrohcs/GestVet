package com.github.hyagosouzza.gestvet.security.services;

import com.github.hyagosouzza.gestvet.model.Animal;
import com.github.hyagosouzza.gestvet.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalServiceImpl implements AnimalService{
    @Autowired
    private AnimalRepository repository;

    @Override
    public Animal create(Animal animal) {
        return repository.save(animal);
    }

    @Override
    public Animal delete(Long id) {
        Animal animal = findById(id);
        if(animal != null){
            repository.delete(animal);
        }
    }

    @Override
    public List<Animal> findAll() {
        return repository.findAll();
    }

    @Override
    public Animal findById(Long id){
        return repository.findOne(id);
    }

    @Override
    public Animal upgrade(Animal animal) {
        return repository.save(animal);
    }
}
