package com.devteam.backend.gestvet.security.services;

import com.devteam.backend.gestvet.model.Venda;

import java.util.List;

public interface VendaService {
    Venda create(Venda venda);

    Venda delete(Long id);

    List<Venda> findAll();

    Venda findById(Long id);

    Venda upgrade(Venda venda);
}
