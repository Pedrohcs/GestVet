package com.devteam.backend.gestvet.controller;

import com.devteam.backend.gestvet.model.Venda;
import com.devteam.backend.gestvet.security.services.VendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class VendaController {

    @Autowired
    private VendaService vendaService;

    @PostMapping
    public Venda create(@RequestBody Venda venda){
        return vendaService.create(venda);
    }

    @GetMapping(path = {"/{id}"})
    public Venda upgrade(@PathVariable("id") Long id, @RequestBody Venda venda) {
        venda.setId(id);
        return vendaService.upgrade(venda);
    }

    @DeleteMapping(path = {"/{id}"})
    public Venda delete(@PathVariable("id") Long id){
        return vendaService.delete(id);
    }

    @GetMapping
    public List<Venda> findAll(){
        return vendaService.findAll();
    }
}


