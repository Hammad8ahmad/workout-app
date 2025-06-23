package com.backend.backend.Domain.Dtos;

import com.backend.backend.Domain.Entity.Category;
import com.backend.backend.Domain.Entity.TargetMuscle;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.UUID;

public record WorkoutDto(
        UUID id,
        String title,
        Integer reps,
        Integer load,
        OffsetDateTime dueDate,
        Category category,
        TargetMuscle targetMuscle
) {
}
