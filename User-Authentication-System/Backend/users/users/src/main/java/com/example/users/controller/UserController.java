package com.example.users.controller;
import com.example.users.entity.UserEntity;
import com.example.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.users.dto.LoginRequest;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("/signup")
    public String signup(@RequestBody UserEntity user){
        return service.registerUser(user);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        UserEntity user = service.loginUser(
                request.getEmail(),
                request.getPassword()
        );

        if(user != null) {
            return ResponseEntity.ok(user);
        }

        return ResponseEntity.badRequest()
                .body("Invalid Credentials");
    }
}

