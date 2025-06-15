package com.backend.backend.Services.Impl;

import com.backend.backend.Domain.Entity.Workout;
import com.backend.backend.Repository.WorkoutRepository;
import com.backend.backend.Services.WorkoutService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

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
        if(null != workout.getId()){
        throw  new IllegalArgumentException("Workout already has an id!");
        }
        if (workout.getTitle() == null || workout.getTitle().isBlank()
                || workout.getReps() == null || workout.getLoad() == null){
            throw new IllegalArgumentException("Workout must contain all the fields!");
        };
        LocalDateTime now = LocalDateTime.now();
        return workoutRepository.save(new Workout(
                null,
                workout.getTitle(),
                workout.getReps(),
                workout.getLoad(),
                now,
                now,
                now
        ));
    }

    @Override
    public void DeleteWorkout(UUID Id) {
        workoutRepository.deleteById(Id);
    }
}
