package com.devteam.backend.gestvet.repository;

import com.devteam.backend.gestvet.model.Venda;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface VendaRepository extends Repository<Venda, Integer> {

    Venda save(Venda venda);

    List<Venda> findAll();

    Venda findById(Long id);

    void delete(Venda venda);
}