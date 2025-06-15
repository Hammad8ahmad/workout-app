package com.backend.backend.Services;

import com.backend.backend.Domain.Entity.Workout;

import java.util.List;

public interface WorkoutService {
    List<Workout> ListOfWorkouts();
    Workout CreateWorkout(Workout workout);
}
