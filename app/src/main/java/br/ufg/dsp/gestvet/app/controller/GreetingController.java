package br.ufg.dsp.gestvet.app.controller;

import br.ufg.dsp.gestvet.app.services.FirestoreServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GreetingController {

    @Autowired
    FirestoreServices firestoreServices;

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="User") String name, Model model) {
        model.addAttribute("name", firestoreServices.getUser());
        return "greeting";
    }
}