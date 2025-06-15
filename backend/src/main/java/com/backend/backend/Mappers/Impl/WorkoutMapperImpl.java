package com.backend.backend.Mappers.Impl;

import com.backend.backend.Domain.Dtos.WorkoutDto;
import com.backend.backend.Domain.Entity.Workout;
import com.backend.backend.Mappers.WorkoutMapper;
import org.springframework.stereotype.Component;

@Component
public class WorkoutMapperImpl implements WorkoutMapper {
    @Override
    public Workout fromDto(WorkoutDto workoutDto) {
        return new Workout(
                workoutDto.Id(),
                workoutDto.title(),
                workoutDto.reps(),
                workoutDto.load(),
                workoutDto.dueDate(),
                null,
                null
        );
    }

    @Override
    public WorkoutDto toDto(Workout workout) {
        return new WorkoutDto(
                workout.getId(),
                workout.getTitle(),
                workout.getReps(),
                workout.getLoad(),
                workout.getDueDate()
        );
    }
}
