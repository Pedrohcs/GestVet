package com.devteam.backend.gestvet.controller;

import com.devteam.backend.gestvet.model.User;
import com.devteam.backend.gestvet.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/api/users"})
public class UserController {

        @Autowired
        private UserService userService;

        @PostMapping
        public User create(@RequestBody User user){
            return userService.create(user);
        }

        @PutMapping(path = {"/{id}"})
        public User upgrade(@PathVariable("id") Long id, @RequestBody User user){
            user.setId(id);
            return userService.upgrade(user);
        }

        @GetMapping(path = {"/{id}"})
        public User findById(@PathVariable("id") Long id){
            return userService.findById(id).get();
        }

        @GetMapping(path = {"/{name}"})
        public User findByName(@PathVariable("name") String name){
        return userService.findByName(name);
    }

        @GetMapping
        public List<User> findAll(){
            return userService.findAll();
        }
}
