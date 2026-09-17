package com.shubham.legalease_backend.service;

import com.shubham.legalease_backend.entity.Lawyer;
import com.shubham.legalease_backend.repository.LawyerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LawyerService {

    private final LawyerRepository lawyerRepository;

    public LawyerService(LawyerRepository lawyerRepository) {
        this.lawyerRepository = lawyerRepository;
    }

    // Get all lawyers
    public List<Lawyer> getAllLawyers() {
        return lawyerRepository.findAll();
    }

    // Get lawyer by ID
    public Lawyer getLawyerById(Long id) {
        return lawyerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Lawyer not found"));
    }

    // Add new lawyer
    public Lawyer saveLawyer(Lawyer lawyer) {
        return lawyerRepository.save(lawyer);
    }

    // Update lawyer
    public Lawyer updateLawyer(Long id, Lawyer lawyerDetails) {

        Lawyer lawyer = lawyerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Lawyer not found"));

        lawyer.setName(lawyerDetails.getName());
        lawyer.setEmail(lawyerDetails.getEmail());
        lawyer.setPhone(lawyerDetails.getPhone());
        lawyer.setSpecialization(lawyerDetails.getSpecialization());
        lawyer.setCity(lawyerDetails.getCity());
        lawyer.setExperience(lawyerDetails.getExperience());
        lawyer.setLanguages(lawyerDetails.getLanguages());
        lawyer.setConsultationFee(lawyerDetails.getConsultationFee());
        lawyer.setBio(lawyerDetails.getBio());

        return lawyerRepository.save(lawyer);
    }

    // Delete lawyer
    public void deleteLawyer(Long id) {
        lawyerRepository.deleteById(id);
    }

    // Get lawyers by city
    public List<Lawyer> getLawyersByCity(String city) {
        return lawyerRepository.findByCity(city);
    }

    // Lawyer Login
    public Lawyer login(String email, String phone) {

        System.out.println("EMAIL = " + email);
        System.out.println("PHONE = " + phone);

        Lawyer lawyer = lawyerRepository.findByEmail(email);

        System.out.println("LAWYER = " + lawyer);

        if (lawyer == null) {
            return null;
        }

        System.out.println("DB PHONE = " + lawyer.getPhone());

        if (lawyer.getPhone() == null) {
            return null;
        }

        if (!lawyer.getPhone().equals(phone)) {
            return null;
        }

        return lawyer;
    }
}
