package com.example.demo.repository;

import com.example.demo.model.DemoUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemoRepository extends JpaRepository<DemoUser,Long> {
    DemoUser findByUsername(String username);
}
