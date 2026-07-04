package com.example.users.service;
import com.example.users.entity.UserEntity;
import com.example.users.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    public String registerUser(UserEntity user){
        if(repo.findByEmail(user.getEmail()).isPresent()){
            return "User Already Exists";
        }
        repo.save(user);
        return "User registered successfully";
    }
    public UserEntity loginUser(String email, String password) {

        Optional<UserEntity> user = repo.findByEmail(email);

        if(user.isPresent() &&
                user.get().getPassword().equals(password)) {

            return user.get();
        }

        return null;
    }
}
