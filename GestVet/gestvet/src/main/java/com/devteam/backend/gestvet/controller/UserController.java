package com.devteam.backend.gestvet.controller;

import com.devteam.backend.gestvet.model.User;
import com.devteam.backend.gestvet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/get-by-username")
    @ResponseBody
    public User getByUsername(String email) {
        User user;
        try {
            user = userRepository.findByUsername(email).get();
        }
        catch (Exception ex) {
            return null;
        }
        return user;
    }
}
