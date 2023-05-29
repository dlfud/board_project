package com.board.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false)
    private String content;

    @Column(unique=true, nullable=false)
    private String userName;

    @Column()
    private LocalDateTime createDate;

    @Column()
    private LocalDateTime updateDate;

}
