package com.shubham.legalease_backend.controller;
import com.shubham.legalease_backend.dto.LoginRequest;
import com.shubham.legalease_backend.entity.Lawyer;
import com.shubham.legalease_backend.service.LawyerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/lawyers")
public class LawyerController {

    private final LawyerService lawyerService;

    public LawyerController(LawyerService lawyerService) {
        this.lawyerService = lawyerService;
    }

    @GetMapping
    public List<Lawyer> getAllLawyers() {
        return lawyerService.getAllLawyers();
    }

    @GetMapping("/{id}")
    public Lawyer getLawyerById(@PathVariable Long id) {
        return lawyerService.getLawyerById(id);
    }

    @GetMapping("/city/{city}")
    public List<Lawyer> getLawyersByCity(@PathVariable String city) {
        return lawyerService.getLawyersByCity(city);
    }

    @PostMapping
    public Lawyer addLawyer(@RequestBody Lawyer lawyer) {
        return lawyerService.saveLawyer(lawyer);
    }

    @PutMapping("/{id}")
    public Lawyer updateLawyer(
            @PathVariable Long id,
            @RequestBody Lawyer lawyer) {

        return lawyerService.updateLawyer(id, lawyer);
    }

    @DeleteMapping("/{id}")
    public void deleteLawyer(@PathVariable Long id) {
        lawyerService.deleteLawyer(id);
    }
    @PostMapping("/login")
    public Lawyer login(@RequestBody LoginRequest request) {

        return lawyerService.login(
                request.getEmail(),
                request.getPhone()
        );
    }
}