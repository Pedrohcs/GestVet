package com.devteam.backend.gestvet.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "vendas")
public class Venda {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name="medicamento_id")
    private Medicamento medicamento;

    @NotNull
    @ManyToOne
    @JoinColumn(name="animal_id")
    private Animal animal;

    @NotNull
    @ManyToOne
    @JoinColumn(name="user_id")
    private User vendedor;

    @NotNull
    private int quantidade;

    @Temporal(TemporalType.DATE)
    private Date data;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Medicamento getMedicamento() {
        return medicamento;
    }

    public void setMedicamento(Medicamento medicamento) {
        this.medicamento = medicamento;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public User getVendedor() {
        return vendedor;
    }

    public void setVendedor(User vendedor) {
        this.vendedor = vendedor;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }


    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

}