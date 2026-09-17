package com.shubham.legalease_backend.repository;

import com.shubham.legalease_backend.entity.Lawyer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LawyerRepository extends JpaRepository<Lawyer, Long> {

    List<Lawyer> findByCity(String city);

    Lawyer findByEmail(String email);

}