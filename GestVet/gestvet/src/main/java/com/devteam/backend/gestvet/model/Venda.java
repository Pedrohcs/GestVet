package com.devteam.backend.gestvet.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "vendas")
public class Venda {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToMany(mappedBy = "vendas")
    private List<Medicamento> medicamentos; // Referência a um medicamento e quantidade de vendidos.

    public List<Medicamento> getMedicamentos() {
        return medicamentos;
    }

    public void setMedicamentos(List<Medicamento> medicamentos) {
        this.medicamentos = medicamentos;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

}