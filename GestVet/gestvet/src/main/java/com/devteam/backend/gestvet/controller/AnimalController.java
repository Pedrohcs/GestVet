package com.github.hyagosouzza.gestvet.controller;

import com.github.hyagosouzza.gestvet.model.Animal;
import com.github.hyagosouzza.gestvet.security.services.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/animais"})
public class AnimalController {
    @Autowired
    private AnimalService animalService;

    @PostMapping
    public Animal create(@RequestBody Animal animal){
        return animalService.create(animal);
    }

    @GetMapping(path = {"/{id}"})
    public Animal upgrade(@PathVariable("id") Long id, @RequestBody Animal animal){
        animal.setId(id);
        return animalService.upgrade(animal);
    }

    @DeleteMapping(path = {"/{id}"})
    public Animal delete(@PathVariable("id") Long id){
        return animalService.delete(id);
    }

    @GetMapping
    public List<Animal> findAll(){
        return animalService.findAll();
    }
}
