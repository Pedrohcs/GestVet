package com.devteam.backend.gestvet.controller;

import com.devteam.backend.gestvet.model.Consulta;
import com.devteam.backend.gestvet.security.services.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/api/auth/consultas"})
public class ConsultaController {

        @Autowired
        private ConsultaService consultaService;

        @PostMapping
        public Consulta create(@RequestBody Consulta consulta){
            return consultaService.create(consulta);
        }

        @GetMapping(path = {"/{id}"})
        public Consulta upgrade(@PathVariable("id") Long id, @RequestBody Consulta consulta){
            consulta.setId(id);
            return consultaService.upgrade(consulta);
        }

        @DeleteMapping(path = {"/{id}"})
        public Consulta delete(@PathVariable("id") Long id){
            return consultaService.delete(id);
        }

        @GetMapping
        public List<Consulta> findAll(){
            return consultaService.findAll();
        }


}
