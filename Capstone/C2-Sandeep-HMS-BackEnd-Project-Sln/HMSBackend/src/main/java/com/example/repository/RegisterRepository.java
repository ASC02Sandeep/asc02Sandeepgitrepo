package com.example.repository;

import com.example.entity.Register;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RegisterRepository extends JpaRepository<Register,Integer> {
}
