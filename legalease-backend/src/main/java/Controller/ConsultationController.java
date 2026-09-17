package com.shubham.legalease_backend.controller;

import com.shubham.legalease_backend.entity.Consultation;
import com.shubham.legalease_backend.service.ConsultationService;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/consultations")
public class ConsultationController {

    private final ConsultationService consultationService;

    public ConsultationController(
            ConsultationService consultationService) {

        this.consultationService = consultationService;
    }

    @PostMapping
    public Consultation createConsultation(
            @RequestBody Consultation consultation) {

        consultation.setStatus("PENDING");

        return consultationService.saveConsultation(
                consultation
        );
    }

    @GetMapping("/lawyer/{lawyerId}")
    public List<Consultation> getLawyerConsultations(
            @PathVariable Long lawyerId) {

        return consultationService.getLawyerConsultations(
                lawyerId
        );
    }

    @PutMapping("/{id}/accept")
    public Consultation acceptConsultation(
            @PathVariable Long id) {

        return consultationService.acceptConsultation(id);
    }

    @PutMapping("/{id}/complete")
    public Consultation completeConsultation(
            @PathVariable Long id) {

        return consultationService.completeConsultation(id);
    }

    @GetMapping("/file/{fileName}")
    public ResponseEntity<Resource> viewFile(
            @PathVariable String fileName) throws Exception {

        Path path = Paths.get(
                System.getProperty("user.dir"),
                "uploads",
                fileName
        );

        Resource resource = new UrlResource(
                path.toUri()
        );

        return ResponseEntity.ok()
                .body(resource);
    }
}