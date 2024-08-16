package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;

@Configuration
public class StundentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student xoaco = new Student(
                    "xoaco",
                    "xoaco@gmail.com",
                    LocalDate.of(2003, Month.SEPTEMBER, 10)
            );

            repository.save(xoaco);
        };

    }
}
