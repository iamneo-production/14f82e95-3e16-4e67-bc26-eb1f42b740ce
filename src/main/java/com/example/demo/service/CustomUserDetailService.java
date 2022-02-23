package com.example.demo.service;


import com.example.demo.model.DemoUser;
import com.example.demo.repository.DemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private DemoRepository demoRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
           DemoUser demoUser= demoRepository.findByUsername(username);
           DemoService demoService=null;
           if(demoUser!=null){
               demoService=new DemoService();
               demoService.setDemoUser(demoUser);
           }
           else{
                throw new UsernameNotFoundException("User not found");
           }
            return demoService;
    }
}
