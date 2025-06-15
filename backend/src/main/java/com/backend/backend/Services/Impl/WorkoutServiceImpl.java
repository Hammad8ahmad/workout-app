package com.backend.backend.Services.Impl;

import com.backend.backend.Domain.Entity.Workout;
import com.backend.backend.Repository.WorkoutRepository;
import com.backend.backend.Services.WorkoutService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutServiceImpl implements WorkoutService {
    private final WorkoutRepository workoutRepository;

    public WorkoutServiceImpl(WorkoutRepository workoutRepository) {
        this.workoutRepository = workoutRepository;
    }


    @Override
    public List<Workout> ListOfWorkouts() {
        return workoutRepository.findAll();
    }

    @Override
    public Workout CreateWorkout(Workout workout) {
        if(null != workout.getId()){}
        throw  new IllegalArgumentException("Workout already has an id!");
        return null ;
    }
}
