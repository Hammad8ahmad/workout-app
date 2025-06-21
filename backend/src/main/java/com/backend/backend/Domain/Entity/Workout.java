package com.backend.backend.Domain.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "workouts")

/* AllArgsConstructor,NoArgsConstructor,Getters,setters,hashcode,
constructors and tostring for the workout entity
*/

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(updatable = false,nullable = false)
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Integer reps;

    @Column(nullable = false)
    private Integer load;

    @Column(nullable = false,updatable = false)
    private OffsetDateTime dueDate;

    @Column
    private OffsetDateTime createdAt;

    @Column
    private OffsetDateTime updatedAt;


}
