package com.backend.backend.Controllers;

import com.backend.backend.Domain.Dtos.WorkoutDto;
import com.backend.backend.Domain.Entity.Workout;
import com.backend.backend.Mappers.WorkoutMapper;
import com.backend.backend.Services.WorkoutService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/workouts")
public class WorkoutController {
    private final WorkoutService workoutService;
    private final WorkoutMapper workoutMapper;

    public WorkoutController(WorkoutService workoutService, WorkoutMapper workoutMapper) {
        this.workoutService = workoutService;
        this.workoutMapper = workoutMapper;
    }

    @GetMapping
    public List<WorkoutDto> ListOfWorkouts(){
        return workoutService.ListOfWorkouts()
                .stream()
                .map(workoutMapper::toDto)
                .toList();
    }

    @PostMapping
    public WorkoutDto createWorkout(@RequestBody WorkoutDto workoutDto){
       Workout createdWorkout =  workoutService.CreateWorkout(workoutMapper.fromDto(workoutDto));
       return workoutMapper.toDto(createdWorkout);
    }


}
