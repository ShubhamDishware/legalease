package com.shubham.legalease_backend.repository;

import com.shubham.legalease_backend.entity.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsultationRepository
        extends JpaRepository<Consultation, Long> {

    List<Consultation> findByLawyerId(Long lawyerId);
}