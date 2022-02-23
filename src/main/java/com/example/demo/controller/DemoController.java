package com.example.demo.controller;


import com.example.demo.model.DemoUser;
import com.example.demo.repository.DemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class DemoController {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private DemoRepository demoRepository;

    @PostMapping("/signup")
    public String addUser(@RequestBody DemoUser demoUser){
        String pwd=demoUser.getPassword();
        String encryptedPwd=passwordEncoder.encode(pwd);
        demoUser.setPassword(encryptedPwd);
        demoRepository.save(demoUser);
        return  "user added successfully";

    }
}
