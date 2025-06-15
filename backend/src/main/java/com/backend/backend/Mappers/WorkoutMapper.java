package com.backend.backend.Mappers;

import com.backend.backend.Domain.Dtos.WorkoutDto;
import com.backend.backend.Domain.Entity.Workout;

public interface WorkoutMapper {

    Workout fromDto( WorkoutDto workoutDto);
    WorkoutDto toDto( Workout workout);
}
