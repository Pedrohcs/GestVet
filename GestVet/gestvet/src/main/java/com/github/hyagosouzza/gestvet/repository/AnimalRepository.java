package com.github.hyagosouzza.gestvet.repository;

import com.github.hyagosouzza.gestvet.model.Animal;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface AnimalRepository extends Repository<Animal, Integer> {

    Animal save(Animal animal);

    List<Animal> findAll();

    Animal findOne(Long id);

    void delete(Animal animal);
}
