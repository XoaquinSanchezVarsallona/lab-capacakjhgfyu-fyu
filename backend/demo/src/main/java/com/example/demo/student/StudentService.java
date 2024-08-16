package com.example.demo.student;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents () {
        return studentRepository.findAll();
    }

    public void addNewStudent(Student newStudent) {
        Optional<Student> student = studentRepository.findByEmail(newStudent.getEmail());
        if (student.isPresent()) {
            throw new IllegalStateException("There is already a student with that email");
        }
        studentRepository.save(newStudent);
    }

    public void deleteStudent(Long studentId) {
        boolean studentExists = studentRepository.existsById(studentId);
        if (studentExists) {
            studentRepository.deleteById(studentId);
        }
        else throw new IllegalStateException("Student with id:"+ studentId + "does not exist");
    }

    @Transactional
    public void updateStudent(Long id, String name, String email) {
        Student student = studentRepository.findById(id).orElseThrow(() -> new IllegalStateException("Student with id:"+ id + "does not exist"));

        if (name != null && !name.isEmpty() && !student.getName().equals(name)) {
            student.setName(name);
        }
        if (email != null && !email.isEmpty() && !student.getEmail().equals(email)) {
            if (studentRepository.findByEmail(email).isPresent()) throw new IllegalStateException("There is already a student with that email");
            student.setEmail(email);
        }
    }
}
