package com.backend.backend.Services;

import com.backend.backend.Domain.Entity.Workout;

import java.util.List;
import java.util.UUID;

public interface WorkoutService {
    List<Workout> ListOfWorkouts();
    Workout CreateWorkout(Workout workout);
    void DeleteWorkout(UUID Id);
    Workout UpdateWorkout(UUID Id, Workout workout);
}
