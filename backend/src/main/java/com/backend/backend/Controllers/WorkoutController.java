package com.backend.backend.Controllers;

import com.backend.backend.Domain.Dtos.WorkoutDto;
import com.backend.backend.Domain.Entity.Workout;
import com.backend.backend.Mappers.WorkoutMapper;
import com.backend.backend.Repository.WorkoutRepository;
import com.backend.backend.Services.WorkoutService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;



@CrossOrigin(
        originPatterns = {"https://workout-app-ten-ashen.vercel.app","https://my-train-log.vercel.app", "http://localhost:3000"},
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS},
        allowedHeaders = "*",
        allowCredentials = "false" // ✅ You’re not using cookies, so this can be false
)
@RestController
@RequestMapping(path = "/workouts")
public class WorkoutController {
    private final WorkoutService workoutService;
    private final WorkoutMapper workoutMapper;

    public WorkoutController(WorkoutService workoutService, WorkoutMapper workoutMapper) {
        this.workoutService = workoutService;
        this.workoutMapper = workoutMapper;
    }
//   Get all workouts

    @GetMapping
    public List<WorkoutDto> ListOfWorkouts(){
        return workoutService.ListOfWorkouts()
                .stream()
                .map(workoutMapper::toDto)
                .toList();
    }

//    Creata a new workout

    @PostMapping
    public WorkoutDto createWorkout(@RequestBody WorkoutDto workoutDto){
       Workout createdWorkout =  workoutService.CreateWorkout(workoutMapper.fromDto(workoutDto));
       return workoutMapper.toDto(createdWorkout);
    }

//   Delete a workout

    @DeleteMapping(path = "/{workout_id}")
    public void  deleteWorkout(@PathVariable("workout_id") UUID id){
        workoutService.DeleteWorkout(id);
    }
//   Update a workout

    @PutMapping(path = "/{workout_id}")
    public WorkoutDto updatedWorkout(
            @PathVariable("workout_id") UUID id,
            @RequestBody WorkoutDto workoutDto
    ){
       Workout updatedWorkout =  workoutService.UpdateWorkout(id,workoutMapper
               .fromDto(workoutDto));
       return workoutMapper.toDto(updatedWorkout);
    }


}

