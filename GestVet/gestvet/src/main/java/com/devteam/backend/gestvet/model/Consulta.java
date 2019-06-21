package com.devteam.backend.gestvet.model;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.Calendar;

@Entity
@Table(name = "Consulta")
public class Consulta {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User veterinario;

    @ManyToOne
    private Animal animal;

    @Column
    private Calendar dataMarcada;

    @Column
    private String registro;

    @Column
    private boolean realizado;

    @Column
    private boolean retorno;

    @ManyToOne
    private Consulta consultaOrigem;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private Procedimento procedimento;

    public Consulta() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getVeterinario() {
        return veterinario;
    }

    public void setVeterinario(User veterinario) {
        this.veterinario = veterinario;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public Calendar getDataMarcada() {
        return dataMarcada;
    }

    public void setDataMarcada(Calendar dataMarcada) {
        this.dataMarcada = dataMarcada;
    }

    public String getRegistro() {
        return registro;
    }

    public void setRegistro(String registro) {
        this.registro = registro;
    }

    public boolean isRealizado() {
        return realizado;
    }

    public void setRealizado(boolean realizado) {
        this.realizado = realizado;
    }

    public boolean isRetorno() {
        return retorno;
    }

    public void setRetorno(boolean retorno) {
        this.retorno = retorno;
    }

    public Consulta getConsultaOrigem() {
        return consultaOrigem;
    }

    public void setConsultaOrigem(Consulta consultaOrigem) {
        this.consultaOrigem = consultaOrigem;
    }

    public Procedimento getProcedimento() {
        return procedimento;
    }

    public void setProcedimento(Procedimento procedimento) {
        this.procedimento = procedimento;
    }
}
