package com.backend.backend.Mappers.Impl;

import com.backend.backend.Domain.Dtos.WorkoutDto;
import com.backend.backend.Domain.Entity.Workout;
import com.backend.backend.Mappers.WorkoutMapper;
import org.springframework.stereotype.Component;

import java.time.OffsetDateTime;
import java.time.ZoneId;

@Component
public class WorkoutMapperImpl implements WorkoutMapper {

    @Override
    public Workout fromDto(WorkoutDto workoutDto) {
        // Ensure dueDate is not null and convert it to OffsetDateTime in Asia/Karachi
        OffsetDateTime dueDate = workoutDto.dueDate() != null
                ? workoutDto.dueDate().atZoneSameInstant(ZoneId.of("Asia/Karachi")).toOffsetDateTime()
                : OffsetDateTime.now(ZoneId.of("Asia/Karachi"));

        return new Workout(
                workoutDto.Id(),
                workoutDto.title(),
                workoutDto.reps(),
                workoutDto.load(),
                dueDate,
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
                workout.getDueDate() != null
                        ? workout.getDueDate().withOffsetSameInstant(ZoneId.of("Asia/Karachi").getRules().getOffset(workout.getDueDate().toInstant()))
                        : null
        );
    }
}
