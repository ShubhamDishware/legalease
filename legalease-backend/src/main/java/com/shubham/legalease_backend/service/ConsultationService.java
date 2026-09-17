package com.shubham.legalease_backend.service;

import com.shubham.legalease_backend.entity.Consultation;
import com.shubham.legalease_backend.repository.ConsultationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultationService {

    private final ConsultationRepository consultationRepository;

    public ConsultationService(
            ConsultationRepository consultationRepository) {
        this.consultationRepository = consultationRepository;
    }

    public Consultation saveConsultation(
            Consultation consultation) {

        return consultationRepository.save(consultation);
    }

    public List<Consultation> getLawyerConsultations(
            Long lawyerId) {

        return consultationRepository.findByLawyerId(lawyerId);
    }

    public Consultation acceptConsultation(Long id) {

        Consultation consultation =
                consultationRepository.findById(id)
                        .orElseThrow();

        consultation.setStatus("ACCEPTED");

        return consultationRepository.save(
                consultation
        );
    }

    public Consultation completeConsultation(Long id) {

        Consultation consultation =
                consultationRepository.findById(id)
                        .orElseThrow();

        consultation.setStatus("COMPLETED");

        return consultationRepository.save(
                consultation
        );
    }
}