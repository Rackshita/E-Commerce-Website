package com.vamanproject2.ecom.entity;


import com.vamanproject2.ecom.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String name;
    private UserRole role;
    //private byte[] img;

    @Lob
    @Column(columnDefinition = "longblob")
    private byte[] img;

}
