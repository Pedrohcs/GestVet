package com.devteam.backend.gestvet.security.services;

import com.devteam.backend.gestvet.model.Venda;
import com.devteam.backend.gestvet.repository.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendaServiceImpl implements VendaService {

    @Autowired
    private VendaRepository repository;

    @Override
    public Venda create(Venda venda) {
        return repository.save(venda);
    }

    @Override
    public Venda delete(Long id) {
        Venda venda = findById(id);
        if(venda != null){
            repository.delete(venda);
        }
        return venda;
    }

    @Override
    public List<Venda> findAll() {
        return repository.findAll();
    }

    @Override
    public Venda findById(Long id){
        return repository.findById(id);
    }

    @Override
    public Venda upgrade(Venda venda) {
        return repository.save(venda);
    }
}
