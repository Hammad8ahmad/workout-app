package com.backend.backend.Domain.Dtos;

import java.time.LocalDateTime;
import java.util.UUID;

public record WorkoutDto(
        UUID Id,
        String title,
        Integer reps,
        Integer load,
        LocalDateTime dueDate
) {
}
